const { Condition } = require('../core');

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

    this.first = Condition.from(first);
    this.second = Condition.from(second);
  }

  exec(...args) {
    return this.first.exec(...args) || this.second.exec(...args) || null;
  }

  clone() {
    return new Or(this.first, this.second);
  }
}

module.exports = Or.factory;
