function fnToStr(fn) {
  const s = String(fn).replace(/\s+/g, ' ');
  if (s.length > 50) {
    return s.slice(0, 20) + '…' + s.slice(-20);
  } else {
    return s;
  }
}

class Condition {
  get isPattahnCondition() {
    return true;
  }

  static isA(value) {
    if (value instanceof Condition) {
      return true;
    } else if (value && value.isPattahnCondition === true) {
      return true;
    } else {
      return false;
    }
  }

  static _overrideToString(toString) {
    Condition.prototype.toString = function toStringOverride() {
      return toString(this);
    };
  }

  static from(value) {
    const intoCondition = require('./intoCondition');
    return intoCondition(value);
  }

  static eq(value) {
    const Eq = require('./cond/Eq');

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

  exec() {
    throw new Error(`Condition "${this.constructor.name}" must implement .exec`);
  }

  test(...xs) {
    return !!this.exec(...xs);
  }

  or(other) {
    const Or = require('./cond/Or');

    return Or(this, other);
  }

  and(other) {
    const And = require('./cond/And');

    return And(this, other);
  }

  /**
   * e.g. And(c, d) is c.chain(And, d)
   */
  chain(factory, ...args) {
    return factory(this, ...args);
  }

  andThen(other) {
    const AndThen = require('./cond/AndThen');

    return AndThen(this, other);
  }

  filter(predicate) {
    const Filter = require('./cond/Filter');

    return Filter(this, predicate);
  }

  named(name, parts = []) {
    let args = parts
      .map((part) =>
        part && part.name
          ? part.name
          : typeof part.exec === 'function'
          ? '(' + fnToStr(part.exec) + ')'
          : 'unknown',
      )
      .join(' ');
    if (args.length) {
      args = ` ${args}`;
    }
    if (this.name) {
      return new Condition(this.exec, `${this.name} |> ${name}`);
    } else {
      return new Condition(this.exec, `(${name} ${args})`);
    }
  }
}

exports.Condition = Condition;
