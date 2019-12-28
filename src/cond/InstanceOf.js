const { Condition } = require('../core');

class InstanceOf extends Condition {
  /**
   * Checks if the value is an instance of some class.
   *
   * @param {Condition} ty
   */
  constructor(ty) {
    super('InstanceOf');

    this.ty = ty;
  }

  exec(value, ...args) {
    return value instanceof this.ty ? [value, ...args] : null;
  }

  clone() {
    return new InstanceOf(this.ty);
  }
}

module.exports = InstanceOf.factory;
