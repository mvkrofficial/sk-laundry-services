const appModule = require("../dist/server.cjs");

module.exports = appModule.default || appModule;
