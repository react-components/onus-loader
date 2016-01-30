/**
 * Module dependencies
 */

var path = require('path');
var template = require('fs').readFileSync(__dirname + '/lib/template.js', 'utf8');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var res = this.resourcePath;
  var filename = path.basename(res, path.extname(res));

  return source +
    '\n\n' +
    'if (typeof __module_name && !exports.displayName) exports.displayName = __module_name;\n\n' +
    template.replace(/__FILENAME__/g, JSON.stringify(res));
};
