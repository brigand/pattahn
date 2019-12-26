'use strict';

const { transform } = require('@babel/core');
const jestPreset = require('babel-preset-jest');

function getCodeBlocks(src) {
  let current = null;
  const complete = [];
  for (const line of src.split('\n')) {
    if (current != null && line.startsWith('```')) {
      complete.push(current);
      current = null;
    } else if (line.startsWith('```js')) {
      current = '';
    } else if (current != null) {
      current += current ? '\n' : '';
      current += line;
    }
  }

  return complete;
}

function separateImports(blocks) {
  const imports = [];
  const tests = [];

  for (const block of blocks) {
    const withoutImport = block.replace(
      /\s*(import[^]*?from\s*)['"](.+?)['"];?\s*/g,
      (m, initial, path) => {
        const absolute = path.replace(/^matchany(\/?)/, `${process.cwd()}/src/`);
        if (!imports.some((imp) => imp.includes(absolute))) {
          const defaultImport = initial.match(/import\s*(\w+)\s*/);

          if (defaultImport) {
            imports.push(`const ${defaultImport[1]} = require('${absolute}');`);
          }
        }

        return '';
      },
    );
    tests.push(withoutImport.trim());
  }

  return { imports, tests };
}

module.exports = {
  process(src, filename) {
    const blocks = getCodeBlocks(src);

    if (!blocks.length) {
      return `it('has no tests', () => {});`;
    }

    const { imports, tests } = separateImports(blocks);

    let code = imports.join('\n') + '\n\n';

    for (const [i, test] of tests.entries()) {
      code += `it('inline test ${i + 1}', () => {\n${test}\n});`;
      code += '\n\n';
    }

    const result = transform(code, {
      filename,
      sourceType: 'module',
      presets: [jestPreset],
    });

    return result ? result.code : src;
  },
};
