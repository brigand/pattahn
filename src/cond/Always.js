const { Condition } = require('../core');

class Always extends Condition {
  constructor(...args) {
    super();

    this.result = args;
  }

  exec() {
    return this.result;
  }
}

module.exports = Always.factory;
