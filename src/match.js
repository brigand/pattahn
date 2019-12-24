const { Match, Condition } = require('./core');
const RcMap = require('./rcMap');
const Test = require('./cond/Test');
const Eq = require('./cond/Eq');

let counter = 10000000;
const MATCHERS = new RcMap();

Condition._overrideToString((condition) => {
  const id = `__matchany_matcher_${++counter}`;
  MATCHERS.entry(id).orInsert(condition);
  return id;
});

function match(...values) {
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
    if (maybeMatch && maybeMatch.values) {
      if (typeof consequent === 'function') {
        result = new Match(consequent(...maybeMatch.values));
      } else {
        result = new Match(consequent);
      }

      break;
    }
  }

  for (const entry of toDrop) {
    entry.drop();
  }

  if (result) {
    return result.values[0];
  }

  return;
}

module.exports = match;
