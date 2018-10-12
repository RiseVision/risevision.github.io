(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/fast-levenshtein/levenshtein.js":
/*!******************************************************!*\
  !*** ./node_modules/fast-levenshtein/levenshtein.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  'use strict';
  
  var collator;
  try {
    collator = (typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined") ? Intl.Collator("generic", { sensitivity: "base" }) : null;
  } catch (err){
    console.log("Collator could not be initialized and wouldn't be used");
  }
  // arrays to re-use
  var prevRow = [],
    str2Char = [];
  
  /**
   * Based on the algorithm at http://en.wikipedia.org/wiki/Levenshtein_distance.
   */
  var Levenshtein = {
    /**
     * Calculate levenshtein distance of the two strings.
     *
     * @param str1 String the first string.
     * @param str2 String the second string.
     * @param [options] Additional options.
     * @param [options.useCollator] Use `Intl.Collator` for locale-sensitive string comparison.
     * @return Integer the levenshtein distance (0 and above).
     */
    get: function(str1, str2, options) {
      var useCollator = (options && collator && options.useCollator);
      
      var str1Len = str1.length,
        str2Len = str2.length;
      
      // base cases
      if (str1Len === 0) return str2Len;
      if (str2Len === 0) return str1Len;

      // two rows
      var curCol, nextCol, i, j, tmp;

      // initialise previous row
      for (i=0; i<str2Len; ++i) {
        prevRow[i] = i;
        str2Char[i] = str2.charCodeAt(i);
      }
      prevRow[str2Len] = str2Len;

      var strCmp;
      if (useCollator) {
        // calculate current row distance from previous row using collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol;

            // substution
            strCmp = 0 === collator.compare(str1.charAt(i), String.fromCharCode(str2Char[j]));

            nextCol = prevRow[j] + (strCmp ? 0 : 1);

            // insertion
            tmp = curCol + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }
            // deletion
            tmp = prevRow[j + 1] + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }

            // copy current col value into previous (in preparation for next iteration)
            prevRow[j] = curCol;
          }

          // copy last col value into previous (in preparation for next iteration)
          prevRow[j] = nextCol;
        }
      }
      else {
        // calculate current row distance from previous row without collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol;

            // substution
            strCmp = str1.charCodeAt(i) === str2Char[j];

            nextCol = prevRow[j] + (strCmp ? 0 : 1);

            // insertion
            tmp = curCol + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }
            // deletion
            tmp = prevRow[j + 1] + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }

            // copy current col value into previous (in preparation for next iteration)
            prevRow[j] = curCol;
          }

          // copy last col value into previous (in preparation for next iteration)
          prevRow[j] = nextCol;
        }
      }
      return nextCol;
    }

  };

  // amd
  if ("function" !== "undefined" && __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") !== null && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Levenshtein;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // commonjs
  else if (typeof module !== "undefined" && module !== null && typeof exports !== "undefined" && module.exports === exports) {
    module.exports = Levenshtein;
  }
  // web worker
  else if (typeof self !== "undefined" && typeof self.postMessage === 'function' && typeof self.importScripts === 'function') {
    self.Levenshtein = Levenshtein;
  }
  // browser main thread
  else if (typeof window !== "undefined" && window !== null) {
    window.Levenshtein = Levenshtein;
  }
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));
var levenshtein = _interopDefault(__webpack_require__(/*! fast-levenshtein */ "./node_modules/fast-levenshtein/levenshtein.js"));
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var defaultPolyfill = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
var defaultPolyfill__default = _interopDefault(defaultPolyfill);
var hoistNonReactStatic = _interopDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/* eslint-disable no-underscore-dangle */

var isCompositeComponent = function isCompositeComponent(type) {
  return typeof type === 'function';
};

var getComponentDisplayName = function getComponentDisplayName(type) {
  var displayName = type.displayName || type.name;
  return displayName && displayName !== 'ReactComponent' ? displayName : 'Component';
};

var reactLifeCycleMountMethods = ['componentWillMount', 'componentDidMount'];

function isReactClass(Component) {
  return !!(Component.prototype && (React__default.Component.prototype.isPrototypeOf(Component.prototype) ||
  // react 14 support
  Component.prototype.isReactComponent || Component.prototype.componentWillMount || Component.prototype.componentWillUnmount || Component.prototype.componentDidMount || Component.prototype.componentDidUnmount || Component.prototype.render));
}

function isReactClassInstance(Component) {
  return Component && isReactClass({ prototype: Object.getPrototypeOf(Component) });
}

var getInternalInstance = function getInternalInstance(instance) {
  return instance._reactInternalFiber || // React 16
  instance._reactInternalInstance || // React 15
  null;
};

var updateInstance = function updateInstance(instance) {
  var updater = instance.updater,
      forceUpdate = instance.forceUpdate;

  if (typeof forceUpdate === 'function') {
    instance.forceUpdate();
  } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
    updater.enqueueForceUpdate(instance);
  }
};

var isFragmentNode = function isFragmentNode(_ref) {
  var type = _ref.type;
  return React__default.Fragment && type === React__default.Fragment;
};

var ContextType = React__default.createContext ? React__default.createContext() : null;
var ConsumerType = ContextType && ContextType.Consumer.$$typeof;
var ProviderType = ContextType && ContextType.Provider.$$typeof;

var CONTEXT_CURRENT_VALUE = '_currentValue';

var isContextConsumer = function isContextConsumer(_ref2) {
  var type = _ref2.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.$$typeof === ConsumerType;
};
var isContextProvider = function isContextProvider(_ref3) {
  var type = _ref3.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.$$typeof === ProviderType;
};
var getContextProvider = function getContextProvider(type) {
  return type && type._context;
};

var generation = 1;

var increment = function increment() {
  return generation++;
};
var get$1 = function get() {
  return generation;
};

var PREFIX = '__reactstandin__';
var PROXY_KEY = PREFIX + 'key';
var GENERATION = PREFIX + 'proxyGeneration';
var REGENERATE_METHOD = PREFIX + 'regenerateByEval';
var UNWRAP_PROXY = PREFIX + 'getCurrent';
var CACHED_RESULT = PREFIX + 'cachedResult';
var PROXY_IS_MOUNTED = PREFIX + 'isMounted';

var configuration = {
  // Log level
  logLevel: 'error',

  // Allows using SFC without changes. leading to some components not updated
  pureSFC: false,

  // Allows SFC to be used, enables "intermediate" components used by Relay, should be disabled for Preact
  allowSFC: true,

  // Hook on babel component register.
  onComponentRegister: false
};

/* eslint-disable no-console */

var logger = {
  debug: function debug() {
    if (['debug'].indexOf(configuration.logLevel) !== -1) {
      var _console;

      (_console = console).debug.apply(_console, arguments);
    }
  },
  log: function log() {
    if (['debug', 'log'].indexOf(configuration.logLevel) !== -1) {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    }
  },
  warn: function warn() {
    if (['debug', 'log', 'warn'].indexOf(configuration.logLevel) !== -1) {
      var _console3;

      (_console3 = console).warn.apply(_console3, arguments);
    }
  },
  error: function error() {
    if (['debug', 'log', 'warn', 'error'].indexOf(configuration.logLevel) !== -1) {
      var _console4;

      (_console4 = console).error.apply(_console4, arguments);
    }
  }
};

/* eslint-disable no-eval, func-names */

function safeReactConstructor(Component, lastInstance) {
  try {
    if (lastInstance) {
      return new Component(lastInstance.props, lastInstance.context);
    }
    return new Component({}, {});
  } catch (e) {
    // some components, like Redux connect could not be created without proper context
  }
  return null;
}

function isNativeFunction(fn) {
  return typeof fn === 'function' ? fn.toString().indexOf('[native code]') > 0 : false;
}

var identity = function identity(a) {
  return a;
};
var indirectEval = eval;

var doesSupportClasses = function () {
  try {
    indirectEval('class Test {}');
    return true;
  } catch (e) {
    return false;
  }
}();

var ES6ProxyComponentFactory = doesSupportClasses && indirectEval('\n(function(InitialParent, postConstructionAction) {\n  return class ProxyComponent extends InitialParent {\n    constructor(props, context) {\n      super(props, context)\n      postConstructionAction.call(this)\n    }\n  }\n})\n');

var ES5ProxyComponentFactory = function ES5ProxyComponentFactory(InitialParent, postConstructionAction) {
  function ProxyComponent(props, context) {
    InitialParent.call(this, props, context);
    postConstructionAction.call(this);
  }
  ProxyComponent.prototype = Object.create(InitialParent.prototype);
  Object.setPrototypeOf(ProxyComponent, InitialParent);
  return ProxyComponent;
};

var proxyClassCreator = doesSupportClasses ? ES6ProxyComponentFactory : ES5ProxyComponentFactory;

function getOwnKeys(target) {
  return [].concat(Object.getOwnPropertyNames(target), Object.getOwnPropertySymbols(target));
}

function shallowStringsEqual(a, b) {
  for (var key in a) {
    if (String(a[key]) !== String(b[key])) {
      return false;
    }
  }
  return true;
}

function deepPrototypeUpdate(dest, source) {
  var deepDest = Object.getPrototypeOf(dest);
  var deepSrc = Object.getPrototypeOf(source);
  if (deepDest && deepSrc && deepSrc !== deepDest) {
    deepPrototypeUpdate(deepDest, deepSrc);
  }
  if (source.prototype && source.prototype !== dest.prototype) {
    dest.prototype = source.prototype;
  }
}

function safeDefineProperty(target, key, props) {
  try {
    Object.defineProperty(target, key, props);
  } catch (e) {
    logger.warn('Error while wrapping', key, ' -> ', e);
  }
}

var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString', 'valueOf', 'isStatelessFunctionalProxy', PROXY_KEY, UNWRAP_PROXY];

function transferStaticProps(ProxyComponent, savedDescriptors, PreviousComponent, NextComponent) {
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    if (!shallowEqual(prevDescriptor, savedDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
    }
  });

  // Copy newly defined static methods and properties
  Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
      return;
    }

    if (prevDescriptor && !savedDescriptor) {
      safeDefineProperty(ProxyComponent, key, prevDescriptor);
      return;
    }

    var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
      configurable: true
    });

    savedDescriptors[key] = nextDescriptor;
    safeDefineProperty(ProxyComponent, key, nextDescriptor);
  });

  // Remove static methods and properties that are no longer defined
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }
    // Skip statics that exist on the next class
    if (NextComponent.hasOwnProperty(key)) {
      return;
    }
    // Skip non-configurable statics
    var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    if (proxyDescriptor && !proxyDescriptor.configurable) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      return;
    }

    safeDefineProperty(ProxyComponent, key, {
      value: undefined
    });
  });

  return savedDescriptors;
}

function mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers) {
  var injectedCode = {};
  try {
    var nextInstance = safeReactConstructor(NextComponent, lastInstance);

    try {
      // Bypass babel class inheritance checking
      deepPrototypeUpdate(InitialComponent, NextComponent);
    } catch (e) {
      // It was ES6 class
    }

    var proxyInstance = safeReactConstructor(ProxyComponent, lastInstance);

    if (!nextInstance || !proxyInstance) {
      return injectedCode;
    }

    var mergedAttrs = _extends({}, proxyInstance, nextInstance);
    var hasRegenerate = proxyInstance[REGENERATE_METHOD];
    var ownKeys = getOwnKeys(Object.getPrototypeOf(ProxyComponent.prototype));
    Object.keys(mergedAttrs).forEach(function (key) {
      if (key.startsWith(PREFIX)) return;
      var nextAttr = nextInstance[key];
      var prevAttr = proxyInstance[key];
      if (nextAttr) {
        if (isNativeFunction(nextAttr) || isNativeFunction(prevAttr)) {
          // this is bound method
          var isSameArity = nextAttr.length === prevAttr.length;
          var existsInPrototype = ownKeys.indexOf(key) >= 0 || ProxyComponent.prototype[key];
          if ((isSameArity || !prevAttr) && existsInPrototype) {
            if (hasRegenerate) {
              injectedCode[key] = 'Object.getPrototypeOf(this)[\'' + key + '\'].bind(this)';
            } else {
              logger.warn('React Hot Loader:,', 'Non-controlled class', ProxyComponent.name, 'contains a new native or bound function ', key, nextAttr, '. Unable to reproduce');
            }
          } else {
            logger.warn('React Hot Loader:', 'Updated class ', ProxyComponent.name, 'contains native or bound function ', key, nextAttr, '. Unable to reproduce, use arrow functions instead.', '(arity: ' + nextAttr.length + '/' + prevAttr.length + ', proto: ' + (existsInPrototype ? 'yes' : 'no'));
          }
          return;
        }

        var nextString = String(nextAttr);
        var injectedBefore = injectedMembers[key];
        var isArrow = nextString.indexOf('=>') >= 0;
        var isFunction = nextString.indexOf('function') >= 0 || isArrow;
        var referToThis = nextString.indexOf('this') >= 0;
        if (nextString !== String(prevAttr) || injectedBefore && nextString !== String(injectedBefore) || isArrow && referToThis) {
          if (!hasRegenerate) {
            if (!isFunction) {
              // just copy prop over
              injectedCode[key] = nextAttr;
            } else {
              logger.warn('React Hot Loader:', ' Updated class ', ProxyComponent.name, 'had different code for', key, nextAttr, '. Unable to reproduce. Regeneration support needed.');
            }
          } else {
            injectedCode[key] = nextAttr;
          }
        }
      }
    });
  } catch (e) {
    logger.warn('React Hot Loader:', e);
  }
  return injectedCode;
}

function checkLifeCycleMethods(ProxyComponent, NextComponent) {
  try {
    var p1 = Object.getPrototypeOf(ProxyComponent.prototype);
    var p2 = NextComponent.prototype;
    reactLifeCycleMountMethods.forEach(function (key) {
      var d1 = Object.getOwnPropertyDescriptor(p1, key) || { value: p1[key] };
      var d2 = Object.getOwnPropertyDescriptor(p2, key) || { value: p2[key] };
      if (!shallowStringsEqual(d1, d2)) {
        logger.warn('React Hot Loader:', 'You did update', ProxyComponent.name, 's lifecycle method', key, '. Unable to repeat');
      }
    });
  } catch (e) {
    // Ignore errors
  }
}

function inject(target, currentGeneration, injectedMembers) {
  if (target[GENERATION] !== currentGeneration) {
    var hasRegenerate = !!target[REGENERATE_METHOD];
    Object.keys(injectedMembers).forEach(function (key) {
      try {
        if (hasRegenerate) {
          var usedThis = String(injectedMembers[key]).match(/_this([\d]+)/gi) || [];
          target[REGENERATE_METHOD](key, '(function REACT_HOT_LOADER_SANDBOX () {\n          var _this  = this; // common babel transpile\n          ' + usedThis.map(function (name) {
            return 'var ' + name + ' = this;';
          }) + '\n\n          return ' + injectedMembers[key] + ';\n          }).call(this)');
        } else {
          target[key] = injectedMembers[key];
        }
      } catch (e) {
        logger.warn('React Hot Loader: Failed to regenerate method ', key, ' of class ', target);
        logger.warn('got error', e);
      }
    });

    target[GENERATION] = currentGeneration;
  }
}

var has = Object.prototype.hasOwnProperty;

var proxies = new WeakMap();

var resetClassProxies = function resetClassProxies() {
  proxies = new WeakMap();
};

var blackListedClassMembers = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUnmount', 'hotComponentRender', 'getInitialState', 'getDefaultProps'];

var defaultRenderOptions = {
  componentWillRender: identity,
  componentDidUpdate: function componentDidUpdate(result) {
    return result;
  },
  componentDidRender: function componentDidRender(result) {
    return result;
  }
};

var defineClassMember = function defineClassMember(Class, methodName, methodBody) {
  return safeDefineProperty(Class.prototype, methodName, {
    configurable: true,
    writable: true,
    enumerable: false,
    value: methodBody
  });
};

var defineClassMembers = function defineClassMembers(Class, methods) {
  return Object.keys(methods).forEach(function (methodName) {
    return defineClassMember(Class, methodName, methods[methodName]);
  });
};

var setSFPFlag = function setSFPFlag(component, flag) {
  return safeDefineProperty(component, 'isStatelessFunctionalProxy', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: flag
  });
};

var copyMethodDescriptors = function copyMethodDescriptors(target, source) {
  if (source) {
    // it is possible to use `function-double` to construct an ideal clone, but does not make a sence
    var keys = Object.getOwnPropertyNames(source);

    keys.forEach(function (key) {
      return safeDefineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });

    safeDefineProperty(target, 'toString', {
      configurable: true,
      writable: false,
      enumerable: false,
      value: function toString() {
        return String(source);
      }
    });
  }

  return target;
};

function createClassProxy(InitialComponent, proxyKey, options) {
  var renderOptions = _extends({}, defaultRenderOptions, options);
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = proxies.get(InitialComponent);

  if (existingProxy) {
    return existingProxy;
  }

  var CurrentComponent = void 0;
  var savedDescriptors = {};
  var injectedMembers = {};
  var proxyGeneration = 0;
  var classUpdatePostponed = null;
  var instancesCount = 0;
  var isFunctionalComponent = !isReactClass(InitialComponent);

  var lastInstance = null;

  function postConstructionAction() {
    this[GENERATION] = 0;

    lastInstance = this;
    // is there is an update pending
    if (classUpdatePostponed) {
      var callUpdate = classUpdatePostponed;
      classUpdatePostponed = null;
      callUpdate();
    }
    // As long we can't override constructor
    // every class shall evolve from a base class
    inject(this, proxyGeneration, injectedMembers);
  }

  function proxiedUpdate() {
    if (this) {
      inject(this, proxyGeneration, injectedMembers);
    }
  }

  function lifeCycleWrapperFactory(wrapperName) {
    var sideEffect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;

    return copyMethodDescriptors(function wrappedMethod() {
      proxiedUpdate.call(this);
      sideEffect(this);

      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return !isFunctionalComponent && CurrentComponent.prototype[wrapperName] && CurrentComponent.prototype[wrapperName].apply(this, rest);
    }, InitialComponent.prototype && InitialComponent.prototype[wrapperName]);
  }

  function methodWrapperFactory(wrapperName, realMethod) {
    return copyMethodDescriptors(function wrappedMethod() {
      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      return realMethod.apply(this, rest);
    }, realMethod);
  }

  var fakeBasePrototype = function fakeBasePrototype(Base) {
    return Object.getOwnPropertyNames(Base).filter(function (key) {
      return blackListedClassMembers.indexOf(key) === -1;
    }).filter(function (key) {
      var descriptor = Object.getOwnPropertyDescriptor(Base, key);
      return typeof descriptor.value === 'function';
    }).reduce(function (acc, key) {
      acc[key] = methodWrapperFactory(key, Base[key]);
      return acc;
    }, {});
  };

  var componentDidMount = lifeCycleWrapperFactory('componentDidMount', function (target) {
    target[PROXY_IS_MOUNTED] = true;
    instancesCount++;
  });
  var componentDidUpdate = lifeCycleWrapperFactory('componentDidUpdate', renderOptions.componentDidUpdate);
  var componentWillUnmount = lifeCycleWrapperFactory('componentWillUnmount', function (target) {
    target[PROXY_IS_MOUNTED] = false;
    instancesCount--;
  });

  function hotComponentRender() {
    // repeating subrender call to keep RENDERED_GENERATION up to date
    renderOptions.componentWillRender(this);
    proxiedUpdate.call(this);
    var result = void 0;

    // We need to use hasOwnProperty here, as the cached result is a React node
    // and can be null or some other falsy value.
    if (has.call(this, CACHED_RESULT)) {
      result = this[CACHED_RESULT];
      delete this[CACHED_RESULT];
    } else if (isFunctionalComponent) {
      result = CurrentComponent(this.props, this.context);
    } else {
      result = (CurrentComponent.prototype.render || this.render).apply(this,
      // eslint-disable-next-line prefer-rest-params
      arguments);
    }

    return renderOptions.componentDidRender.call(this, result);
  }

  function proxiedRender() {
    renderOptions.componentWillRender(this);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return hotComponentRender.call.apply(hotComponentRender, [this].concat(args));
  }

  var defineProxyMethods = function defineProxyMethods(Proxy) {
    var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    defineClassMembers(Proxy, _extends({}, fakeBasePrototype(Base), {
      render: proxiedRender,
      hotComponentRender: hotComponentRender,
      componentDidMount: componentDidMount,
      componentDidUpdate: componentDidUpdate,
      componentWillUnmount: componentWillUnmount
    }));
  };

  var _ProxyFacade = void 0;
  var ProxyComponent = null;
  var proxy = void 0;

  if (!isFunctionalComponent) {
    // Component
    ProxyComponent = proxyClassCreator(InitialComponent, postConstructionAction);

    defineProxyMethods(ProxyComponent, InitialComponent.prototype);

    _ProxyFacade = ProxyComponent;
  } else if (!configuration.allowSFC) {
    // SFC Converted to component. Does not support returning precreated instances from render.
    ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);

    defineProxyMethods(ProxyComponent);
    _ProxyFacade = ProxyComponent;
  } else {
    // SFC

    // This function only gets called for the initial mount. The actual
    // rendered component instance will be the return value.

    // eslint-disable-next-line func-names
    _ProxyFacade = function ProxyFacade(props, context) {
      var result = CurrentComponent(props, context);

      // simple SFC, could continue to be SFC
      if (configuration.pureSFC) {
        if (!CurrentComponent.contextTypes) {
          if (!_ProxyFacade.isStatelessFunctionalProxy) {
            setSFPFlag(_ProxyFacade, true);
          }

          return renderOptions.componentDidRender(result);
        }
      }
      setSFPFlag(_ProxyFacade, false);

      // This is a Relay-style container constructor. We can't do the prototype-
      // style wrapping for this as we do elsewhere, so just we just pass it
      // through as-is.
      if (isReactClassInstance(result)) {
        ProxyComponent = null;

        // Relay lazily sets statics like getDerivedStateFromProps on initial
        // render in lazy construction, so we need to do the same here.
        transferStaticProps(_ProxyFacade, savedDescriptors, null, CurrentComponent);

        return result;
      }

      // Otherwise, it's a normal functional component. Build the real proxy
      // and use it going forward.
      ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);

      defineProxyMethods(ProxyComponent);

      var determinateResult = new ProxyComponent(props, context);

      // Cache the initial render result so we don't call the component function
      // a second time for the initial render.
      determinateResult[CACHED_RESULT] = result;
      return determinateResult;
    };
  }

  function get$$1() {
    return _ProxyFacade;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  safeDefineProperty(_ProxyFacade, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  safeDefineProperty(_ProxyFacade, PROXY_KEY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: proxyKey
  });

  safeDefineProperty(_ProxyFacade, 'toString', {
    configurable: true,
    writable: false,
    enumerable: false,
    value: function toString() {
      return String(CurrentComponent);
    }
  });

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    if (NextComponent === CurrentComponent) {
      return;
    }

    // Prevent proxy cycles
    var existingProxy = proxies.get(NextComponent);
    if (existingProxy) {
      return;
    }

    isFunctionalComponent = !isReactClass(NextComponent);

    proxies.set(NextComponent, proxy);

    proxyGeneration++;

    // Save the next constructor so we call it
    var PreviousComponent = CurrentComponent;
    CurrentComponent = NextComponent;

    // Try to infer displayName
    var displayName = getComponentDisplayName(CurrentComponent);

    safeDefineProperty(_ProxyFacade, 'displayName', {
      configurable: true,
      writable: false,
      enumerable: true,
      value: displayName
    });

    if (ProxyComponent) {
      safeDefineProperty(ProxyComponent, 'name', {
        value: displayName
      });
    }

    savedDescriptors = transferStaticProps(_ProxyFacade, savedDescriptors, PreviousComponent, NextComponent);

    if (isFunctionalComponent || !ProxyComponent) ; else {
      var classHotReplacement = function classHotReplacement() {
        checkLifeCycleMethods(ProxyComponent, NextComponent);
        Object.setPrototypeOf(ProxyComponent.prototype, NextComponent.prototype);
        defineProxyMethods(ProxyComponent, NextComponent.prototype);
        if (proxyGeneration > 1) {
          injectedMembers = mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers);
        }
      };

      // Was constructed once
      if (instancesCount > 0) {
        classHotReplacement();
      } else {
        classUpdatePostponed = classHotReplacement;
      }
    }
  }

  update(InitialComponent);

  var dereference = function dereference() {
    proxies.delete(InitialComponent);
    proxies.delete(_ProxyFacade);
    proxies.delete(CurrentComponent);
  };

  proxy = { get: get$$1, update: update, dereference: dereference, getCurrent: function getCurrent() {
      return CurrentComponent;
    } };

  proxies.set(InitialComponent, proxy);
  proxies.set(_ProxyFacade, proxy);

  safeDefineProperty(proxy, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

var proxiesByID = void 0;
var blackListedProxies = void 0;
var registeredComponents = void 0;
var idsByType = void 0;

var elementCount = 0;
var renderOptions = {};

var generateTypeId = function generateTypeId() {
  return 'auto-' + elementCount++;
};

var getIdByType = function getIdByType(type) {
  return idsByType.get(type);
};
var isProxyType = function isProxyType(type) {
  return type[PROXY_KEY];
};

var getProxyById = function getProxyById(id) {
  return proxiesByID[id];
};
var getProxyByType = function getProxyByType(type) {
  return getProxyById(getIdByType(type));
};

var registerComponent = function registerComponent(type) {
  return registeredComponents.set(type, 1);
};
var isRegisteredComponent = function isRegisteredComponent(type) {
  return registeredComponents.has(type);
};

var setStandInOptions = function setStandInOptions(options) {
  renderOptions = options;
};

var updateProxyById = function updateProxyById(id, type) {
  // Remember the ID.
  idsByType.set(type, id);

  if (!proxiesByID[id]) {
    proxiesByID[id] = createClassProxy(type, id, renderOptions);
  } else {
    proxiesByID[id].update(type);
  }
  return proxiesByID[id];
};

var createProxyForType = function createProxyForType(type) {
  return getProxyByType(type) || updateProxyById(generateTypeId(), type);
};

var isTypeBlacklisted = function isTypeBlacklisted(type) {
  return blackListedProxies.has(type);
};
var blacklistByType = function blacklistByType(type) {
  return blackListedProxies.set(type, true);
};

var resetProxies = function resetProxies() {
  proxiesByID = {};
  idsByType = new WeakMap();
  blackListedProxies = new WeakMap();
  registeredComponents = new WeakMap();
  resetClassProxies();
};

resetProxies();

var tune = {
  allowSFC: false
};

var preactAdapter = function preactAdapter(instance, resolveType) {
  var oldHandler = instance.options.vnode;

  Object.assign(configuration, tune);

  instance.options.vnode = function (vnode) {
    vnode.nodeName = resolveType(vnode.nodeName);
    if (oldHandler) {
      oldHandler(vnode);
    }
  };
};

/* eslint-disable no-use-before-define */

function _resolveType(type) {
  if (!isCompositeComponent(type) || isTypeBlacklisted(type) || isProxyType(type)) return type;

  var proxy = reactHotLoader.disableProxyCreation ? getProxyByType(type) : createProxyForType(type);

  return proxy ? proxy.get() : type;
}

var reactHotLoader = {
  register: function register(type, uniqueLocalName, fileName) {
    if (isCompositeComponent(type) && typeof uniqueLocalName === 'string' && uniqueLocalName && typeof fileName === 'string' && fileName) {
      var id = fileName + '#' + uniqueLocalName;
      var proxy = getProxyById(id);

      if (proxy && proxy.getCurrent() !== type) {
        // component got replaced. Need to reconcile
        increment();

        if (isTypeBlacklisted(type) || isTypeBlacklisted(proxy.getCurrent())) {
          logger.error('React-hot-loader: Cold component', uniqueLocalName, 'at', fileName, 'has been updated');
        }
      }

      if (configuration.onComponentRegister) {
        configuration.onComponentRegister(type, uniqueLocalName, fileName);
      }

      updateProxyById(id, type);
      registerComponent(type);
    }
  },
  reset: function reset() {
    resetProxies();
  },
  preact: function preact(instance) {
    preactAdapter(instance, _resolveType);
  },
  resolveType: function resolveType(type) {
    return _resolveType(type);
  },
  patch: function patch(React$$1) {
    if (!React$$1.createElement.isPatchedByReactHotLoader) {
      var originalCreateElement = React$$1.createElement;
      // Trick React into rendering a proxy so that
      // its state is preserved when the class changes.
      // This will update the proxy if it's for a known type.
      React$$1.createElement = function (type) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return originalCreateElement.apply(undefined, [_resolveType(type)].concat(args));
      };
      React$$1.createElement.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.createFactory.isPatchedByReactHotLoader) {
      // Patch React.createFactory to use patched createElement
      // because the original implementation uses the internal,
      // unpatched ReactElement.createElement
      React$$1.createFactory = function (type) {
        var factory = React$$1.createElement.bind(null, type);
        factory.type = type;
        return factory;
      };
      React$$1.createFactory.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.Children.only.isPatchedByReactHotLoader) {
      var originalChildrenOnly = React$$1.Children.only;
      // Use the same trick as React.createElement
      React$$1.Children.only = function (children) {
        return originalChildrenOnly(_extends({}, children, { type: _resolveType(children.type) }));
      };
      React$$1.Children.only.isPatchedByReactHotLoader = true;
    }

    reactHotLoader.reset();
  },


  disableProxyCreation: false
};

