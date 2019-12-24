const { Match, Condition } = require('../core');

class Test extends Condition {
  constructor(condition) {
    super('Test');
    this.condition = condition;
  }

  impl(...args) {
    if (this.condition(...args)) {
      return new Match(...args);
    } else {
      return null;
    }
  }
}

module.exports = Test.factory;
