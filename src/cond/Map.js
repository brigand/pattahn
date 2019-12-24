const { Match, Condition } = require('../core');

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

  impl(...args) {
    const result = this.mapper(...args);
    return result;
  }
}

module.exports = Map.factory;
