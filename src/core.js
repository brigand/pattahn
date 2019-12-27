function fnToStr(fn) {
  const s = String(fn).replace(/\s+/g, ' ');
  if (s.length > 50) {
    return s.slice(0, 20) + '…' + s.slice(-20);
  } else {
    return s;
  }
}

class Match {
  constructor(...values) {
    this.values = values;
  }
}

function andThen(match, then) {
  if (match && match.values) {
    return then(...match.values) || null;
  } else {
    return null;
  }
}

class Condition {
  static _overrideToString(toString) {
    Condition.prototype.toString = function toStringOverride() {
      return toString(this);
    };
  }

  static strictEq(value) {
    return Eq(value);
  }

  constructor(name = null) {
    this.name = name;
  }

  static get factory() {
    const factory = (...args) => new this(...args);
    factory.class = this;
    return factory;
  }

  exec(...xs) {
    const match = this.impl(...xs);
    if (match && Array.isArray(match.values)) {
      return match.values;
    } else {
      return null;
    }
  }

  or(other) {
    return Or(this, other);
  }

  and(other) {
    return And(this, other);
  }

  /**
   * e.g. And(c, d) is c.chain(And, d)
   */
  chain(factory, ...args) {
    return factory(this, ...args);
  }

  andThen(other) {
    return AndThen(this, other);
  }

  filter(predicate) {
    return Filter(this, predicate);
  }

  named(name, parts = []) {
    let args = parts
      .map((part) =>
        part && part.name
          ? part.name
          : typeof part.impl === 'function'
          ? '(' + fnToStr(part.impl) + ')'
          : 'unknown',
      )
      .join(' ');
    if (args.length) {
      args = ` ${args}`;
    }
    if (this.name) {
      return new Condition(this.impl, `${this.name} |> ${name}`);
    } else {
      return new Condition(this.impl, `(${name} ${args})`);
    }
  }
}

exports.Match = Match;
exports.Condition = Condition;

const AndThen = require('./cond/AndThen');
const Or = require('./cond/Or');
const And = require('./cond/And');
const Eq = require('./cond/Eq');
const Filter = require('./cond/Filter');
