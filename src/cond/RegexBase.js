const { Condition } = require('../core');

class RegexBase extends Condition {
  constructor(name, pattern, ...rest) {
    super(name);

    if (typeof pattern === 'string') {
      this.pattern = new RegExp(pattern, 'g');
    } else if (
      // Allows RegexTest`\d+`
      pattern &&
      pattern.raw &&
      typeof pattern.raw[0] === 'string'
    ) {
      return new this.constructor(String.raw(pattern, ...rest));
    } else {
      this.pattern = pattern;
    }
  }

  implRegex() {
    return null;
  }

  impl(arg, ...args) {
    if (typeof arg === 'number') {
      return this.impl(String(arg));
    } else if (typeof arg !== 'string') {
      return null;
    }

    return this.implRegex(arg, ...args);
  }

  clone() {
    return new this.constructor(this.pattern);
  }
}

module.exports = RegexBase.factory;
