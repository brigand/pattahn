const { Match } = require('../core');
const matchAll = require('string.prototype.matchall');
const { class: RegexBase } = require('./RegexBase');

class RegexMatchAll extends RegexBase {
  constructor(...args) {
    super('RegexMatchAll', ...args);
  }

  implRegex(arg, ...args) {
    this.pattern.lastIndex = 0;

    const match = matchAll(arg, this.pattern);

    return new Match([...match], ...args);
  }
}

module.exports = RegexMatchAll.factory;
