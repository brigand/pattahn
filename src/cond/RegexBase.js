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
      return this.constructor.factory(String.raw(pattern, ...rest));
    } else {
      this.pattern = pattern;
    }
  }

  implRegex() {
    return null;
  }

  exec(arg, ...args) {
    if (typeof arg === 'number') {
      return this.exec(String(arg), ...args);
    } else if (typeof arg !== 'string') {
      return null;
    }

    return this.implRegex(arg, ...args);
  }

  clone() {
    return this.factory(this.pattern);
  }
}

module.exports = RegexBase.factory;
