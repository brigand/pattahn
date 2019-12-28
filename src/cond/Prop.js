const { Condition } = require('../core');

const ANY_VALUE = Symbol('pattahn::ANY_VALUE');

class Prop extends Condition {
  constructor(key, value = ANY_VALUE) {
    super();
    this.key = key;
    this.value = value;
  }

  exec(value, ...args) {
    if (value == null) {
      return null;
    }

    const propValue = value[this.key];

    if (this.value === ANY_VALUE) {
      return [propValue, ...args];
    }

    const condition = Condition.from(this.value);
    const match = condition.exec(propValue);
    if (match) {
      return [propValue, ...match];
    }

    return null;
  }
}

module.exports = Prop.factory;
