const { Condition } = require('../core');

class AndThen extends Condition {
  /**
   * Will execute `first`, and if it returns a match, pass that into
   * `second`, and return the result of that.
   *
   * @param {Condition} first
   * @param {Condition} second
   */
  constructor(first, second) {
    super('AndThen');
    this.first = Condition.from(first);
    this.second = Condition.from(second);
  }

  exec(...args) {
    const m = this.first.exec(...args);
    if (m) {
      return this.second.exec(...m) || null;
    } else {
      return null;
    }
  }

  clone() {
    return new AndThen(this.first, this.second);
  }
}

module.exports = AndThen.factory;
