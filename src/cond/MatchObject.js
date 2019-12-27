const { Match, Condition } = require('../core');

class Output extends Condition {
  constructor(condition = null) {
    super('MatchObject.Output');

    this.condition = condition;
  }
  impl(...args) {
    if (this.condition) {
      return this.condition.impl(...args);
    } else {
      return new Match(...args);
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

  impl(object, ...args) {
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

    return new Match(...outputs);
  }

  clone() {
    return new MatchObject();
  }
}

module.exports = MatchObject.factory;
module.exports.Output = Output.factory;

const intoCondition = require('../intoCondition');
