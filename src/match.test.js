const { Condition, Match } = require('./core.js');
const match = require('./match.js');
const assert = require('assert');
const assert_eq = assert.deepStrictEqual;

function it(message, block) {
  try {
    console.log(`START - ${message}`);
    block();
    console.log(`OK - ${message}`);
  } catch (error) {
    console.log(`ERR - ${message}`);
    console.error(error);
    process.exit(1);
  }
}

it(`works for simple strings`, () => {
  let res_foo = match('foo', {
    foo: 'foo res',
    bar: 'bar res',
  });
  let res_bar = match('bar', {
    foo: 'foo res',
    bar: 'bar res',
  });

  assert_eq(res_foo, 'foo res');
  assert_eq(res_bar, 'bar res');
});

function LenRange(min = null, max = null) {
  if (!Number.isFinite(min)) {
    min = -Infinity;
  }
  if (!Number.isFinite(max)) {
    max = Infinity;
  }

  return new Condition(
    (value) => value.length >= min && value.length <= max && new Match(value),
  );
}

it(`works for simple conditions`, () => {
  const results = ['', 'f', 'fo', 'foo', 'bar', 'food'].map((word) =>
    match(word, {
      [LenRange(1, 1)]: 'len 1',
      [LenRange(2, 2)]: 'len 2',
      [new Condition((x) => x === 'bar' && new Match(x))]: 'is bar',
      [LenRange(3, 3)]: 'len 3',
      [LenRange(4, 4)]: 'len 4',
      _: 'default',
    }),
  );

  assert_eq(results, ['default', 'len 1', 'len 2', 'len 3', 'is bar', 'len 4']);
});
