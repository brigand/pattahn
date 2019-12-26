const fs = require('fs');
const glob = require('glob');

{
  const files = glob.sync('src/cond/*.js').map((js) => ({
    js,
    mdx: js.replace(/\.js$/, '.mdx'),
    name: js.replace(/.*cond\/(\w+)\.js$/, '$1'),
  }));

  const tpl = fs.readFileSync('scripts/internal/cond-mdx-template.txt', 'utf-8');

  for (const { js, mdx, name } of files) {
    if (!fs.existsSync(mdx)) {
      console.log(`Generating .mdx for ${name} (${mdx})`);
      const contents = tpl.replace(/NAME/g, name);
      fs.writeFileSync(mdx, contents);
    }
  }
}
