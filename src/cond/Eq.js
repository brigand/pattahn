const { Condition } = require('../core');

class Eq extends Condition {
  constructor(expected) {
    super();
    this.expected = expected;
  }

  exec(value, ...args) {
    const equal =
      typeof Object.is === 'function'
        ? Object.is(value, this.expected)
        : value === this.expected;

    if (equal) {
      return [value, ...args];
    } else {
      return null;
    }
  }
}

module.exports = Eq.factory;
