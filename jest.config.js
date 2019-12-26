const { defaults } = require('jest-config');

module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.mdx$': require.resolve('./mdx-jest-transformer.js'),
  },
  testRegex: String.raw`(\.|/)test\.[jt]sx?$|\.mdx$`,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mdx'],
};
