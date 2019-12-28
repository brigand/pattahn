const { Condition } = require('../core');

class Map extends Condition {
  /**
   * Creates a mapper that takes the value and returns Match or
   * a falsy value.
   *
   * @param {fn} mapper
   */
  constructor(mapper) {
    super('Map');
    this.mapper = mapper;
  }

  exec(...args) {
    const result = this.mapper(...args);
    return result;
  }
}

module.exports = Map.factory;
