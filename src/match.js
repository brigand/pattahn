const { Condition } = require('./core');
const RcMap = require('./rcMap');
const Test = require('./cond/Test');
const Eq = require('./cond/Eq');
const chainMatch = require('./chainMatch');

let counter = 10000000;
const MATCHERS = new RcMap();

Condition._overrideToString((condition) => {
  const id = `__pattahn_matcher_${++counter}`;
  MATCHERS.entry(id).orInsert(condition);
  return id;
});

function match(...values) {
  switch (values.length) {
    case 0:
      return chainMatch();
    case 1:
      return chainMatch(values[0]);
  }

  const matchers = values.pop();
  const entries = Object.entries(matchers);

  const toDrop = [];
  const checks = entries.map(([key, consequent]) => {
    const entry = MATCHERS.entry(key);
    if (entry.exists()) {
      toDrop.push(entry);
      return [entry.get(), consequent];
    } else if (key === '_' || key === '$default') {
      const cond = Test(() => true);
      return [cond, consequent];
    } else {
      const cond = Eq(key);
      return [cond, consequent];
    }
  });

  let result = null;
  for (const [cond, consequent] of checks) {
    const maybeMatch = cond.exec(...values);
    if (maybeMatch) {
      if (typeof consequent === 'function') {
        result = [consequent(...maybeMatch)];
      } else {
        result = [consequent];
      }

      break;
    }
  }

  for (const entry of toDrop) {
    entry.drop();
  }

  if (result) {
    return result[0];
  }

  return;
}

module.exports = match;
