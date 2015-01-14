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
    'if (!exports.displayName) exports.displayName = ' + JSON.stringify(filename) + '\n\n' +
    template.replace(/__FILENAME__/g, JSON.stringify(res));
};