/* eslint-disable no-underscore-dangle */

function pushStack(stack, node) {
  stack.type = node.type;
  stack.children = [];
  stack.instance = typeof node.type === 'function' ? node.stateNode : stack;

  if (!stack.instance) {
    stack.instance = {
      SFC_fake: stack.type,
      props: {},
      render: function render() {
        return stack.type(stack.instance.props);
      }
    };
  }
}

function hydrateFiberStack(node, stack) {
  pushStack(stack, node);
  if (node.child) {
    var child = node.child;

    do {
      var childStack = {};
      hydrateFiberStack(child, childStack);
      stack.children.push(childStack);
      child = child.sibling;
    } while (child);
  }
}

/* eslint-disable no-underscore-dangle */

function pushState(stack, type, instance) {
  stack.type = type;
  stack.children = [];
  stack.instance = instance || stack;

  if (typeof type === 'function' && type.isStatelessFunctionalProxy) {
    // In React 15 SFC is wrapped by component. We have to detect our proxies and change the way it works
    stack.instance = {
      SFC_fake: type,
      props: {},
      render: function render() {
        return type(stack.instance.props);
      }
    };
  }
}

function hydrateLegacyStack(node, stack) {
  if (node._currentElement) {
    pushState(stack, node._currentElement.type, node._instance || stack);
  }

  if (node._renderedComponent) {
    var childStack = {};
    hydrateLegacyStack(node._renderedComponent, childStack);
    stack.children.push(childStack);
  } else if (node._renderedChildren) {
    Object.keys(node._renderedChildren).forEach(function (key) {
      var childStack = {};
      hydrateLegacyStack(node._renderedChildren[key], childStack);
      stack.children.push(childStack);
    });
  }
}

/* eslint-disable no-underscore-dangle */

function getReactStack(instance) {
  var rootNode = getInternalInstance(instance);
  var stack = {};
  if (rootNode) {
    // React stack
    var isFiber = typeof rootNode.tag === 'number';
    if (isFiber) {
      hydrateFiberStack(rootNode, stack);
    } else {
      hydrateLegacyStack(rootNode, stack);
    }
  }

  return stack;
}

// some `empty` names, React can autoset display name to...
var UNDEFINED_NAMES = {
  Unknown: true,
  Component: true
};

var renderStack = [];

var stackReport = function stackReport() {
  var rev = renderStack.slice().reverse();
  logger.warn('in', rev[0].name, rev);
};

var emptyMap = new Map();
var stackContext = function stackContext() {
  return (renderStack[renderStack.length - 1] || {}).context || emptyMap;
};
var areNamesEqual = function areNamesEqual(a, b) {
  return a === b || UNDEFINED_NAMES[a] && UNDEFINED_NAMES[b];
};
var shouldUseRenderMethod = function shouldUseRenderMethod(fn) {
  return fn && (isReactClassInstance(fn) || fn.SFC_fake);
};

var isFunctional = function isFunctional(fn) {
  return typeof fn === 'function';
};
var isArray = function isArray(fn) {
  return Array.isArray(fn);
};
var asArray = function asArray(a) {
  return isArray(a) ? a : [a];
};
var getTypeOf = function getTypeOf(type) {
  if (isReactClass(type)) return 'ReactComponent';
  if (isFunctional(type)) return 'StatelessFunctional';
  return 'Fragment'; // ?
};

var filterNullArray = function filterNullArray(a) {
  if (!a) return [];
  return a.filter(function (x) {
    return !!x;
  });
};

var unflatten = function unflatten(a) {
  return a.reduce(function (acc, a) {
    if (Array.isArray(a)) {
      acc.push.apply(acc, unflatten(a));
    } else {
      acc.push(a);
    }
    return acc;
  }, []);
};

var getElementType = function getElementType(child) {
  return child.type[UNWRAP_PROXY] ? child.type[UNWRAP_PROXY]() : child.type;
};

var haveTextSimilarity = function haveTextSimilarity(a, b) {
  return (
    // equal or slight changed
    a === b || levenshtein.get(a, b) < a.length * 0.2
  );
};

var equalClasses = function equalClasses(a, b) {
  var prototypeA = a.prototype;
  var prototypeB = Object.getPrototypeOf(b.prototype);

  var hits = 0;
  var misses = 0;
  var comparisons = 0;
  Object.getOwnPropertyNames(prototypeA).forEach(function (key) {
    var descriptorA = Object.getOwnPropertyDescriptor(prototypeA, key);
    var valueA = descriptorA && (descriptorA.value || descriptorA.get || descriptorA.set);
    var descriptorB = Object.getOwnPropertyDescriptor(prototypeB, key);
    var valueB = descriptorB && (descriptorB.value || descriptorB.get || descriptorB.set);

    if (typeof valueA === 'function' && key !== 'constructor') {
      comparisons++;
      if (haveTextSimilarity(String(valueA), String(valueB))) {
        hits++;
      } else {
        misses++;
        if (key === 'render') {
          misses++;
        }
      }
    }
  });
  // allow to add or remove one function
  return hits > 0 && misses <= 1 || comparisons === 0;
};

var areSwappable = function areSwappable(a, b) {
  // both are registered components and have the same name
  if (getIdByType(b) && getIdByType(a) === getIdByType(b)) {
    return true;
  }
  if (getTypeOf(a) !== getTypeOf(b)) {
    return false;
  }
  if (isReactClass(a)) {
    return areNamesEqual(getComponentDisplayName(a), getComponentDisplayName(b)) && equalClasses(a, b);
  }

  if (isFunctional(a)) {
    var nameA = getComponentDisplayName(a);
    return areNamesEqual(nameA, getComponentDisplayName(b)) && nameA !== 'Component' || haveTextSimilarity(String(a), String(b));
  }
  return false;
};

var render = function render(component) {
  if (!component) {
    return [];
  }
  if (shouldUseRenderMethod(component)) {
    // not calling real render method to prevent call recursion.
    // stateless components does not have hotComponentRender
    return component.hotComponentRender ? component.hotComponentRender() : component.render();
  }
  if (isArray(component)) {
    return component.map(render);
  }
  if (component.children) {
    return component.children;
  }

  return [];
};

var NO_CHILDREN = { children: [] };
var mapChildren = function mapChildren(children, instances) {
  return {
    children: children.filter(function (c) {
      return c;
    }).map(function (child, index) {
      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || child.isMerged) {
        return child;
      }
      var instanceLine = instances[index] || {};
      var oldChildren = asArray(instanceLine.children || []);

      if (Array.isArray(child)) {
        return _extends({
          type: null
        }, mapChildren(child, oldChildren));
      }

      var newChildren = asArray(child.props && child.props.children || child.children || []);
      var nextChildren = child.type !== 'function' && oldChildren.length && mapChildren(newChildren, oldChildren);

      return _extends({
        nextProps: child.props,
        isMerged: true
      }, instanceLine, nextChildren || {}, {
        type: child.type
      });
    })
  };
};

var mergeInject = function mergeInject(a, b, instance) {
  if (a && !Array.isArray(a)) {
    return mergeInject([a], b);
  }
  if (b && !Array.isArray(b)) {
    return mergeInject(a, [b]);
  }

  if (!a || !b) {
    return NO_CHILDREN;
  }
  if (a.length === b.length) {
    return mapChildren(a, b);
  }

  // in some cases (no confidence here) B could contain A except null children
  // in some cases - could not.
  // this depends on React version and the way you build component.

  var nonNullA = filterNullArray(a);
  if (nonNullA.length === b.length) {
    return mapChildren(nonNullA, b);
  }

  var flatA = unflatten(nonNullA);
  var flatB = unflatten(b);
  if (flatA.length === flatB.length) {
    return mapChildren(flatA, flatB);
  }
  if (flatB.length === 0 && flatA.length === 1 && _typeof(flatA[0]) !== 'object') ; else {
    logger.warn('React-hot-loader: unable to merge ', a, 'and children of ', instance);
    stackReport();
  }
  return NO_CHILDREN;
};

var transformFlowNode = function transformFlowNode(flow) {
  return flow.reduce(function (acc, node) {
    if (node && isFragmentNode(node)) {
      if (node.props && node.props.children) {
        return [].concat(acc, filterNullArray(asArray(node.props.children)));
      }
      if (node.children) {
        return [].concat(acc, filterNullArray(asArray(node.children)));
      }
    }
    return [].concat(acc, [node]);
  }, []);
};

var scheduledUpdates = [];
var scheduledUpdate = 0;

var flushScheduledUpdates = function flushScheduledUpdates() {
  var instances = scheduledUpdates;
  scheduledUpdates = [];
  scheduledUpdate = 0;
  instances.forEach(function (instance) {
    return instance[PROXY_IS_MOUNTED] && updateInstance(instance);
  });
};

var unscheduleUpdate = function unscheduleUpdate(instance) {
  scheduledUpdates = scheduledUpdates.filter(function (inst) {
    return inst !== instance;
  });
};

var scheduleInstanceUpdate = function scheduleInstanceUpdate(instance) {
  scheduledUpdates.push(instance);
  if (!scheduledUpdate) {
    scheduledUpdate = setTimeout(flushScheduledUpdates);
  }
};

var hotReplacementRender = function hotReplacementRender(instance, stack) {
  if (isReactClassInstance(instance)) {
    var type = getElementType(stack);

    renderStack.push({
      name: getComponentDisplayName(type),
      type: type,
      props: stack.instance.props,
      context: stackContext()
    });
  }
  var flow = transformFlowNode(filterNullArray(asArray(render(instance))));

  var children = stack.children;


  flow.forEach(function (child, index) {
    var stackChild = children[index];
    var next = function next(instance) {
      // copy over props as long new component may be hidden inside them
      // child does not have all props, as long some of them can be calculated on componentMount.
      var realProps = instance.props;
      var nextProps = _extends({}, realProps, child.nextProps || {}, child.props || {});

      if (isReactClassInstance(instance) && instance.componentWillUpdate) {
        // Force-refresh component (bypass redux renderedComponent)
        instance.componentWillUpdate(_extends({}, realProps), instance.state);
      }
      instance.props = nextProps;
      hotReplacementRender(instance, stackChild);
      instance.props = realProps;
    };

    // text node
    if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || !stackChild || !stackChild.instance) {
      if (stackChild && stackChild.children && stackChild.children.length) {
        logger.error('React-hot-loader: reconciliation failed', 'could not dive into [', child, '] while some elements are still present in the tree.');
        stackReport();
      }
      return;
    }

    if (_typeof(child.type) !== _typeof(stackChild.type)) {
      // Portals could generate undefined !== null
      if (child.type && stackChild.type) {
        logger.warn('React-hot-loader: got ', child.type, 'instead of', stackChild.type);
        stackReport();
      }
      return;
    }

    // React context
    if (isContextConsumer(child)) {
      try {
        next({
          children: (child.props ? child.props.children : child.children[0])(stackContext().get(child.type) || child.type[CONTEXT_CURRENT_VALUE])
        });
      } catch (e) {
        // do nothing, yet
      }
    } else if (typeof child.type !== 'function') {
      // React
      var childName = child.type ? getComponentDisplayName(child.type) : 'empty';
      var extraContext = stackContext();

      if (isContextProvider(child)) {
        extraContext = new Map(extraContext);
        extraContext.set(getContextProvider(child.type), _extends({}, child.nextProps || {}, child.props || {}).value);
        childName = 'ContextProvider';
      }

      renderStack.push({
        name: childName,
        type: child.type,
        props: stack.instance.props,
        context: extraContext
      });

      next(
      // move types from render to the instances of hydrated tree
      mergeInject(transformFlowNode(asArray(child.props ? child.props.children : child.children)), stackChild.instance.children, stackChild.instance));
      renderStack.pop();
    } else {
      if (child.type === stackChild.type) {
        next(stackChild.instance);
      } else {
        // unwrap proxy
        var childType = getElementType(child);
        if (!stackChild.type[PROXY_KEY]) {
          if (isTypeBlacklisted(stackChild.type)) {
            logger.warn('React-hot-loader: cold element got updated ', stackChild.type);
            return;
          }
          /* eslint-disable no-console */
          logger.error('React-hot-loader: fatal error caused by ', stackChild.type, ' - no instrumentation found. ', 'Please require react-hot-loader before React. More in troubleshooting.');
          stackReport();
          throw new Error('React-hot-loader: wrong configuration');
        }

        if (isRegisteredComponent(childType) || isRegisteredComponent(stackChild.type)) ; else if (areSwappable(childType, stackChild.type)) {
          // they are both registered, or have equal code/displayname/signature

          // update proxy using internal PROXY_KEY
          updateProxyById(stackChild.type[PROXY_KEY], childType);

          next(stackChild.instance);
        } else {
          logger.warn('React-hot-loader: a ' + getComponentDisplayName(childType) + ' was found where a ' + getComponentDisplayName(stackChild) + ' was expected.\n          ' + childType);
          stackReport();
        }
      }

      scheduleInstanceUpdate(stackChild.instance);
    }
  });

  if (isReactClassInstance(instance)) {
    renderStack.pop();
  }
};

var hotComponentCompare = function hotComponentCompare(oldType, newType) {
  if (oldType === newType) {
    return true;
  }

  if (areSwappable(newType, oldType)) {
    getProxyByType(newType[UNWRAP_PROXY]()).dereference();
    updateProxyById(oldType[PROXY_KEY], newType[UNWRAP_PROXY]());
    updateProxyById(newType[PROXY_KEY], oldType[UNWRAP_PROXY]());
    return true;
  }

  return false;
};

var hotReplacementRender$1 = (function (instance, stack) {
  try {
    // disable reconciler to prevent upcoming components from proxying.
    reactHotLoader.disableProxyCreation = true;
    renderStack = [];
    hotReplacementRender(instance, stack);
  } catch (e) {
    logger.warn('React-hot-loader: reconcilation failed due to error', e);
  } finally {
    reactHotLoader.disableProxyCreation = false;
  }
});

var reconcileHotReplacement = function reconcileHotReplacement(ReactInstance) {
  return hotReplacementRender$1(ReactInstance, getReactStack(ReactInstance));
};

var RENDERED_GENERATION = 'REACT_HOT_LOADER_RENDERED_GENERATION';

var renderReconciler = function renderReconciler(target, force) {
  // we are not inside parent reconcilation
  var currentGeneration = get$1();
  var componentGeneration = target[RENDERED_GENERATION];

  target[RENDERED_GENERATION] = currentGeneration;

  if (!reactHotLoader.disableProxyCreation) {
    if ((componentGeneration || force) && componentGeneration !== currentGeneration) {
      reconcileHotReplacement(target);
      return true;
    }
  }
  return false;
};

function asyncReconciledRender(target) {
  renderReconciler(target, false);
}

function proxyWrapper(element) {
  // post wrap on post render
  if (!reactHotLoader.disableProxyCreation) {
    unscheduleUpdate(this);
  }

  if (!element) {
    return element;
  }
  if (Array.isArray(element)) {
    return element.map(proxyWrapper);
  }
  if (typeof element.type === 'function') {
    var proxy = getProxyByType(element.type);
    if (proxy) {
      return _extends({}, element, {
        type: proxy.get()
      });
    }
  }
  return element;
}

setStandInOptions({
  componentWillRender: asyncReconciledRender,
  componentDidRender: proxyWrapper,
  componentDidUpdate: flushScheduledUpdates
});

var AppContainer = function (_React$Component) {
  inherits(AppContainer, _React$Component);

  function AppContainer() {
    var _temp, _this, _ret;

    classCallCheck(this, AppContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      error: null,
      // eslint-disable-next-line react/no-unused-state
      generation: 0
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  AppContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.generation !== get$1()) {
      // Hot reload is happening.
      return {
        error: null,
        generation: get$1()
      };
    }
    return null;
  };

  AppContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(prevProps, prevState) {
    // Don't update the component if the state had an error and still has one.
    // This allows to break an infinite loop of error -> render -> error -> render
    // https://github.com/gaearon/react-hot-loader/issues/696
    if (prevState.error && this.state.error) {
      return false;
    }

    return true;
  };

  AppContainer.prototype.componentDidCatch = function componentDidCatch(error) {
    logger.error(error);
    this.setState({ error: error });
  };

  AppContainer.prototype.render = function render() {
    var error = this.state.error;


    if (this.props.errorReporter && error) {
      return React__default.createElement(this.props.errorReporter, { error: error });
    }

    return React__default.Children.only(this.props.children);
  };

  return AppContainer;
}(React__default.Component);

AppContainer.propTypes = {
  children: function children(props) {
    if (React__default.Children.count(props.children) !== 1) {
      return new Error('Invalid prop "children" supplied to AppContainer. ' + 'Expected a single React element with your app’s root component, e.g. <App />.');
    }

    return undefined;
  },

  errorReporter: PropTypes.oneOfType([PropTypes.node, PropTypes.func])

  //  trying first react-lifecycles-compat.polyfill, then trying react-lifecycles-compat, which could be .default
};var realPolyfill = defaultPolyfill.polyfill || defaultPolyfill__default;
realPolyfill(AppContainer);

var openedModules = {};

var hotModules = {};

var createHotModule = function createHotModule() {
  return { instances: [], updateTimeout: 0 };
};

var hotModule = function hotModule(moduleId) {
  if (!hotModules[moduleId]) {
    hotModules[moduleId] = createHotModule();
  }
  return hotModules[moduleId];
};

var isOpened = function isOpened(sourceModule) {
  return sourceModule && !!openedModules[sourceModule.id];
};

var enter = function enter(sourceModule) {
  if (sourceModule && sourceModule.id) {
    openedModules[sourceModule.id] = true;
  } else {
    logger.warn('React-hot-loader: no `module` variable found. Do you shadow system variable?');
  }
};

var leave = function leave(sourceModule) {
  if (sourceModule && sourceModule.id) {
    delete openedModules[sourceModule.id];
  }
};

/* eslint-disable camelcase, no-undef */
var requireIndirect =  true ? __webpack_require__ : undefined;
/* eslint-enable */

var createHoc = function createHoc(SourceComponent, TargetComponent) {
  hoistNonReactStatic(TargetComponent, SourceComponent);
  TargetComponent.displayName = 'HotExported' + getComponentDisplayName(SourceComponent);
  return TargetComponent;
};

var makeHotExport = function makeHotExport(sourceModule) {
  var updateInstances = function updateInstances() {
    var module = hotModule(sourceModule.id);
    clearTimeout(module.updateTimeout);
    module.updateTimeout = setTimeout(function () {
      try {
        requireIndirect(sourceModule.id);
      } catch (e) {
        // just swallow
      }
      module.instances.forEach(function (inst) {
        return inst.forceUpdate();
      });
    });
  };

  if (sourceModule.hot) {
    // Mark as self-accepted for Webpack
    // Update instances for Parcel
    sourceModule.hot.accept(updateInstances);

    // Webpack way
    if (sourceModule.hot.addStatusHandler) {
      if (sourceModule.hot.status() === 'idle') {
        sourceModule.hot.addStatusHandler(function (status) {
          if (status === 'apply') {
            updateInstances();
          }
        });
      }
    }
  }
};

var hot = function hot(sourceModule) {
  if (!sourceModule || !sourceModule.id) {
    // this is fatal
    throw new Error('React-hot-loader: `hot` could not find the `id` property in the `module` you have provided');
  }
  var moduleId = sourceModule.id;
  var module = hotModule(moduleId);
  makeHotExport(sourceModule);

  // TODO: Ensure that all exports from this file are react components.

  return function (WrappedComponent) {
    // register proxy for wrapped component
    reactHotLoader.register(WrappedComponent, getComponentDisplayName(WrappedComponent), 'RHL' + moduleId);

    return createHoc(WrappedComponent, function (_Component) {
      inherits(ExportedComponent, _Component);

      function ExportedComponent() {
        classCallCheck(this, ExportedComponent);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ExportedComponent.prototype.componentDidMount = function componentDidMount() {
        module.instances.push(this);
      };

      ExportedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        var _this2 = this;

        if (isOpened(sourceModule)) {
          var componentName = getComponentDisplayName(WrappedComponent);
          logger.error('React-hot-loader: Detected AppContainer unmount on module \'' + moduleId + '\' update.\n' + ('Did you use "hot(' + componentName + ')" and "ReactDOM.render()" in the same file?\n') + ('"hot(' + componentName + ')" shall only be used as export.\n') + 'Please refer to "Getting Started" (https://github.com/gaearon/react-hot-loader/).');
        }
        module.instances = module.instances.filter(function (a) {
          return a !== _this2;
        });
      };

      ExportedComponent.prototype.render = function render() {
        return React__default.createElement(
          AppContainer,
          null,
          React__default.createElement(WrappedComponent, this.props)
        );
      };

      return ExportedComponent;
    }(React.Component));
  };
};

var getProxyOrType = function getProxyOrType(type) {
  var proxy = getProxyByType(type);
  return proxy ? proxy.get() : type;
};

var areComponentsEqual = function areComponentsEqual(a, b) {
  return getProxyOrType(a) === getProxyOrType(b);
};

var compareOrSwap = function compareOrSwap(oldType, newType) {
  return hotComponentCompare(oldType, newType);
};

var cold = function cold(type) {
  blacklistByType(type);
  return type;
};

var setConfig = function setConfig(config) {
  return Object.assign(configuration, config);
};

reactHotLoader.patch(React__default);

exports.default = reactHotLoader;
exports.AppContainer = AppContainer;
exports.hot = hot;
exports.enterModule = enter;
exports.leaveModule = leave;
exports.areComponentsEqual = areComponentsEqual;
exports.compareOrSwap = compareOrSwap;
exports.cold = cold;
exports.setConfig = setConfig;


/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},AppContainer=function(t){function e(){return classCallCheck(this,e),possibleConstructorReturn(this,t.apply(this,arguments))}return inherits(e,t),e.prototype.render=function(){return React.Children.only(this.props.children)},e}(React.Component),hot_prod=function(){return function(t){return t}},areComponentsEqual=function(t,e){return t===e},setConfig=function(){},cold=function(t){return t};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold;


/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var evalAllowed = false;
try {
  eval('evalAllowed = true');
} catch (e) {
  // eval not allowed due to CSP
}

// RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods
var platformSupported = !!Object.setPrototypeOf && evalAllowed;

