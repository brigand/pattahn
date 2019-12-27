const { Condition, Match } = require('./core.js');
const match = require('./match.js');
const Eq = require('./cond/Eq');
const Prop = require('./cond/Prop');
const Test = require('./cond/Test');

it(`works for simple strings`, () => {
  let res_foo = match('foo', {
    foo: 'foo res',
    bar: 'bar res',
  });
  let res_bar = match('bar', {
    foo: 'foo res',
    bar: 'bar res',
  });

  expect(res_foo).toBe('foo res');
  expect(res_bar).toBe('bar res');
});

function LenRange(min = null, max = null) {
  if (!Number.isFinite(min)) {
    min = -Infinity;
  }
  if (!Number.isFinite(max)) {
    max = Infinity;
  }

  return Test((value) => value.length >= min && value.length <= max);
}

const LenEq = (desired) => Prop('length').andThen(Eq(desired));

it(`works for simple conditions`, () => {
  const results = ['', 'f', 'fo', 'foo', 'bar', 'food'].map((word) =>
    match(word, {
      [LenEq(1)]: 'len 1',
      [LenEq(2)]: 'len 2',
      [Test((x) => x === 'bar')]: 'is bar',
      [LenEq(3)]: 'len 3',
      [LenEq(4)]: 'len 4',
      _: 'default',
    }),
  );

  expect(results).toEqual(['default', 'len 1', 'len 2', 'len 3', 'is bar', 'len 4']);
});

it(`works with exec arg passed to chain`, () => {
  const results = ['', 'f', 'fo', 'foo', 'bar', 'food'].map((word) =>
    match(word)
      .with(LenEq(1), 'len 1')
      .with(LenEq(2), 'len 2')
      .with(Eq('bar'), 'is bar')
      .with(LenEq(3), 'len 3')
      .with(LenEq(4), 'len 4')
      .any('default')
      .exec(),
  );

  expect(results).toEqual(['default', 'len 1', 'len 2', 'len 3', 'is bar', 'len 4']);
});
