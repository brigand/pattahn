const { Match, Condition } = require('../core');

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
    this.first = first;
    this.second = second;
  }

  impl(...args) {
    const m = this.first.impl(...args);
    if (m && Array.isArray(m.values)) {
      return this.second.impl(...m.values) || null;
    } else {
      return null;
    }
  }

  clone() {
    return new AndThen(this.first, this.second);
  }
}

module.exports = AndThen.factory;
