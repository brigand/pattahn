const { Match, Condition } = require('../core');

class And extends Condition {
  /**
   * Will execute `first`, and if it returns a match, pass the original
   * values into `second`, resulting in `second`'s output.
   *
   * @param {Condition} first
   * @param {Condition} second
   */
  constructor(first, second) {
    super('And');

    this.first = first;
    this.second = second;
  }

  impl(...args) {
    return (this.first.impl(...args) && this.second.impl(...args)) || null;
  }

  clone() {
    return new And(this.first, this.second);
  }
}

module.exports = And.factory;
