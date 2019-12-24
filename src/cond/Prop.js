const { Match, Condition } = require('../core');

const ANY_VALUE = Symbol('matchany::ANY_VALUE');

class Prop extends Condition {
  constructor(key, value = ANY_VALUE) {
    super();
    this.key = key;
    this.value = value;
  }

  impl(value, ...args) {
    if (value == null) {
      return null;
    }

    const propValue = value[this.key];

    if (this.value === ANY_VALUE) {
      return new Match(propValue, ...args);
    }

    if (propValue === this.value) {
      return new Match(propValue, ...args);
    }

    return null;
  }
}

module.exports = Prop.factory;