if (!module.hot || "development" === 'production' || !platformSupported) {
  if (true) {
    // we are not in prod mode, but RHL could not be activated
    console.warn('React-Hot-Loaded is not supported in this environment');
  }
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else {
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.development.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.5.2';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_PLACEHOLDER_TYPE = hasSymbol ? Symbol.for('react.placeholder') : 0xead1;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

// Exports ReactDOM.createRoot


// Experimental error-boundary API that can recover from errors within a single
// render phase

// Suspense
var enableSuspense = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Warn about legacy context API


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var _args$map = args.map(function (item) {
        return '' + item;
      }),
          a = _args$map[0],
          b = _args$map[1],
          c = _args$map[2],
          d = _args$map[3],
          e = _args$map[4],
          f = _args$map[5],
          g = _args$map[6],
          h = _args$map[7];

      var message = 'Warning: ' + format;

      // We intentionally don't use spread (or .apply) because it breaks IE9:
      // https://github.com/facebook/react/issues/13610
      switch (args.length) {
        case 0:
          console.error(message);
          break;
        case 1:
          console.error(message, a);
          break;
        case 2:
          console.error(message, a, b);
          break;
        case 3:
          console.error(message, a, b, c);
          break;
        case 4:
          console.error(message, a, b, c, d);
          break;
        case 5:
          console.error(message, a, b, c, d, e);
          break;
        case 6:
          console.error(message, a, b, c, d, e, f);
          break;
        case 7:
          console.error(message, a, b, c, d, e, f, g);
          break;
        case 8:
          console.error(message, a, b, c, d, e, f, g, h);
          break;
        default:
          throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
      }
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var _message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(_message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null,
  currentDispatcher: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;




function refineResolvedThenable(thenable) {
  return thenable._reactStatus === Resolved ? thenable._reactResult : null;
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_ASYNC_MODE_TYPE:
      return 'AsyncMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_PLACEHOLDER_TYPE:
      return 'Placeholder';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        var renderFn = type.render;
        var functionName = renderFn.displayName || renderFn.name || '';
        return type.displayName || (functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef');
    }
    if (typeof type.then === 'function') {
      var thenable = type;
      var resolvedThenable = refineResolvedThenable(thenable);
      if (resolvedThenable) {
        return getComponentName(resolvedThenable);
      }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function readContext(context, observedBits) {
  var dispatcher = ReactCurrentOwner.currentDispatcher;
  !(dispatcher !== null) ? invariant(false, 'Context.unstable_read(): Context can only be read while React is rendering, e.g. inside the render method or getDerivedStateFromProps.') : void 0;
  return dispatcher.readContext(context, observedBits);
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // These are circular
    Provider: null,
    Consumer: null,
    unstable_read: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  context.Consumer = context;
  context.unstable_read = readContext.bind(null, context);

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var thenable = null;
  return {
    then: function (resolve, reject) {
      if (thenable === null) {
        // Lazily create thenable by wrapping in an extra thenable.
        thenable = ctor();
        ctor = null;
      }
      return thenable.then(resolve, reject);
    },

    // React uses these fields to store the result.
    _reactStatus: -1,
    _reactResult: null
  };
}

function forwardRef(render) {
  {
    if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_PLACEHOLDER_TYPE || typeof type === 'object' && type !== null && (typeof type.then === 'function' || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  var name = void 0,
      propTypes = void 0;
  if (typeof type === 'function') {
    // Class or functional component
    name = type.displayName || type.name;
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
    // ForwardRef
    var functionName = type.render.displayName || type.render.name || '';
    name = type.displayName || (functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef');
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

if (enableSuspense) {
  React.Placeholder = REACT_PLACEHOLDER_TYPE;
  React.lazy = lazy;
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/pages/installation/Mainnet.md":
/*!*******************************************!*\
  !*** ./src/pages/installation/Mainnet.md ***!
  \*******************************************/
/*! exports provided: frontMatter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactMarkdown; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


;
var frontMatter = {};

var ReactMarkdown =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ReactMarkdown, _React$PureComponent);

  function ReactMarkdown() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ReactMarkdown);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ReactMarkdown).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ReactMarkdown, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        id: "mainnet"
      }, "Mainnet");
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ReactMarkdown;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(frontMatter, "frontMatter", "/home/julian/Development/risevision.github.io/src/pages/installation/Mainnet.md");
  reactHotLoader.register(ReactMarkdown, "ReactMarkdown", "/home/julian/Development/risevision.github.io/src/pages/installation/Mainnet.md");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3QtbGV2ZW5zaHRlaW4vbGV2ZW5zaHRlaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9kaXN0L3JlYWN0LWhvdC1sb2FkZXIuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhvdC1sb2FkZXIvZGlzdC9yZWFjdC1ob3QtbG9hZGVyLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ob3QtbG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5zdGFsbGF0aW9uL01haW5uZXQubWQiXSwibmFtZXMiOlsiZnJvbnRNYXR0ZXIiLCJSZWFjdE1hcmtkb3duIiwicHJvcHMiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ1BBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsMkI7Ozs7Ozs7Ozs7O0FDakJBLGNBQWMsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXpDLDRCQUE0QixtQkFBTyxDQUFDLCtGQUF5Qjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0Qzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDVEEsd0JBQXdCLDJFQUEyRSxvQ0FBb0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLG9DQUFvQyw4SEFBOEgsR0FBRyxFQUFFLHNCQUFzQjs7QUFFblc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpSEFBaUgsc0JBQXNCO0FBQ3ZJLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDOztBQUVBLHFCQUFxQixhQUFhO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDOztBQUVBLHFCQUFxQixhQUFhO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQU0sVUFBYSxvQkFBb0IsOEZBQU0sYUFBYSxnR0FBVTtBQUNwRSxJQUFJLG1DQUFPO0FBQ1g7QUFDQSxLQUFLO0FBQUEsb0dBQUM7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RJWTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBLElBQUksSUFBcUM7QUFDekMsNkJBQTZCLG1CQUFPLENBQUMseUZBQTRCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRHQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLDREQUFlOztBQUVwQywyQkFBMkIsbUJBQU8sQ0FBQyx5RkFBNEI7QUFDL0QscUJBQXFCLG1CQUFPLENBQUMscUVBQWtCOztBQUUvQzs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsYUFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsd0ZBQXdGLFNBQU07QUFDekk7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixTQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsdUZBQTJCO0FBQ3RELENBQUMsTUFBTSxFQUlOOzs7Ozs7Ozs7Ozs7O0FDM0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1hhOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RCwrQkFBK0IsaUZBQWlGOztBQUVoSCxZQUFZLG1CQUFPLENBQUMsNENBQU87QUFDM0I7QUFDQSxtQ0FBbUMsbUJBQU8sQ0FBQywwREFBYztBQUN6RCxrQ0FBa0MsbUJBQU8sQ0FBQyx3RUFBa0I7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsc0RBQVk7QUFDcEQsc0JBQXNCLG1CQUFPLENBQUMscUdBQXlCO0FBQ3ZEO0FBQ0EsMENBQTBDLG1CQUFPLENBQUMsMkdBQXlCOztBQUUzRTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLDhDQUE4QztBQUNsRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx1SEFBdUgsdURBQXVELG1DQUFtQyw2RUFBNkUsS0FBSyxHQUFHOztBQUV0UztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRiw4QkFBOEI7QUFDL0csNENBQTRDO0FBQzVDLFdBQVcsdURBQXVELGFBQWE7QUFDL0UsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSx3RUFBd0UsZUFBZTtBQUN2RjtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0VBQXNFLGVBQWU7QUFDckY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUEsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEYsYUFBYTtBQUN2RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsYUFBYSxvQ0FBb0M7QUFDaEc7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtDQUFrQztBQUN6QztBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkU7QUFBMEI7QUFFbkIsSUFBTUEsV0FBVyxHQUFHLEVBQXBCOztJQUVjQyxhOzs7Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsVUFBTUMsS0FBSyxHQUFHLEtBQUtBLEtBQW5CO0FBRUEsYUFBTztBQUFJLFVBQUUsRUFBQztBQUFQLG1CQUFQO0FBRUQ7Ozs7Ozs7Ozs7O0VBTndDQyw0Q0FBSyxDQUFDQyxhOzs7Ozs7Ozs7Ozs7OzswQkFGcENKLFc7MEJBRVFDLGEiLCJmaWxlIjoiNC5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgXG4gIHZhciBjb2xsYXRvcjtcbiAgdHJ5IHtcbiAgICBjb2xsYXRvciA9ICh0eXBlb2YgSW50bCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgSW50bC5Db2xsYXRvciAhPT0gXCJ1bmRlZmluZWRcIikgPyBJbnRsLkNvbGxhdG9yKFwiZ2VuZXJpY1wiLCB7IHNlbnNpdGl2aXR5OiBcImJhc2VcIiB9KSA6IG51bGw7XG4gIH0gY2F0Y2ggKGVycil7XG4gICAgY29uc29sZS5sb2coXCJDb2xsYXRvciBjb3VsZCBub3QgYmUgaW5pdGlhbGl6ZWQgYW5kIHdvdWxkbid0IGJlIHVzZWRcIik7XG4gIH1cbiAgLy8gYXJyYXlzIHRvIHJlLXVzZVxuICB2YXIgcHJldlJvdyA9IFtdLFxuICAgIHN0cjJDaGFyID0gW107XG4gIFxuICAvKipcbiAgICogQmFzZWQgb24gdGhlIGFsZ29yaXRobSBhdCBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xldmVuc2h0ZWluX2Rpc3RhbmNlLlxuICAgKi9cbiAgdmFyIExldmVuc2h0ZWluID0ge1xuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBsZXZlbnNodGVpbiBkaXN0YW5jZSBvZiB0aGUgdHdvIHN0cmluZ3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyMSBTdHJpbmcgdGhlIGZpcnN0IHN0cmluZy5cbiAgICAgKiBAcGFyYW0gc3RyMiBTdHJpbmcgdGhlIHNlY29uZCBzdHJpbmcuXG4gICAgICogQHBhcmFtIFtvcHRpb25zXSBBZGRpdGlvbmFsIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIFtvcHRpb25zLnVzZUNvbGxhdG9yXSBVc2UgYEludGwuQ29sbGF0b3JgIGZvciBsb2NhbGUtc2Vuc2l0aXZlIHN0cmluZyBjb21wYXJpc29uLlxuICAgICAqIEByZXR1cm4gSW50ZWdlciB0aGUgbGV2ZW5zaHRlaW4gZGlzdGFuY2UgKDAgYW5kIGFib3ZlKS5cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKHN0cjEsIHN0cjIsIG9wdGlvbnMpIHtcbiAgICAgIHZhciB1c2VDb2xsYXRvciA9IChvcHRpb25zICYmIGNvbGxhdG9yICYmIG9wdGlvbnMudXNlQ29sbGF0b3IpO1xuICAgICAgXG4gICAgICB2YXIgc3RyMUxlbiA9IHN0cjEubGVuZ3RoLFxuICAgICAgICBzdHIyTGVuID0gc3RyMi5sZW5ndGg7XG4gICAgICBcbiAgICAgIC8vIGJhc2UgY2FzZXNcbiAgICAgIGlmIChzdHIxTGVuID09PSAwKSByZXR1cm4gc3RyMkxlbjtcbiAgICAgIGlmIChzdHIyTGVuID09PSAwKSByZXR1cm4gc3RyMUxlbjtcblxuICAgICAgLy8gdHdvIHJvd3NcbiAgICAgIHZhciBjdXJDb2wsIG5leHRDb2wsIGksIGosIHRtcDtcblxuICAgICAgLy8gaW5pdGlhbGlzZSBwcmV2aW91cyByb3dcbiAgICAgIGZvciAoaT0wOyBpPHN0cjJMZW47ICsraSkge1xuICAgICAgICBwcmV2Um93W2ldID0gaTtcbiAgICAgICAgc3RyMkNoYXJbaV0gPSBzdHIyLmNoYXJDb2RlQXQoaSk7XG4gICAgICB9XG4gICAgICBwcmV2Um93W3N0cjJMZW5dID0gc3RyMkxlbjtcblxuICAgICAgdmFyIHN0ckNtcDtcbiAgICAgIGlmICh1c2VDb2xsYXRvcikge1xuICAgICAgICAvLyBjYWxjdWxhdGUgY3VycmVudCByb3cgZGlzdGFuY2UgZnJvbSBwcmV2aW91cyByb3cgdXNpbmcgY29sbGF0b3JcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0cjFMZW47ICsraSkge1xuICAgICAgICAgIG5leHRDb2wgPSBpICsgMTtcblxuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBzdHIyTGVuOyArK2opIHtcbiAgICAgICAgICAgIGN1ckNvbCA9IG5leHRDb2w7XG5cbiAgICAgICAgICAgIC8vIHN1YnN0dXRpb25cbiAgICAgICAgICAgIHN0ckNtcCA9IDAgPT09IGNvbGxhdG9yLmNvbXBhcmUoc3RyMS5jaGFyQXQoaSksIFN0cmluZy5mcm9tQ2hhckNvZGUoc3RyMkNoYXJbal0pKTtcblxuICAgICAgICAgICAgbmV4dENvbCA9IHByZXZSb3dbal0gKyAoc3RyQ21wID8gMCA6IDEpO1xuXG4gICAgICAgICAgICAvLyBpbnNlcnRpb25cbiAgICAgICAgICAgIHRtcCA9IGN1ckNvbCArIDE7XG4gICAgICAgICAgICBpZiAobmV4dENvbCA+IHRtcCkge1xuICAgICAgICAgICAgICBuZXh0Q29sID0gdG1wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVsZXRpb25cbiAgICAgICAgICAgIHRtcCA9IHByZXZSb3dbaiArIDFdICsgMTtcbiAgICAgICAgICAgIGlmIChuZXh0Q29sID4gdG1wKSB7XG4gICAgICAgICAgICAgIG5leHRDb2wgPSB0bXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvcHkgY3VycmVudCBjb2wgdmFsdWUgaW50byBwcmV2aW91cyAoaW4gcHJlcGFyYXRpb24gZm9yIG5leHQgaXRlcmF0aW9uKVxuICAgICAgICAgICAgcHJldlJvd1tqXSA9IGN1ckNvbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjb3B5IGxhc3QgY29sIHZhbHVlIGludG8gcHJldmlvdXMgKGluIHByZXBhcmF0aW9uIGZvciBuZXh0IGl0ZXJhdGlvbilcbiAgICAgICAgICBwcmV2Um93W2pdID0gbmV4dENvbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBjdXJyZW50IHJvdyBkaXN0YW5jZSBmcm9tIHByZXZpb3VzIHJvdyB3aXRob3V0IGNvbGxhdG9yXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHIxTGVuOyArK2kpIHtcbiAgICAgICAgICBuZXh0Q29sID0gaSArIDE7XG5cbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc3RyMkxlbjsgKytqKSB7XG4gICAgICAgICAgICBjdXJDb2wgPSBuZXh0Q29sO1xuXG4gICAgICAgICAgICAvLyBzdWJzdHV0aW9uXG4gICAgICAgICAgICBzdHJDbXAgPSBzdHIxLmNoYXJDb2RlQXQoaSkgPT09IHN0cjJDaGFyW2pdO1xuXG4gICAgICAgICAgICBuZXh0Q29sID0gcHJldlJvd1tqXSArIChzdHJDbXAgPyAwIDogMSk7XG5cbiAgICAgICAgICAgIC8vIGluc2VydGlvblxuICAgICAgICAgICAgdG1wID0gY3VyQ29sICsgMTtcbiAgICAgICAgICAgIGlmIChuZXh0Q29sID4gdG1wKSB7XG4gICAgICAgICAgICAgIG5leHRDb2wgPSB0bXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWxldGlvblxuICAgICAgICAgICAgdG1wID0gcHJldlJvd1tqICsgMV0gKyAxO1xuICAgICAgICAgICAgaWYgKG5leHRDb2wgPiB0bXApIHtcbiAgICAgICAgICAgICAgbmV4dENvbCA9IHRtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29weSBjdXJyZW50IGNvbCB2YWx1ZSBpbnRvIHByZXZpb3VzIChpbiBwcmVwYXJhdGlvbiBmb3IgbmV4dCBpdGVyYXRpb24pXG4gICAgICAgICAgICBwcmV2Um93W2pdID0gY3VyQ29sO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNvcHkgbGFzdCBjb2wgdmFsdWUgaW50byBwcmV2aW91cyAoaW4gcHJlcGFyYXRpb24gZm9yIG5leHQgaXRlcmF0aW9uKVxuICAgICAgICAgIHByZXZSb3dbal0gPSBuZXh0Q29sO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dENvbDtcbiAgICB9XG5cbiAgfTtcblxuICAvLyBhbWRcbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gTGV2ZW5zaHRlaW47XG4gICAgfSk7XG4gIH1cbiAgLy8gY29tbW9uanNcbiAgZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUgIT09IG51bGwgJiYgdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMgPT09IGV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IExldmVuc2h0ZWluO1xuICB9XG4gIC8vIHdlYiB3b3JrZXJcbiAgZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHNlbGYucG9zdE1lc3NhZ2UgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNlbGYuaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNlbGYuTGV2ZW5zaHRlaW4gPSBMZXZlbnNodGVpbjtcbiAgfVxuICAvLyBicm93c2VyIG1haW4gdGhyZWFkXG4gIGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93ICE9PSBudWxsKSB7XG4gICAgd2luZG93LkxldmVuc2h0ZWluID0gTGV2ZW5zaHRlaW47XG4gIH1cbn0oKSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBjYWxsZWU6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZiAmJiBnZXRQcm90b3R5cGVPZihPYmplY3QpO1xuXG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICAgICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmICghUkVBQ1RfU1RBVElDU1trZXldICYmICFLTk9XTl9TVEFUSUNTW2tleV0gJiYgKCFibGFja2xpc3QgfHwgIWJsYWNrbGlzdFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgICAgICAgICB0cnkgeyAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAocHJvcFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0X19kZWZhdWx0ID0gX2ludGVyb3BEZWZhdWx0KFJlYWN0KTtcbnZhciBzaGFsbG93RXF1YWwgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnc2hhbGxvd2VxdWFsJykpO1xudmFyIGxldmVuc2h0ZWluID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ2Zhc3QtbGV2ZW5zaHRlaW4nKSk7XG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3Byb3AtdHlwZXMnKSk7XG52YXIgZGVmYXVsdFBvbHlmaWxsID0gcmVxdWlyZSgncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnKTtcbnZhciBkZWZhdWx0UG9seWZpbGxfX2RlZmF1bHQgPSBfaW50ZXJvcERlZmF1bHQoZGVmYXVsdFBvbHlmaWxsKTtcbnZhciBob2lzdE5vblJlYWN0U3RhdGljID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJykpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxudmFyIGlzQ29tcG9zaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gaXNDb21wb3NpdGVDb21wb25lbnQodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUgPSBmdW5jdGlvbiBnZXRDb21wb25lbnREaXNwbGF5TmFtZSh0eXBlKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lO1xuICByZXR1cm4gZGlzcGxheU5hbWUgJiYgZGlzcGxheU5hbWUgIT09ICdSZWFjdENvbXBvbmVudCcgPyBkaXNwbGF5TmFtZSA6ICdDb21wb25lbnQnO1xufTtcblxudmFyIHJlYWN0TGlmZUN5Y2xlTW91bnRNZXRob2RzID0gWydjb21wb25lbnRXaWxsTW91bnQnLCAnY29tcG9uZW50RGlkTW91bnQnXTtcblxuZnVuY3Rpb24gaXNSZWFjdENsYXNzKENvbXBvbmVudCkge1xuICByZXR1cm4gISEoQ29tcG9uZW50LnByb3RvdHlwZSAmJiAoUmVhY3RfX2RlZmF1bHQuQ29tcG9uZW50LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKENvbXBvbmVudC5wcm90b3R5cGUpIHx8XG4gIC8vIHJlYWN0IDE0IHN1cHBvcnRcbiAgQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50IHx8IENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50IHx8IENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgfHwgQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCB8fCBDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZFVubW91bnQgfHwgQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIpKTtcbn1cblxuZnVuY3Rpb24gaXNSZWFjdENsYXNzSW5zdGFuY2UoQ29tcG9uZW50KSB7XG4gIHJldHVybiBDb21wb25lbnQgJiYgaXNSZWFjdENsYXNzKHsgcHJvdG90eXBlOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29tcG9uZW50KSB9KTtcbn1cblxudmFyIGdldEludGVybmFsSW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnRlcm5hbEluc3RhbmNlKGluc3RhbmNlKSB7XG4gIHJldHVybiBpbnN0YW5jZS5fcmVhY3RJbnRlcm5hbEZpYmVyIHx8IC8vIFJlYWN0IDE2XG4gIGluc3RhbmNlLl9yZWFjdEludGVybmFsSW5zdGFuY2UgfHwgLy8gUmVhY3QgMTVcbiAgbnVsbDtcbn07XG5cbnZhciB1cGRhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIHVwZGF0ZUluc3RhbmNlKGluc3RhbmNlKSB7XG4gIHZhciB1cGRhdGVyID0gaW5zdGFuY2UudXBkYXRlcixcbiAgICAgIGZvcmNlVXBkYXRlID0gaW5zdGFuY2UuZm9yY2VVcGRhdGU7XG5cbiAgaWYgKHR5cGVvZiBmb3JjZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gIH0gZWxzZSBpZiAodXBkYXRlciAmJiB0eXBlb2YgdXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB1cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZShpbnN0YW5jZSk7XG4gIH1cbn07XG5cbnZhciBpc0ZyYWdtZW50Tm9kZSA9IGZ1bmN0aW9uIGlzRnJhZ21lbnROb2RlKF9yZWYpIHtcbiAgdmFyIHR5cGUgPSBfcmVmLnR5cGU7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5GcmFnbWVudCAmJiB0eXBlID09PSBSZWFjdF9fZGVmYXVsdC5GcmFnbWVudDtcbn07XG5cbnZhciBDb250ZXh0VHlwZSA9IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUNvbnRleHQgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVDb250ZXh0KCkgOiBudWxsO1xudmFyIENvbnN1bWVyVHlwZSA9IENvbnRleHRUeXBlICYmIENvbnRleHRUeXBlLkNvbnN1bWVyLiQkdHlwZW9mO1xudmFyIFByb3ZpZGVyVHlwZSA9IENvbnRleHRUeXBlICYmIENvbnRleHRUeXBlLlByb3ZpZGVyLiQkdHlwZW9mO1xuXG52YXIgQ09OVEVYVF9DVVJSRU5UX1ZBTFVFID0gJ19jdXJyZW50VmFsdWUnO1xuXG52YXIgaXNDb250ZXh0Q29uc3VtZXIgPSBmdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihfcmVmMikge1xuICB2YXIgdHlwZSA9IF9yZWYyLnR5cGU7XG4gIHJldHVybiB0eXBlICYmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHlwZSkpID09PSAnb2JqZWN0JyAmJiB0eXBlLiQkdHlwZW9mID09PSBDb25zdW1lclR5cGU7XG59O1xudmFyIGlzQ29udGV4dFByb3ZpZGVyID0gZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIoX3JlZjMpIHtcbiAgdmFyIHR5cGUgPSBfcmVmMy50eXBlO1xuICByZXR1cm4gdHlwZSAmJiAodHlwZW9mIHR5cGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHR5cGUpKSA9PT0gJ29iamVjdCcgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUHJvdmlkZXJUeXBlO1xufTtcbnZhciBnZXRDb250ZXh0UHJvdmlkZXIgPSBmdW5jdGlvbiBnZXRDb250ZXh0UHJvdmlkZXIodHlwZSkge1xuICByZXR1cm4gdHlwZSAmJiB0eXBlLl9jb250ZXh0O1xufTtcblxudmFyIGdlbmVyYXRpb24gPSAxO1xuXG52YXIgaW5jcmVtZW50ID0gZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICByZXR1cm4gZ2VuZXJhdGlvbisrO1xufTtcbnZhciBnZXQkMSA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgcmV0dXJuIGdlbmVyYXRpb247XG59O1xuXG52YXIgUFJFRklYID0gJ19fcmVhY3RzdGFuZGluX18nO1xudmFyIFBST1hZX0tFWSA9IFBSRUZJWCArICdrZXknO1xudmFyIEdFTkVSQVRJT04gPSBQUkVGSVggKyAncHJveHlHZW5lcmF0aW9uJztcbnZhciBSRUdFTkVSQVRFX01FVEhPRCA9IFBSRUZJWCArICdyZWdlbmVyYXRlQnlFdmFsJztcbnZhciBVTldSQVBfUFJPWFkgPSBQUkVGSVggKyAnZ2V0Q3VycmVudCc7XG52YXIgQ0FDSEVEX1JFU1VMVCA9IFBSRUZJWCArICdjYWNoZWRSZXN1bHQnO1xudmFyIFBST1hZX0lTX01PVU5URUQgPSBQUkVGSVggKyAnaXNNb3VudGVkJztcblxudmFyIGNvbmZpZ3VyYXRpb24gPSB7XG4gIC8vIExvZyBsZXZlbFxuICBsb2dMZXZlbDogJ2Vycm9yJyxcblxuICAvLyBBbGxvd3MgdXNpbmcgU0ZDIHdpdGhvdXQgY2hhbmdlcy4gbGVhZGluZyB0byBzb21lIGNvbXBvbmVudHMgbm90IHVwZGF0ZWRcbiAgcHVyZVNGQzogZmFsc2UsXG5cbiAgLy8gQWxsb3dzIFNGQyB0byBiZSB1c2VkLCBlbmFibGVzIFwiaW50ZXJtZWRpYXRlXCIgY29tcG9uZW50cyB1c2VkIGJ5IFJlbGF5LCBzaG91bGQgYmUgZGlzYWJsZWQgZm9yIFByZWFjdFxuICBhbGxvd1NGQzogdHJ1ZSxcblxuICAvLyBIb29rIG9uIGJhYmVsIGNvbXBvbmVudCByZWdpc3Rlci5cbiAgb25Db21wb25lbnRSZWdpc3RlcjogZmFsc2Vcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxudmFyIGxvZ2dlciA9IHtcbiAgZGVidWc6IGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIGlmIChbJ2RlYnVnJ10uaW5kZXhPZihjb25maWd1cmF0aW9uLmxvZ0xldmVsKSAhPT0gLTEpIHtcbiAgICAgIHZhciBfY29uc29sZTtcblxuICAgICAgKF9jb25zb2xlID0gY29uc29sZSkuZGVidWcuYXBwbHkoX2NvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LFxuICBsb2c6IGZ1bmN0aW9uIGxvZygpIHtcbiAgICBpZiAoWydkZWJ1ZycsICdsb2cnXS5pbmRleE9mKGNvbmZpZ3VyYXRpb24ubG9nTGV2ZWwpICE9PSAtMSkge1xuICAgICAgdmFyIF9jb25zb2xlMjtcblxuICAgICAgKF9jb25zb2xlMiA9IGNvbnNvbGUpLmxvZy5hcHBseShfY29uc29sZTIsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LFxuICB3YXJuOiBmdW5jdGlvbiB3YXJuKCkge1xuICAgIGlmIChbJ2RlYnVnJywgJ2xvZycsICd3YXJuJ10uaW5kZXhPZihjb25maWd1cmF0aW9uLmxvZ0xldmVsKSAhPT0gLTEpIHtcbiAgICAgIHZhciBfY29uc29sZTM7XG5cbiAgICAgIChfY29uc29sZTMgPSBjb25zb2xlKS53YXJuLmFwcGx5KF9jb25zb2xlMywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICBpZiAoWydkZWJ1ZycsICdsb2cnLCAnd2FybicsICdlcnJvciddLmluZGV4T2YoY29uZmlndXJhdGlvbi5sb2dMZXZlbCkgIT09IC0xKSB7XG4gICAgICB2YXIgX2NvbnNvbGU0O1xuXG4gICAgICAoX2NvbnNvbGU0ID0gY29uc29sZSkuZXJyb3IuYXBwbHkoX2NvbnNvbGU0LCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tZXZhbCwgZnVuYy1uYW1lcyAqL1xuXG5mdW5jdGlvbiBzYWZlUmVhY3RDb25zdHJ1Y3RvcihDb21wb25lbnQsIGxhc3RJbnN0YW5jZSkge1xuICB0cnkge1xuICAgIGlmIChsYXN0SW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBuZXcgQ29tcG9uZW50KGxhc3RJbnN0YW5jZS5wcm9wcywgbGFzdEluc3RhbmNlLmNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENvbXBvbmVudCh7fSwge30pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gc29tZSBjb21wb25lbnRzLCBsaWtlIFJlZHV4IGNvbm5lY3QgY291bGQgbm90IGJlIGNyZWF0ZWQgd2l0aG91dCBwcm9wZXIgY29udGV4dFxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBpc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyBmbi50b1N0cmluZygpLmluZGV4T2YoJ1tuYXRpdmUgY29kZV0nKSA+IDAgOiBmYWxzZTtcbn1cblxudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkoYSkge1xuICByZXR1cm4gYTtcbn07XG52YXIgaW5kaXJlY3RFdmFsID0gZXZhbDtcblxudmFyIGRvZXNTdXBwb3J0Q2xhc3NlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBpbmRpcmVjdEV2YWwoJ2NsYXNzIFRlc3Qge30nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSgpO1xuXG52YXIgRVM2UHJveHlDb21wb25lbnRGYWN0b3J5ID0gZG9lc1N1cHBvcnRDbGFzc2VzICYmIGluZGlyZWN0RXZhbCgnXFxuKGZ1bmN0aW9uKEluaXRpYWxQYXJlbnQsIHBvc3RDb25zdHJ1Y3Rpb25BY3Rpb24pIHtcXG4gIHJldHVybiBjbGFzcyBQcm94eUNvbXBvbmVudCBleHRlbmRzIEluaXRpYWxQYXJlbnQge1xcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xcbiAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxcbiAgICAgIHBvc3RDb25zdHJ1Y3Rpb25BY3Rpb24uY2FsbCh0aGlzKVxcbiAgICB9XFxuICB9XFxufSlcXG4nKTtcblxudmFyIEVTNVByb3h5Q29tcG9uZW50RmFjdG9yeSA9IGZ1bmN0aW9uIEVTNVByb3h5Q29tcG9uZW50RmFjdG9yeShJbml0aWFsUGFyZW50LCBwb3N0Q29uc3RydWN0aW9uQWN0aW9uKSB7XG4gIGZ1bmN0aW9uIFByb3h5Q29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG4gICAgSW5pdGlhbFBhcmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KTtcbiAgICBwb3N0Q29uc3RydWN0aW9uQWN0aW9uLmNhbGwodGhpcyk7XG4gIH1cbiAgUHJveHlDb21wb25lbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbml0aWFsUGFyZW50LnByb3RvdHlwZSk7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihQcm94eUNvbXBvbmVudCwgSW5pdGlhbFBhcmVudCk7XG4gIHJldHVybiBQcm94eUNvbXBvbmVudDtcbn07XG5cbnZhciBwcm94eUNsYXNzQ3JlYXRvciA9IGRvZXNTdXBwb3J0Q2xhc3NlcyA/IEVTNlByb3h5Q29tcG9uZW50RmFjdG9yeSA6IEVTNVByb3h5Q29tcG9uZW50RmFjdG9yeTtcblxuZnVuY3Rpb24gZ2V0T3duS2V5cyh0YXJnZXQpIHtcbiAgcmV0dXJuIFtdLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xufVxuXG5mdW5jdGlvbiBzaGFsbG93U3RyaW5nc0VxdWFsKGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICBpZiAoU3RyaW5nKGFba2V5XSkgIT09IFN0cmluZyhiW2tleV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBkZWVwUHJvdG90eXBlVXBkYXRlKGRlc3QsIHNvdXJjZSkge1xuICB2YXIgZGVlcERlc3QgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZGVzdCk7XG4gIHZhciBkZWVwU3JjID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSk7XG4gIGlmIChkZWVwRGVzdCAmJiBkZWVwU3JjICYmIGRlZXBTcmMgIT09IGRlZXBEZXN0KSB7XG4gICAgZGVlcFByb3RvdHlwZVVwZGF0ZShkZWVwRGVzdCwgZGVlcFNyYyk7XG4gIH1cbiAgaWYgKHNvdXJjZS5wcm90b3R5cGUgJiYgc291cmNlLnByb3RvdHlwZSAhPT0gZGVzdC5wcm90b3R5cGUpIHtcbiAgICBkZXN0LnByb3RvdHlwZSA9IHNvdXJjZS5wcm90b3R5cGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2FmZURlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBwcm9wcykge1xuICB0cnkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgcHJvcHMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nZ2VyLndhcm4oJ0Vycm9yIHdoaWxlIHdyYXBwaW5nJywga2V5LCAnIC0+ICcsIGUpO1xuICB9XG59XG5cbnZhciBSRVNFUlZFRF9TVEFUSUNTID0gWydsZW5ndGgnLCAnZGlzcGxheU5hbWUnLCAnbmFtZScsICdhcmd1bWVudHMnLCAnY2FsbGVyJywgJ3Byb3RvdHlwZScsICd0b1N0cmluZycsICd2YWx1ZU9mJywgJ2lzU3RhdGVsZXNzRnVuY3Rpb25hbFByb3h5JywgUFJPWFlfS0VZLCBVTldSQVBfUFJPWFldO1xuXG5mdW5jdGlvbiB0cmFuc2ZlclN0YXRpY1Byb3BzKFByb3h5Q29tcG9uZW50LCBzYXZlZERlc2NyaXB0b3JzLCBQcmV2aW91c0NvbXBvbmVudCwgTmV4dENvbXBvbmVudCkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhQcm94eUNvbXBvbmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKFJFU0VSVkVEX1NUQVRJQ1MuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmV2RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUHJveHlDb21wb25lbnQsIGtleSk7XG4gICAgdmFyIHNhdmVkRGVzY3JpcHRvciA9IHNhdmVkRGVzY3JpcHRvcnNba2V5XTtcblxuICAgIGlmICghc2hhbGxvd0VxdWFsKHByZXZEZXNjcmlwdG9yLCBzYXZlZERlc2NyaXB0b3IpKSB7XG4gICAgICBzYWZlRGVmaW5lUHJvcGVydHkoTmV4dENvbXBvbmVudCwga2V5LCBwcmV2RGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcblxuICAvLyBDb3B5IG5ld2x5IGRlZmluZWQgc3RhdGljIG1ldGhvZHMgYW5kIHByb3BlcnRpZXNcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTmV4dENvbXBvbmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKFJFU0VSVkVEX1NUQVRJQ1MuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmV2RGVzY3JpcHRvciA9IFByZXZpb3VzQ29tcG9uZW50ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUHJveHlDb21wb25lbnQsIGtleSk7XG4gICAgdmFyIHNhdmVkRGVzY3JpcHRvciA9IHNhdmVkRGVzY3JpcHRvcnNba2V5XTtcblxuICAgIC8vIFNraXAgcmVkZWZpbmVkIGRlc2NyaXB0b3JzXG4gICAgaWYgKHByZXZEZXNjcmlwdG9yICYmIHNhdmVkRGVzY3JpcHRvciAmJiAhc2hhbGxvd0VxdWFsKHNhdmVkRGVzY3JpcHRvciwgcHJldkRlc2NyaXB0b3IpKSB7XG4gICAgICBzYWZlRGVmaW5lUHJvcGVydHkoTmV4dENvbXBvbmVudCwga2V5LCBwcmV2RGVzY3JpcHRvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByZXZEZXNjcmlwdG9yICYmICFzYXZlZERlc2NyaXB0b3IpIHtcbiAgICAgIHNhZmVEZWZpbmVQcm9wZXJ0eShQcm94eUNvbXBvbmVudCwga2V5LCBwcmV2RGVzY3JpcHRvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHREZXNjcmlwdG9yID0gX2V4dGVuZHMoe30sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTmV4dENvbXBvbmVudCwga2V5KSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBzYXZlZERlc2NyaXB0b3JzW2tleV0gPSBuZXh0RGVzY3JpcHRvcjtcbiAgICBzYWZlRGVmaW5lUHJvcGVydHkoUHJveHlDb21wb25lbnQsIGtleSwgbmV4dERlc2NyaXB0b3IpO1xuICB9KTtcblxuICAvLyBSZW1vdmUgc3RhdGljIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdGhhdCBhcmUgbm8gbG9uZ2VyIGRlZmluZWRcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoUHJveHlDb21wb25lbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChSRVNFUlZFRF9TVEFUSUNTLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2tpcCBzdGF0aWNzIHRoYXQgZXhpc3Qgb24gdGhlIG5leHQgY2xhc3NcbiAgICBpZiAoTmV4dENvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNraXAgbm9uLWNvbmZpZ3VyYWJsZSBzdGF0aWNzXG4gICAgdmFyIHByb3h5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUHJveHlDb21wb25lbnQsIGtleSk7XG4gICAgaWYgKHByb3h5RGVzY3JpcHRvciAmJiAhcHJveHlEZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmV2RGVzY3JpcHRvciA9IFByZXZpb3VzQ29tcG9uZW50ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUHJldmlvdXNDb21wb25lbnQsIGtleSk7XG4gICAgdmFyIHNhdmVkRGVzY3JpcHRvciA9IHNhdmVkRGVzY3JpcHRvcnNba2V5XTtcblxuICAgIC8vIFNraXAgcmVkZWZpbmVkIGRlc2NyaXB0b3JzXG4gICAgaWYgKHByZXZEZXNjcmlwdG9yICYmIHNhdmVkRGVzY3JpcHRvciAmJiAhc2hhbGxvd0VxdWFsKHNhdmVkRGVzY3JpcHRvciwgcHJldkRlc2NyaXB0b3IpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2FmZURlZmluZVByb3BlcnR5KFByb3h5Q29tcG9uZW50LCBrZXksIHtcbiAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNhdmVkRGVzY3JpcHRvcnM7XG59XG5cbmZ1bmN0aW9uIG1lcmdlQ29tcG9uZW50cyhQcm94eUNvbXBvbmVudCwgTmV4dENvbXBvbmVudCwgSW5pdGlhbENvbXBvbmVudCwgbGFzdEluc3RhbmNlLCBpbmplY3RlZE1lbWJlcnMpIHtcbiAgdmFyIGluamVjdGVkQ29kZSA9IHt9O1xuICB0cnkge1xuICAgIHZhciBuZXh0SW5zdGFuY2UgPSBzYWZlUmVhY3RDb25zdHJ1Y3RvcihOZXh0Q29tcG9uZW50LCBsYXN0SW5zdGFuY2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEJ5cGFzcyBiYWJlbCBjbGFzcyBpbmhlcml0YW5jZSBjaGVja2luZ1xuICAgICAgZGVlcFByb3RvdHlwZVVwZGF0ZShJbml0aWFsQ29tcG9uZW50LCBOZXh0Q29tcG9uZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJdCB3YXMgRVM2IGNsYXNzXG4gICAgfVxuXG4gICAgdmFyIHByb3h5SW5zdGFuY2UgPSBzYWZlUmVhY3RDb25zdHJ1Y3RvcihQcm94eUNvbXBvbmVudCwgbGFzdEluc3RhbmNlKTtcblxuICAgIGlmICghbmV4dEluc3RhbmNlIHx8ICFwcm94eUluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gaW5qZWN0ZWRDb2RlO1xuICAgIH1cblxuICAgIHZhciBtZXJnZWRBdHRycyA9IF9leHRlbmRzKHt9LCBwcm94eUluc3RhbmNlLCBuZXh0SW5zdGFuY2UpO1xuICAgIHZhciBoYXNSZWdlbmVyYXRlID0gcHJveHlJbnN0YW5jZVtSRUdFTkVSQVRFX01FVEhPRF07XG4gICAgdmFyIG93bktleXMgPSBnZXRPd25LZXlzKE9iamVjdC5nZXRQcm90b3R5cGVPZihQcm94eUNvbXBvbmVudC5wcm90b3R5cGUpKTtcbiAgICBPYmplY3Qua2V5cyhtZXJnZWRBdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoUFJFRklYKSkgcmV0dXJuO1xuICAgICAgdmFyIG5leHRBdHRyID0gbmV4dEluc3RhbmNlW2tleV07XG4gICAgICB2YXIgcHJldkF0dHIgPSBwcm94eUluc3RhbmNlW2tleV07XG4gICAgICBpZiAobmV4dEF0dHIpIHtcbiAgICAgICAgaWYgKGlzTmF0aXZlRnVuY3Rpb24obmV4dEF0dHIpIHx8IGlzTmF0aXZlRnVuY3Rpb24ocHJldkF0dHIpKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBib3VuZCBtZXRob2RcbiAgICAgICAgICB2YXIgaXNTYW1lQXJpdHkgPSBuZXh0QXR0ci5sZW5ndGggPT09IHByZXZBdHRyLmxlbmd0aDtcbiAgICAgICAgICB2YXIgZXhpc3RzSW5Qcm90b3R5cGUgPSBvd25LZXlzLmluZGV4T2Yoa2V5KSA+PSAwIHx8IFByb3h5Q29tcG9uZW50LnByb3RvdHlwZVtrZXldO1xuICAgICAgICAgIGlmICgoaXNTYW1lQXJpdHkgfHwgIXByZXZBdHRyKSAmJiBleGlzdHNJblByb3RvdHlwZSkge1xuICAgICAgICAgICAgaWYgKGhhc1JlZ2VuZXJhdGUpIHtcbiAgICAgICAgICAgICAgaW5qZWN0ZWRDb2RlW2tleV0gPSAnT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpW1xcJycgKyBrZXkgKyAnXFwnXS5iaW5kKHRoaXMpJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvZ2dlci53YXJuKCdSZWFjdCBIb3QgTG9hZGVyOiwnLCAnTm9uLWNvbnRyb2xsZWQgY2xhc3MnLCBQcm94eUNvbXBvbmVudC5uYW1lLCAnY29udGFpbnMgYSBuZXcgbmF0aXZlIG9yIGJvdW5kIGZ1bmN0aW9uICcsIGtleSwgbmV4dEF0dHIsICcuIFVuYWJsZSB0byByZXByb2R1Y2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ1JlYWN0IEhvdCBMb2FkZXI6JywgJ1VwZGF0ZWQgY2xhc3MgJywgUHJveHlDb21wb25lbnQubmFtZSwgJ2NvbnRhaW5zIG5hdGl2ZSBvciBib3VuZCBmdW5jdGlvbiAnLCBrZXksIG5leHRBdHRyLCAnLiBVbmFibGUgdG8gcmVwcm9kdWNlLCB1c2UgYXJyb3cgZnVuY3Rpb25zIGluc3RlYWQuJywgJyhhcml0eTogJyArIG5leHRBdHRyLmxlbmd0aCArICcvJyArIHByZXZBdHRyLmxlbmd0aCArICcsIHByb3RvOiAnICsgKGV4aXN0c0luUHJvdG90eXBlID8gJ3llcycgOiAnbm8nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0U3RyaW5nID0gU3RyaW5nKG5leHRBdHRyKTtcbiAgICAgICAgdmFyIGluamVjdGVkQmVmb3JlID0gaW5qZWN0ZWRNZW1iZXJzW2tleV07XG4gICAgICAgIHZhciBpc0Fycm93ID0gbmV4dFN0cmluZy5pbmRleE9mKCc9PicpID49IDA7XG4gICAgICAgIHZhciBpc0Z1bmN0aW9uID0gbmV4dFN0cmluZy5pbmRleE9mKCdmdW5jdGlvbicpID49IDAgfHwgaXNBcnJvdztcbiAgICAgICAgdmFyIHJlZmVyVG9UaGlzID0gbmV4dFN0cmluZy5pbmRleE9mKCd0aGlzJykgPj0gMDtcbiAgICAgICAgaWYgKG5leHRTdHJpbmcgIT09IFN0cmluZyhwcmV2QXR0cikgfHwgaW5qZWN0ZWRCZWZvcmUgJiYgbmV4dFN0cmluZyAhPT0gU3RyaW5nKGluamVjdGVkQmVmb3JlKSB8fCBpc0Fycm93ICYmIHJlZmVyVG9UaGlzKSB7XG4gICAgICAgICAgaWYgKCFoYXNSZWdlbmVyYXRlKSB7XG4gICAgICAgICAgICBpZiAoIWlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgLy8ganVzdCBjb3B5IHByb3Agb3ZlclxuICAgICAgICAgICAgICBpbmplY3RlZENvZGVba2V5XSA9IG5leHRBdHRyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ1JlYWN0IEhvdCBMb2FkZXI6JywgJyBVcGRhdGVkIGNsYXNzICcsIFByb3h5Q29tcG9uZW50Lm5hbWUsICdoYWQgZGlmZmVyZW50IGNvZGUgZm9yJywga2V5LCBuZXh0QXR0ciwgJy4gVW5hYmxlIHRvIHJlcHJvZHVjZS4gUmVnZW5lcmF0aW9uIHN1cHBvcnQgbmVlZGVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmplY3RlZENvZGVba2V5XSA9IG5leHRBdHRyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nZ2VyLndhcm4oJ1JlYWN0IEhvdCBMb2FkZXI6JywgZSk7XG4gIH1cbiAgcmV0dXJuIGluamVjdGVkQ29kZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tMaWZlQ3ljbGVNZXRob2RzKFByb3h5Q29tcG9uZW50LCBOZXh0Q29tcG9uZW50KSB7XG4gIHRyeSB7XG4gICAgdmFyIHAxID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKFByb3h5Q29tcG9uZW50LnByb3RvdHlwZSk7XG4gICAgdmFyIHAyID0gTmV4dENvbXBvbmVudC5wcm90b3R5cGU7XG4gICAgcmVhY3RMaWZlQ3ljbGVNb3VudE1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgZDEgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHAxLCBrZXkpIHx8IHsgdmFsdWU6IHAxW2tleV0gfTtcbiAgICAgIHZhciBkMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocDIsIGtleSkgfHwgeyB2YWx1ZTogcDJba2V5XSB9O1xuICAgICAgaWYgKCFzaGFsbG93U3RyaW5nc0VxdWFsKGQxLCBkMikpIHtcbiAgICAgICAgbG9nZ2VyLndhcm4oJ1JlYWN0IEhvdCBMb2FkZXI6JywgJ1lvdSBkaWQgdXBkYXRlJywgUHJveHlDb21wb25lbnQubmFtZSwgJ3MgbGlmZWN5Y2xlIG1ldGhvZCcsIGtleSwgJy4gVW5hYmxlIHRvIHJlcGVhdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSWdub3JlIGVycm9yc1xuICB9XG59XG5cbmZ1bmN0aW9uIGluamVjdCh0YXJnZXQsIGN1cnJlbnRHZW5lcmF0aW9uLCBpbmplY3RlZE1lbWJlcnMpIHtcbiAgaWYgKHRhcmdldFtHRU5FUkFUSU9OXSAhPT0gY3VycmVudEdlbmVyYXRpb24pIHtcbiAgICB2YXIgaGFzUmVnZW5lcmF0ZSA9ICEhdGFyZ2V0W1JFR0VORVJBVEVfTUVUSE9EXTtcbiAgICBPYmplY3Qua2V5cyhpbmplY3RlZE1lbWJlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhc1JlZ2VuZXJhdGUpIHtcbiAgICAgICAgICB2YXIgdXNlZFRoaXMgPSBTdHJpbmcoaW5qZWN0ZWRNZW1iZXJzW2tleV0pLm1hdGNoKC9fdGhpcyhbXFxkXSspL2dpKSB8fCBbXTtcbiAgICAgICAgICB0YXJnZXRbUkVHRU5FUkFURV9NRVRIT0RdKGtleSwgJyhmdW5jdGlvbiBSRUFDVF9IT1RfTE9BREVSX1NBTkRCT1ggKCkge1xcbiAgICAgICAgICB2YXIgX3RoaXMgID0gdGhpczsgLy8gY29tbW9uIGJhYmVsIHRyYW5zcGlsZVxcbiAgICAgICAgICAnICsgdXNlZFRoaXMubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZhciAnICsgbmFtZSArICcgPSB0aGlzOyc7XG4gICAgICAgICAgfSkgKyAnXFxuXFxuICAgICAgICAgIHJldHVybiAnICsgaW5qZWN0ZWRNZW1iZXJzW2tleV0gKyAnO1xcbiAgICAgICAgICB9KS5jYWxsKHRoaXMpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBpbmplY3RlZE1lbWJlcnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIud2FybignUmVhY3QgSG90IExvYWRlcjogRmFpbGVkIHRvIHJlZ2VuZXJhdGUgbWV0aG9kICcsIGtleSwgJyBvZiBjbGFzcyAnLCB0YXJnZXQpO1xuICAgICAgICBsb2dnZXIud2FybignZ290IGVycm9yJywgZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0YXJnZXRbR0VORVJBVElPTl0gPSBjdXJyZW50R2VuZXJhdGlvbjtcbiAgfVxufVxuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIHByb3hpZXMgPSBuZXcgV2Vha01hcCgpO1xuXG52YXIgcmVzZXRDbGFzc1Byb3hpZXMgPSBmdW5jdGlvbiByZXNldENsYXNzUHJveGllcygpIHtcbiAgcHJveGllcyA9IG5ldyBXZWFrTWFwKCk7XG59O1xuXG52YXIgYmxhY2tMaXN0ZWRDbGFzc01lbWJlcnMgPSBbJ2NvbnN0cnVjdG9yJywgJ3JlbmRlcicsICdjb21wb25lbnRXaWxsTW91bnQnLCAnY29tcG9uZW50RGlkTW91bnQnLCAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsICdjb21wb25lbnRXaWxsVW5tb3VudCcsICdob3RDb21wb25lbnRSZW5kZXInLCAnZ2V0SW5pdGlhbFN0YXRlJywgJ2dldERlZmF1bHRQcm9wcyddO1xuXG52YXIgZGVmYXVsdFJlbmRlck9wdGlvbnMgPSB7XG4gIGNvbXBvbmVudFdpbGxSZW5kZXI6IGlkZW50aXR5LFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuICBjb21wb25lbnREaWRSZW5kZXI6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFJlbmRlcihyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG52YXIgZGVmaW5lQ2xhc3NNZW1iZXIgPSBmdW5jdGlvbiBkZWZpbmVDbGFzc01lbWJlcihDbGFzcywgbWV0aG9kTmFtZSwgbWV0aG9kQm9keSkge1xuICByZXR1cm4gc2FmZURlZmluZVByb3BlcnR5KENsYXNzLnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogbWV0aG9kQm9keVxuICB9KTtcbn07XG5cbnZhciBkZWZpbmVDbGFzc01lbWJlcnMgPSBmdW5jdGlvbiBkZWZpbmVDbGFzc01lbWJlcnMoQ2xhc3MsIG1ldGhvZHMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICByZXR1cm4gZGVmaW5lQ2xhc3NNZW1iZXIoQ2xhc3MsIG1ldGhvZE5hbWUsIG1ldGhvZHNbbWV0aG9kTmFtZV0pO1xuICB9KTtcbn07XG5cbnZhciBzZXRTRlBGbGFnID0gZnVuY3Rpb24gc2V0U0ZQRmxhZyhjb21wb25lbnQsIGZsYWcpIHtcbiAgcmV0dXJuIHNhZmVEZWZpbmVQcm9wZXJ0eShjb21wb25lbnQsICdpc1N0YXRlbGVzc0Z1bmN0aW9uYWxQcm94eScsIHtcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZmxhZ1xuICB9KTtcbn07XG5cbnZhciBjb3B5TWV0aG9kRGVzY3JpcHRvcnMgPSBmdW5jdGlvbiBjb3B5TWV0aG9kRGVzY3JpcHRvcnModGFyZ2V0LCBzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSkge1xuICAgIC8vIGl0IGlzIHBvc3NpYmxlIHRvIHVzZSBgZnVuY3Rpb24tZG91YmxlYCB0byBjb25zdHJ1Y3QgYW4gaWRlYWwgY2xvbmUsIGJ1dCBkb2VzIG5vdCBtYWtlIGEgc2VuY2VcbiAgICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSk7XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHNhZmVEZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH0pO1xuXG4gICAgc2FmZURlZmluZVByb3BlcnR5KHRhcmdldCwgJ3RvU3RyaW5nJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoc291cmNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzc1Byb3h5KEluaXRpYWxDb21wb25lbnQsIHByb3h5S2V5LCBvcHRpb25zKSB7XG4gIHZhciByZW5kZXJPcHRpb25zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRSZW5kZXJPcHRpb25zLCBvcHRpb25zKTtcbiAgLy8gUHJldmVudCBkb3VibGUgd3JhcHBpbmcuXG4gIC8vIEdpdmVuIGEgcHJveHkgY2xhc3MsIHJldHVybiB0aGUgZXhpc3RpbmcgcHJveHkgbWFuYWdpbmcgaXQuXG4gIHZhciBleGlzdGluZ1Byb3h5ID0gcHJveGllcy5nZXQoSW5pdGlhbENvbXBvbmVudCk7XG5cbiAgaWYgKGV4aXN0aW5nUHJveHkpIHtcbiAgICByZXR1cm4gZXhpc3RpbmdQcm94eTtcbiAgfVxuXG4gIHZhciBDdXJyZW50Q29tcG9uZW50ID0gdm9pZCAwO1xuICB2YXIgc2F2ZWREZXNjcmlwdG9ycyA9IHt9O1xuICB2YXIgaW5qZWN0ZWRNZW1iZXJzID0ge307XG4gIHZhciBwcm94eUdlbmVyYXRpb24gPSAwO1xuICB2YXIgY2xhc3NVcGRhdGVQb3N0cG9uZWQgPSBudWxsO1xuICB2YXIgaW5zdGFuY2VzQ291bnQgPSAwO1xuICB2YXIgaXNGdW5jdGlvbmFsQ29tcG9uZW50ID0gIWlzUmVhY3RDbGFzcyhJbml0aWFsQ29tcG9uZW50KTtcblxuICB2YXIgbGFzdEluc3RhbmNlID0gbnVsbDtcblxuICBmdW5jdGlvbiBwb3N0Q29uc3RydWN0aW9uQWN0aW9uKCkge1xuICAgIHRoaXNbR0VORVJBVElPTl0gPSAwO1xuXG4gICAgbGFzdEluc3RhbmNlID0gdGhpcztcbiAgICAvLyBpcyB0aGVyZSBpcyBhbiB1cGRhdGUgcGVuZGluZ1xuICAgIGlmIChjbGFzc1VwZGF0ZVBvc3Rwb25lZCkge1xuICAgICAgdmFyIGNhbGxVcGRhdGUgPSBjbGFzc1VwZGF0ZVBvc3Rwb25lZDtcbiAgICAgIGNsYXNzVXBkYXRlUG9zdHBvbmVkID0gbnVsbDtcbiAgICAgIGNhbGxVcGRhdGUoKTtcbiAgICB9XG4gICAgLy8gQXMgbG9uZyB3ZSBjYW4ndCBvdmVycmlkZSBjb25zdHJ1Y3RvclxuICAgIC8vIGV2ZXJ5IGNsYXNzIHNoYWxsIGV2b2x2ZSBmcm9tIGEgYmFzZSBjbGFzc1xuICAgIGluamVjdCh0aGlzLCBwcm94eUdlbmVyYXRpb24sIGluamVjdGVkTWVtYmVycyk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94aWVkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzKSB7XG4gICAgICBpbmplY3QodGhpcywgcHJveHlHZW5lcmF0aW9uLCBpbmplY3RlZE1lbWJlcnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpZmVDeWNsZVdyYXBwZXJGYWN0b3J5KHdyYXBwZXJOYW1lKSB7XG4gICAgdmFyIHNpZGVFZmZlY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlkZW50aXR5O1xuXG4gICAgcmV0dXJuIGNvcHlNZXRob2REZXNjcmlwdG9ycyhmdW5jdGlvbiB3cmFwcGVkTWV0aG9kKCkge1xuICAgICAgcHJveGllZFVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgICAgc2lkZUVmZmVjdCh0aGlzKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgcmVzdFtfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICFpc0Z1bmN0aW9uYWxDb21wb25lbnQgJiYgQ3VycmVudENvbXBvbmVudC5wcm90b3R5cGVbd3JhcHBlck5hbWVdICYmIEN1cnJlbnRDb21wb25lbnQucHJvdG90eXBlW3dyYXBwZXJOYW1lXS5hcHBseSh0aGlzLCByZXN0KTtcbiAgICB9LCBJbml0aWFsQ29tcG9uZW50LnByb3RvdHlwZSAmJiBJbml0aWFsQ29tcG9uZW50LnByb3RvdHlwZVt3cmFwcGVyTmFtZV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWV0aG9kV3JhcHBlckZhY3Rvcnkod3JhcHBlck5hbWUsIHJlYWxNZXRob2QpIHtcbiAgICByZXR1cm4gY29weU1ldGhvZERlc2NyaXB0b3JzKGZ1bmN0aW9uIHdyYXBwZWRNZXRob2QoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICByZXN0W19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWFsTWV0aG9kLmFwcGx5KHRoaXMsIHJlc3QpO1xuICAgIH0sIHJlYWxNZXRob2QpO1xuICB9XG5cbiAgdmFyIGZha2VCYXNlUHJvdG90eXBlID0gZnVuY3Rpb24gZmFrZUJhc2VQcm90b3R5cGUoQmFzZSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhCYXNlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGJsYWNrTGlzdGVkQ2xhc3NNZW1iZXJzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihCYXNlLCBrZXkpO1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgIGFjY1trZXldID0gbWV0aG9kV3JhcHBlckZhY3Rvcnkoa2V5LCBCYXNlW2tleV0pO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgdmFyIGNvbXBvbmVudERpZE1vdW50ID0gbGlmZUN5Y2xlV3JhcHBlckZhY3RvcnkoJ2NvbXBvbmVudERpZE1vdW50JywgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhcmdldFtQUk9YWV9JU19NT1VOVEVEXSA9IHRydWU7XG4gICAgaW5zdGFuY2VzQ291bnQrKztcbiAgfSk7XG4gIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBsaWZlQ3ljbGVXcmFwcGVyRmFjdG9yeSgnY29tcG9uZW50RGlkVXBkYXRlJywgcmVuZGVyT3B0aW9ucy5jb21wb25lbnREaWRVcGRhdGUpO1xuICB2YXIgY29tcG9uZW50V2lsbFVubW91bnQgPSBsaWZlQ3ljbGVXcmFwcGVyRmFjdG9yeSgnY29tcG9uZW50V2lsbFVubW91bnQnLCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0W1BST1hZX0lTX01PVU5URURdID0gZmFsc2U7XG4gICAgaW5zdGFuY2VzQ291bnQtLTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaG90Q29tcG9uZW50UmVuZGVyKCkge1xuICAgIC8vIHJlcGVhdGluZyBzdWJyZW5kZXIgY2FsbCB0byBrZWVwIFJFTkRFUkVEX0dFTkVSQVRJT04gdXAgdG8gZGF0ZVxuICAgIHJlbmRlck9wdGlvbnMuY29tcG9uZW50V2lsbFJlbmRlcih0aGlzKTtcbiAgICBwcm94aWVkVXBkYXRlLmNhbGwodGhpcyk7XG4gICAgdmFyIHJlc3VsdCA9IHZvaWQgMDtcblxuICAgIC8vIFdlIG5lZWQgdG8gdXNlIGhhc093blByb3BlcnR5IGhlcmUsIGFzIHRoZSBjYWNoZWQgcmVzdWx0IGlzIGEgUmVhY3Qgbm9kZVxuICAgIC8vIGFuZCBjYW4gYmUgbnVsbCBvciBzb21lIG90aGVyIGZhbHN5IHZhbHVlLlxuICAgIGlmIChoYXMuY2FsbCh0aGlzLCBDQUNIRURfUkVTVUxUKSkge1xuICAgICAgcmVzdWx0ID0gdGhpc1tDQUNIRURfUkVTVUxUXTtcbiAgICAgIGRlbGV0ZSB0aGlzW0NBQ0hFRF9SRVNVTFRdO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbmFsQ29tcG9uZW50KSB7XG4gICAgICByZXN1bHQgPSBDdXJyZW50Q29tcG9uZW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IChDdXJyZW50Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgfHwgdGhpcy5yZW5kZXIpLmFwcGx5KHRoaXMsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXJPcHRpb25zLmNvbXBvbmVudERpZFJlbmRlci5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94aWVkUmVuZGVyKCkge1xuICAgIHJlbmRlck9wdGlvbnMuY29tcG9uZW50V2lsbFJlbmRlcih0aGlzKTtcblxuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvdENvbXBvbmVudFJlbmRlci5jYWxsLmFwcGx5KGhvdENvbXBvbmVudFJlbmRlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gIH1cblxuICB2YXIgZGVmaW5lUHJveHlNZXRob2RzID0gZnVuY3Rpb24gZGVmaW5lUHJveHlNZXRob2RzKFByb3h5KSB7XG4gICAgdmFyIEJhc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgZGVmaW5lQ2xhc3NNZW1iZXJzKFByb3h5LCBfZXh0ZW5kcyh7fSwgZmFrZUJhc2VQcm90b3R5cGUoQmFzZSksIHtcbiAgICAgIHJlbmRlcjogcHJveGllZFJlbmRlcixcbiAgICAgIGhvdENvbXBvbmVudFJlbmRlcjogaG90Q29tcG9uZW50UmVuZGVyLFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGNvbXBvbmVudERpZE1vdW50LFxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlOiBjb21wb25lbnREaWRVcGRhdGUsXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudDogY29tcG9uZW50V2lsbFVubW91bnRcbiAgICB9KSk7XG4gIH07XG5cbiAgdmFyIF9Qcm94eUZhY2FkZSA9IHZvaWQgMDtcbiAgdmFyIFByb3h5Q29tcG9uZW50ID0gbnVsbDtcbiAgdmFyIHByb3h5ID0gdm9pZCAwO1xuXG4gIGlmICghaXNGdW5jdGlvbmFsQ29tcG9uZW50KSB7XG4gICAgLy8gQ29tcG9uZW50XG4gICAgUHJveHlDb21wb25lbnQgPSBwcm94eUNsYXNzQ3JlYXRvcihJbml0aWFsQ29tcG9uZW50LCBwb3N0Q29uc3RydWN0aW9uQWN0aW9uKTtcblxuICAgIGRlZmluZVByb3h5TWV0aG9kcyhQcm94eUNvbXBvbmVudCwgSW5pdGlhbENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG4gICAgX1Byb3h5RmFjYWRlID0gUHJveHlDb21wb25lbnQ7XG4gIH0gZWxzZSBpZiAoIWNvbmZpZ3VyYXRpb24uYWxsb3dTRkMpIHtcbiAgICAvLyBTRkMgQ29udmVydGVkIHRvIGNvbXBvbmVudC4gRG9lcyBub3Qgc3VwcG9ydCByZXR1cm5pbmcgcHJlY3JlYXRlZCBpbnN0YW5jZXMgZnJvbSByZW5kZXIuXG4gICAgUHJveHlDb21wb25lbnQgPSBwcm94eUNsYXNzQ3JlYXRvcihSZWFjdC5Db21wb25lbnQsIHBvc3RDb25zdHJ1Y3Rpb25BY3Rpb24pO1xuXG4gICAgZGVmaW5lUHJveHlNZXRob2RzKFByb3h5Q29tcG9uZW50KTtcbiAgICBfUHJveHlGYWNhZGUgPSBQcm94eUNvbXBvbmVudDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTRkNcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gb25seSBnZXRzIGNhbGxlZCBmb3IgdGhlIGluaXRpYWwgbW91bnQuIFRoZSBhY3R1YWxcbiAgICAvLyByZW5kZXJlZCBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB0aGUgcmV0dXJuIHZhbHVlLlxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICBfUHJveHlGYWNhZGUgPSBmdW5jdGlvbiBQcm94eUZhY2FkZShwcm9wcywgY29udGV4dCkge1xuICAgICAgdmFyIHJlc3VsdCA9IEN1cnJlbnRDb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAvLyBzaW1wbGUgU0ZDLCBjb3VsZCBjb250aW51ZSB0byBiZSBTRkNcbiAgICAgIGlmIChjb25maWd1cmF0aW9uLnB1cmVTRkMpIHtcbiAgICAgICAgaWYgKCFDdXJyZW50Q29tcG9uZW50LmNvbnRleHRUeXBlcykge1xuICAgICAgICAgIGlmICghX1Byb3h5RmFjYWRlLmlzU3RhdGVsZXNzRnVuY3Rpb25hbFByb3h5KSB7XG4gICAgICAgICAgICBzZXRTRlBGbGFnKF9Qcm94eUZhY2FkZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlbmRlck9wdGlvbnMuY29tcG9uZW50RGlkUmVuZGVyKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFNGUEZsYWcoX1Byb3h5RmFjYWRlLCBmYWxzZSk7XG5cbiAgICAgIC8vIFRoaXMgaXMgYSBSZWxheS1zdHlsZSBjb250YWluZXIgY29uc3RydWN0b3IuIFdlIGNhbid0IGRvIHRoZSBwcm90b3R5cGUtXG4gICAgICAvLyBzdHlsZSB3cmFwcGluZyBmb3IgdGhpcyBhcyB3ZSBkbyBlbHNld2hlcmUsIHNvIGp1c3Qgd2UganVzdCBwYXNzIGl0XG4gICAgICAvLyB0aHJvdWdoIGFzLWlzLlxuICAgICAgaWYgKGlzUmVhY3RDbGFzc0luc3RhbmNlKHJlc3VsdCkpIHtcbiAgICAgICAgUHJveHlDb21wb25lbnQgPSBudWxsO1xuXG4gICAgICAgIC8vIFJlbGF5IGxhemlseSBzZXRzIHN0YXRpY3MgbGlrZSBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgb24gaW5pdGlhbFxuICAgICAgICAvLyByZW5kZXIgaW4gbGF6eSBjb25zdHJ1Y3Rpb24sIHNvIHdlIG5lZWQgdG8gZG8gdGhlIHNhbWUgaGVyZS5cbiAgICAgICAgdHJhbnNmZXJTdGF0aWNQcm9wcyhfUHJveHlGYWNhZGUsIHNhdmVkRGVzY3JpcHRvcnMsIG51bGwsIEN1cnJlbnRDb21wb25lbnQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgaXQncyBhIG5vcm1hbCBmdW5jdGlvbmFsIGNvbXBvbmVudC4gQnVpbGQgdGhlIHJlYWwgcHJveHlcbiAgICAgIC8vIGFuZCB1c2UgaXQgZ29pbmcgZm9yd2FyZC5cbiAgICAgIFByb3h5Q29tcG9uZW50ID0gcHJveHlDbGFzc0NyZWF0b3IoUmVhY3QuQ29tcG9uZW50LCBwb3N0Q29uc3RydWN0aW9uQWN0aW9uKTtcblxuICAgICAgZGVmaW5lUHJveHlNZXRob2RzKFByb3h5Q29tcG9uZW50KTtcblxuICAgICAgdmFyIGRldGVybWluYXRlUmVzdWx0ID0gbmV3IFByb3h5Q29tcG9uZW50KHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgLy8gQ2FjaGUgdGhlIGluaXRpYWwgcmVuZGVyIHJlc3VsdCBzbyB3ZSBkb24ndCBjYWxsIHRoZSBjb21wb25lbnQgZnVuY3Rpb25cbiAgICAgIC8vIGEgc2Vjb25kIHRpbWUgZm9yIHRoZSBpbml0aWFsIHJlbmRlci5cbiAgICAgIGRldGVybWluYXRlUmVzdWx0W0NBQ0hFRF9SRVNVTFRdID0gcmVzdWx0O1xuICAgICAgcmV0dXJuIGRldGVybWluYXRlUmVzdWx0O1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgcmV0dXJuIF9Qcm94eUZhY2FkZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnQoKSB7XG4gICAgcmV0dXJuIEN1cnJlbnRDb21wb25lbnQ7XG4gIH1cblxuICBzYWZlRGVmaW5lUHJvcGVydHkoX1Byb3h5RmFjYWRlLCBVTldSQVBfUFJPWFksIHtcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZ2V0Q3VycmVudFxuICB9KTtcblxuICBzYWZlRGVmaW5lUHJvcGVydHkoX1Byb3h5RmFjYWRlLCBQUk9YWV9LRVksIHtcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogcHJveHlLZXlcbiAgfSk7XG5cbiAgc2FmZURlZmluZVByb3BlcnR5KF9Qcm94eUZhY2FkZSwgJ3RvU3RyaW5nJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIFN0cmluZyhDdXJyZW50Q29tcG9uZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZShOZXh0Q29tcG9uZW50KSB7XG4gICAgaWYgKHR5cGVvZiBOZXh0Q29tcG9uZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGEgY29uc3RydWN0b3IuJyk7XG4gICAgfVxuXG4gICAgaWYgKE5leHRDb21wb25lbnQgPT09IEN1cnJlbnRDb21wb25lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IHByb3h5IGN5Y2xlc1xuICAgIHZhciBleGlzdGluZ1Byb3h5ID0gcHJveGllcy5nZXQoTmV4dENvbXBvbmVudCk7XG4gICAgaWYgKGV4aXN0aW5nUHJveHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpc0Z1bmN0aW9uYWxDb21wb25lbnQgPSAhaXNSZWFjdENsYXNzKE5leHRDb21wb25lbnQpO1xuXG4gICAgcHJveGllcy5zZXQoTmV4dENvbXBvbmVudCwgcHJveHkpO1xuXG4gICAgcHJveHlHZW5lcmF0aW9uKys7XG5cbiAgICAvLyBTYXZlIHRoZSBuZXh0IGNvbnN0cnVjdG9yIHNvIHdlIGNhbGwgaXRcbiAgICB2YXIgUHJldmlvdXNDb21wb25lbnQgPSBDdXJyZW50Q29tcG9uZW50O1xuICAgIEN1cnJlbnRDb21wb25lbnQgPSBOZXh0Q29tcG9uZW50O1xuXG4gICAgLy8gVHJ5IHRvIGluZmVyIGRpc3BsYXlOYW1lXG4gICAgdmFyIGRpc3BsYXlOYW1lID0gZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUoQ3VycmVudENvbXBvbmVudCk7XG5cbiAgICBzYWZlRGVmaW5lUHJvcGVydHkoX1Byb3h5RmFjYWRlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGRpc3BsYXlOYW1lXG4gICAgfSk7XG5cbiAgICBpZiAoUHJveHlDb21wb25lbnQpIHtcbiAgICAgIHNhZmVEZWZpbmVQcm9wZXJ0eShQcm94eUNvbXBvbmVudCwgJ25hbWUnLCB7XG4gICAgICAgIHZhbHVlOiBkaXNwbGF5TmFtZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZWREZXNjcmlwdG9ycyA9IHRyYW5zZmVyU3RhdGljUHJvcHMoX1Byb3h5RmFjYWRlLCBzYXZlZERlc2NyaXB0b3JzLCBQcmV2aW91c0NvbXBvbmVudCwgTmV4dENvbXBvbmVudCk7XG5cbiAgICBpZiAoaXNGdW5jdGlvbmFsQ29tcG9uZW50IHx8ICFQcm94eUNvbXBvbmVudCkgOyBlbHNlIHtcbiAgICAgIHZhciBjbGFzc0hvdFJlcGxhY2VtZW50ID0gZnVuY3Rpb24gY2xhc3NIb3RSZXBsYWNlbWVudCgpIHtcbiAgICAgICAgY2hlY2tMaWZlQ3ljbGVNZXRob2RzKFByb3h5Q29tcG9uZW50LCBOZXh0Q29tcG9uZW50KTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKFByb3h5Q29tcG9uZW50LnByb3RvdHlwZSwgTmV4dENvbXBvbmVudC5wcm90b3R5cGUpO1xuICAgICAgICBkZWZpbmVQcm94eU1ldGhvZHMoUHJveHlDb21wb25lbnQsIE5leHRDb21wb25lbnQucHJvdG90eXBlKTtcbiAgICAgICAgaWYgKHByb3h5R2VuZXJhdGlvbiA+IDEpIHtcbiAgICAgICAgICBpbmplY3RlZE1lbWJlcnMgPSBtZXJnZUNvbXBvbmVudHMoUHJveHlDb21wb25lbnQsIE5leHRDb21wb25lbnQsIEluaXRpYWxDb21wb25lbnQsIGxhc3RJbnN0YW5jZSwgaW5qZWN0ZWRNZW1iZXJzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gV2FzIGNvbnN0cnVjdGVkIG9uY2VcbiAgICAgIGlmIChpbnN0YW5jZXNDb3VudCA+IDApIHtcbiAgICAgICAgY2xhc3NIb3RSZXBsYWNlbWVudCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NVcGRhdGVQb3N0cG9uZWQgPSBjbGFzc0hvdFJlcGxhY2VtZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShJbml0aWFsQ29tcG9uZW50KTtcblxuICB2YXIgZGVyZWZlcmVuY2UgPSBmdW5jdGlvbiBkZXJlZmVyZW5jZSgpIHtcbiAgICBwcm94aWVzLmRlbGV0ZShJbml0aWFsQ29tcG9uZW50KTtcbiAgICBwcm94aWVzLmRlbGV0ZShfUHJveHlGYWNhZGUpO1xuICAgIHByb3hpZXMuZGVsZXRlKEN1cnJlbnRDb21wb25lbnQpO1xuICB9O1xuXG4gIHByb3h5ID0geyBnZXQ6IGdldCQkMSwgdXBkYXRlOiB1cGRhdGUsIGRlcmVmZXJlbmNlOiBkZXJlZmVyZW5jZSwgZ2V0Q3VycmVudDogZnVuY3Rpb24gZ2V0Q3VycmVudCgpIHtcbiAgICAgIHJldHVybiBDdXJyZW50Q29tcG9uZW50O1xuICAgIH0gfTtcblxuICBwcm94aWVzLnNldChJbml0aWFsQ29tcG9uZW50LCBwcm94eSk7XG4gIHByb3hpZXMuc2V0KF9Qcm94eUZhY2FkZSwgcHJveHkpO1xuXG4gIHNhZmVEZWZpbmVQcm9wZXJ0eShwcm94eSwgVU5XUkFQX1BST1hZLCB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGdldEN1cnJlbnRcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3h5O1xufVxuXG52YXIgcHJveGllc0J5SUQgPSB2b2lkIDA7XG52YXIgYmxhY2tMaXN0ZWRQcm94aWVzID0gdm9pZCAwO1xudmFyIHJlZ2lzdGVyZWRDb21wb25lbnRzID0gdm9pZCAwO1xudmFyIGlkc0J5VHlwZSA9IHZvaWQgMDtcblxudmFyIGVsZW1lbnRDb3VudCA9IDA7XG52YXIgcmVuZGVyT3B0aW9ucyA9IHt9O1xuXG52YXIgZ2VuZXJhdGVUeXBlSWQgPSBmdW5jdGlvbiBnZW5lcmF0ZVR5cGVJZCgpIHtcbiAgcmV0dXJuICdhdXRvLScgKyBlbGVtZW50Q291bnQrKztcbn07XG5cbnZhciBnZXRJZEJ5VHlwZSA9IGZ1bmN0aW9uIGdldElkQnlUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIGlkc0J5VHlwZS5nZXQodHlwZSk7XG59O1xudmFyIGlzUHJveHlUeXBlID0gZnVuY3Rpb24gaXNQcm94eVR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZVtQUk9YWV9LRVldO1xufTtcblxudmFyIGdldFByb3h5QnlJZCA9IGZ1bmN0aW9uIGdldFByb3h5QnlJZChpZCkge1xuICByZXR1cm4gcHJveGllc0J5SURbaWRdO1xufTtcbnZhciBnZXRQcm94eUJ5VHlwZSA9IGZ1bmN0aW9uIGdldFByb3h5QnlUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIGdldFByb3h5QnlJZChnZXRJZEJ5VHlwZSh0eXBlKSk7XG59O1xuXG52YXIgcmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudCh0eXBlKSB7XG4gIHJldHVybiByZWdpc3RlcmVkQ29tcG9uZW50cy5zZXQodHlwZSwgMSk7XG59O1xudmFyIGlzUmVnaXN0ZXJlZENvbXBvbmVudCA9IGZ1bmN0aW9uIGlzUmVnaXN0ZXJlZENvbXBvbmVudCh0eXBlKSB7XG4gIHJldHVybiByZWdpc3RlcmVkQ29tcG9uZW50cy5oYXModHlwZSk7XG59O1xuXG52YXIgc2V0U3RhbmRJbk9wdGlvbnMgPSBmdW5jdGlvbiBzZXRTdGFuZEluT3B0aW9ucyhvcHRpb25zKSB7XG4gIHJlbmRlck9wdGlvbnMgPSBvcHRpb25zO1xufTtcblxudmFyIHVwZGF0ZVByb3h5QnlJZCA9IGZ1bmN0aW9uIHVwZGF0ZVByb3h5QnlJZChpZCwgdHlwZSkge1xuICAvLyBSZW1lbWJlciB0aGUgSUQuXG4gIGlkc0J5VHlwZS5zZXQodHlwZSwgaWQpO1xuXG4gIGlmICghcHJveGllc0J5SURbaWRdKSB7XG4gICAgcHJveGllc0J5SURbaWRdID0gY3JlYXRlQ2xhc3NQcm94eSh0eXBlLCBpZCwgcmVuZGVyT3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgcHJveGllc0J5SURbaWRdLnVwZGF0ZSh0eXBlKTtcbiAgfVxuICByZXR1cm4gcHJveGllc0J5SURbaWRdO1xufTtcblxudmFyIGNyZWF0ZVByb3h5Rm9yVHlwZSA9IGZ1bmN0aW9uIGNyZWF0ZVByb3h5Rm9yVHlwZSh0eXBlKSB7XG4gIHJldHVybiBnZXRQcm94eUJ5VHlwZSh0eXBlKSB8fCB1cGRhdGVQcm94eUJ5SWQoZ2VuZXJhdGVUeXBlSWQoKSwgdHlwZSk7XG59O1xuXG52YXIgaXNUeXBlQmxhY2tsaXN0ZWQgPSBmdW5jdGlvbiBpc1R5cGVCbGFja2xpc3RlZCh0eXBlKSB7XG4gIHJldHVybiBibGFja0xpc3RlZFByb3hpZXMuaGFzKHR5cGUpO1xufTtcbnZhciBibGFja2xpc3RCeVR5cGUgPSBmdW5jdGlvbiBibGFja2xpc3RCeVR5cGUodHlwZSkge1xuICByZXR1cm4gYmxhY2tMaXN0ZWRQcm94aWVzLnNldCh0eXBlLCB0cnVlKTtcbn07XG5cbnZhciByZXNldFByb3hpZXMgPSBmdW5jdGlvbiByZXNldFByb3hpZXMoKSB7XG4gIHByb3hpZXNCeUlEID0ge307XG4gIGlkc0J5VHlwZSA9IG5ldyBXZWFrTWFwKCk7XG4gIGJsYWNrTGlzdGVkUHJveGllcyA9IG5ldyBXZWFrTWFwKCk7XG4gIHJlZ2lzdGVyZWRDb21wb25lbnRzID0gbmV3IFdlYWtNYXAoKTtcbiAgcmVzZXRDbGFzc1Byb3hpZXMoKTtcbn07XG5cbnJlc2V0UHJveGllcygpO1xuXG52YXIgdHVuZSA9IHtcbiAgYWxsb3dTRkM6IGZhbHNlXG59O1xuXG52YXIgcHJlYWN0QWRhcHRlciA9IGZ1bmN0aW9uIHByZWFjdEFkYXB0ZXIoaW5zdGFuY2UsIHJlc29sdmVUeXBlKSB7XG4gIHZhciBvbGRIYW5kbGVyID0gaW5zdGFuY2Uub3B0aW9ucy52bm9kZTtcblxuICBPYmplY3QuYXNzaWduKGNvbmZpZ3VyYXRpb24sIHR1bmUpO1xuXG4gIGluc3RhbmNlLm9wdGlvbnMudm5vZGUgPSBmdW5jdGlvbiAodm5vZGUpIHtcbiAgICB2bm9kZS5ub2RlTmFtZSA9IHJlc29sdmVUeXBlKHZub2RlLm5vZGVOYW1lKTtcbiAgICBpZiAob2xkSGFuZGxlcikge1xuICAgICAgb2xkSGFuZGxlcih2bm9kZSk7XG4gICAgfVxuICB9O1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuZnVuY3Rpb24gX3Jlc29sdmVUeXBlKHR5cGUpIHtcbiAgaWYgKCFpc0NvbXBvc2l0ZUNvbXBvbmVudCh0eXBlKSB8fCBpc1R5cGVCbGFja2xpc3RlZCh0eXBlKSB8fCBpc1Byb3h5VHlwZSh0eXBlKSkgcmV0dXJuIHR5cGU7XG5cbiAgdmFyIHByb3h5ID0gcmVhY3RIb3RMb2FkZXIuZGlzYWJsZVByb3h5Q3JlYXRpb24gPyBnZXRQcm94eUJ5VHlwZSh0eXBlKSA6IGNyZWF0ZVByb3h5Rm9yVHlwZSh0eXBlKTtcblxuICByZXR1cm4gcHJveHkgPyBwcm94eS5nZXQoKSA6IHR5cGU7XG59XG5cbnZhciByZWFjdEhvdExvYWRlciA9IHtcbiAgcmVnaXN0ZXI6IGZ1bmN0aW9uIHJlZ2lzdGVyKHR5cGUsIHVuaXF1ZUxvY2FsTmFtZSwgZmlsZU5hbWUpIHtcbiAgICBpZiAoaXNDb21wb3NpdGVDb21wb25lbnQodHlwZSkgJiYgdHlwZW9mIHVuaXF1ZUxvY2FsTmFtZSA9PT0gJ3N0cmluZycgJiYgdW5pcXVlTG9jYWxOYW1lICYmIHR5cGVvZiBmaWxlTmFtZSA9PT0gJ3N0cmluZycgJiYgZmlsZU5hbWUpIHtcbiAgICAgIHZhciBpZCA9IGZpbGVOYW1lICsgJyMnICsgdW5pcXVlTG9jYWxOYW1lO1xuICAgICAgdmFyIHByb3h5ID0gZ2V0UHJveHlCeUlkKGlkKTtcblxuICAgICAgaWYgKHByb3h5ICYmIHByb3h5LmdldEN1cnJlbnQoKSAhPT0gdHlwZSkge1xuICAgICAgICAvLyBjb21wb25lbnQgZ290IHJlcGxhY2VkLiBOZWVkIHRvIHJlY29uY2lsZVxuICAgICAgICBpbmNyZW1lbnQoKTtcblxuICAgICAgICBpZiAoaXNUeXBlQmxhY2tsaXN0ZWQodHlwZSkgfHwgaXNUeXBlQmxhY2tsaXN0ZWQocHJveHkuZ2V0Q3VycmVudCgpKSkge1xuICAgICAgICAgIGxvZ2dlci5lcnJvcignUmVhY3QtaG90LWxvYWRlcjogQ29sZCBjb21wb25lbnQnLCB1bmlxdWVMb2NhbE5hbWUsICdhdCcsIGZpbGVOYW1lLCAnaGFzIGJlZW4gdXBkYXRlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWd1cmF0aW9uLm9uQ29tcG9uZW50UmVnaXN0ZXIpIHtcbiAgICAgICAgY29uZmlndXJhdGlvbi5vbkNvbXBvbmVudFJlZ2lzdGVyKHR5cGUsIHVuaXF1ZUxvY2FsTmFtZSwgZmlsZU5hbWUpO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVQcm94eUJ5SWQoaWQsIHR5cGUpO1xuICAgICAgcmVnaXN0ZXJDb21wb25lbnQodHlwZSk7XG4gICAgfVxuICB9LFxuICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgcmVzZXRQcm94aWVzKCk7XG4gIH0sXG4gIHByZWFjdDogZnVuY3Rpb24gcHJlYWN0KGluc3RhbmNlKSB7XG4gICAgcHJlYWN0QWRhcHRlcihpbnN0YW5jZSwgX3Jlc29sdmVUeXBlKTtcbiAgfSxcbiAgcmVzb2x2ZVR5cGU6IGZ1bmN0aW9uIHJlc29sdmVUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gX3Jlc29sdmVUeXBlKHR5cGUpO1xuICB9LFxuICBwYXRjaDogZnVuY3Rpb24gcGF0Y2goUmVhY3QkJDEpIHtcbiAgICBpZiAoIVJlYWN0JCQxLmNyZWF0ZUVsZW1lbnQuaXNQYXRjaGVkQnlSZWFjdEhvdExvYWRlcikge1xuICAgICAgdmFyIG9yaWdpbmFsQ3JlYXRlRWxlbWVudCA9IFJlYWN0JCQxLmNyZWF0ZUVsZW1lbnQ7XG4gICAgICAvLyBUcmljayBSZWFjdCBpbnRvIHJlbmRlcmluZyBhIHByb3h5IHNvIHRoYXRcbiAgICAgIC8vIGl0cyBzdGF0ZSBpcyBwcmVzZXJ2ZWQgd2hlbiB0aGUgY2xhc3MgY2hhbmdlcy5cbiAgICAgIC8vIFRoaXMgd2lsbCB1cGRhdGUgdGhlIHByb3h5IGlmIGl0J3MgZm9yIGEga25vd24gdHlwZS5cbiAgICAgIFJlYWN0JCQxLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcmlnaW5hbENyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBbX3Jlc29sdmVUeXBlKHR5cGUpXS5jb25jYXQoYXJncykpO1xuICAgICAgfTtcbiAgICAgIFJlYWN0JCQxLmNyZWF0ZUVsZW1lbnQuaXNQYXRjaGVkQnlSZWFjdEhvdExvYWRlciA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFSZWFjdCQkMS5jcmVhdGVGYWN0b3J5LmlzUGF0Y2hlZEJ5UmVhY3RIb3RMb2FkZXIpIHtcbiAgICAgIC8vIFBhdGNoIFJlYWN0LmNyZWF0ZUZhY3RvcnkgdG8gdXNlIHBhdGNoZWQgY3JlYXRlRWxlbWVudFxuICAgICAgLy8gYmVjYXVzZSB0aGUgb3JpZ2luYWwgaW1wbGVtZW50YXRpb24gdXNlcyB0aGUgaW50ZXJuYWwsXG4gICAgICAvLyB1bnBhdGNoZWQgUmVhY3RFbGVtZW50LmNyZWF0ZUVsZW1lbnRcbiAgICAgIFJlYWN0JCQxLmNyZWF0ZUZhY3RvcnkgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgZmFjdG9yeSA9IFJlYWN0JCQxLmNyZWF0ZUVsZW1lbnQuYmluZChudWxsLCB0eXBlKTtcbiAgICAgICAgZmFjdG9yeS50eXBlID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGZhY3Rvcnk7XG4gICAgICB9O1xuICAgICAgUmVhY3QkJDEuY3JlYXRlRmFjdG9yeS5pc1BhdGNoZWRCeVJlYWN0SG90TG9hZGVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIVJlYWN0JCQxLkNoaWxkcmVuLm9ubHkuaXNQYXRjaGVkQnlSZWFjdEhvdExvYWRlcikge1xuICAgICAgdmFyIG9yaWdpbmFsQ2hpbGRyZW5Pbmx5ID0gUmVhY3QkJDEuQ2hpbGRyZW4ub25seTtcbiAgICAgIC8vIFVzZSB0aGUgc2FtZSB0cmljayBhcyBSZWFjdC5jcmVhdGVFbGVtZW50XG4gICAgICBSZWFjdCQkMS5DaGlsZHJlbi5vbmx5ID0gZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbENoaWxkcmVuT25seShfZXh0ZW5kcyh7fSwgY2hpbGRyZW4sIHsgdHlwZTogX3Jlc29sdmVUeXBlKGNoaWxkcmVuLnR5cGUpIH0pKTtcbiAgICAgIH07XG4gICAgICBSZWFjdCQkMS5DaGlsZHJlbi5vbmx5LmlzUGF0Y2hlZEJ5UmVhY3RIb3RMb2FkZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlYWN0SG90TG9hZGVyLnJlc2V0KCk7XG4gIH0sXG5cblxuICBkaXNhYmxlUHJveHlDcmVhdGlvbjogZmFsc2Vcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbmZ1bmN0aW9uIHB1c2hTdGFjayhzdGFjaywgbm9kZSkge1xuICBzdGFjay50eXBlID0gbm9kZS50eXBlO1xuICBzdGFjay5jaGlsZHJlbiA9IFtdO1xuICBzdGFjay5pbnN0YW5jZSA9IHR5cGVvZiBub2RlLnR5cGUgPT09ICdmdW5jdGlvbicgPyBub2RlLnN0YXRlTm9kZSA6IHN0YWNrO1xuXG4gIGlmICghc3RhY2suaW5zdGFuY2UpIHtcbiAgICBzdGFjay5pbnN0YW5jZSA9IHtcbiAgICAgIFNGQ19mYWtlOiBzdGFjay50eXBlLFxuICAgICAgcHJvcHM6IHt9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBzdGFjay50eXBlKHN0YWNrLmluc3RhbmNlLnByb3BzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVGaWJlclN0YWNrKG5vZGUsIHN0YWNrKSB7XG4gIHB1c2hTdGFjayhzdGFjaywgbm9kZSk7XG4gIGlmIChub2RlLmNoaWxkKSB7XG4gICAgdmFyIGNoaWxkID0gbm9kZS5jaGlsZDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBjaGlsZFN0YWNrID0ge307XG4gICAgICBoeWRyYXRlRmliZXJTdGFjayhjaGlsZCwgY2hpbGRTdGFjayk7XG4gICAgICBzdGFjay5jaGlsZHJlbi5wdXNoKGNoaWxkU3RhY2spO1xuICAgICAgY2hpbGQgPSBjaGlsZC5zaWJsaW5nO1xuICAgIH0gd2hpbGUgKGNoaWxkKTtcbiAgfVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5mdW5jdGlvbiBwdXNoU3RhdGUoc3RhY2ssIHR5cGUsIGluc3RhbmNlKSB7XG4gIHN0YWNrLnR5cGUgPSB0eXBlO1xuICBzdGFjay5jaGlsZHJlbiA9IFtdO1xuICBzdGFjay5pbnN0YW5jZSA9IGluc3RhbmNlIHx8IHN0YWNrO1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlLmlzU3RhdGVsZXNzRnVuY3Rpb25hbFByb3h5KSB7XG4gICAgLy8gSW4gUmVhY3QgMTUgU0ZDIGlzIHdyYXBwZWQgYnkgY29tcG9uZW50LiBXZSBoYXZlIHRvIGRldGVjdCBvdXIgcHJveGllcyBhbmQgY2hhbmdlIHRoZSB3YXkgaXQgd29ya3NcbiAgICBzdGFjay5pbnN0YW5jZSA9IHtcbiAgICAgIFNGQ19mYWtlOiB0eXBlLFxuICAgICAgcHJvcHM6IHt9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0eXBlKHN0YWNrLmluc3RhbmNlLnByb3BzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVMZWdhY3lTdGFjayhub2RlLCBzdGFjaykge1xuICBpZiAobm9kZS5fY3VycmVudEVsZW1lbnQpIHtcbiAgICBwdXNoU3RhdGUoc3RhY2ssIG5vZGUuX2N1cnJlbnRFbGVtZW50LnR5cGUsIG5vZGUuX2luc3RhbmNlIHx8IHN0YWNrKTtcbiAgfVxuXG4gIGlmIChub2RlLl9yZW5kZXJlZENvbXBvbmVudCkge1xuICAgIHZhciBjaGlsZFN0YWNrID0ge307XG4gICAgaHlkcmF0ZUxlZ2FjeVN0YWNrKG5vZGUuX3JlbmRlcmVkQ29tcG9uZW50LCBjaGlsZFN0YWNrKTtcbiAgICBzdGFjay5jaGlsZHJlbi5wdXNoKGNoaWxkU3RhY2spO1xuICB9IGVsc2UgaWYgKG5vZGUuX3JlbmRlcmVkQ2hpbGRyZW4pIHtcbiAgICBPYmplY3Qua2V5cyhub2RlLl9yZW5kZXJlZENoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBjaGlsZFN0YWNrID0ge307XG4gICAgICBoeWRyYXRlTGVnYWN5U3RhY2sobm9kZS5fcmVuZGVyZWRDaGlsZHJlbltrZXldLCBjaGlsZFN0YWNrKTtcbiAgICAgIHN0YWNrLmNoaWxkcmVuLnB1c2goY2hpbGRTdGFjayk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuZnVuY3Rpb24gZ2V0UmVhY3RTdGFjayhpbnN0YW5jZSkge1xuICB2YXIgcm9vdE5vZGUgPSBnZXRJbnRlcm5hbEluc3RhbmNlKGluc3RhbmNlKTtcbiAgdmFyIHN0YWNrID0ge307XG4gIGlmIChyb290Tm9kZSkge1xuICAgIC8vIFJlYWN0IHN0YWNrXG4gICAgdmFyIGlzRmliZXIgPSB0eXBlb2Ygcm9vdE5vZGUudGFnID09PSAnbnVtYmVyJztcbiAgICBpZiAoaXNGaWJlcikge1xuICAgICAgaHlkcmF0ZUZpYmVyU3RhY2socm9vdE5vZGUsIHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaHlkcmF0ZUxlZ2FjeVN0YWNrKHJvb3ROb2RlLCBzdGFjayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YWNrO1xufVxuXG4vLyBzb21lIGBlbXB0eWAgbmFtZXMsIFJlYWN0IGNhbiBhdXRvc2V0IGRpc3BsYXkgbmFtZSB0by4uLlxudmFyIFVOREVGSU5FRF9OQU1FUyA9IHtcbiAgVW5rbm93bjogdHJ1ZSxcbiAgQ29tcG9uZW50OiB0cnVlXG59O1xuXG52YXIgcmVuZGVyU3RhY2sgPSBbXTtcblxudmFyIHN0YWNrUmVwb3J0ID0gZnVuY3Rpb24gc3RhY2tSZXBvcnQoKSB7XG4gIHZhciByZXYgPSByZW5kZXJTdGFjay5zbGljZSgpLnJldmVyc2UoKTtcbiAgbG9nZ2VyLndhcm4oJ2luJywgcmV2WzBdLm5hbWUsIHJldik7XG59O1xuXG52YXIgZW1wdHlNYXAgPSBuZXcgTWFwKCk7XG52YXIgc3RhY2tDb250ZXh0ID0gZnVuY3Rpb24gc3RhY2tDb250ZXh0KCkge1xuICByZXR1cm4gKHJlbmRlclN0YWNrW3JlbmRlclN0YWNrLmxlbmd0aCAtIDFdIHx8IHt9KS5jb250ZXh0IHx8IGVtcHR5TWFwO1xufTtcbnZhciBhcmVOYW1lc0VxdWFsID0gZnVuY3Rpb24gYXJlTmFtZXNFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiIHx8IFVOREVGSU5FRF9OQU1FU1thXSAmJiBVTkRFRklORURfTkFNRVNbYl07XG59O1xudmFyIHNob3VsZFVzZVJlbmRlck1ldGhvZCA9IGZ1bmN0aW9uIHNob3VsZFVzZVJlbmRlck1ldGhvZChmbikge1xuICByZXR1cm4gZm4gJiYgKGlzUmVhY3RDbGFzc0luc3RhbmNlKGZuKSB8fCBmbi5TRkNfZmFrZSk7XG59O1xuXG52YXIgaXNGdW5jdGlvbmFsID0gZnVuY3Rpb24gaXNGdW5jdGlvbmFsKGZuKSB7XG4gIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbic7XG59O1xudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGZuKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGZuKTtcbn07XG52YXIgYXNBcnJheSA9IGZ1bmN0aW9uIGFzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheShhKSA/IGEgOiBbYV07XG59O1xudmFyIGdldFR5cGVPZiA9IGZ1bmN0aW9uIGdldFR5cGVPZih0eXBlKSB7XG4gIGlmIChpc1JlYWN0Q2xhc3ModHlwZSkpIHJldHVybiAnUmVhY3RDb21wb25lbnQnO1xuICBpZiAoaXNGdW5jdGlvbmFsKHR5cGUpKSByZXR1cm4gJ1N0YXRlbGVzc0Z1bmN0aW9uYWwnO1xuICByZXR1cm4gJ0ZyYWdtZW50JzsgLy8gP1xufTtcblxudmFyIGZpbHRlck51bGxBcnJheSA9IGZ1bmN0aW9uIGZpbHRlck51bGxBcnJheShhKSB7XG4gIGlmICghYSkgcmV0dXJuIFtdO1xuICByZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gISF4O1xuICB9KTtcbn07XG5cbnZhciB1bmZsYXR0ZW4gPSBmdW5jdGlvbiB1bmZsYXR0ZW4oYSkge1xuICByZXR1cm4gYS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBhY2MucHVzaC5hcHBseShhY2MsIHVuZmxhdHRlbihhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjYy5wdXNoKGEpO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG59O1xuXG52YXIgZ2V0RWxlbWVudFR5cGUgPSBmdW5jdGlvbiBnZXRFbGVtZW50VHlwZShjaGlsZCkge1xuICByZXR1cm4gY2hpbGQudHlwZVtVTldSQVBfUFJPWFldID8gY2hpbGQudHlwZVtVTldSQVBfUFJPWFldKCkgOiBjaGlsZC50eXBlO1xufTtcblxudmFyIGhhdmVUZXh0U2ltaWxhcml0eSA9IGZ1bmN0aW9uIGhhdmVUZXh0U2ltaWxhcml0eShhLCBiKSB7XG4gIHJldHVybiAoXG4gICAgLy8gZXF1YWwgb3Igc2xpZ2h0IGNoYW5nZWRcbiAgICBhID09PSBiIHx8IGxldmVuc2h0ZWluLmdldChhLCBiKSA8IGEubGVuZ3RoICogMC4yXG4gICk7XG59O1xuXG52YXIgZXF1YWxDbGFzc2VzID0gZnVuY3Rpb24gZXF1YWxDbGFzc2VzKGEsIGIpIHtcbiAgdmFyIHByb3RvdHlwZUEgPSBhLnByb3RvdHlwZTtcbiAgdmFyIHByb3RvdHlwZUIgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYi5wcm90b3R5cGUpO1xuXG4gIHZhciBoaXRzID0gMDtcbiAgdmFyIG1pc3NlcyA9IDA7XG4gIHZhciBjb21wYXJpc29ucyA9IDA7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvdHlwZUEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBkZXNjcmlwdG9yQSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlQSwga2V5KTtcbiAgICB2YXIgdmFsdWVBID0gZGVzY3JpcHRvckEgJiYgKGRlc2NyaXB0b3JBLnZhbHVlIHx8IGRlc2NyaXB0b3JBLmdldCB8fCBkZXNjcmlwdG9yQS5zZXQpO1xuICAgIHZhciBkZXNjcmlwdG9yQiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlQiwga2V5KTtcbiAgICB2YXIgdmFsdWVCID0gZGVzY3JpcHRvckIgJiYgKGRlc2NyaXB0b3JCLnZhbHVlIHx8IGRlc2NyaXB0b3JCLmdldCB8fCBkZXNjcmlwdG9yQi5zZXQpO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZUEgPT09ICdmdW5jdGlvbicgJiYga2V5ICE9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb21wYXJpc29ucysrO1xuICAgICAgaWYgKGhhdmVUZXh0U2ltaWxhcml0eShTdHJpbmcodmFsdWVBKSwgU3RyaW5nKHZhbHVlQikpKSB7XG4gICAgICAgIGhpdHMrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pc3NlcysrO1xuICAgICAgICBpZiAoa2V5ID09PSAncmVuZGVyJykge1xuICAgICAgICAgIG1pc3NlcysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLy8gYWxsb3cgdG8gYWRkIG9yIHJlbW92ZSBvbmUgZnVuY3Rpb25cbiAgcmV0dXJuIGhpdHMgPiAwICYmIG1pc3NlcyA8PSAxIHx8IGNvbXBhcmlzb25zID09PSAwO1xufTtcblxudmFyIGFyZVN3YXBwYWJsZSA9IGZ1bmN0aW9uIGFyZVN3YXBwYWJsZShhLCBiKSB7XG4gIC8vIGJvdGggYXJlIHJlZ2lzdGVyZWQgY29tcG9uZW50cyBhbmQgaGF2ZSB0aGUgc2FtZSBuYW1lXG4gIGlmIChnZXRJZEJ5VHlwZShiKSAmJiBnZXRJZEJ5VHlwZShhKSA9PT0gZ2V0SWRCeVR5cGUoYikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoZ2V0VHlwZU9mKGEpICE9PSBnZXRUeXBlT2YoYikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGlzUmVhY3RDbGFzcyhhKSkge1xuICAgIHJldHVybiBhcmVOYW1lc0VxdWFsKGdldENvbXBvbmVudERpc3BsYXlOYW1lKGEpLCBnZXRDb21wb25lbnREaXNwbGF5TmFtZShiKSkgJiYgZXF1YWxDbGFzc2VzKGEsIGIpO1xuICB9XG5cbiAgaWYgKGlzRnVuY3Rpb25hbChhKSkge1xuICAgIHZhciBuYW1lQSA9IGdldENvbXBvbmVudERpc3BsYXlOYW1lKGEpO1xuICAgIHJldHVybiBhcmVOYW1lc0VxdWFsKG5hbWVBLCBnZXRDb21wb25lbnREaXNwbGF5TmFtZShiKSkgJiYgbmFtZUEgIT09ICdDb21wb25lbnQnIHx8IGhhdmVUZXh0U2ltaWxhcml0eShTdHJpbmcoYSksIFN0cmluZyhiKSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKHNob3VsZFVzZVJlbmRlck1ldGhvZChjb21wb25lbnQpKSB7XG4gICAgLy8gbm90IGNhbGxpbmcgcmVhbCByZW5kZXIgbWV0aG9kIHRvIHByZXZlbnQgY2FsbCByZWN1cnNpb24uXG4gICAgLy8gc3RhdGVsZXNzIGNvbXBvbmVudHMgZG9lcyBub3QgaGF2ZSBob3RDb21wb25lbnRSZW5kZXJcbiAgICByZXR1cm4gY29tcG9uZW50LmhvdENvbXBvbmVudFJlbmRlciA/IGNvbXBvbmVudC5ob3RDb21wb25lbnRSZW5kZXIoKSA6IGNvbXBvbmVudC5yZW5kZXIoKTtcbiAgfVxuICBpZiAoaXNBcnJheShjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5tYXAocmVuZGVyKTtcbiAgfVxuICBpZiAoY29tcG9uZW50LmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jaGlsZHJlbjtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn07XG5cbnZhciBOT19DSElMRFJFTiA9IHsgY2hpbGRyZW46IFtdIH07XG52YXIgbWFwQ2hpbGRyZW4gPSBmdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgaW5zdGFuY2VzKSB7XG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIGlmICgodHlwZW9mIGNoaWxkID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjaGlsZCkpICE9PSAnb2JqZWN0JyB8fCBjaGlsZC5pc01lcmdlZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG4gICAgICB2YXIgaW5zdGFuY2VMaW5lID0gaW5zdGFuY2VzW2luZGV4XSB8fCB7fTtcbiAgICAgIHZhciBvbGRDaGlsZHJlbiA9IGFzQXJyYXkoaW5zdGFuY2VMaW5lLmNoaWxkcmVuIHx8IFtdKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgdHlwZTogbnVsbFxuICAgICAgICB9LCBtYXBDaGlsZHJlbihjaGlsZCwgb2xkQ2hpbGRyZW4pKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0NoaWxkcmVuID0gYXNBcnJheShjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5jaGlsZHJlbiB8fCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICB2YXIgbmV4dENoaWxkcmVuID0gY2hpbGQudHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiBvbGRDaGlsZHJlbi5sZW5ndGggJiYgbWFwQ2hpbGRyZW4obmV3Q2hpbGRyZW4sIG9sZENoaWxkcmVuKTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgbmV4dFByb3BzOiBjaGlsZC5wcm9wcyxcbiAgICAgICAgaXNNZXJnZWQ6IHRydWVcbiAgICAgIH0sIGluc3RhbmNlTGluZSwgbmV4dENoaWxkcmVuIHx8IHt9LCB7XG4gICAgICAgIHR5cGU6IGNoaWxkLnR5cGVcbiAgICAgIH0pO1xuICAgIH0pXG4gIH07XG59O1xuXG52YXIgbWVyZ2VJbmplY3QgPSBmdW5jdGlvbiBtZXJnZUluamVjdChhLCBiLCBpbnN0YW5jZSkge1xuICBpZiAoYSAmJiAhQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBtZXJnZUluamVjdChbYV0sIGIpO1xuICB9XG4gIGlmIChiICYmICFBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgcmV0dXJuIG1lcmdlSW5qZWN0KGEsIFtiXSk7XG4gIH1cblxuICBpZiAoIWEgfHwgIWIpIHtcbiAgICByZXR1cm4gTk9fQ0hJTERSRU47XG4gIH1cbiAgaWYgKGEubGVuZ3RoID09PSBiLmxlbmd0aCkge1xuICAgIHJldHVybiBtYXBDaGlsZHJlbihhLCBiKTtcbiAgfVxuXG4gIC8vIGluIHNvbWUgY2FzZXMgKG5vIGNvbmZpZGVuY2UgaGVyZSkgQiBjb3VsZCBjb250YWluIEEgZXhjZXB0IG51bGwgY2hpbGRyZW5cbiAgLy8gaW4gc29tZSBjYXNlcyAtIGNvdWxkIG5vdC5cbiAgLy8gdGhpcyBkZXBlbmRzIG9uIFJlYWN0IHZlcnNpb24gYW5kIHRoZSB3YXkgeW91IGJ1aWxkIGNvbXBvbmVudC5cblxuICB2YXIgbm9uTnVsbEEgPSBmaWx0ZXJOdWxsQXJyYXkoYSk7XG4gIGlmIChub25OdWxsQS5sZW5ndGggPT09IGIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1hcENoaWxkcmVuKG5vbk51bGxBLCBiKTtcbiAgfVxuXG4gIHZhciBmbGF0QSA9IHVuZmxhdHRlbihub25OdWxsQSk7XG4gIHZhciBmbGF0QiA9IHVuZmxhdHRlbihiKTtcbiAgaWYgKGZsYXRBLmxlbmd0aCA9PT0gZmxhdEIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1hcENoaWxkcmVuKGZsYXRBLCBmbGF0Qik7XG4gIH1cbiAgaWYgKGZsYXRCLmxlbmd0aCA9PT0gMCAmJiBmbGF0QS5sZW5ndGggPT09IDEgJiYgX3R5cGVvZihmbGF0QVswXSkgIT09ICdvYmplY3QnKSA7IGVsc2Uge1xuICAgIGxvZ2dlci53YXJuKCdSZWFjdC1ob3QtbG9hZGVyOiB1bmFibGUgdG8gbWVyZ2UgJywgYSwgJ2FuZCBjaGlsZHJlbiBvZiAnLCBpbnN0YW5jZSk7XG4gICAgc3RhY2tSZXBvcnQoKTtcbiAgfVxuICByZXR1cm4gTk9fQ0hJTERSRU47XG59O1xuXG52YXIgdHJhbnNmb3JtRmxvd05vZGUgPSBmdW5jdGlvbiB0cmFuc2Zvcm1GbG93Tm9kZShmbG93KSB7XG4gIHJldHVybiBmbG93LnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgaXNGcmFnbWVudE5vZGUobm9kZSkpIHtcbiAgICAgIGlmIChub2RlLnByb3BzICYmIG5vZGUucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChhY2MsIGZpbHRlck51bGxBcnJheShhc0FycmF5KG5vZGUucHJvcHMuY2hpbGRyZW4pKSk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KGFjYywgZmlsdGVyTnVsbEFycmF5KGFzQXJyYXkobm9kZS5jaGlsZHJlbikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdLmNvbmNhdChhY2MsIFtub2RlXSk7XG4gIH0sIFtdKTtcbn07XG5cbnZhciBzY2hlZHVsZWRVcGRhdGVzID0gW107XG52YXIgc2NoZWR1bGVkVXBkYXRlID0gMDtcblxudmFyIGZsdXNoU2NoZWR1bGVkVXBkYXRlcyA9IGZ1bmN0aW9uIGZsdXNoU2NoZWR1bGVkVXBkYXRlcygpIHtcbiAgdmFyIGluc3RhbmNlcyA9IHNjaGVkdWxlZFVwZGF0ZXM7XG4gIHNjaGVkdWxlZFVwZGF0ZXMgPSBbXTtcbiAgc2NoZWR1bGVkVXBkYXRlID0gMDtcbiAgaW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlW1BST1hZX0lTX01PVU5URURdICYmIHVwZGF0ZUluc3RhbmNlKGluc3RhbmNlKTtcbiAgfSk7XG59O1xuXG52YXIgdW5zY2hlZHVsZVVwZGF0ZSA9IGZ1bmN0aW9uIHVuc2NoZWR1bGVVcGRhdGUoaW5zdGFuY2UpIHtcbiAgc2NoZWR1bGVkVXBkYXRlcyA9IHNjaGVkdWxlZFVwZGF0ZXMuZmlsdGVyKGZ1bmN0aW9uIChpbnN0KSB7XG4gICAgcmV0dXJuIGluc3QgIT09IGluc3RhbmNlO1xuICB9KTtcbn07XG5cbnZhciBzY2hlZHVsZUluc3RhbmNlVXBkYXRlID0gZnVuY3Rpb24gc2NoZWR1bGVJbnN0YW5jZVVwZGF0ZShpbnN0YW5jZSkge1xuICBzY2hlZHVsZWRVcGRhdGVzLnB1c2goaW5zdGFuY2UpO1xuICBpZiAoIXNjaGVkdWxlZFVwZGF0ZSkge1xuICAgIHNjaGVkdWxlZFVwZGF0ZSA9IHNldFRpbWVvdXQoZmx1c2hTY2hlZHVsZWRVcGRhdGVzKTtcbiAgfVxufTtcblxudmFyIGhvdFJlcGxhY2VtZW50UmVuZGVyID0gZnVuY3Rpb24gaG90UmVwbGFjZW1lbnRSZW5kZXIoaW5zdGFuY2UsIHN0YWNrKSB7XG4gIGlmIChpc1JlYWN0Q2xhc3NJbnN0YW5jZShpbnN0YW5jZSkpIHtcbiAgICB2YXIgdHlwZSA9IGdldEVsZW1lbnRUeXBlKHN0YWNrKTtcblxuICAgIHJlbmRlclN0YWNrLnB1c2goe1xuICAgICAgbmFtZTogZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUodHlwZSksXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgcHJvcHM6IHN0YWNrLmluc3RhbmNlLnByb3BzLFxuICAgICAgY29udGV4dDogc3RhY2tDb250ZXh0KClcbiAgICB9KTtcbiAgfVxuICB2YXIgZmxvdyA9IHRyYW5zZm9ybUZsb3dOb2RlKGZpbHRlck51bGxBcnJheShhc0FycmF5KHJlbmRlcihpbnN0YW5jZSkpKSk7XG5cbiAgdmFyIGNoaWxkcmVuID0gc3RhY2suY2hpbGRyZW47XG5cblxuICBmbG93LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBzdGFja0NoaWxkID0gY2hpbGRyZW5baW5kZXhdO1xuICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gbmV4dChpbnN0YW5jZSkge1xuICAgICAgLy8gY29weSBvdmVyIHByb3BzIGFzIGxvbmcgbmV3IGNvbXBvbmVudCBtYXkgYmUgaGlkZGVuIGluc2lkZSB0aGVtXG4gICAgICAvLyBjaGlsZCBkb2VzIG5vdCBoYXZlIGFsbCBwcm9wcywgYXMgbG9uZyBzb21lIG9mIHRoZW0gY2FuIGJlIGNhbGN1bGF0ZWQgb24gY29tcG9uZW50TW91bnQuXG4gICAgICB2YXIgcmVhbFByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICB2YXIgbmV4dFByb3BzID0gX2V4dGVuZHMoe30sIHJlYWxQcm9wcywgY2hpbGQubmV4dFByb3BzIHx8IHt9LCBjaGlsZC5wcm9wcyB8fCB7fSk7XG5cbiAgICAgIGlmIChpc1JlYWN0Q2xhc3NJbnN0YW5jZShpbnN0YW5jZSkgJiYgaW5zdGFuY2UuY29tcG9uZW50V2lsbFVwZGF0ZSkge1xuICAgICAgICAvLyBGb3JjZS1yZWZyZXNoIGNvbXBvbmVudCAoYnlwYXNzIHJlZHV4IHJlbmRlcmVkQ29tcG9uZW50KVxuICAgICAgICBpbnN0YW5jZS5jb21wb25lbnRXaWxsVXBkYXRlKF9leHRlbmRzKHt9LCByZWFsUHJvcHMpLCBpbnN0YW5jZS5zdGF0ZSk7XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS5wcm9wcyA9IG5leHRQcm9wcztcbiAgICAgIGhvdFJlcGxhY2VtZW50UmVuZGVyKGluc3RhbmNlLCBzdGFja0NoaWxkKTtcbiAgICAgIGluc3RhbmNlLnByb3BzID0gcmVhbFByb3BzO1xuICAgIH07XG5cbiAgICAvLyB0ZXh0IG5vZGVcbiAgICBpZiAoKHR5cGVvZiBjaGlsZCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY2hpbGQpKSAhPT0gJ29iamVjdCcgfHwgIXN0YWNrQ2hpbGQgfHwgIXN0YWNrQ2hpbGQuaW5zdGFuY2UpIHtcbiAgICAgIGlmIChzdGFja0NoaWxkICYmIHN0YWNrQ2hpbGQuY2hpbGRyZW4gJiYgc3RhY2tDaGlsZC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKCdSZWFjdC1ob3QtbG9hZGVyOiByZWNvbmNpbGlhdGlvbiBmYWlsZWQnLCAnY291bGQgbm90IGRpdmUgaW50byBbJywgY2hpbGQsICddIHdoaWxlIHNvbWUgZWxlbWVudHMgYXJlIHN0aWxsIHByZXNlbnQgaW4gdGhlIHRyZWUuJyk7XG4gICAgICAgIHN0YWNrUmVwb3J0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF90eXBlb2YoY2hpbGQudHlwZSkgIT09IF90eXBlb2Yoc3RhY2tDaGlsZC50eXBlKSkge1xuICAgICAgLy8gUG9ydGFscyBjb3VsZCBnZW5lcmF0ZSB1bmRlZmluZWQgIT09IG51bGxcbiAgICAgIGlmIChjaGlsZC50eXBlICYmIHN0YWNrQ2hpbGQudHlwZSkge1xuICAgICAgICBsb2dnZXIud2FybignUmVhY3QtaG90LWxvYWRlcjogZ290ICcsIGNoaWxkLnR5cGUsICdpbnN0ZWFkIG9mJywgc3RhY2tDaGlsZC50eXBlKTtcbiAgICAgICAgc3RhY2tSZXBvcnQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSZWFjdCBjb250ZXh0XG4gICAgaWYgKGlzQ29udGV4dENvbnN1bWVyKGNoaWxkKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV4dCh7XG4gICAgICAgICAgY2hpbGRyZW46IChjaGlsZC5wcm9wcyA/IGNoaWxkLnByb3BzLmNoaWxkcmVuIDogY2hpbGQuY2hpbGRyZW5bMF0pKHN0YWNrQ29udGV4dCgpLmdldChjaGlsZC50eXBlKSB8fCBjaGlsZC50eXBlW0NPTlRFWFRfQ1VSUkVOVF9WQUxVRV0pXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nLCB5ZXRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjaGlsZC50eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBSZWFjdFxuICAgICAgdmFyIGNoaWxkTmFtZSA9IGNoaWxkLnR5cGUgPyBnZXRDb21wb25lbnREaXNwbGF5TmFtZShjaGlsZC50eXBlKSA6ICdlbXB0eSc7XG4gICAgICB2YXIgZXh0cmFDb250ZXh0ID0gc3RhY2tDb250ZXh0KCk7XG5cbiAgICAgIGlmIChpc0NvbnRleHRQcm92aWRlcihjaGlsZCkpIHtcbiAgICAgICAgZXh0cmFDb250ZXh0ID0gbmV3IE1hcChleHRyYUNvbnRleHQpO1xuICAgICAgICBleHRyYUNvbnRleHQuc2V0KGdldENvbnRleHRQcm92aWRlcihjaGlsZC50eXBlKSwgX2V4dGVuZHMoe30sIGNoaWxkLm5leHRQcm9wcyB8fCB7fSwgY2hpbGQucHJvcHMgfHwge30pLnZhbHVlKTtcbiAgICAgICAgY2hpbGROYW1lID0gJ0NvbnRleHRQcm92aWRlcic7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlclN0YWNrLnB1c2goe1xuICAgICAgICBuYW1lOiBjaGlsZE5hbWUsXG4gICAgICAgIHR5cGU6IGNoaWxkLnR5cGUsXG4gICAgICAgIHByb3BzOiBzdGFjay5pbnN0YW5jZS5wcm9wcyxcbiAgICAgICAgY29udGV4dDogZXh0cmFDb250ZXh0XG4gICAgICB9KTtcblxuICAgICAgbmV4dChcbiAgICAgIC8vIG1vdmUgdHlwZXMgZnJvbSByZW5kZXIgdG8gdGhlIGluc3RhbmNlcyBvZiBoeWRyYXRlZCB0cmVlXG4gICAgICBtZXJnZUluamVjdCh0cmFuc2Zvcm1GbG93Tm9kZShhc0FycmF5KGNoaWxkLnByb3BzID8gY2hpbGQucHJvcHMuY2hpbGRyZW4gOiBjaGlsZC5jaGlsZHJlbikpLCBzdGFja0NoaWxkLmluc3RhbmNlLmNoaWxkcmVuLCBzdGFja0NoaWxkLmluc3RhbmNlKSk7XG4gICAgICByZW5kZXJTdGFjay5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IHN0YWNrQ2hpbGQudHlwZSkge1xuICAgICAgICBuZXh0KHN0YWNrQ2hpbGQuaW5zdGFuY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdW53cmFwIHByb3h5XG4gICAgICAgIHZhciBjaGlsZFR5cGUgPSBnZXRFbGVtZW50VHlwZShjaGlsZCk7XG4gICAgICAgIGlmICghc3RhY2tDaGlsZC50eXBlW1BST1hZX0tFWV0pIHtcbiAgICAgICAgICBpZiAoaXNUeXBlQmxhY2tsaXN0ZWQoc3RhY2tDaGlsZC50eXBlKSkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ1JlYWN0LWhvdC1sb2FkZXI6IGNvbGQgZWxlbWVudCBnb3QgdXBkYXRlZCAnLCBzdGFja0NoaWxkLnR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgbG9nZ2VyLmVycm9yKCdSZWFjdC1ob3QtbG9hZGVyOiBmYXRhbCBlcnJvciBjYXVzZWQgYnkgJywgc3RhY2tDaGlsZC50eXBlLCAnIC0gbm8gaW5zdHJ1bWVudGF0aW9uIGZvdW5kLiAnLCAnUGxlYXNlIHJlcXVpcmUgcmVhY3QtaG90LWxvYWRlciBiZWZvcmUgUmVhY3QuIE1vcmUgaW4gdHJvdWJsZXNob290aW5nLicpO1xuICAgICAgICAgIHN0YWNrUmVwb3J0KCk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdC1ob3QtbG9hZGVyOiB3cm9uZyBjb25maWd1cmF0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNSZWdpc3RlcmVkQ29tcG9uZW50KGNoaWxkVHlwZSkgfHwgaXNSZWdpc3RlcmVkQ29tcG9uZW50KHN0YWNrQ2hpbGQudHlwZSkpIDsgZWxzZSBpZiAoYXJlU3dhcHBhYmxlKGNoaWxkVHlwZSwgc3RhY2tDaGlsZC50eXBlKSkge1xuICAgICAgICAgIC8vIHRoZXkgYXJlIGJvdGggcmVnaXN0ZXJlZCwgb3IgaGF2ZSBlcXVhbCBjb2RlL2Rpc3BsYXluYW1lL3NpZ25hdHVyZVxuXG4gICAgICAgICAgLy8gdXBkYXRlIHByb3h5IHVzaW5nIGludGVybmFsIFBST1hZX0tFWVxuICAgICAgICAgIHVwZGF0ZVByb3h5QnlJZChzdGFja0NoaWxkLnR5cGVbUFJPWFlfS0VZXSwgY2hpbGRUeXBlKTtcblxuICAgICAgICAgIG5leHQoc3RhY2tDaGlsZC5pbnN0YW5jZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nZ2VyLndhcm4oJ1JlYWN0LWhvdC1sb2FkZXI6IGEgJyArIGdldENvbXBvbmVudERpc3BsYXlOYW1lKGNoaWxkVHlwZSkgKyAnIHdhcyBmb3VuZCB3aGVyZSBhICcgKyBnZXRDb21wb25lbnREaXNwbGF5TmFtZShzdGFja0NoaWxkKSArICcgd2FzIGV4cGVjdGVkLlxcbiAgICAgICAgICAnICsgY2hpbGRUeXBlKTtcbiAgICAgICAgICBzdGFja1JlcG9ydCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNjaGVkdWxlSW5zdGFuY2VVcGRhdGUoc3RhY2tDaGlsZC5pbnN0YW5jZSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoaXNSZWFjdENsYXNzSW5zdGFuY2UoaW5zdGFuY2UpKSB7XG4gICAgcmVuZGVyU3RhY2sucG9wKCk7XG4gIH1cbn07XG5cbnZhciBob3RDb21wb25lbnRDb21wYXJlID0gZnVuY3Rpb24gaG90Q29tcG9uZW50Q29tcGFyZShvbGRUeXBlLCBuZXdUeXBlKSB7XG4gIGlmIChvbGRUeXBlID09PSBuZXdUeXBlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoYXJlU3dhcHBhYmxlKG5ld1R5cGUsIG9sZFR5cGUpKSB7XG4gICAgZ2V0UHJveHlCeVR5cGUobmV3VHlwZVtVTldSQVBfUFJPWFldKCkpLmRlcmVmZXJlbmNlKCk7XG4gICAgdXBkYXRlUHJveHlCeUlkKG9sZFR5cGVbUFJPWFlfS0VZXSwgbmV3VHlwZVtVTldSQVBfUFJPWFldKCkpO1xuICAgIHVwZGF0ZVByb3h5QnlJZChuZXdUeXBlW1BST1hZX0tFWV0sIG9sZFR5cGVbVU5XUkFQX1BST1hZXSgpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBob3RSZXBsYWNlbWVudFJlbmRlciQxID0gKGZ1bmN0aW9uIChpbnN0YW5jZSwgc3RhY2spIHtcbiAgdHJ5IHtcbiAgICAvLyBkaXNhYmxlIHJlY29uY2lsZXIgdG8gcHJldmVudCB1cGNvbWluZyBjb21wb25lbnRzIGZyb20gcHJveHlpbmcuXG4gICAgcmVhY3RIb3RMb2FkZXIuZGlzYWJsZVByb3h5Q3JlYXRpb24gPSB0cnVlO1xuICAgIHJlbmRlclN0YWNrID0gW107XG4gICAgaG90UmVwbGFjZW1lbnRSZW5kZXIoaW5zdGFuY2UsIHN0YWNrKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ2dlci53YXJuKCdSZWFjdC1ob3QtbG9hZGVyOiByZWNvbmNpbGF0aW9uIGZhaWxlZCBkdWUgdG8gZXJyb3InLCBlKTtcbiAgfSBmaW5hbGx5IHtcbiAgICByZWFjdEhvdExvYWRlci5kaXNhYmxlUHJveHlDcmVhdGlvbiA9IGZhbHNlO1xuICB9XG59KTtcblxudmFyIHJlY29uY2lsZUhvdFJlcGxhY2VtZW50ID0gZnVuY3Rpb24gcmVjb25jaWxlSG90UmVwbGFjZW1lbnQoUmVhY3RJbnN0YW5jZSkge1xuICByZXR1cm4gaG90UmVwbGFjZW1lbnRSZW5kZXIkMShSZWFjdEluc3RhbmNlLCBnZXRSZWFjdFN0YWNrKFJlYWN0SW5zdGFuY2UpKTtcbn07XG5cbnZhciBSRU5ERVJFRF9HRU5FUkFUSU9OID0gJ1JFQUNUX0hPVF9MT0FERVJfUkVOREVSRURfR0VORVJBVElPTic7XG5cbnZhciByZW5kZXJSZWNvbmNpbGVyID0gZnVuY3Rpb24gcmVuZGVyUmVjb25jaWxlcih0YXJnZXQsIGZvcmNlKSB7XG4gIC8vIHdlIGFyZSBub3QgaW5zaWRlIHBhcmVudCByZWNvbmNpbGF0aW9uXG4gIHZhciBjdXJyZW50R2VuZXJhdGlvbiA9IGdldCQxKCk7XG4gIHZhciBjb21wb25lbnRHZW5lcmF0aW9uID0gdGFyZ2V0W1JFTkRFUkVEX0dFTkVSQVRJT05dO1xuXG4gIHRhcmdldFtSRU5ERVJFRF9HRU5FUkFUSU9OXSA9IGN1cnJlbnRHZW5lcmF0aW9uO1xuXG4gIGlmICghcmVhY3RIb3RMb2FkZXIuZGlzYWJsZVByb3h5Q3JlYXRpb24pIHtcbiAgICBpZiAoKGNvbXBvbmVudEdlbmVyYXRpb24gfHwgZm9yY2UpICYmIGNvbXBvbmVudEdlbmVyYXRpb24gIT09IGN1cnJlbnRHZW5lcmF0aW9uKSB7XG4gICAgICByZWNvbmNpbGVIb3RSZXBsYWNlbWVudCh0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIGFzeW5jUmVjb25jaWxlZFJlbmRlcih0YXJnZXQpIHtcbiAgcmVuZGVyUmVjb25jaWxlcih0YXJnZXQsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcHJveHlXcmFwcGVyKGVsZW1lbnQpIHtcbiAgLy8gcG9zdCB3cmFwIG9uIHBvc3QgcmVuZGVyXG4gIGlmICghcmVhY3RIb3RMb2FkZXIuZGlzYWJsZVByb3h5Q3JlYXRpb24pIHtcbiAgICB1bnNjaGVkdWxlVXBkYXRlKHRoaXMpO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5tYXAocHJveHlXcmFwcGVyKTtcbiAgfVxuICBpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBwcm94eSA9IGdldFByb3h5QnlUeXBlKGVsZW1lbnQudHlwZSk7XG4gICAgaWYgKHByb3h5KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGVsZW1lbnQsIHtcbiAgICAgICAgdHlwZTogcHJveHkuZ2V0KClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuc2V0U3RhbmRJbk9wdGlvbnMoe1xuICBjb21wb25lbnRXaWxsUmVuZGVyOiBhc3luY1JlY29uY2lsZWRSZW5kZXIsXG4gIGNvbXBvbmVudERpZFJlbmRlcjogcHJveHlXcmFwcGVyLFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZsdXNoU2NoZWR1bGVkVXBkYXRlc1xufSk7XG5cbnZhciBBcHBDb250YWluZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBpbmhlcml0cyhBcHBDb250YWluZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFwcENvbnRhaW5lcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwQ29udGFpbmVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlXG4gICAgICBnZW5lcmF0aW9uOiAwXG4gICAgfSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIEFwcENvbnRhaW5lci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAocHJldlN0YXRlLmdlbmVyYXRpb24gIT09IGdldCQxKCkpIHtcbiAgICAgIC8vIEhvdCByZWxvYWQgaXMgaGFwcGVuaW5nLlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIGdlbmVyYXRpb246IGdldCQxKClcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIEFwcENvbnRhaW5lci5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgLy8gRG9uJ3QgdXBkYXRlIHRoZSBjb21wb25lbnQgaWYgdGhlIHN0YXRlIGhhZCBhbiBlcnJvciBhbmQgc3RpbGwgaGFzIG9uZS5cbiAgICAvLyBUaGlzIGFsbG93cyB0byBicmVhayBhbiBpbmZpbml0ZSBsb29wIG9mIGVycm9yIC0+IHJlbmRlciAtPiBlcnJvciAtPiByZW5kZXJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2FlYXJvbi9yZWFjdC1ob3QtbG9hZGVyL2lzc3Vlcy82OTZcbiAgICBpZiAocHJldlN0YXRlLmVycm9yICYmIHRoaXMuc3RhdGUuZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBBcHBDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudERpZENhdGNoID0gZnVuY3Rpb24gY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogZXJyb3IgfSk7XG4gIH07XG5cbiAgQXBwQ29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcblxuXG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JSZXBvcnRlciAmJiBlcnJvcikge1xuICAgICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5lcnJvclJlcG9ydGVyLCB7IGVycm9yOiBlcnJvciB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gQXBwQ29udGFpbmVyO1xufShSZWFjdF9fZGVmYXVsdC5Db21wb25lbnQpO1xuXG5BcHBDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4ocHJvcHMpIHtcbiAgICBpZiAoUmVhY3RfX2RlZmF1bHQuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pICE9PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHByb3AgXCJjaGlsZHJlblwiIHN1cHBsaWVkIHRvIEFwcENvbnRhaW5lci4gJyArICdFeHBlY3RlZCBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IHdpdGggeW91ciBhcHDigJlzIHJvb3QgY29tcG9uZW50LCBlLmcuIDxBcHAgLz4uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSxcblxuICBlcnJvclJlcG9ydGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKVxuXG4gIC8vICB0cnlpbmcgZmlyc3QgcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQucG9seWZpbGwsIHRoZW4gdHJ5aW5nIHJlYWN0LWxpZmVjeWNsZXMtY29tcGF0LCB3aGljaCBjb3VsZCBiZSAuZGVmYXVsdFxufTt2YXIgcmVhbFBvbHlmaWxsID0gZGVmYXVsdFBvbHlmaWxsLnBvbHlmaWxsIHx8IGRlZmF1bHRQb2x5ZmlsbF9fZGVmYXVsdDtcbnJlYWxQb2x5ZmlsbChBcHBDb250YWluZXIpO1xuXG52YXIgb3BlbmVkTW9kdWxlcyA9IHt9O1xuXG52YXIgaG90TW9kdWxlcyA9IHt9O1xuXG52YXIgY3JlYXRlSG90TW9kdWxlID0gZnVuY3Rpb24gY3JlYXRlSG90TW9kdWxlKCkge1xuICByZXR1cm4geyBpbnN0YW5jZXM6IFtdLCB1cGRhdGVUaW1lb3V0OiAwIH07XG59O1xuXG52YXIgaG90TW9kdWxlID0gZnVuY3Rpb24gaG90TW9kdWxlKG1vZHVsZUlkKSB7XG4gIGlmICghaG90TW9kdWxlc1ttb2R1bGVJZF0pIHtcbiAgICBob3RNb2R1bGVzW21vZHVsZUlkXSA9IGNyZWF0ZUhvdE1vZHVsZSgpO1xuICB9XG4gIHJldHVybiBob3RNb2R1bGVzW21vZHVsZUlkXTtcbn07XG5cbnZhciBpc09wZW5lZCA9IGZ1bmN0aW9uIGlzT3BlbmVkKHNvdXJjZU1vZHVsZSkge1xuICByZXR1cm4gc291cmNlTW9kdWxlICYmICEhb3BlbmVkTW9kdWxlc1tzb3VyY2VNb2R1bGUuaWRdO1xufTtcblxudmFyIGVudGVyID0gZnVuY3Rpb24gZW50ZXIoc291cmNlTW9kdWxlKSB7XG4gIGlmIChzb3VyY2VNb2R1bGUgJiYgc291cmNlTW9kdWxlLmlkKSB7XG4gICAgb3BlbmVkTW9kdWxlc1tzb3VyY2VNb2R1bGUuaWRdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBsb2dnZXIud2FybignUmVhY3QtaG90LWxvYWRlcjogbm8gYG1vZHVsZWAgdmFyaWFibGUgZm91bmQuIERvIHlvdSBzaGFkb3cgc3lzdGVtIHZhcmlhYmxlPycpO1xuICB9XG59O1xuXG52YXIgbGVhdmUgPSBmdW5jdGlvbiBsZWF2ZShzb3VyY2VNb2R1bGUpIHtcbiAgaWYgKHNvdXJjZU1vZHVsZSAmJiBzb3VyY2VNb2R1bGUuaWQpIHtcbiAgICBkZWxldGUgb3BlbmVkTW9kdWxlc1tzb3VyY2VNb2R1bGUuaWRdO1xuICB9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UsIG5vLXVuZGVmICovXG52YXIgcmVxdWlyZUluZGlyZWN0ID0gdHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX3JlcXVpcmVfXyA6IHJlcXVpcmU7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbnZhciBjcmVhdGVIb2MgPSBmdW5jdGlvbiBjcmVhdGVIb2MoU291cmNlQ29tcG9uZW50LCBUYXJnZXRDb21wb25lbnQpIHtcbiAgaG9pc3ROb25SZWFjdFN0YXRpYyhUYXJnZXRDb21wb25lbnQsIFNvdXJjZUNvbXBvbmVudCk7XG4gIFRhcmdldENvbXBvbmVudC5kaXNwbGF5TmFtZSA9ICdIb3RFeHBvcnRlZCcgKyBnZXRDb21wb25lbnREaXNwbGF5TmFtZShTb3VyY2VDb21wb25lbnQpO1xuICByZXR1cm4gVGFyZ2V0Q29tcG9uZW50O1xufTtcblxudmFyIG1ha2VIb3RFeHBvcnQgPSBmdW5jdGlvbiBtYWtlSG90RXhwb3J0KHNvdXJjZU1vZHVsZSkge1xuICB2YXIgdXBkYXRlSW5zdGFuY2VzID0gZnVuY3Rpb24gdXBkYXRlSW5zdGFuY2VzKCkge1xuICAgIHZhciBtb2R1bGUgPSBob3RNb2R1bGUoc291cmNlTW9kdWxlLmlkKTtcbiAgICBjbGVhclRpbWVvdXQobW9kdWxlLnVwZGF0ZVRpbWVvdXQpO1xuICAgIG1vZHVsZS51cGRhdGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1aXJlSW5kaXJlY3Qoc291cmNlTW9kdWxlLmlkKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8ganVzdCBzd2FsbG93XG4gICAgICB9XG4gICAgICBtb2R1bGUuaW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24gKGluc3QpIHtcbiAgICAgICAgcmV0dXJuIGluc3QuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGlmIChzb3VyY2VNb2R1bGUuaG90KSB7XG4gICAgLy8gTWFyayBhcyBzZWxmLWFjY2VwdGVkIGZvciBXZWJwYWNrXG4gICAgLy8gVXBkYXRlIGluc3RhbmNlcyBmb3IgUGFyY2VsXG4gICAgc291cmNlTW9kdWxlLmhvdC5hY2NlcHQodXBkYXRlSW5zdGFuY2VzKTtcblxuICAgIC8vIFdlYnBhY2sgd2F5XG4gICAgaWYgKHNvdXJjZU1vZHVsZS5ob3QuYWRkU3RhdHVzSGFuZGxlcikge1xuICAgICAgaWYgKHNvdXJjZU1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdpZGxlJykge1xuICAgICAgICBzb3VyY2VNb2R1bGUuaG90LmFkZFN0YXR1c0hhbmRsZXIoZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdhcHBseScpIHtcbiAgICAgICAgICAgIHVwZGF0ZUluc3RhbmNlcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgaG90ID0gZnVuY3Rpb24gaG90KHNvdXJjZU1vZHVsZSkge1xuICBpZiAoIXNvdXJjZU1vZHVsZSB8fCAhc291cmNlTW9kdWxlLmlkKSB7XG4gICAgLy8gdGhpcyBpcyBmYXRhbFxuICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QtaG90LWxvYWRlcjogYGhvdGAgY291bGQgbm90IGZpbmQgdGhlIGBpZGAgcHJvcGVydHkgaW4gdGhlIGBtb2R1bGVgIHlvdSBoYXZlIHByb3ZpZGVkJyk7XG4gIH1cbiAgdmFyIG1vZHVsZUlkID0gc291cmNlTW9kdWxlLmlkO1xuICB2YXIgbW9kdWxlID0gaG90TW9kdWxlKG1vZHVsZUlkKTtcbiAgbWFrZUhvdEV4cG9ydChzb3VyY2VNb2R1bGUpO1xuXG4gIC8vIFRPRE86IEVuc3VyZSB0aGF0IGFsbCBleHBvcnRzIGZyb20gdGhpcyBmaWxlIGFyZSByZWFjdCBjb21wb25lbnRzLlxuXG4gIHJldHVybiBmdW5jdGlvbiAoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIC8vIHJlZ2lzdGVyIHByb3h5IGZvciB3cmFwcGVkIGNvbXBvbmVudFxuICAgIHJlYWN0SG90TG9hZGVyLnJlZ2lzdGVyKFdyYXBwZWRDb21wb25lbnQsIGdldENvbXBvbmVudERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpLCAnUkhMJyArIG1vZHVsZUlkKTtcblxuICAgIHJldHVybiBjcmVhdGVIb2MoV3JhcHBlZENvbXBvbmVudCwgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIGluaGVyaXRzKEV4cG9ydGVkQ29tcG9uZW50LCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gRXhwb3J0ZWRDb21wb25lbnQoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEV4cG9ydGVkQ29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgRXhwb3J0ZWRDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIG1vZHVsZS5pbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgIH07XG5cbiAgICAgIEV4cG9ydGVkQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBpZiAoaXNPcGVuZWQoc291cmNlTW9kdWxlKSkge1xuICAgICAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICAgICAgbG9nZ2VyLmVycm9yKCdSZWFjdC1ob3QtbG9hZGVyOiBEZXRlY3RlZCBBcHBDb250YWluZXIgdW5tb3VudCBvbiBtb2R1bGUgXFwnJyArIG1vZHVsZUlkICsgJ1xcJyB1cGRhdGUuXFxuJyArICgnRGlkIHlvdSB1c2UgXCJob3QoJyArIGNvbXBvbmVudE5hbWUgKyAnKVwiIGFuZCBcIlJlYWN0RE9NLnJlbmRlcigpXCIgaW4gdGhlIHNhbWUgZmlsZT9cXG4nKSArICgnXCJob3QoJyArIGNvbXBvbmVudE5hbWUgKyAnKVwiIHNoYWxsIG9ubHkgYmUgdXNlZCBhcyBleHBvcnQuXFxuJykgKyAnUGxlYXNlIHJlZmVyIHRvIFwiR2V0dGluZyBTdGFydGVkXCIgKGh0dHBzOi8vZ2l0aHViLmNvbS9nYWVhcm9uL3JlYWN0LWhvdC1sb2FkZXIvKS4nKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaW5zdGFuY2VzID0gbW9kdWxlLmluc3RhbmNlcy5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICByZXR1cm4gYSAhPT0gX3RoaXMyO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIEV4cG9ydGVkQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEFwcENvbnRhaW5lcixcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgdGhpcy5wcm9wcylcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBFeHBvcnRlZENvbXBvbmVudDtcbiAgICB9KFJlYWN0LkNvbXBvbmVudCkpO1xuICB9O1xufTtcblxudmFyIGdldFByb3h5T3JUeXBlID0gZnVuY3Rpb24gZ2V0UHJveHlPclR5cGUodHlwZSkge1xuICB2YXIgcHJveHkgPSBnZXRQcm94eUJ5VHlwZSh0eXBlKTtcbiAgcmV0dXJuIHByb3h5ID8gcHJveHkuZ2V0KCkgOiB0eXBlO1xufTtcblxudmFyIGFyZUNvbXBvbmVudHNFcXVhbCA9IGZ1bmN0aW9uIGFyZUNvbXBvbmVudHNFcXVhbChhLCBiKSB7XG4gIHJldHVybiBnZXRQcm94eU9yVHlwZShhKSA9PT0gZ2V0UHJveHlPclR5cGUoYik7XG59O1xuXG52YXIgY29tcGFyZU9yU3dhcCA9IGZ1bmN0aW9uIGNvbXBhcmVPclN3YXAob2xkVHlwZSwgbmV3VHlwZSkge1xuICByZXR1cm4gaG90Q29tcG9uZW50Q29tcGFyZShvbGRUeXBlLCBuZXdUeXBlKTtcbn07XG5cbnZhciBjb2xkID0gZnVuY3Rpb24gY29sZCh0eXBlKSB7XG4gIGJsYWNrbGlzdEJ5VHlwZSh0eXBlKTtcbiAgcmV0dXJuIHR5cGU7XG59O1xuXG52YXIgc2V0Q29uZmlnID0gZnVuY3Rpb24gc2V0Q29uZmlnKGNvbmZpZykge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjb25maWd1cmF0aW9uLCBjb25maWcpO1xufTtcblxucmVhY3RIb3RMb2FkZXIucGF0Y2goUmVhY3RfX2RlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSByZWFjdEhvdExvYWRlcjtcbmV4cG9ydHMuQXBwQ29udGFpbmVyID0gQXBwQ29udGFpbmVyO1xuZXhwb3J0cy5ob3QgPSBob3Q7XG5leHBvcnRzLmVudGVyTW9kdWxlID0gZW50ZXI7XG5leHBvcnRzLmxlYXZlTW9kdWxlID0gbGVhdmU7XG5leHBvcnRzLmFyZUNvbXBvbmVudHNFcXVhbCA9IGFyZUNvbXBvbmVudHNFcXVhbDtcbmV4cG9ydHMuY29tcGFyZU9yU3dhcCA9IGNvbXBhcmVPclN3YXA7XG5leHBvcnRzLmNvbGQgPSBjb2xkO1xuZXhwb3J0cy5zZXRDb25maWcgPSBzZXRDb25maWc7XG4iLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQodCl7cmV0dXJuIHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZcImRlZmF1bHRcImluIHQ/dC5kZWZhdWx0OnR9T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIFJlYWN0PV9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpLGNsYXNzQ2FsbENoZWNrPWZ1bmN0aW9uKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0saW5oZXJpdHM9ZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgZSk7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCxlKTp0Ll9fcHJvdG9fXz1lKX0scG9zc2libGVDb25zdHJ1Y3RvclJldHVybj1mdW5jdGlvbih0LGUpe2lmKCF0KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hZXx8XCJvYmplY3RcIiE9dHlwZW9mIGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/dDplfSxBcHBDb250YWluZXI9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpe3JldHVybiBjbGFzc0NhbGxDaGVjayh0aGlzLGUpLHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcyx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9cmV0dXJuIGluaGVyaXRzKGUsdCksZS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7cmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbil9LGV9KFJlYWN0LkNvbXBvbmVudCksaG90X3Byb2Q9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIHR9fSxhcmVDb21wb25lbnRzRXF1YWw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdD09PWV9LHNldENvbmZpZz1mdW5jdGlvbigpe30sY29sZD1mdW5jdGlvbih0KXtyZXR1cm4gdH07ZXhwb3J0cy5BcHBDb250YWluZXI9QXBwQ29udGFpbmVyLGV4cG9ydHMuaG90PWhvdF9wcm9kLGV4cG9ydHMuYXJlQ29tcG9uZW50c0VxdWFsPWFyZUNvbXBvbmVudHNFcXVhbCxleHBvcnRzLnNldENvbmZpZz1zZXRDb25maWcsZXhwb3J0cy5jb2xkPWNvbGQ7XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGV2YWxBbGxvd2VkID0gZmFsc2U7XG50cnkge1xuICBldmFsKCdldmFsQWxsb3dlZCA9IHRydWUnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgLy8gZXZhbCBub3QgYWxsb3dlZCBkdWUgdG8gQ1NQXG59XG5cbi8vIFJITCBuZWVkcyBzZXRQcm90b3R5cGVPZiB0byBvcGVyYXRlIENvbXBvbmVudCBpbmhlcml0YW5jZSwgYW5kIGV2YWwgdG8gcGF0Y2ggbWV0aG9kc1xudmFyIHBsYXRmb3JtU3VwcG9ydGVkID0gISFPYmplY3Quc2V0UHJvdG90eXBlT2YgJiYgZXZhbEFsbG93ZWQ7XG5cbmlmICghbW9kdWxlLmhvdCB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIHx8ICFwbGF0Zm9ybVN1cHBvcnRlZCkge1xuICBpZiAobW9kdWxlLmhvdCkge1xuICAgIC8vIHdlIGFyZSBub3QgaW4gcHJvZCBtb2RlLCBidXQgUkhMIGNvdWxkIG5vdCBiZSBhY3RpdmF0ZWRcbiAgICBjb25zb2xlLndhcm4oJ1JlYWN0LUhvdC1Mb2FkZWQgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gIH1cbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcmVhY3QtaG90LWxvYWRlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcmVhY3QtaG90LWxvYWRlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgLy8gVXNlIHRoZSBzZXRTdGF0ZSgpIHVwZGF0ZXIgdG8gZW5zdXJlIHN0YXRlIGlzbid0IHN0YWxlIGluIGNlcnRhaW4gZWRnZSBjYXNlcy5cbiAgZnVuY3Rpb24gdXBkYXRlcihwcmV2U3RhdGUpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQgPyBzdGF0ZSA6IG51bGw7XG4gIH1cbiAgLy8gQmluZGluZyBcInRoaXNcIiBpcyBpbXBvcnRhbnQgZm9yIHNoYWxsb3cgcmVuZGVyZXIgc3VwcG9ydC5cbiAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVyLmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHRyeSB7XG4gICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90ID0gdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZVxuICAgICk7XG4gIH0gZmluYWxseSB7XG4gICAgdGhpcy5wcm9wcyA9IHByZXZQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gcHJldlN0YXRlO1xuICB9XG59XG5cbi8vIFJlYWN0IG1heSB3YXJuIGFib3V0IGNXTS9jV1JQL2NXVSBtZXRob2RzIGJlaW5nIGRlcHJlY2F0ZWQuXG4vLyBBZGQgYSBmbGFnIHRvIHN1cHByZXNzIHRoZXNlIHdhcm5pbmdzIGZvciB0aGlzIHNwZWNpYWwgY2FzZS5cbmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsVXBkYXRlLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBwb2x5ZmlsbChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgaWYgKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBwb2x5ZmlsbCBjbGFzcyBjb21wb25lbnRzJyk7XG4gIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICAvLyBJZiBuZXcgY29tcG9uZW50IEFQSXMgYXJlIGRlZmluZWQsIFwidW5zYWZlXCIgbGlmZWN5Y2xlcyB3b24ndCBiZSBjYWxsZWQuXG4gIC8vIEVycm9yIGlmIGFueSBvZiB0aGVzZSBsaWZlY3ljbGVzIGFyZSBwcmVzZW50LFxuICAvLyBCZWNhdXNlIHRoZXkgd291bGQgd29yayBkaWZmZXJlbnRseSBiZXR3ZWVuIG9sZGVyIGFuZCBuZXdlciAoMTYuMyspIHZlcnNpb25zIG9mIFJlYWN0LlxuICB2YXIgZm91bmRXaWxsTW91bnROYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsVXBkYXRlTmFtZSA9IG51bGw7XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdjb21wb25lbnRXaWxsTW91bnQnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9XG4gIGlmIChcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbFxuICApIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZTtcbiAgICB2YXIgbmV3QXBpTmFtZSA9XG4gICAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoKSdcbiAgICAgICAgOiAnZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSc7XG5cbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICdVbnNhZmUgbGVnYWN5IGxpZmVjeWNsZXMgd2lsbCBub3QgYmUgY2FsbGVkIGZvciBjb21wb25lbnRzIHVzaW5nIG5ldyBjb21wb25lbnQgQVBJcy5cXG5cXG4nICtcbiAgICAgICAgY29tcG9uZW50TmFtZSArXG4gICAgICAgICcgdXNlcyAnICtcbiAgICAgICAgbmV3QXBpTmFtZSArXG4gICAgICAgICcgYnV0IGFsc28gY29udGFpbnMgdGhlIGZvbGxvd2luZyBsZWdhY3kgbGlmZWN5Y2xlczonICtcbiAgICAgICAgKGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxNb3VudE5hbWUgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbFxuICAgICAgICAgID8gJ1xcbiAgJyArIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWVcbiAgICAgICAgICA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbFVwZGF0ZU5hbWUgOiAnJykgK1xuICAgICAgICAnXFxuXFxuVGhlIGFib3ZlIGxpZmVjeWNsZXMgc2hvdWxkIGJlIHJlbW92ZWQuIExlYXJuIG1vcmUgYWJvdXQgdGhpcyB3YXJuaW5nIGhlcmU6XFxuJyArXG4gICAgICAgICdodHRwczovL2ZiLm1lL3JlYWN0LWFzeW5jLWNvbXBvbmVudC1saWZlY3ljbGUtaG9va3MnXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV00gYW5kIGNXUlAgdG8gaW52b2tlIHRoZSBuZXcgc3RhdGljIGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhlc2UgbGlmZWN5Y2xlcyBpZiBnRFNGUCBleGlzdHMuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBjb21wb25lbnRXaWxsTW91bnQ7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IGdldFNuYXBzaG90QmVmb3JlVXBkYXRlLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV1UgdG8gaW52b2tlIHRoZSBuZXcgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGF0IGxpZmVjeWNsZSBpZiBnU0JVIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBwb2x5ZmlsbCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpIGZvciBjb21wb25lbnRzIHRoYXQgZG8gbm90IGRlZmluZSBjb21wb25lbnREaWRVcGRhdGUoKSBvbiB0aGUgcHJvdG90eXBlJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGNvbXBvbmVudFdpbGxVcGRhdGU7XG5cbiAgICB2YXIgY29tcG9uZW50RGlkVXBkYXRlID0gcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZTtcblxuICAgIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbChcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZSxcbiAgICAgIG1heWJlU25hcHNob3RcbiAgICApIHtcbiAgICAgIC8vIDE2LjMrIHdpbGwgbm90IGV4ZWN1dGUgb3VyIHdpbGwtdXBkYXRlIG1ldGhvZDtcbiAgICAgIC8vIEl0IHdpbGwgcGFzcyBhIHNuYXBzaG90IHZhbHVlIHRvIGRpZC11cGRhdGUgdGhvdWdoLlxuICAgICAgLy8gT2xkZXIgdmVyc2lvbnMgd2lsbCByZXF1aXJlIG91ciBwb2x5ZmlsbGVkIHdpbGwtdXBkYXRlIHZhbHVlLlxuICAgICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYm90aCBjYXNlcywgYnV0IGNhbid0IGp1c3QgY2hlY2sgZm9yIHRoZSBwcmVzZW5jZSBvZiBcIm1heWJlU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZm9yIDw9IDE1LnggdmVyc2lvbnMgdGhpcyBtaWdodCBiZSBhIFwicHJldkNvbnRleHRcIiBvYmplY3QuXG4gICAgICAvLyBXZSBhbHNvIGNhbid0IGp1c3QgY2hlY2sgXCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBnZXQtc25hcHNob3QgbWlnaHQgcmV0dXJuIGEgZmFsc3kgdmFsdWUuXG4gICAgICAvLyBTbyBjaGVjayBmb3IgdGhlIGV4cGxpY2l0IF9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyBmbGFnIHRvIGRldGVybWluZSBiZWhhdmlvci5cbiAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnXG4gICAgICAgID8gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFxuICAgICAgICA6IG1heWJlU25hcHNob3Q7XG5cbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZS5jYWxsKHRoaXMsIHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB7IHBvbHlmaWxsIH07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjUuMlxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjUuMic7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9QTEFDRUhPTERFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucGxhY2Vob2xkZXInKSA6IDB4ZWFkMTtcblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuXG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gRXhwb3J0cyBSZWFjdERPTS5jcmVhdGVSb290XG5cblxuLy8gRXhwZXJpbWVudGFsIGVycm9yLWJvdW5kYXJ5IEFQSSB0aGF0IGNhbiByZWNvdmVyIGZyb20gZXJyb3JzIHdpdGhpbiBhIHNpbmdsZVxuLy8gcmVuZGVyIHBoYXNlXG5cbi8vIFN1c3BlbnNlXG52YXIgZW5hYmxlU3VzcGVuc2UgPSBmYWxzZTtcbi8vIEhlbHBzIGlkZW50aWZ5IHNpZGUgZWZmZWN0cyBpbiBiZWdpbi1waGFzZSBsaWZlY3ljbGUgaG9va3MgYW5kIHNldFN0YXRlIHJlZHVjZXJzOlxuXG5cbi8vIEluIHNvbWUgY2FzZXMsIFN0cmljdE1vZGUgc2hvdWxkIGFsc28gZG91YmxlLXJlbmRlciBsaWZlY3ljbGVzLlxuLy8gVGhpcyBjYW4gYmUgY29uZnVzaW5nIGZvciB0ZXN0cyB0aG91Z2gsXG4vLyBBbmQgaXQgY2FuIGJlIGJhZCBmb3IgcGVyZm9ybWFuY2UgaW4gcHJvZHVjdGlvbi5cbi8vIFRoaXMgZmVhdHVyZSBmbGFnIGNhbiBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIGJlaGF2aW9yOlxuXG5cbi8vIFRvIHByZXNlcnZlIHRoZSBcIlBhdXNlIG9uIGNhdWdodCBleGNlcHRpb25zXCIgYmVoYXZpb3Igb2YgdGhlIGRlYnVnZ2VyLCB3ZVxuLy8gcmVwbGF5IHRoZSBiZWdpbiBwaGFzZSBvZiBhIGZhaWxlZCBjb21wb25lbnQgaW5zaWRlIGludm9rZUd1YXJkZWRDYWxsYmFjay5cblxuXG4vLyBXYXJuIGFib3V0IGRlcHJlY2F0ZWQsIGFzeW5jLXVuc2FmZSBsaWZlY3ljbGVzOyByZWxhdGVzIHRvIFJGQyAjNjpcblxuXG4vLyBXYXJuIGFib3V0IGxlZ2FjeSBjb250ZXh0IEFQSVxuXG5cbi8vIEdhdGhlciBhZHZhbmNlZCB0aW1pbmcgbWV0cmljcyBmb3IgUHJvZmlsZXIgc3VidHJlZXMuXG5cblxuLy8gVHJhY2Ugd2hpY2ggaW50ZXJhY3Rpb25zIHRyaWdnZXIgZWFjaCBjb21taXQuXG5cblxuLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG5cblxuLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG5cblxuLy8gUmVhY3QgRmlyZTogcHJldmVudCB0aGUgdmFsdWUgYW5kIGNoZWNrZWQgYXR0cmlidXRlcyBmcm9tIHN5bmNpbmdcbi8vIHdpdGggdGhlaXIgcmVsYXRlZCBET00gcHJvcGVydGllc1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yID0gdm9pZCAwO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyBSZWx5aW5nIG9uIHRoZSBgaW52YXJpYW50KClgIGltcGxlbWVudGF0aW9uIGxldHMgdXNcbi8vIHByZXNlcnZlIHRoZSBmb3JtYXQgYW5kIHBhcmFtcyBpbiB0aGUgd3d3IGJ1aWxkcy5cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZ1dpdGhvdXRTdGFjayhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gOCkge1xuICAgICAgLy8gQ2hlY2sgYmVmb3JlIHRoZSBjb25kaXRpb24gdG8gY2F0Y2ggdmlvbGF0aW9ucyBlYXJseS5cbiAgICAgIHRocm93IG5ldyBFcnJvcignd2FybmluZ1dpdGhvdXRTdGFjaygpIGN1cnJlbnRseSBzdXBwb3J0cyBhdCBtb3N0IDggYXJndW1lbnRzLicpO1xuICAgIH1cbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBfYXJncyRtYXAgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgICAgfSksXG4gICAgICAgICAgYSA9IF9hcmdzJG1hcFswXSxcbiAgICAgICAgICBiID0gX2FyZ3MkbWFwWzFdLFxuICAgICAgICAgIGMgPSBfYXJncyRtYXBbMl0sXG4gICAgICAgICAgZCA9IF9hcmdzJG1hcFszXSxcbiAgICAgICAgICBlID0gX2FyZ3MkbWFwWzRdLFxuICAgICAgICAgIGYgPSBfYXJncyRtYXBbNV0sXG4gICAgICAgICAgZyA9IF9hcmdzJG1hcFs2XSxcbiAgICAgICAgICBoID0gX2FyZ3MkbWFwWzddO1xuXG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0O1xuXG4gICAgICAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgYmVjYXVzZSBpdCBicmVha3MgSUU5OlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgYSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGEsIGIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBhLCBiLCBjKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgYSwgYiwgYywgZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGEsIGIsIGMsIGQsIGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgYSwgYiwgYywgZCwgZSwgZiwgZyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignd2FybmluZ1dpdGhvdXRTdGFjaygpIGN1cnJlbnRseSBzdXBwb3J0cyBhdCBtb3N0IDggYXJndW1lbnRzLicpO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgX21lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoX21lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbnZhciB3YXJuaW5nV2l0aG91dFN0YWNrJDEgPSB3YXJuaW5nV2l0aG91dFN0YWNrO1xuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIGNhbGxlck5hbWU7XG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsIFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICAhKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJykgOiB2b2lkIDA7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuXG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG5cbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7XG4vLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbCxcbiAgY3VycmVudERpc3BhdGNoZXI6IG51bGxcbn07XG5cbnZhciBCRUZPUkVfU0xBU0hfUkUgPSAvXiguKilbXFxcXFxcL10vO1xuXG52YXIgZGVzY3JpYmVDb21wb25lbnRGcmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuICBpZiAoc291cmNlKSB7XG4gICAgdmFyIHBhdGggPSBzb3VyY2UuZmlsZU5hbWU7XG4gICAgdmFyIGZpbGVOYW1lID0gcGF0aC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuICAgIHtcbiAgICAgIC8vIEluIERFViwgaW5jbHVkZSBjb2RlIGZvciBhIGNvbW1vbiBzcGVjaWFsIGNhc2U6XG4gICAgICAvLyBwcmVmZXIgXCJmb2xkZXIvaW5kZXguanNcIiBpbnN0ZWFkIG9mIGp1c3QgXCJpbmRleC5qc1wiLlxuICAgICAgaWYgKC9eaW5kZXhcXC4vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2goQkVGT1JFX1NMQVNIX1JFKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuICAgICAgICAgIGlmIChwYXRoQmVmb3JlU2xhc2gpIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJOYW1lID0gcGF0aEJlZm9yZVNsYXNoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZvbGRlck5hbWUgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlSW5mbyA9ICcgKGF0ICcgKyBmaWxlTmFtZSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknO1xuICB9IGVsc2UgaWYgKG93bmVyTmFtZSkge1xuICAgIHNvdXJjZUluZm8gPSAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKSc7XG4gIH1cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufTtcblxudmFyIFJlc29sdmVkID0gMTtcblxuXG5cblxuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRUaGVuYWJsZSh0aGVuYWJsZSkge1xuICByZXR1cm4gdGhlbmFibGUuX3JlYWN0U3RhdHVzID09PSBSZXNvbHZlZCA/IHRoZW5hYmxlLl9yZWFjdFJlc3VsdCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ0FzeW5jTW9kZSc7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuICAgIGNhc2UgUkVBQ1RfUExBQ0VIT0xERVJfVFlQRTpcbiAgICAgIHJldHVybiAnUGxhY2Vob2xkZXInO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuQ29uc3VtZXInO1xuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICB2YXIgcmVuZGVyRm4gPSB0eXBlLnJlbmRlcjtcbiAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IHJlbmRlckZuLmRpc3BsYXlOYW1lIHx8IHJlbmRlckZuLm5hbWUgfHwgJyc7XG4gICAgICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gJ0ZvcndhcmRSZWYoJyArIGZ1bmN0aW9uTmFtZSArICcpJyA6ICdGb3J3YXJkUmVmJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdHlwZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGhlbmFibGUgPSB0eXBlO1xuICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZFRoZW5hYmxlKHRoZW5hYmxlKTtcbiAgICAgIGlmIChyZXNvbHZlZFRoZW5hYmxlKSB7XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcblxudmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG5cbiAgICAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQudHlwZSk7XG4gICAgICB2YXIgb3duZXIgPSBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fb3duZXI7XG4gICAgICBzdGFjayArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9zb3VyY2UsIG93bmVyICYmIGdldENvbXBvbmVudE5hbWUob3duZXIudHlwZSkpO1xuICAgIH1cblxuICAgIC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgX2Fzc2lnbihSZWFjdFNoYXJlZEludGVybmFscywge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lOiBSZWFjdERlYnVnQ3VycmVudEZyYW1lLFxuICAgIC8vIFNoaW0gZm9yIFJlYWN0IERPTSAxNi4wLjAgd2hpY2ggc3RpbGwgZGVzdHJ1Y3R1cmVkIChidXQgbm90IHVzZWQpIHRoaXMuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIFJlYWN0IDE3LjAuXG4gICAgUmVhY3RDb21wb25lbnRUcmVlSG9vazoge31cbiAgfSk7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gd2FybmluZ1dpdGhvdXRTdGFjayQxO1xuXG57XG4gIHdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvd2FybmluZy1hbmQtaW52YXJpYW50LWFyZ3NcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxLmFwcGx5KHVuZGVmaW5lZCwgW2ZhbHNlLCBmb3JtYXQgKyAnJXMnXS5jb25jYXQoYXJncywgW3N0YWNrXSkpO1xuICB9O1xufVxuXG52YXIgd2FybmluZyQxID0gd2FybmluZztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdm9pZCAwO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcblxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcblxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTtcblxuICAgIC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pO1xuICAgIC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTtcbiAgICAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIHByb3BzID0ge307XG5cbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7XG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgUmVhY3RFbGVtZW50cyBvZiBhIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWZhY3RvcnlcbiAqL1xuXG5cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcblxuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkICVzLicsIGVsZW1lbnQpIDogdm9pZCAwO1xuXG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7XG4gIC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjtcbiAgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7XG5cbiAgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHZvaWQgMDtcbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuXG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcblxuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cblxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5mdW5jdGlvbiBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCkge1xuICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSB0cmF2ZXJzZUNvbnRleHRQb29sLnBvcCgpO1xuICAgIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICAgIHJldHVybiB0cmF2ZXJzZUNvbnRleHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogbWFwUmVzdWx0LFxuICAgICAga2V5UHJlZml4OiBrZXlQcmVmaXgsXG4gICAgICBmdW5jOiBtYXBGdW5jdGlvbixcbiAgICAgIGNvbnRleHQ6IG1hcENvbnRleHQsXG4gICAgICBjb3VudDogMFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoIDwgUE9PTF9TSVpFKSB7XG4gICAgdHJhdmVyc2VDb250ZXh0UG9vbC5wdXNoKHRyYXZlcnNlQ29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVNvRmFyIE5hbWUgb2YgdGhlIGtleSBwYXRoIHNvIGZhci5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBlYWNoIGNoaWxkIGZvdW5kLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IFVzZWQgdG8gcGFzcyBpbmZvcm1hdGlvbiB0aHJvdWdob3V0IHRoZSB0cmF2ZXJzYWxcbiAqIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sXG4gICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IHZvaWQgMDtcbiAgdmFyIG5leHROYW1lID0gdm9pZCAwO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgIWRpZFdhcm5BYm91dE1hcHMgPyB3YXJuaW5nJDEoZmFsc2UsICdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIHVuc3VwcG9ydGVkIGFuZCB3aWxsIGxpa2VseSB5aWVsZCAnICsgJ3VuZXhwZWN0ZWQgcmVzdWx0cy4gQ29udmVydCBpdCB0byBhIHNlcXVlbmNlL2l0ZXJhYmxlIG9mIGtleWVkICcgKyAnUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcCA9IHZvaWQgMDtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAge1xuICAgICAgICBhZGRlbmR1bSA9ICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyArIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgICAgfVxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcbiAgICAgIGludmFyaWFudChmYWxzZSwgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJywgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nLCBhZGRlbmR1bSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sICcnLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9XG4gIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTaW5nbGVDaGlsZChib29rS2VlcGluZywgY2hpbGQsIG5hbWUpIHtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cbiAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLFxuICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG5cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpIDogdm9pZCAwO1xuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIHJlYWRDb250ZXh0KGNvbnRleHQsIG9ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnREaXNwYXRjaGVyO1xuICAhKGRpc3BhdGNoZXIgIT09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnQ29udGV4dC51bnN0YWJsZV9yZWFkKCk6IENvbnRleHQgY2FuIG9ubHkgYmUgcmVhZCB3aGlsZSBSZWFjdCBpcyByZW5kZXJpbmcsIGUuZy4gaW5zaWRlIHRoZSByZW5kZXIgbWV0aG9kIG9yIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGRpc3BhdGNoZXIucmVhZENvbnRleHQoY29udGV4dCwgb2JzZXJ2ZWRCaXRzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgICEoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IG51bGwgfHwgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsLFxuICAgIHVuc3RhYmxlX3JlYWQ6IG51bGxcbiAgfTtcblxuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIGNvbnRleHQuQ29uc3VtZXIgPSBjb250ZXh0O1xuICBjb250ZXh0LnVuc3RhYmxlX3JlYWQgPSByZWFkQ29udGV4dC5iaW5kKG51bGwsIGNvbnRleHQpO1xuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgdGhlbmFibGUgPSBudWxsO1xuICByZXR1cm4ge1xuICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICh0aGVuYWJsZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyBMYXppbHkgY3JlYXRlIHRoZW5hYmxlIGJ5IHdyYXBwaW5nIGluIGFuIGV4dHJhIHRoZW5hYmxlLlxuICAgICAgICB0aGVuYWJsZSA9IGN0b3IoKTtcbiAgICAgICAgY3RvciA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhlbmFibGUudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0sXG5cbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9yZWFjdFN0YXR1czogLTEsXG4gICAgX3JlYWN0UmVzdWx0OiBudWxsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAhKFxuICAgICAgLy8gRG8gbm90IHdhcm4gZm9yIDAgYXJndW1lbnRzIGJlY2F1c2UgaXQgY291bGQgYmUgZHVlIHRvIHVzYWdlIG9mIHRoZSAnYXJndW1lbnRzJyBvYmplY3RcbiAgICAgIHJlbmRlci5sZW5ndGggPT09IDAgfHwgcmVuZGVyLmxlbmd0aCA9PT0gMikgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJykgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICAhKHJlbmRlci5kZWZhdWx0UHJvcHMgPT0gbnVsbCAmJiByZW5kZXIucHJvcFR5cGVzID09IG51bGwpID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHxcbiAgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BMQUNFSE9MREVSX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGVvZiB0eXBlLnRoZW4gPT09ICdmdW5jdGlvbicgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSk7XG59XG5cbi8qKlxuICogUmVhY3RFbGVtZW50VmFsaWRhdG9yIHByb3ZpZGVzIGEgd3JhcHBlciBhcm91bmQgYSBlbGVtZW50IGZhY3RvcnlcbiAqIHdoaWNoIHZhbGlkYXRlcyB0aGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBlbGVtZW50LiBUaGlzIGlzIGludGVuZGVkIHRvIGJlXG4gKiB1c2VkIG9ubHkgaW4gREVWIGFuZCBjb3VsZCBiZSByZXBsYWNlZCBieSBhIHN0YXRpYyB0eXBlIGNoZWNrZXIgZm9yIGxhbmd1YWdlc1xuICogdGhhdCBzdXBwb3J0IGl0LlxuICovXG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHZvaWQgMDtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50UHJvcHMuX19zb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBzb3VyY2UgPSBlbGVtZW50UHJvcHMuX19zb3VyY2U7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9ICdcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDwnICsgcGFyZW50TmFtZSArICc+Lic7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmZvO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuXG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlO1xuXG4gIC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSAnIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tICcgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgJy4nO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gIHtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdFYWNoIGNoaWxkIGluIGFuIGFycmF5IG9yIGl0ZXJhdG9yIHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xufVxuXG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuICB2YXIgbmFtZSA9IHZvaWQgMCxcbiAgICAgIHByb3BUeXBlcyA9IHZvaWQgMDtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gQ2xhc3Mgb3IgZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgICBuYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWU7XG4gICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSkge1xuICAgIC8vIEZvcndhcmRSZWZcbiAgICB2YXIgZnVuY3Rpb25OYW1lID0gdHlwZS5yZW5kZXIuZGlzcGxheU5hbWUgfHwgdHlwZS5yZW5kZXIubmFtZSB8fCAnJztcbiAgICBuYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/ICdGb3J3YXJkUmVmKCcgKyBmdW5jdGlvbk5hbWUgKyAnKScgOiAnRm9yd2FyZFJlZicpO1xuICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvcFR5cGVzKSB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZnJhZ21lbnQpO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpO1xuXG4gIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHByb3BzKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJzwnICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgJyAvPic7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcbiAgLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuICB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxudmFyIFJlYWN0ID0ge1xuICBDaGlsZHJlbjoge1xuICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgY3JlYXRlUmVmOiBjcmVhdGVSZWYsXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuXG4gIGNyZWF0ZUNvbnRleHQ6IGNyZWF0ZUNvbnRleHQsXG4gIGZvcndhcmRSZWY6IGZvcndhcmRSZWYsXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG4gIFN0cmljdE1vZGU6IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsXG4gIHVuc3RhYmxlX0FzeW5jTW9kZTogUkVBQ1RfQVNZTkNfTU9ERV9UWVBFLFxuICB1bnN0YWJsZV9Qcm9maWxlcjogUkVBQ1RfUFJPRklMRVJfVFlQRSxcblxuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNsb25lRWxlbWVudDogY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNyZWF0ZUZhY3Rvcnk6IGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbixcbiAgaXNWYWxpZEVsZW1lbnQ6IGlzVmFsaWRFbGVtZW50LFxuXG4gIHZlcnNpb246IFJlYWN0VmVyc2lvbixcblxuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDogUmVhY3RTaGFyZWRJbnRlcm5hbHNcbn07XG5cbmlmIChlbmFibGVTdXNwZW5zZSkge1xuICBSZWFjdC5QbGFjZWhvbGRlciA9IFJFQUNUX1BMQUNFSE9MREVSX1RZUEU7XG4gIFJlYWN0LmxhenkgPSBsYXp5O1xufVxuXG5cblxudmFyIFJlYWN0JDIgPSBPYmplY3QuZnJlZXplKHtcblx0ZGVmYXVsdDogUmVhY3Rcbn0pO1xuXG52YXIgUmVhY3QkMyA9ICggUmVhY3QkMiAmJiBSZWFjdCApIHx8IFJlYWN0JDI7XG5cbi8vIFRPRE86IGRlY2lkZSBvbiB0aGUgdG9wLWxldmVsIGV4cG9ydCBmb3JtLlxuLy8gVGhpcyBpcyBoYWNreSBidXQgbWFrZXMgaXQgd29yayB3aXRoIGJvdGggUm9sbHVwIGFuZCBKZXN0LlxudmFyIHJlYWN0ID0gUmVhY3QkMy5kZWZhdWx0IHx8IFJlYWN0JDM7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhY3Q7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpO1xyXG59O1xyXG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXHJcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcbiIsIlxuICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOztcblxuICBleHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7fTtcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdE1hcmtkb3duIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gPGgxIGlkPVwibWFpbm5ldFwiPk1haW5uZXQ8L2gxPlxuO1xuICAgIH1cbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=