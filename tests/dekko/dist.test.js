const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('react-components-antd-with-locales.js')
  .hasFile('react-components-antd-with-locales.min.js')
  .hasFile('react-components-antd.css')
  .hasFile('react-components-antd.min.css')
  .hasFile('react-components-antd.js')
  .hasFile('react-components-antd.min.js')
  .hasFile('react-components-antd.less');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
