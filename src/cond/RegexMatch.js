const { class: RegexBase } = require('./RegexBase');

class RegexMatch extends RegexBase {
  constructor(...args) {
    super('RegexMatch', ...args);
  }

  implRegex(arg, ...args) {
    this.pattern.lastIndex = 0;

    const match = arg.match(this.pattern);

    return match ? [match, ...args] : null;
  }
}

module.exports = RegexMatch.factory;
