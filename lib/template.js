
/**
 * Expose the template as an onus component
 */

var Onus = require('onus');

exports['default'] = Onus(exports, module.hot ? __FILENAME__ : null);

if (module.hot) {
  module.hot.accept('onus', function() {
    exports['default'] = require('onus')(exports, module.hot ? __FILENAME : null);
  });
}
