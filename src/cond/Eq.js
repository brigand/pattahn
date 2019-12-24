const { Match, Condition } = require('../core');

class Eq extends Condition {
  constructor(expected) {
    super();
    this.expected = expected;
  }

  impl(value, ...args) {
    if (this.expected === value) {
      return new Match(value, ...args);
    } else {
      return null;
    }
  }
}

module.exports = Eq.factory;
