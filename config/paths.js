'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    appBuild: resolveApp('dist'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/preview.html'),
    appIndexJs: resolveApp('src/index.js'),
    appSrc: resolveApp('src'),
    magaele: resolveApp('magaele')
};
