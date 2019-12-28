const { Condition } = require('../core');

class Id extends Condition {
  /**
   * Simple identity condition.
   */
  constructor() {
    super('Id');
  }

  exec(...args) {
    return args;
  }

  clone() {
    return new Id();
  }
}

module.exports = Id.factory;
