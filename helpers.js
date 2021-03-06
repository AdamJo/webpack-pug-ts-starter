/**
 * @authors: @qdouble and @AngularClass
 */

const path = require('path');
const fs = require('fs');

// Helper functions
const _root = path.resolve(__dirname);

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

exports.root = root;
