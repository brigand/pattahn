const { Match, Condition } = require('./core');

class Matcher {
  constructor() {
    this.cases = [];
  }

  with(condition, consequent) {
    const cond2 =
      condition != null && typeof condition.impl === 'function'
        ? condition
        : Condition.strictEq(condition);

    this.cases.push([cond2, consequent]);

    return this;
  }

  any(consequent) {
    return this.with(new Condition((x) => new Match(x)), consequent);
  }

  exec(...args) {
    for (const [cond, consequent] of this.cases) {
      const maybeMatch = cond.exec(...args);
      if (maybeMatch) {
        const result =
          typeof consequent === 'function'
            ? consequent(...maybeMatch.values)
            : consequent;

        return result;
      }
    }

    return undefined;
  }
}

function chainMatch() {
  return new Matcher();
}

chainMatch.Matcher = Matcher;

module.exports = chainMatch;
