const chainMatch = require('./chainMatch.js');
const Eq = require('./cond/Eq');
const Prop = require('./cond/Prop');

it(`works for simple strings`, () => {
  let res_foo = chainMatch()
    .with('foo', 'foo res')
    .with('bar', 'bar res')
    .exec('foo');

  let res_bar = chainMatch()
    .with('foo', 'foo res')
    .with('bar', 'bar res')
    .exec('bar');

  expect(res_foo).toBe('foo res');
  expect(res_bar).toBe('bar res');
});

const LenEq = (desired) => Prop('length').andThen(Eq(desired));

it(`works for simple conditions`, () => {
  const results = ['', 'f', 'fo', 'foo', 'bar', 'food'].map((word) =>
    chainMatch()
      .with(LenEq(1), 'len 1')
      .with(LenEq(2), 'len 2')
      .with(Eq('bar'), 'is bar')
      .with(LenEq(3), 'len 3')
      .with(LenEq(4), 'len 4')
      .any('default')
      .exec(word),
  );

  expect(results).toEqual(['default', 'len 1', 'len 2', 'len 3', 'is bar', 'len 4']);
});

it(`works with exec arg passed to chainMatch()`, () => {
  const result = chainMatch('foo')
    .with(LenEq(2), '2')
    .with(LenEq(3), '3')
    .with(LenEq(4), '4')
    .exec();

  expect(result).toBe('3');
});
