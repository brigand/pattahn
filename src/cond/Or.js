const { Match, Condition } = require('../core');

class Or extends Condition {
  /**
   * Same behavior as `first || second` with a short circuit on the first
   * being a match.
   *
   * @param {Condition} first
   * @param {Condition} second
   */
  constructor(first, second) {
    super('Or');

    this.first = first;
    this.second = second;
  }

  impl(...args) {
    return this.first.impl(...args) || this.second.impl(...args) || null;
  }

  clone() {
    return new Or(this.first, this.second);
  }
}

module.exports = Or.factory;
