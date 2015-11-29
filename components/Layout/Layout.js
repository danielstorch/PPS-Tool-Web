if (__DEV__) {
  module.exports = require('./Layout.prod');
} else {
  module.exports = require('./Layout.dev');
}