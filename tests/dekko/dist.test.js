const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('react-ant-with-locales.js')
  .hasFile('react-ant-with-locales.min.js')
  .hasFile('react-ant.css')
  .hasFile('react-ant.min.css')
  .hasFile('react-ant.js')
  .hasFile('react-ant.min.js')
  .hasFile('react-ant.less');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
