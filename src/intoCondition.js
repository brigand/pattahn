function intoCondition(value) {
  if (Condition.isA(value)) {
    return value;
  } else if (typeof value === 'function') {
    return Test(value);
  } else if (value instanceof RegExp) {
    return RegexTest(value);
  } else if (value && typeof value === 'object') {
    return MatchObject(value);
  } else {
    return Eq(value);
  }
}

module.exports = intoCondition;

const { Condition } = require('./core');
const MatchObject = require('./cond/MatchObject');
const RegexTest = require('./cond/RegexTest');
const Test = require('./cond/Test');
const Eq = require('./cond/Eq');
