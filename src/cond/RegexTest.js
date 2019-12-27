const { Match } = require('../core');
const { class: RegexBase } = require('./RegexBase');

class RegexTest extends RegexBase {
  constructor(...args) {
    super('RegexTest', ...args);
  }

  implRegex(arg, ...args) {
    return this.pattern.test(arg) ? new Match(arg, ...args) : null;
  }
}

module.exports = RegexTest.factory;
