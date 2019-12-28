const { Condition } = require('../core');

class Filter extends Condition {
  /**
   * Will execute `first`, and if it returns a match, pass the original
   * values into `second`, resulting in `second`'s output.
   *
   * @param {Condition} predicate
   */
  constructor(value, predicate) {
    super('Filter');

    this.value = Condition.from(value);
    this.predicate = Condition.from(predicate);
  }

  exec(...args) {
    const m = this.value.exec(...args);
    if (m) {
      if (this.predicate.exec(...m)) {
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
