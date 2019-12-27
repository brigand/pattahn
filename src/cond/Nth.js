const { Match, Condition } = require('../core');

class Nth extends Condition {
  constructor(index = 0) {
    super('Nth');
    this.index = index;
  }

  impl(...args) {
    return new Match(args[this.index - 1]);
  }

  clone() {
    return new Nth(this.index);
  }
}

module.exports = Nth.factory;
