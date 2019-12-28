const { Condition } = require('../core');

class Test extends Condition {
  constructor(condition) {
    super('Test');
    this.condition = condition;
  }

  exec(...args) {
    if (this.condition(...args)) {
      return args;
    } else {
      return null;
    }
  }
}

module.exports = Test.factory;
