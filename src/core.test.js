const Map = require('./cond/Map');

it(`works for simple condition`, () => {
  const is5 = Map((x) => (x === 5 ? [true] : null));

  expect(is5.exec(5)).toEqual([true]);
  expect(is5.exec(6)).toBe(null);
});

it(`works for .and of 2 simple conditions`, () => {
  const isGt3 = Map((x) => (x > 3 ? ['gt3'] : null));
  const isGt5 = Map((x) => (x > 5 ? ['gt5'] : null));
  const both = isGt3.and(isGt5);

  expect(both.exec(2)).toBe(null);
  expect(both.exec(4)).toBe(null);
  expect(both.exec(6)).toEqual(['gt5']);

  // const contains = ['(and ', 'x > 3', 'x > 5'].map((s) => both.name.includes(s));
  // expect(contains).toEqual([true, true, true]);
});

it(`works for .andThen of two simple conditions`, () => {
  const isGt3 = Map((x) => (x > 3 ? [x * 10] : null));
  const isGt35 = Map((x) => (x > 35 ? ['gt35'] : null));
  const both = isGt3.andThen(isGt35);

  expect(both.exec(2)).toBe(null);
  expect(both.exec(3.1)).toBe(null);
  expect(both.exec(4)).toEqual(['gt35']);
});
