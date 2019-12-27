---
route: /
menu:
---

# pattahn

[API Documentation]

## Intro

This library allows dynamic pattern matching on any values, with convenient syntax for
primitives, and powerful composition of condition types when you need the extra power.

## Install

```sh
npm install --save pattahn
```

or

```sh
yarn add pattahn
```

## Usage

When you require/import 'pattahn' you get the main "match" function. Deep imports are
used to access other APIs.

```js
import match from 'pattahn';
import Eq from 'pattahn/cond/Eq';
import Test from 'pattahn/cond/Test';

const matcher = match()
  .with(Eq('foo').or(Eq('bar')), (value) => 'eq foo/bar')
  .with(
    Test((v) => v.length === 0),
    'empty',
  )
  .any((other) => 'other: ' + other);

matcher.exec('foo'); // => 'eq foo/bar'
matcher.exec(''); // => 'empty'
matcher.exec('baz'); // => 'other: baz'
```

You can also match directly by using an object. Conditions can be used with the ES6
dynamic key syntax.

```js
import match from 'pattahn';

const result = match('foo', {
  foo: 'eq foo',
  [Eq('bar').or(Eq('baz'))]: 'foo or baz',
  _: 'default',
});

result; // => 'eq foo'
```

See the [API Documentation] for more details.

[api documentation]: https://brigand.github.io/pattahn/
