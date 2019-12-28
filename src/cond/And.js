const { Condition } = require('../core');

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

    this.first = Condition.from(first);
    this.second = Condition.from(second);
  }

  exec(...args) {
    return (this.first.exec(...args) && this.second.exec(...args)) || null;
  }

  clone() {
    return new And(this.first, this.second);
  }
}

module.exports = And.factory;
