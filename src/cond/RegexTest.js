const { class: RegexBase } = require('./RegexBase');

class RegexTest extends RegexBase {
  constructor(...args) {
    super('RegexTest', ...args);
  }

  implRegex(arg, ...args) {
    return this.pattern.test(arg) ? [arg, ...args] : null;
  }
}

module.exports = RegexTest.factory;
