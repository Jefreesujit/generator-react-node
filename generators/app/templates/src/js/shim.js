/* global window, arguments */

'use strict';

require('es6-promise').polyfill();

// IE11 shim for object.assign

if (typeof window.Object.assign !== 'function') {
  window.Object.assign = function (target) {
    var len = arguments.length,
        index,
        source,
        key;

    if (target === null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (index = 1; index < len; index++) {
      source = arguments[index];
      if (source !== null) {
        for (key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

if (!window.Array.prototype.find) {
  window.Array.prototype.find = function (predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this),
        length = list.length >>> 0,
        thisArg = arguments[1],
        value,
        i;

    for (i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}
