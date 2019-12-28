const { Condition } = require('../core');

class Output extends Condition {
  constructor(condition = null) {
    super('MatchObject.Output');

    this.condition = condition;
  }
  exec(...args) {
    if (this.condition) {
      return this.condition.exec(...args);
    } else {
      return args;
    }
  }
}

class MatchObject extends Condition {
  /**
   * Simple identity condition.
   */
  constructor(pattern) {
    super('MatchObject');

    this.pairs = [];
    for (const key of Object.keys(pattern)) {
      const condition = intoCondition(pattern[key]);
      this.pairs.push([key, condition]);
    }
  }

  exec(object, ...args) {
    if (!object || typeof object !== 'object') {
      return null;
    }

    const outputs = [object];
    for (const [key, condition] of this.pairs) {
      const match = condition.exec(object[key]);
      if (match) {
        if (condition instanceof MatchObject) {
          outputs.push(...match.slice(1));
        } else if (condition instanceof Output) {
          outputs.push(match[0]);
        }
      } else {
        return null;
      }
    }

    if (outputs.length === 1 && args.length) {
      outputs.push(...args);
    }

    return outputs;
  }

  clone() {
    return new MatchObject();
  }
}

module.exports = MatchObject.factory;
module.exports.Output = Output.factory;

const intoCondition = require('../intoCondition');
