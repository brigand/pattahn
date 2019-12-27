const { Match, Condition } = require('./core');
const Test = require('./cond/Test');

class Matcher {
  constructor(...args) {
    this.execArgs = args;

    this.cases = [];

    // Allows e.g. `promise.then(matcher.with(...).exec)`
    this.exec = this.exec.bind(this);
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
    return this.with(
      Test(() => true),
      consequent,
    );
  }

  exec(...directArgs) {
    const args = this.execArgs.concat(directArgs);

    for (const [cond, consequent] of this.cases) {
      const maybeMatch = cond.exec(...args);

      if (maybeMatch) {
        const result =
          typeof consequent === 'function' ? consequent(...maybeMatch) : consequent;

        return result;
      }
    }

    return undefined;
  }

  clone() {
    return Object.assign(new Matcher(), {
      cases: this.cases.slice(),
    });
  }
}

function chainMatch(...args) {
  return new Matcher(...args);
}

chainMatch.Matcher = Matcher;

module.exports = chainMatch;
