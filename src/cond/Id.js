const { Match, Condition } = require('../core');

class Id extends Condition {
  /**
   * Simple identity condition.
   */
  constructor() {
    super('Id');
  }

  impl(...args) {
    return new Match(...args);
  }

  clone() {
    return new Id();
  }
}

module.exports = Id.factory;
