const { Match, Condition } = require('../core');

class Filter extends Condition {
  /**
   * Will execute `first`, and if it returns a match, pass the original
   * values into `second`, resulting in `second`'s output.
   *
   * @param {Condition} predicate
   */
  constructor(value, predicate) {
    super('Filter');

    this.value = value;
    this.predicate = predicate;
  }

  impl(...args) {
    const m = this.value.impl(...args);
    if (m) {
      if (this.predicate.impl(...args)) {
        return m;
      }
    }
    return null;
  }

  clone() {
    return new Filter(this.first, this.second);
  }
}

module.exports = Filter.factory;
