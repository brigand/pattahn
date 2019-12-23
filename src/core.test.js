const { Condition, Match } = require('./core.js');
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

it(`works for simple condition`, () => {
  const is5 = new Condition((x) => (x === 5 ? new Match(true) : null));

  assert_eq(is5.exec(5), [true]);
  assert_eq(is5.exec(6), null);
});

it(`works for .and of 2 simple conditions`, () => {
  const isGt3 = new Condition((x) => (x > 3 ? new Match('gt3') : null));
  const isGt5 = new Condition((x) => (x > 5 ? new Match('gt5') : null));
  const both = isGt3.and(isGt5);

  assert_eq(both.exec(2), null);
  assert_eq(both.exec(4), null);
  assert_eq(both.exec(6), ['gt5']);
});

it(`works for .andThen of two simple conditions`, () => {
  const isGt3 = new Condition((x) => (x > 3 ? new Match(x * 10) : null));
  const isGt35 = new Condition((x) => (x > 35 ? new Match('gt35') : null));
  const both = isGt3.andThen(isGt35);

  assert_eq(both.exec(2), null);
  assert_eq(both.exec(3.1), null);
  assert_eq(both.exec(4), ['gt35']);
});
