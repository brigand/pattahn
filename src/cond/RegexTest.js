const { Match, Condition } = require('../core');

class RegexTest extends Condition {
  /**
   * Simple identity condition.
   */
  constructor(pattern, ...rest) {
    super('RegexTest');

    if (typeof pattern === 'string') {
      this.pattern = new RegExp(pattern, 'g');
    } else if (
      // Allows RegexTest`\d+`
      pattern &&
      pattern.raw &&
      typeof pattern.raw[0] === 'string'
    ) {
      return new RegexTest(String.raw(pattern, ...rest));
    } else {
      this.pattern = pattern;
    }
  }

  impl(arg, ...args) {
    if (typeof arg === 'number') {
      return this.impl(String(arg));
    } else if (typeof arg !== 'string') {
      return null;
    } else if (!this.pattern.test(arg)) {
      return null;
    }

    return new Match(arg, ...args);
  }

  clone() {
    return new RegexTest(this.pattern);
  }
}

module.exports = RegexTest.factory;
