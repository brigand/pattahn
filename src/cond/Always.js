const { Match, Condition } = require('../core');

class Always extends Condition {
  constructor(...args) {
    super();

    this.result = new Match(...args);
  }

  impl() {
    return this.result;
  }
}

module.exports = Always.factory;
