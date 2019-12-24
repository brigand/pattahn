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
    return new Condition((x) => x === value && new Match(x));
  }

  constructor(impl, name = null) {
    this.impl = impl;
    this.name = name;
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
    return new Condition((...xs) => this.impl(...xs) || other.impl(...xs)).named(
      'or',
      [this, other],
    );
  }

  and(other) {
    return new Condition(
      (...xs) => this.impl(...xs) && other.impl(...xs),
    ).named('and', [this, other]);
  }

  andThen(other) {
    return new Condition((...xs) =>
      andThen(this.impl(...xs), (...xs2) => other.impl(...xs2)),
    ).named('andThen', [this, other]);
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

module.exports = {
  Match,
  Condition,
};
