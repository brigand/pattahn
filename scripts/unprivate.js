const fs = require('fs');
const package = require('../package.json');

delete package.private;

fs.writeFileSync('package/package.json', JSON.stringify(package, null, 2));
