const { Match, Condition } = require('../core');

class Eq extends Condition {
  constructor(expected) {
    super();
    this.expected = expected;
  }

  impl(value, ...args) {
    const equal =
      typeof Object.is === 'function'
        ? Object.is(value, this.expected)
        : value === this.expected;

    if (equal) {
      return new Match(value, ...args);
    } else {
      return null;
    }
  }
}

module.exports = Eq.factory;
