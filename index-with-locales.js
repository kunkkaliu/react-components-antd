const iotv = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/);

iotv.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  iotv.locales[matches[1]] = req(mod).default;
});

module.exports = iotv;
