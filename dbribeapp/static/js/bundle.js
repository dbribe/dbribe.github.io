var Bundle = (function (exports,BlogPanel,ForumPanel,EstablishmentApp) {
  'use strict';

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

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
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

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
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

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var _class, _temp;

  var PageTitleManager = (_temp = _class = function () {
      function PageTitleManager() {
          classCallCheck(this, PageTitleManager);
      }

      createClass(PageTitleManager, null, [{
          key: "getPrefix",
          value: function getPrefix() {
              return this.prefix ? "(" + this.prefix + ") " : "";
          }
      }, {
          key: "setPrefix",
          value: function setPrefix(prefix) {
              this.prefix = prefix;
              this.updatePageTitle();
          }
      }, {
          key: "setDefaultTitle",
          value: function setDefaultTitle(defaultTitle) {
              this.defaultTitle = defaultTitle;
          }
      }, {
          key: "getTitle",
          value: function getTitle() {
              return this.title || this.defaultTitle;
          }
      }, {
          key: "setTitle",
          value: function setTitle(title) {
              this.title = title;
              this.updatePageTitle();
          }
      }, {
          key: "getFullPageTitle",
          value: function getFullPageTitle() {
              return this.getPrefix() + this.getTitle();
          }
      }, {
          key: "updatePageTitle",
          value: function updatePageTitle() {
              document.title = this.getFullPageTitle();
          }
      }, {
          key: "setIcon",
          value: function setIcon() {
              throw Error("Not implemented yet!");
          }
      }]);
      return PageTitleManager;
  }(), _class.title = null, _class.defaultTitle = "Website", _class.prefix = null, _temp);

  PageTitleManager.setDefaultTitle("");

  var _class2, _temp2;

  var _marked = /*#__PURE__*/regeneratorRuntime.mark(mapIterator),
      _marked2 = /*#__PURE__*/regeneratorRuntime.mark(filterIterator);

  // TODO: should this be renamed to "toUnwrappedArray"?
  function unwrapArray(elements) {
      if (!elements) {
          return [];
      }

      if (!Array.isArray(elements)) {
          // In case this is an iterable, convert to array
          if (elements[Symbol.iterator]) {
              return unwrapArray(Array.from(elements));
          } else {
              return [elements];
          }
      }

      // Check if the passed in array is valid, and try to return it if possible to preserve references
      var allProperElements = true;
      for (var i = 0; i < elements.length; i++) {
          if (Array.isArray(elements[i]) || elements[i] == null) {
              allProperElements = false;
              break;
          }
      }

      if (allProperElements) {
          // Return the exact same array as was passed in
          return elements;
      }

      var result = [];
      for (var _i = 0; _i < elements.length; _i++) {
          if (Array.isArray(elements[_i])) {
              var unwrappedElement = unwrapArray(elements[_i]);
              for (var j = 0; j < unwrappedElement.length; j += 1) {
                  result.push(unwrappedElement[j]);
              }
          } else {
              if (elements[_i] != null) {
                  result.push(elements[_i]);
              }
          }
      }
      return result;
  }

  function defaultComparator(a, b) {
      if (a == null && b == null) {
          return 0;
      }

      if (b == null) {
          return 1;
      }

      if (a == null) {
          return -1;
      }

      // TODO: might want to use valueof here
      if (isNumber(a) && isNumber(b)) {
          return a - b;
      }

      var aStr = a.toString();
      var bStr = b.toString();

      if (aStr === bStr) {
          return 0;
      }
      return aStr < bStr ? -1 : 1;
  }

  // If the first argument is a number, it's returned concatenated with the suffix, otherwise it's returned unchanged
  function suffixNumber(value, suffix) {
      if (typeof value === "number" || value instanceof Number) {
          return value + suffix;
      }
      return value;
  }

  function setObjectPrototype(obj, Class) {
      obj.__proto__ = Class.prototype;
      return obj;
  }

  function isNumber(obj) {
      return typeof obj === "number" || obj instanceof Number;
  }

  function isPlainObject(obj) {
      if (!obj || (typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object" || obj.nodeType) {
          return false;
      }
      if (obj.constructor && obj.constructor != Object) {
          return false;
      }
      return true;
  }

  function deepCopy() {
      var target = arguments[0] || {};
      // Handle case when target is a string or something (possible in deep copy)
      if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && typeof target !== "function") {
          target = {};
      }

      for (var i = 1; i < arguments.length; i += 1) {
          var obj = arguments[i];
          if (obj == null) {
              continue;
          }

          // Extend the base object
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
              for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _step$value = slicedToArray(_step.value, 2),
                      key = _step$value[0],
                      value = _step$value[1];

                  // Recurse if we're merging plain objects or arrays
                  if (value && isPlainObject(value) || Array.isArray(value)) {
                      var clone = void 0;
                      var src = target[key];

                      if (Array.isArray(value)) {
                          clone = src && Array.isArray(src) ? src : [];
                      } else {
                          clone = src && isPlainObject(src) ? src : {};
                      }

                      target[key] = deepCopy(clone, value);
                  } else {
                      // TODO: if value has .clone() method, use that?
                      target[key] = value;
                  }
              }
          } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
          } finally {
              try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                  }
              } finally {
                  if (_didIteratorError) {
                      throw _iteratorError;
                  }
              }
          }
      }

      return target;
  }

  function dashCase(str) {
      var rez = "";
      for (var i = 0; i < str.length; i++) {
          if ("A" <= str[i] && str[i] <= "Z") {
              if (i > 0) {
                  rez += "-";
              }
              rez += str[i].toLowerCase();
          } else {
              rez += str[i];
          }
      }
      return rez == str ? str : rez;
  }

  function uniqueId(obj) {
      if (!uniqueId.objectWeakMap) {
          uniqueId.objectWeakMap = new WeakMap();
          uniqueId.constructorWeakMap = new WeakMap();
          uniqueId.totalObjectCount = 0;
      }
      var objectWeakMap = uniqueId.objectWeakMap;
      var constructorWeakMap = uniqueId.constructorWeakMap;
      if (!objectWeakMap.has(obj)) {
          var objConstructor = obj.constructor || obj.__proto__ || Object;
          // Increment the object count
          var objIndex = (constructorWeakMap.get(objConstructor) || 0) + 1;
          constructorWeakMap.set(objConstructor, objIndex);

          var objUniqueId = objIndex + "-" + ++uniqueId.totalObjectCount;
          objectWeakMap.set(obj, objUniqueId);
      }
      return objectWeakMap.get(obj);
  }

  // TODO: should be done with String.padLeft
  function padNumber(num, minLength) {
      var strNum = String(num);
      while (strNum.length < minLength) {
          strNum = "0" + strNum;
      }
      return strNum;
  }

  // Returns the english ordinal suffix of a number
  function getOrdinalSuffix(num) {
      var suffixes = ["th", "st", "nd", "rd"];
      var lastDigit = num % 10;
      var isTeen = Math.floor(num / 10) % 10 === 1;
      return !isTeen && suffixes[lastDigit] || suffixes[0];
  }

  function suffixWithOrdinal(num) {
      return num + getOrdinalSuffix(num);
  }

  function instantiateNative(BaseClass, NewClass) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
      }

      var obj = new (Function.prototype.bind.apply(BaseClass, [null].concat(args)))();
      obj.__proto__ = NewClass.prototype;
      return obj;
  }

  // This function can be used as a decorator in case we're extending native classes (Map/Set/Date)
  // and we want to fix the way babel breaks this scenario
  // WARNING: it destroys the code in constructor
  // If you want a custom constructor, you need to implement a static create method that generates new objects
  // Check the default constructor this code, or an example where this is done.
  function extendsNative(targetClass) {
      if (targetClass.toString().includes(" extends ")) {
          // Native extended classes are cool, leave them as they are
          return;
      }
      var BaseClass = targetClass.__proto__;
      var allKeys = Object.getOwnPropertySymbols(targetClass).concat(Object.getOwnPropertyNames(targetClass));

      // Fill in the default constructor
      var newClass = targetClass.create || function create() {
          return instantiateNative.apply(undefined, [BaseClass, newClass].concat(Array.prototype.slice.call(arguments)));
      };
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
          for (var _iterator3 = allKeys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var key = _step3.value;

              var property = Object.getOwnPropertyDescriptor(targetClass, key);
              Object.defineProperty(newClass, key, property);
          }
      } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
              }
          } finally {
              if (_didIteratorError3) {
                  throw _iteratorError3;
              }
          }
      }

      newClass.prototype = targetClass.prototype;
      newClass.__proto__ = targetClass.__proto__;

      newClass.prototype.constructor = newClass;

      return newClass;
  }

  var NOOP_FUNCTION = function NOOP_FUNCTION() {
      return undefined;
  };

  // Helpers to wrap iterators, to wrap all values in a function or to filter them
  function mapIterator(iter, func) {
      var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, value;

      return regeneratorRuntime.wrap(function mapIterator$(_context) {
          while (1) {
              switch (_context.prev = _context.next) {
                  case 0:
                      _iteratorNormalCompletion4 = true;
                      _didIteratorError4 = false;
                      _iteratorError4 = undefined;
                      _context.prev = 3;
                      _iterator4 = iter[Symbol.iterator]();

                  case 5:
                      if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                          _context.next = 12;
                          break;
                      }

                      value = _step4.value;
                      _context.next = 9;
                      return func(value);

                  case 9:
                      _iteratorNormalCompletion4 = true;
                      _context.next = 5;
                      break;

                  case 12:
                      _context.next = 18;
                      break;

                  case 14:
                      _context.prev = 14;
                      _context.t0 = _context["catch"](3);
                      _didIteratorError4 = true;
                      _iteratorError4 = _context.t0;

                  case 18:
                      _context.prev = 18;
                      _context.prev = 19;

                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                      }

                  case 21:
                      _context.prev = 21;

                      if (!_didIteratorError4) {
                          _context.next = 24;
                          break;
                      }

                      throw _iteratorError4;

                  case 24:
                      return _context.finish(21);

                  case 25:
                      return _context.finish(18);

                  case 26:
                  case "end":
                      return _context.stop();
              }
          }
      }, _marked, this, [[3, 14, 18, 26], [19,, 21, 25]]);
  }

  function filterIterator(iter, func) {
      var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, value;

      return regeneratorRuntime.wrap(function filterIterator$(_context2) {
          while (1) {
              switch (_context2.prev = _context2.next) {
                  case 0:
                      _iteratorNormalCompletion5 = true;
                      _didIteratorError5 = false;
                      _iteratorError5 = undefined;
                      _context2.prev = 3;
                      _iterator5 = iter[Symbol.iterator]();

                  case 5:
                      if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                          _context2.next = 13;
                          break;
                      }

                      value = _step5.value;

                      if (!func(value)) {
                          _context2.next = 10;
                          break;
                      }

                      _context2.next = 10;
                      return value;

                  case 10:
                      _iteratorNormalCompletion5 = true;
                      _context2.next = 5;
                      break;

                  case 13:
                      _context2.next = 19;
                      break;

                  case 15:
                      _context2.prev = 15;
                      _context2.t0 = _context2["catch"](3);
                      _didIteratorError5 = true;
                      _iteratorError5 = _context2.t0;

                  case 19:
                      _context2.prev = 19;
                      _context2.prev = 20;

                      if (!_iteratorNormalCompletion5 && _iterator5.return) {
                          _iterator5.return();
                      }

                  case 22:
                      _context2.prev = 22;

                      if (!_didIteratorError5) {
                          _context2.next = 25;
                          break;
                      }

                      throw _iteratorError5;

                  case 25:
                      return _context2.finish(22);

                  case 26:
                      return _context2.finish(19);

                  case 27:
                  case "end":
                      return _context2.stop();
              }
          }
      }, _marked2, this, [[3, 15, 19, 27], [20,, 22, 26]]);
  }

  var CallModifier = function () {
      function CallModifier() {
          classCallCheck(this, CallModifier);
      }

      createClass(CallModifier, [{
          key: "wrap",
          value: function wrap(func) {
              throw Error("Implement wrap method");
          }
      }, {
          key: "call",
          value: function call(func) {
              return this.wrap(func)();
          }
      }, {
          key: "toFunction",
          value: function toFunction() {
              var _this = this;

              return function (func) {
                  return _this.wrap(func);
              };
          }
      }]);
      return CallModifier;
  }();

  var UnorderedCallDropper = function (_CallModifier) {
      inherits(UnorderedCallDropper, _CallModifier);

      function UnorderedCallDropper() {
          var _ref2;

          var _temp, _this2, _ret;

          classCallCheck(this, UnorderedCallDropper);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return _ret = (_temp = (_this2 = possibleConstructorReturn(this, (_ref2 = UnorderedCallDropper.__proto__ || Object.getPrototypeOf(UnorderedCallDropper)).call.apply(_ref2, [this].concat(args))), _this2), _this2.index = 1, _this2.lastExecuted = 0, _temp), possibleConstructorReturn(_this2, _ret);
      }

      createClass(UnorderedCallDropper, [{
          key: "wrap",
          value: function wrap(callback) {
              var _this3 = this;

              var currentIndex = this.index++;
              return function () {
                  if (currentIndex > _this3.lastExecuted) {
                      _this3.lastExecuted = currentIndex;
                      return callback.apply(undefined, arguments);
                  }
              };
          }
      }]);
      return UnorderedCallDropper;
  }(CallModifier);

  /*
  CallThrottler acts both as a throttler and a debouncer, allowing you to combine both types of functionality.
  Available options:
      - debounce (ms): delays the function call by x ms, each call extending the delay
      - throttle (ms): keeps calls from happening with at most x ms between them. If debounce is also set, will make sure to
      fire a debounced even if over x ms have passed. If equal to CallTimer.ON_ANIMATION_FRAME, means that we want to use
      requestAnimationFrame instead of setTimeout, to execute before next frame redraw()
      - dropThrottled (boolean, default false): any throttled function call is not delayed, but dropped
   */
  var CallThrottler = (_temp2 = _class2 = function (_CallModifier2) {
      inherits(CallThrottler, _CallModifier2);

      function CallThrottler() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          classCallCheck(this, CallThrottler);

          var _this4 = possibleConstructorReturn(this, (CallThrottler.__proto__ || Object.getPrototypeOf(CallThrottler)).call(this));

          _this4.lastCallTime = 0;
          _this4.pendingCall = null;
          _this4.pendingCallArgs = [];
          _this4.pendingCallExpectedTime = 0;
          _this4.numCalls = 0;
          _this4.totalCallDuration = 0;

          Object.assign(_this4, options);
          return _this4;
      }

      createClass(CallThrottler, [{
          key: "isThrottleOnAnimationFrame",
          value: function isThrottleOnAnimationFrame() {
              return this.throttle === this.constructor.ON_ANIMATION_FRAME;
          }
      }, {
          key: "clearPendingCall",
          value: function clearPendingCall() {
              this.pendingCall = null;
              this.pendingCallArgs = [];
              this.pendingCallExpectedTime = 0;
          }
      }, {
          key: "cancel",
          value: function cancel() {
              this.pendingCall && this.pendingCall.cancel();
              this.clearPendingCall();
          }
      }, {
          key: "flush",
          value: function flush() {
              this.pendingCall && this.pendingCall.flush();
              this.clearPendingCall();
          }

          // API compatibility with cleanup jobs

      }, {
          key: "cleanup",
          value: function cleanup() {
              this.cancel();
          }
      }, {
          key: "computeExecutionDelay",
          value: function computeExecutionDelay(timeNow) {
              var executionDelay = null;
              if (this.throttle != null) {
                  executionDelay = Math.max(this.lastCallTime + this.throttle - timeNow, 0);
              }
              if (this.debounce != null) {
                  executionDelay = Math.min(executionDelay != null ? executionDelay : this.debounce, this.debounce);
              }
              return executionDelay;
          }
      }, {
          key: "replacePendingCall",
          value: function replacePendingCall(wrappedFunc, funcCall, funcCallArgs) {
              this.cancel();
              if (this.isThrottleOnAnimationFrame()) {
                  var _cancelHandler = requestAnimationFrame(funcCall);
                  wrappedFunc.cancel = function () {
                      return cancelAnimationFrame(_cancelHandler);
                  };
                  return;
              }

              var timeNow = Date.now();
              var executionDelay = this.computeExecutionDelay(timeNow);

              if (this.dropThrottled) {
                  return executionDelay == 0 && funcCall();
              }

              var cancelHandler = setTimeout(funcCall, executionDelay);
              wrappedFunc.cancel = function () {
                  return clearTimeout(cancelHandler);
              };
              this.pendingCall = wrappedFunc;
              this.pendingCallArgs = funcCallArgs;
              this.pendingCallExpectedTime = timeNow + executionDelay;
          }
      }, {
          key: "updatePendingCall",
          value: function updatePendingCall(args) {
              this.pendingCallArgs = args;
              if (!this.isThrottleOnAnimationFrame()) {
                  var timeNow = Date.now();
                  this.pendingCallExpectedTime = timeNow + this.computeExecutionDelay(timeNow);
              }
          }
      }, {
          key: "wrap",
          value: function wrap(func) {
              var _this5 = this;

              var funcCall = function funcCall() {
                  var timeNow = Date.now();
                  // The expected time when the function should be executed next might have been changed
                  // Check if that's the case, while allowing a 1ms error for time measurement
                  if (!_this5.isThrottleOnAnimationFrame() && timeNow + 1 < _this5.pendingCallExpectedTime) {
                      _this5.replacePendingCall(wrappedFunc, funcCall, _this5.pendingCallArgs);
                  } else {
                      _this5.lastCallTime = timeNow;
                      _this5.clearPendingCall();
                      func.apply(undefined, toConsumableArray(_this5.pendingCallArgs));
                  }
              };

              var wrappedFunc = function wrappedFunc() {
                  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                      args[_key3] = arguments[_key3];
                  }

                  // Check if it's our function, and update the arguments and next execution time only
                  if (_this5.pendingCall && func === _this5.pendingCall.originalFunc) {
                      // We only need to update the arguments, and maybe mark that we want to executed later than scheduled
                      // It's an optimization to not invoke too many setTimeout/clearTimeout pairs
                      return _this5.updatePendingCall(args);
                  }
                  return _this5.replacePendingCall(wrappedFunc, funcCall, args);
              };

              wrappedFunc.originalFunc = func;
              wrappedFunc.cancel = NOOP_FUNCTION;
              wrappedFunc.flush = function () {
                  if (wrappedFunc === _this5.pendingCall) {
                      _this5.cancel();
                      wrappedFunc();
                  }
              };
              return wrappedFunc;
          }
      }]);
      return CallThrottler;
  }(CallModifier), _class2.ON_ANIMATION_FRAME = Symbol(), _class2.AUTOMATIC = Symbol(), _temp2);

  var DispatcherHandle = function () {
      function DispatcherHandle(dispatcher, callback) {
          classCallCheck(this, DispatcherHandle);

          this.dispatcher = dispatcher;
          this.callback = callback;
      }

      createClass(DispatcherHandle, [{
          key: "remove",
          value: function remove() {
              if (!this.dispatcher) {
                  console.warn("Removing a dispatcher twice");
                  return;
              }
              this.dispatcher.removeListener(this.callback);
              this.dispatcher = undefined;
              this.callback = undefined;
          }
      }, {
          key: "cleanup",
          value: function cleanup() {
              this.remove();
          }
      }]);
      return DispatcherHandle;
  }();

  var Dispatcher = function () {
      function Dispatcher() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          classCallCheck(this, Dispatcher);

          this.options = options;
          this.listeners = [];
      }

      createClass(Dispatcher, [{
          key: "callbackExists",
          value: function callbackExists(callback) {
              for (var i = 0; i < this.listeners.length; i += 1) {
                  if (this.listeners[i] === callback) {
                      return true;
                  }
              }
              return false;
          }
      }, {
          key: "addListener",
          value: function addListener(callback) {
              if (!(typeof callback === "function")) {
                  console.error("The listener needs to be a function: ", callback);
                  return;
              }
              if (this.callbackExists(callback)) {
                  console.error("Can't re-register for the same callback: ", this, " ", callback);
                  return;
              }

              this.listeners.push(callback);
              return new DispatcherHandle(this, callback);
          }
      }, {
          key: "addListenerOnce",
          value: function addListenerOnce(callback) {
              var handler = this.addListener(function () {
                  callback.apply(undefined, arguments);
                  handler.remove();
              });
              return handler;
          }
      }, {
          key: "removeListener",
          value: function removeListener(callback) {
              for (var i = 0; i < this.listeners.length; i += 1) {
                  if (this.listeners[i] === callback) {
                      // Erase and return
                      return this.listeners.splice(i, 1)[0];
                  }
              }
          }
      }, {
          key: "removeAllListeners",
          value: function removeAllListeners() {
              this.listeners = [];
          }
      }, {
          key: "dispatch",
          value: function dispatch(payload) {
              for (var i = 0; i < this.listeners.length;) {
                  var listener = this.listeners[i];
                  // TODO: optimize common cases
                  listener.apply(undefined, arguments);
                  // In case the current listener deleted itself, keep the loop counter the same
                  // If it deleted listeners that were executed before it, that's just wrong and there are no guaranteed about
                  if (listener === this.listeners[i]) {
                      i++;
                  }
              }
          }
      }]);
      return Dispatcher;
  }();

  var DispatchersSymbol = Symbol("Dispatchers");

  var Dispatchable = function () {
      function Dispatchable() {
          classCallCheck(this, Dispatchable);
      }

      createClass(Dispatchable, [{
          key: "getDispatcher",
          value: function getDispatcher(name) {
              return this.dispatchers.get(name);
          }
      }, {
          key: "dispatch",
          value: function dispatch(name, payload) {
              var dispatcher = this.getDispatcher(name);
              if (dispatcher) {
                  // Optimize the average case
                  if (arguments.length <= 2) {
                      dispatcher.dispatch(payload);
                  } else {
                      var args = Array.prototype.slice.call(arguments, 1);
                      dispatcher.dispatch.apply(dispatcher, toConsumableArray(args));
                  }
              }
          }
      }, {
          key: "addListener",
          value: function addListener(name, callback) {
              var _this = this;

              if (Array.isArray(name)) {
                  return new CleanupJobs(name.map(function (x) {
                      return _this.addListener(x, callback);
                  }));
              }
              var dispatcher = this.getDispatcher(name);
              if (!dispatcher) {
                  dispatcher = new Dispatcher();
                  this.dispatchers.set(name, dispatcher);
              }
              return dispatcher.addListener(callback);
          }

          // TODO: remove some duplicated logic with method above

      }, {
          key: "addListenerOnce",
          value: function addListenerOnce(name, callback) {
              var _this2 = this;

              if (Array.isArray(name)) {
                  return new CleanupJobs(name.map(function (x) {
                      return _this2.addListenerOnce(x, callback);
                  }));
              }
              var dispatcher = this.getDispatcher(name);
              if (!dispatcher) {
                  dispatcher = new Dispatcher();
                  this.dispatchers.set(name, dispatcher);
              }
              return dispatcher.addListenerOnce(callback);
          }
      }, {
          key: "removeListener",
          value: function removeListener(name, callback) {
              var dispatcher = this.getDispatcher(name);
              if (dispatcher) {
                  dispatcher.removeListener(callback);
              }
          }
      }, {
          key: "cleanup",
          value: function cleanup() {
              this.runCleanupJobs();
              delete this[DispatchersSymbol];
          }

          // These function don't really belong here, but they don't really hurt here and I don't want a long proto chain
          // Add anything that needs to be called on cleanup here (dispatchers, etc)

      }, {
          key: "addCleanupJob",
          value: function addCleanupJob(cleanupJob) {
              if (!this.hasOwnProperty("_cleanupJobs")) {
                  this._cleanupJobs = new CleanupJobs();
              }
              this._cleanupJobs.add(cleanupJob);
              return cleanupJob;
          }
      }, {
          key: "runCleanupJobs",
          value: function runCleanupJobs() {
              if (this._cleanupJobs) {
                  this._cleanupJobs.cleanup();
              }
          }
      }, {
          key: "detachListener",
          value: function detachListener(dispatcherHandle) {
              if (this._cleanupJobs) {
                  this._cleanupJobs.remove(dispatcherHandle);
              } else {
                  dispatcherHandle.remove();
              }
          }
      }, {
          key: "dispatchers",
          get: function get$$1() {
              return this[DispatchersSymbol] || (this[DispatchersSymbol] = new Map());
          }
      }]);
      return Dispatchable;
  }();

  // Creates a method that calls the method methodName on obj, and adds the result as a cleanup task


  function getAttachCleanupJobMethod(methodName) {
      return function (obj) {
          var args = Array.prototype.slice.call(arguments, 1);
          var handler = obj[methodName].apply(obj, toConsumableArray(args));
          this.addCleanupJob(handler);
          return handler;
      };
  }

  // Not sure if these should be added here, but meh
  Dispatchable.prototype.attachListener = getAttachCleanupJobMethod("addListener");
  Dispatchable.prototype.attachEventListener = getAttachCleanupJobMethod("addEventListener");
  Dispatchable.prototype.attachCreateListener = getAttachCleanupJobMethod("addCreateListener");
  Dispatchable.prototype.attachUpdateListener = getAttachCleanupJobMethod("addUpdateListener");
  Dispatchable.prototype.attachDeleteListener = getAttachCleanupJobMethod("addDeleteListener");

  Dispatcher.Global = new Dispatchable();

  var RunOnce = function () {
      function RunOnce() {
          classCallCheck(this, RunOnce);
      }

      createClass(RunOnce, [{
          key: "run",
          value: function run(callback) {
              var _this3 = this;

              var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

              if (this.timeout) {
                  return;
              }
              this.timeout = setTimeout(function () {
                  callback();
                  _this3.timeout = undefined;
              }, timeout);
          }
      }]);
      return RunOnce;
  }();

  var CleanupJobs = function () {
      function CleanupJobs() {
          var jobs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          classCallCheck(this, CleanupJobs);

          this.jobs = jobs;
      }

      createClass(CleanupJobs, [{
          key: "add",
          value: function add(job) {
              this.jobs.push(job);
          }
      }, {
          key: "cleanup",
          value: function cleanup() {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.jobs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var job = _step.value;

                      if (typeof job.cleanup === "function") {
                          job.cleanup();
                      } else if (typeof job.remove === "function") {
                          job.remove();
                      } else {
                          job();
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              this.jobs = [];
          }
      }, {
          key: "remove",
          value: function remove(job) {
              if (job) {
                  var index = this.jobs.indexOf(job);
                  if (index >= 0) {
                      this.jobs.splice(index, 1);
                  }
                  job.remove();
              } else {
                  this.cleanup();
              }
          }
      }]);
      return CleanupJobs;
  }();

  // Class that can be used to pass around ownership of a resource.
  // It informs the previous owner of the change (once) and dispatches the new element for all listeners
  // TODO: a better name


  var SingleActiveElementDispatcher = function (_Dispatcher) {
      inherits(SingleActiveElementDispatcher, _Dispatcher);

      function SingleActiveElementDispatcher() {
          classCallCheck(this, SingleActiveElementDispatcher);
          return possibleConstructorReturn(this, (SingleActiveElementDispatcher.__proto__ || Object.getPrototypeOf(SingleActiveElementDispatcher)).apply(this, arguments));
      }

      createClass(SingleActiveElementDispatcher, [{
          key: "setActive",
          value: function setActive(element, addChangeListener, forceDispatch) {
              if (!forceDispatch && element === this._active) {
                  return;
              }
              this._active = element;
              this.dispatch(element);
              if (addChangeListener) {
                  this.addListenerOnce(function (newElement) {
                      if (newElement != element) {
                          addChangeListener(newElement);
                      }
                  });
              }
          }
      }, {
          key: "getActive",
          value: function getActive() {
              return this._active;
          }
      }]);
      return SingleActiveElementDispatcher;
  }(Dispatcher);

  var defaultToPixelsAttributes = new Set(["border-bottom-width", "border-left-width", "border-right-width", "border-top-width", "border-width", "bottom", "font-size", "font-stretch", "height", "layer-grid-char", "layer-grid-char-spacing", "layer-grid-line", "left", "letter-spacing", "line-height", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "max-height", "max-width", "min-height", "min-width", "outline-width", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "right", "size", "top", "width", "word-spacing"]);

  function CreateNodeAttributesMap(oldAttributesMap, allowedAttributesArray) {
      var allowedAttributesMap = new Map(oldAttributesMap);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
          for (var _iterator = (allowedAttributesArray || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var attribute = _step.value;

              if (!attribute) continue;
              if (!Array.isArray(attribute)) {
                  attribute = [attribute];
              }
              allowedAttributesMap.set(attribute[0], attribute[1] || {});
          }
      } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
              }
          } finally {
              if (_didIteratorError) {
                  throw _iteratorError;
              }
          }
      }

      allowedAttributesMap.reverseNameMap = new Map();

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
          for (var _iterator2 = allowedAttributesMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _step2$value = slicedToArray(_step2.value, 2),
                  key = _step2$value[0],
                  value = _step2$value[1];

              value = value || {};

              value.domName = value.domName || key;

              allowedAttributesMap.reverseNameMap.set(value.domName, key);

              allowedAttributesMap.set(key, value);
          }
      } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
              }
          } finally {
              if (_didIteratorError2) {
                  throw _iteratorError2;
              }
          }
      }

      return allowedAttributesMap;
  }

  // A class that can be used to work with a className field as with a Set, while having a toString() usable in the DOM
  // It's used when a UI object has a className attribute, that a string, but we still want it to be modified if we call addClass and removeClass
  // In that case, the string gets converted to a ClassNameSet
  var ClassNameSet = function (_Set) {
      inherits(ClassNameSet, _Set);

      function ClassNameSet() {
          classCallCheck(this, ClassNameSet);
          return possibleConstructorReturn(this, (ClassNameSet.__proto__ || Object.getPrototypeOf(ClassNameSet)).apply(this, arguments));
      }

      createClass(ClassNameSet, [{
          key: "toString",
          value: function toString() {
              return Array.from(this).join(" ");
          }
      }], [{
          key: "create",

          // Can't use classic super in constructor since Set is build-in type and will throw an error
          // TODO: see if could still be made to have this as constructor
          value: function create(className) {
              var value = new Set(String(className || "").split(" "));
              return setObjectPrototype(value, this);
          }
      }]);
      return ClassNameSet;
  }(Set);

  var NodeAttributes = function () {
      function NodeAttributes(obj) {
          classCallCheck(this, NodeAttributes);

          Object.assign(this, obj);
          // className and style should be deep copied to be modifiable, the others shallow copied
          if (this.className instanceof ClassNameSet) {
              this.className = ClassNameSet.create(String(this.className));
          }
          if (this.style) {
              this.style = Object.assign({}, this.style);
          }
      }

      // TODO: should this use the domName or the reverseName? Still needs work


      createClass(NodeAttributes, [{
          key: "setAttribute",
          value: function setAttribute(key, value, node) {
              var attributesMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.constructor.defaultAttributesMap;

              // TODO: might want to find a better way than whitelistAttributes field to do this
              if (!attributesMap.has(key)) {
                  this.whitelistedAttributes = this.whitelistedAttributes || {};
                  this.whitelistedAttributes[key] = true;
              }
              this[key] = value;
              if (node) {
                  this.applyAttribute(key, node, attributesMap);
              }
          }
      }, {
          key: "applyStyleToNode",
          value: function applyStyleToNode(key, value, node) {
              if (typeof value === "function") {
                  value = value();
              }
              if ((value instanceof Number || typeof value === "number") && value != 0 && defaultToPixelsAttributes.has(dashCase(key))) {
                  value = value + "px";
              }
              if (node && node.style[key] !== value) {
                  node.style[key] = value;
              }
          }
      }, {
          key: "setStyle",
          value: function setStyle(key, value, node) {
              if (!(typeof key === "string" || key instanceof String)) {
                  // If the key is not a string, it should be a plain object
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;

                  try {
                      for (var _iterator3 = Object.keys(key)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                          var styleKey = _step3.value;

                          this.setStyle(styleKey, key[styleKey], node);
                      }
                  } catch (err) {
                      _didIteratorError3 = true;
                      _iteratorError3 = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion3 && _iterator3.return) {
                              _iterator3.return();
                          }
                      } finally {
                          if (_didIteratorError3) {
                              throw _iteratorError3;
                          }
                      }
                  }

                  return;
              }
              if (value === undefined) {
                  this.removeStyle(key, node);
                  return;
              }
              this.style = this.style || {};
              this.style[key] = value;
              this.applyStyleToNode(key, value, node);
          }
      }, {
          key: "removeStyle",
          value: function removeStyle(key, node) {
              if (this.style) {
                  delete this.style[key];
              }
              if (node && node.style[key]) {
                  delete node.style[key];
              }
          }
      }, {
          key: "getClassNameSet",
          value: function getClassNameSet() {
              if (!(this.className instanceof ClassNameSet)) {
                  this.className = ClassNameSet.create(this.className || "");
              }
              return this.className;
          }
      }, {
          key: "addClass",
          value: function addClass(classes, node) {
              classes = this.constructor.getClassArray(classes);

              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                  for (var _iterator4 = classes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var cls = _step4.value;

                      this.getClassNameSet().add(cls);
                      if (node) {
                          node.classList.add(cls);
                      }
                  }
              } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                      }
                  } finally {
                      if (_didIteratorError4) {
                          throw _iteratorError4;
                      }
                  }
              }
          }
      }, {
          key: "removeClass",
          value: function removeClass(classes, node) {
              classes = this.constructor.getClassArray(classes);

              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                  for (var _iterator5 = classes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                      var cls = _step5.value;

                      this.getClassNameSet().delete(cls);
                      if (node) {
                          node.classList.remove(cls);
                      }
                  }
              } catch (err) {
                  _didIteratorError5 = true;
                  _iteratorError5 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion5 && _iterator5.return) {
                          _iterator5.return();
                      }
                  } finally {
                      if (_didIteratorError5) {
                          throw _iteratorError5;
                      }
                  }
              }
          }
      }, {
          key: "hasClass",
          value: function hasClass(className) {
              return this.getClassNameSet().has(className);
          }
      }, {
          key: "applyAttribute",
          value: function applyAttribute(key, node, attributesMap) {
              var attributeOptions = attributesMap.get(key);
              if (!attributeOptions) {
                  if (this.whitelistedAttributes && key in this.whitelistedAttributes) {
                      attributeOptions = {
                          domName: key
                      };
                  } else {
                      return;
                  }
              }
              var value = this[key];
              if (typeof value === "function") {
                  value = value();
              }
              if (attributeOptions.noValue) {
                  if (value) {
                      value = "";
                  } else {
                      value = undefined;
                  }
              }
              if (typeof value !== "undefined") {
                  node.setAttribute(attributeOptions.domName, value);
              } else {
                  node.removeAttribute(attributeOptions.domName);
              }
          }
      }, {
          key: "applyClassName",
          value: function applyClassName(node) {
              if (this.className) {
                  var className = String(this.className);
                  if (node.className != className) {
                      node.className = className;
                  }
              } else {
                  if (node.className) {
                      node.removeAttribute("class");
                  }
              }
          }
      }, {
          key: "apply",
          value: function apply(node, attributesMap) {
              var addedAttributes = {};
              var whitelistedAttributes = this.whitelistedAttributes || {};

              // First update existing node attributes and delete old ones
              // TODO: optimize to not run this if the node was freshly created
              var nodeAttributes = node.attributes;
              for (var i = nodeAttributes.length - 1; i >= 0; i--) {
                  var attr = nodeAttributes[i];
                  var attributeName = attr.name;
                  if (attributeName === "style" || attributeName === "class") {
                      // TODO: maybe should do work here?
                      continue;
                  }

                  var key = attributesMap.reverseNameMap.get(attributeName);

                  if (this.hasOwnProperty(key)) {
                      var value = this[key];
                      var attributeOptions = attributesMap.get(key);
                      if (attributeOptions && attributeOptions.noValue) {
                          if (value) {
                              value = "";
                          } else {
                              value = undefined;
                          }
                      }
                      if (value != null) {
                          node.setAttribute(attributeName, value);
                          addedAttributes[key] = true;
                      } else {
                          node.removeAttribute(attributeName);
                      }
                  } else {
                      node.removeAttribute(attributeName);
                  }
              }
              // Add new attributes
              for (var _key in this) {
                  if (addedAttributes[_key]) {
                      continue;
                  }
                  this.applyAttribute(_key, node, attributesMap);
                  // TODO: also whitelist data- and aria- keys here
              }

              this.applyClassName(node);

              node.removeAttribute("style");
              if (this.style) {
                  for (var _key2 in this.style) {
                      this.applyStyleToNode(_key2, this.style[_key2], node);
                  }
              }
          }
      }], [{
          key: "getClassArray",
          value: function getClassArray(classes) {
              if (!classes) {
                  return [];
              }
              if (Array.isArray(classes)) {
                  return classes.map(function (x) {
                      return String(x).trim();
                  });
              } else {
                  return String(classes).trim().split(" ");
              }
          }
      }]);
      return NodeAttributes;
  }();

  // Default node attributes, should be as few of these as possible
  NodeAttributes.defaultAttributesMap = CreateNodeAttributesMap([["id"], ["action"], ["colspan"], ["default"], ["disabled", { noValue: true }], ["fixed"], ["forAttr", { domName: "for" }], // TODO: have a consistent nomenclature for there!
  ["hidden"], ["href"], ["rel"], ["minHeight"], ["minWidth"], ["role"], ["target"], ["HTMLtitle", { domName: "title" }], ["type"], ["placeholder"], ["src"], ["height"], ["width"]]
  //["value"], // Value is intentionally disabled
  );

  function applyDebugFlags(element) {
      if (document.STEM_DEBUG) {
          element.node.stemElement = element;
          setTimeout(function () {
              if (element.node.setAttribute) {
                  if (element.constructor.name !== "UIElement") {
                      element.node.setAttribute("_", element.constructor.name);
                  }
              }
          }, 0);
      }
  }

  var UI = {
      renderingStack: [] //keeps track of objects that are redrawing, to know where to assign refs automatically
  };

  var BaseUIElement = function (_Dispatchable) {
      inherits(BaseUIElement, _Dispatchable);

      function BaseUIElement() {
          classCallCheck(this, BaseUIElement);
          return possibleConstructorReturn(this, (BaseUIElement.__proto__ || Object.getPrototypeOf(BaseUIElement)).apply(this, arguments));
      }

      createClass(BaseUIElement, [{
          key: "canOverwrite",
          value: function canOverwrite(existingChild) {
              return this.constructor === existingChild.constructor && this.getNodeType() === existingChild.getNodeType();
          }
      }, {
          key: "applyRef",
          value: function applyRef() {
              if (this.options && this.options.ref) {
                  var obj = this.options.ref.parent;
                  var name = this.options.ref.name;
                  obj[name] = this;
              }
          }
      }, {
          key: "removeRef",
          value: function removeRef() {
              if (this.options && this.options.ref) {
                  var obj = this.options.ref.parent;
                  var name = this.options.ref.name;
                  if (obj[name] === this) {
                      obj[name] = undefined;
                  }
              }
          }

          // Lifecycle methods, called when the element was first inserted in the DOM, and before it's removed

      }, {
          key: "onMount",
          value: function onMount() {}
      }, {
          key: "onUnmount",
          value: function onUnmount() {}
      }, {
          key: "destroyNode",
          value: function destroyNode() {
              this.onUnmount();
              this.cleanup();
              this.removeRef();
              this.node && this.node.remove();
              delete this.node; // Clear for gc
          }
      }]);
      return BaseUIElement;
  }(Dispatchable);

  UI.TextElement = function (_BaseUIElement) {
      inherits(UITextElement, _BaseUIElement);

      function UITextElement() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          classCallCheck(this, UITextElement);

          var _this2 = possibleConstructorReturn(this, (UITextElement.__proto__ || Object.getPrototypeOf(UITextElement)).call(this));

          if (value && value.hasOwnProperty("value")) {
              _this2.value = value.value;
              _this2.options = value;
          } else {
              _this2.value = value != null ? value : "";
          }
          return _this2;
      }

      createClass(UITextElement, [{
          key: "mount",
          value: function mount(parent, nextSibling) {
              this.parent = parent;
              if (!this.node) {
                  this.createNode();
                  this.applyRef();
              } else {
                  this.redraw();
              }
              parent.node.insertBefore(this.node, nextSibling);
              this.onMount();
          }
      }, {
          key: "getNodeType",
          value: function getNodeType() {
              return Node.TEXT_NODE;
          }
      }, {
          key: "copyState",
          value: function copyState(element) {
              this.value = element.value;
              this.options = element.options;
          }
      }, {
          key: "createNode",
          value: function createNode() {
              this.node = document.createTextNode(this.getValue());
              applyDebugFlags(this);
              return this.node;
          }
      }, {
          key: "setValue",
          value: function setValue(value) {
              this.value = value != null ? value : "";
              if (this.node) {
                  this.redraw();
              }
          }
      }, {
          key: "getValue",
          value: function getValue() {
              return String(this.value);
          }
      }, {
          key: "redraw",
          value: function redraw() {
              if (this.node) {
                  var newValue = this.getValue();
                  // TODO: check if this is best for performance
                  if (this.node.nodeValue !== newValue) {
                      this.node.nodeValue = newValue;
                  }
              }
              this.applyRef();
          }
      }]);
      return UITextElement;
  }(BaseUIElement);

  // TODO: rename to Element

  var UIElement = function (_BaseUIElement2) {
      inherits(UIElement, _BaseUIElement2);

      function UIElement() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          classCallCheck(this, UIElement);

          var _this3 = possibleConstructorReturn(this, (UIElement.__proto__ || Object.getPrototypeOf(UIElement)).call(this));

          _this3.children = [];
          _this3.options = options; // TODO: this is a hack, to not break all the code that references this.options in setOptions
          _this3.setOptions(options);
          return _this3;
      }

      createClass(UIElement, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions(options) {}
      }, {
          key: "getPreservedOptions",
          value: function getPreservedOptions() {}
      }, {
          key: "setOptions",
          value: function setOptions(options) {
              var defaultOptions = this.getDefaultOptions(options);
              if (defaultOptions) {
                  options = Object.assign(defaultOptions, options);
              }
              this.options = options;
          }
      }, {
          key: "updateOptions",
          value: function updateOptions(options) {
              this.setOptions(Object.assign(this.options, options));
              this.redraw();
          }
      }, {
          key: "setChildren",
          value: function setChildren() {
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
              }

              this.updateOptions({ children: unwrapArray(args) });
          }

          // Used when we want to reuse the current element, with the options from the passed in argument
          // Is only called when element.canOverwrite(this) is true

      }, {
          key: "copyState",
          value: function copyState(element) {
              var options = element.options;
              var preservedOptions = this.getPreservedOptions();
              if (preservedOptions) {
                  options = Object.assign({}, options, preservedOptions);
              }
              this.setOptions(options);
              this.addListenersFromOptions();
          }
      }, {
          key: "getNodeType",
          value: function getNodeType() {
              return this.options.nodeType || "div";
          }
      }, {
          key: "getGivenChildren",


          // TODO: should be renamed to renderContent
          value: function getGivenChildren() {
              return this.options.children || [];
          }
      }, {
          key: "render",
          value: function render() {
              return this.options.children;
          }
      }, {
          key: "createNode",
          value: function createNode() {
              this.node = document.createElement(this.getNodeType());
              applyDebugFlags(this);
              return this.node;
          }

          // Abstract, gets called when removing DOM node associated with the

      }, {
          key: "cleanup",
          value: function cleanup() {
              this.runCleanupJobs();
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var child = _step.value;

                      child.destroyNode();
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              this.clearNode();
              get(UIElement.prototype.__proto__ || Object.getPrototypeOf(UIElement.prototype), "cleanup", this).call(this);
          }
      }, {
          key: "overwriteChild",
          value: function overwriteChild(existingChild, newChild) {
              existingChild.copyState(newChild);
              return existingChild;
          }
      }, {
          key: "getElementKeyMap",
          value: function getElementKeyMap(elements) {
              if (!elements || !elements.length) {
                  return;
              }
              var childrenKeyMap = new Map();

              for (var i = 0; i < elements.length; i += 1) {
                  var childKey = elements[i].options && elements[i].options.key || "autokey" + i;

                  childrenKeyMap.set(childKey, elements[i]);
              }

              return childrenKeyMap;
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              return this.render();
          }
      }, {
          key: "getChildrenForRedraw",
          value: function getChildrenForRedraw() {
              UI.renderingStack.push(this);
              var children = unwrapArray(this.getChildrenToRender());
              UI.renderingStack.pop();
              return children;
          }
      }, {
          key: "redraw",
          value: function redraw() {
              if (!this.node) {
                  console.error("Element not yet mounted. Redraw aborted!", this);
                  return false;
              }

              var newChildren = this.getChildrenForRedraw();

              if (newChildren === this.children) {
                  for (var i = 0; i < newChildren.length; i += 1) {
                      newChildren[i].redraw();
                  }
                  this.applyNodeAttributes();
                  this.applyRef();
                  return true;
              }

              var domNode = this.node;
              var childrenKeyMap = this.getElementKeyMap(this.children);

              for (var _i = 0; _i < newChildren.length; _i++) {
                  var newChild = newChildren[_i];
                  var prevChildNode = _i > 0 ? newChildren[_i - 1].node : null;
                  var currentChildNode = prevChildNode ? prevChildNode.nextSibling : domNode.firstChild;

                  // Not a UIElement, to be converted to a TextElement
                  if (!newChild.getNodeType) {
                      newChild = newChildren[_i] = new UI.TextElement(newChild);
                  }

                  var newChildKey = newChild.options && newChild.options.key || "autokey" + _i;
                  var existingChild = childrenKeyMap && childrenKeyMap.get(newChildKey);

                  if (existingChild && newChildren[_i].canOverwrite(existingChild)) {
                      // We're replacing an existing child element, it might be the very same object
                      if (existingChild !== newChildren[_i]) {
                          newChildren[_i] = this.overwriteChild(existingChild, newChildren[_i]);
                      }
                      newChildren[_i].redraw();
                      if (newChildren[_i].node !== currentChildNode) {
                          domNode.insertBefore(newChildren[_i].node, currentChildNode);
                      }
                  } else {
                      // Getting here means we are not replacing anything, should just render
                      newChild.mount(this, currentChildNode);
                  }
              }

              if (this.children.length) {
                  // Remove children that don't need to be here
                  var newChildrenSet = new Set(newChildren);

                  for (var _i2 = 0; _i2 < this.children.length; _i2 += 1) {
                      if (!newChildrenSet.has(this.children[_i2])) {
                          this.children[_i2].destroyNode();
                      }
                  }
              }

              this.children = newChildren;

              this.applyNodeAttributes();

              this.applyRef();

              return true;
          }
      }, {
          key: "getOptionsAsNodeAttributes",
          value: function getOptionsAsNodeAttributes() {
              return setObjectPrototype(this.options, NodeAttributes);
          }
      }, {
          key: "getNodeAttributes",
          value: function getNodeAttributes() {
              var returnCopy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

              if (returnCopy) {
                  return new NodeAttributes(this.options);
              } else {
                  return this.getOptionsAsNodeAttributes();
              }
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {}
      }, {
          key: "applyNodeAttributes",
          value: function applyNodeAttributes() {
              var attr = void 0;
              if (this.extraNodeAttributes != NOOP_FUNCTION) {
                  // Create a copy of options, that is modifiable
                  attr = this.getNodeAttributes(true);
                  this.extraNodeAttributes(attr);
              } else {
                  attr = this.getNodeAttributes(false);
              }
              attr.apply(this.node, this.constructor.domAttributesMap);
          }
      }, {
          key: "setAttribute",
          value: function setAttribute(key, value) {
              this.getOptionsAsNodeAttributes().setAttribute(key, value, this.node, this.constructor.domAttributesMap);
          }
      }, {
          key: "setStyle",
          value: function setStyle(key, value) {
              this.getOptionsAsNodeAttributes().setStyle(key, value, this.node);
          }
      }, {
          key: "removeStyle",
          value: function removeStyle(key) {
              this.getOptionsAsNodeAttributes().removeStyle(key, this.node);
          }
      }, {
          key: "addClass",
          value: function addClass(className) {
              this.getOptionsAsNodeAttributes().addClass(className, this.node);
          }
      }, {
          key: "removeClass",
          value: function removeClass(className) {
              this.getOptionsAsNodeAttributes().removeClass(className, this.node);
          }
      }, {
          key: "hasClass",
          value: function hasClass(className) {
              return this.getOptionsAsNodeAttributes().hasClass(className);
          }
      }, {
          key: "toggleClass",
          value: function toggleClass(className) {
              if (!this.hasClass(className)) {
                  this.addClass(className);
              } else {
                  this.removeClass(className);
              }
          }
      }, {
          key: "addListenersFromOptions",
          value: function addListenersFromOptions() {
              var _this4 = this;

              var _loop = function _loop(key) {
                  if (typeof key === "string" && key.startsWith("on") && key.length > 2) {
                      var eventType = key.substring(2);

                      var addListenerMethodName = "add" + eventType + "Listener";
                      var handlerMethodName = "on" + eventType + "Handler";

                      // The handlerMethod might have been previously added
                      // by a previous call to this function or manually by the user
                      if (typeof _this4[addListenerMethodName] === "function" && !_this4.hasOwnProperty(handlerMethodName)) {
                          _this4[handlerMethodName] = function (event) {
                              UI.event = event;
                              if (_this4.options[key]) {
                                  // TODO: arguments should be (event, this)!
                                  _this4.options[key](_this4, event);
                              }
                          };

                          // Actually add the listener
                          _this4[addListenerMethodName](_this4[handlerMethodName]);
                      }
                  }
              };

              for (var key in this.options) {
                  _loop(key);
              }
          }
      }, {
          key: "refLink",
          value: function refLink(name) {
              return { parent: this, name: name };
          }
      }, {
          key: "refLinkArray",
          value: function refLinkArray(arrayName, index) {
              if (!this.hasOwnProperty(arrayName)) {
                  this[arrayName] = [];
              }
              return { parent: this[arrayName], name: index };
          }
      }, {
          key: "bindToNode",
          value: function bindToNode(node, doRedraw) {
              this.node = node;
              if (doRedraw) {
                  this.clearNode();
                  this.redraw();
              }
              return this;
          }
      }, {
          key: "mount",
          value: function mount(parent, nextSiblingNode) {
              if (!parent.node) {
                  parent = new UI.Element().bindToNode(parent);
              }
              this.parent = parent;
              if (this.node) {
                  parent.insertChildNodeBefore(this, nextSiblingNode);
                  this.dispatch("changeParent", this.parent);
                  return;
              }

              this.createNode();
              this.redraw();

              parent.insertChildNodeBefore(this, nextSiblingNode);

              this.addListenersFromOptions();

              this.onMount();
          }

          // You need to overwrite the next child manipulation rutines if this.options.children !== this.children

      }, {
          key: "appendChild",
          value: function appendChild(child) {
              // TODO: the next check should be done with a decorator
              if (this.children !== this.options.children) {
                  throw "Can't properly handle appendChild, you need to implement it for " + this.constructor;
              }
              this.options.children.push(child);
              child.mount(this, null);
              return child;
          }
      }, {
          key: "insertChild",
          value: function insertChild(child, position) {
              if (this.children !== this.options.children) {
                  throw "Can't properly handle insertChild, you need to implement it for " + this.constructor;
              }
              position = position || 0;

              this.options.children.splice(position, 0, child);

              var nextChildNode = position + 1 < this.options.children.length ? this.children[position + 1].node : null;

              child.mount(this, nextChildNode);

              return child;
          }
      }, {
          key: "eraseChild",
          value: function eraseChild(child) {
              var destroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              var index = this.options.children.indexOf(child);

              if (index < 0) {
                  // child not found
                  return null;
              }
              return this.eraseChildAtIndex(index, destroy);
          }
      }, {
          key: "eraseChildAtIndex",
          value: function eraseChildAtIndex(index) {
              var destroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              if (index < 0 || index >= this.options.children.length) {
                  console.error("Erasing child at invalid index ", index, this.options.children.length);
                  return;
              }
              if (this.children !== this.options.children) {
                  throw "Can't properly handle eraseChild, you need to implement it for " + this.constructor;
              }
              var erasedChild = this.options.children.splice(index, 1)[0];
              if (destroy) {
                  erasedChild.destroyNode();
              } else {
                  this.node.removeChild(erasedChild.node);
              }
              return erasedChild;
          }
      }, {
          key: "eraseAllChildren",
          value: function eraseAllChildren() {
              while (this.children.length > 0) {
                  this.eraseChildAtIndex(this.children.length - 1);
              }
          }
      }, {
          key: "show",
          value: function show() {
              this.removeClass("hidden");
          }
      }, {
          key: "hide",
          value: function hide() {
              this.addClass("hidden");
          }
      }, {
          key: "insertChildNodeBefore",
          value: function insertChildNodeBefore(childElement, nextSiblingNode) {
              this.node.insertBefore(childElement.node, nextSiblingNode);
          }

          // TODO: should be renamed emptyNode()

      }, {
          key: "clearNode",
          value: function clearNode() {
              while (this.node && this.node.lastChild) {
                  this.node.removeChild(this.node.lastChild);
              }
          }
      }, {
          key: "isInDocument",
          value: function isInDocument() {
              return document.body.contains(this.node);
          }

          // TODO: this method also doesn't belong here

      }, {
          key: "getWidthOrHeight",
          value: function getWidthOrHeight(parameter) {
              var node = this.node;
              if (!node) {
                  return 0;
              }
              var value = parseFloat(parameter === "width" ? node.offsetWidth : node.offsetHeight);
              return value || 0;
          }
      }, {
          key: "getHeight",
          value: function getHeight() {
              return this.getWidthOrHeight("height");
          }
      }, {
          key: "getWidth",
          value: function getWidth() {
              return this.getWidthOrHeight("width");
          }
      }, {
          key: "setHeight",
          value: function setHeight(value) {
              this.setStyle("height", suffixNumber(value, "px"));
              this.dispatch("resize");
          }
      }, {
          key: "setWidth",
          value: function setWidth(value) {
              this.setStyle("width", suffixNumber(value, "px"));
              this.dispatch("resize");
          }
      }, {
          key: "addNodeListener",
          value: function addNodeListener(name, callback) {
              for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                  args[_key2 - 2] = arguments[_key2];
              }

              var _node,
                  _this5 = this;

              (_node = this.node).addEventListener.apply(_node, [name, callback].concat(args));
              var handler = {
                  remove: function remove() {
                      _this5.removeNodeListener.apply(_this5, [name, callback].concat(args));
                  }
              };
              this.addCleanupJob(handler);
              return handler;
          }
      }, {
          key: "removeNodeListener",
          value: function removeNodeListener(name, callback) {
              this.node.removeEventListener(name, callback);
          }

          // TODO: methods can be automatically generated by addNodeListener(UI.Element, "dblclick", "DoubleClick") for instance

      }, {
          key: "addClickListener",
          value: function addClickListener(callback) {
              return this.addNodeListener("click", callback);
          }
      }, {
          key: "removeClickListener",
          value: function removeClickListener(callback) {
              this.removeNodeListener("click", callback);
          }
      }, {
          key: "addDoubleClickListener",
          value: function addDoubleClickListener(callback) {
              return this.addNodeListener("dblclick", callback);
          }
      }, {
          key: "removeDoubleClickListener",
          value: function removeDoubleClickListener(callback) {
              this.removeNodeListener("dblclick", callback);
          }
      }, {
          key: "addChangeListener",
          value: function addChangeListener(callback) {
              return this.addNodeListener("change", callback);
          }
      }, {
          key: "styleSheet",
          get: function get$$1() {
              return this.getStyleSheet();
          },
          set: function set$$1(value) {
              this.options.styleSheet = value;
              this.redraw();
          }
      }], [{
          key: "create",
          value: function create(parentNode, options) {
              var uiElement = new this(options);
              uiElement.mount(parentNode, null);
              return uiElement;
          }
      }]);
      return UIElement;
  }(BaseUIElement);

  UI.createElement = function (tag, options) {
      if (!tag) {
          console.error("Create element needs a valid object tag, did you mistype a class name?");
          return;
      }

      options = options || {};

      for (var _len3 = arguments.length, children = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          children[_key3 - 2] = arguments[_key3];
      }

      options.children = unwrapArray(children);

      if (options.ref) {
          if (typeof options.ref === "string") {
              if (UI.renderingStack.length > 0) {
                  options.ref = {
                      parent: UI.renderingStack[UI.renderingStack.length - 1],
                      name: options.ref
                  };
              } else {
                  throw Error("Failed to automatically link ref, there needs to be an element in the rendering stack");
              }
          }

          if (options.key) {
              console.error("Warning! UI Element cannot have both a key and a ref fieldname. Key will be overriden.\n" + "Are you using the options from another object? Shame!", options);
          }

          options.key = "_ref" + options.ref.name;
      }

      if (options.hasOwnProperty("class")) {
          console.error("Invalid UI Element attribute: class. Did you mean className?");
      }

      if (typeof tag === "string") {
          options.nodeType = tag;
          tag = UIElement;
      }

      return new tag(options);
  };

  UIElement.domAttributesMap = NodeAttributes.defaultAttributesMap;

  // Explicitly know that extraNodeAttributes doesn't do anything, but have it to be callable when doing inheritance
  UIElement.prototype.extraNodeAttributes = NOOP_FUNCTION;

  UI.Element = UIElement;

  UI.str = function (value) {
      return new UI.TextElement(value);
  };

  // Keep a map for every base class, and for each base class keep a map for each nodeType, to cache classes
  var primitiveMap = new WeakMap();

  UI.Primitive = function (BaseClass, nodeType) {
      if (!nodeType) {
          nodeType = BaseClass;
          BaseClass = UI.Element;
      }
      var baseClassPrimitiveMap = primitiveMap.get(BaseClass);
      if (!baseClassPrimitiveMap) {
          baseClassPrimitiveMap = new Map();
          primitiveMap.set(BaseClass, baseClassPrimitiveMap);
      }
      var resultClass = baseClassPrimitiveMap.get(nodeType);
      if (resultClass) {
          return resultClass;
      }
      resultClass = function (_BaseClass) {
          inherits(Primitive, _BaseClass);

          function Primitive() {
              classCallCheck(this, Primitive);
              return possibleConstructorReturn(this, (Primitive.__proto__ || Object.getPrototypeOf(Primitive)).apply(this, arguments));
          }

          createClass(Primitive, [{
              key: "getNodeType",
              value: function getNodeType() {
                  return nodeType;
              }
          }]);
          return Primitive;
      }(BaseClass);
      baseClassPrimitiveMap.set(nodeType, resultClass);
      return resultClass;
  };

  var Orientation = {
      HORIZONTAL: 1,
      VERTICAL: 2
  };

  var Direction = {
      UP: "up",
      LEFT: "left",
      DOWN: "down",
      RIGHT: "right"
  };

  var Level = {
      NONE: null,
      DEFAULT: "default",
      INFO: "info",
      PRIMARY: "primary",
      SECONDARY: "secondary",
      SUCCESS: "success",
      WARNING: "warning",
      DANGER: "danger",
      ERROR: "danger"
  };

  var Size = {
      NONE: null,
      EXTRA_SMALL: "xs",
      SMALL: "sm",
      MEDIUM: "default",
      DEFAULT: "default",
      LARGE: "lg",
      EXTRA_LARGE: "xl"
  };

  var ActionStatus = {
      DEFAULT: 1,
      RUNNING: 2,
      SUCCESS: 3,
      FAILED: 4
  };

  function getOffset(node) {
      if (node instanceof UI.Element) {
          node = node.node;
      }
      if (!node) {
          return { left: 0, top: 0 };
      }
      var nodePosition = node.style && node.style.position;
      var left = 0;
      var top = 0;
      while (node) {
          var nodeStyle = node.style || {};
          if (nodePosition === "absolute" && nodeStyle.position === "relative") {
              return { left: left, top: top };
          }
          left += node.offsetLeft;
          top += node.offsetTop;
          node = node.offsetParent;
      }
      return { left: left, top: top };
  }

  function getComputedStyle(node, attribute) {
      if (node instanceof UI.Element) {
          node = node.node;
      }
      var computedStyle = window.getComputedStyle(node, null);
      return attribute ? computedStyle.getPropertyValue(attribute) : computedStyle;
  }

  // TODO: should this be actually better done throught the dynamic CSS API, without doing through the DOM?
  // So far it's actually better like this, since browsers like Chrome allow users to edit classes

  var StyleInstance = function (_UI$TextElement) {
      inherits(StyleInstance, _UI$TextElement);

      function StyleInstance(options) {
          classCallCheck(this, StyleInstance);

          var _this = possibleConstructorReturn(this, (StyleInstance.__proto__ || Object.getPrototypeOf(StyleInstance)).call(this, options));

          _this.setOptions(options);
          return _this;
      }

      createClass(StyleInstance, [{
          key: "setOptions",
          value: function setOptions(options) {
              this.options = options;
              this.options.attributes = this.options.attributes || {};
              this.attributes = new Map();
              for (var key in this.options.attributes) {
                  this.attributes.set(key, this.options.attributes[key]);
              }
          }
      }, {
          key: "getValue",
          value: function getValue() {
              var str = this.options.selector + "{";
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var _step$value = slicedToArray(_step.value, 2),
                          key = _step$value[0],
                          value = _step$value[1];

                      if (typeof value === "function") {
                          value = value();
                      }
                      // Ignore keys with null or undefined value
                      if (value == null) {
                          continue;
                      }

                      key = dashCase(key);

                      // If it's a size property, and the value is a number, assume it's in pixels
                      if ((value instanceof Number || typeof value === "number") && value != 0 && defaultToPixelsAttributes.has(key)) {
                          value = value + "px";
                      }

                      // TODO: if key starts with vendor-, replace it with the browser specific one (and the plain one)
                      str += key + ":" + value + ";";
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              return str + "}";
          }
      }, {
          key: "copyState",
          value: function copyState(element) {
              this.setOptions(element.options);
          }
      }, {
          key: "setAttribute",
          value: function setAttribute(name, value) {
              this.attributes.set(name, value);
              this.redraw();
          }
      }, {
          key: "deleteAttribute",
          value: function deleteAttribute(name) {
              this.attributes.delete(name);
              this.redraw();
          }
      }]);
      return StyleInstance;
  }(UI.TextElement);

  var StyleElement = function (_UI$Primitive) {
      inherits(StyleElement, _UI$Primitive);

      function StyleElement() {
          classCallCheck(this, StyleElement);
          return possibleConstructorReturn(this, (StyleElement.__proto__ || Object.getPrototypeOf(StyleElement)).apply(this, arguments));
      }

      createClass(StyleElement, [{
          key: "getNodeAttributes",
          value: function getNodeAttributes() {
              // TODO: allow custom style attributes (media, scoped, etc)
              var attr = new NodeAttributes({});
              if (this.options.name) {
                  attr.setAttribute("name", this.options.name);
              }
              return attr;
          }
      }]);
      return StyleElement;
  }(UI.Primitive("style"));

  var ALLOWED_SELECTOR_STARTS = new Set([":", ">", " ", "+", "~", "[", "."]);

  // TODO: figure out how to work with animation frames, this only creates a wrapper class

  var DynamicStyleElement = function (_StyleElement) {
      inherits(DynamicStyleElement, _StyleElement);

      function DynamicStyleElement() {
          classCallCheck(this, DynamicStyleElement);
          return possibleConstructorReturn(this, (DynamicStyleElement.__proto__ || Object.getPrototypeOf(DynamicStyleElement)).apply(this, arguments));
      }

      createClass(DynamicStyleElement, [{
          key: "toString",
          value: function toString() {
              return this.getClassName();
          }

          // Overwrite valueOf, so when using the + operator should seamlessly concatenate to create a valid className

      }, {
          key: "valueOf",
          value: function valueOf() {
              return " " + this.getClassName();
          }

          // TODO: use a cached decorator here

      }, {
          key: "getClassName",
          value: function getClassName() {
              if (this.className) {
                  return this.className;
              }
              this.constructor.instanceCounter = (this.constructor.instanceCounter || 0) + 1;
              this.className = (this.options.name || "autocls") + "-" + this.constructor.instanceCounter;
              return this.className;
          }
      }, {
          key: "getSelector",
          value: function getSelector() {
              return this.options.selectorName || "." + this.getClassName();
          }

          // A cyclic dependency in the style object will cause an infinite loop here

      }, {
          key: "getStyleInstances",
          value: function getStyleInstances(selector, style) {
              var result = [];
              var ownStyle = {},
                  haveOwnStyle = false;
              for (var key in style) {
                  var value = style[key];
                  if (value == null) {
                      continue;
                  }
                  var isProperValue = typeof value === "string" || value instanceof String || typeof value === "number" || value instanceof Number || typeof value === "function";
                  if (isProperValue) {
                      ownStyle[key] = value;
                      haveOwnStyle = true;
                  } else {
                      // Check that this actually is a valid subselector
                      var firstChar = String(key).charAt(0);
                      if (!ALLOWED_SELECTOR_STARTS.has(firstChar)) {
                          console.error("First character of your selector is invalid.");
                          continue;
                      }
                      // TODO: maybe optimize for waste here?
                      var subStyle = this.getStyleInstances(selector + key, value);
                      result.push.apply(result, toConsumableArray(subStyle));
                  }
              }

              if (haveOwnStyle) {
                  result.unshift(new StyleInstance({ selector: selector, key: selector, attributes: ownStyle }));
              }
              return result;
          }
      }, {
          key: "render",
          value: function render() {
              var style = this.options.style || {};
              if (typeof style === "function") {
                  style = style();
              }
              if (style.selectorName) {
                  this.options.selectorName = style.selectorName;
                  delete style.selectorName;
              }
              return this.getStyleInstances(this.getSelector(), style);
          }
      }, {
          key: "setStyle",
          value: function setStyle(key, value) {
              this.options.style[key] = value;
              this.children[0].setAttribute(key, value);
          }
      }, {
          key: "setSubStyle",
          value: function setSubStyle(selector, key, value) {
              throw Error("Implement me!");
          }
      }, {
          key: "getStyleObject",
          value: function getStyleObject() {
              return this.options.style;
          }
      }]);
      return DynamicStyleElement;
  }(StyleElement);

  var KeyframeElement = function (_StyleElement2) {
      inherits(KeyframeElement, _StyleElement2);

      function KeyframeElement() {
          classCallCheck(this, KeyframeElement);
          return possibleConstructorReturn(this, (KeyframeElement.__proto__ || Object.getPrototypeOf(KeyframeElement)).apply(this, arguments));
      }

      createClass(KeyframeElement, [{
          key: "toString",
          value: function toString() {
              return this.getKeyframeName();
          }
      }, {
          key: "getKeyframeName",
          value: function getKeyframeName() {
              if (this.keyframeName) {
                  return this.keyframeName;
              }
              this.constructor.instanceCounter = (this.constructor.instanceCounter || 0) + 1;
              this.keyframeName = (this.options.name || "autokeyframe") + "-" + this.constructor.instanceCounter;
              return this.keyframeName;
          }
      }, {
          key: "getValue",
          value: function getValue(style) {
              var str = "{";
              for (var key in style) {
                  var value = style[key];
                  if (typeof value === "function") {
                      value = value();
                  }
                  if (value == null) {
                      continue;
                  }
                  str += dashCase(key) + ":" + value + ";";
              }
              return str + "}";
          }
      }, {
          key: "getKeyframeInstance",
          value: function getKeyframeInstance(keyframe) {
              var result = "{";
              for (var key in keyframe) {
                  var value = keyframe[key];
                  result += key + " " + this.getValue(value);
              }
              return result + "}";
          }
      }, {
          key: "render",
          value: function render() {
              return "@keyframes " + this.getKeyframeName() + this.getKeyframeInstance(this.options.keyframe || {});
          }
      }]);
      return KeyframeElement;
  }(StyleElement);

  function isDescriptor(desc) {
      if (!desc || !desc.hasOwnProperty) {
          return false;
      }

      var keys = ['value', 'initializer', 'get', 'set'];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
          for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var key = _step.value;

              if (desc.hasOwnProperty(key)) {
                  return true;
              }
          }
      } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
              }
          } finally {
              if (_didIteratorError) {
                  throw _iteratorError;
              }
          }
      }

      return false;
  }

  function decorate(handleDescriptor, entryArgs) {
      if (isDescriptor(entryArgs[entryArgs.length - 1])) {
          return handleDescriptor.apply(undefined, toConsumableArray(entryArgs).concat([[]]));
      } else {
          return function () {
              return handleDescriptor.apply(undefined, Array.prototype.slice.call(arguments).concat([entryArgs]));
          };
      }
  }

  function createDefaultSetter(key) {
      return function set$$1(newValue) {
          Object.defineProperty(this, key, {
              configurable: true,
              writable: true,
              // IS enumerable when reassigned by the outside word
              enumerable: true,
              value: newValue
          });

          return newValue;
      };
  }

  function handleDescriptor(target, key, descriptor) {
      var configurable = descriptor.configurable,
          enumerable = descriptor.enumerable,
          initializer = descriptor.initializer,
          value = descriptor.value;
      // The "key" property is constructed with accessor descriptor (getter / setter),
      // but the first time the getter is used, the property is reconstructed with data descriptor.

      return {
          configurable: configurable,
          enumerable: enumerable,

          get: function get() {
              // This happens if someone accesses the property directly on the prototype
              if (this === target) {
                  return;
              }

              var ret = initializer ? initializer.call(this) : value;

              Object.defineProperty(this, key, {
                  configurable: configurable,
                  enumerable: enumerable,
                  writable: true,
                  value: ret
              });

              return ret;
          },


          set: createDefaultSetter(key)
      };
  }

  function lazyInitialize() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
      }

      return decorate(handleDescriptor, args);
  }

  var lazyInit = lazyInitialize;

  function evaluateStyleRuleObject(target, initializer, value, options) {
      var result = initializer ? initializer.call(target) : value;
      if (typeof result === "function") {
          result = result();
      }
      if (Array.isArray(result)) {
          result = Object.assign.apply(Object, [{}].concat(toConsumableArray(result)));
      }
      return result;
  }

  function getStyleRuleKey(key) {
      return "__style__" + key;
  }

  function getKeyframesRuleKey(key) {
      return "__keyframes__" + key;
  }

  // TODO: this function can be made a lot more generic, to wrap plain object initializer with inheritance support
  function styleRuleWithOptions() {
      var options = Object.assign.apply(Object, [{}].concat(Array.prototype.slice.call(arguments))); //Simpler notation?
      // TODO: Remove this if you don't think it's appropiate, I thought a warning would do no harm
      if (!options.targetMethodName) {
          console.error("WARNING: targetMethodName not specified in the options (default is \"css\")");
      }
      var targetMethodName = options.targetMethodName || "css";

      function styleRuleDecorator(target, key, descriptor) {
          var initializer = descriptor.initializer,
              value = descriptor.value;


          descriptor.objInitializer = function () {
              var style = evaluateStyleRuleObject(this, initializer, value, options);

              // TODO: a bit of a hack, clean this up
              style["prefferedClassName"] = key;

              if (options.selector) {
                  style["selectorName"] = options.selector;
              }

              if (options.inherit) {
                  // Get the value we set in the prototype of the parent class
                  var parentDesc = Object.getPrototypeOf(target)[getStyleRuleKey(key)];
                  if (!parentDesc) {
                      console.error("You're trying to inherit a rule that isn't implemented in the parent: " + key);
                  }
                  var parentStyle = evaluateStyleRuleObject(this, parentDesc.objInitializer, parentDesc.value, options);
                  style = deepCopy({}, parentStyle, style);
                  return style;
              }

              return style;
          };

          // Change the prototype of this object to be able to access the old descriptor/value
          target[options.getKey(key)] = Object.assign({}, descriptor);

          descriptor.initializer = function () {
              var style = descriptor.objInitializer.call(this);
              return this[targetMethodName](style);
          };

          delete descriptor.value;

          return lazyInit(target, key, descriptor);
      }

      return styleRuleDecorator;
  }

  // TODO: Second argument is mostly useless (implied from targetMethodName)
  var styleRule = styleRuleWithOptions({
      targetMethodName: "css",
      getKey: getStyleRuleKey,
      inherit: false
  });

  var styleRuleInherit = styleRuleWithOptions({
      targetMethodName: "css",
      getKey: getStyleRuleKey,
      inherit: true
  });

  var keyframesRule = styleRuleWithOptions({
      targetMethodName: "keyframes",
      getKey: getKeyframesRuleKey,
      inherit: false
  });

  // TODO: This is currently not working (I think)
  var keyframesRuleInherit = styleRuleWithOptions({
      targetMethodName: "keyframes",
      getKey: getKeyframesRuleKey,
      inherit: true
  });

  // Class meant to group multiple classes inside a single <style> element, for convenience
  // TODO: pattern should be more robust, to be able to only update classes

  var StyleSheet = function (_Dispatchable) {
      inherits(StyleSheet, _Dispatchable);

      function StyleSheet() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          classCallCheck(this, StyleSheet);

          var _this = possibleConstructorReturn(this, (StyleSheet.__proto__ || Object.getPrototypeOf(StyleSheet)).call(this));

          _this.options = Object.assign({
              parent: document.head,
              name: options.name || _this.constructor.getElementName() // call only if needed
          }, options);
          _this.elements = new Set();
          if (!_this.options.delayedMount) {
              _this.ensureMounted();
          }
          _this.getTheme().addStyleSheet(_this);
          return _this;
      }

      createClass(StyleSheet, [{
          key: "ensureMounted",
          value: function ensureMounted() {
              if (this.styleElement) {
                  return;
              }
              var styleElementOptions = {
                  children: [],
                  name: this.options.name
              };
              this.styleElement = StyleElement.create(this.options.parent, styleElementOptions);
          }
      }, {
          key: "getTheme",
          value: function getTheme() {
              return this.options.theme || this.constructor.theme;
          }
      }, {
          key: "setTheme",
          value: function setTheme(theme) {
              this.options.theme = theme;
          }
      }, {
          key: "getThemeProperty",
          value: function getThemeProperty(key, defaultValue) {
              var theme = this.getTheme();
              return theme && theme.getProperty(key, defaultValue) || defaultValue;
          }
      }, {
          key: "ensureFirstUpdate",
          value: function ensureFirstUpdate() {
              if (this._firstUpdate) {
                  return;
              }

              this._firstUpdate = true;
              this.ensureMounted();
              // Call all listeners before update for the very first time, to update any possible variables
              this.dispatch("beforeUpdate", this);
          }
      }, {
          key: "css",
          value: function css(style) {
              this.ensureFirstUpdate();
              if (arguments.length > 1) {
                  style = Object.assign.apply(Object, [{}].concat(Array.prototype.slice.call(arguments)));
              }
              var elementOptions = { style: style };

              // Get the preferred name, maybe cleanup later
              var nameKey = "prefferedClassName";
              if (style[nameKey]) {
                  elementOptions.name = style[nameKey];
                  delete style[nameKey];
              }

              var element = new DynamicStyleElement(elementOptions);
              this.elements.add(element);
              var styleInstances = element.render();
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = styleInstances[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var styleInstance = _step.value;

                      this.styleElement.appendChild(styleInstance);
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              return element;
          }
      }, {
          key: "keyframes",
          value: function keyframes(_keyframes) {
              this.ensureFirstUpdate();
              // This is not really necessarily as I don't believe it will ever be used
              if (arguments.length > 1) {
                  _keyframes = Object.assign.apply(Object, [{}].concat(Array.prototype.slice.call(arguments)));
              }
              var element = new KeyframeElement({ keyframe: _keyframes });
              this.elements.add(element);
              this.styleElement.appendChild(element);
              return element;
          }
      }, {
          key: "addBeforeUpdateListener",
          value: function addBeforeUpdateListener(callback) {
              return this.addListener("beforeUpdate", callback);
          }
      }, {
          key: "update",
          value: function update() {
              if (!this._firstUpdate) {
                  return;
              }
              this.dispatch("beforeUpdate", this);

              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = Object.keys(this)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var key = _step2.value;

                      if (this[key] instanceof DynamicStyleElement) {
                          var desc = this["__style__" + key];
                          var func = desc && desc.objInitializer;
                          if (func) {
                              this[key].options.style = func.call(this);
                          }
                      }
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }

              var children = [];
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                  for (var _iterator3 = this.elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var value = _step3.value;

                      if (value instanceof StyleElement) {
                          var styleElements = value.render();
                          children.push.apply(children, toConsumableArray(styleElements));
                      }
                  }
              } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                      }
                  } finally {
                      if (_didIteratorError3) {
                          throw _iteratorError3;
                      }
                  }
              }

              this.styleElement.options.children = children;
              this.styleElement.redraw();
          }
      }, {
          key: "themeProperties",
          get: function get$$1() {
              var theme = this.getTheme();
              return theme && theme.getProperties() || {};
          }
      }], [{
          key: "getInstance",
          value: function getInstance() {
              if (!this.hasOwnProperty("singletonInstance")) {
                  this.singletonInstance = new this();
              }
              return this.singletonInstance;
          }

          // Generate an instance, and also make sure to instantiate all style elements

      }, {
          key: "initialize",
          value: function initialize() {
              var styleSheet = this.getInstance();

              for (var key in this.prototype) {
                  // Just hit the getter to instantiate the style
                  if (!styleSheet[key]) {
                      console.log("This is here to prevent a bundling optimization bug");
                  }
              }
          }
      }, {
          key: "getElementName",
          value: function getElementName() {
              this.elementNameCounter = (this.elementNameCounter || 0) + 1;
              var name = this.name;
              if (this.elementNameCounter > 1) {
                  name += "-" + this.elementNameCounter;
              }
              return name;
          }
      }]);
      return StyleSheet;
  }(Dispatchable);

  // Helper class, meant to only keep one class active for an element from a set of classes
  // TODO: move to another file


  var ExclusiveClassSet = function () {
      function ExclusiveClassSet(classList, element) {
          classCallCheck(this, ExclusiveClassSet);

          // TODO: check that classList is an array (or at least iterable)
          this.classList = classList;
          this.element = element;
      }

      createClass(ExclusiveClassSet, [{
          key: "set",
          value: function set$$1(element, classInstance) {
              if (!classInstance) {
                  classInstance = element;
                  element = this.element;
              }
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                  for (var _iterator4 = this.classList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var cls = _step4.value;

                      if (cls === classInstance) {
                          element.addClass(cls);
                      } else {
                          element.removeClass(cls);
                      }
                  }
              } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                      }
                  } finally {
                      if (_didIteratorError4) {
                          throw _iteratorError4;
                      }
                  }
              }
          }
      }], [{
          key: "fromObject",
          value: function fromObject(obj, element) {
              var classList = [];
              for (var key in obj) {
                  if (obj.hasOwnProperty(key)) {
                      classList.push(obj[key]);
                  }
              }
              return Object.assign(new ExclusiveClassSet(classList, element), obj);
          }
      }]);
      return ExclusiveClassSet;
  }();

  // Primitive utils for wrapping browser info
  var Device = function () {
      function Device() {
          classCallCheck(this, Device);
      }

      createClass(Device, null, [{
          key: "isTouchDevice",
          value: function isTouchDevice() {
              if (!this.hasOwnProperty("_isTouchDevice")) {
                  this._isTouchDevice = !!("createTouch" in window.document || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 || "ontouchstart" in window);
              }
              return this._isTouchDevice;
          }
      }, {
          key: "isMobileDevice",
          value: function isMobileDevice() {
              if (!this.hasOwnProperty("_isMobileDevice")) {
                  var mobileDevices = ["Android", "webOS", "iPad", "iPhone", "iPod", "BlackBerry", "Windows Phone"];
                  this._isMobileDevice = false;
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                      for (var _iterator = mobileDevices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                          var device = _step.value;

                          if (navigator.userAgent.indexOf(device) !== -1) {
                              this._isMobileDevice = true;
                          }
                      }
                  } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                          }
                      } finally {
                          if (_didIteratorError) {
                              throw _iteratorError;
                          }
                      }
                  }
              }
              return this._isMobileDevice;
          }
      }, {
          key: "getEventTouchIdentifier",
          value: function getEventTouchIdentifier(event) {
              return Math.min.apply(Math, toConsumableArray([].concat(toConsumableArray(event.touches)).map(function (touch) {
                  return touch.identifier;
              })));
          }
      }, {
          key: "getEventTouch",
          value: function getEventTouch(event) {
              var identifier = this.getEventTouchIdentifier(event);
              return [].concat(toConsumableArray(event.touches)).find(function (touch) {
                  return touch.identifier === identifier;
              });
          }
      }, {
          key: "getEventCoord",
          value: function getEventCoord(event, axis) {
              var reference = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "client";

              var coordName = reference + axis;
              if (event[coordName]) {
                  return event[coordName];
              }
              if (event.touches) {
                  return this.getEventTouch(event)[coordName];
              }
              if (event.originalEvent) {
                  return this.getEventCoord(event.originalEvent, axis, reference);
              }

              console.warn("Couldn't find coordinates for event. Maybe wrong reference point? (client/page/screen)");
          }
      }, {
          key: "getEventX",
          value: function getEventX(event) {
              var reference = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "client";

              return this.getEventCoord(event, "X", reference);
          }
      }, {
          key: "getEventY",
          value: function getEventY(event) {
              var reference = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "client";

              return this.getEventCoord(event, "Y", reference);
          }
      }, {
          key: "getBrowser",
          value: function getBrowser() {
              // TODO: should try to use navigator
              if (!!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
                  return "Opera";
              }
              if (typeof InstallTrigger !== 'undefined') {
                  return "Firefox";
              }
              if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
                  return "Safari";
              }
              if (document.documentMode) {
                  return "Internet Explorer";
              }
              if (window.StyleMedia) {
                  return "Edge";
              }
              if (window.chrome && window.chrome.webstore) {
                  return "Chrome";
              }
              return "Unknown";
          }
      }, {
          key: "supportsEvent",
          value: function supportsEvent(eventName) {
              if (!this.cachedSupportedValues.has(eventName)) {
                  var element = document.createElement("div");
                  var onEventName = "on" + eventName;
                  var isSupported = onEventName in element;
                  if (!isSupported) {
                      element.setAttribute(onEventName, "return;");
                      isSupported = typeof element[onEventName] === "function";
                  }
                  element = null;
                  this.cachedSupportedValues.set(eventName, isSupported);
              }
              return this.cachedSupportedValues.get(eventName);
          }
      }]);
      return Device;
  }();

  Device.cachedSupportedValues = new Map();

  var Draggable = function Draggable(BaseClass) {
      return function (_BaseClass) {
          inherits(Draggable, _BaseClass);

          function Draggable() {
              var _ref;

              var _temp, _this, _ret;

              classCallCheck(this, Draggable);

              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
              }

              return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call.apply(_ref, [this].concat(args))), _this), _this._clickCallbacks = new Map(), _this._clickDragListeners = new Map(), _temp), possibleConstructorReturn(_this, _ret);
          }

          createClass(Draggable, [{
              key: "addClickListener",
              value: function addClickListener(callback) {
                  var _this2 = this;

                  if (this._clickCallbacks.has(callback)) {
                      return;
                  }
                  var callbackWrapper = function callbackWrapper() {
                      if (_this2._okForClick) {
                          callback();
                      }
                  };
                  this._clickCallbacks.set(callback, callbackWrapper);
                  get(Draggable.prototype.__proto__ || Object.getPrototypeOf(Draggable.prototype), "addClickListener", this).call(this, callbackWrapper);

                  if (this._clickDragListeners.has(callback)) {
                      return;
                  }
                  var clickDragListener = {
                      onStart: function onStart() {
                          _this2.dragForClickStarted();
                      },
                      onDrag: function onDrag() {
                          _this2.dragForClick();
                      }
                  };
                  this._clickDragListeners.set(callback, clickDragListener);
                  this.addDragListener(clickDragListener);
              }
          }, {
              key: "dragForClickStarted",
              value: function dragForClickStarted() {
                  this._okForClick = true;
              }
          }, {
              key: "dragForClick",
              value: function dragForClick() {
                  this._okForClick = false;
              }
          }, {
              key: "removeClickListener",
              value: function removeClickListener(callback) {
                  var callbackWrapper = this._clickCallbacks.get(callback);
                  if (callbackWrapper) {
                      this._clickCallbacks.delete(callback);
                      get(Draggable.prototype.__proto__ || Object.getPrototypeOf(Draggable.prototype), "removeClickListener", this).call(this, callbackWrapper);
                  }
                  if (!this._clickDragListeners) {
                      return;
                  }
                  var clickDragListener = this._clickDragListeners.get(callback);
                  if (clickDragListener) {
                      this._clickDragListeners.delete(callback);
                      this.removeDragListener(clickDragListener);
                  }
              }
          }, {
              key: "createDragListenerWrapper",
              value: function createDragListenerWrapper(listeners) {
                  var listenerWrapper = Object.assign({}, listeners);

                  listenerWrapper.onWrapperDrag = function (event) {
                      var eventX = Device.getEventX(event),
                          eventY = Device.getEventY(event);

                      var deltaX = eventX - listenerWrapper._lastX;
                      listenerWrapper._lastX = eventX;

                      var deltaY = eventY - listenerWrapper._lastY;
                      listenerWrapper._lastY = eventY;

                      listeners.onDrag(deltaX, deltaY);
                  };

                  listenerWrapper.onWrapperStart = function (event) {
                      listenerWrapper._lastX = Device.getEventX(event);
                      listenerWrapper._lastY = Device.getEventY(event);

                      if (listeners.onStart) {
                          listeners.onStart(event);
                      }

                      // TODO: Replace with our body
                      document.body.addEventListener("mousemove", listenerWrapper.onWrapperDrag);
                  };

                  listenerWrapper.onWrapperEnd = function (event) {
                      if (listeners.onEnd) {
                          listeners.onEnd(event);
                      }
                      // TODO: Replace with our body
                      document.body.removeEventListener("mousemove", listenerWrapper.onWrapperDrag);
                  };
                  return listenerWrapper;
              }
          }, {
              key: "createTouchDragListenerWrapper",
              value: function createTouchDragListenerWrapper(listeners) {
                  var listenerWrapper = Object.assign({}, listeners);

                  listenerWrapper.onWrapperDrag = function (event) {
                      var eventX = Device.getEventX(event),
                          eventY = Device.getEventY(event);

                      var deltaX = eventX - listenerWrapper._lastX;
                      listenerWrapper._lastX = eventX;

                      var deltaY = eventY - listenerWrapper._lastY;
                      listenerWrapper._lastY = eventY;

                      listeners.onDrag(deltaX, deltaY);
                  };

                  listenerWrapper.onWrapperStart = function (event) {
                      listenerWrapper._lastX = Device.getEventX(event);
                      listenerWrapper._lastY = Device.getEventY(event);
                      listenerWrapper.touchEventIdentifier = Device.getEventTouchIdentifier(event);

                      if (listeners.onStart) {
                          listeners.onStart(event);
                      }
                      event.preventDefault();

                      // TODO: Replace with our body
                      document.body.addEventListener("touchmove", listenerWrapper.onWrapperDrag);
                  };

                  listenerWrapper.onWrapperEnd = function (event) {
                      if (event.touches.length && Device.getEventTouchIdentifier(event) === listenerWrapper.touchEventIdentifier) {
                          return;
                      }
                      if (listeners.onEnd) {
                          listeners.onEnd(event);
                      }
                      // TODO: Replace with our body
                      document.body.removeEventListener("touchmove", listenerWrapper.onWrapperDrag);
                  };
                  return listenerWrapper;
              }
          }, {
              key: "addDragListener",
              value: function addDragListener(listeners) {
                  var listenerWrapper = this.createDragListenerWrapper(listeners);
                  var touchListenerWrapper = this.createTouchDragListenerWrapper(listeners);
                  this.addNodeListener("touchstart", touchListenerWrapper.onWrapperStart);
                  this.addNodeListener("mousedown", listenerWrapper.onWrapperStart);
                  // TODO: Replace with our body
                  document.body.addEventListener("touchend", touchListenerWrapper.onWrapperEnd);
                  document.body.addEventListener("mouseup", listenerWrapper.onWrapperEnd);

                  if (!this.hasOwnProperty("_dragListeners")) {
                      this._dragListeners = [];
                  }
                  this._dragListeners.push(touchListenerWrapper);
                  this._dragListeners.push(listenerWrapper);
              }
          }, {
              key: "removeDragListener",
              value: function removeDragListener(listeners) {
                  if (this._dragListeners) {
                      for (var i = this._dragListeners.length - 1; i >= 0; i -= 1) {
                          if (this._dragListeners[i].onStart === listeners.onStart && this._dragListeners[i].onDrag === listeners.onDrag && this._dragListeners[i].onEnd === listeners.onEnd) {

                              this.removeNodeListener("touchstart", this._dragListeners[i].onWrapperStart);
                              document.body.removeEventListener("touchmove", this._dragListeners[i].onWrapperDrag);
                              document.body.removeEventListener("touchmove", this._dragListeners[i].onWrapperEnd);
                              this.removeNodeListener("mousedown", this._dragListeners[i].onWrapperStart);
                              document.body.removeEventListener("mousemove", this._dragListeners[i].onWrapperDrag);
                              document.body.removeEventListener("mousemove", this._dragListeners[i].onWrapperEnd);

                              this._dragListeners.splice(i, 1);
                          }
                      }
                  }
              }
          }]);
          return Draggable;
      }(BaseClass);
  };

  var _class$1, _temp$1;

  var COLORS_BY_NAME = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
  };

  /*
   * This class contains methods for operating with colors. Its objects are kept in hsva format with normalized
   * attributes (each attribute has value between 0 and 1 inclusive), and can be converted from/to rgba.
   */
  var Color = function () {
      function Color(color) {
          classCallCheck(this, Color);

          if (color) {
              this.setColor(color);
          }
      }

      createClass(Color, [{
          key: "setColor",
          value: function setColor(color) {
              this.color = this.constructor.parseColor(color);
          }
      }, {
          key: "getColor",
          value: function getColor() {
              var rgba = this.getRgba();
              return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
          }

          /*
           * @param color A color string of the types: native name, hex3, hex6, rgb, rgba, hsl, hsla
           *              or a Color object, or a hsla color array
           */

      }], [{
          key: "parseColor",
          value: function parseColor(color) {
              if (color instanceof Color) {
                  return color.color;
              } else if (color instanceof Array) {
                  // Add the alpha parameter at the end
                  if (color.length === 3) {
                      color.push(1);
                  }
                  return color;
              }

              color = color.trim().toLowerCase();

              // Check if color is given by name
              if (COLORS_BY_NAME.hasOwnProperty(color)) {
                  color = COLORS_BY_NAME[color];
              }

              var values = [];

              // Check for hex3 (e.g. "#f00")
              var hex3 = color.match(/^#([0-9a-f]{3})$/i);
              if (hex3) {
                  values = [parseInt(hex3[1].charAt(0), 16) * 0x11, parseInt(hex3[1].charAt(1), 16) * 0x11, parseInt(hex3[1].charAt(2), 16) * 0x11, 1];
              }

              // Check for hex6 (e.g. "#ff0000")
              var hex6 = color.match(/^#([0-9a-f]{6})$/i);
              if (hex6) {
                  values = [parseInt(hex6[1].substr(0, 2), 16), parseInt(hex6[1].substr(2, 2), 16), parseInt(hex6[1].substr(4, 2), 16), 1];
              }

              // Check for rgba (e.g. "rgba(255, 0, 0, 0.5)")
              var rgba = color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+.*\d*)\s*\)$/i);
              if (rgba) {
                  values = [parseInt(rgba[1]), parseInt(rgba[2]), parseInt(rgba[3]), parseFloat(rgba[4])];
              }

              // Check for rgb (e.g. "rgb(255, 0, 0)")
              var rgb = color.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
              if (rgb) {
                  values = [parseInt(rgb[1]), parseInt(rgb[2]), parseInt(rgb[3]), 1];
              }
              return values;
          }

          // TODO: this should be implemented as a factory that generates an interpolator object, that just takes in a t

      }, {
          key: "interpolate",
          value: function interpolate(firstColor, secondColor) {
              var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;

              var firstColorArray = Color.parseColor(firstColor);
              var secondColorArray = Color.parseColor(secondColor);

              return Color.convertToRgba([parseInt(firstColorArray[0] * (1 - t) + secondColorArray[0] * t), parseInt(firstColorArray[1] * (1 - t) + secondColorArray[1] * t), parseInt(firstColorArray[2] * (1 - t) + secondColorArray[2] * t), parseInt(firstColorArray[3] * (1 - t) + secondColorArray[3] * t)]);
          }
      }, {
          key: "addOpacity",
          value: function addOpacity(color, opacity) {
              var colorArray = Color.parseColor(color);
              return Color.convertToRgba([parseInt(colorArray[0]), parseInt(colorArray[1]), parseInt(colorArray[2]), opacity]);
          }
      }, {
          key: "convertToRgba",
          value: function convertToRgba(rgba) {
              return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
          }
      }, {
          key: "isLight",
          value: function isLight(color) {
              var values = Color.parseColor(color);
              return values[0] * 0.3 + values[1] * 0.59 + values[2] * 0.11 > 188;
          }
      }]);
      return Color;
  }();

  function lighten(color, amount) {
      if (amount >= 0) {
          return Color.interpolate(color, "#fff", amount);
      } else {
          return darken(color, -amount);
      }
  }

  function darken(color, amount) {
      if (amount >= 0) {
          var rgba = Color.parseColor(Color.interpolate(color, "#000", amount));
          for (var i = 0; i < 3; i += 1) {
              var root = Math.pow(255 - rgba[i], 0.7);
              rgba[i] = parseInt(rgba[i] - root * amount);
              if (rgba[i] < 0) {
                  rgba[i] = 0;
              }
          }
          return Color.convertToRgba(rgba);
      } else {
          return lighten(color, -amount);
      }
  }

  function enhance(color, amount) {
      if (Color.isLight(color)) {
          return darken(color, amount);
      } else {
          return lighten(color, amount);
      }
  }

  function buildColors(color) {
      var dark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var colors = [];
      var darkenPercents = void 0;
      if (!dark) {
          darkenPercents = [0.1, 0, -0.2, -0.3, -0.35, -0.2, -1];
      } else if (Color.isLight(color)) {
          darkenPercents = [0.05, 0, 0.05, 0.1, 0.15, 0.3, 0.8];
      } else {
          darkenPercents = [-0.3, 0, 0.1, 0.2, 0.23, 0.1, -1];
      }
      for (var i = 0; i < darkenPercents.length; i += 1) {
          colors.push(darken(color, darkenPercents[i]));
      }
      return colors;
  }

  var ColorGenerator = (_temp$1 = _class$1 = function () {
      function ColorGenerator() {
          classCallCheck(this, ColorGenerator);
      }

      createClass(ColorGenerator, null, [{
          key: "getPersistentColor",
          value: function getPersistentColor(uniqueId) {
              if (uniqueId < this.FIRST_COLORS.length) {
                  return this.FIRST_COLORS[uniqueId];
              }
              if (!this.cache.has(uniqueId)) {
                  this.cache.set(uniqueId, this.getRandomColor());
              }
              return this.cache.get(uniqueId);
          }
      }, {
          key: "getRandomColor",
          value: function getRandomColor() {
              var allowed = "3456789ABC";
              var color = "#";
              for (var i = 0; i < 6; i += 1) {
                  color += allowed.charAt(parseInt(Math.random() * allowed.length));
              }
              return color;
          }
      }]);
      return ColorGenerator;
  }(), _class$1.FIRST_COLORS = ["#337ab7", "#5cb85c", "#f0ad4e", "#5bc0de", "#d9534f"], _class$1.cache = new Map(), _temp$1);

  function getInstance(styleSheet) {
      if (typeof styleSheet === "function") {
          if (typeof styleSheet.getInstance === "function") {
              styleSheet = styleSheet.getInstance();
          } else {
              styleSheet = styleSheet();
          }
      }
      return styleSheet;
  }

  function getInstanceForObject(obj) {
      if (!obj) {
          return null;
      }
      var styleSheet = obj.theme && obj.theme.get(obj) || obj.styleSheet;
      return getInstance(styleSheet);
  }

  var Theme = function (_Dispatchable) {
      inherits(Theme, _Dispatchable);

      function Theme() {
          var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          classCallCheck(this, Theme);

          var _this = possibleConstructorReturn(this, (Theme.__proto__ || Object.getPrototypeOf(Theme)).call(this));

          _this.styleSheetSymbol = Symbol("Theme" + name);
          _this.classSet = new Set();
          _this.styleSheetSet = new Set();
          _this.properties = {};
          _this.updateThrottler = new CallThrottler({ throttle: 50 });
          _this.updateThrottled = _this.updateThrottler.wrap(function () {
              return _this.updateStyleSheets();
          });
          window.addEventListener("resize", _this.updateThrottled);
          return _this;
      }

      createClass(Theme, [{
          key: "register",
          value: function register(cls, styleSheet) {
              cls.theme = this;
              if (!cls.styleSheet) {
                  cls.styleSheet = styleSheet;
              }
              this.set(cls, styleSheet);
          }
      }, {
          key: "set",
          value: function set$$1(cls, styleSheet) {
              cls[this.styleSheetSymbol] = styleSheet;
              this.classSet.add(cls);
          }
      }, {
          key: "get",
          value: function get$$1(cls) {
              if (!(typeof cls === "function")) {
                  cls = cls.constructor;
              }
              return cls[this.styleSheetSymbol];
          }
      }, {
          key: "getProperties",
          value: function getProperties() {
              return this.properties;
          }
      }, {
          key: "getProperty",
          value: function getProperty(key, defaultValue) {
              var value = this.properties[key] || defaultValue;
              return typeof value === "function" ? value() : value;
          }
      }, {
          key: "setProperties",
          value: function setProperties(properties) {
              var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              Object.assign(this.properties, properties);
              if (update) {
                  this.updateThrottled();
              }
          }
      }, {
          key: "setProperty",
          value: function setProperty(key, value) {
              this.properties[key] = value;
          }
      }, {
          key: "getAllStyleSheets",
          value: function getAllStyleSheets() {
              var styleSheetSet = new Set(this.styleSheetSet);
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.classSet.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var cls = _step.value;

                      styleSheetSet.add(this.get(cls));
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              return Array.from(styleSheetSet).map(function (styleSheet) {
                  if (styleSheet.getInstance) {
                      return styleSheet.getInstance();
                  }
                  return styleSheet;
              });
          }
      }, {
          key: "addStyleSheet",
          value: function addStyleSheet(styleSheet) {
              this.styleSheetSet.add(styleSheet);
          }
      }, {
          key: "removeStyleSheet",
          value: function removeStyleSheet(styleSheet) {
              this.styleSheetSet.delete(styleSheet);
          }
      }, {
          key: "updateStyleSheets",
          value: function updateStyleSheets() {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = this.getAllStyleSheets()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var styleSheet = _step2.value;

                      if (styleSheet.update) {
                          styleSheet.update();
                      }
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }
          }
      }], [{
          key: "register",
          value: function register(cls, styleSheet) {
              var _Global;

              return (_Global = this.Global).register.apply(_Global, arguments);
          }
      }, {
          key: "get",
          value: function get$$1(cls) {
              var _Global2;

              return (_Global2 = this.Global).get.apply(_Global2, arguments);
          }
      }, {
          key: "addStyleSheet",
          value: function addStyleSheet(styleSheet) {
              this.Global.addStyleSheet(styleSheet);
          }
      }, {
          key: "setProperties",
          value: function setProperties(properties) {
              var _Global3;

              (_Global3 = this.Global).setProperties.apply(_Global3, arguments);
          }
      }, {
          key: "getProperties",
          value: function getProperties() {
              return this.Global.getProperties();
          }
      }]);
      return Theme;
  }(Dispatchable);

  Theme.Global = new Theme("Global");

  UI.Element.prototype.getStyleSheet = function styleSheetGetter() {
      return getInstanceForObject(this.options) || getInstanceForObject(this.constructor);
  };

  function registerStyle(styleClass) {
      var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Theme.Global;

      return function (target) {
          theme.register(target, styleClass);
      };
  }

  StyleSheet.theme = Theme.Global;

  var _class3, _descriptor8, _descriptor9, _class5, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _class7, _descriptor15, _descriptor16, _descriptor17;

  function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  // TODO: export these properly, don't use a namespace here
  var GlobalStyle = {};

  function getTextColor(backgroundColor) {
      return enhance(backgroundColor, 1);
  }

  Theme.setProperties({
      COLOR_BACKGROUND: "#fff",
      COLOR_BACKGROUND_ALTERNATIVE: "#eee",
      COLOR_BACKGROUND_BODY: "#f8f8f8",
      COLOR_FOREGROUND_BODY: "#f2f2f2",
      COLOR_BACKGROUND_BADGE: "#777",
      COLOR_PRIMARY: "#337ab7",
      COLOR_SECONDARY: "#358ba4",
      COLOR_SUCCESS: "#5cb85c",
      COLOR_INFO: "#5bc0de",
      COLOR_WARNING: "#f0ad4e",
      COLOR_DANGER: "#d9534f",

      COLOR_LINK: "#337ab7",

      FONT_SIZE_EXTRA_SMALL: "10px",
      FONT_SIZE_SMALL: "12px",
      FONT_SIZE_DEFAULT: "14px",
      FONT_SIZE_LARGE: "17px",
      FONT_SIZE_EXTRA_LARGE: "21px",

      BASE_BORDER_RADIUS: 0,
      BASE_BOX_SHADOW: "0px 0px 10px rgb(160, 162, 168)",
      BASE_BORDER_WIDTH: 0,
      BASE_BORDER_STYLE: "solid",
      BASE_BORDER_COLOR: "#ddd",

      BUTTON_BORDER_RADIUS: "0.2rem",

      CARD_PANEL_HEADER_HEIGHT: 30,
      CARD_PANEL_HEADER_HEIGHT_LARGE: 40,
      CARD_PANEL_HEADING_PADDING: 10,
      CARD_PANEL_HEADING_PADDING_LARGE: 20,
      CARD_PANEL_TEXT_TRANSFORM: "inherit",

      DARK_BOX_SHADOW: "0px 0px 10px rgba(0, 0, 0, .6)",

      ROW_LIST_ROW_HEIGHT: 30,
      ROW_LIST_ROW_HEIGHT_LARGE: 40,
      ROW_LIST_ROW_PADDING: 10,
      ROW_LIST_ROW_PADDING_LARGE: 20,
      ROW_LIST_ROW_BORDER_WIDTH: 1,

      FONT_FAMILY_SANS_SERIF: "Lato, 'Segoe UI', 'Lucida Sans Unicode', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      FONT_FAMILY_SERIF: "serif",
      FONT_FAMILY_MONOSPACE: "'Source Code Pro', Menlo, Monaco, Consolas, 'Courier New', monospace",
      FONT_FAMILY_DEFAULT: function FONT_FAMILY_DEFAULT() {
          return Theme.getProperties().FONT_FAMILY_SANS_SERIF;
      },

      NAV_MANAGER_NAVBAR_HEIGHT: 50,
      NAV_MANAGER_BOX_SHADOW_NAVBAR: "0px 0px 10px rgb(0, 0, 0)",
      NAV_MANAGER_BOX_SHADOW_SIDE_PANEL: "0px 0px 10px #202e3e",

      MAIN_CONTAINER_EXTRA_PADDING_TOP_DESKTOP: 0,
      MAIN_CONTAINER_EXTRA_PADDING_TOP_MOBILE: 0,
      MAIN_CONTAINER_EXTRA_PADDING_BOTTOM_DESKTOP: 0,
      MAIN_CONTAINER_EXTRA_PADDING_BOTTOM_MOBILE: 0,

      FLAT_TAB_AREA_COLOR_BACKGROUND: "#f3f3f3",
      FLAT_TAB_AREA_LINE_HEIGHT: 30,
      FLAT_TAB_AREA_PADDING_SIDES: 10
  });

  var BasicLevelSizeStyleSheet = function (_StyleSheet) {
      inherits(BasicLevelSizeStyleSheet, _StyleSheet);

      function BasicLevelSizeStyleSheet() {
          classCallCheck(this, BasicLevelSizeStyleSheet);
          return possibleConstructorReturn(this, (BasicLevelSizeStyleSheet.__proto__ || Object.getPrototypeOf(BasicLevelSizeStyleSheet)).apply(this, arguments));
      }

      createClass(BasicLevelSizeStyleSheet, [{
          key: "Level",
          value: function Level$$1(level) {
              if (this[level]) {
                  return this[level];
              }
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = Object.keys(Level)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var type = _step.value;

                      if (level == Level[type]) {
                          return this[type];
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              return "";
          }
      }, {
          key: "Size",
          value: function Size$$1(size) {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = Object.keys(Size)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var type = _step2.value;

                      if (size == Size[type]) {
                          return this[type];
                      }
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }

              return "";
          }
      }]);
      return BasicLevelSizeStyleSheet;
  }(StyleSheet);

  var BasicLevelStyleSheet = function BasicLevelStyleSheet(colorToStyleFunction) {
      var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      return _class = function (_BasicLevelSizeStyleS) {
          inherits(BasicLevelStyleClass, _BasicLevelSizeStyleS);

          function BasicLevelStyleClass() {
              var _ref;

              var _temp, _this2, _ret;

              classCallCheck(this, BasicLevelStyleClass);

              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
              }

              return _ret = (_temp = (_this2 = possibleConstructorReturn(this, (_ref = BasicLevelStyleClass.__proto__ || Object.getPrototypeOf(BasicLevelStyleClass)).call.apply(_ref, [this].concat(args))), _this2), _initDefineProp(_this2, "BASE", _descriptor, _this2), _initDefineProp(_this2, "PRIMARY", _descriptor2, _this2), _initDefineProp(_this2, "SECONDARY", _descriptor3, _this2), _initDefineProp(_this2, "SUCCESS", _descriptor4, _this2), _initDefineProp(_this2, "INFO", _descriptor5, _this2), _initDefineProp(_this2, "WARNING", _descriptor6, _this2), _initDefineProp(_this2, "DANGER", _descriptor7, _this2), _temp), possibleConstructorReturn(_this2, _ret);
          }

          createClass(BasicLevelStyleClass, [{
              key: "colorStyleRule",
              value: function colorStyleRule(color, textColor) {
                  return colorToStyleFunction(color, textColor || getTextColor(color));
              }
          }]);
          return BasicLevelStyleClass;
      }(BasicLevelSizeStyleSheet), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "BASE", [styleRule], {
          enumerable: true,
          initializer: function initializer() {
              return this.colorStyleRule(this.themeProperties.COLOR_BACKGROUND);
          }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "PRIMARY", [styleRule], {
          enumerable: true,
          initializer: function initializer() {
              return this.colorStyleRule(this.themeProperties.COLOR_PRIMARY);
          }
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "SECONDARY", [styleRule], {
          enumerable: true,
          initializer: function initializer() {
              return this.colorStyleRule(this.themeProperties.COLOR_SECONDARY);
          }
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "SUCCESS", [styleRule], {
          enumerable: true,
          initializer: function initializer() {
              return this.colorStyleRule(this.themeProperties.COLOR_SUCCESS);
          }
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "INFO", [styleRule], {
          enumerable: true,
          initializer: function initializer() {
              return this.colorStyleRule(this.themeProperties.COLOR_INFO);
          }
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "WARNING", [styleRule], {
          enumerable: true,
          initializer: function initializer() {
              return this.colorStyleRule(this.themeProperties.COLOR_WARNING);
          }
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "DANGER", [styleRule], {
          enumerable: true,
          initializer: function initializer() {
              return this.colorStyleRule(this.themeProperties.COLOR_DANGER);
          }
      })), _class;
  };

  var FlexContainerStyle = (_class3 = function (_StyleSheet2) {
      inherits(FlexContainerStyle, _StyleSheet2);

      function FlexContainerStyle() {
          var _ref2;

          var _temp2, _this3, _ret2;

          classCallCheck(this, FlexContainerStyle);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this3 = possibleConstructorReturn(this, (_ref2 = FlexContainerStyle.__proto__ || Object.getPrototypeOf(FlexContainerStyle)).call.apply(_ref2, [this].concat(args))), _this3), _initDefineProp(_this3, "HORIZONTAL", _descriptor8, _this3), _initDefineProp(_this3, "VERTICAL", _descriptor9, _this3), _temp2), possibleConstructorReturn(_this3, _ret2);
      }

      createClass(FlexContainerStyle, [{
          key: "Orientation",
          value: function Orientation$$1(orientation) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                  for (var _iterator3 = Object.keys(Orientation)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var type = _step3.value;

                      if (orientation == Orientation[type]) {
                          return this[type];
                      }
                  }
              } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                      }
                  } finally {
                      if (_didIteratorError3) {
                          throw _iteratorError3;
                      }
                  }
              }
          }
      }]);
      return FlexContainerStyle;
  }(StyleSheet), (_descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "HORIZONTAL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              display: "flex",
              ">*": {
                  marginLeft: "20px",
                  flex: "1"
              },
              ">:first-child": {
                  marginLeft: "0px"
              }
          };
      }
  }), _descriptor9 = _applyDecoratedDescriptor(_class3.prototype, "VERTICAL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              display: "flex",
              flexDirection: "column",
              ">*": {
                  marginTop: "20px",
                  flex: "1"
              },
              ">:first-child": {
                  marginTop: "0px"
              }
          };
      }
  })), _class3);
  var ContainerStyle = (_class5 = function (_StyleSheet3) {
      inherits(ContainerStyle, _StyleSheet3);

      function ContainerStyle() {
          var _ref3;

          var _temp3, _this4, _ret3;

          classCallCheck(this, ContainerStyle);

          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
          }

          return _ret3 = (_temp3 = (_this4 = possibleConstructorReturn(this, (_ref3 = ContainerStyle.__proto__ || Object.getPrototypeOf(ContainerStyle)).call.apply(_ref3, [this].concat(args))), _this4), _initDefineProp(_this4, "EXTRA_SMALL", _descriptor10, _this4), _initDefineProp(_this4, "SMALL", _descriptor11, _this4), _initDefineProp(_this4, "MEDIUM", _descriptor12, _this4), _initDefineProp(_this4, "LARGE", _descriptor13, _this4), _initDefineProp(_this4, "EXTRA_LARGE", _descriptor14, _this4), _temp3), possibleConstructorReturn(_this4, _ret3);
      }

      createClass(ContainerStyle, [{
          key: "getSizeStyle",
          value: function getSizeStyle(mobilePixels, desktopPercent) {
              return {
                  margin: Device.isMobileDevice() ? "0 " + mobilePixels + "px" : "0% " + desktopPercent + "%"
              };
          }
      }, {
          key: "Size",
          value: function Size$$1(size) {
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                  for (var _iterator4 = Object.keys(Size)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var type = _step4.value;

                      if (size == Size[type]) {
                          return this[type];
                      }
                  }
              } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                      }
                  } finally {
                      if (_didIteratorError4) {
                          throw _iteratorError4;
                      }
                  }
              }
          }
      }]);
      return ContainerStyle;
  }(StyleSheet), (_descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "EXTRA_SMALL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return this.getSizeStyle(6, 15);
      }
  }), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "SMALL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return this.getSizeStyle(4, 10);
      }
  }), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "MEDIUM", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return this.getSizeStyle(4, 6);
      }
  }), _descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return this.getSizeStyle(2, 3);
      }
  }), _descriptor14 = _applyDecoratedDescriptor(_class5.prototype, "EXTRA_LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return this.getSizeStyle(2, 1);
      }
  })), _class5);
  var Utils = (_class7 = function (_StyleSheet4) {
      inherits(Utils, _StyleSheet4);

      function Utils() {
          var _ref4;

          var _temp4, _this5, _ret4;

          classCallCheck(this, Utils);

          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
          }

          return _ret4 = (_temp4 = (_this5 = possibleConstructorReturn(this, (_ref4 = Utils.__proto__ || Object.getPrototypeOf(Utils)).call.apply(_ref4, [this].concat(args))), _this5), _this5.extraTop = function () {
              return _this5.themeProperties[Device.isMobileDevice() ? "MAIN_CONTAINER_EXTRA_PADDING_TOP_MOBILE" : "MAIN_CONTAINER_EXTRA_PADDING_TOP_DESKTOP"];
          }, _initDefineProp(_this5, "fullHeight", _descriptor15, _this5), _initDefineProp(_this5, "hidden", _descriptor16, _this5), _initDefineProp(_this5, "fullContainer", _descriptor17, _this5), _temp4), possibleConstructorReturn(_this5, _ret4);
      }

      // Use this class for content that has no space between it and the navbar.


      return Utils;
  }(StyleSheet), (_descriptor15 = _applyDecoratedDescriptor(_class7.prototype, "fullHeight", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              height: "100%"
          };
      }
  }), _descriptor16 = _applyDecoratedDescriptor(_class7.prototype, "hidden", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              display: "hidden"
          };
      }
  }), _descriptor17 = _applyDecoratedDescriptor(_class7.prototype, "fullContainer", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          var _this6 = this;

          return {
              width: "100%",
              height: function height() {
                  return "calc(100% + " + _this6.extraTop() + "px)";
              },
              marginTop: function marginTop() {
                  return -_this6.extraTop();
              }
          };
      }
  })), _class7);


  GlobalStyle.FlexContainer = FlexContainerStyle.getInstance();
  GlobalStyle.Container = ContainerStyle.getInstance();
  GlobalStyle.Utils = Utils.getInstance();

  var _class$2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _dec, _class3$1, _class4, _descriptor7, _descriptor8$1, _descriptor9$1, _descriptor10$1, _descriptor11$1, _descriptor12$1, _dec2, _class6, _class7$1, _descriptor13$1, _descriptor14$1, _descriptor15$1, _descriptor16$1, _descriptor17$1, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _dec3, _class9;

  function _initDefineProp$1(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$1(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var SimpleStyledElement = function (_UI$Element) {
      inherits(SimpleStyledElement, _UI$Element);

      function SimpleStyledElement() {
          classCallCheck(this, SimpleStyledElement);
          return possibleConstructorReturn(this, (SimpleStyledElement.__proto__ || Object.getPrototypeOf(SimpleStyledElement)).apply(this, arguments));
      }

      createClass(SimpleStyledElement, [{
          key: "getLevel",
          value: function getLevel() {
              return this.options.level || this.parent && this.parent.getLevel && this.parent.getLevel();
          }
      }, {
          key: "setLevel",
          value: function setLevel(level) {
              this.updateOptions({ level: level });
          }
      }, {
          key: "getSize",
          value: function getSize() {
              return this.options.size || this.parent && this.parent.getSize && this.parent.getSize();
          }
      }, {
          key: "setSize",
          value: function setSize(size) {
              this.updateOptions({ size: size });
          }
      }]);
      return SimpleStyledElement;
  }(UI.Element);

  var IconableInterface = function (_SimpleStyledElement) {
      inherits(IconableInterface, _SimpleStyledElement);

      function IconableInterface() {
          classCallCheck(this, IconableInterface);
          return possibleConstructorReturn(this, (IconableInterface.__proto__ || Object.getPrototypeOf(IconableInterface)).apply(this, arguments));
      }

      createClass(IconableInterface, [{
          key: "render",
          value: function render() {
              return [this.beforeChildren(), this.getLabel(), get(IconableInterface.prototype.__proto__ || Object.getPrototypeOf(IconableInterface.prototype), "render", this).call(this)];
          }
      }, {
          key: "getLabel",
          value: function getLabel() {
              return this.options.label != null ? this.options.label : "";
          }
      }, {
          key: "setLabel",
          value: function setLabel(label) {
              this.updateOptions({ label: label });
          }

          //TODO: this should live in a base iconable class, of which you'd only use this.beforeChildren

      }, {
          key: "getFaIcon",
          value: function getFaIcon() {
              return this.options.faIcon;
          }
      }, {
          key: "setFaIcon",
          value: function setFaIcon(value) {
              this.options.faIcon = value;
              this.redraw();
          }
      }, {
          key: "beforeChildren",
          value: function beforeChildren() {
              if (!this.getFaIcon()) {
                  return null;
              }
              var iconOptions = {
                  className: "fa fa-" + this.getFaIcon()
              };
              if (this.getLabel()) {
                  iconOptions.style = {
                      marginRight: "5px"
                  };
              }

              return UI.createElement("span", iconOptions);
          }
      }]);
      return IconableInterface;
  }(SimpleStyledElement);

  var labelColorToStyle = function labelColorToStyle(color) {
      var colors = buildColors(color);
      var darker = {
          backgroundColor: colors[2],
          color: colors[6],
          textDecoration: "none"
      };
      var regular = {
          backgroundColor: colors[1],
          borderColor: colors[5],
          color: colors[6]
      };
      return Object.assign({}, regular, {
          ":hover": darker,
          ":hover:disabled": regular,
          ":focus": darker,
          ":active": darker
      });
  };

  var LabelStyle = (_class$2 = function (_BasicLevelStyleSheet) {
      inherits(LabelStyle, _BasicLevelStyleSheet);

      function LabelStyle() {
          var _ref;

          var _temp, _this3, _ret;

          classCallCheck(this, LabelStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this3 = possibleConstructorReturn(this, (_ref = LabelStyle.__proto__ || Object.getPrototypeOf(LabelStyle)).call.apply(_ref, [this].concat(args))), _this3), _initDefineProp$1(_this3, "DEFAULT", _descriptor, _this3), _initDefineProp$1(_this3, "EXTRA_SMALL", _descriptor2, _this3), _initDefineProp$1(_this3, "SMALL", _descriptor3, _this3), _initDefineProp$1(_this3, "MEDIUM", _descriptor4, _this3), _initDefineProp$1(_this3, "LARGE", _descriptor5, _this3), _initDefineProp$1(_this3, "EXTRA_LARGE", _descriptor6, _this3), _temp), possibleConstructorReturn(_this3, _ret);
      }

      return LabelStyle;
  }(BasicLevelStyleSheet(labelColorToStyle)), (_descriptor = _applyDecoratedDescriptor$1(_class$2.prototype, "DEFAULT", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return [{
              fontWeight: "bold",
              border: "0.1em solid transparent",
              padding: "0.07em 0.4em",
              borderRadius: "0.3em",
              textAlign: "center",
              whiteSpace: "nowrap",
              verticalAlign: "bottom",
              lineHeight: 4 / 3 + "",
              display: "inline-block",
              touchAction: "manipulation",
              ":disabled": {
                  opacity: "0.7",
                  cursor: "not-allowed"
              }
          }, {
              "font-size": "12px"
          }, this.colorStyleRule(this.themeProperties.COLOR_BACKGROUND_BADGE)];
      }
  }), _descriptor2 = _applyDecoratedDescriptor$1(_class$2.prototype, "EXTRA_SMALL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "10px",
              padding: "0.05em 0.2em",
              borderWidth: "0.05em"
          };
      }
  }), _descriptor3 = _applyDecoratedDescriptor$1(_class$2.prototype, "SMALL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "10px"
          };
      }
  }), _descriptor4 = _applyDecoratedDescriptor$1(_class$2.prototype, "MEDIUM", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {};
      }
  }), _descriptor5 = _applyDecoratedDescriptor$1(_class$2.prototype, "LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "14px"
          };
      }
  }), _descriptor6 = _applyDecoratedDescriptor$1(_class$2.prototype, "EXTRA_LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "17px",
              padding: "0.05em 0.2em"
          };
      }
  })), _class$2);

  var Label = (_dec = registerStyle(LabelStyle), _dec(_class3$1 = function (_UI$Primitive) {
      inherits(Label, _UI$Primitive);

      function Label() {
          classCallCheck(this, Label);
          return possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
      }

      createClass(Label, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.DEFAULT);

              if (this.getSize()) {
                  attr.addClass(this.styleSheet.Size(this.getSize()));
              }

              if (this.getLevel()) {
                  attr.addClass(this.styleSheet.Level(this.getLevel()));
              }
          }
      }]);
      return Label;
  }(UI.Primitive(IconableInterface, "span"))) || _class3$1);


  var badgeColorToStyle = function badgeColorToStyle(color) {
      var colors = buildColors(color);
      return {
          backgroundColor: colors[1],
          borderColor: colors[5],
          color: colors[6]
      };
  };

  var BadgeStyle = (_class4 = function (_BasicLevelStyleSheet2) {
      inherits(BadgeStyle, _BasicLevelStyleSheet2);

      function BadgeStyle() {
          var _ref2;

          var _temp2, _this5, _ret2;

          classCallCheck(this, BadgeStyle);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this5 = possibleConstructorReturn(this, (_ref2 = BadgeStyle.__proto__ || Object.getPrototypeOf(BadgeStyle)).call.apply(_ref2, [this].concat(args))), _this5), _initDefineProp$1(_this5, "DEFAULT", _descriptor7, _this5), _initDefineProp$1(_this5, "EXTRA_SMALL", _descriptor8$1, _this5), _initDefineProp$1(_this5, "SMALL", _descriptor9$1, _this5), _initDefineProp$1(_this5, "MEDIUM", _descriptor10$1, _this5), _initDefineProp$1(_this5, "LARGE", _descriptor11$1, _this5), _initDefineProp$1(_this5, "EXTRA_LARGE", _descriptor12$1, _this5), _temp2), possibleConstructorReturn(_this5, _ret2);
      }

      return BadgeStyle;
  }(BasicLevelStyleSheet(badgeColorToStyle)), (_descriptor7 = _applyDecoratedDescriptor$1(_class4.prototype, "DEFAULT", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return [{
              display: "inline-block",
              padding: "0.25em 0.55em",
              fontWeight: "700",
              lineHeight: "1",
              color: "#fff",
              textAlign: "center",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
              backgroundColor: "#777",
              borderRadius: "0.8em"
          }, {
              "font-size": "12px"
          }, this.colorStyleRule(this.themeProperties.COLOR_BACKGROUND_BADGE)];
      }
  }), _descriptor8$1 = _applyDecoratedDescriptor$1(_class4.prototype, "EXTRA_SMALL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "10px",
              padding: "0.1em 0.2em"
          };
      }
  }), _descriptor9$1 = _applyDecoratedDescriptor$1(_class4.prototype, "SMALL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "10px"
          };
      }
  }), _descriptor10$1 = _applyDecoratedDescriptor$1(_class4.prototype, "MEDIUM", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {};
      }
  }), _descriptor11$1 = _applyDecoratedDescriptor$1(_class4.prototype, "LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "14px"
          };
      }
  }), _descriptor12$1 = _applyDecoratedDescriptor$1(_class4.prototype, "EXTRA_LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "17px",
              padding: "0.1em 0.2em"
          };
      }
  })), _class4);

  var Badge = (_dec2 = registerStyle(BadgeStyle), _dec2(_class6 = function (_UI$Primitive2) {
      inherits(Badge, _UI$Primitive2);

      function Badge() {
          classCallCheck(this, Badge);
          return possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
      }

      createClass(Badge, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.DEFAULT);

              if (this.getSize()) {
                  attr.addClass(this.styleSheet.Size(this.getSize()));
              }

              if (this.getLevel()) {
                  attr.addClass(this.styleSheet.Level(this.getLevel()));
              }
          }
      }]);
      return Badge;
  }(UI.Primitive(IconableInterface, "span"))) || _class6);


  var progressBarColorToStyle = function progressBarColorToStyle(color) {
      var colors = buildColors(color);
      return {
          backgroundColor: colors[1]
      };
  };

  var ProgressBarStyle = (_class7$1 = function (_BasicLevelStyleSheet3) {
      inherits(ProgressBarStyle, _BasicLevelStyleSheet3);

      function ProgressBarStyle() {
          var _ref3;

          var _temp3, _this7, _ret3;

          classCallCheck(this, ProgressBarStyle);

          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
          }

          return _ret3 = (_temp3 = (_this7 = possibleConstructorReturn(this, (_ref3 = ProgressBarStyle.__proto__ || Object.getPrototypeOf(ProgressBarStyle)).call.apply(_ref3, [this].concat(args))), _this7), _initDefineProp$1(_this7, "container", _descriptor13$1, _this7), _initDefineProp$1(_this7, "DEFAULT", _descriptor14$1, _this7), _initDefineProp$1(_this7, "striped", _descriptor15$1, _this7), _initDefineProp$1(_this7, "active", _descriptor16$1, _this7), _initDefineProp$1(_this7, "EXTRA_SMALL", _descriptor17$1, _this7), _initDefineProp$1(_this7, "SMALL", _descriptor18, _this7), _initDefineProp$1(_this7, "MEDIUM", _descriptor19, _this7), _initDefineProp$1(_this7, "LARGE", _descriptor20, _this7), _initDefineProp$1(_this7, "EXTRA_LARGE", _descriptor21, _this7), _temp3), possibleConstructorReturn(_this7, _ret3);
      }

      return ProgressBarStyle;
  }(BasicLevelStyleSheet(progressBarColorToStyle)), (_descriptor13$1 = _applyDecoratedDescriptor$1(_class7$1.prototype, "container", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              height: "20px",
              marginBottom: "20px",
              overflow: "hidden",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
              boxShadow: "inset 0 1px 2px rgba(0, 0, 0, .1)"
          };
      }
  }), _descriptor14$1 = _applyDecoratedDescriptor$1(_class7$1.prototype, "DEFAULT", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return [{
              float: "left",
              width: "0",
              height: "100%",
              lineHeight: "20px",
              color: "#fff",
              textAlign: "center",
              backgroundColor: "#337ab7",
              boxShadow: "inset 0 -1px 0 rgba(0, 0, 0, .15)",
              transition: "width .6s ease",
              fontColor: "#ffffff"
          }, {
              fontSize: "12px"
          }, this.colorStyleRule(this.themeProperties.COLOR_PRIMARY)];
      }
  }), _descriptor15$1 = _applyDecoratedDescriptor$1(_class7$1.prototype, "striped", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              backgroundImage: "linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)",
              backgroundSize: "40px 40px"
          };
      }
  }), _descriptor16$1 = _applyDecoratedDescriptor$1(_class7$1.prototype, "active", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              animation: "progress-bar-stripes 2s linear infinite"
          };
      }
  }), _descriptor17$1 = _applyDecoratedDescriptor$1(_class7$1.prototype, "EXTRA_SMALL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "8px"
          };
      }
  }), _descriptor18 = _applyDecoratedDescriptor$1(_class7$1.prototype, "SMALL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "10px"
          };
      }
  }), _descriptor19 = _applyDecoratedDescriptor$1(_class7$1.prototype, "MEDIUM", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {};
      }
  }), _descriptor20 = _applyDecoratedDescriptor$1(_class7$1.prototype, "LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "14px"
          };
      }
  }), _descriptor21 = _applyDecoratedDescriptor$1(_class7$1.prototype, "EXTRA_LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "17px",
              padding: "0.1em 0.2em"
          };
      }
  })), _class7$1);
  var ProgressBar = (_dec3 = registerStyle(ProgressBarStyle), _dec3(_class9 = function (_SimpleStyledElement2) {
      inherits(ProgressBar, _SimpleStyledElement2);

      function ProgressBar() {
          classCallCheck(this, ProgressBar);
          return possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
      }

      createClass(ProgressBar, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.container);
          }
      }, {
          key: "render",
          value: function render() {
              var valueInPercent = (this.options.value || 0) * 100;
              var orientation = Orientation.HORIZONTAL;
              if (this.options.hasOwnProperty("orientation")) {
                  orientation = this.options.orientation;
              }
              var barStyle = void 0;
              if (orientation === Orientation.HORIZONTAL) {
                  barStyle = {
                      width: valueInPercent + "%",
                      height: this.options.height + "px"
                  };
              } else {
                  barStyle = {
                      height: valueInPercent + "%",
                      width: "5px"
                  };
              }
              var barOptions = {
                  className: this.styleSheet.DEFAULT,
                  style: barStyle
              };

              if (this.options.disableTransition) {
                  Object.assign(barOptions.style, {
                      transition: "none"
                  });
              }

              if (this.options.level) {
                  barOptions.className += " " + this.styleSheet.Level(this.getLevel());
              }
              if (this.options.striped) {
                  barOptions.className += " " + this.styleSheet.striped;
              }
              if (this.options.active) {
                  barOptions.className += " " + this.styleSheet.active;
              }
              if (this.options.color) {
                  barOptions.style.backgroundColor = this.options.color;
              }

              return UI.createElement(
                  "div",
                  barOptions,
                  UI.createElement(
                      "span",
                      null,
                      this.options.label
                  )
              );
          }
      }, {
          key: "set",
          value: function set$$1(value) {
              if (value < 0) value = 0;else if (value > 1) value = 1;
              this.options.value = value;
              this.redraw();
          }
      }]);
      return ProgressBar;
  }(SimpleStyledElement)) || _class9);

  // TODO: this file existed to hold generic classes in a period of fast prototyping, has a lot of old code

  // A very simple class, all this does is implement the `getTitle()` method

  var Panel = function (_UI$Element) {
      inherits(Panel, _UI$Element);

      function Panel() {
          classCallCheck(this, Panel);
          return possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
      }

      createClass(Panel, [{
          key: "getTitle",
          value: function getTitle() {
              return this.options.title;
          }
      }]);
      return Panel;
  }(UI.Element);

  var SlideBar = function (_Draggable) {
      inherits(SlideBar, _Draggable);

      function SlideBar() {
          classCallCheck(this, SlideBar);
          return possibleConstructorReturn(this, (SlideBar.__proto__ || Object.getPrototypeOf(SlideBar)).apply(this, arguments));
      }

      createClass(SlideBar, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  value: 0
              };
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.setStyle("display", "inline-block");
              attr.setStyle("position", "relative");
              attr.setStyle("cursor", "pointer");
          }
      }, {
          key: "getSliderValue",
          value: function getSliderValue() {
              return this.options.value * this.options.size - this.options.barSize / 2;
          }
      }, {
          key: "render",
          value: function render() {
              return [UI.createElement(ProgressBar, { ref: "progressBar", active: "true", value: this.options.value, disableTransition: true,
                  orientation: this.getOrientation(),
                  style: Object.assign({
                      position: "relative"
                  }, this.getProgressBarStyle())
              }), UI.createElement("div", { ref: "slider", style: Object.assign({
                      backgroundColor: "black",
                      position: "absolute"
                  }, this.getSliderStyle()) })];
          }
      }, {
          key: "setValue",
          value: function setValue(value) {
              value = Math.max(value, 0);
              value = Math.min(value, 1);

              this.options.value = value;
              this.progressBar.set(this.options.value);
              this.slider.setStyle(this.getOrientationAttribute(), this.getSliderValue() + "px");

              this.dispatch("change", this.options.value);
          }
      }, {
          key: "getValue",
          value: function getValue() {
              return this.options.value;
          }
      }, {
          key: "onMount",
          value: function onMount() {
              this.addDragListener(this.getDragConfig());
          }
      }]);
      return SlideBar;
  }(Draggable(UI.Element));

  var HorizontalSlideBar = function (_SlideBar) {
      inherits(HorizontalSlideBar, _SlideBar);

      function HorizontalSlideBar() {
          classCallCheck(this, HorizontalSlideBar);
          return possibleConstructorReturn(this, (HorizontalSlideBar.__proto__ || Object.getPrototypeOf(HorizontalSlideBar)).apply(this, arguments));
      }

      createClass(HorizontalSlideBar, [{
          key: "setOptions",
          value: function setOptions(options) {
              options.size = options.size || options.width || 100;
              options.barSize = options.barSize || options.barWidth || 5;
              get(HorizontalSlideBar.prototype.__proto__ || Object.getPrototypeOf(HorizontalSlideBar.prototype), "setOptions", this).call(this, options);
          }
      }, {
          key: "getProgressBarStyle",
          value: function getProgressBarStyle() {
              return {
                  height: "5px",
                  width: this.options.size + "px",
                  top: "15px"
              };
          }
      }, {
          key: "getSliderStyle",
          value: function getSliderStyle() {
              return {
                  width: this.options.barSize + "px",
                  height: "20px",
                  left: this.getSliderValue() + "px",
                  top: "7.5px"
              };
          }
      }, {
          key: "getOrientationAttribute",
          value: function getOrientationAttribute() {
              return "left";
          }
      }, {
          key: "getOrientation",
          value: function getOrientation() {
              return Orientation.HORIZONTAL;
          }
      }, {
          key: "getDragConfig",
          value: function getDragConfig() {
              var _this4 = this;

              return {
                  onStart: function onStart(event) {
                      _this4.setValue((Device.getEventX(event) - getOffset(_this4.progressBar)[_this4.getOrientationAttribute()]) / _this4.options.size);
                  },
                  onDrag: function onDrag(deltaX, deltaY) {
                      _this4.setValue(_this4.options.value + deltaX / _this4.options.size);
                  }
              };
          }
      }]);
      return HorizontalSlideBar;
  }(SlideBar);

  var VerticalSlideBar = function (_SlideBar2) {
      inherits(VerticalSlideBar, _SlideBar2);

      function VerticalSlideBar() {
          classCallCheck(this, VerticalSlideBar);
          return possibleConstructorReturn(this, (VerticalSlideBar.__proto__ || Object.getPrototypeOf(VerticalSlideBar)).apply(this, arguments));
      }

      createClass(VerticalSlideBar, [{
          key: "setOptions",
          value: function setOptions(options) {
              options.size = options.size || options.height || 100;
              options.barSize = options.barSize || options.barHeight || 5;
              get(VerticalSlideBar.prototype.__proto__ || Object.getPrototypeOf(VerticalSlideBar.prototype), "setOptions", this).call(this, options);
          }
      }, {
          key: "getProgressBarStyle",
          value: function getProgressBarStyle() {
              return {
                  height: this.options.size + "px",
                  width: "5px",
                  left: "15px"
              };
          }
      }, {
          key: "getSliderStyle",
          value: function getSliderStyle() {
              return {
                  height: this.options.barSize + "px",
                  width: "20px",
                  top: this.getSliderValue() + "px",
                  left: "7.5px"
              };
          }
      }, {
          key: "getOrientationAttribute",
          value: function getOrientationAttribute() {
              return "top";
          }
      }, {
          key: "getOrientation",
          value: function getOrientation() {
              return Orientation.VERTICAL;
          }
      }, {
          key: "getDragConfig",
          value: function getDragConfig() {
              var _this6 = this;

              return {
                  onStart: function onStart(event) {
                      _this6.setValue((Device.getEventY(event) - getOffset(_this6.progressBar)[_this6.getOrientationAttribute()]) / _this6.options.size);
                  },
                  onDrag: function onDrag(deltaX, deltaY) {
                      _this6.setValue(_this6.options.value + deltaY / _this6.options.size);
                  }
              };
          }
      }]);
      return VerticalSlideBar;
  }(SlideBar);

  var Link = function (_UI$Primitive) {
      inherits(Link, _UI$Primitive);

      function Link() {
          classCallCheck(this, Link);
          return possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
      }

      createClass(Link, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              // TODO: do we want this as a default?
              attr.setStyle("cursor", "pointer");
          }
      }, {
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  newTab: false
              };
          }
      }, {
          key: "setOptions",
          value: function setOptions(options) {
              get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), "setOptions", this).call(this, options);

              if (this.options.newTab) {
                  this.options.target = "_blank";
              }

              return options;
          }
      }, {
          key: "render",
          value: function render() {
              if (this.options.value) {
                  return [this.options.value];
              }
              return get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), "render", this).call(this);
          }
      }]);
      return Link;
  }(UI.Primitive("a"));

  var Image = function (_UI$Primitive2) {
      inherits(Image, _UI$Primitive2);

      function Image() {
          classCallCheck(this, Image);
          return possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
      }

      return Image;
  }(UI.Primitive("img"));

  // Beware coder: If you ever use this class, you should have a well documented reason


  var RawHTML = function (_UI$Element2) {
      inherits(RawHTML, _UI$Element2);

      function RawHTML() {
          classCallCheck(this, RawHTML);
          return possibleConstructorReturn(this, (RawHTML.__proto__ || Object.getPrototypeOf(RawHTML)).apply(this, arguments));
      }

      createClass(RawHTML, [{
          key: "getInnerHTML",
          value: function getInnerHTML() {
              return this.options.innerHTML || this.options.__innerHTML;
          }
      }, {
          key: "redraw",
          value: function redraw() {
              this.node.innerHTML = this.getInnerHTML();
              this.applyNodeAttributes();
              this.applyRef();
          }
      }]);
      return RawHTML;
  }(UI.Element);

  var ViewportMeta = function (_UI$Primitive3) {
      inherits(ViewportMeta, _UI$Primitive3);

      function ViewportMeta() {
          classCallCheck(this, ViewportMeta);
          return possibleConstructorReturn(this, (ViewportMeta.__proto__ || Object.getPrototypeOf(ViewportMeta)).apply(this, arguments));
      }

      createClass(ViewportMeta, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  scale: this.getDesiredScale(),
                  initialScale: 1,
                  maximumScale: 1
              };
          }
      }, {
          key: "getDesiredScale",
          value: function getDesiredScale() {
              var MIN_WIDTH = this.options.minDeviceWidth;
              return MIN_WIDTH ? Math.min(window.screen.availWidth, MIN_WIDTH) / MIN_WIDTH : 1;
          }
      }, {
          key: "getContent",
          value: function getContent() {
              var rez = "width=device-width";
              rez += ",initial-scale=" + this.options.scale;
              rez += ",maximum-scale=" + this.options.scale;
              rez += ",user-scalable=no";
              return rez;
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.setAttribute("name", "viewport");
              attr.setAttribute("content", this.getContent());
          }
      }, {
          key: "maybeUpdate",
          value: function maybeUpdate() {
              var desiredScale = this.getDesiredScale();
              if (desiredScale != this.options.scale) {
                  this.updateOptions({ scale: desiredScale });
              }
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this11 = this;

              window.addEventListener("resize", function () {
                  return _this11.maybeUpdate();
              });
          }
      }]);
      return ViewportMeta;
  }(UI.Primitive("meta"));

  var TemporaryMessageArea = function (_UI$Primitive4) {
      inherits(TemporaryMessageArea, _UI$Primitive4);

      function TemporaryMessageArea() {
          classCallCheck(this, TemporaryMessageArea);
          return possibleConstructorReturn(this, (TemporaryMessageArea.__proto__ || Object.getPrototypeOf(TemporaryMessageArea)).apply(this, arguments));
      }

      createClass(TemporaryMessageArea, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  margin: 10
              };
          }
      }, {
          key: "render",
          value: function render() {
              return [UI.createElement(UI.TextElement, { ref: "textElement", value: this.options.value || "" })];
          }
      }, {
          key: "getNodeAttributes",
          value: function getNodeAttributes() {
              var attr = get(TemporaryMessageArea.prototype.__proto__ || Object.getPrototypeOf(TemporaryMessageArea.prototype), "getNodeAttributes", this).call(this);
              // TODO: nope, not like this
              attr.setStyle("marginLeft", this.options.margin + "px");
              attr.setStyle("marginRight", this.options.margin + "px");
              return attr;
          }
      }, {
          key: "setValue",
          value: function setValue(value) {
              this.options.value = value;
              this.textElement.setValue(value);
          }
      }, {
          key: "setColor",
          value: function setColor(color) {
              this.setStyle("color", color);
          }
      }, {
          key: "showMessage",
          value: function showMessage(message) {
              var _this13 = this;

              var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "black";
              var displayDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

              this.setColor(color);
              this.clear();
              this.setValue(message);
              if (displayDuration) {
                  this.clearValueTimeout = setTimeout(function () {
                      return _this13.clear();
                  }, displayDuration);
              }
          }
      }, {
          key: "clear",
          value: function clear() {
              this.setValue("");
              if (this.clearValueTimeout) {
                  clearTimeout(this.clearValueTimeout);
                  this.clearValueTimeout = null;
              }
          }
      }]);
      return TemporaryMessageArea;
  }(UI.Primitive("span"));

  // Just putting in a lot of methods, to try to think of an interface


  var ScrollableMixin = function (_UI$Element3) {
      inherits(ScrollableMixin, _UI$Element3);

      function ScrollableMixin() {
          classCallCheck(this, ScrollableMixin);
          return possibleConstructorReturn(this, (ScrollableMixin.__proto__ || Object.getPrototypeOf(ScrollableMixin)).apply(this, arguments));
      }

      createClass(ScrollableMixin, [{
          key: "getDesiredExcessHeightTop",
          value: function getDesiredExcessHeightTop() {
              return 600;
          }
      }, {
          key: "getDesiredExcessHeightBottom",
          value: function getDesiredExcessHeightBottom() {
              return 600;
          }
      }, {
          key: "getHeightScrollPercent",
          value: function getHeightScrollPercent() {
              var scrollHeight = this.node.scrollHeight;
              var height = this.node.clientHeight;
              if (scrollHeight === height) {
                  return 0;
              }
              return this.node.scrollTop / (scrollHeight - height);
          }
      }, {
          key: "getExcessTop",
          value: function getExcessTop() {
              return this.node.scrollTop;
          }
      }, {
          key: "getExcessBottom",
          value: function getExcessBottom() {
              var scrollHeight = this.node.scrollHeight;
              var height = this.node.clientHeight;
              return scrollHeight - height - this.node.scrollTop;
          }
      }, {
          key: "haveExcessTop",
          value: function haveExcessTop() {
              return this.getExcessTop() > this.getDesiredExcessHeightTop();
          }
      }, {
          key: "haveExcessBottom",
          value: function haveExcessBottom() {
              return this.getExcessBottom() > this.getDesiredExcessHeightBottom();
          }
      }, {
          key: "popChildTop",
          value: function popChildTop() {
              this.eraseChildAtIndex(0);
          }
      }, {
          key: "popChildBottom",
          value: function popChildBottom() {
              this.eraseChildAtIndex(this.children.length - 1);
          }
      }, {
          key: "removeExcessTop",
          value: function removeExcessTop() {
              while (this.haveExcessTop()) {
                  this.popChildTop();
              }
          }
      }, {
          key: "removeExcessBottom",
          value: function removeExcessBottom() {
              while (this.haveExcessBottom()) {
                  this.popChildBottom();
              }
          }
      }, {
          key: "pushChildTop",
          value: function pushChildTop(element) {
              var removeExcessBottom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              if (removeExcessBottom) {
                  this.removeExcessBottom();
              }
              this.insertChild(element, 0);
          }
      }, {
          key: "pushChildBottom",
          value: function pushChildBottom(element) {
              var removeExcessTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              if (removeExcessTop) {
                  this.removeExcessTop();
              }
              this.appendChild(element);
              this.appendChild(element);
          }
      }, {
          key: "saveScrollPosition",
          value: function saveScrollPosition() {
              // If at top or bottom, save that
              // If anywhere in the middle, save the offset of the first child with a positive offset, and keep that constant
              this.options.scrollTop = this.node.scrollTop;
              var maxScrollTop = this.node.scrollHeight - this.node.clientHeight;
              this.options.scrollInfo = {
                  scrollAtTop: this.options.scrollTop === 0,
                  scrollAtBottom: this.options.scrollTop === maxScrollTop
                  // visibleChildrenOffsets: {}
              };
          }
      }, {
          key: "applyScrollPosition",
          value: function applyScrollPosition() {
              this.node.scrollTop = this.options.scrollTop || this.node.scrollTop;
          }
      }, {
          key: "scrollToHeight",
          value: function scrollToHeight(height) {
              this.node.scrollTop = height;
          }
      }, {
          key: "scrollToTop",
          value: function scrollToTop() {
              this.scrollToHeight(0);
          }
      }, {
          key: "scrollToBottom",
          value: function scrollToBottom() {
              this.scrollToHeight(this.node.scrollHeight);
          }
      }]);
      return ScrollableMixin;
  }(UI.Element);

  //TODO: this class would need some binary searches

  var InfiniteScrollable = function (_ScrollableMixin) {
      inherits(InfiniteScrollable, _ScrollableMixin);

      function InfiniteScrollable() {
          classCallCheck(this, InfiniteScrollable);
          return possibleConstructorReturn(this, (InfiniteScrollable.__proto__ || Object.getPrototypeOf(InfiniteScrollable)).apply(this, arguments));
      }

      createClass(InfiniteScrollable, [{
          key: "setOptions",
          value: function setOptions(options) {
              options = Object.assign({
                  entries: [],
                  entryComparator: function entryComparator(a, b) {
                      return a.id - b.id;
                  },
                  firstRenderedEntry: 0,
                  lastRenderedEntry: -1
              }, options);
              get(InfiniteScrollable.prototype.__proto__ || Object.getPrototypeOf(InfiniteScrollable.prototype), "setOptions", this).call(this, options);
              // TODO: TEMP for testing
              this.options.children = [];
              if (this.options.staticTop) {
                  this.options.children.push(this.options.staticTop);
              }
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.options.entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var entry = _step.value;

                      this.options.children.push(this.renderEntry(entry));
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }
          }
      }, {
          key: "getFirstVisibleIndex",
          value: function getFirstVisibleIndex() {}
      }, {
          key: "getLastVisibleIndex",
          value: function getLastVisibleIndex() {}
      }, {
          key: "renderEntry",
          value: function renderEntry(entry) {
              if (this.options.entryRenderer) {
                  return this.options.entryRenderer(entry);
              } else {
                  console.error("You need to pass option entryRenderer or overwrite the renderEntry method");
              }
          }
      }, {
          key: "pushEntry",
          value: function pushEntry(entry) {
              this.insertEntry(entry, this.options.entries.length);
          }
      }, {
          key: "insertEntry",
          value: function insertEntry(entry, index) {
              var entries = this.options.entries;
              if (index == null) {
                  index = 0;
                  while (index < entries.length && this.options.entryComparator(entries[index], entry) <= 0) {
                      index++;
                  }
              }
              entries.splice(index, 0, entry);

              // Adjust to the children
              if (this.options.staticTop) {
                  index += 1;
              }

              // TODO: only if in the rendered range, insert in options.children;
              var uiElement = this.renderEntry(entry);
              this.insertChild(uiElement, index);
          }
      }]);
      return InfiniteScrollable;
  }(ScrollableMixin);

  var TimePassedSpan = function (_UI$Primitive5) {
      inherits(TimePassedSpan, _UI$Primitive5);

      function TimePassedSpan() {
          classCallCheck(this, TimePassedSpan);
          return possibleConstructorReturn(this, (TimePassedSpan.__proto__ || Object.getPrototypeOf(TimePassedSpan)).apply(this, arguments));
      }

      createClass(TimePassedSpan, [{
          key: "render",
          value: function render() {
              return this.getTimeDeltaDisplay(this.options.timeStamp);
          }
      }, {
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  style: {
                      color: "#aaa"
                  }
              };
          }
      }, {
          key: "getTimeDeltaDisplay",
          value: function getTimeDeltaDisplay(timeStamp) {
              var timeNow = Date.now();
              var timeDelta = parseInt((timeNow - timeStamp * 1000) / 1000);
              var timeUnitsInSeconds = [31556926, 2629743, 604800, 86400, 3600, 60];
              var timeUnits = ["year", "month", "week", "day", "hour", "minute"];
              if (timeDelta < 0) {
                  timeDelta = 0;
              }
              for (var i = 0; i < timeUnits.length; i += 1) {
                  var value = parseInt(timeDelta / timeUnitsInSeconds[i]);
                  if (timeUnitsInSeconds[i] <= timeDelta) {
                      return value + " " + timeUnits[i] + (value > 1 ? "s" : "") + " ago";
                  }
              }
              return "Few seconds ago";
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this17 = this;

              this._updateListener = this.constructor.addIntervalListener(function () {
                  _this17.redraw();
              });
          }
      }, {
          key: "onUnmount",
          value: function onUnmount() {
              this._updateListener && this._updateListener.remove();
          }
      }], [{
          key: "addIntervalListener",
          value: function addIntervalListener(callback) {
              var _this18 = this;

              if (!this.updateFunction) {
                  this.TIME_DISPATCHER = new Dispatchable();
                  this.updateFunction = setInterval(function () {
                      _this18.TIME_DISPATCHER.dispatch("updateTimeValue");
                  }, 5000);
              }
              return this.TIME_DISPATCHER.addListener("updateTimeValue", callback);
          }
      }]);
      return TimePassedSpan;
  }(UI.Primitive("span"));

  var _class$3, _descriptor$1, _descriptor2$1, _descriptor3$1;

  function _initDefineProp$2(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$2(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var InputStyle = (_class$3 = function (_StyleSheet) {
      inherits(InputStyle, _StyleSheet);

      function InputStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, InputStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = InputStyle.__proto__ || Object.getPrototypeOf(InputStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$2(_this, "inputElement", _descriptor$1, _this), _initDefineProp$2(_this, "checkboxInput", _descriptor2$1, _this), _initDefineProp$2(_this, "select", _descriptor3$1, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return InputStyle;
  }(StyleSheet), (_descriptor$1 = _applyDecoratedDescriptor$2(_class$3.prototype, "inputElement", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
              padding: "0.4em 0.54em",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "90%",
              ":focus": {
                  outline: "0",
                  borderColor: "#66afe9",
                  boxShadow: "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)"
              }
          };
      }
  }), _descriptor2$1 = _applyDecoratedDescriptor$2(_class$3.prototype, "checkboxInput", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              marginLeft: "0.2em",
              display: "inline-block",
              width: "initial !important",
              marginRight: "0.5em",
              marginBottom: "-.1em",
              height: "1em"
          };
      }
  }), _descriptor3$1 = _applyDecoratedDescriptor$2(_class$3.prototype, "select", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              height: "2.12em"
          };
      }
  })), _class$3);

  var _dec$1, _class$4;

  var InputableElement = (_dec$1 = registerStyle(InputStyle), _dec$1(_class$4 = function (_UI$Element) {
      inherits(InputableElement, _UI$Element);

      function InputableElement() {
          classCallCheck(this, InputableElement);
          return possibleConstructorReturn(this, (InputableElement.__proto__ || Object.getPrototypeOf(InputableElement)).apply(this, arguments));
      }

      createClass(InputableElement, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              get(InputableElement.prototype.__proto__ || Object.getPrototypeOf(InputableElement.prototype), "extraNodeAttributes", this).call(this, attr);
              attr.addClass(this.styleSheet.inputElement);
          }
      }]);
      return InputableElement;
  }(UI.Element)) || _class$4);

  var Input = function (_UI$Primitive) {
      inherits(Input, _UI$Primitive);

      function Input() {
          classCallCheck(this, Input);
          return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
      }

      createClass(Input, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              var type = this.getInputType();
              if (type) {
                  attr.setAttribute("type", type);
              }
          }
      }, {
          key: "redraw",
          value: function redraw() {
              get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), "redraw", this).call(this);
              if (this.options.hasOwnProperty("value")) {
                  this.setValue(this.options.value);
              }
          }
      }, {
          key: "getValue",
          value: function getValue() {
              return this.node.value;
          }
      }, {
          key: "setValue",
          value: function setValue(newValue) {
              this.node.value = newValue;
          }
      }, {
          key: "getInputType",
          value: function getInputType() {
              // Must be overloaded
              return null;
          }
      }, {
          key: "onInput",
          value: function onInput(callback) {
              this.addNodeListener("input change", callback);
          }
      }, {
          key: "onKeyUp",
          value: function onKeyUp(callback) {
              this.addNodeListener("keyup", callback);
          }
      }]);
      return Input;
  }(UI.Primitive(InputableElement, "input"));

  Input.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["autocomplete"], ["autofocus", { noValue: true }], ["formaction"], ["maxLength", { domName: "maxlength" }], ["minLength", { domName: "minlength" }], ["name"], ["placeholder"], ["readonly"], ["required"], ["value"]]);

  var SubmitInput = function (_Input) {
      inherits(SubmitInput, _Input);

      function SubmitInput() {
          classCallCheck(this, SubmitInput);
          return possibleConstructorReturn(this, (SubmitInput.__proto__ || Object.getPrototypeOf(SubmitInput)).apply(this, arguments));
      }

      createClass(SubmitInput, [{
          key: "getInputType",
          value: function getInputType() {
              return "submit";
          }
      }]);
      return SubmitInput;
  }(Input);

  SubmitInput.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["formenctype"], ["formmethod"], ["formnovalidate"], ["formtarget"]]);

  var TextInput = function (_Input2) {
      inherits(TextInput, _Input2);

      function TextInput() {
          classCallCheck(this, TextInput);
          return possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
      }

      createClass(TextInput, [{
          key: "getInputType",
          value: function getInputType() {
              return "text";
          }
      }]);
      return TextInput;
  }(Input);

  var NumberInput = function (_Input3) {
      inherits(NumberInput, _Input3);

      function NumberInput() {
          classCallCheck(this, NumberInput);
          return possibleConstructorReturn(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).apply(this, arguments));
      }

      createClass(NumberInput, [{
          key: "getInputType",
          value: function getInputType() {
              return "number";
          }
      }, {
          key: "getValue",
          value: function getValue() {
              var val = get(NumberInput.prototype.__proto__ || Object.getPrototypeOf(NumberInput.prototype), "getValue", this).call(this);
              return parseInt(val) || parseFloat(val);
          }
      }]);
      return NumberInput;
  }(Input);

  NumberInput.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["min"], ["max"], ["step"]]);

  var EmailInput = function (_Input4) {
      inherits(EmailInput, _Input4);

      function EmailInput() {
          classCallCheck(this, EmailInput);
          return possibleConstructorReturn(this, (EmailInput.__proto__ || Object.getPrototypeOf(EmailInput)).apply(this, arguments));
      }

      createClass(EmailInput, [{
          key: "getInputType",
          value: function getInputType() {
              return "email";
          }
      }]);
      return EmailInput;
  }(Input);

  var PasswordInput = function (_Input5) {
      inherits(PasswordInput, _Input5);

      function PasswordInput() {
          classCallCheck(this, PasswordInput);
          return possibleConstructorReturn(this, (PasswordInput.__proto__ || Object.getPrototypeOf(PasswordInput)).apply(this, arguments));
      }

      createClass(PasswordInput, [{
          key: "getInputType",
          value: function getInputType() {
              return "password";
          }
      }]);
      return PasswordInput;
  }(Input);

  var FileInput = function (_Input6) {
      inherits(FileInput, _Input6);

      function FileInput() {
          classCallCheck(this, FileInput);
          return possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).apply(this, arguments));
      }

      createClass(FileInput, [{
          key: "getInputType",
          value: function getInputType() {
              return "file";
          }
      }, {
          key: "getFiles",
          value: function getFiles() {
              return this.node.files;
          }
      }, {
          key: "getFile",
          value: function getFile() {
              // TODO: this is valid only if multipleFiles is false
              return this.getFiles()[0];
          }
      }, {
          key: "getAsFormData",
          value: function getAsFormData() {
              var formData = new FormData();
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.getFiles()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var file = _step.value;

                      formData.append(file.name, file);
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              return formData;
          }
      }]);
      return FileInput;
  }(Input);

  FileInput.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["multipleFiles", { domName: "multiple", noValue: true }], ["fileTypes", { domName: "accept" }]]);

  var CheckboxInput = function (_Input7) {
      inherits(CheckboxInput, _Input7);

      function CheckboxInput() {
          classCallCheck(this, CheckboxInput);
          return possibleConstructorReturn(this, (CheckboxInput.__proto__ || Object.getPrototypeOf(CheckboxInput)).apply(this, arguments));
      }

      createClass(CheckboxInput, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              get(CheckboxInput.prototype.__proto__ || Object.getPrototypeOf(CheckboxInput.prototype), "extraNodeAttributes", this).call(this, attr);
              attr.addClass(this.styleSheet.checkboxInput);
          }
      }, {
          key: "getInputType",
          value: function getInputType() {
              return "checkbox";
          }
      }, {
          key: "getValue",
          value: function getValue() {
              return this.node.checked;
          }
      }, {
          key: "setValue",
          value: function setValue(newValue) {
              this.node.checked = newValue;
          }
      }]);
      return CheckboxInput;
  }(Input);

  CheckboxInput.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["checked", { noValue: true }]]);

  var RadioInput = function (_CheckboxInput) {
      inherits(RadioInput, _CheckboxInput);

      function RadioInput() {
          classCallCheck(this, RadioInput);
          return possibleConstructorReturn(this, (RadioInput.__proto__ || Object.getPrototypeOf(RadioInput)).apply(this, arguments));
      }

      createClass(RadioInput, [{
          key: "getInputType",
          value: function getInputType() {
              return "radio";
          }
      }, {
          key: "getValue",
          value: function getValue() {
              return this.node.checked;
          }
      }, {
          key: "setValue",
          value: function setValue(newValue) {
              this.node.checked = newValue;
          }
      }]);
      return RadioInput;
  }(CheckboxInput);

  RadioInput.domAttributesMap = CreateNodeAttributesMap(CheckboxInput.domAttributesMap, [["name"]]);

  var TextArea = function (_UI$Primitive2) {
      inherits(TextArea, _UI$Primitive2);

      function TextArea() {
          classCallCheck(this, TextArea);
          return possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
      }

      createClass(TextArea, [{
          key: "applyNodeAttributes",
          value: function applyNodeAttributes() {
              get(TextArea.prototype.__proto__ || Object.getPrototypeOf(TextArea.prototype), "applyNodeAttributes", this).call(this);
              this.node.readOnly = this.options.readOnly || false;
          }
      }, {
          key: "setReadOnly",
          value: function setReadOnly(value) {
              this.options.readOnly = value;
              this.node.readOnly = value;
          }
      }, {
          key: "getValue",
          value: function getValue() {
              return this.node.value;
          }
      }, {
          key: "redraw",
          value: function redraw() {
              get(TextArea.prototype.__proto__ || Object.getPrototypeOf(TextArea.prototype), "redraw", this).call(this);
              if (this.options.hasOwnProperty("value")) {
                  this.node.value = this.options.value + "";
              }
          }
      }, {
          key: "setValue",
          value: function setValue(value) {
              this.options.value = value;
              this.node.value = value;
          }
      }, {
          key: "onInput",
          value: function onInput(callback) {
              this.addNodeListener("input change", callback);
          }
      }, {
          key: "onKeyUp",
          value: function onKeyUp(callback) {
              this.addNodeListener("keyup", callback);
          }
      }]);
      return TextArea;
  }(UI.Primitive(InputableElement, "textarea"));

  var Select = function (_UI$Primitive3) {
      inherits(Select, _UI$Primitive3);

      function Select() {
          classCallCheck(this, Select);
          return possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
      }

      createClass(Select, [{
          key: "render",
          value: function render() {
              this.givenOptions = this.options.options || [];
              var selectOptions = [];

              for (var i = 0; i < this.givenOptions.length; i += 1) {
                  var options = {
                      key: i
                  };
                  if (this.givenOptions[i] == this.options.selected) {
                      options.selected = true;
                  }
                  selectOptions.push(UI.createElement(
                      "option",
                      options,
                      this.givenOptions[i].toString()
                  ));
              }

              return selectOptions;
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), "extraNodeAttributes", this).call(this, attr);
              attr.addClass(this.styleSheet.select);
          }
      }, {
          key: "get",
          value: function get$$1() {
              var selectedIndex = this.getIndex();
              return this.givenOptions[selectedIndex];
          }
      }, {
          key: "set",
          value: function set$$1(value) {
              for (var i = 0; i < this.givenOptions.length; i++) {
                  if (this.givenOptions[i] === value) {
                      this.setIndex(i);
                      return;
                  }
              }
              console.error("Can't set the select option ", value, "\nAvailable options: ", this.givenOptions);
          }
      }, {
          key: "getIndex",
          value: function getIndex() {
              return this.node.selectedIndex;
          }
      }, {
          key: "setIndex",
          value: function setIndex(index) {
              this.node.selectedIndex = index;
              this.options.selected = this.givenOptions[index];
          }
      }, {
          key: "redraw",
          value: function redraw() {
              get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), "redraw", this).call(this);
              if (this.options.selected) {
                  this.set(this.options.selected);
              }
          }
      }]);
      return Select;
  }(UI.Primitive(InputableElement, "select"));

  var _class$5, _descriptor$2, _descriptor2$2, _descriptor3$2, _descriptor4$1, _descriptor5$1, _descriptor6$1;

  function _initDefineProp$3(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$3(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var FormStyle = (_class$5 = function (_StyleSheet) {
      inherits(FormStyle, _StyleSheet);

      function FormStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, FormStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FormStyle.__proto__ || Object.getPrototypeOf(FormStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$3(_this, "form", _descriptor$2, _this), _initDefineProp$3(_this, "formGroup", _descriptor2$2, _this), _initDefineProp$3(_this, "formField", _descriptor3$2, _this), _initDefineProp$3(_this, "sameLine", _descriptor4$1, _this), _this.separatedLineInputStyle = {
              marginRight: "0.5em",
              width: "100%",
              height: "2.4em"
          }, _initDefineProp$3(_this, "separatedLine", _descriptor5$1, _this), _initDefineProp$3(_this, "hasError", _descriptor6$1, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return FormStyle;
  }(StyleSheet), (_descriptor$2 = _applyDecoratedDescriptor$3(_class$5.prototype, "form", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              margin: "0 auto"
          };
      }
  }), _descriptor2$2 = _applyDecoratedDescriptor$3(_class$5.prototype, "formGroup", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              marginBottom: "10px"
          };
      }
  }), _descriptor3$2 = _applyDecoratedDescriptor$3(_class$5.prototype, "formField", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              ">label": {
                  width: "100%"
              },
              display: "block",
              padding: "6px 0px",
              lineHeight: "1.42857143",
              color: "#555",
              maxWidth: "600px",
              margin: "0 auto",
              "[disabled]": {
                  opacity: "1",
                  cursor: "not-allowed"
              },
              "[readonly]": {
                  opacity: "1"
              }
          };
      }
  }), _descriptor4$1 = _applyDecoratedDescriptor$3(_class$5.prototype, "sameLine", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              ">label>*:nth-child(1)": {
                  display: "inline-block",
                  textAlign: "right",
                  paddingRight: "1em",
                  width: "30%",
                  verticalAlign: "middle"
              },
              ">label>*:nth-child(2)": {
                  display: "inline-block",
                  width: "70%",
                  verticalAlign: "middle"
              }
          };
      }
  }), _descriptor5$1 = _applyDecoratedDescriptor$3(_class$5.prototype, "separatedLine", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              padding: "6px 10px",
              ">label>*:nth-child(1)": {
                  verticalAlign: "sub"
              },
              ">label>input": this.separatedLineInputStyle,
              ">label>select": this.separatedLineInputStyle,
              ">label>textarea": this.separatedLineInputStyle,
              ">label>input[type='checkbox']": {
                  marginLeft: "10px",
                  verticalAlign: "middle"
              }
          };
      }
  }), _descriptor6$1 = _applyDecoratedDescriptor$3(_class$5.prototype, "hasError", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              color: "#a94442"
          };
      }
  })), _class$5);

  var _dec$2, _class$6, _dec2$1, _class2$1;

  var Form = (_dec$2 = registerStyle(FormStyle), _dec$2(_class$6 = function (_UI$Primitive) {
      inherits(Form, _UI$Primitive);

      function Form() {
          classCallCheck(this, Form);
          return possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
      }

      createClass(Form, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.form);
          }
      }, {
          key: "onMount",
          value: function onMount() {
              // Form elements by default refresh the page when a button inside them is clicked, so we prevent that.
              this.addNodeListener("submit", function (event) {
                  return event.preventDefault();
              });
          }
      }]);
      return Form;
  }(UI.Primitive("form"))) || _class$6);
  var FormGroup = (_dec2$1 = registerStyle(FormStyle), _dec2$1(_class2$1 = function (_UI$Element) {
      inherits(FormGroup, _UI$Element);

      function FormGroup() {
          classCallCheck(this, FormGroup);
          return possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));
      }

      createClass(FormGroup, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.formGroup);
          }
      }, {
          key: "setError",
          value: function setError(errorMessage) {
              this.errorField.node.textContent = errorMessage;
              this.addClass(this.styleSheet.hasError);
          }
      }, {
          key: "removeError",
          value: function removeError() {
              this.errorField.node.textContent = "";
              this.removeClass(this.styleSheet.hasError);
          }
      }, {
          key: "getErrorField",
          value: function getErrorField() {
              return UI.createElement("span", { ref: "errorField", style: { float: "right" } });
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              return [this.render(), this.getErrorField()];
          }
      }]);
      return FormGroup;
  }(UI.Element)) || _class2$1);

  var FormField = function (_FormGroup) {
      inherits(FormField, _FormGroup);

      function FormField() {
          classCallCheck(this, FormField);
          return possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).apply(this, arguments));
      }

      createClass(FormField, [{
          key: "inline",
          value: function inline() {
              return !(this.options.inline === false || this.parent && this.parent.options && this.parent.options.inline === false);
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.formField);
              if (this.inline()) {
                  attr.addClass(this.styleSheet.sameLine);
              } else {
                  attr.addClass(this.styleSheet.separatedLine);
              }
          }
      }, {
          key: "getLabel",
          value: function getLabel() {
              if (this.options.label) {
                  return UI.createElement(
                      "strong",
                      null,
                      this.options.label
                  );
              }
              return null;
          }
      }, {
          key: "render",
          value: function render() {
              if (this.options.contentFirst) {
                  return [UI.createElement(
                      "label",
                      null,
                      [get(FormField.prototype.__proto__ || Object.getPrototypeOf(FormField.prototype), "render", this).call(this), this.getLabel()]
                  )];
              } else {
                  return [UI.createElement(
                      "label",
                      null,
                      [this.getLabel(), get(FormField.prototype.__proto__ || Object.getPrototypeOf(FormField.prototype), "render", this).call(this)]
                  )];
              }
          }
      }]);
      return FormField;
  }(FormGroup);

  // Setting these attributes as styles in mozilla has no effect.
  // To maintain compatibility between moz and webkit, whenever
  // one of these attributes is set as a style, it is also set as a
  // node attribute.
  var MozStyleElements = new Set(["width", "height", "rx", "ry", "cx", "cy", "x", "y"]);

  var SVGNodeAttributes = function (_NodeAttributes) {
      inherits(SVGNodeAttributes, _NodeAttributes);

      function SVGNodeAttributes() {
          classCallCheck(this, SVGNodeAttributes);
          return possibleConstructorReturn(this, (SVGNodeAttributes.__proto__ || Object.getPrototypeOf(SVGNodeAttributes)).apply(this, arguments));
      }

      createClass(SVGNodeAttributes, [{
          key: "fixMozAttributes",
          value: function fixMozAttributes(node) {
              if (this.hasOwnProperty("style")) {
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                      for (var _iterator = MozStyleElements.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                          var attributeName = _step.value;

                          if (this.style.hasOwnProperty(attributeName) && !this.hasOwnProperty(attributeName)) {
                              this.setAttribute(attributeName, this.style[attributeName], node);
                          }
                      }
                  } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                          }
                      } finally {
                          if (_didIteratorError) {
                              throw _iteratorError;
                          }
                      }
                  }
              }
          }
      }, {
          key: "setStyle",
          value: function setStyle(attributeName, value, node) {
              get(SVGNodeAttributes.prototype.__proto__ || Object.getPrototypeOf(SVGNodeAttributes.prototype), "setStyle", this).call(this, attributeName, value, node);
              if (MozStyleElements.has(attributeName)) {
                  this.setAttribute(attributeName, value, node);
              }
          }
      }, {
          key: "applyClassName",
          value: function applyClassName(node) {
              // SVG elements have a different API for setting the className than regular DOM nodes
              if (this.className) {
                  node.setAttribute("class", String(this.className));
              } else {
                  node.removeAttribute("class");
              }
          }
      }, {
          key: "apply",
          value: function apply(node, attributesMap) {
              this.transform = this.transform || this.translate;
              get(SVGNodeAttributes.prototype.__proto__ || Object.getPrototypeOf(SVGNodeAttributes.prototype), "apply", this).call(this, node, attributesMap);
              this.fixMozAttributes(node);
          }
      }]);
      return SVGNodeAttributes;
  }(NodeAttributes);

  var SVG = {};

  SVG.Element = function (_UI$Element) {
      inherits(SVGElement, _UI$Element);

      function SVGElement() {
          classCallCheck(this, SVGElement);
          return possibleConstructorReturn(this, (SVGElement.__proto__ || Object.getPrototypeOf(SVGElement)).apply(this, arguments));
      }

      createClass(SVGElement, [{
          key: "createNode",
          value: function createNode() {
              this.node = document.createElementNS("http://www.w3.org/2000/svg", this.getNodeType());
              applyDebugFlags(this);
              return this.node;
          }
      }, {
          key: "getScreenCoordinatedForPoint",
          value: function getScreenCoordinatedForPoint(point) {
              var node = this.node;
              // TODO: this is a good argument to always keep a reference to the Stem element in the nodes
              var svgNode = node.ownerSVGElement || node;

              if (svgNode.createSVGPoint) {
                  // Using native SVG transformations
                  // See https://msdn.microsoft.com/en-us/library/hh535760(v=vs.85).aspx
                  var svgPoint = svgNode.createSVGPoint();
                  svgPoint.x = point.x;
                  svgPoint.y = point.y;
                  return svgPoint.matrixTransform(node.getScreenCTM().inverse());
              }

              var rect = this.getBoundingClientRect();
              return {
                  x: point.x - rect.left - node.clientLeft,
                  y: point.y - rect.top - node.clientTop
              };
          }
      }, {
          key: "getMouseCoordinatesForEvent",
          value: function getMouseCoordinatesForEvent() {
              var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;

              return this.getScreenCoordinatedForPoint({ x: Device.getEventX(event), y: Device.getEventY(event) });
          }
      }, {
          key: "saveState",
          value: function saveState() {
              var state = {};
              state.options = Object.assign({}, this.options);
              return state;
          }
      }, {
          key: "setState",
          value: function setState(state) {
              this.setOptions(state.options);
          }
      }, {
          key: "getOptionsAsNodeAttributes",
          value: function getOptionsAsNodeAttributes() {
              var attr = this.options;
              attr.__proto__ = SVGNodeAttributes.prototype;
              return attr;
          }
      }, {
          key: "getNodeAttributes",
          value: function getNodeAttributes() {
              var returnCopy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

              if (returnCopy) {
                  return new SVGNodeAttributes(this.options);
              } else {
                  return this.getOptionsAsNodeAttributes();
              }
          }
      }, {
          key: "translate",
          value: function translate() {
              var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

              this.options.translate = "translate(" + x + "," + y + ")";
          }
      }, {
          key: "getHashCode",
          value: function getHashCode() {
              return uniqueId(this);
          }

          //TODO(@all) : getBoundingClientRect is unreliable, reimplement it.

      }, {
          key: "getBoundingClientRect",
          value: function getBoundingClientRect() {
              var element = this.node;
              var x = 0;
              var y = 0;
              while (element && element !== document.body) {
                  x -= element.scrollLeft;
                  y -= element.scrollTop;
                  element = element.offsetParent || element.parentNode;
              }
              if (element) {
                  x -= element.scrollLeft;
                  y -= element.scrollTop;
              }
              var pos = this.node.getBoundingClientRect();
              return {
                  top: pos.top - y,
                  left: pos.left - x,
                  width: pos.width,
                  bottom: pos.bottom - y,
                  height: pos.height,
                  right: pos.right - x
              };
          }
      }, {
          key: "getBBox",
          value: function getBBox() {
              return this.node.getBBox();
          }
      }, {
          key: "getHeight",
          value: function getHeight() {
              return this.getBoundingClientRect().height;
          }
      }, {
          key: "getWidth",
          value: function getWidth() {
              return this.getBoundingClientRect().width;
          }
      }, {
          key: "toFront",
          value: function toFront() {
              var parentNode = this.node && this.node.parentElement;
              if (parentNode) {
                  parentNode.removeChild(this.node);
                  parentNode.appendChild(this.node);
              }
          }
      }, {
          key: "toBack",
          value: function toBack() {}
      }, {
          key: "setOpacity",
          value: function setOpacity(newOpacity) {
              this.options.opacity = newOpacity;
              if (this.node) {
                  this.node.setAttribute("opacity", newOpacity);
              }
          }
      }, {
          key: "setColor",
          value: function setColor(color) {
              this.options.color = color;
              if (this.node) {
                  this.node.setAttribute("stroke", color);
                  this.node.setAttribute("fill", color);
              }
          }
      }, {
          key: "remove",
          value: function remove() {}
      }, {
          key: "getSvg",
          value: function getSvg() {
              return this.parent.getSvg();
          }
      }]);
      return SVGElement;
  }(UI.Element);

  SVG.Element.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["fill"], ["height"], ["opacity"], ["stroke"], ["strokeWidth", { domName: "stroke-width" }], ["clipPath", { domName: "clip-path" }], ["transform"], ["width"], ["cx"], ["cy"], ["rx"], ["ry"], ["x"], ["y"], ["x1"], ["y1"], ["x2"], ["y2"], ["offset"], ["stopColor", { domName: "stop-color" }], ["strokeDasharray", { domName: "stroke-dasharray" }], ["strokeLinecap", { domName: "stroke-linecap" }], ["viewBox", { domName: "viewBox" }]]);

  SVG.Text = function (_SVG$Element) {
      inherits(SVGText, _SVG$Element);

      function SVGText() {
          classCallCheck(this, SVGText);
          return possibleConstructorReturn(this, (SVGText.__proto__ || Object.getPrototypeOf(SVGText)).apply(this, arguments));
      }

      createClass(SVGText, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "text";
          }
      }, {
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  text: "",
                  fontSize: "15px",
                  color: "black",
                  dy: "0.35em",
                  textAnchor: "middle",
                  selectable: false
              };
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              // TODO: For some reason, still selectable in mozilla...
              if (!this.options.selectable) {
                  attr.setStyle("-webkit-user-select", "none");
                  attr.setStyle("-khtml-user-select", "none");
                  attr.setStyle("-moz-user-select", "none");
                  attr.setStyle("-ms-user-select", "none");
                  attr.setStyle("user-select", "none");
              }
          }
      }, {
          key: "render",
          value: function render() {
              return [UI.createElement(UI.TextElement, { ref: "textElement", value: this.options.text + "" })];
          }
      }, {
          key: "getX",
          value: function getX() {
              return this.options.x;
          }
      }, {
          key: "setX",
          value: function setX(x) {
              this.options.x = x;
              this.node.setAttribute("x", this.options.x);
          }
      }, {
          key: "getY",
          value: function getY() {
              return this.options.y;
          }
      }, {
          key: "setY",
          value: function setY(y) {
              this.options.y = y;
              this.node.setAttribute("y", this.options.y);
          }
      }, {
          key: "setText",
          value: function setText(text) {
              this.options.text = text;
              this.textElement.setValue(text + "");
          }
      }, {
          key: "getText",
          value: function getText() {
              return this.options.text;
          }
      }, {
          key: "setPosition",
          value: function setPosition(x, y) {
              this.setX(x);
              this.setY(y);
          }
      }, {
          key: "getColor",
          value: function getColor() {
              return this.options.color;
          }
      }, {
          key: "setColor",
          value: function setColor(color) {
              var fillOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              this.options.color = color;
              if (this.node) {
                  this.node.setAttribute("fill", color);
                  if (!fillOnly) {
                      this.node.setAttribute("stroke", color);
                  }
              }
          }
      }]);
      return SVGText;
  }(SVG.Element);

  SVG.Text.domAttributesMap = CreateNodeAttributesMap(SVG.Element.domAttributesMap, [["dx"], ["dy"], ["fontFamily", { domName: "font-family" }], ["fontSize", { domName: "font-size" }], ["textAnchor", { domName: "text-anchor" }]]);

  // TODO: this whole file is mosly here to not break compatibility with pre-Stem code, need refactoring
  var EPS = 1e-6;

  // Check if a value is equal to zero. Use epsilon check.
  var isZero = function isZero(val) {
      var epsilon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPS;

      return Math.abs(val) < epsilon;
  };

  var equal = function equal(val1, val2) {
      var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPS;

      return isZero(val1 - val2, epsilon);
  };

  // TODO: lots of these should be methods of the point class, not global functions
  var crossProduct = function crossProduct(p1, p2, p0) {
      p0 = p0 || { x: 0, y: 0 };
      return (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);
  };

  var polarToCartesian = function polarToCartesian(angle, radius, orig) {
      orig = orig || { x: 0, y: 0 };
      return {
          x: radius * Math.cos(angle) + orig.x,
          y: radius * Math.sin(angle) + orig.y
      };
  };

  SVG.SVGRoot = function (_SVG$Element) {
      inherits(SVGRoot, _SVG$Element);

      function SVGRoot() {
          classCallCheck(this, SVGRoot);
          return possibleConstructorReturn(this, (SVGRoot.__proto__ || Object.getPrototypeOf(SVGRoot)).apply(this, arguments));
      }

      createClass(SVGRoot, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "svg";
          }
      }, {
          key: "getSvg",
          value: function getSvg() {
              return this;
          }
      }]);
      return SVGRoot;
  }(SVG.Element);

  SVG.RawSVG = function (_SVG$SVGRoot) {
      inherits(RawSVG, _SVG$SVGRoot);

      function RawSVG() {
          classCallCheck(this, RawSVG);
          return possibleConstructorReturn(this, (RawSVG.__proto__ || Object.getPrototypeOf(RawSVG)).apply(this, arguments));
      }

      createClass(RawSVG, [{
          key: "redraw",
          value: function redraw() {
              get(RawSVG.prototype.__proto__ || Object.getPrototypeOf(RawSVG.prototype), "redraw", this).call(this);
              this.node.innerHTML = this.options.innerHTML;
          }
      }]);
      return RawSVG;
  }(SVG.SVGRoot);

  SVG.Group = function (_SVG$Element2) {
      inherits(SVGGroup, _SVG$Element2);

      function SVGGroup() {
          classCallCheck(this, SVGGroup);
          return possibleConstructorReturn(this, (SVGGroup.__proto__ || Object.getPrototypeOf(SVGGroup)).apply(this, arguments));
      }

      createClass(SVGGroup, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "g";
          }
      }, {
          key: "setColor",
          value: function setColor(color) {
              for (var i = 0; i < this.children.length; i += 1) {
                  this.children[i].setColor(color);
              }
          }
      }]);
      return SVGGroup;
  }(SVG.Element);

  SVG.Defs = function (_SVG$Element3) {
      inherits(SVGDefs, _SVG$Element3);

      function SVGDefs() {
          classCallCheck(this, SVGDefs);
          return possibleConstructorReturn(this, (SVGDefs.__proto__ || Object.getPrototypeOf(SVGDefs)).apply(this, arguments));
      }

      createClass(SVGDefs, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "defs";
          }
      }]);
      return SVGDefs;
  }(SVG.Element);

  SVG.ClipPath = function (_SVG$Element4) {
      inherits(ClipPath, _SVG$Element4);

      function ClipPath() {
          classCallCheck(this, ClipPath);
          return possibleConstructorReturn(this, (ClipPath.__proto__ || Object.getPrototypeOf(ClipPath)).apply(this, arguments));
      }

      createClass(ClipPath, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "clipPath";
          }
      }]);
      return ClipPath;
  }(SVG.Element);

  SVG.Path = function (_SVG$Element5) {
      inherits(SVGPath, _SVG$Element5);

      function SVGPath() {
          classCallCheck(this, SVGPath);
          return possibleConstructorReturn(this, (SVGPath.__proto__ || Object.getPrototypeOf(SVGPath)).apply(this, arguments));
      }

      createClass(SVGPath, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "path";
          }
      }, {
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  d: ""
              };
          }
      }, {
          key: "getNodeAttributes",
          value: function getNodeAttributes() {
              var attr = get(SVGPath.prototype.__proto__ || Object.getPrototypeOf(SVGPath.prototype), "getNodeAttributes", this).call(this);
              attr.setAttribute("d", this.getPath());
              return attr;
          }
      }, {
          key: "getPath",
          value: function getPath() {
              return this.options.d;
          }
      }, {
          key: "setPath",
          value: function setPath(newPath) {
              this.options.d = newPath;
              this.node.setAttribute("d", this.options.d);
          }
      }, {
          key: "getLength",
          value: function getLength() {
              return this.node.getTotalLength();
          }
      }, {
          key: "getPointAtLength",
          value: function getPointAtLength(len) {
              return this.node.getPointAtLength(len);
          }
      }, {
          key: "getPointAtLengthWithAngle",
          value: function getPointAtLengthWithAngle(len) {
              var totalLength = this.getLength();
              var epsilon = void 0;
              if (totalLength <= 1) {
                  epsilon = totalLength / 1000;
              } else {
                  epsilon = Math.min(totalLength / 1000, Math.log(totalLength), 1);
              }
              var p1 = this.getPointAtLength(len);
              var p2 = this.getPointAtLength(Math.min(len + epsilon, totalLength));
              var p3 = this.getPointAtLength(Math.max(len - epsilon, 0));
              return {
                  x: p1.x,
                  y: p1.y,
                  alpha: 180 * Math.atan2(p3.y - p2.y, p3.x - p2.x) / Math.PI
              };
          }
      }]);
      return SVGPath;
  }(SVG.Element);

  SVG.Circle = function (_SVG$Element6) {
      inherits(SVGCircle, _SVG$Element6);

      function SVGCircle() {
          classCallCheck(this, SVGCircle);
          return possibleConstructorReturn(this, (SVGCircle.__proto__ || Object.getPrototypeOf(SVGCircle)).apply(this, arguments));
      }

      createClass(SVGCircle, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "circle";
          }
      }, {
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  radius: 0,
                  center: { x: 0, y: 0 }
              };
          }
      }, {
          key: "getNodeAttributes",
          value: function getNodeAttributes() {
              var attr = get(SVGCircle.prototype.__proto__ || Object.getPrototypeOf(SVGCircle.prototype), "getNodeAttributes", this).call(this);
              attr.setAttribute("r", this.options.radius);
              attr.setAttribute("cx", this.options.center.x);
              attr.setAttribute("cy", this.options.center.y);
              return attr;
          }
      }, {
          key: "getRadius",
          value: function getRadius() {
              return this.options.radius;
          }
      }, {
          key: "setRadius",
          value: function setRadius(radius) {
              this.options.radius = radius;

              this.setAttribute("r", radius);
          }
      }, {
          key: "setCenter",
          value: function setCenter(x, y) {
              this.options.center.x = x;
              this.options.center.y = y;

              this.setAttribute("cx", x);
              this.setAttribute("cy", y);
          }
      }, {
          key: "getCenter",
          value: function getCenter() {
              return this.options.center;
          }
      }, {
          key: "toPath",
          value: function toPath() {
              var r = this.options.radius;
              var cx = this.options.center.x;
              var cy = this.options.center.y;
              var pathString = "M" + (cx - r) + " " + cy + // Starting point is W
              "a" + r + " " + r + " 0 0 1 " + r + " " + -r + // Move to N
              "a" + r + " " + r + " 0 0 1 " + r + " " + r + // Move to E
              "a" + r + " " + r + " 0 0 1 " + -r + " " + r + // Move to S
              "a" + r + " " + r + " 0 0 1 " + -r + " " + -r; // Finally, move back to W
              return new SVG.Path({ d: pathString });
          }
      }]);
      return SVGCircle;
  }(SVG.Element);

  SVG.Stop = function (_SVG$Element7) {
      inherits(SVGStop, _SVG$Element7);

      function SVGStop() {
          classCallCheck(this, SVGStop);
          return possibleConstructorReturn(this, (SVGStop.__proto__ || Object.getPrototypeOf(SVGStop)).apply(this, arguments));
      }

      createClass(SVGStop, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "stop";
          }
      }]);
      return SVGStop;
  }(SVG.Element);

  SVG.RadialGradient = function (_SVG$Element8) {
      inherits(SVGRadialGradient, _SVG$Element8);

      function SVGRadialGradient() {
          classCallCheck(this, SVGRadialGradient);
          return possibleConstructorReturn(this, (SVGRadialGradient.__proto__ || Object.getPrototypeOf(SVGRadialGradient)).apply(this, arguments));
      }

      createClass(SVGRadialGradient, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "radialGradient";
          }
      }]);
      return SVGRadialGradient;
  }(SVG.Element);

  SVG.LinearGradient = function (_SVG$Element9) {
      inherits(SVGLinearGradient, _SVG$Element9);

      function SVGLinearGradient() {
          classCallCheck(this, SVGLinearGradient);
          return possibleConstructorReturn(this, (SVGLinearGradient.__proto__ || Object.getPrototypeOf(SVGLinearGradient)).apply(this, arguments));
      }

      createClass(SVGLinearGradient, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "linearGradient";
          }
      }]);
      return SVGLinearGradient;
  }(SVG.Element);

  //TODO Complete this class
  SVG.Ellipse = function (_SVG$Element10) {
      inherits(SVGEllipse, _SVG$Element10);

      function SVGEllipse() {
          classCallCheck(this, SVGEllipse);
          return possibleConstructorReturn(this, (SVGEllipse.__proto__ || Object.getPrototypeOf(SVGEllipse)).apply(this, arguments));
      }

      createClass(SVGEllipse, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "ellipse";
          }
      }]);
      return SVGEllipse;
  }(SVG.Element);

  SVG.CircleArc = function (_SVG$Path) {
      inherits(SVGCircleArc, _SVG$Path);

      function SVGCircleArc() {
          classCallCheck(this, SVGCircleArc);
          return possibleConstructorReturn(this, (SVGCircleArc.__proto__ || Object.getPrototypeOf(SVGCircleArc)).apply(this, arguments));
      }

      createClass(SVGCircleArc, [{
          key: "getPath",
          value: function getPath() {
              var startAngle = this.options.startAngle;
              var endAngle = this.options.endAngle;
              var radius = this.options.radius;
              var center = this.options.center;

              var angleDiff = endAngle - startAngle + (endAngle < startAngle ? 2 * Math.PI : 0);
              var startPoint = polarToCartesian(startAngle, radius, center);
              var endPoint = polarToCartesian(endAngle, radius, center);
              var sweepFlag;
              var largeArcFlag;

              // Set largeArcFlag and sweepFlag
              if (angleDiff <= Math.PI) {
                  largeArcFlag = 0;
                  if (crossProduct(startPoint, endPoint, center) <= 0) {
                      sweepFlag = 0;
                  } else {
                      sweepFlag = 1;
                  }
              } else {
                  largeArcFlag = 1;
                  if (crossProduct(startPoint, endPoint, center) <= 0) {
                      sweepFlag = 1;
                  } else {
                      sweepFlag = 0;
                  }
              }

              return "M " + startPoint.x + " " + startPoint.y + " A " + radius + " " + radius + " 0 " + largeArcFlag + " " + sweepFlag + " " + endPoint.x + " " + endPoint.y;
          }
      }]);
      return SVGCircleArc;
  }(SVG.Path);

  SVG.Rect = function (_SVG$Element11) {
      inherits(SVGRect, _SVG$Element11);

      function SVGRect() {
          classCallCheck(this, SVGRect);
          return possibleConstructorReturn(this, (SVGRect.__proto__ || Object.getPrototypeOf(SVGRect)).apply(this, arguments));
      }

      createClass(SVGRect, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "rect";
          }
      }, {
          key: "getX",
          value: function getX() {
              return this.options.x;
          }
      }, {
          key: "setX",
          value: function setX(x) {
              this.options.x = x;
              this.node.setAttribute("x", this.options.x);
          }
      }, {
          key: "getY",
          value: function getY() {
              return this.options.y;
          }
      }, {
          key: "setY",
          value: function setY(y) {
              this.options.y = y;
              this.node.setAttribute("y", this.options.y);
          }
      }, {
          key: "getWidth",
          value: function getWidth() {
              return this.options.width;
          }
      }, {
          key: "setWidth",
          value: function setWidth(width) {
              this.options.width = width;
              this.node.setAttribute("width", this.options.width);
          }
      }, {
          key: "getHeight",
          value: function getHeight() {
              return this.options.height;
          }
      }, {
          key: "setHeight",
          value: function setHeight(height) {
              this.options.height = height;
              this.node.setAttribute("height", this.options.height);
          }
      }]);
      return SVGRect;
  }(SVG.Element);

  SVG.Line = function (_SVG$Element12) {
      inherits(SVGLine, _SVG$Element12);

      function SVGLine() {
          classCallCheck(this, SVGLine);
          return possibleConstructorReturn(this, (SVGLine.__proto__ || Object.getPrototypeOf(SVGLine)).apply(this, arguments));
      }

      createClass(SVGLine, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "line";
          }
      }, {
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  fill: "black",
                  stroke: "black"
              };
          }

          //TODO(@all): Make the getters for x1, y1, x2, y2

      }, {
          key: "setLine",
          value: function setLine(x1, y1, x2, y2) {
              this.options.x1 = x1;
              this.options.y1 = y1;
              this.options.x2 = x2;
              this.options.y2 = y2;

              this.setAttribute("x1", x1);
              this.setAttribute("y1", y1);
              this.setAttribute("x2", x2);
              this.setAttribute("y2", y2);
          }
      }]);
      return SVGLine;
  }(SVG.Element);

  SVG.Polygon = function (_SVG$Path2) {
      inherits(Polygon, _SVG$Path2);

      function Polygon() {
          classCallCheck(this, Polygon);
          return possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).apply(this, arguments));
      }

      createClass(Polygon, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  points: []
              };
          }
      }, {
          key: "getNodeAttributes",
          value: function getNodeAttributes() {
              var attr = get(Polygon.prototype.__proto__ || Object.getPrototypeOf(Polygon.prototype), "getNodeAttributes", this).call(this);
              attr.setAttribute("d", this.getPolygonPath());
              return attr;
          }
      }, {
          key: "getPolygonPath",
          value: function getPolygonPath() {
              var pathString = "";
              for (var i = 0; i < this.options.points.length; ++i) {
                  if (i == 0) {
                      pathString += "M ";
                  } else {
                      pathString += "L ";
                  }
                  pathString += this.options.points[i].x + " " + this.options.points[i].y + " ";
              }
              pathString += "Z";
              return pathString;
          }
      }, {
          key: "setPoints",
          value: function setPoints(points) {
              this.options.points = points;
              this.setPath(this.getPolygonPath());
          }
      }]);
      return Polygon;
  }(SVG.Path);

  var Transition = function () {
      function Transition(options) {
          classCallCheck(this, Transition);

          this.func = options.func;
          this.context = options.context;
          this.duration = options.duration || 0;
          this.startTime = options.startTime || 0;
          this.dependsOn = options.dependsOn || [];
          this.speedFactor = 1;
      }

      createClass(Transition, [{
          key: "toString",
          value: function toString() {
              return "{\n" + "   context: " + this.context + "\n" + "   duration: " + this.duration + "\n" + "   startTime: " + this.startTime + "\n" + "   dependsOn: " + this.dependsOn + "\n" + "   func: " + this.func.toString() + "\n" + "}\n";
          }
      }, {
          key: "hasDependencyOn",
          value: function hasDependencyOn(t) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.dependsOn[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var transition = _step.value;

                      if (transition === t) {
                          return true;
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              return false;
          }
      }, {
          key: "canAdvance",
          value: function canAdvance() {
              for (var i = 0; i < this.dependsOn.length; i += 1) {
                  if (!this.dependsOn[i].isStopped()) {
                      return false;
                  }
              }
              return true;
          }
      }, {
          key: "getFraction",
          value: function getFraction() {
              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

              return Math.min((now - this.startTime) / this.getLength(), 1);
          }
      }, {
          key: "start",
          value: function start() {
              var _this = this;

              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

              if (this.stopped) {
                  delete this.stopped;
              }
              this.setStartTime(now);

              var functionWrapper = function functionWrapper() {
                  if (_this.stopped) {
                      return;
                  }
                  if (!_this.pauseTime) {
                      _this.nextStep();
                  }
                  requestAnimationFrame(functionWrapper);
              };
              requestAnimationFrame(functionWrapper);
              return this;
          }
      }, {
          key: "getLength",
          value: function getLength() {
              return this.getEndTime() - this.startTime;
          }
      }, {
          key: "setStartTime",
          value: function setStartTime(time) {
              this.startTime = time;
              return this;
          }
      }, {
          key: "setSpeedFactor",
          value: function setSpeedFactor(speedFactor) {
              var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

              var ratio = speedFactor / this.speedFactor;
              this.startTime = (this.startTime - now) / ratio + now;
              if (this.pauseTime) {
                  this.pauseTime = (this.pauseTime - now) / ratio + now;
              }
              this.speedFactor = speedFactor;
              return this;
          }
      }, {
          key: "pause",
          value: function pause() {
              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

              if (!this.pauseTime) {
                  this.pauseTime = now;
              }
              return this;
          }
      }, {
          key: "resume",
          value: function resume() {
              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

              if (this.pauseTime) {
                  this.startTime += now - this.pauseTime;
                  this.pauseTime = 0;
              }
              return this;
          }
      }, {
          key: "forceStart",
          value: function forceStart() {
              this.restart();
              this.func(0.0, this.context);
              return this;
          }
      }, {
          key: "forceFinish",
          value: function forceFinish() {
              this.func(1.0, this.context);
              this.stop();
              return this;
          }
      }, {
          key: "stop",
          value: function stop() {
              this.stopped = true;
          }
      }, {
          key: "restart",
          value: function restart() {
              delete this.stopped;
              return this;
          }
      }, {
          key: "isStopped",
          value: function isStopped() {
              return this.stopped === true;
          }
      }, {
          key: "nextStep",
          value: function nextStep() {
              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

              // Return if transition is stopped
              if (this.isStopped()) {
                  return this;
              }
              this.lastT = this.getFraction(now);
              // Return if transitions not started yet
              if (this.lastT < 0) {
                  return this;
              }
              // Call the animation function
              this.func(this.lastT, this.context);
              // Stop the animation if it's the last step
              if (this.lastT === 1) {
                  this.stop();
              }
              return this;
          }
      }, {
          key: "getEndTime",
          value: function getEndTime() {
              return this.startTime + this.duration / this.speedFactor;
          }
      }]);
      return Transition;
  }();

  var Modifier = function (_Transition) {
      inherits(Modifier, _Transition);

      function Modifier(options) {
          classCallCheck(this, Modifier);

          var _this2 = possibleConstructorReturn(this, (Modifier.__proto__ || Object.getPrototypeOf(Modifier)).call(this, options));

          _this2.reverseFunc = options.reverseFunc;
          _this2.context = options.context;
          return _this2;
      }

      // WTF, so basically JSON.stringify??


      createClass(Modifier, [{
          key: "toString",
          value: function toString() {
              return "{\n" + "   context: " + this.context + "\n" + "   duration: " + this.duration + "\n" + "   startTime: " + this.startTime + "\n" + "   dependsOn: " + this.dependsOn + "\n" + "   func: " + this.func.toString() + "\n" + "   reverseFunc: " + this.reverseFunc.toString() + "\n" + "}\n";
          }
      }, {
          key: "forceStart",
          value: function forceStart() {
              this.restart();
              this.reverseFunc(this.context);
              return this;
          }
      }, {
          key: "forceFinish",
          value: function forceFinish() {
              this.func(this.context);
              this.stop();
              return this;
          }
      }, {
          key: "nextStep",
          value: function nextStep() {
              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

              if (this.isStopped()) {
                  return this;
              }
              if (now >= this.startTime) {
                  this.func(this.context);
                  this.stop();
              }
              return this;
          }
      }, {
          key: "getEndTime",
          value: function getEndTime() {
              return this.startTime;
          }
      }]);
      return Modifier;
  }(Transition);

  var TransitionList = function () {
      function TransitionList() {
          var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          classCallCheck(this, TransitionList);

          this.startTime = startTime;
          this.speedFactor = 1;
          this.transitions = [];
          this.dependsOn = [];
      }

      createClass(TransitionList, [{
          key: "toString",
          value: function toString() {
              return "{\n" + "   context: " + this.context + "\n" + "   duration: " + this.duration + "\n" + "   startTime: " + this.startTime + "\n" + "   dependsOn: " + this.dependsOn + "\n" + "   transitions: [" + (this.transitions.length ? this.transitions[0].toString() : "") + " ...]\n" + "}\n";
          }
      }, {
          key: "add",
          value: function add(transition) {
              var forceFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              for (var i = 0; i < transition.dependsOn.length; i += 1) {
                  if (transition.dependsOn[i].getEndTime() > transition.startTime) {
                      console.error(transition.toString() + "\ndepends on\n" + transition.dependsOn[i].toString() + "\n" + "which ends after its start!");
                  }
              }
              if (forceFinish) {
                  transition.forceFinish();
              }
              this.transitions.push(transition);
              return this;
          }
      }, {
          key: "push",
          value: function push(transition) {
              var forceFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              transition.setStartTime(this.getLength());
              for (var i = 0; i < transition.dependsOn.length; i += 1) {
                  if (transition.dependsOn[i].getEndTime() > transition.startTime) {
                      console.error(transition.toString() + "\ndepends on\n" + transition.dependsOn[i].toString() + "\n" + "which ends after its start!");
                  }
              }
              if (forceFinish) {
                  transition.forceFinish();
              }
              this.transitions.push(transition);
              return this;
          }
      }, {
          key: "getFraction",
          value: function getFraction() {
              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

              return Math.min((now - this.startTime) / this.getLength(), 1);
          }
      }, {
          key: "setStartTime",
          value: function setStartTime(startTime) {
              var timeDelta = startTime - this.startTime;
              this.startTime = startTime;
              for (var i = 0; i < this.transitions.length; i += 1) {
                  var transition = this.transitions[i];
                  transition.setStartTime(transition.startTime + timeDelta);
              }
          }
      }, {
          key: "start",
          value: function start() {
              var _this3 = this;

              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

              if (this.stopped) {
                  delete this.stopped;
              }
              this.setStartTime(now);
              var functionWrapper = function functionWrapper() {
                  if (_this3.stopped) {
                      return;
                  }
                  if (!_this3.pauseTime) {
                      _this3.nextStep();
                  }
                  requestAnimationFrame(functionWrapper);
              };
              requestAnimationFrame(functionWrapper);
              return this;
          }
      }, {
          key: "stop",
          value: function stop() {
              this.stopped = true;
              for (var i = 0; i < this.transitions.length; i += 1) {
                  var transition = this.transitions[i];
                  transition.stop();
              }
          }
      }, {
          key: "isStopped",
          value: function isStopped() {
              return this.stopped === true;
          }
      }, {
          key: "pause",
          value: function pause() {
              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

              if (!this.pauseTime) {
                  this.pauseTime = now;
                  for (var i = 0; i < this.transitions.length; i += 1) {
                      this.transitions[i].pause(now);
                  }
              }
              return this;
          }
      }, {
          key: "resume",
          value: function resume() {
              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

              if (this.pauseTime) {
                  this.startTime += now - this.pauseTime;
                  for (var i = 0; i < this.transitions.length; i += 1) {
                      this.transitions[i].resume(now);
                  }
                  this.pauseTime = 0;
              }
              return this;
          }
      }, {
          key: "nextStep",
          value: function nextStep() {
              // Return if transition list is stopped
              if (this.isStopped()) {
                  return;
              }

              if (this.onNewFrame) {
                  this.onNewFrame(this.getFraction());
              }

              var finished = true;
              var stk = [];
              for (var i = 0; i < this.transitions.length; i += 1) {
                  var transition = this.transitions[i];
                  if (!transition.isStopped()) {
                      if (transition.canAdvance()) {
                          transition.nextStep();
                          while (stk.length !== 0 && this.transitions[stk[stk.length - 1]].canAdvance()) {
                              this.transitions[stk[stk.length - 1]].nextStep();
                              stk.pop();
                          }
                      } else {
                          stk.push(i);
                      }
                      finished = false;
                  }
              }
              if (finished) {
                  this.stop();
              }
              return this;
          }
      }, {
          key: "setSpeedFactor",
          value: function setSpeedFactor(speedFactor) {
              var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

              var ratio = speedFactor / this.speedFactor;
              this.startTime = (this.startTime - now) / ratio + now;
              if (this.pauseTime) {
                  this.pauseTime = (this.pauseTime - now) / ratio + now;
              }
              this.speedFactor = speedFactor;
              for (var i = 0; i < this.transitions.length; i += 1) {
                  this.transitions[i].setSpeedFactor(speedFactor, now);
              }
              return this;
          }
      }, {
          key: "restart",
          value: function restart() {
              delete this.stopped;
              for (var i = 0; i < this.transitions.length; i += 1) {
                  var transition = this.transitions[i];
                  transition.restart();
              }
              this.sortByEndTime();
              return this;
          }
      }, {
          key: "getLength",
          value: function getLength() {
              return this.getEndTime() - this.startTime;
          }
      }, {
          key: "getEndTime",
          value: function getEndTime() {
              var endTime = 0;
              for (var i = 0; i < this.transitions.length; i += 1) {
                  var transitionEndTime = this.transitions[i].getEndTime();
                  if (transitionEndTime > endTime) {
                      endTime = transitionEndTime;
                  }
              }
              return endTime;
          }
      }, {
          key: "hasDependencyOn",
          value: function hasDependencyOn(t) {
              for (var transition in this.dependsOn) {
                  if (transition === t) {
                      return true;
                  }
              }
              return false;
          }
      }, {
          key: "canAdvance",
          value: function canAdvance() {
              for (var i = 0; i < this.dependsOn.length; i += 1) {
                  if (!this.dependsOn[i].isStopped()) {
                      return false;
                  }
              }
              return true;
          }
      }, {
          key: "sortByStartTime",
          value: function sortByStartTime() {
              // TODO: this comparator should be global
              this.transitions.sort(function (a, b) {
                  if (!equal(a.startTime, b.startTime, 0.001)) {
                      return b.startTime - a.startTime;
                  }
                  //not a hack, works in all conflict cases
                  if (!equal(a.getEndTime(), b.getEndTime(), 0.001)) {
                      return b.getEndTime() - a.getEndTime();
                  }
                  if (a.hasDependencyOn(b)) {
                      return 1;
                  }
                  if (b.hasDependencyOn(a)) {
                      return -1;
                  }
                  return 0;
              });
          }
      }, {
          key: "sortByEndTime",
          value: function sortByEndTime() {
              this.transitions.sort(function (a, b) {
                  if (!equal(a.getEndTime(), b.getEndTime(), 0.001)) {
                      return a.getEndTime() - b.getEndTime();
                  }
                  //not a hack, works in all conflict cases
                  if (!equal(a.startTime, b.startTime, 0.001)) {
                      return a.startTime - b.startTime;
                  }
                  if (a.hasDependencyOn(b)) {
                      return -1;
                  }
                  if (b.hasDependencyOn(a)) {
                      return 1;
                  }
                  return 0;
              });
          }
      }, {
          key: "forceStart",
          value: function forceStart() {
              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

              this.sortByStartTime();
              for (var i = 0; i < this.transitions.length; i += 1) {
                  var transition = this.transitions[i];
                  if (transition.startTime <= now) {
                      transition.forceStart(now);
                  }
              }
              return this;
          }
      }, {
          key: "forceFinish",
          value: function forceFinish() {
              var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
              var startTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

              this.sortByEndTime();
              for (var i = 0; i < this.transitions.length; i += 1) {
                  var transition = this.transitions[i];
                  if (transition.getEndTime() >= startTime) {
                      if (transition instanceof TransitionList) {
                          transition.forceFinish(now, startTime);
                      } else {
                          if (typeof now === "undefined" || transition.getEndTime() < now) {
                              transition.forceFinish();
                          }
                      }
                  }
              }
              return this;
          }
      }, {
          key: "startAtPercent",
          value: function startAtPercent(startPercent) {
              var _this4 = this;

              var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

              cancelAnimationFrame(this.animationFrameId);
              this.restart();
              // TODO(@wefgef): Buggy
              var paused = this.pauseTime;
              if (paused) {
                  this.resume();
              }
              this.forceStart(now);
              this.setStartTime(now - startPercent * this.getLength());
              this.forceFinish(now);
              // TODO(@wefgef): Huge hack to deal with force transition
              this.nextStep();
              this.nextStep();
              if (paused) {
                  this.pause();
              }

              var functionWrapper = function functionWrapper() {
                  if (_this4.isStopped()) {
                      return;
                  }
                  if (!_this4.pauseTime) {
                      _this4.nextStep();
                  }
                  _this4.animationFrameId = requestAnimationFrame(functionWrapper);
              };
              this.animationFrameId = requestAnimationFrame(functionWrapper);
          }
      }]);
      return TransitionList;
  }();

  SVG.AnimatedSVG = function (_SVG$SVGRoot) {
      inherits(AnimatedSVG, _SVG$SVGRoot);

      function AnimatedSVG() {
          classCallCheck(this, AnimatedSVG);
          return possibleConstructorReturn(this, (AnimatedSVG.__proto__ || Object.getPrototypeOf(AnimatedSVG)).apply(this, arguments));
      }

      createClass(AnimatedSVG, [{
          key: "onMount",
          value: function onMount() {
              var _this2 = this;

              if (this.options.transition) {
                  this.options.transition.setStartTime(Date.now());
                  var animationWrapper = function animationWrapper() {
                      if (_this2.options.transition.isStopped()) {
                          if (_this2.options.repeat) {
                              _this2.options.transition.setStartTime(Date.now());
                              _this2.options.transition.restart();
                              requestAnimationFrame(animationWrapper);
                          }
                          return;
                      }
                      if (!_this2.options.transition.pauseTime) {
                          _this2.options.transition.nextStep();
                      }
                      requestAnimationFrame(animationWrapper);
                  };
                  requestAnimationFrame(animationWrapper);
              }
          }
      }]);
      return AnimatedSVG;
  }(SVG.SVGRoot);

  SVG.Element.prototype.blinkTransition = function (options) {
      var _this3 = this;

      var config = {
          duration: 2000,
          times: 2,
          firstColor: "grey",
          secondColor: "black",
          executeLastStep: true,
          startTime: 0,
          dependsOn: []
      };
      Object.assign(config, options);
      return new Transition({
          func: function func(t, context) {
              if (t > 1 - context.interval && !context.executeLastStep) {
                  _this3.setColor(context.firstColor);
              } else {
                  _this3.setColor(Math.floor((1 - t) / context.interval) % 2 === 1 ? context.firstColor : context.secondColor);
              }
          },
          context: {
              firstColor: config.firstColor,
              secondColor: config.secondColor,
              interval: 1 / (2 * config.times),
              executeLastStep: config.executeLastStep
          },
          duration: config.duration,
          startTime: config.startTime,
          dependsOn: config.dependsOn
      });
  };
  SVG.Element.prototype.changeOpacityTransition = function (opacity, duration) {
      var _this4 = this;

      var dependsOn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var startTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if (!this.options.hasOwnProperty("opacity")) {
          this.options.opacity = 1;
      }
      return new Transition({
          func: function func(t, context) {
              _this4.setOpacity((1 - t) * context.opacity + t * opacity);
          },
          context: {
              opacity: this.options.opacity
          },
          duration: duration,
          startTime: startTime,
          dependsOn: dependsOn
      });
  };
  SVG.Element.prototype.changeColorTransition = function (color, duration) {
      var _this5 = this;

      var dependsOn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var startTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      return new Transition({
          func: function func(t, context) {
              _this5.setColor(Color.interpolate(context.color, color, t));
          },
          context: {
              color: this.getColor()
          },
          duration: duration,
          startTime: startTime,
          dependsOn: dependsOn
      });
  };

  SVG.Text.prototype.moveTransition = function (coords, duration) {
      var _this6 = this;

      var dependsOn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var startTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      return new Transition({
          func: function func(t, context) {
              _this6.setPosition((1 - t) * context.x + t * coords.x, (1 - t) * context.y + t * coords.y);
          },
          context: {
              x: this.options.x,
              y: this.options.y
          },
          duration: duration,
          startTime: startTime,
          dependsOn: dependsOn
      });
  };
  SVG.Text.prototype.changeFillTransition = function (color, duration) {
      var _this7 = this;

      var dependsOn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var startTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      return new Transition({
          func: function func(t, context) {
              _this7.setColor(Color.interpolate(context.color, color, t), true);
          },
          context: {
              color: this.getColor()
          },
          duration: duration,
          startTime: startTime,
          dependsOn: dependsOn
      });
  };

  var Switcher = function (_UI$Element) {
      inherits(Switcher, _UI$Element);

      function Switcher(options) {
          classCallCheck(this, Switcher);

          var _this = possibleConstructorReturn(this, (Switcher.__proto__ || Object.getPrototypeOf(Switcher)).call(this, options));

          _this.childMap = new WeakMap();
          _this.numRedraws = 0;
          return _this;
      }

      createClass(Switcher, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  fullHeight: false,
                  preserveScroll: true
              };
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              if (this.options.fullHeight) {
                  attr.addClass(GlobalStyle.Utils.fullHeight);
              }
          }
      }, {
          key: "copyState",
          value: function copyState(element) {
              var options = Object.assign({}, element.options, {
                  children: this.overwriteElements(this.options.children || [], element.options.children || [])
              });

              this.setOptions(options);

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.options.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var child = _step.value;

                      if (child.options.active) {
                          this.activeChild = child;
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }
          }
      }, {
          key: "render",
          value: function render() {
              return this.activeChild || this.options.children[0];
          }
      }, {
          key: "overwriteElements",
          value: function overwriteElements(existingElements, newElements) {
              var keyMap = this.getElementKeyMap(existingElements) || new Map();
              for (var i = 0; i < newElements.length; i += 1) {
                  var newChild = newElements[i];
                  var newChildKey = newChild.options && newChild.options.key || "autokey" + i;
                  var existingChild = keyMap.get(newChildKey);
                  if (existingChild === newChild) {
                      continue;
                  }
                  if (existingChild && newChild.canOverwrite(existingChild)) {
                      newElements[i] = newChild = this.overwriteChild(existingChild, newChild);
                  }
              }
              return newElements;
          }
      }, {
          key: "redraw",
          value: function redraw() {
              this.numRedraws += 1;

              //basic things for our current node
              this.applyNodeAttributes();
              this.applyRef();

              // This render may be required to update this.options.children
              UI.renderingStack.push(this);
              this.render();
              UI.renderingStack.pop();

              if (this.options.children.length == 0) {
                  return;
              }

              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = this.options.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var child = _step2.value;

                      if (this.options.lazyRender) {
                          this.getChildProperties(child).isUpToDate = false;
                          child.applyRef();
                      } else {
                          this.updateChild(child);
                      }
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }

              this.updateActiveChild(this.activeChild || this.options.children[0]);
          }
      }, {
          key: "getChildProperties",
          value: function getChildProperties(child) {
              if (!this.childMap.has(child)) {
                  this.childMap.set(child, {
                      isMounted: !!child.node,
                      redrawIndex: -1
                  });
              }
              return this.childMap.get(child);
          }
      }, {
          key: "updateChild",
          value: function updateChild(child) {
              if (this.getChildProperties(child).redrawIndex < this.numRedraws) {
                  if (!child.node) {
                      child.mount(this);
                  } else {
                      child.redraw();
                  }
                  this.getChildProperties(child).redrawIndex = this.numRedraws;
              }
          }
      }, {
          key: "appendChild",
          value: function appendChild(child) {
              var doMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              this.options.children.push(child);
              if (doMount) {
                  child.mount(this);
              }
              if (this.options.children.length == 1) {
                  this.setActive(child);
              }
              return child;
          }
      }, {
          key: "getActive",
          value: function getActive() {
              return this.activeChild;
          }
      }, {
          key: "insertChildNodeBefore",
          value: function insertChildNodeBefore(child, nextSibling) {
              var childProperties = this.getChildProperties(child);
              childProperties.isMounted = true;
              childProperties.redrawIndex = this.numRedraws;
          }
      }, {
          key: "updateActiveChild",
          value: function updateActiveChild(element) {
              while (this.node.firstChild) {
                  //TODO: would be useful here to be able to access the matching UI Element
                  this.node.removeChild(this.node.firstChild);
              }

              if (element == null) {
                  this.activeChild = null;
                  return;
              }

              this.updateChild(element);

              this.node.appendChild(element.node);
              this.children[0] = this.activeChild = element;
          }
      }, {
          key: "deactivateChild",
          value: function deactivateChild(child) {
              child.dispatch("hide");
              child.dispatch("setActive", false);
              if (this.options.preserveScroll) {
                  this.getChildProperties(child).scrollTop = this.node.scrollTop;
              }
          }
      }, {
          key: "activateChild",
          value: function activateChild(child) {
              child.dispatch("setActive", true);
              child.dispatch("show");
              if (this.options.preserveScroll) {
                  this.node.scrollTop = this.getChildProperties(child).scrollTop || 0;
              }
          }
      }, {
          key: "setActive",
          value: function setActive(element) {
              if (this.activeChild === element) {
                  return;
              }
              if (this.activeChild) {
                  this.deactivateChild(this.activeChild);
              }
              this.updateActiveChild(element);
              if (this.activeChild) {
                  this.activateChild(this.activeChild);
              }
          }
      }, {
          key: "hasChild",
          value: function hasChild(element) {
              return this.childMap.has(element);
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this2 = this;

              this.addListener("shouldRedrawChild", function (event) {
                  if (event.child.isInDocument()) {
                      event.child.redraw();
                  } else {
                      _this2.getChildProperties(event.child).isUpToDate = false;
                  }
              });
          }
      }]);
      return Switcher;
  }(UI.Element);

  var _class$7, _temp$2;

  var Router = function (_Switcher) {
      inherits(Router, _Switcher);

      function Router() {
          classCallCheck(this, Router);
          return possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).apply(this, arguments));
      }

      createClass(Router, [{
          key: "clearCache",
          value: function clearCache() {
              this.getRoutes().clearCache();
          }

          // TODO: should be named getRootRoute() :)

      }, {
          key: "getRoutes",
          value: function getRoutes() {
              return this.options.routes;
          }
      }, {
          key: "getPageNotFound",
          value: function getPageNotFound() {
              var element = UI.createElement("h1", { children: ["Can't find url, make sure you typed it correctly"] });
              element.pageTitle = "Page not found";
              return element;
          }
      }, {
          key: "getPageToRender",
          value: function getPageToRender(urlParts) {
              return this.getRoutes().getPage(urlParts) || this.getPageNotFound();
          }
      }, {
          key: "setURL",
          value: function setURL(urlParts) {
              urlParts = unwrapArray(urlParts);

              var page = this.getPageToRender(urlParts);

              var activePage = this.getActive();

              if (activePage !== page) {
                  activePage && activePage.dispatch("urlExit");
                  this.setActive(page);
                  page.dispatch("urlEnter");
              }

              if (this === this.constructor.Global) {
                  PageTitleManager.setTitle(page.pageTitle);
              }

              this.dispatch("change", urlParts, page, activePage);
          }
      }, {
          key: "addChangeListener",
          value: function addChangeListener(callback) {
              return this.addListener("change", callback);
          }
      }, {
          key: "onMount",
          value: function onMount() {
              if (!Router.Global) {
                  this.constructor.setGlobalRouter(this);
              }
          }
      }], [{
          key: "parseURL",
          value: function parseURL() {
              var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.pathname;

              if (!Array.isArray(path)) {
                  path = path.split("/");
              }
              return path.filter(function (str) {
                  return str != "";
              });
          }
      }, {
          key: "joinURLParts",
          value: function joinURLParts(urlParts) {
              if (urlParts.length) {
                  return "/" + urlParts.join("/") + "/";
              } else {
                  return "/";
              }
          }
      }, {
          key: "changeURL",
          value: function changeURL(url) {
              var replaceHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              if (Array.isArray(url)) {
                  url = this.joinURLParts(url);
              }

              if (url === window.location.pathname) {
                  return;
              }
              var historyArgs = [{}, PageTitleManager.getTitle(), url];
              if (replaceHistory) {
                  var _window$history;

                  (_window$history = window.history).replaceState.apply(_window$history, historyArgs);
              } else {
                  var _window$history2;

                  (_window$history2 = window.history).pushState.apply(_window$history2, historyArgs);
              }

              this.updateURL();
          }
      }, {
          key: "updateURL",
          value: function updateURL() {
              this.Global.setURL(this.parseURL());
          }
      }, {
          key: "setGlobalRouter",
          value: function setGlobalRouter(router) {
              var _this2 = this;

              this.Global = router;
              window.onpopstate = function () {
                  _this2.updateURL();
                  Dispatcher.Global.dispatch("externalURLChange");
              };

              this.updateURL();
          }
      }]);
      return Router;
  }(Switcher);

  var Route = (_temp$2 = _class$7 = function () {
      function Route(expr, pageGenerator) {
          var subroutes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          classCallCheck(this, Route);
          this.cachedPages = new Map();

          this.expr = expr instanceof Array ? expr : [expr];
          this.pageGenerator = pageGenerator;
          this.subroutes = unwrapArray(subroutes);
          if (typeof options === "string") {
              options = { title: options };
          }
          this.options = options;
          this.cachedPages = new Map();
      }

      createClass(Route, [{
          key: "clearCache",
          value: function clearCache() {
              this.cachedPages.clear();
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.subroutes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var subroute = _step.value;

                      subroute.clearCache();
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }
          }
      }, {
          key: "matches",
          value: function matches(urlParts) {
              if (urlParts.length < this.expr.length) {
                  return null;
              }
              var args = [];
              for (var i = 0; i < this.expr.length; i += 1) {
                  var isArg = this.expr[i] === this.constructor.ARG_KEY;
                  if (urlParts[i] != this.expr[i] && !isArg) {
                      return null;
                  }
                  if (isArg) {
                      args.push(urlParts[i]);
                  }
              }
              return {
                  args: args,
                  urlParts: urlParts.slice(this.expr.length)
              };
          }
      }, {
          key: "getPageTitle",
          value: function getPageTitle() {
              return this.options.title;
          }
      }, {
          key: "generatePage",
          value: function generatePage() {
              for (var _len = arguments.length, argsArray = Array(_len), _key = 0; _key < _len; _key++) {
                  argsArray[_key] = arguments[_key];
              }

              if (!this.pageGenerator) {
                  return null;
              }

              var serializedArgs = argsArray.toString();
              if (!this.cachedPages.has(serializedArgs)) {
                  var pageGenerator = this.pageGenerator;
                  var args = unwrapArray(argsArray);
                  var generatorArgs = { args: args, argsArray: argsArray };
                  var page = pageGenerator.prototype instanceof UI.Element ? new pageGenerator(generatorArgs) : pageGenerator(generatorArgs);
                  if (!page.pageTitle) {
                      var myPageTitle = this.getPageTitle();
                      if (myPageTitle) {
                          page.pageTitle = this.getPageTitle();
                      }
                  }
                  this.cachedPages.set(serializedArgs, page);
              }
              return this.cachedPages.get(serializedArgs);
          }
      }, {
          key: "matchesOwnNode",
          value: function matchesOwnNode(urlParts) {
              return urlParts.length === 0;
          }
      }, {
          key: "getPage",
          value: function getPage(urlParts, router) {
              for (var _len2 = arguments.length, argsArray = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                  argsArray[_key2 - 2] = arguments[_key2];
              }

              if (this.matchesOwnNode(urlParts)) {
                  return this.generatePage.apply(this, argsArray);
              }
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = this.subroutes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var subroute = _step2.value;

                      var match = subroute.matches(urlParts);
                      if (match) {
                          if (match.args.length) {
                              argsArray.push(match.args);
                          }
                          var page = subroute.getPage.apply(subroute, [match.urlParts, router].concat(argsArray));
                          if (page && !page.pageTitle) {
                              page.pageTitle = this.getPageTitle();
                          }
                          return page;
                      }
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }
          }
      }]);
      return Route;
  }(), _class$7.ARG_KEY = "%s", _temp$2);

  var TerminalRoute = function (_Route) {
      inherits(TerminalRoute, _Route);

      function TerminalRoute(expr, pageGenerator) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          classCallCheck(this, TerminalRoute);
          return possibleConstructorReturn(this, (TerminalRoute.__proto__ || Object.getPrototypeOf(TerminalRoute)).call(this, expr, pageGenerator, [], options));
      }

      createClass(TerminalRoute, [{
          key: "matchesOwnNode",
          value: function matchesOwnNode(urlParts) {
              return true;
          }
      }, {
          key: "getPage",
          value: function getPage(urlParts, router) {
              var page = get(TerminalRoute.prototype.__proto__ || Object.getPrototypeOf(TerminalRoute.prototype), "getPage", this).apply(this, arguments);
              setTimeout(function () {
                  page.setURL(urlParts);
              });
              return page;
          }
      }]);
      return TerminalRoute;
  }(Route);

  // This is the object that will be used to translate text
  var translationMap = null;

  // Keep a set of all UI Element that need to be updated when the language changes
  // Can't use a weak set here unfortunately because we need iteration
  // That's why we must make sure to remove all nodes from the set when destroying them
  UI.TranslationElements = new Set();

  UI.TranslationTextElement = function (_UI$TextElement) {
      inherits(TranslationTextElement, _UI$TextElement);

      function TranslationTextElement(value) {
          classCallCheck(this, TranslationTextElement);

          if (arguments.length === 1) {
              var _this = possibleConstructorReturn(this, (TranslationTextElement.__proto__ || Object.getPrototypeOf(TranslationTextElement)).call(this, value));
          } else {
              var _this = possibleConstructorReturn(this, (TranslationTextElement.__proto__ || Object.getPrototypeOf(TranslationTextElement)).call(this, ""));

              _this.setValue.apply(_this, arguments);
          }
          return possibleConstructorReturn(_this);
      }

      createClass(TranslationTextElement, [{
          key: "setValue",
          value: function setValue(value) {
              if (arguments.length > 1) {
                  this.value = Array.from(arguments);
              } else {
                  this.value = value;
              }
              if (this.node) {
                  this.redraw();
              }
          }
      }, {
          key: "evaluateSprintf",
          value: function evaluateSprintf(str) {
              throw Error("Not yet implemented");
          }
      }, {
          key: "evaluate",
          value: function evaluate(strings) {
              for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  values[_key - 1] = arguments[_key];
              }

              if (!Array.isArray(strings)) {
                  return this.evaluateSprintf.apply(this, arguments);
                  // This means strings is a string with the sprintf pattern
              } else {
                  // Using template literals https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
                  if (arguments.length != strings.length) {
                      console.error("Invalid arguments to evaluate ", Array.from(arguments));
                  }
                  var result = strings[0];
                  for (var i = 1; i < arguments.length; i++) {
                      result += arguments[i];
                      result += strings[i];
                  }
                  return result;
              }
          }
      }, {
          key: "getValue",
          value: function getValue() {
              var value = this.value;
              if (Array.isArray(this.value)) {
                  var _translationMap2;

                  value = translationMap && (_translationMap2 = translationMap).get.apply(_translationMap2, toConsumableArray(value)) || this.evaluate.apply(this, toConsumableArray(value));
              } else {
                  // TODO: if translationMap.get() returns "", keep, skip only if returning null
                  value = translationMap && translationMap.get(value) || value;
              }
              return value;
          }
      }, {
          key: "onMount",
          value: function onMount() {
              UI.TranslationElements.add(this);
          }
      }, {
          key: "onUnmount",
          value: function onUnmount() {
              UI.TranslationElements.delete(this);
          }
      }]);
      return TranslationTextElement;
  }(UI.TextElement);

  // This method is a shorthand notation to create a new translatable text element
  // TODO: should also support being used as a string template
  UI.T = function (str) {
      return new UI.TranslationTextElement(str);
  };

  var _class$8, _descriptor$3, _descriptor2$3, _descriptor3$3, _descriptor4$2, _descriptor5$2, _descriptor6$2, _descriptor7$1;

  function _initDefineProp$4(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$4(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var HorizontalOverflowStyle = (_class$8 = function (_StyleSheet) {
      inherits(HorizontalOverflowStyle, _StyleSheet);

      function HorizontalOverflowStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, HorizontalOverflowStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = HorizontalOverflowStyle.__proto__ || Object.getPrototypeOf(HorizontalOverflowStyle)).call.apply(_ref, [this].concat(args))), _this), _this.baseColor = function () {
              return _this.themeProperties.COLOR_PRIMARY;
          }, _this.arrowColor = function () {
              return enhance(_this.baseColor(), .8);
          }, _this.arrowBackground = function () {
              return _this.baseColor();
          }, _this.arrowHoverColor = function () {
              return enhance(_this.baseColor(), 1);
          }, _this.arrowHoverBackground = function () {
              return enhance(_this.baseColor(), -.3);
          }, _this.transitionTime = .15, _this.arrow = {
              zIndex: "1",
              alignItems: "center",
              padding: ".3em",
              fontSize: "150% !important",
              height: "100%",
              position: "absolute",
              cursor: "pointer",
              top: 0,
              color: function color() {
                  return _this.arrowColor();
              },
              backgroundColor: function backgroundColor() {
                  return _this.arrowBackground();
              },
              ":hover": {
                  color: function color() {
                      return _this.arrowHoverColor();
                  },
                  backgroundColor: function backgroundColor() {
                      return _this.arrowHoverBackground();
                  }
              }
          }, _initDefineProp$4(_this, "leftArrow", _descriptor$3, _this), _initDefineProp$4(_this, "rightArrow", _descriptor2$3, _this), _initDefineProp$4(_this, "horizontalOverflow", _descriptor3$3, _this), _initDefineProp$4(_this, "childrenContainer", _descriptor4$2, _this), _initDefineProp$4(_this, "swipeAnimation", _descriptor5$2, _this), _initDefineProp$4(_this, "hiddenArrow", _descriptor6$2, _this), _initDefineProp$4(_this, "pusherContainer", _descriptor7$1, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return HorizontalOverflowStyle;
  }(StyleSheet), (_descriptor$3 = _applyDecoratedDescriptor$4(_class$8.prototype, "leftArrow", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          var _this2 = this;

          return Object.assign({}, this.arrow, {
              left: 0,
              borderRight: function borderRight() {
                  return "2px solid " + _this2.arrowHoverBackground();
              }
          });
      }
  }), _descriptor2$3 = _applyDecoratedDescriptor$4(_class$8.prototype, "rightArrow", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          var _this3 = this;

          return Object.assign({}, this.arrow, {
              right: 0,
              borderLeft: function borderLeft() {
                  return "2px solid " + _this3.arrowHoverBackground();
              }
          });
      }
  }), _descriptor3$3 = _applyDecoratedDescriptor$4(_class$8.prototype, "horizontalOverflow", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              position: "relative",
              width: "100%",
              ">:first-child": {
                  display: "flex"
              },
              ">:last-child": {
                  display: "flex"
              }
          };
      }
  }), _descriptor4$2 = _applyDecoratedDescriptor$4(_class$8.prototype, "childrenContainer", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              width: "100%",
              overflow: Device.isMobileDevice() ? "auto" : "hidden",
              display: "flex"
          };
      }
  }), _descriptor5$2 = _applyDecoratedDescriptor$4(_class$8.prototype, "swipeAnimation", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              transition: "margin-left " + this.transitionTime + "s ease"
          };
      }
  }), _descriptor6$2 = _applyDecoratedDescriptor$4(_class$8.prototype, "hiddenArrow", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              display: "none !important"
          };
      }
  }), _descriptor7$1 = _applyDecoratedDescriptor$4(_class$8.prototype, "pusherContainer", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              overflow: Device.isMobileDevice() ? "auto" : "hidden",
              position: "relative",
              display: "flex",
              width: "100%"
          };
      }
  })), _class$8);

  var _class$9, _descriptor$4, _descriptor2$4, _descriptor3$4, _descriptor4$3, _descriptor5$3, _class3$2, _descriptor6$3, _descriptor7$2, _descriptor8$2, _class5$1, _descriptor9$2, _descriptor10$2, _descriptor11$2, _class7$2, _descriptor12$2, _descriptor13$2, _descriptor14$2, _descriptor15$2, _descriptor16$2, _descriptor17$2;

  function _initDefineProp$5(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$5(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var BaseTabAreaStyle = (_class$9 = function (_StyleSheet) {
      inherits(BaseTabAreaStyle, _StyleSheet);

      function BaseTabAreaStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, BaseTabAreaStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = BaseTabAreaStyle.__proto__ || Object.getPrototypeOf(BaseTabAreaStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$5(_this, "tab", _descriptor$4, _this), _initDefineProp$5(_this, "activeTab", _descriptor2$4, _this), _initDefineProp$5(_this, "nav", _descriptor3$4, _this), _initDefineProp$5(_this, "switcher", _descriptor4$3, _this), _initDefineProp$5(_this, "tabArea", _descriptor5$3, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return BaseTabAreaStyle;
  }(StyleSheet), (_descriptor$4 = _applyDecoratedDescriptor$5(_class$9.prototype, "tab", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              userSelect: "none",
              display: "inline-block",
              position: "relative"
          };
      }
  }), _descriptor2$4 = _applyDecoratedDescriptor$5(_class$9.prototype, "activeTab", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {};
      }
  }), _descriptor3$4 = _applyDecoratedDescriptor$5(_class$9.prototype, "nav", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              listStyle: "none"
          };
      }
  }), _descriptor4$3 = _applyDecoratedDescriptor$5(_class$9.prototype, "switcher", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              flex: "1",
              overflow: "auto"
          };
      }
  }), _descriptor5$3 = _applyDecoratedDescriptor$5(_class$9.prototype, "tabArea", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              display: "flex",
              flexDirection: "column"
          };
      }
  })), _class$9);
  var DefaultTabAreaStyle = (_class3$2 = function (_BaseTabAreaStyle) {
      inherits(DefaultTabAreaStyle, _BaseTabAreaStyle);

      function DefaultTabAreaStyle() {
          var _ref2;

          var _temp2, _this2, _ret2;

          classCallCheck(this, DefaultTabAreaStyle);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = DefaultTabAreaStyle.__proto__ || Object.getPrototypeOf(DefaultTabAreaStyle)).call.apply(_ref2, [this].concat(args))), _this2), _initDefineProp$5(_this2, "tab", _descriptor6$3, _this2), _initDefineProp$5(_this2, "activeTab", _descriptor7$2, _this2), _initDefineProp$5(_this2, "nav", _descriptor8$2, _this2), _temp2), possibleConstructorReturn(_this2, _ret2);
      }

      return DefaultTabAreaStyle;
  }(BaseTabAreaStyle), (_descriptor6$3 = _applyDecoratedDescriptor$5(_class3$2.prototype, "tab", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          return {
              marginBottom: "-1px",
              textDecoration: "none !important",
              marginRight: "2px",
              lineHeight: "1.42857143",
              border: "1px solid transparent",
              borderRadius: "4px 4px 0 0",
              padding: "8px",
              paddingLeft: "10px",
              paddingRight: "10px",
              ":hover": {
                  cursor: "pointer",
                  backgroundColor: "#eee",
                  color: "#555",
                  border: "1px solid #ddd",
                  borderBottomColor: "transparent"
              }
          };
      }
  }), _descriptor7$2 = _applyDecoratedDescriptor$5(_class3$2.prototype, "activeTab", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          return {
              color: "#555 !important",
              cursor: "default !important",
              backgroundColor: "#fff !important",
              border: "1px solid #ddd !important",
              borderBottomColor: "transparent !important"
          };
      }
  }), _descriptor8$2 = _applyDecoratedDescriptor$5(_class3$2.prototype, "nav", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          return {
              borderBottom: "1px solid #ddd",
              paddingLeft: "0",
              marginBottom: "0"
          };
      }
  })), _class3$2);
  var MinimalistTabAreaStyle = (_class5$1 = function (_BaseTabAreaStyle2) {
      inherits(MinimalistTabAreaStyle, _BaseTabAreaStyle2);

      function MinimalistTabAreaStyle() {
          var _ref3;

          var _temp3, _this3, _ret3;

          classCallCheck(this, MinimalistTabAreaStyle);

          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
          }

          return _ret3 = (_temp3 = (_this3 = possibleConstructorReturn(this, (_ref3 = MinimalistTabAreaStyle.__proto__ || Object.getPrototypeOf(MinimalistTabAreaStyle)).call.apply(_ref3, [this].concat(args))), _this3), _initDefineProp$5(_this3, "tab", _descriptor9$2, _this3), _initDefineProp$5(_this3, "activeTab", _descriptor10$2, _this3), _initDefineProp$5(_this3, "nav", _descriptor11$2, _this3), _temp3), possibleConstructorReturn(_this3, _ret3);
      }

      return MinimalistTabAreaStyle;
  }(BaseTabAreaStyle), (_descriptor9$2 = _applyDecoratedDescriptor$5(_class5$1.prototype, "tab", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          return {
              textDecoration: "none !important",
              lineHeight: "1.42857143",
              paddingTop: "6px",
              paddingLeft: "8px",
              paddingRight: "8px",
              paddingBottom: "4px",
              color: "#666",
              borderBottom: "2px solid transparent",
              ":hover": {
                  cursor: "pointer",
                  color: "rgba(51,122,183,1)"
              }
          };
      }
  }), _descriptor10$2 = _applyDecoratedDescriptor$5(_class5$1.prototype, "activeTab", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontWeight: "bold",
              color: "rgba(51,122,183,1)",
              cursor: "default !important",
              borderBottom: "2px solid rgba(51,122,183,1) !important"
          };
      }
  }), _descriptor11$2 = _applyDecoratedDescriptor$5(_class5$1.prototype, "nav", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          return {
              position: "relative",
              borderBottom: "1px solid #aaa"
          };
      }
  })), _class5$1);
  var FlatTabAreaStyle = (_class7$2 = function (_BaseTabAreaStyle3) {
      inherits(FlatTabAreaStyle, _BaseTabAreaStyle3);

      function FlatTabAreaStyle() {
          var _ref4;

          var _temp4, _this4, _ret4;

          classCallCheck(this, FlatTabAreaStyle);

          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
          }

          return _ret4 = (_temp4 = (_this4 = possibleConstructorReturn(this, (_ref4 = FlatTabAreaStyle.__proto__ || Object.getPrototypeOf(FlatTabAreaStyle)).call.apply(_ref4, [this].concat(args))), _this4), _this4.transitionTime = .3, _initDefineProp$5(_this4, "tab", _descriptor12$2, _this4), _initDefineProp$5(_this4, "activeTab", _descriptor13$2, _this4), _initDefineProp$5(_this4, "nav", _descriptor14$2, _this4), _initDefineProp$5(_this4, "activeBar", _descriptor15$2, _this4), _initDefineProp$5(_this4, "activeBarAnimated", _descriptor16$2, _this4), _initDefineProp$5(_this4, "activeOnRender", _descriptor17$2, _this4), _temp4), possibleConstructorReturn(_this4, _ret4);
      }

      return FlatTabAreaStyle;
  }(BaseTabAreaStyle), (_descriptor12$2 = _applyDecoratedDescriptor$5(_class7$2.prototype, "tab", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          var _this5 = this;

          return {
              textDecoration: "none !important",
              padding: function padding() {
                  return _this5.themeProperties.FLAT_TAB_AREA_PADDING_SIDES;
              },
              letterSpacing: "0.5px",
              color: function color() {
                  return enhance(_this5.themeProperties.COLOR_FOREGROUND_BODY, 0.4) + "!important";
              },
              fontWeight: "bold",
              ":hover": {
                  cursor: "pointer",
                  color: function color() {
                      return enhance(_this5.themeProperties.COLOR_FOREGROUND_BODY, 0.6) + "!important";
                  }
              }
          };
      }
  }), _descriptor13$2 = _applyDecoratedDescriptor$5(_class7$2.prototype, "activeTab", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          var _this6 = this;

          return {
              color: function color() {
                  return enhance(_this6.themeProperties.COLOR_FOREGROUND_BODY, 0.8) + "!important";
              },
              cursor: "default !important"
          };
      }
  }), _descriptor14$2 = _applyDecoratedDescriptor$5(_class7$2.prototype, "nav", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          var _this7 = this;

          return {
              whiteSpace: "nowrap",
              position: "relative",
              paddingTop: "4px",
              backgroundColor: function backgroundColor() {
                  return _this7.themeProperties.COLOR_FOREGROUND_BODY;
              }
          };
      }
  }), _descriptor15$2 = _applyDecoratedDescriptor$5(_class7$2.prototype, "activeBar", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          var _this8 = this;

          return {
              height: 3,
              backgroundColor: function backgroundColor() {
                  return _this8.themeProperties.COLOR_PRIMARY;
              },
              position: "absolute",
              left: 0,
              bottom: 0
          };
      }
  }), _descriptor16$2 = _applyDecoratedDescriptor$5(_class7$2.prototype, "activeBarAnimated", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              transition: this.transitionTime + "s width, " + this.transitionTime + "s left"
          };
      }
  }), _descriptor17$2 = _applyDecoratedDescriptor$5(_class7$2.prototype, "activeOnRender", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          var _this9 = this;

          return {
              paddingBottom: function paddingBottom() {
                  return _this9.themeProperties.FLAT_TAB_AREA_PADDING_SIDES - 3;
              },
              borderBottom: function borderBottom() {
                  return "3px solid " + _this9.themeProperties.COLOR_PRIMARY;
              }
          };
      }
  })), _class7$2);

  var FlatTabAreaHorizontalOverflowStyle = function (_HorizontalOverflowSt) {
      inherits(FlatTabAreaHorizontalOverflowStyle, _HorizontalOverflowSt);

      function FlatTabAreaHorizontalOverflowStyle() {
          var _ref5;

          var _temp5, _this10, _ret5;

          classCallCheck(this, FlatTabAreaHorizontalOverflowStyle);

          for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
          }

          return _ret5 = (_temp5 = (_this10 = possibleConstructorReturn(this, (_ref5 = FlatTabAreaHorizontalOverflowStyle.__proto__ || Object.getPrototypeOf(FlatTabAreaHorizontalOverflowStyle)).call.apply(_ref5, [this].concat(args))), _this10), _this10.baseColor = function () {
              return _this10.themeProperties.COLOR_FOREGROUND_BODY;
          }, _this10.arrowColor = function () {
              return enhance(_this10.baseColor(), .4);
          }, _this10.arrowBackground = function () {
              return _this10.baseColor();
          }, _this10.arrowHoverColor = function () {
              return enhance(_this10.baseColor(), .8);
          }, _this10.arrowHoverBackground = function () {
              return enhance(_this10.baseColor(), .1);
          }, _temp5), possibleConstructorReturn(_this10, _ret5);
      }

      return FlatTabAreaHorizontalOverflowStyle;
  }(HorizontalOverflowStyle);

  var _dec$3, _class$a;

  var BasicTabTitle = function (_Link) {
      inherits(BasicTabTitle, _Link);

      function BasicTabTitle() {
          classCallCheck(this, BasicTabTitle);
          return possibleConstructorReturn(this, (BasicTabTitle.__proto__ || Object.getPrototypeOf(BasicTabTitle)).apply(this, arguments));
      }

      createClass(BasicTabTitle, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.tab);
              if (this.options.active) {
                  attr.addClass(this.styleSheet.activeTab);
              }
          }
      }, {
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  newTab: false
              };
          }
      }, {
          key: "canOverwrite",
          value: function canOverwrite(existingElement) {
              // Disable reusing with different panels, since we want to attach listeners to the panel
              return get(BasicTabTitle.prototype.__proto__ || Object.getPrototypeOf(BasicTabTitle.prototype), "canOverwrite", this).call(this, existingElement) && this.options.panel === existingElement.options.panel;
          }
      }, {
          key: "setActive",
          value: function setActive(active) {
              var _this2 = this;

              this.options.active = active;
              this.redraw();
              if (active) {
                  this.options.activeTabDispatcher.setActive(this.getPanel(), function () {
                      _this2.setActive(false);
                  });
              }
          }
      }, {
          key: "getPanel",
          value: function getPanel() {
              return this.options.panel;
          }
      }, {
          key: "getTitle",
          value: function getTitle() {
              if (this.options.title) {
                  return this.options.title;
              }
              var panel = this.getPanel();
              if (typeof panel.getTitle === "function") {
                  return panel.getTitle();
              }
              return panel.options.title;
          }
      }, {
          key: "render",
          value: function render() {
              return [this.getTitle()];
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this3 = this;

              get(BasicTabTitle.prototype.__proto__ || Object.getPrototypeOf(BasicTabTitle.prototype), "onMount", this).call(this);

              if (this.options.active) {
                  this.setActive(true);
              }

              this.addClickListener(function () {
                  _this3.setActive(true);
              });

              if (this.options.panel && this.options.panel.addListener) {
                  this.attachListener(this.options.panel, "show", function () {
                      _this3.setActive(true);
                  });
              }
          }
      }]);
      return BasicTabTitle;
  }(Link);

  var TabTitleArea = function (_UI$Element) {
      inherits(TabTitleArea, _UI$Element);

      function TabTitleArea() {
          classCallCheck(this, TabTitleArea);
          return possibleConstructorReturn(this, (TabTitleArea.__proto__ || Object.getPrototypeOf(TabTitleArea)).apply(this, arguments));
      }

      return TabTitleArea;
  }(UI.Element);

  var TabArea = (_dec$3 = registerStyle(DefaultTabAreaStyle), _dec$3(_class$a = function (_UI$Element2) {
      inherits(TabArea, _UI$Element2);

      function TabArea() {
          var _ref;

          var _temp, _this5, _ret;

          classCallCheck(this, TabArea);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this5 = possibleConstructorReturn(this, (_ref = TabArea.__proto__ || Object.getPrototypeOf(TabArea)).call.apply(_ref, [this].concat(args))), _this5), _this5.activeTabDispatcher = new SingleActiveElementDispatcher(), _temp), possibleConstructorReturn(_this5, _ret);
      }

      createClass(TabArea, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  autoActive: true, // means the first Tab will be automatically selected
                  // lazyRender: true, // TODO: should be true by default
                  panelClass: null, // Custom css class can be added to panels
                  titleAreaClass: null // Custom css class can be added to title area
              };
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.tabArea);
          }
      }, {
          key: "createTabPanel",
          value: function createTabPanel(panel) {
              var tab = UI.createElement(BasicTabTitle, { panel: panel, activeTabDispatcher: this.activeTabDispatcher,
                  active: panel.options.active, href: panel.options.tabHref,
                  styleSheet: this.styleSheet });

              return [tab, panel];
          }
      }, {
          key: "appendChild",
          value: function appendChild(panel, doMount) {
              var _createTabPanel = this.createTabPanel(panel),
                  _createTabPanel2 = slicedToArray(_createTabPanel, 2),
                  tabTitle = _createTabPanel2[0],
                  tabPanel = _createTabPanel2[1];

              this.options.children.push(panel);

              this.titleArea.appendChild(tabTitle);
              this.switcherArea.appendChild(tabPanel, doMount || !this.options.lazyRender);
          }
      }, {
          key: "getTitleArea",
          value: function getTitleArea(tabTitles) {
              var titleAreaClass = this.styleSheet.nav;
              if (this.options.titleAreaClass) {
                  titleAreaClass += " " + this.options.titleAreaClass;
              }
              return UI.createElement(
                  TabTitleArea,
                  { ref: "titleArea", className: titleAreaClass },
                  tabTitles
              );
          }
      }, {
          key: "getSwitcher",
          value: function getSwitcher(tabPanels) {
              var switcherClass = this.styleSheet.switcher;
              if (this.options.panelClass) {
                  switcherClass += " " + this.options.panelClass;
              }
              return UI.createElement(
                  Switcher,
                  { className: switcherClass, ref: "switcherArea", lazyRender: this.options.lazyRender },
                  tabPanels
              );
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              var tabTitles = [];
              var tabPanels = [];
              var activeTab = void 0;

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = unwrapArray(this.render())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var panel = _step.value;

                      var _createTabPanel3 = this.createTabPanel(panel),
                          _createTabPanel4 = slicedToArray(_createTabPanel3, 2),
                          _tabTitle2 = _createTabPanel4[0],
                          _tabPanel = _createTabPanel4[1];

                      if (this.activePanel === _tabPanel) {
                          activeTab = _tabTitle2;
                      }

                      tabTitles.push(_tabTitle2);
                      tabPanels.push(_tabPanel);
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              if (!activeTab) {
                  var _iteratorNormalCompletion2 = true;
                  var _didIteratorError2 = false;
                  var _iteratorError2 = undefined;

                  try {
                      for (var _iterator2 = tabTitles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                          var tabTitle = _step2.value;

                          if (tabTitle.options.active) {
                              activeTab = tabTitle;
                          }
                      }
                  } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion2 && _iterator2.return) {
                              _iterator2.return();
                          }
                      } finally {
                          if (_didIteratorError2) {
                              throw _iteratorError2;
                          }
                      }
                  }
              } else {
                  for (var i = 0; i < tabPanels.length; i += 1) {
                      var _tabTitle = tabTitles[i];
                      var tabPanel = tabPanels[i];

                      if (_tabTitle.options.active) {
                          _tabTitle.options.active = false;
                      }
                      if (tabPanels.options.active) {
                          tabPanels.options.active = false;
                      }

                      if (activeTab === _tabTitle) {
                          tabPanel.options.active = true;
                          _tabTitle.options.active = true;
                      }
                  }
              }

              if (this.options.autoActive && !activeTab && tabTitles.length > 0) {
                  tabTitles[0].options.active = true;
              }

              return [this.getTitleArea(tabTitles), this.getSwitcher(tabPanels)];
          }
      }, {
          key: "setActive",
          value: function setActive(panel) {
              this.activeTabDispatcher.setActive(panel);
          }
      }, {
          key: "getActive",
          value: function getActive() {
              return this.activeTabDispatcher.getActive();
          }
      }, {
          key: "onSetActive",
          value: function onSetActive(panel) {
              this.switcherArea.setActive(panel);
              this.activePanel = panel;
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this6 = this;

              this.attachListener(this.activeTabDispatcher, function (panel) {
                  _this6.onSetActive(panel);
              });

              this.addListener("resize", function () {
                  _this6.switcherArea.dispatch("resize");
              });
          }
      }]);
      return TabArea;
  }(UI.Element)) || _class$a);

  // Contains classes to abstract some generic Font Awesome usecases.

  var FAIcon = function (_UI$Primitive) {
      inherits(FAIcon, _UI$Primitive);

      function FAIcon() {
          classCallCheck(this, FAIcon);
          return possibleConstructorReturn(this, (FAIcon.__proto__ || Object.getPrototypeOf(FAIcon)).apply(this, arguments));
      }

      createClass(FAIcon, [{
          key: "getIcon",
          value: function getIcon() {
              return this.options.icon;
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass("fa");
              attr.addClass("fa-" + this.getIcon());
              if (this.options.size) {
                  attr.addClass("fa-" + this.options.size);
              }
          }
      }, {
          key: "setIcon",
          value: function setIcon(icon) {
              this.options.icon = icon;
              this.redraw();
          }
      }]);
      return FAIcon;
  }(UI.Primitive("i"));

  var FACollapseIcon = function (_FAIcon) {
      inherits(FACollapseIcon, _FAIcon);

      function FACollapseIcon() {
          classCallCheck(this, FACollapseIcon);
          return possibleConstructorReturn(this, (FACollapseIcon.__proto__ || Object.getPrototypeOf(FACollapseIcon)).apply(this, arguments));
      }

      createClass(FACollapseIcon, [{
          key: "getIcon",
          value: function getIcon() {
              if (this.options.collapsed) {
                  return "angle-right";
              } else {
                  return "angle-down";
              }
          }
      }, {
          key: "setCollapsed",
          value: function setCollapsed(collapsed) {
              this.options.collapsed = collapsed;
              this.redraw();
          }
      }, {
          key: "toggleCollapsed",
          value: function toggleCollapsed() {
              this.setCollapsed(!this.options.collapsed);
          }
      }]);
      return FACollapseIcon;
  }(FAIcon);

  var FASortIcon = function (_FAIcon2) {
      inherits(FASortIcon, _FAIcon2);

      function FASortIcon() {
          classCallCheck(this, FASortIcon);
          return possibleConstructorReturn(this, (FASortIcon.__proto__ || Object.getPrototypeOf(FASortIcon)).apply(this, arguments));
      }

      createClass(FASortIcon, [{
          key: "getIcon",
          value: function getIcon() {
              if (this.options.direction === Direction.UP) {
                  return "sort-asc";
              } else if (this.options.direction === Direction.DOWN) {
                  return "sort-desc";
              } else {
                  return "sort";
              }
          }
      }, {
          key: "setDirection",
          value: function setDirection(direction) {
              this.options.direction = direction;
              this.redraw();
          }
      }]);
      return FASortIcon;
  }(FAIcon);

  var _dec$4, _class$b;

  var HorizontalOverflow = (_dec$4 = registerStyle(HorizontalOverflowStyle), _dec$4(_class$b = function (_UI$Element) {
      inherits(HorizontalOverflow, _UI$Element);

      function HorizontalOverflow() {
          classCallCheck(this, HorizontalOverflow);
          return possibleConstructorReturn(this, (HorizontalOverflow.__proto__ || Object.getPrototypeOf(HorizontalOverflow)).apply(this, arguments));
      }

      createClass(HorizontalOverflow, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  swipePercent: .5
              };
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              get(HorizontalOverflow.prototype.__proto__ || Object.getPrototypeOf(HorizontalOverflow.prototype), "extraNodeAttributes", this).call(this, attr);
              attr.addClass(this.styleSheet.horizontalOverflow);
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              return [UI.createElement(FAIcon, { ref: "leftArrow", icon: "chevron-left", className: this.styleSheet.leftArrow + " " + this.styleSheet.hiddenArrow }), UI.createElement(
                  "div",
                  { ref: "childrenContainer", className: this.styleSheet.childrenContainer },
                  UI.createElement("div", { ref: "swipeHelperChild" }),
                  UI.createElement(
                      "div",
                      { ref: "pusherContainer", className: this.styleSheet.pusherContainer },
                      this.render()
                  )
              ), UI.createElement(FAIcon, { ref: "rightArrow", icon: "chevron-right", className: this.styleSheet.rightArrow + " " + this.styleSheet.hiddenArrow })];
          }
      }, {
          key: "appendChild",
          value: function appendChild() {
              var _pusherContainer;

              (_pusherContainer = this.pusherContainer).appendChild.apply(_pusherContainer, arguments);
          }
      }, {
          key: "eraseChild",
          value: function eraseChild() {
              var _pusherContainer2;

              (_pusherContainer2 = this.pusherContainer).eraseChild.apply(_pusherContainer2, arguments);
          }
      }, {
          key: "checkForOverflow",
          value: function checkForOverflow() {
              var children = this.pusherContainer.children;

              if (!children.length) {
                  return;
              }

              var shouldOverflowRight = false;
              var shouldOverflowLeft = false;

              var elementRect = this.node.getBoundingClientRect();

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var child = _step.value;

                      var childRect = child.node.getBoundingClientRect();
                      shouldOverflowRight |= elementRect.left + elementRect.width < childRect.left + childRect.width - 1;
                      shouldOverflowLeft |= elementRect.left > childRect.left;
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              var leftArrowHidden = !this.leftArrow.getWidth();
              if (shouldOverflowLeft && leftArrowHidden) {
                  this.leftArrow.removeClass(this.styleSheet.hiddenArrow);
              } else if (!shouldOverflowLeft && !leftArrowHidden) {
                  this.leftArrow.addClass(this.styleSheet.hiddenArrow);
              }

              var rightArrowHidden = !this.rightArrow.getWidth();
              if (shouldOverflowRight && rightArrowHidden) {
                  this.rightArrow.removeClass(this.styleSheet.hiddenArrow);
              } else if (!shouldOverflowRight && !rightArrowHidden) {
                  this.rightArrow.addClass(this.styleSheet.hiddenArrow);
              }
          }
      }, {
          key: "scrollContent",
          value: function scrollContent(amount) {
              var _this2 = this;

              var scrollLeft = void 0;
              var containerNode = this.pusherContainer.node;
              if (amount < 0) {
                  scrollLeft = Math.max(0, containerNode.scrollLeft + amount * this.getWidth());
              } else {
                  scrollLeft = Math.min(containerNode.scrollWidth - this.getWidth(), containerNode.scrollLeft + amount * this.getWidth());
              }

              if (amount < 0) {
                  this.swipeHelperChild.setStyle("marginLeft", scrollLeft - containerNode.scrollLeft);
                  containerNode.scrollLeft = scrollLeft;
              }

              this.pusherContainer.setWidth("fit-content");
              this.swipeHelperChild.addClass(this.styleSheet.swipeAnimation);

              if (amount < 0) {
                  this.swipeHelperChild.setStyle("marginLeft", 0);
              } else {
                  this.swipeHelperChild.setStyle("marginLeft", containerNode.scrollLeft - scrollLeft);
              }

              setTimeout(function () {
                  _this2.pusherContainer.setWidth("100%");
                  _this2.swipeHelperChild.removeClass(_this2.styleSheet.swipeAnimation);
                  containerNode.scrollLeft = scrollLeft;
                  _this2.swipeHelperChild.setStyle("marginLeft", 0);
                  _this2.checkForOverflow();
              }, this.styleSheet.transitionTime * 1000);
          }
      }, {
          key: "scrollContentLeft",
          value: function scrollContentLeft() {
              this.scrollContent(-this.options.swipePercent);
          }
      }, {
          key: "scrollContentRight",
          value: function scrollContentRight() {
              this.scrollContent(this.options.swipePercent);
          }

          // This method should be overwritten, and it is called whenever the position of the elements is changed.

      }, {
          key: "handleEventAndHandlePositionChange",
          value: function handleEventAndHandlePositionChange(callback) {
              callback();
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this3 = this;

              this.pusherContainer.addNodeListener("scroll", function () {
                  return _this3.handleEventAndHandlePositionChange(function () {
                      return _this3.checkForOverflow();
                  });
              });

              this.addListener("resize", function () {
                  return _this3.handleEventAndHandlePositionChange(function () {
                      return _this3.checkForOverflow();
                  });
              });

              this.rightArrow.addClickListener(function () {
                  return _this3.handleEventAndHandlePositionChange(function () {
                      return _this3.scrollContentRight();
                  });
              });
              this.leftArrow.addClickListener(function () {
                  return _this3.handleEventAndHandlePositionChange(function () {
                      return _this3.scrollContentLeft();
                  });
              });

              // TODO: Create a resizeable-aware UI Element to be extended by this class and manage these listeners.
              window.addEventListener("resize", function () {
                  return _this3.handleEventAndHandlePositionChange(function () {
                      return _this3.checkForOverflow();
                  });
              });

              setTimeout(function () {
                  return _this3.checkForOverflow();
              });
          }
      }]);
      return HorizontalOverflow;
  }(UI.Element)) || _class$b);

  var _dec$5, _class$c, _dec2$2, _class2$2;

  var FlatTabTitle = function (_BasicTabTitle) {
      inherits(FlatTabTitle, _BasicTabTitle);

      function FlatTabTitle() {
          classCallCheck(this, FlatTabTitle);
          return possibleConstructorReturn(this, (FlatTabTitle.__proto__ || Object.getPrototypeOf(FlatTabTitle)).apply(this, arguments));
      }

      createClass(FlatTabTitle, [{
          key: "setActive",
          value: function setActive(active) {
              var _this2 = this;

              get(FlatTabTitle.prototype.__proto__ || Object.getPrototypeOf(FlatTabTitle.prototype), "setActive", this).call(this, active);
              if (active) {
                  this.options.activeTabTitleDispatcher.setActive(this, function () {
                      _this2.setActive(false);
                  });
              }
          }
      }]);
      return FlatTabTitle;
  }(BasicTabTitle);

  // This class displays a bottom bar on the active tab, and when changing tabs it also moves the bottom bar.

  var FlatTabTitleArea = (_dec$5 = registerStyle(FlatTabAreaStyle), _dec$5(_class$c = function (_TabTitleArea) {
      inherits(FlatTabTitleArea, _TabTitleArea);

      function FlatTabTitleArea() {
          var _ref;

          classCallCheck(this, FlatTabTitleArea);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          // Active bar left and width must be cached so the redraw is done seamlessly.
          var _this3 = possibleConstructorReturn(this, (_ref = FlatTabTitleArea.__proto__ || Object.getPrototypeOf(FlatTabTitleArea)).call.apply(_ref, [this].concat(args)));

          _this3.barLeft = 0;
          _this3.barWidth = 0;
          return _this3;
      }

      createClass(FlatTabTitleArea, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              get(FlatTabTitleArea.prototype.__proto__ || Object.getPrototypeOf(FlatTabTitleArea.prototype), "extraNodeAttributes", this).call(this, attr);
              attr.addClass(this.styleSheet.nav);
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.render()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var child = _step.value;

                      if (child.options.active) {
                          child.addClass(this.styleSheet.activeOnRender);
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              return [UI.createElement(
                  HorizontalOverflow,
                  { ref: "horizontalOverflow", styleSheet: FlatTabAreaHorizontalOverflowStyle },
                  this.render(),
                  UI.createElement("div", { ref: "bar", className: this.styleSheet.activeBar,
                      style: { left: this.barLeft, width: this.barWidth } })
              )];
          }
      }, {
          key: "setActiveBar",
          value: function setActiveBar(activeTab) {
              var barLeft = 0;
              var barWidth = 0;
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = unwrapArray(this.render())[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var tab = _step2.value;

                      var tabWidth = tab.getWidth();
                      if (tab === activeTab) {
                          barWidth = tabWidth;
                          break;
                      }
                      barLeft += tabWidth;
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }

              this.bar.setStyle({
                  left: barLeft,
                  width: barWidth
              });
              this.barLeft = barLeft;
              this.barWidth = barWidth;
          }
      }, {
          key: "setActive",
          value: function setActive(activeTab) {
              var _this4 = this;

              if (this.activeTab) {
                  // Remove the border from the active tab and "prepare" the bar on the current active tab.
                  this.setActiveBar(this.activeTab);
                  this.activeTab.removeClass(this.styleSheet.activeOnRender);
              }

              // Animate the bar.
              setTimeout(function () {
                  _this4.bar.addClass(_this4.styleSheet.activeBarAnimated);
                  _this4.setActiveBar(activeTab);
              });

              setTimeout(function () {
                  // Sometimes, another tab has been clicked between the start and end of an animation, so remove the
                  // active class on that tab, just in case.
                  if (_this4.activeTab) {
                      _this4.activeTab.removeClass(_this4.styleSheet.activeOnRender);
                  }
                  // Add the active class on the current tab.
                  activeTab.addClass(_this4.styleSheet.activeOnRender);
                  // Restore the bar to its "unused" state.
                  _this4.bar.removeClass(_this4.styleSheet.activeBarAnimated);
                  _this4.bar.setWidth(0);
                  // Update the active tab.
                  _this4.activeTab = activeTab;
              }, this.styleSheet.transitionTime * 1000);
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this5 = this;

              get(FlatTabTitleArea.prototype.__proto__ || Object.getPrototypeOf(FlatTabTitleArea.prototype), "onMount", this).call(this);
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                  for (var _iterator3 = this.options.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var child = _step3.value;

                      if (child.options.active) {
                          this.setActive(child);
                      }
                  }
              } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                      }
                  } finally {
                      if (_didIteratorError3) {
                          throw _iteratorError3;
                      }
                  }
              }

              this.attachListener(this.options.activeTabTitleDispatcher, function (tab) {
                  return _this5.setActive(tab);
              });
              this.addListener("resize", function () {
                  return _this5.horizontalOverflow.dispatch("resize");
              });
          }
      }]);
      return FlatTabTitleArea;
  }(TabTitleArea)) || _class$c);

  var FlatTabArea = (_dec2$2 = registerStyle(FlatTabAreaStyle), _dec2$2(_class2$2 = function (_TabArea) {
      inherits(FlatTabArea, _TabArea);

      function FlatTabArea() {
          var _ref2;

          var _temp, _this6, _ret;

          classCallCheck(this, FlatTabArea);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return _ret = (_temp = (_this6 = possibleConstructorReturn(this, (_ref2 = FlatTabArea.__proto__ || Object.getPrototypeOf(FlatTabArea)).call.apply(_ref2, [this].concat(args))), _this6), _this6.activeTabTitleDispatcher = new SingleActiveElementDispatcher(), _temp), possibleConstructorReturn(_this6, _ret);
      }

      createClass(FlatTabArea, [{
          key: "getTitleArea",
          value: function getTitleArea(tabTitles) {
              return UI.createElement(
                  FlatTabTitleArea,
                  { ref: "titleArea", activeTabTitleDispatcher: this.activeTabTitleDispatcher,
                      className: this.options.titleAreaClass || "" },
                  tabTitles
              );
          }
      }, {
          key: "createTabPanel",
          value: function createTabPanel(panel) {
              var tab = UI.createElement(FlatTabTitle, { panel: panel, activeTabDispatcher: this.activeTabDispatcher,
                  activeTabTitleDispatcher: this.activeTabTitleDispatcher,
                  active: panel.options.active, href: panel.options.tabHref,
                  styleSheet: this.styleSheet });

              return [tab, panel];
          }
      }]);
      return FlatTabArea;
  }(TabArea)) || _class2$2);

  // A map that supports multiple values to the same key

  var MultiMap = function () {
      function MultiMap() {
          classCallCheck(this, MultiMap);

          this.map = new Map();
      }

      createClass(MultiMap, [{
          key: "normalizeKey",


          // Methods that are called before every access inside
          // the internal map
          value: function normalizeKey(key) {
              return key;
          }
      }, {
          key: "normalizeValue",
          value: function normalizeValue(value) {
              return value;
          }
      }, {
          key: "append",
          value: function append(key, value) {
              var nKey = this.normalizeKey(key);
              var nValue = this.normalizeValue(value);
              if (this.map.has(nKey)) {
                  this.map.get(nKey).push(nValue);
              } else {
                  this.map.set(nKey, [nValue]);
              }
          }
      }, {
          key: "has",
          value: function has(key) {
              return this.map.has(this.normalizeKey(key));
          }
      }, {
          key: "delete",
          value: function _delete(key) {
              this.map.delete(this.normalizeKey(key));
          }
      }, {
          key: "set",
          value: function set$$1(key, value) {
              this.map.set(this.normalizeKey(key), [this.normalizeValue(value)]);
          }
      }, {
          key: "get",
          value: function get$$1(key) {
              var nKey = this.normalizeKey(key);
              if (this.map.has(nKey)) {
                  return this.map.get(nKey)[0];
              }
              return null;
          }
      }, {
          key: "getAll",
          value: function getAll(key) {
              var nKey = this.normalizeKey(key);
              if (this.map.has(nKey)) {
                  return this.map.get(nKey).slice();
              }
              return null;
          }
      }, {
          key: "forEach",
          value: function forEach(callback, context) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var _step$value = slicedToArray(_step.value, 2),
                          key = _step$value[0],
                          value = _step$value[1];

                      callback.call(context, value, key, this);
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }
          }
      }, {
          key: "keys",
          value: function keys() {
              return mapIterator(this.entries(), function (entry) {
                  return entry[0];
              });
          }
      }, {
          key: "values",
          value: function values() {
              return mapIterator(this.entries(), function (entry) {
                  return entry[1];
              });
          }
      }, {
          key: "entries",
          value: /*#__PURE__*/regeneratorRuntime.mark(function entries() {
              var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, key, values, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, value;

              return regeneratorRuntime.wrap(function entries$(_context) {
                  while (1) {
                      switch (_context.prev = _context.next) {
                          case 0:
                              _iteratorNormalCompletion2 = true;
                              _didIteratorError2 = false;
                              _iteratorError2 = undefined;
                              _context.prev = 3;
                              _iterator2 = this.map.entries()[Symbol.iterator]();

                          case 5:
                              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                  _context.next = 36;
                                  break;
                              }

                              _step2$value = slicedToArray(_step2.value, 2), key = _step2$value[0], values = _step2$value[1];
                              _iteratorNormalCompletion3 = true;
                              _didIteratorError3 = false;
                              _iteratorError3 = undefined;
                              _context.prev = 10;
                              _iterator3 = values[Symbol.iterator]();

                          case 12:
                              if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                  _context.next = 19;
                                  break;
                              }

                              value = _step3.value;
                              _context.next = 16;
                              return [key, value];

                          case 16:
                              _iteratorNormalCompletion3 = true;
                              _context.next = 12;
                              break;

                          case 19:
                              _context.next = 25;
                              break;

                          case 21:
                              _context.prev = 21;
                              _context.t0 = _context["catch"](10);
                              _didIteratorError3 = true;
                              _iteratorError3 = _context.t0;

                          case 25:
                              _context.prev = 25;
                              _context.prev = 26;

                              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                  _iterator3.return();
                              }

                          case 28:
                              _context.prev = 28;

                              if (!_didIteratorError3) {
                                  _context.next = 31;
                                  break;
                              }

                              throw _iteratorError3;

                          case 31:
                              return _context.finish(28);

                          case 32:
                              return _context.finish(25);

                          case 33:
                              _iteratorNormalCompletion2 = true;
                              _context.next = 5;
                              break;

                          case 36:
                              _context.next = 42;
                              break;

                          case 38:
                              _context.prev = 38;
                              _context.t1 = _context["catch"](3);
                              _didIteratorError2 = true;
                              _iteratorError2 = _context.t1;

                          case 42:
                              _context.prev = 42;
                              _context.prev = 43;

                              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                  _iterator2.return();
                              }

                          case 45:
                              _context.prev = 45;

                              if (!_didIteratorError2) {
                                  _context.next = 48;
                                  break;
                              }

                              throw _iteratorError2;

                          case 48:
                              return _context.finish(45);

                          case 49:
                              return _context.finish(42);

                          case 50:
                          case "end":
                              return _context.stop();
                      }
                  }
              }, entries, this, [[3, 38, 42, 50], [10, 21, 25, 33], [26,, 28, 32], [43,, 45, 49]]);
          })
      }, {
          key: Symbol.iterator,
          value: function value() {
              return this.entries();
          }
      }], [{
          key: "iterator",
          value: function iterator(items) {
              return items[Symbol.iterator];
          }
      }]);
      return MultiMap;
  }();

  var _class$d, _temp$3;

  // This class currently mirrors the functionality of Headers on Chrome at the time of implementation
  // TODO: It is specified that the function get() should return the result of getAll() and getAll() deprecated
  var Headers$1 = (_temp$3 = _class$d = function (_MultiMap) {
      inherits(Headers, _MultiMap);

      function Headers(obj) {
          classCallCheck(this, Headers);

          var _this = possibleConstructorReturn(this, (Headers.__proto__ || Object.getPrototypeOf(Headers)).call(this));

          if (obj instanceof Headers) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var _step$value = slicedToArray(_step.value, 2),
                          key = _step$value[0],
                          value = _step$value[1];

                      _this.append(key, value);
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }
          } else if (obj) {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = Object.keys(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var key = _step2.value;

                      _this.append(key, obj[key]);
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }
          }
          return _this;
      }

      createClass(Headers, [{
          key: 'normalizeKey',
          value: function normalizeKey(key) {
              if (typeof key !== 'string') {
                  key = String(key);
              }
              if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(key)) {
                  throw new TypeError('Invalid character in header field name');
              }
              return key.toLowerCase();
          }
      }, {
          key: 'normalizeValue',
          value: function normalizeValue(value) {
              if (typeof value !== "string") {
                  value = String(value);
              }
              return value;
          }
      }]);
      return Headers;
  }(MultiMap), _class$d.polyfill = true, _temp$3);


  function polyfillHeaders(global) {
      global.Headers = global.Headers || Headers$1;
  }

  var _class$e, _temp$4;

  var URLSearchParams$1 = (_temp$4 = _class$e = function (_MultiMap) {
      inherits(URLSearchParams, _MultiMap);

      function URLSearchParams() {
          var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          classCallCheck(this, URLSearchParams);

          var _this = possibleConstructorReturn(this, (URLSearchParams.__proto__ || Object.getPrototypeOf(URLSearchParams)).call(this, obj));

          var str = String(obj);
          if (str.indexOf("?") === 0) {
              str = str.slice(1);
          }
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
              for (var _iterator = str.split("&")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var parameter = _step.value;

                  var index = parameter.indexOf("=");
                  if (index !== -1) {
                      var key = _this.constructor.decode(parameter.slice(0, index));
                      var value = _this.constructor.decode(parameter.slice(index + 1));
                      _this.append(key, value);
                  }
              }
          } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
          } finally {
              try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                  }
              } finally {
                  if (_didIteratorError) {
                      throw _iteratorError;
                  }
              }
          }

          return _this;
      }

      createClass(URLSearchParams, [{
          key: "normalizeKey",
          value: function normalizeKey(key) {
              return key.toString();
          }
      }, {
          key: "normalizeValue",
          value: function normalizeValue(value) {
              return value.toString();
          }
      }, {
          key: "toString",
          value: function toString() {
              var query = [];
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = this.map.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var _step2$value = slicedToArray(_step2.value, 2),
                          key = _step2$value[0],
                          values = _step2$value[1];

                      var name = this.constructor.encode(key);
                      var _iteratorNormalCompletion3 = true;
                      var _didIteratorError3 = false;
                      var _iteratorError3 = undefined;

                      try {
                          for (var _iterator3 = values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                              var value = _step3.value;

                              query.push(name + "=" + this.constructor.encode(value));
                          }
                      } catch (err) {
                          _didIteratorError3 = true;
                          _iteratorError3 = err;
                      } finally {
                          try {
                              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                  _iterator3.return();
                              }
                          } finally {
                              if (_didIteratorError3) {
                                  throw _iteratorError3;
                              }
                          }
                      }
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }

              return query.join("&");
          }
      }], [{
          key: "encode",
          value: function encode(str) {
              var replace = {
                  '!': '%21',
                  "'": '%27',
                  '(': '%28',
                  ')': '%29',
                  '~': '%7E',
                  '%20': '+',
                  '%00': '\x00'
              };
              return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function (match) {
                  return replace[match];
              });
          }
      }, {
          key: "decode",
          value: function decode(str) {
              return decodeURIComponent(str.replace(/\+/g, ' '));
          }
      }]);
      return URLSearchParams;
  }(MultiMap), _class$e.polyfill = true, _temp$4);


  function polyfillURLSearchParams(global) {
      global.URLSearchParams = global.URLSearchParams || URLSearchParams$1;
  }

  function fileReaderReady(reader) {
      return new Promise(function (resolve, reject) {
          reader.onload = function () {
              resolve(reader.result);
          };
          reader.onerror = function () {
              reject(reader.error);
          };
      });
  }

  function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsArrayBuffer(blob);
      return promise;
  }

  function readBlobAsText(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsText(blob);
      return promise;
  }

  var Body = function () {
      function Body() {
          classCallCheck(this, Body);

          this.bodyUsed = false;
      }

      createClass(Body, [{
          key: "setBodyUsed",
          value: function setBodyUsed() {
              if (this.bodyUsed) {
                  return Promise.reject(new TypeError("Already read"));
              }
              this.bodyUsed = true;
          }
      }, {
          key: "initialize",
          value: function initialize(bodyInit) {
              this._bodyInit = bodyInit;
              if (!bodyInit) {
                  this._bodyText = "";
              } else if (typeof bodyInit === "string" || bodyInit instanceof String) {
                  this._bodyText = bodyInit;
              } else if (Blob.prototype.isPrototypeOf(bodyInit)) {
                  this._bodyBlob = bodyInit;
              } else if (FormData.prototype.isPrototypeOf(bodyInit)) {
                  this._bodyFormData = bodyInit;
              } else if (URLSearchParams.prototype.isPrototypeOf(bodyInit)) {
                  this._bodyText = bodyInit.toString();
              } else if (DataView.prototype.isPrototypeOf(bodyInit)) {
                  this._bodyArrayBuffer = this.constructor.cloneBuffer(bodyInit.buffer);
                  this._bodyInit = new Blob([this._bodyArrayBuffer]);
              } else if (ArrayBuffer.prototype.isPrototypeOf(bodyInit) || ArrayBuffer.isView(bodyInit)) {
                  this._bodyArrayBuffer = this.constructor.cloneBuffer(bodyInit);
              } else {
                  throw new Error("unsupported BodyInit type");
              }

              if (!this.headers.get("content-type")) {
                  if (typeof bodyInit === "string" || bodyInit instanceof String) {
                      this.headers.set("content-type", "text/plain;charset=UTF-8");
                  } else if (this._bodyBlob && this._bodyBlob.type) {
                      this.headers.set("content-type", this._bodyBlob.type);
                  } else if (URLSearchParams.prototype.isPrototypeOf(bodyInit)) {
                      this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                  }
              }
          }
      }, {
          key: "blob",
          value: function blob() {
              var rejected = this.setBodyUsed();
              if (rejected) {
                  return rejected;
              }

              if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
              }
              if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              }
              if (this._bodyFormData) {
                  // I know this is technically wrong, but only we can create this scenario
                  return Promise.resolve(this._bodyFormData);
              }
              return Promise.resolve(new Blob([this._bodyText]));
          }
      }, {
          key: "arrayBuffer",
          value: function arrayBuffer() {
              if (this._bodyArrayBuffer) {
                  return this.setBodyUsed() || Promise.resolve(this._bodyArrayBuffer);
              } else {
                  return this.blob().then(readBlobAsArrayBuffer);
              }
          }
      }, {
          key: "readArrayBufferAsText",
          value: function readArrayBufferAsText() {
              var view = new Uint8Array(this._bodyArrayBuffer);
              var chars = new Array(view.length);

              for (var i = 0; i < view.length; i++) {
                  chars[i] = String.fromCharCode(view[i]);
              }
              return chars.join("");
          }
      }, {
          key: "text",
          value: function text() {
              var rejected = this.setBodyUsed();
              if (rejected) {
                  return rejected;
              }

              if (this._bodyBlob) {
                  return readBlobAsText(this._bodyBlob);
              }
              if (this._bodyArrayBuffer) {
                  return Promise.resolve(this.readArrayBufferAsText());
              }
              if (this._bodyFormData) {
                  throw new Error("could not read FormData body as text");
              }
              return Promise.resolve(this._bodyText);
          }
      }, {
          key: "formData",
          value: function formData() {
              return this.text().then(this.constructor.decode);
          }
      }, {
          key: "json",
          value: function json() {
              return this.text().then(JSON.parse);
          }
      }], [{
          key: "decode",
          value: function decode(body) {
              var form = new FormData();
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = body.trim().split('&')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var bytes = _step.value;

                      if (bytes) {
                          var split = bytes.split('=');
                          var name = split.shift().replace(/\+/g, ' ');
                          var value = split.join('=').replace(/\+/g, ' ');
                          form.append(decodeURIComponent(name), decodeURIComponent(value));
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              return form;
          }
      }, {
          key: "cloneBuffer",
          value: function cloneBuffer(buffer) {
              if (buffer.slice) {
                  return buffer.slice();
              } else {
                  var view = new Uint8Array(buffer.byteLength);
                  view.set(new Uint8Array(buffer));
                  return view.buffer;
              }
          }
      }]);
      return Body;
  }();

  var _class$f, _temp$5;

  var Request$1 = (_temp$5 = _class$f = function (_Body) {
      inherits(Request, _Body);

      function Request(input) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          classCallCheck(this, Request);

          var _this = possibleConstructorReturn(this, (Request.__proto__ || Object.getPrototypeOf(Request)).call(this));

          var body = options.body;

          if (typeof input === "string" || input instanceof String) {
              input = {
                  url: input
              };
          }

          if (input.bodyUsed) {
              throw new TypeError("Already read");
          }
          if (!body && input.hasOwnProperty("_bodyInit") && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
          }

          _this.method = _this.constructor.normalizeMethod(options.method || input.method || "GET");
          _this.url = input.url;

          var headerArgs = options.headers || input.headers || null;
          _this.headers = headerArgs ? new Headers(headerArgs) : new Headers();
          _this.context = options.context || input.context || "";
          _this.referrer = options.referrer || input.referrer || "about:client";
          _this.referrerPolicy = options.referrerPolicy || input.referrerPolicy || "";
          _this.mode = options.mode || input.mode || null;
          _this.credentials = options.credentials || input.credentials || "omit";
          _this.cache = options.cache || input.cache || "default";

          if ((_this.method === "GET" || _this.method === "HEAD") && body) {
              throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          _this.initialize(body);
          return _this;
      }

      createClass(Request, [{
          key: "clone",
          value: function clone() {
              return new Request(this, { body: this._bodyInit });
          }
      }], [{
          key: "normalizeMethod",
          value: function normalizeMethod(method) {
              var upcased = method.toUpperCase();
              return this.methods.indexOf(upcased) > -1 ? upcased : method;
          }
      }]);
      return Request;
  }(Body), _class$f.methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"], _temp$5);


  function polyfillRequest(global) {
      global.Request = global.Request || Request$1;
  }

  var _class$g, _temp$6;

  var Response$1 = (_temp$6 = _class$g = function (_Body) {
      inherits(Response, _Body);

      function Response(bodyInit, options) {
          classCallCheck(this, Response);

          var _this = possibleConstructorReturn(this, (Response.__proto__ || Object.getPrototypeOf(Response)).call(this));

          options = options || {};

          _this.type = "default";
          if (options.hasOwnProperty("status")) {
              _this.status = options.status;
          } else {
              _this.status = 200;
          }
          _this.ok = _this.status >= 200 && _this.status < 300;
          if (options.hasOwnProperty("statusText")) {
              _this.statusText = options.statusText;
          } else {
              _this.statusText = "OK";
          }
          _this.headers = new Headers(options.headers);
          _this.url = options.url || "";
          _this.initialize(bodyInit);
          return _this;
      }

      createClass(Response, [{
          key: "clone",
          value: function clone() {
              return new Response(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new Headers(this.headers),
                  url: this.url
              });
          }
      }], [{
          key: "error",
          value: function error() {
              var response = new Response(null, { status: 0, statusText: "" });
              response.type = "error";
              return response;
          }
      }, {
          key: "redirect",
          value: function redirect(url, status) {
              if (this.redirectStatuses.indexOf(status) === -1) {
                  throw new RangeError("Invalid status code");
              }
              return new Response(null, { status: status, headers: { location: url } });
          }
      }]);
      return Response;
  }(Body), _class$g.redirectStatuses = [301, 302, 303, 307, 308], _temp$6);


  function polyfillResponse(global) {
      global.Response = global.Response || Response$1;
  }

  // Tries to be a more flexible implementation of fetch()

  // TODO: should only call this in the first call to fetch, to not create unneeded dependencies?
  if (window) {
      polyfillRequest(window);
      polyfillResponse(window);
      polyfillHeaders(window);
      polyfillURLSearchParams(window);
  }

  // Parse the headers from an xhr object, to return a native Headers object
  function parseHeaders(xhr) {
      var rawHeader = xhr.getAllResponseHeaders() || "";
      var rawHeaderLines = rawHeader.split(/\r?\n/);
      var headers = new Headers();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
          for (var _iterator = rawHeaderLines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var line = _step.value;

              var parts = line.split(":");
              var key = parts.shift().trim();
              if (key) {
                  var value = parts.join(":").trim();
                  headers.append(key, value);
              }
          }
      } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
              }
          } finally {
              if (_didIteratorError) {
                  throw _iteratorError;
              }
          }
      }

      return headers;
  }

  // Creates a new URLSearchParams object from a plain object
  // Fields that are arrays are spread
  function getURLSearchParams(data) {
      if (!isPlainObject(data)) {
          return data;
      }

      var urlSearchParams = new URLSearchParams();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
          for (var _iterator2 = Object.keys(data)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var key = _step2.value;

              var value = data[key];
              if (Array.isArray(value)) {
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;

                  try {
                      for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                          var instance = _step3.value;

                          urlSearchParams.append(key + "[]", instance);
                      }
                  } catch (err) {
                      _didIteratorError3 = true;
                      _iteratorError3 = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion3 && _iterator3.return) {
                              _iterator3.return();
                          }
                      } finally {
                          if (_didIteratorError3) {
                              throw _iteratorError3;
                          }
                      }
                  }
              } else {
                  urlSearchParams.set(key, value);
              }
          }
      } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
              }
          } finally {
              if (_didIteratorError2) {
                  throw _iteratorError2;
              }
          }
      }

      return urlSearchParams;
  }

  // Appends search parameters from an object to a given URL or Request, and returns the new URL
  function composeURL(url, params) {
      if (url.url) {
          url = url.url;
      }
      // TODO: also extract the preexisting arguments in the url
      if (params) {
          url += "?" + getURLSearchParams(params);
      }
      return url;
  }

  var XHRPromise = function () {
      function XHRPromise(request) {
          var _this = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          classCallCheck(this, XHRPromise);

          request = new Request(request, options);
          var xhr = new XMLHttpRequest();
          this.options = options;
          this.request = request;
          this.xhr = xhr;

          this.promise = new Promise(function (resolve, reject) {
              _this.promiseResolve = resolve;
              _this.promiseReject = reject;

              xhr.onload = function () {
                  var headers = _this.getResponseHeaders();

                  var body = xhr.response || xhr.responseText;
                  var responseInit = {
                      status: xhr.status,
                      statusText: xhr.statusText,
                      headers: headers,
                      url: xhr.responseURL || headers.get("X-Request-URL")
                  };
                  var response = new Response(body, responseInit);
                  // In case dataType is "arrayBuffer", "blob", "formData", "json", "text"
                  // Response has methods to return these as promises
                  if (typeof response[options.dataType] === "function") {
                      // TODO: should whitelist dataType to json, blob
                      response[options.dataType]().then(function (data) {
                          _this.resolve(data);
                      });
                  } else {
                      _this.resolve(response);
                  }
              };

              // TODO: also dispatch all arguments here on errors
              xhr.onerror = function () {
                  _this.reject(new TypeError("Network error"));
              };

              // TODO: need to have an options to pass setting to xhr (like timeout value)
              xhr.ontimeout = function () {
                  _this.reject(new TypeError("Network timeout"));
              };

              xhr.open(request.method, request.url, true);

              if (request.credentials === "include") {
                  xhr.withCredentials = true;
              }

              // TODO: come back to this
              xhr.responseType = "blob";

              request.headers.forEach(function (value, name) {
                  if (options.body instanceof FormData && name.toLowerCase() === "content-type") {
                      return;
                  }
                  xhr.setRequestHeader(name, value);
              });

              // TODO: there's no need to send anything on a GET or HEAD
              if (options.body instanceof FormData) {
                  _this.send(options.body);
              } else {
                  request.blob().then(function (blob) {
                      // The blob can be a FormData when we're polyfilling the Request class
                      var body = blob instanceof FormData || blob.size ? blob : null;
                      _this.send(body);
                  });
              }
          });
      }

      createClass(XHRPromise, [{
          key: "getResponseHeaders",
          value: function getResponseHeaders() {
              return parseHeaders(this.xhr);
          }
      }, {
          key: "send",
          value: function send(body) {
              this.getXHR().send(body);
          }
      }, {
          key: "getPostprocessors",
          value: function getPostprocessors() {
              return this.options.postprocessors || fetch.defaultPostprocessors;
          }
      }, {
          key: "getErrorPostprocessors",
          value: function getErrorPostprocessors() {
              return this.options.errorPostprocessors || fetch.defaultErrorPostprocessors;
          }
      }, {
          key: "resolve",
          value: function resolve(payload) {
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                  for (var _iterator5 = this.getPostprocessors()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                      var postprocessor = _step5.value;

                      try {
                          payload = postprocessor(payload, this) || payload;
                      } catch (exception) {
                          this.reject(exception);
                          return;
                      }
                  }
              } catch (err) {
                  _didIteratorError5 = true;
                  _iteratorError5 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion5 && _iterator5.return) {
                          _iterator5.return();
                      }
                  } finally {
                      if (_didIteratorError5) {
                          throw _iteratorError5;
                      }
                  }
              }

              if (this.options.onSuccess) {
                  var _options;

                  (_options = this.options).onSuccess.apply(_options, arguments);
              } else {
                  this.promiseResolve.apply(this, arguments);
              }
              if (this.options.onComplete) {
                  this.options.onComplete();
              }
          }
      }, {
          key: "reject",
          value: function reject(error) {
              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = undefined;

              try {
                  for (var _iterator6 = this.getErrorPostprocessors()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                      var postprocessor = _step6.value;

                      error = postprocessor(error) || error;
                  }
              } catch (err) {
                  _didIteratorError6 = true;
                  _iteratorError6 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion6 && _iterator6.return) {
                          _iterator6.return();
                      }
                  } finally {
                      if (_didIteratorError6) {
                          throw _iteratorError6;
                      }
                  }
              }

              if (this.options.onError) {
                  var _options2;

                  (_options2 = this.options).onError.apply(_options2, arguments);
              } else {
                  if (this._chained) {
                      this.promiseReject.apply(this, arguments);
                  } else {
                      if (this.options.errorHandler) {
                          var _options3;

                          (_options3 = this.options).errorHandler.apply(_options3, arguments);
                      } else {
                          var _console;

                          (_console = console).error.apply(_console, ["Unhandled fetch error"].concat(Array.prototype.slice.call(arguments)));
                      }
                  }
              }
              if (this.options.onComplete) {
                  this.options.onComplete();
              }
          }

          // TODO: next 2 functions should throw an exception if you have onSuccess/onError

      }, {
          key: "then",
          value: function then(onResolve, onReject) {
              this._chained = true;
              onReject = onReject || this.options.errorHandler;
              return this.getPromise().then(onResolve, onReject);
          }
      }, {
          key: "catch",
          value: function _catch() {
              var _getPromise;

              this._chained = true;
              return (_getPromise = this.getPromise()).catch.apply(_getPromise, arguments);
          }
      }, {
          key: "getXHR",
          value: function getXHR() {
              return this.xhr;
          }
      }, {
          key: "getPromise",
          value: function getPromise() {
              return this.promise;
          }
      }, {
          key: "getRequest",
          value: function getRequest() {
              return this.request;
          }
      }, {
          key: "abort",
          value: function abort() {
              this.getXHR().abort();
          }
      }, {
          key: "addXHRListener",
          value: function addXHRListener(name, callback) {
              var _getXHR;

              (_getXHR = this.getXHR()).addEventListener.apply(_getXHR, arguments);
          }
      }, {
          key: "addProgressListener",
          value: function addProgressListener(callback) {
              this.addXHRListener.apply(this, ["progress"].concat(Array.prototype.slice.call(arguments)));
          }
      }]);
      return XHRPromise;
  }();

  // TODO: this offers only partial compatibility with $.ajax


  function jQueryCompatibilityPreprocessor(options) {
      if (options.type) {
          options.method = options.type.toUpperCase();
      }

      if (options.contentType) {
          options.headers.set("Content-Type", options.contentType);
      }

      options.headers.set("X-Requested-With", "XMLHttpRequest");

      if (isPlainObject(options.data)) {
          var method = options.method.toUpperCase();
          if (method === "GET" || method === "HEAD") {
              options.urlParams = options.urlParams || options.data;
              if (options.cache === false) {
                  options.urlParams = getURLSearchParams(options.urlParams);
                  options.urlParams.set("_", Date.now());
              }
          } else {
              var formData = new FormData();
              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;

              try {
                  for (var _iterator7 = Object.keys(options.data)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                      var key = _step7.value;

                      var value = options.data[key];
                      if (Array.isArray(value)) {
                          var _iteratorNormalCompletion8 = true;
                          var _didIteratorError8 = false;
                          var _iteratorError8 = undefined;

                          try {
                              for (var _iterator8 = value[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                  var arrayValue = _step8.value;

                                  formData.append(key + "[]", arrayValue);
                              }
                          } catch (err) {
                              _didIteratorError8 = true;
                              _iteratorError8 = err;
                          } finally {
                              try {
                                  if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                      _iterator8.return();
                                  }
                              } finally {
                                  if (_didIteratorError8) {
                                      throw _iteratorError8;
                                  }
                              }
                          }
                      } else {
                          formData.append(key, value);
                      }
                  }
              } catch (err) {
                  _didIteratorError7 = true;
                  _iteratorError7 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion7 && _iterator7.return) {
                          _iterator7.return();
                      }
                  } finally {
                      if (_didIteratorError7) {
                          throw _iteratorError7;
                      }
                  }
              }

              options.body = formData;
          }
      } else {
          options.body = options.body || options.data;
      }

      return options;
  }

  // Can either be called with
  // - 1 argument: (Request)
  // - 2 arguments: (url/Request, options)
  function fetch(input) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
      }

      // In case we're being passed in a single plain object (not Request), assume it has a url field
      if (isPlainObject(input)) {
          return fetch.apply(undefined, [input.url].concat(Array.prototype.slice.call(arguments)));
      }

      var options = Object.assign.apply(Object, [{}].concat(args));

      // Ensure that there's a .headers field for preprocessors
      options.headers = new Headers(options.headers || {});

      var preprocessors = options.preprocessors || fetch.defaultPreprocessors || [];

      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
          for (var _iterator9 = preprocessors[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var preprocessor = _step9.value;

              options = preprocessor(options) || options;
          }
      } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion9 && _iterator9.return) {
                  _iterator9.return();
              }
          } finally {
              if (_didIteratorError9) {
                  throw _iteratorError9;
              }
          }
      }

      options.onSuccess = options.onSuccess || options.success;
      options.onError = options.onError || options.error;
      options.onComplete = options.onComplete || options.complete;

      if (typeof options.cache === "boolean") {
          options.cache = options.cache ? "force-cache" : "reload";
          // TODO: cache still isn't fully done
      }

      options.method = options.method || "GET";

      // If there are any url search parameters, update the url from the urlParams or urlSearchParams fields
      // These fields can be plain objects (jQuery style) or can be URLSearchParams objects
      var urlParams = options.urlParams || options.urlSearchParams;
      if (urlParams) {
          // Change the URL of the request to add a query
          if (input instanceof Request) {
              input = new Request(composeURL(input.url, urlParams), input);
          } else {
              input = new Request(composeURL(input, urlParams), {});
          }
      }

      return new XHRPromise(input, options);
  }

  fetch.defaultPreprocessors = [jQueryCompatibilityPreprocessor];
  fetch.defaultPostprocessors = [];
  fetch.defaultErrorPostprocessors = [];

  fetch.polyfill = true;

  var AjaxHandler = function () {
      function AjaxHandler() {
          var ajaxHandler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ajax;
          var errorHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          classCallCheck(this, AjaxHandler);

          this.parentHandler = ajaxHandler;
          this.preprocessors = ajaxHandler ? [] : Array.from(fetch.defaultPreprocessors);
          this.postprocessors = ajaxHandler ? [] : Array.from(fetch.defaultPostprocessors);
          this.errorPostprocessors = ajaxHandler ? [] : Array.from(fetch.defaultErrorPostprocessors);
          this.errorHandler = errorHandler;
      }

      createClass(AjaxHandler, [{
          key: "fetch",
          value: function fetch$$1(request) {
              var baseOptions = {
                  preprocessors: this.getPreprocessors(),
                  postprocessors: this.getPostprocessors(),
                  errorPostprocessors: this.getErrorPostprocessors(),
                  errorHandler: this.getErrorHandler()
              };

              // Request may be a plain object or a url, not going to duplicate code from fetch
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = Object.keys(baseOptions)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var key = _step.value;

                      if (request[key]) {
                          delete baseOptions[key];
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
              }

              return fetch.apply(undefined, [request, baseOptions].concat(args));
          }
      }, {
          key: "request",
          value: function request() {
              return this.fetch.apply(this, arguments);
          }

          // Feel free to modify the post and get methods for your needs

      }, {
          key: "get",
          value: function get$$1(url, options) {
              return this.fetch.apply(this, Array.prototype.slice.call(arguments).concat([{ method: "GET" }]));
          }
      }, {
          key: "getJSON",
          value: function getJSON(url, data) {
              for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                  args[_key2 - 2] = arguments[_key2];
              }

              return this.get.apply(this, [url, { dataType: "json", data: data }].concat(args));
          }
      }, {
          key: "post",
          value: function post(url, options) {
              return this.fetch.apply(this, Array.prototype.slice.call(arguments).concat([{ method: "POST" }]));
          }
      }, {
          key: "postJSON",
          value: function postJSON(url, data) {
              for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                  args[_key3 - 2] = arguments[_key3];
              }

              return this.post.apply(this, [url, { dataType: "json", data: data }].concat(args));
          }
      }, {
          key: "addPreprocessor",
          value: function addPreprocessor(preprocessor) {
              this.preprocessors.push(preprocessor);
          }
      }, {
          key: "getPreprocessors",
          value: function getPreprocessors() {
              var inherited = this.parentHandler && this.parentHandler.getPreprocessors() || [];
              return [].concat(toConsumableArray(this.preprocessors), toConsumableArray(inherited));
          }
      }, {
          key: "addPostprocessor",
          value: function addPostprocessor(postprocessor) {
              this.postprocessors.push(postprocessor);
          }
      }, {
          key: "getPostprocessors",
          value: function getPostprocessors() {
              var inherited = this.parentHandler && this.parentHandler.getPostprocessors() || [];
              return [].concat(toConsumableArray(inherited), toConsumableArray(this.postprocessors));
          }
      }, {
          key: "addErrorPostprocessor",
          value: function addErrorPostprocessor(postprocessor) {
              this.errorPostprocessors.push(postprocessor);
          }
      }, {
          key: "getErrorPostprocessors",
          value: function getErrorPostprocessors() {
              var inherited = this.parentHandler && this.parentHandler.getErrorPostprocessors() || [];
              return [].concat(toConsumableArray(inherited), toConsumableArray(this.errorPostprocessors));
          }
      }, {
          key: "getErrorHandler",
          value: function getErrorHandler() {
              return this.errorHandler || this.parentHandler && this.parentHandler.getErrorHandler();
          }
      }]);
      return AjaxHandler;
  }();

  var FixedURLAjaxHandler = function (_AjaxHandler) {
      inherits(FixedURLAjaxHandler, _AjaxHandler);

      function FixedURLAjaxHandler(url) {
          var ajaxHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ajax;
          var errorHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          classCallCheck(this, FixedURLAjaxHandler);

          var _this = possibleConstructorReturn(this, (FixedURLAjaxHandler.__proto__ || Object.getPrototypeOf(FixedURLAjaxHandler)).call(this, ajaxHandler, errorHandler));

          _this.url = url;
          return _this;
      }

      createClass(FixedURLAjaxHandler, [{
          key: "get",
          value: function get$$1(options) {
              var _babelHelpers$get;

              return (_babelHelpers$get = get(FixedURLAjaxHandler.prototype.__proto__ || Object.getPrototypeOf(FixedURLAjaxHandler.prototype), "get", this)).call.apply(_babelHelpers$get, [this, this.url].concat(Array.prototype.slice.call(arguments)));
          }
      }, {
          key: "getJSON",
          value: function getJSON(data) {
              return get(FixedURLAjaxHandler.prototype.__proto__ || Object.getPrototypeOf(FixedURLAjaxHandler.prototype), "getJSON", this).call(this, this.url, data);
          }
      }, {
          key: "post",
          value: function post(options) {
              var _babelHelpers$get2;

              return (_babelHelpers$get2 = get(FixedURLAjaxHandler.prototype.__proto__ || Object.getPrototypeOf(FixedURLAjaxHandler.prototype), "post", this)).call.apply(_babelHelpers$get2, [this, this.url].concat(Array.prototype.slice.call(arguments)));
          }
      }, {
          key: "postJSON",
          value: function postJSON(data) {
              return get(FixedURLAjaxHandler.prototype.__proto__ || Object.getPrototypeOf(FixedURLAjaxHandler.prototype), "postJSON", this).call(this, this.url, data);
          }
      }]);
      return FixedURLAjaxHandler;
  }(AjaxHandler);

  var Ajax = new AjaxHandler();

  var _class$h, _descriptor$5, _descriptor2$5, _descriptor3$5, _descriptor4$4, _descriptor5$4, _descriptor6$4, _class3$3, _descriptor7$3, _descriptor8$3, _class5$2, _descriptor9$3;

  function _initDefineProp$6(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$6(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var buttonColorToStyle = function buttonColorToStyle(color) {
      var colors = buildColors(color);
      var darker1 = {
          backgroundColor: colors[2]
      };
      var darker2 = {
          backgroundColor: colors[3]
      };
      var darker3 = {
          backgroundColor: colors[4]
      };
      var regular = {
          backgroundColor: colors[1],
          borderColor: colors[5],
          color: colors[6]
      };
      var hoverDisabled = Object.assign({}, regular);
      return Object.assign({}, regular, {
          ":hover": darker1,
          ":hover:disabled": hoverDisabled,
          ":focus": darker1,
          ":active": darker2,
          ":hover:active": darker3,
          ":focus:active": darker3,
          ".active": darker3
      });
  };

  var ButtonStyle = (_class$h = function (_BasicLevelStyleSheet) {
      inherits(ButtonStyle, _BasicLevelStyleSheet);

      function ButtonStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, ButtonStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ButtonStyle.__proto__ || Object.getPrototypeOf(ButtonStyle)).call.apply(_ref, [this].concat(args))), _this), _this.base = {
              outline: "0",
              border: "0.1em solid transparent",
              padding: "0.4em 0.8em",
              borderRadius: _this.themeProperties.BUTTON_BORDER_RADIUS || _this.themeProperties.BASE_BORDER_RADIUS,
              textAlign: "center",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
              lineHeight: 4 / 3 + "",
              marginBottom: "0",
              display: "inline-block",
              touchAction: "manipulation",
              userSelect: "none",
              ":disabled": {
                  opacity: "0.7",
                  cursor: "not-allowed"
              }
          }, _initDefineProp$6(_this, "DEFAULT", _descriptor$5, _this), _initDefineProp$6(_this, "EXTRA_SMALL", _descriptor2$5, _this), _initDefineProp$6(_this, "SMALL", _descriptor3$5, _this), _initDefineProp$6(_this, "MEDIUM", _descriptor4$4, _this), _initDefineProp$6(_this, "LARGE", _descriptor5$4, _this), _initDefineProp$6(_this, "EXTRA_LARGE", _descriptor6$4, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      // DEFAULT uses MEDIUM as size and BASE as level


      createClass(ButtonStyle, [{
          key: "getLevel",
          value: function getLevel(level) {
              return get(ButtonStyle.prototype.__proto__ || Object.getPrototypeOf(ButtonStyle.prototype), "getLevel", this).call(this, level) || this.INFO;
          }
      }]);
      return ButtonStyle;
  }(BasicLevelStyleSheet(buttonColorToStyle)), (_descriptor$5 = _applyDecoratedDescriptor$6(_class$h.prototype, "DEFAULT", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return [this.base, {
              fontSize: "14px"
          }, this.colorStyleRule(this.themeProperties.COLOR_BACKGROUND)];
      }
  }), _descriptor2$5 = _applyDecoratedDescriptor$6(_class$h.prototype, "EXTRA_SMALL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "12px",
              padding: "0.2em 0.4em",
              borderWidth: "0.05em"
          };
      }
  }), _descriptor3$5 = _applyDecoratedDescriptor$6(_class$h.prototype, "SMALL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "12px"
          };
      }
  }), _descriptor4$4 = _applyDecoratedDescriptor$6(_class$h.prototype, "MEDIUM", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {};
      }
  }), _descriptor5$4 = _applyDecoratedDescriptor$6(_class$h.prototype, "LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "17px"
          };
      }
  }), _descriptor6$4 = _applyDecoratedDescriptor$6(_class$h.prototype, "EXTRA_LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "21px",
              padding: "0.2em 0.4em"
          };
      }
  })), _class$h);

  var ButtonGroupStyle = (_class3$3 = function (_StyleSheet) {
      inherits(ButtonGroupStyle, _StyleSheet);

      function ButtonGroupStyle() {
          var _ref2;

          var _temp2, _this2, _ret2;

          classCallCheck(this, ButtonGroupStyle);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = ButtonGroupStyle.__proto__ || Object.getPrototypeOf(ButtonGroupStyle)).call.apply(_ref2, [this].concat(args))), _this2), _initDefineProp$6(_this2, "HORIZONTAL", _descriptor7$3, _this2), _initDefineProp$6(_this2, "VERTICAL", _descriptor8$3, _this2), _temp2), possibleConstructorReturn(_this2, _ret2);
      }

      createClass(ButtonGroupStyle, [{
          key: "Orientation",
          value: function Orientation$$1(orientation) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = Object.keys(Orientation)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var type = _step.value;

                      if (orientation == Orientation[type]) {
                          return this[type];
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }
          }
      }]);
      return ButtonGroupStyle;
  }(StyleSheet), (_descriptor7$3 = _applyDecoratedDescriptor$6(_class3$3.prototype, "HORIZONTAL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              pointerEvents: "none",
              ">*": {
                  "margin-left": "5px",
                  "display": "inline-block",
                  pointerEvents: "initial"
              },
              ">:first-child": {
                  "margin-left": "0px"
              }
          };
      }
  }), _descriptor8$3 = _applyDecoratedDescriptor$6(_class3$3.prototype, "VERTICAL", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              pointerEvents: "none",
              ">*": {
                  "margin-top": "5px",
                  "display": "block",
                  pointerEvents: "initial"
              },
              ">:first-child": {
                  "margin-top": "0px"
              }
          };
      }
  })), _class3$3);

  var RadioButtonGroupStyle = (_class5$2 = function (_StyleSheet2) {
      inherits(RadioButtonGroupStyle, _StyleSheet2);

      function RadioButtonGroupStyle() {
          var _ref3;

          var _temp3, _this3, _ret3;

          classCallCheck(this, RadioButtonGroupStyle);

          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
          }

          return _ret3 = (_temp3 = (_this3 = possibleConstructorReturn(this, (_ref3 = RadioButtonGroupStyle.__proto__ || Object.getPrototypeOf(RadioButtonGroupStyle)).call.apply(_ref3, [this].concat(args))), _this3), _initDefineProp$6(_this3, "DEFAULT", _descriptor9$3, _this3), _temp3), possibleConstructorReturn(_this3, _ret3);
      }

      return RadioButtonGroupStyle;
  }(StyleSheet), (_descriptor9$3 = _applyDecoratedDescriptor$6(_class5$2.prototype, "DEFAULT", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              pointerEvents: "none",
              ">*": {
                  pointerEvents: "initial",
                  borderRadius: "0"
              },
              ">:last-child": {
                  borderTopRightRadius: "0.3em",
                  borderBottomRightRadius: "0.3em"
              },
              ">:first-child": {
                  borderTopLeftRadius: "0.3em",
                  borderBottomLeftRadius: "0.3em"
              }
          };
      }
  })), _class5$2);

  var _dec$6, _class$i;

  var Button = (_dec$6 = registerStyle(ButtonStyle), _dec$6(_class$i = function (_UI$Primitive) {
      inherits(Button, _UI$Primitive);

      function Button() {
          classCallCheck(this, Button);
          return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
      }

      createClass(Button, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.DEFAULT);

              if (this.getSize()) {
                  attr.addClass(this.styleSheet.Size(this.getSize()));
              }

              if (this.getLevel()) {
                  attr.addClass(this.styleSheet.Level(this.getLevel()));
              }
          }
      }, {
          key: "disable",
          value: function disable() {
              this.options.disabled = true;
              this.node.disabled = true;
          }
      }, {
          key: "enable",
          value: function enable() {
              this.options.disabled = false;
              this.node.disabled = false;
          }
      }, {
          key: "setEnabled",
          value: function setEnabled(enabled) {
              this.options.disabled = !enabled;
              this.node.disabled = !enabled;
          }
      }]);
      return Button;
  }(UI.Primitive(IconableInterface, "button"))) || _class$i);

  var StateButton = function (_Button) {
      inherits(StateButton, _Button);

      function StateButton() {
          classCallCheck(this, StateButton);
          return possibleConstructorReturn(this, (StateButton.__proto__ || Object.getPrototypeOf(StateButton)).apply(this, arguments));
      }

      createClass(StateButton, [{
          key: "setOptions",
          value: function setOptions(options) {
              options.state = this.options && this.options.state || options.state || ActionStatus.DEFAULT;

              get(StateButton.prototype.__proto__ || Object.getPrototypeOf(StateButton.prototype), "setOptions", this).call(this, options);

              this.options.statusOptions = this.options.statusOptions || [];
              for (var i = 0; i < 4; i += 1) {
                  if (typeof this.options.statusOptions[i] === "string") {
                      var statusLabel = this.options.statusOptions[i];
                      this.options.statusOptions[i] = {
                          label: statusLabel,
                          faIcon: ""
                      };
                  }
              }
          }
      }, {
          key: "setState",
          value: function setState(status) {
              this.options.state = status;
              if (status === ActionStatus.DEFAULT) {
                  this.enable();
              } else if (status === ActionStatus.RUNNING) {
                  this.disable();
              }

              this.redraw();
          }
      }, {
          key: "render",
          value: function render() {
              var stateOptions = this.options.statusOptions[this.options.state - 1];

              this.options.label = stateOptions.label;
              this.options.faIcon = stateOptions.faIcon;

              return get(StateButton.prototype.__proto__ || Object.getPrototypeOf(StateButton.prototype), "render", this).call(this);
          }
      }]);
      return StateButton;
  }(Button);

  var AjaxButton = function (_StateButton) {
      inherits(AjaxButton, _StateButton);

      function AjaxButton() {
          classCallCheck(this, AjaxButton);
          return possibleConstructorReturn(this, (AjaxButton.__proto__ || Object.getPrototypeOf(AjaxButton)).apply(this, arguments));
      }

      createClass(AjaxButton, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return Object.assign(get(AjaxButton.prototype.__proto__ || Object.getPrototypeOf(AjaxButton.prototype), "getDefaultOptions", this).call(this) || {}, {
                  resetToDefaultTimeout: 1000
              });
          }
      }, {
          key: "getAjaxHandler",
          value: function getAjaxHandler() {
              return this.options.ajaxHandler || Ajax;
          }
      }, {
          key: "setAjaxHandler",
          value: function setAjaxHandler(ajaxHandler) {
              this.options.ajaxHandler = ajaxHandler;
          }
      }, {
          key: "clearResetTimeout",
          value: function clearResetTimeout() {
              if (this.stateResetTimeout) {
                  clearTimeout(this.stateResetTimeout);
                  delete this.stateResetTimeout;
              }
          }
      }, {
          key: "scheduleStateReset",
          value: function scheduleStateReset() {
              var _this4 = this;

              this.clearResetTimeout();
              this.stateResetTimeout = setTimeout(function () {
                  _this4.setState(ActionStatus.DEFAULT);
                  _this4.clearResetTimeout();
              }, this.resetToDefaultTimeout);
          }
      }, {
          key: "ajax",
          value: function ajax(methodName) {
              var _getAjaxHandler,
                  _this5 = this;

              this.setState(ActionStatus.RUNNING);

              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
              }

              var ajaxPromise = (_getAjaxHandler = this.getAjaxHandler())[methodName].apply(_getAjaxHandler, args);
              ajaxPromise.getPromise().then(function (data) {
                  _this5.setState(ActionStatus.SUCCESS);
                  _this5.scheduleStateReset();
              }, function (error) {
                  _this5.setState(ActionStatus.FAILED);
                  _this5.scheduleStateReset();
              });
              return ajaxPromise;
          }
      }, {
          key: "ajaxCall",
          value: function ajaxCall(data) {
              return this.ajax("fetch", data);
          }
      }]);
      return AjaxButton;
  }(StateButton);

  var _arr = ["fetch", "request", "get", "post", "getJSON", "postJSON"];

  var _loop = function _loop() {
      var methodName = _arr[_i];
      AjaxButton.prototype[methodName] = function () {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return this.ajax.apply(this, [methodName].concat(args));
      };
  };

  for (var _i = 0; _i < _arr.length; _i++) {
      _loop();
  }

  var _dec$7, _class$j, _dec2$3, _class2$3;

  var ButtonGroup = (_dec$7 = registerStyle(ButtonGroupStyle), _dec$7(_class$j = function (_SimpleStyledElement) {
      inherits(ButtonGroup, _SimpleStyledElement);

      function ButtonGroup() {
          classCallCheck(this, ButtonGroup);
          return possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
      }

      createClass(ButtonGroup, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  orientation: Orientation.HORIZONTAL
              };
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.Orientation(this.options.orientation));
          }
      }]);
      return ButtonGroup;
  }(SimpleStyledElement)) || _class$j);
  var RadioButtonGroup = (_dec2$3 = registerStyle(RadioButtonGroupStyle), _dec2$3(_class2$3 = function (_SimpleStyledElement2) {
      inherits(RadioButtonGroup, _SimpleStyledElement2);

      function RadioButtonGroup() {
          classCallCheck(this, RadioButtonGroup);
          return possibleConstructorReturn(this, (RadioButtonGroup.__proto__ || Object.getPrototypeOf(RadioButtonGroup)).apply(this, arguments));
      }

      createClass(RadioButtonGroup, [{
          key: "setOptions",
          value: function setOptions(options) {
              get(RadioButtonGroup.prototype.__proto__ || Object.getPrototypeOf(RadioButtonGroup.prototype), "setOptions", this).call(this, options);
              this.index = this.options.index || 0;
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.DEFAULT);
          }
      }, {
          key: "render",
          value: function render() {
              var _this3 = this;

              this.buttons = [];

              var _loop = function _loop(i) {
                  _this3.buttons.push(UI.createElement(Button, { key: i, onClick: function onClick() {
                          _this3.setIndex(i);
                      }, size: _this3.getSize(),
                      label: _this3.options.givenOptions[i].toString(), level: _this3.getLevel(),
                      className: _this3.index === i ? "active" : "" }));
              };

              for (var i = 0; i < this.options.givenOptions.length; i += 1) {
                  _loop(i);
              }
              return this.buttons;
          }
      }, {
          key: "getIndex",
          value: function getIndex() {
              return this.index;
          }
      }, {
          key: "getValue",
          value: function getValue() {
              return this.options.givenOptions[this.index];
          }
      }, {
          key: "setIndex",
          value: function setIndex(index) {
              this.dispatch("setIndex", {
                  index: index,
                  oldIndex: this.index,
                  value: this.options.givenOptions[index],
                  oldValue: this.options.givenOptions[this.index]
              });
              this.buttons[this.index].removeClass("active");
              this.index = index;
              this.buttons[this.index].addClass("active");
          }
      }]);
      return RadioButtonGroup;
  }(SimpleStyledElement)) || _class2$3);

  var _class$k, _descriptor$6, _descriptor2$6, _descriptor3$6, _descriptor4$5, _descriptor5$5, _dec$8, _class3$4;

  function _initDefineProp$7(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$7(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  function cardPanelColorToStyle(color) {
      var colors = buildColors(color);
      return {
          borderColor: colors[4]
      };
  }

  var CardPanelStyle = (_class$k = function (_BasicLevelStyleSheet) {
      inherits(CardPanelStyle, _BasicLevelStyleSheet);

      function CardPanelStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, CardPanelStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = CardPanelStyle.__proto__ || Object.getPrototypeOf(CardPanelStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$7(_this, "DEFAULT", _descriptor$6, _this), _initDefineProp$7(_this, "LARGE", _descriptor2$6, _this), _initDefineProp$7(_this, "body", _descriptor3$6, _this), _initDefineProp$7(_this, "panel", _descriptor4$5, _this), _initDefineProp$7(_this, "centered", _descriptor5$5, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return CardPanelStyle;
  }(BasicLevelStyleSheet(cardPanelColorToStyle)), (_descriptor$6 = _applyDecoratedDescriptor$7(_class$k.prototype, "DEFAULT", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return [{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexDirection: "row",
              padding: "5px",
              minHeight: this.themeProperties.CARD_PANEL_HEADER_HEIGHT,
              textTransform: this.themeProperties.CARD_PANEL_TEXT_TRANSFORM,
              paddingLeft: this.themeProperties.CARD_PANEL_HEADING_PADDING,
              paddingRight: this.themeProperties.CARD_PANEL_HEADING_PADDING
          }, cardPanelHeaderColorToStyle(this.themeProperties.COLOR_BACKGROUND)];
      }
  }), _descriptor2$6 = _applyDecoratedDescriptor$7(_class$k.prototype, "LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              minHeight: this.themeProperties.CARD_PANEL_HEADER_HEIGHT_LARGE,
              paddingLeft: this.themeProperties.CARD_PANEL_HEADING_PADDING_LARGE,
              paddingRight: this.themeProperties.CARD_PANEL_HEADING_PADDING_LARGE
          };
      }
  }), _descriptor3$6 = _applyDecoratedDescriptor$7(_class$k.prototype, "body", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {};
      }
  }), _descriptor4$5 = _applyDecoratedDescriptor$7(_class$k.prototype, "panel", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return [{
              borderWidth: this.themeProperties.BASE_BORDER_WIDTH,
              borderRadius: this.themeProperties.BASE_BORDER_RADIUS,
              boxShadow: this.themeProperties.BASE_BOX_SHADOW,
              borderStyle: this.themeProperties.BASE_BORDER_STYLE,
              backgroundColor: this.themeProperties.COLOR_BACKGROUND
          }, cardPanelColorToStyle(this.themeProperties.COLOR_BACKGROUND)];
      }
  }), _descriptor5$5 = _applyDecoratedDescriptor$7(_class$k.prototype, "centered", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              textAlign: "center",
              justifyContent: "center"
          };
      }
  })), _class$k);

  function cardPanelHeaderColorToStyle(color) {
      var colors = buildColors(color);
      return {
          color: colors[6],
          backgroundColor: colors[1],
          borderBottomColor: colors[4]
      };
  }

  var CardPanelHeaderStyle = BasicLevelStyleSheet(cardPanelHeaderColorToStyle);

  var CardPanel = (_dec$8 = registerStyle(CardPanelStyle), _dec$8(_class3$4 = function (_SimpleStyledElement) {
      inherits(CardPanel, _SimpleStyledElement);

      function CardPanel() {
          classCallCheck(this, CardPanel);
          return possibleConstructorReturn(this, (CardPanel.__proto__ || Object.getPrototypeOf(CardPanel)).apply(this, arguments));
      }

      createClass(CardPanel, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.panel);
          }
      }, {
          key: "getLevel",
          value: function getLevel() {
              return get(CardPanel.prototype.__proto__ || Object.getPrototypeOf(CardPanel.prototype), "getLevel", this).call(this) || Level.PRIMARY;
          }
      }, {
          key: "getTitle",
          value: function getTitle() {
              return this.options.title;
          }
      }, {
          key: "getHeaderStyleSheet",
          value: function getHeaderStyleSheet() {
              return CardPanelHeaderStyle.getInstance();
          }
      }, {
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  headingCentered: true,
                  bodyCentered: false
              };
          }
      }, {
          key: "getHeadingClasses",
          value: function getHeadingClasses() {
              var headingClasses = "";
              var headingLevel = this.getHeaderStyleSheet().Level(this.getLevel()),
                  headingCentered = this.options.headingCentered;


              if (headingLevel) {
                  headingClasses = headingClasses + headingLevel;
              }

              headingClasses = headingClasses + this.styleSheet.DEFAULT;
              if (this.getSize()) {
                  headingClasses = headingClasses + this.styleSheet.Size(this.getSize());
              }

              if (headingCentered) {
                  headingClasses = headingClasses + this.styleSheet.centered;
              }

              return headingClasses;
          }
      }, {
          key: "getBodyClasses",
          value: function getBodyClasses() {
              var bodyCentered = this.options.bodyCentered;


              var bodyClasses = this.styleSheet.body;
              if (bodyCentered) {
                  bodyClasses = bodyClasses + this.styleSheet.centered;
              }

              return bodyClasses;
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              var headingClasses = this.getHeadingClasses();
              var bodyClasses = this.getBodyClasses();

              return [UI.createElement(
                  "div",
                  { ref: "panelTitle", className: headingClasses },
                  this.getTitle()
              ), UI.createElement(
                  "div",
                  { ref: "panelBody", className: bodyClasses, style: this.options.bodyStyle },
                  this.render()
              )];
          }
      }]);
      return CardPanel;
  }(SimpleStyledElement)) || _class3$4);

  var _class$l, _descriptor$7, _descriptor2$7, _descriptor3$7, _descriptor4$6, _descriptor5$6, _dec$9, _class3$5;

  function _initDefineProp$8(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$8(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var RowListStyle = (_class$l = function (_BasicLevelSizeStyleS) {
      inherits(RowListStyle, _BasicLevelSizeStyleS);

      function RowListStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, RowListStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RowListStyle.__proto__ || Object.getPrototypeOf(RowListStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$8(_this, "rowList", _descriptor$7, _this), _initDefineProp$8(_this, "DEFAULT", _descriptor2$7, _this), _initDefineProp$8(_this, "LARGE", _descriptor3$7, _this), _initDefineProp$8(_this, "alternativeColorsOddRow", _descriptor4$6, _this), _initDefineProp$8(_this, "noAlternativeColors", _descriptor5$6, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return RowListStyle;
  }(BasicLevelSizeStyleSheet), (_descriptor$7 = _applyDecoratedDescriptor$8(_class$l.prototype, "rowList", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              width: "100%"
          };
      }
  }), _descriptor2$7 = _applyDecoratedDescriptor$8(_class$l.prototype, "DEFAULT", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              display: "flex",
              alignItems: "center",
              width: "100%",

              minHeight: this.themeProperties.ROW_LIST_ROW_HEIGHT,
              paddingLeft: this.themeProperties.ROW_LIST_ROW_PADDING,
              paddingRight: this.themeProperties.ROW_LIST_ROW_PADDING,

              backgroundColor: this.themeProperties.COLOR_BACKGROUND
          };
      }
  }), _descriptor3$7 = _applyDecoratedDescriptor$8(_class$l.prototype, "LARGE", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              minHeight: this.themeProperties.ROW_LIST_ROW_HEIGHT_LARGE,
              paddingLeft: this.themeProperties.ROW_LIST_ROW_PADDING_LARGE,
              paddingRight: this.themeProperties.ROW_LIST_ROW_PADDING_LARGE
          };
      }
  }), _descriptor4$6 = _applyDecoratedDescriptor$8(_class$l.prototype, "alternativeColorsOddRow", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              backgroundColor: this.themeProperties.COLOR_BACKGROUND_ALTERNATIVE
          };
      }
  }), _descriptor5$6 = _applyDecoratedDescriptor$8(_class$l.prototype, "noAlternativeColors", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              borderTopWidth: this.themeProperties.ROW_LIST_ROW_BORDER_WIDTH,
              borderTopStyle: this.themeProperties.BASE_BORDER_STYLE,
              borderTopColor: this.themeProperties.BASE_BORDER_COLOR
          };
      }
  })), _class$l);

  var RowList = (_dec$9 = registerStyle(RowListStyle), _dec$9(_class3$5 = function (_SimpleStyledElement) {
      inherits(RowList, _SimpleStyledElement);

      function RowList() {
          classCallCheck(this, RowList);
          return possibleConstructorReturn(this, (RowList.__proto__ || Object.getPrototypeOf(RowList)).apply(this, arguments));
      }

      createClass(RowList, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.rowList);
          }
      }, {
          key: "getDefaultOptions",
          value: function getDefaultOptions(options) {
              return {
                  alternateColors: true
              };
          }
      }, {
          key: "getRowClasses",
          value: function getRowClasses(index) {
              var rowClasses = this.styleSheet.DEFAULT;
              if (this.getSize()) {
                  rowClasses = rowClasses + this.styleSheet.Size(this.getSize());
              }

              var alternateColors = this.options.alternateColors;


              if (alternateColors && index % 2 === 1) {
                  rowClasses = rowClasses + this.styleSheet.alternativeColorsOddRow;
              } else if (!alternateColors && index > 0) {
                  rowClasses = rowClasses + this.styleSheet.noAlternativeColors;
              }

              return rowClasses;
          }
      }, {
          key: "render",
          value: function render() {
              var _this3 = this;

              var _options = this.options,
                  rows = _options.rows,
                  rowParser = _options.rowParser;


              return rows.map(function (row, index) {
                  return UI.createElement(
                      "div",
                      { className: _this3.getRowClasses(index) },
                      rowParser(row)
                  );
              });
          }
      }]);
      return RowList;
  }(SimpleStyledElement)) || _class3$5);

  var _class$m, _descriptor$8, _descriptor2$8, _class3$6, _descriptor3$8, _descriptor4$7, _descriptor5$7, _descriptor6$5;

  function _initDefineProp$9(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$9(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var CollapsibleStyle = (_class$m = function (_StyleSheet) {
      inherits(CollapsibleStyle, _StyleSheet);

      function CollapsibleStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, CollapsibleStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = CollapsibleStyle.__proto__ || Object.getPrototypeOf(CollapsibleStyle)).call.apply(_ref, [this].concat(args))), _this), _this.transitionDuration = 0.4, _initDefineProp$9(_this, "collapsing", _descriptor$8, _this), _initDefineProp$9(_this, "collapsed", _descriptor2$8, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return CollapsibleStyle;
  }(StyleSheet), (_descriptor$8 = _applyDecoratedDescriptor$9(_class$m.prototype, "collapsing", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              marginTop: "0",
              transitionTimingFunction: "ease",
              transitionDuration: this.transitionDuration + "s",
              transitionProperty: "margin-top",
              transitionDelay: "-0.15s"
          };
      }
  }), _descriptor2$8 = _applyDecoratedDescriptor$9(_class$m.prototype, "collapsed", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              marginTop: "-100% !important",
              transitionDelay: "0s !important"
          };
      }
  })), _class$m);
  var CollapsiblePanelStyle = (_class3$6 = function (_CardPanelStyle) {
      inherits(CollapsiblePanelStyle, _CardPanelStyle);

      function CollapsiblePanelStyle() {
          var _ref2;

          var _temp2, _this2, _ret2;

          classCallCheck(this, CollapsiblePanelStyle);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = CollapsiblePanelStyle.__proto__ || Object.getPrototypeOf(CollapsiblePanelStyle)).call.apply(_ref2, [this].concat(args))), _this2), _initDefineProp$9(_this2, "panel", _descriptor3$8, _this2), _initDefineProp$9(_this2, "heading", _descriptor4$7, _this2), _initDefineProp$9(_this2, "button", _descriptor5$7, _this2), _initDefineProp$9(_this2, "collapsedButton", _descriptor6$5, _this2), _temp2), possibleConstructorReturn(_this2, _ret2);
      }

      return CollapsiblePanelStyle;
  }(CardPanelStyle), (_descriptor3$8 = _applyDecoratedDescriptor$9(_class3$6.prototype, "panel", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          return {
              boxShadow: null,
              borderWidth: "1px",
              borderColor: "#ccc !important",
              borderRadius: "3px"
          };
      }
  }), _descriptor4$7 = _applyDecoratedDescriptor$9(_class3$6.prototype, "heading", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              padding: "10px 15px",
              borderBottom: "1px solid transparent",
              borderTopLeftRadius: "3px",
              borderTopRightRadius: "3px",
              backgroundColor: "#fefefe",
              ":hover": {
                  backgroundColor: "#f3f3f3"
              }
          };
      }
  }), _descriptor5$7 = _applyDecoratedDescriptor$9(_class3$6.prototype, "button", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              marginTop: "0",
              marginBottom: "0",
              fontSize: "16px",
              color: "inherit",
              cursor: "pointer",
              ":hover": {
                  color: "inherit"
              },
              ":before": {
                  transition: "transform .2s linear",
                  fontFamily: "'FontAwesome'",
                  content: "\"\\f107\"",
                  color: "grey",
                  display: "inline-block",
                  lineHeight: "0.7em",
                  width: "0.7em",
                  fontSize: "150%",
                  verticalAlign: "bottom",
                  height: "0.7em",
                  textAlign: "center",
                  transform: "rotate(0deg)",
                  marginRight: ".2em"
              }
          };
      }
  }), _descriptor6$5 = _applyDecoratedDescriptor$9(_class3$6.prototype, "collapsedButton", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              ":before": {
                  transform: "rotate(-90deg) !important"
              }
          };
      }
  })), _class3$6);

  function CollapsibleMixin(BaseClass) {
      var _class, _temp;

      var CollapsibleClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CollapsibleStyle;
      var CollapsibleElement = (_temp = _class = function (_BaseClass) {
          inherits(CollapsibleElement, _BaseClass);

          function CollapsibleElement() {
              classCallCheck(this, CollapsibleElement);
              return possibleConstructorReturn(this, (CollapsibleElement.__proto__ || Object.getPrototypeOf(CollapsibleElement)).apply(this, arguments));
          }

          createClass(CollapsibleElement, [{
              key: "getDefaultOptions",
              value: function getDefaultOptions() {
                  return {
                      collapsed: true
                  };
              }
          }, {
              key: "getCollapsibleStyleSheet",
              value: function getCollapsibleStyleSheet() {
                  return this.options.collapsibleStyleSheet || this.constructor.collapsibleStyleSheet;
              }
          }, {
              key: "expand",
              value: function expand(panel) {
                  this.options.collapsed = false;
                  this.dispatch("expand");
                  var collapsibleStyle = this.getCollapsibleStyleSheet();
                  panel.addClass(collapsibleStyle.collapsing);
                  panel.removeClass("hidden");
                  setTimeout(function () {
                      panel.removeClass(collapsibleStyle.collapsed);
                  }, 100);
              }
          }, {
              key: "collapse",
              value: function collapse(panel) {
                  var _this2 = this;

                  this.options.collapsed = true;
                  this.dispatch("collapse");
                  var collapsibleStyle = this.getCollapsibleStyleSheet();
                  panel.addClass(collapsibleStyle.collapsing);
                  panel.addClass(collapsibleStyle.collapsed);
                  var transitionEndFunction = function transitionEndFunction() {
                      if (_this2.options.collapsed) {
                          panel.addClass("hidden");
                      }
                  };
                  panel.addNodeListener("transitionend", transitionEndFunction);
              }
          }]);
          return CollapsibleElement;
      }(BaseClass), _class.collapsibleStyleSheet = new CollapsibleClass(), _temp);


      return CollapsibleElement;
  }

  var _dec$a, _class$n;

  var CollapsiblePanel = (_dec$a = registerStyle(CollapsiblePanelStyle), _dec$a(_class$n = function (_CollapsibleMixin) {
      inherits(CollapsiblePanel, _CollapsibleMixin);

      function CollapsiblePanel() {
          classCallCheck(this, CollapsiblePanel);
          return possibleConstructorReturn(this, (CollapsiblePanel.__proto__ || Object.getPrototypeOf(CollapsiblePanel)).apply(this, arguments));
      }

      createClass(CollapsiblePanel, [{
          key: "toggle",
          value: function toggle() {
              if (this.options.collapsed) {
                  this.expand();
              } else {
                  this.collapse();
              }
          }
      }, {
          key: "expand",
          value: function expand() {
              get(CollapsiblePanel.prototype.__proto__ || Object.getPrototypeOf(CollapsiblePanel.prototype), "expand", this).call(this, this.contentArea);
              this.toggleButton.removeClass(this.styleSheet.collapsedButton);
          }
      }, {
          key: "collapse",
          value: function collapse() {
              get(CollapsiblePanel.prototype.__proto__ || Object.getPrototypeOf(CollapsiblePanel.prototype), "collapse", this).call(this, this.contentArea);
              this.toggleButton.addClass(this.styleSheet.collapsedButton);
          }
      }, {
          key: "setTitle",
          value: function setTitle(title) {
              this.options.title = title;
              this.toggleButton.setChildren(title);
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              var _this2 = this;

              var collapsedPanelClass = "";
              var collapsedHeadingClass = "";
              var hiddenClass = "";
              var contentStyle = {};

              if (this.options.collapsed) {
                  collapsedHeadingClass = this.styleSheet.collapsedButton;
                  collapsedPanelClass = this.styleSheet.collapsed;
                  hiddenClass = "hidden";
              }
              if (!this.options.noPadding) {
                  contentStyle = {
                      padding: "8px 8px"
                  };
              }

              return [UI.createElement(
                  "div",
                  { className: this.styleSheet.heading },
                  UI.createElement(
                      "div",
                      { ref: "toggleButton", className: this.styleSheet.button + " " + collapsedHeadingClass,
                          onClick: function onClick() {
                              return _this2.toggle();
                          } },
                      this.getTitle()
                  )
              ), UI.createElement(
                  "div",
                  { style: { overflow: "hidden" } },
                  UI.createElement(
                      "div",
                      { ref: "contentArea", className: collapsedPanelClass + " " + hiddenClass,
                          style: contentStyle },
                      this.render()
                  )
              )];
          }
      }]);
      return CollapsiblePanel;
  }(CollapsibleMixin(CardPanel))) || _class$n);

  var DelayedCollapsiblePanel = function (_CollapsiblePanel) {
      inherits(DelayedCollapsiblePanel, _CollapsiblePanel);

      function DelayedCollapsiblePanel() {
          classCallCheck(this, DelayedCollapsiblePanel);
          return possibleConstructorReturn(this, (DelayedCollapsiblePanel.__proto__ || Object.getPrototypeOf(DelayedCollapsiblePanel)).apply(this, arguments));
      }

      createClass(DelayedCollapsiblePanel, [{
          key: "toggle",
          value: function toggle() {
              if (!this._haveExpanded) {
                  this._haveExpanded = true;
                  UI.renderingStack.push(this);
                  this.contentArea.options.children = this.render();
                  UI.renderingStack.pop();
                  this.contentArea.redraw();
                  this.delayedMount();
              }
              get(DelayedCollapsiblePanel.prototype.__proto__ || Object.getPrototypeOf(DelayedCollapsiblePanel.prototype), "toggle", this).call(this);
          }
      }, {
          key: "render",
          value: function render() {
              if (!this._haveExpanded) {
                  return [];
              }
              return this.getDelayedChildren();
          }
      }]);
      return DelayedCollapsiblePanel;
  }(CollapsiblePanel);

  var _class$o, _descriptor$9, _descriptor2$9, _class3$7, _descriptor3$9, _descriptor4$8, _descriptor5$8, _descriptor6$6, _descriptor7$4;

  function _initDefineProp$a(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$a(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var FloatingWindowStyle = (_class$o = function (_StyleSheet) {
      inherits(FloatingWindowStyle, _StyleSheet);

      function FloatingWindowStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, FloatingWindowStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FloatingWindowStyle.__proto__ || Object.getPrototypeOf(FloatingWindowStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$a(_this, "hiddenAnimated", _descriptor$9, _this), _initDefineProp$a(_this, "visibleAnimated", _descriptor2$9, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return FloatingWindowStyle;
  }(StyleSheet), (_descriptor$9 = _applyDecoratedDescriptor$a(_class$o.prototype, "hiddenAnimated", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              visibility: "hidden",
              opacity: "0",
              transition: "opacity 0.1s linear"
          };
      }
  }), _descriptor2$9 = _applyDecoratedDescriptor$a(_class$o.prototype, "visibleAnimated", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              visibility: "visible",
              opacity: "1",
              transition: "opacity 0.1s linear"
          };
      }
  })), _class$o);
  var ModalStyle = (_class3$7 = function (_FloatingWindowStyle) {
      inherits(ModalStyle, _FloatingWindowStyle);

      function ModalStyle() {
          var _ref2;

          var _temp2, _this2, _ret2;

          classCallCheck(this, ModalStyle);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = ModalStyle.__proto__ || Object.getPrototypeOf(ModalStyle)).call.apply(_ref2, [this].concat(args))), _this2), _initDefineProp$a(_this2, "container", _descriptor3$9, _this2), _initDefineProp$a(_this2, "background", _descriptor4$8, _this2), _initDefineProp$a(_this2, "header", _descriptor5$8, _this2), _initDefineProp$a(_this2, "body", _descriptor6$6, _this2), _initDefineProp$a(_this2, "footer", _descriptor7$4, _this2), _temp2), possibleConstructorReturn(_this2, _ret2);
      }

      return ModalStyle;
  }(FloatingWindowStyle), (_descriptor3$9 = _applyDecoratedDescriptor$a(_class3$7.prototype, "container", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              position: "fixed",
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
              width: "100%",
              height: "100%",
              zIndex: "9999"
          };
      }
  }), _descriptor4$8 = _applyDecoratedDescriptor$a(_class3$7.prototype, "background", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              position: "fixed",
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)"
          };
      }
  }), _descriptor5$8 = _applyDecoratedDescriptor$a(_class3$7.prototype, "header", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              padding: "15px",
              borderBottom: "1px solid #e5e5e5"
          };
      }
  }), _descriptor6$6 = _applyDecoratedDescriptor$a(_class3$7.prototype, "body", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              position: "relative",
              padding: "15px"
          };
      }
  }), _descriptor7$4 = _applyDecoratedDescriptor$a(_class3$7.prototype, "footer", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              padding: "15px",
              textAlign: "right",
              borderTop: "1px solid #e5e5e5"
          };
      }
  })), _class3$7);

  var _dec$b, _class$p;

  var FloatingWindow = (_dec$b = registerStyle(FloatingWindowStyle), _dec$b(_class$p = function (_UI$Element) {
      inherits(FloatingWindow, _UI$Element);

      function FloatingWindow() {
          classCallCheck(this, FloatingWindow);
          return possibleConstructorReturn(this, (FloatingWindow.__proto__ || Object.getPrototypeOf(FloatingWindow)).apply(this, arguments));
      }

      createClass(FloatingWindow, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  transitionTime: 0,
                  style: {
                      zIndex: 2016
                  }
              };
          }
      }, {
          key: "fadeOut",
          value: function fadeOut() {
              this.removeClass(this.styleSheet.visibleAnimated);
              this.addClass(this.styleSheet.hiddenAnimated);
          }
      }, {
          key: "fadeIn",
          value: function fadeIn() {
              this.removeClass(this.styleSheet.hiddenAnimated);
              this.addClass(this.styleSheet.visibleAnimated);
          }
      }, {
          key: "show",
          value: function show() {
              var _this2 = this;

              // TODO: refactor this to use this.parent and UI.Element appendChild
              if (!this.isInDocument()) {
                  this.parentNode.appendChild(this.node);
                  this.redraw();
                  setTimeout(function () {
                      _this2.fadeIn();
                  }, 0);
              }
          }
      }, {
          key: "setParentNode",
          value: function setParentNode(parentNode) {
              this.options.parentNode = parentNode;
          }
      }, {
          key: "hide",
          value: function hide() {
              var _this3 = this;

              // TODO: refactor this to use this.parent and UI.Element removeChild
              if (this.isInDocument()) {
                  this.fadeOut();
                  setTimeout(function () {
                      if (_this3.isInDocument()) {
                          _this3.parentNode.removeChild(_this3.node);
                      }
                  }, this.options.transitionTime);
              }
          }
      }, {
          key: "parentNode",
          get: function get$$1() {
              if (!this.options.parentNode) {
                  if (this.parent) {
                      if (this.parent instanceof HTMLElement) {
                          this.options.parentNode = this.parent;
                      } else {
                          this.options.parentNode = this.parent.node;
                      }
                  } else {
                      this.options.parentNode = document.body;
                  }
              }
              return this.options.parentNode;
          }
      }]);
      return FloatingWindow;
  }(UI.Element)) || _class$p);

  var VolatileFloatingWindow = function (_FloatingWindow) {
      inherits(VolatileFloatingWindow, _FloatingWindow);

      function VolatileFloatingWindow() {
          classCallCheck(this, VolatileFloatingWindow);
          return possibleConstructorReturn(this, (VolatileFloatingWindow.__proto__ || Object.getPrototypeOf(VolatileFloatingWindow)).apply(this, arguments));
      }

      createClass(VolatileFloatingWindow, [{
          key: "bindWindowListeners",
          value: function bindWindowListeners() {
              var _this5 = this;

              this.hideListener = this.hideListener || function () {
                  _this5.hide();
              };
              window.addEventListener("click", this.hideListener);
          }
      }, {
          key: "toggle",
          value: function toggle() {
              if (!this.isInDocument()) {
                  this.show();
              } else {
                  this.hide();
              }
          }
      }, {
          key: "show",
          value: function show() {
              if (!this.isInDocument()) {
                  this.bindWindowListeners();
                  get(VolatileFloatingWindow.prototype.__proto__ || Object.getPrototypeOf(VolatileFloatingWindow.prototype), "show", this).call(this);
              }
          }
      }, {
          key: "hide",
          value: function hide() {
              if (this.isInDocument()) {
                  get(VolatileFloatingWindow.prototype.__proto__ || Object.getPrototypeOf(VolatileFloatingWindow.prototype), "hide", this).call(this);
              }
          }
      }, {
          key: "onUnmount",
          value: function onUnmount() {
              get(VolatileFloatingWindow.prototype.__proto__ || Object.getPrototypeOf(VolatileFloatingWindow.prototype), "onUnmount", this).call(this);
              window.removeEventListener("click", this.hideListener);
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this6 = this;

              if (!this.options.notVisible) {
                  this.bindWindowListeners();
              } else {
                  setTimeout(function () {
                      _this6.hide();
                  });
              }

              this.addClickListener(function (event) {
                  event.stopPropagation();
              });
          }
      }]);
      return VolatileFloatingWindow;
  }(FloatingWindow);

  var _dec$c, _class$q;

  var Modal = (_dec$c = registerStyle(ModalStyle), _dec$c(_class$q = function (_UI$Element) {
      inherits(Modal, _UI$Element);

      function Modal() {
          classCallCheck(this, Modal);
          return possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
      }

      createClass(Modal, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  closeButton: true,
                  destroyOnHide: true,
                  visible: false
              };
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              var _this2 = this;

              return [UI.createElement(
                  Panel,
                  { ref: "modalContainer", className: (this.options.visible ? "" : "hidden") + this.styleSheet.container },
                  UI.createElement(Panel, { ref: "behindPanel", className: this.styleSheet.hiddenAnimated + this.styleSheet.background, onClick: function onClick() {
                          return _this2.hide();
                      } }),
                  this.getModalWindow()
              )];
          }
      }, {
          key: "getModalWindow",
          value: function getModalWindow() {
              var _this3 = this;

              var closeButton = null;
              if (this.options.closeButton) {
                  // TODO: this should be in a method
                  closeButton = UI.createElement(
                      "div",
                      { style: { right: "10px", zIndex: "10", position: "absolute" } },
                      UI.createElement(Button, { className: "close", size: Size.EXTRA_LARGE, style: { border: "none" }, label: "\xD7", onClick: function onClick() {
                              return _this3.hide();
                          } })
                  );
              }

              return UI.createElement(
                  FloatingWindow,
                  { ref: "modalWindow", style: this.getModalWindowStyle() },
                  closeButton,
                  this.render()
              );
          }
      }, {
          key: "getModalWindowStyle",
          value: function getModalWindowStyle() {
              if (this.options.fillScreen) {
                  this.options.width = "85%";
              }
              // TODO(@Rocky): I don't like this very much, honestly...
              return {
                  position: "relative",
                  padding: "1%",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
                  borderRadius: "10px",
                  margin: "60px auto",
                  display: this.options.display || "block",
                  maxHeight: this.options.maxHeight || "85%",
                  left: "0",
                  right: "0",
                  width: this.options.width || "50%",
                  height: this.options.height || "auto",
                  background: "white",
                  overflow: this.options.overflow || "auto"
              };
          }
      }, {
          key: "isVisible",
          value: function isVisible() {
              return this.options.visible;
          }
      }, {
          key: "hide",
          value: function hide() {
              var _this4 = this;

              if (!this.isVisible()) {
                  return;
              }

              this.options.visible = false;
              this.modalWindow.fadeOut();

              setTimeout(function () {
                  _this4.behindPanel.removeClass(_this4.styleSheet.visibleAnimated);
                  _this4.behindPanel.addClass(_this4.styleSheet.hiddenAnimated);

                  setTimeout(function () {
                      _this4.modalContainer.addClass("hidden");
                      if (_this4.options.destroyOnHide) {
                          _this4.destroyNode();
                      }
                  }, _this4.modalWindow.options.transitionTime || 0);

                  _this4.detachListener(_this4.closeListenerHandler);
              }, this.modalWindow.options.transitionTime || 0);
              document.body.classList.remove("unscrollable");
          }
      }, {
          key: "show",
          value: function show() {
              var _this5 = this;

              this.options.visible = true;
              if (!this.node) {
                  this.mount(document.body);
              }
              this.modalContainer.removeClass("hidden");
              setTimeout(function () {
                  _this5.behindPanel.addClass(_this5.styleSheet.visibleAnimated);
                  _this5.behindPanel.removeClass(_this5.styleSheet.hiddenAnimated);

                  setTimeout(function () {
                      _this5.modalWindow.fadeIn();
                  }, _this5.modalWindow.options.transitionTime);
              }, 0);
              this.closeListenerHandler = this.attachListener(Dispatcher.Global, "closeAllModals", function () {
                  _this5.hide();
              });
              document.body.classList.add("unscrollable");
          }
      }], [{
          key: "show",
          value: function show() {
              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              var modal = new this(options);
              modal.show();
              return modal;
          }
      }]);
      return Modal;
  }(UI.Element)) || _class$q);

  var ActionModal = function (_Modal) {
      inherits(ActionModal, _Modal);

      function ActionModal() {
          classCallCheck(this, ActionModal);
          return possibleConstructorReturn(this, (ActionModal.__proto__ || Object.getPrototypeOf(ActionModal)).apply(this, arguments));
      }

      createClass(ActionModal, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return Object.assign(get(ActionModal.prototype.__proto__ || Object.getPrototypeOf(ActionModal.prototype), "getDefaultOptions", this).call(this), {
                  closeButton: false
              });
          }
      }, {
          key: "getActionName",
          value: function getActionName() {
              return this.options.actionName;
          }
      }, {
          key: "getActionLevel",
          value: function getActionLevel() {
              return this.options.level || Level.DEFAULT;
          }
      }, {
          key: "getCloseName",
          value: function getCloseName() {
              return this.options.closeName || "Close";
          }
      }, {
          key: "render",
          value: function render() {
              return [UI.createElement(
                  "div",
                  { className: this.styleSheet.header },
                  this.getHeader()
              ), this.getBody() ? UI.createElement(
                  "div",
                  { className: this.styleSheet.body },
                  this.getBody()
              ) : null, this.getFooter() ? UI.createElement(
                  "div",
                  { className: this.styleSheet.footer },
                  this.getFooter()
              ) : null];
          }
      }, {
          key: "getHeader",
          value: function getHeader() {
              return UI.createElement(
                  "h4",
                  null,
                  this.getTitle()
              );
          }
      }, {
          key: "getTitle",
          value: function getTitle() {
              return this.options.title || this.getActionName();
          }
      }, {
          key: "getBody",
          value: function getBody() {
              return null;
          }
      }, {
          key: "getActionButton",
          value: function getActionButton() {
              var _this7 = this;

              return UI.createElement(Button, { level: this.getActionLevel(), label: this.getActionName(),
                  onClick: function onClick() {
                      return _this7.action();
                  }, ref: "actionButton" });
          }
      }, {
          key: "getFooter",
          value: function getFooter() {
              var _this8 = this;

              return [UI.createElement(TemporaryMessageArea, { ref: "messageArea" }), UI.createElement(
                  ButtonGroup,
                  null,
                  UI.createElement(Button, { label: this.getCloseName(), onClick: function onClick() {
                          return _this8.hide();
                      } }),
                  this.getActionButton()
              )];
          }
      }, {
          key: "action",
          value: function action() {}
      }]);
      return ActionModal;
  }(Modal);

  var ErrorModal = function (_ActionModal) {
      inherits(ErrorModal, _ActionModal);

      function ErrorModal() {
          classCallCheck(this, ErrorModal);
          return possibleConstructorReturn(this, (ErrorModal.__proto__ || Object.getPrototypeOf(ErrorModal)).apply(this, arguments));
      }

      createClass(ErrorModal, [{
          key: "getTitle",
          value: function getTitle() {
              return "An Error occurred";
          }
      }, {
          key: "getBody",
          value: function getBody() {
              return this.options.error.message || this.options.error;
          }
      }, {
          key: "getFooter",
          value: function getFooter() {
              var _this12 = this;

              return UI.createElement(Button, { level: Level.DANGER, label: "Dismiss", onClick: function onClick() {
                      return _this12.hide();
                  } });
          }
      }]);
      return ErrorModal;
  }(ActionModal);

  var _class$r, _descriptor$a;

  function _initDefineProp$b(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$b(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var GlobalContainerStyle = (_class$r = function (_StyleSheet) {
      inherits(GlobalContainerStyle, _StyleSheet);

      function GlobalContainerStyle() {
          classCallCheck(this, GlobalContainerStyle);

          var _this = possibleConstructorReturn(this, (GlobalContainerStyle.__proto__ || Object.getPrototypeOf(GlobalContainerStyle)).call(this, { updateOnResize: Device.isMobileDevice() }));

          _initDefineProp$b(_this, "default", _descriptor$a, _this);

          return _this;
      }

      return GlobalContainerStyle;
  }(StyleSheet), (_descriptor$a = _applyDecoratedDescriptor$b(_class$r.prototype, "default", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              height: function height() {
                  return Device.isMobileDevice() ? window.innerHeight + "px" : "100vh";
              },
              paddingTop: this.themeProperties.NAV_MANAGER_NAVBAR_HEIGHT,
              background: this.themeProperties.COLOR_BACKGROUND_BODY,
              width: "100%",
              ">*": {
                  height: "100%",
                  width: "100%",
                  paddingTop: Device.isMobileDevice() ? this.themeProperties.MAIN_CONTAINER_EXTRA_PADDING_TOP_MOBILE : this.themeProperties.MAIN_CONTAINER_EXTRA_PADDING_TOP_DESKTOP,
                  paddingBottom: Device.isMobileDevice() ? this.themeProperties.MAIN_CONTAINER_EXTRA_PADDING_BOTTOM_MOBILE : this.themeProperties.MAIN_CONTAINER_EXTRA_PADDING_BOTTOM_DESKTOP,
                  overflow: Device.isMobileDevice() ? "" : "auto"
              }
          };
      }
  })), _class$r);

  var _dec$d, _class$s;

  var GlobalContainer = (_dec$d = registerStyle(GlobalContainerStyle), _dec$d(_class$s = function (_UI$Element) {
      inherits(GlobalContainer, _UI$Element);

      function GlobalContainer() {
          classCallCheck(this, GlobalContainer);
          return possibleConstructorReturn(this, (GlobalContainer.__proto__ || Object.getPrototypeOf(GlobalContainer)).apply(this, arguments));
      }

      createClass(GlobalContainer, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.default);
          }
      }, {
          key: "onMount",
          value: function onMount() {
              if (!Device.isTouchDevice() || !Device.isMobileDevice()) {
                  Object.assign(document.body.style, {
                      overflow: "hidden"
                  });
              }
              GlobalContainer.Global = GlobalContainer.Global || this;
          }
      }]);
      return GlobalContainer;
  }(UI.Element)) || _class$s);

  var Divider = function (_UI$Element) {
      inherits(Divider, _UI$Element);

      function Divider() {
          classCallCheck(this, Divider);
          return possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).apply(this, arguments));
      }

      createClass(Divider, [{
          key: "dragMousedown",
          value: function dragMousedown(event) {}
      }, {
          key: "dragMousemove",
          value: function dragMousemove(event) {}
      }, {
          key: "dragMouseup",
          value: function dragMouseup(event) {}
      }, {
          key: "dividerMousedownFunction",
          value: function dividerMousedownFunction(event) {
              var _this2 = this;

              this.dragMousedown(event);
              this.parent.dispatch("dividerMousedown", { divider: this, domEvent: event });

              var dragMousemoveFunction = function dragMousemoveFunction(event) {
                  _this2.dragMousemove(event);
                  event.preventDefault(); // for touch devices
                  _this2.parent.dispatch("dividerMousemove", event);
              };

              this.parent.addNodeListener("touchmove", dragMousemoveFunction);
              this.parent.addNodeListener("mousemove", dragMousemoveFunction);

              var dragMouseupFunction = function dragMouseupFunction(event) {
                  _this2.dragMouseup(event);
                  _this2.parent.dispatch("dividerMouseup", event);
                  _this2.parent.removeNodeListener("touchmove", dragMousemoveFunction);
                  window.removeEventListener("touchend", dragMouseupFunction);
                  _this2.parent.removeNodeListener("mousemove", dragMousemoveFunction);
                  window.removeEventListener("mouseup", dragMouseupFunction);
              };

              window.addEventListener("touchend", dragMouseupFunction);
              window.addEventListener("mouseup", dragMouseupFunction);
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this3 = this;

              // TODO: fix this hack when Device.isTouchDevice works
              this.addNodeListener("touchstart", function (event) {
                  _this3.touchDeviceTriggered = true;_this3.dividerMousedownFunction(event);
              });
              this.addNodeListener("mousedown", function (event) {
                  if (!_this3.touchDeviceTriggered) {
                      _this3.dividerMousedownFunction(event);
                  }
              });
          }
      }]);
      return Divider;
  }(UI.Element);

  var _class$t, _descriptor$b, _class3$8, _descriptor2$a, _descriptor3$a, _descriptor4$9, _descriptor5$9, _class5$3, _descriptor6$7, _descriptor7$5, _descriptor8$4, _descriptor9$4, _class7$3, _descriptor10$3, _descriptor11$3, _descriptor12$3, _descriptor13$3, _descriptor14$3, _descriptor15$3, _descriptor16$3, _descriptor17$3, _descriptor18$1, _descriptor19$1, _descriptor20$1;

  function _initDefineProp$c(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$c(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var DividerStyle = (_class$t = function (_StyleSheet) {
      inherits(DividerStyle, _StyleSheet);

      function DividerStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, DividerStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DividerStyle.__proto__ || Object.getPrototypeOf(DividerStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$c(_this, "noTextSelection", _descriptor$b, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return DividerStyle;
  }(StyleSheet), (_descriptor$b = _applyDecoratedDescriptor$c(_class$t.prototype, "noTextSelection", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              "-webkit-user-select": "none",
              "-moz-user-select": "none",
              "-ms-user-select": "none",
              "-o-user-select": "none",
              userSelect: "none"
          };
      }
  })), _class$t);
  var AccordionStyle = (_class3$8 = function (_DividerStyle) {
      inherits(AccordionStyle, _DividerStyle);

      function AccordionStyle() {
          var _ref2;

          var _temp2, _this2, _ret2;

          classCallCheck(this, AccordionStyle);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = AccordionStyle.__proto__ || Object.getPrototypeOf(AccordionStyle)).call.apply(_ref2, [this].concat(args))), _this2), _initDefineProp$c(_this2, "accordion", _descriptor2$a, _this2), _initDefineProp$c(_this2, "grab", _descriptor3$a, _this2), _initDefineProp$c(_this2, "grabbing", _descriptor4$9, _this2), _initDefineProp$c(_this2, "collapseIcon", _descriptor5$9, _this2), _temp2), possibleConstructorReturn(_this2, _ret2);
      }

      return AccordionStyle;
  }(DividerStyle), (_descriptor2$a = _applyDecoratedDescriptor$c(_class3$8.prototype, "accordion", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              display: "flex",
              flexDirection: "column",
              ">:nth-of-type(even)": {
                  flexGrow: "1",
                  flexShrink: "1",
                  flexBasis: "auto",
                  overflow: "auto",
                  position: "relative"
              },
              ">:nth-of-type(odd)": {
                  fontSize: "1em",
                  textTransform: "uppercase",
                  padding: "8px 8px"
              }
          };
      }
  }), _descriptor3$a = _applyDecoratedDescriptor$c(_class3$8.prototype, "grab", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          var _ref3;

          return _ref3 = {
              cursor: "grab"
          }, defineProperty(_ref3, "cursor", "-moz-grab"), defineProperty(_ref3, "cursor", "-webkit-grab"), _ref3;
      }
  }), _descriptor4$9 = _applyDecoratedDescriptor$c(_class3$8.prototype, "grabbing", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          var _ref4;

          return _ref4 = {
              cursor: "grabbing"
          }, defineProperty(_ref4, "cursor", "-moz-grabbing"), defineProperty(_ref4, "cursor", "-webkit-grabbing"), _ref4;
      }
  }), _descriptor5$9 = _applyDecoratedDescriptor$c(_class3$8.prototype, "collapseIcon", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              width: "0.7em",
              fontSize: "120% !important",
              fontWeight: "900 !important",
              textAlign: "center",
              marginRight: "0.2em"
          };
      }
  })), _class3$8);
  var SectionDividerStyle = (_class5$3 = function (_DividerStyle2) {
      inherits(SectionDividerStyle, _DividerStyle2);

      function SectionDividerStyle() {
          var _ref5;

          var _temp3, _this3, _ret3;

          classCallCheck(this, SectionDividerStyle);

          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
          }

          return _ret3 = (_temp3 = (_this3 = possibleConstructorReturn(this, (_ref5 = SectionDividerStyle.__proto__ || Object.getPrototypeOf(SectionDividerStyle)).call.apply(_ref5, [this].concat(args))), _this3), _this3.barThickness = 2, _this3.barPadding = 3, _this3.dividerColor = function () {
              return "#DDD";
          }, _initDefineProp$c(_this3, "horizontalDivider", _descriptor6$7, _this3), _initDefineProp$c(_this3, "verticalDivider", _descriptor7$5, _this3), _initDefineProp$c(_this3, "horizontalSection", _descriptor8$4, _this3), _initDefineProp$c(_this3, "verticalSection", _descriptor9$4, _this3), _temp3), possibleConstructorReturn(_this3, _ret3);
      }

      return SectionDividerStyle;
  }(DividerStyle), (_descriptor6$7 = _applyDecoratedDescriptor$c(_class5$3.prototype, "horizontalDivider", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          var _this4 = this;

          return {
              zIndex: "10",
              position: "absolute",
              height: "100%",
              cursor: "col-resize",
              width: this.barThickness + 2 * this.barPadding + "px",
              background: function background() {
                  return _this4.dividerColor();
              },
              backgroundClip: "padding-box",
              borderLeft: this.barPadding + "px solid transparent",
              borderRight: this.barPadding + "px solid transparent",
              marginLeft: -this.barThickness / 2 - this.barPadding + "px",
              marginRight: -this.barThickness / 2 + "px",
              display: "inline-block"
          };
      }
  }), _descriptor7$5 = _applyDecoratedDescriptor$c(_class5$3.prototype, "verticalDivider", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          var _this5 = this;

          return {
              zIndex: "10",
              position: "absolute",
              cursor: "row-resize",
              width: "100%",
              height: this.barThickness + 2 * this.barPadding + "px",
              background: function background() {
                  return _this5.dividerColor();
              },
              backgroundClip: "padding-box",
              borderBottom: this.barPadding + "px solid transparent",
              borderTop: this.barPadding + "px solid transparent",
              marginBottom: -this.barThickness / 2 - this.barPadding + "px",
              marginTop: -this.barThickness / 2 - this.barPadding + "px"
          };
      }
  }), _descriptor8$4 = _applyDecoratedDescriptor$c(_class5$3.prototype, "horizontalSection", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              position: "relative",
              whiteSpace: "nowrap",
              ">*": {
                  whiteSpace: "initial",
                  verticalAlign: "top",
                  paddingLeft: this.barThickness / 2 + this.barPadding + "px",
                  paddingRight: this.barThickness / 2 + this.barPadding + "px"
              },
              ">:first-child": {
                  paddingLeft: "0"
              },
              ">:last-child": {
                  paddingRight: "0"
              },
              ">:nth-of-type(even)": {
                  padding: "0"
              },
              ">:nth-of-type(odd)": {
                  display: "inline-block"
              }
          };
      }
  }), _descriptor9$4 = _applyDecoratedDescriptor$c(_class5$3.prototype, "verticalSection", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              position: "relative",
              ">*": {
                  paddingTop: this.barThickness / 2 + this.barPadding + "px",
                  paddingBottom: this.barThickness / 2 + this.barPadding + "px"
              },
              ">:first-child": {
                  paddingTop: "0"
              },
              ">:last-child": {
                  paddingBottom: "0"
              },
              ">:nth-of-type(even)": {
                  padding: "0"
              }
          };
      }
  })), _class5$3);
  var TitledDividerStyle = (_class7$3 = function (_SectionDividerStyle) {
      inherits(TitledDividerStyle, _SectionDividerStyle);

      function TitledDividerStyle() {
          var _ref6;

          var _temp4, _this6, _ret4;

          classCallCheck(this, TitledDividerStyle);

          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
          }

          return _ret4 = (_temp4 = (_this6 = possibleConstructorReturn(this, (_ref6 = TitledDividerStyle.__proto__ || Object.getPrototypeOf(TitledDividerStyle)).call.apply(_ref6, [this].concat(args))), _this6), _this6.barThickness = 16, _this6.barPadding = 1, _this6.transitionTime = .3, _this6.dividerStyle = {
              backgroundColor: "white",
              borderColor: "#DDD !important"
          }, _initDefineProp$c(_this6, "horizontalDivider", _descriptor10$3, _this6), _initDefineProp$c(_this6, "horizontalDots", _descriptor11$3, _this6), _initDefineProp$c(_this6, "verticalDivider", _descriptor12$3, _this6), _initDefineProp$c(_this6, "verticalDots", _descriptor13$3, _this6), _initDefineProp$c(_this6, "arrowButton", _descriptor14$3, _this6), _initDefineProp$c(_this6, "buttonsDisabled", _descriptor15$3, _this6), _initDefineProp$c(_this6, "barCollapsePanel", _descriptor16$3, _this6), _initDefineProp$c(_this6, "hiddenContent", _descriptor17$3, _this6), _initDefineProp$c(_this6, "collapsedBarTitle", _descriptor18$1, _this6), _initDefineProp$c(_this6, "animatedSectionDivider", _descriptor19$1, _this6), _initDefineProp$c(_this6, "paddingRemoved", _descriptor20$1, _this6), _temp4), possibleConstructorReturn(_this6, _ret4);
      }

      return TitledDividerStyle;
  }(SectionDividerStyle), (_descriptor10$3 = _applyDecoratedDescriptor$c(_class7$3.prototype, "horizontalDivider", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          return Object.assign(this.dividerStyle, {
              display: "inline-flex",
              alignItems: "center",
              flexDirection: "column",
              ">*": {
                  flex: "1",
                  display: "flex",
                  color: "rgba(0,0,0, .4)"
              },
              ">:first-child": {
                  alignItems: "flex-end"
              },
              ">:last-child": {
                  alignItems: "flex-start"
              },
              ">:nth-child(2)": {
                  flex: ".2",
                  alignItems: "center"
              }
          });
      }
  }), _descriptor11$3 = _applyDecoratedDescriptor$c(_class7$3.prototype, "horizontalDots", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              transform: "rotate(90deg) scaleX(5)"
          };
      }
  }), _descriptor12$3 = _applyDecoratedDescriptor$c(_class7$3.prototype, "verticalDivider", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          return Object.assign(this.dividerStyle, {
              display: "flex",
              alignItems: "center"
          });
      }
  }), _descriptor13$3 = _applyDecoratedDescriptor$c(_class7$3.prototype, "verticalDots", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              flex: "1",
              fontSize: "70% !important",
              height: 0,
              textAlign: "center",
              transform: "scaleX(10) translateY(-.4em)"
          };
      }
  }), _descriptor14$3 = _applyDecoratedDescriptor$c(_class7$3.prototype, "arrowButton", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontSize: "230% !important",
              padding: "1em .2em",
              color: "rgba(0,0,0, .4)",
              cursor: "pointer",
              ":hover": {
                  color: "black"
              }
          };
      }
  }), _descriptor15$3 = _applyDecoratedDescriptor$c(_class7$3.prototype, "buttonsDisabled", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              ">:first-child": {
                  pointerEvents: "none"
              },
              ">:last-child": {
                  pointerEvents: "none"
              }
          };
      }
  }), _descriptor16$3 = _applyDecoratedDescriptor$c(_class7$3.prototype, "barCollapsePanel", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              position: "relative",
              ">:first-child": {
                  width: "100%",
                  height: "100%"
              },
              ">:nth-child(2)": {
                  display: "none",
                  opacity: "0",
                  transition: "opacity " + this.transitionTime + "s ease"
              }
          };
      }
  }), _descriptor17$3 = _applyDecoratedDescriptor$c(_class7$3.prototype, "hiddenContent", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              ">:first-child": {
                  display: "none"
              },
              ">:nth-child(2)": {
                  opacity: "1"
              }
          };
      }
  }), _descriptor18$1 = _applyDecoratedDescriptor$c(_class7$3.prototype, "collapsedBarTitle", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              cursor: "pointer",
              borderLeft: "1px solid #ccc",
              borderRight: "1px solid #ccc",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              flexDirection: "column",
              zIndex: 5,
              position: "absolute",
              top: 0,
              left: 0,
              ":hover": {
                  backgroundColor: "#f3f3f3"
              },
              ">:nth-child(2)": {
                  flex: "1",
                  transform: "rotate(90deg)"
              },
              ">:nth-child(2)>:first-child": {
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "130%",
                  whiteSpace: "nowrap",
                  marginTop: "-.4em",
                  transform: "translateY(10%)"
              },
              ">*": {
                  display: "flex",
                  alignItems: "center"
              },
              ">:first-child": {
                  flex: ".5",
                  fontSize: "180%"
              },
              ">:last-child": {
                  flex: ".5",
                  fontSize: "180%"
              }
          };
      }
  }), _descriptor19$1 = _applyDecoratedDescriptor$c(_class7$3.prototype, "animatedSectionDivider", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              ">*": {
                  transition: this.transitionTime + "s height ease, " + this.transitionTime + "s width ease"
              }
          };
      }
  }), _descriptor20$1 = _applyDecoratedDescriptor$c(_class7$3.prototype, "paddingRemoved", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              ">*": {
                  padding: "0 !important",
                  overflow: "hidden"
              },
              ">:nth-of-type(even)": {
                  display: "none !important"
              }
          };
      }
  })), _class7$3);

  var _dec$e, _class$u, _dec2$4, _class2$4;

  // options.orientation is the orientation of the divided elements

  var DividerBar = (_dec$e = registerStyle(SectionDividerStyle), _dec$e(_class$u = function (_Divider) {
      inherits(DividerBar, _Divider);

      function DividerBar() {
          classCallCheck(this, DividerBar);
          return possibleConstructorReturn(this, (DividerBar.__proto__ || Object.getPrototypeOf(DividerBar)).apply(this, arguments));
      }

      createClass(DividerBar, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return Object.assign({}, get(DividerBar.prototype.__proto__ || Object.getPrototypeOf(DividerBar.prototype), "getDefaultOptions", this).call(this), {
                  orientation: Orientation.HORIZONTAL
              });
          }
      }, {
          key: "dragMousedown",
          value: function dragMousedown(event) {
              document.body.classList.add(this.styleSheet.noTextSelection);
          }
      }, {
          key: "dragMouseup",
          value: function dragMouseup(event) {
              document.body.classList.remove(this.styleSheet.noTextSelection);
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              get(DividerBar.prototype.__proto__ || Object.getPrototypeOf(DividerBar.prototype), "extraNodeAttributes", this).call(this, attr);
              if (this.options.orientation === Orientation.VERTICAL) {
                  attr.addClass(this.styleSheet.verticalDivider);
              } else {
                  attr.addClass(this.styleSheet.horizontalDivider);
              }
          }
      }]);
      return DividerBar;
  }(Divider)) || _class$u);

  /* SectionDivider class should take in:
      - Vertical or horizontal separation
      - All the children it's dividing
      - An option on how to redivide the sizes of the children
   */

  var SectionDivider = (_dec2$4 = registerStyle(SectionDividerStyle), _dec2$4(_class2$4 = function (_UI$Element) {
      inherits(SectionDivider, _UI$Element);
      createClass(SectionDivider, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return Object.assign({
                  autoCollapse: false
              }, get(SectionDivider.prototype.__proto__ || Object.getPrototypeOf(SectionDivider.prototype), "getDefaultOptions", this).call(this));
          }
      }]);

      function SectionDivider(options) {
          classCallCheck(this, SectionDivider);

          var _this2 = possibleConstructorReturn(this, (SectionDivider.__proto__ || Object.getPrototypeOf(SectionDivider)).call(this, options));

          _this2.uncollapsedSizes = new WeakMap();
          return _this2;
      }

      createClass(SectionDivider, [{
          key: "getDividerBarClass",
          value: function getDividerBarClass() {
              return DividerBar;
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              if (this.getOrientation() === Orientation.VERTICAL) {
                  attr.addClass(this.styleSheet.verticalSection);
              } else {
                  attr.addClass(this.styleSheet.horizontalSection);
              }
          }
      }, {
          key: "getOrientation",
          value: function getOrientation() {
              return this.options.orientation || Orientation.VERTICAL;
          }
      }, {
          key: "getDimension",
          value: function getDimension(element) {
              if (this.getOrientation() === Orientation.HORIZONTAL) {
                  return element.getWidth();
              } else {
                  return element.getHeight();
              }
          }
      }, {
          key: "setDimension",
          value: function setDimension(element, size) {
              if (this.getOrientation() === Orientation.HORIZONTAL) {
                  element.setWidth(size);
              } else {
                  element.setHeight(size);
              }
          }
      }, {
          key: "getMinDimension",
          value: function getMinDimension(element) {
              if (this.getOrientation() === Orientation.HORIZONTAL && element.options.hasOwnProperty("minWidth")) {
                  return element.options.minWidth;
              } else if (this.getOrientation() === Orientation.VERTICAL && element.options.hasOwnProperty("minHeight")) {
                  return element.options.minHeight;
              } else {
                  return this.getDimension(this) / this.panels.length / 4;
              }
          }
      }, {
          key: "getHiddenDivider",
          value: function getHiddenDivider(index) {
              var divider = void 0;
              for (var i = index; i < this.panels.length - 1; i += 1) {
                  if (this.dividers[i].hasClass("hidden")) {
                      divider = this.dividers[i];
                  } else if (!this.dividers[i].hasClass("hidden")) {
                      break;
                  }
                  if (divider && !this.panels[i + 1].hasClass("hidden")) {
                      return divider;
                  }
              }
              divider = null;
              for (var _i = index - 1; _i >= 0; _i -= 1) {
                  if (this.dividers[_i].hasClass("hidden")) {
                      divider = this.dividers[_i];
                  } else if (!this.dividers[_i].hasClass("hidden")) {
                      break;
                  }
                  if (divider && !this.panels[_i].hasClass("hidden")) {
                      return divider;
                  }
              }
              return null;
          }
      }, {
          key: "getVisibleDivider",
          value: function getVisibleDivider(index) {
              for (var i = index; i < this.panels.length - 1; i += 1) {
                  if (!this.dividers[i].hasClass("hidden")) {
                      return this.dividers[i];
                  }
              }
              for (var _i2 = index - 1; _i2 >= 0; _i2 -= 1) {
                  if (!this.dividers[_i2].hasClass("hidden")) {
                      return this.dividers[_i2];
                  }
              }
              return null;
          }
      }, {
          key: "collapseChild",
          value: function collapseChild(index) {
              var parentSize = this.getDimension(this);
              var child = this.panels[index];
              var childSize = this.getDimension(child);
              this.uncollapsedSizes.set(child, childSize);

              var unCollapsedCount = -1;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.panels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var panel = _step.value;

                      if (this.getDimension(panel) && !panel.options.fixed) {
                          unCollapsedCount += 1;
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              var divider = this.getVisibleDivider(index);
              if (divider) {
                  divider.hide();
              }

              this.setDimension(child, "0");
              child.hide();

              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = this.panels[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var _panel = _step2.value;

                      if (this.getDimension(_panel) !== 0 && !_panel.options.fixed) {
                          this.setDimension(_panel, (this.getDimension(_panel) + childSize / unCollapsedCount) * 100 / parentSize - 0.5 / this.children.length + "%");
                      }
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }

              this.recalculateDimensions();
          }
      }, {
          key: "expandChild",
          value: function expandChild(index) {
              var parentSize = this.getDimension(this);
              var child = this.panels[index];

              var unCollapsedCount = 1;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                  for (var _iterator3 = this.panels[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var panel = _step3.value;

                      if (this.getDimension(panel) && !panel.options.fixed) {
                          unCollapsedCount += 1;
                      }
                  }
              } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                      }
                  } finally {
                      if (_didIteratorError3) {
                          throw _iteratorError3;
                      }
                  }
              }

              var divider = this.getHiddenDivider(index);
              if (divider) {
                  divider.show();
              }

              child.show();
              var childSize = this.uncollapsedSizes.get(child);

              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                  for (var _iterator4 = this.panels[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var _panel2 = _step4.value;

                      if (this.getDimension(_panel2) && !_panel2.options.fixed) {
                          this.setDimension(_panel2, (this.getDimension(_panel2) - childSize / (unCollapsedCount - 1)) * 100 / parentSize - this.panels.length / 2 + "%");
                      }
                  }
              } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                      }
                  } finally {
                      if (_didIteratorError4) {
                          throw _iteratorError4;
                      }
                  }
              }

              this.setDimension(child, childSize * 100 / parentSize + "%");
              this.recalculateDimensions();
          }
      }, {
          key: "isCollapsed",
          value: function isCollapsed(child) {
              return !this.getDimension(child);
          }
      }, {
          key: "toggleChild",
          value: function toggleChild(index) {
              if (this.isCollapsed(this.panels[index])) {
                  this.expandChild(index);
              } else {
                  this.collapseChild(index);
              }
          }
      }, {
          key: "recalculateDimensions",
          value: function recalculateDimensions() {
              if (!this.isInDocument()) {
                  return;
              }
              var parentSize = this.getDimension(this);
              var fixedTotalSize = 0;
              var unfixedTotalSize = 0;
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                  for (var _iterator5 = this.panels[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                      var panel = _step5.value;

                      if (panel.options.fixed) {
                          fixedTotalSize += this.getDimension(panel);
                      } else {
                          unfixedTotalSize += this.getDimension(panel);
                      }
                  }
              } catch (err) {
                  _didIteratorError5 = true;
                  _iteratorError5 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion5 && _iterator5.return) {
                          _iterator5.return();
                      }
                  } finally {
                      if (_didIteratorError5) {
                          throw _iteratorError5;
                      }
                  }
              }

              var ratio = (parentSize - fixedTotalSize) / parentSize;
              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = undefined;

              try {
                  for (var _iterator6 = this.panels[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                      var _panel3 = _step6.value;

                      if (!_panel3.options.fixed && !_panel3.hasClass("hidden")) {
                          this.setDimension(_panel3, this.getDimension(_panel3) * 100 * ratio / unfixedTotalSize + "%");
                      }
                  }
              } catch (err) {
                  _didIteratorError6 = true;
                  _iteratorError6 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion6 && _iterator6.return) {
                          _iterator6.return();
                      }
                  } finally {
                      if (_didIteratorError6) {
                          throw _iteratorError6;
                      }
                  }
              }
          }
      }, {
          key: "getPreviousUnfixedChild",
          value: function getPreviousUnfixedChild(index) {
              for (var i = index; i >= 0; i -= 1) {
                  var panel = this.panels[i];
                  if (!panel.hasClass("hidden") && !panel.options.fixed) {
                      return panel;
                  }
              }
              return null;
          }
      }, {
          key: "getNextUnfixedChild",
          value: function getNextUnfixedChild(index) {
              for (var i = index + 1; i < this.panels.length; i += 1) {
                  var panel = this.panels[i];
                  if (!panel.hasClass("hidden") && !panel.options.fixed) {
                      return panel;
                  }
              }
              return null;
          }
      }, {
          key: "dividerMouseDownFunction",
          value: function dividerMouseDownFunction(dividerEvent) {
              var _this3 = this;

              var previousEvent = dividerEvent.domEvent;
              var index = this.dividers.indexOf(dividerEvent.divider);

              var previousPanel = this.getPreviousUnfixedChild(index);
              var nextPanel = this.getNextUnfixedChild(index);

              if (previousPanel && nextPanel) {
                  var parentSize = this.getDimension(this);
                  var panelsSize = parentSize;

                  var _iteratorNormalCompletion7 = true;
                  var _didIteratorError7 = false;
                  var _iteratorError7 = undefined;

                  try {
                      for (var _iterator7 = this.panels[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                          var panel = _step7.value;

                          if (panel.options.fixed) {
                              panelsSize -= this.getDimension(panel);
                          }
                      }
                  } catch (err) {
                      _didIteratorError7 = true;
                      _iteratorError7 = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion7 && _iterator7.return) {
                              _iterator7.return();
                          }
                      } finally {
                          if (_didIteratorError7) {
                              throw _iteratorError7;
                          }
                      }
                  }

                  var deltaFunction = this.getOrientation() === Orientation.HORIZONTAL ? function (event) {
                      return Device.getEventX(event);
                  } : function (event) {
                      return Device.getEventY(event);
                  };

                  var mouseMoveListener = this.addListener("dividerMousemove", function (event) {
                      var delta = deltaFunction(event) - deltaFunction(previousEvent);

                      var nextSize = _this3.getDimension(nextPanel) - delta;
                      var previousSize = _this3.getDimension(previousPanel) + delta;

                      if (_this3.options.autoCollapse) {
                          if (delta > 0 && nextPanel.collapsed || delta < 0 && previousPanel.collapsed) {
                              return;
                          }

                          if (delta < 0 && nextPanel.collapsed && _this3.options.autoCollapse) {
                              _this3.expandChild(index + 1);
                              return;
                          }

                          if (delta > 0 && previousPanel.collapsed) {
                              _this3.expandChild(index);
                              return;
                          }

                          if (nextSize < _this3.getMinDimension(nextPanel)) {
                              _this3.collapseChild(index + 1);
                              return;
                          }

                          if (previousSize < _this3.getMinDimension(previousPanel)) {
                              _this3.collapseChild(index);
                              return;
                          }
                      } else {
                          if (nextSize < _this3.getMinDimension(nextPanel) || previousSize < _this3.getMinDimension(previousPanel)) {
                              return;
                          }
                      }

                      _this3.setDimension(nextPanel, nextSize * 100 / parentSize + "%");
                      _this3.setDimension(previousPanel, previousSize * 100 / parentSize + "%");

                      previousEvent = event;
                  });

                  var mouseUpListener = this.addListener("dividerMouseup", function () {
                      if (_this3.clearListeners) {
                          _this3.clearListeners();
                      }
                  });

                  this.clearListeners = function () {
                      mouseMoveListener.remove();
                      mouseUpListener.remove();
                      _this3.clearListeners = null;
                  };
              }
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this4 = this;

              this.addListener("dividerMousedown", function (dividerEvent) {
                  return _this4.dividerMouseDownFunction(dividerEvent);
              });
              setTimeout(function () {
                  _this4.recalculateDimensions();
              });
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              var children = [];
              this.dividers = [];
              this.panels = [];
              var leftChildVisible = false;
              var DividerBarClass = this.getDividerBarClass();

              var _iteratorNormalCompletion8 = true;
              var _didIteratorError8 = false;
              var _iteratorError8 = undefined;

              try {
                  for (var _iterator8 = unwrapArray(this.render())[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                      var child = _step8.value;

                      if (this.panels.length) {
                          var hiddenClass = "hidden";
                          if (leftChildVisible && !child.hasClass("hidden")) {
                              hiddenClass = "";
                          }
                          var divider = UI.createElement(DividerBarClass, { className: hiddenClass, orientation: this.getOrientation() });
                          children.push(divider);
                          this.dividers.push(divider);
                      }
                      leftChildVisible |= !child.hasClass("hidden");
                      children.push(child);
                      this.panels.push(child);
                  }
              } catch (err) {
                  _didIteratorError8 = true;
                  _iteratorError8 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion8 && _iterator8.return) {
                          _iterator8.return();
                      }
                  } finally {
                      if (_didIteratorError8) {
                          throw _iteratorError8;
                      }
                  }
              }

              return children;
          }
      }]);
      return SectionDivider;
  }(UI.Element)) || _class2$4);

  var _dec$f, _class$v, _dec2$5, _class2$5, _dec3$1, _class3$9;

  var TitledSectionDividerBar = (_dec$f = registerStyle(TitledDividerStyle), _dec$f(_class$v = function (_DividerBar) {
      inherits(TitledSectionDividerBar, _DividerBar);

      function TitledSectionDividerBar() {
          classCallCheck(this, TitledSectionDividerBar);
          return possibleConstructorReturn(this, (TitledSectionDividerBar.__proto__ || Object.getPrototypeOf(TitledSectionDividerBar)).apply(this, arguments));
      }

      createClass(TitledSectionDividerBar, [{
          key: "render",
          value: function render() {
              if (this.options.orientation === Orientation.VERTICAL) {
                  return [UI.createElement(FAIcon, { icon: "ellipsis-h", className: this.styleSheet.verticalDots })];
              } else {
                  return [UI.createElement(
                      "div",
                      null,
                      UI.createElement(FAIcon, { ref: "rightButton", icon: "caret-right", className: this.styleSheet.arrowButton })
                  ), UI.createElement(
                      "div",
                      null,
                      UI.createElement(FAIcon, { icon: "bars", className: this.styleSheet.horizontalDots })
                  ), UI.createElement(
                      "div",
                      null,
                      UI.createElement(FAIcon, { ref: "leftButton", icon: "caret-left", className: this.styleSheet.arrowButton })
                  )];
              }
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this2 = this;

              get(TitledSectionDividerBar.prototype.__proto__ || Object.getPrototypeOf(TitledSectionDividerBar.prototype), "onMount", this).call(this);
              this.leftButton.addNodeListener("mousedown", function (event) {
                  event.stopPropagation();
              });
              this.leftButton.addClickListener(function () {
                  _this2.dispatch("collapsePrevious");
              });
              this.rightButton.addNodeListener("mousedown", function (event) {
                  event.stopPropagation();
              });
              this.rightButton.addClickListener(function () {
                  _this2.dispatch("collapseNext");
              });
          }
      }]);
      return TitledSectionDividerBar;
  }(DividerBar)) || _class$v);
  var BarCollapsePanel = (_dec2$5 = registerStyle(TitledDividerStyle), _dec2$5(_class2$5 = function (_UI$Element) {
      inherits(BarCollapsePanel, _UI$Element);

      function BarCollapsePanel() {
          classCallCheck(this, BarCollapsePanel);
          return possibleConstructorReturn(this, (BarCollapsePanel.__proto__ || Object.getPrototypeOf(BarCollapsePanel)).apply(this, arguments));
      }

      createClass(BarCollapsePanel, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              var panelChild = this.getGivenChildren()[0];
              attr.addClass(this.styleSheet.barCollapsePanel);
              var panelSize = panelChild.options.size;
              if (this.collapsed) {
                  attr.addClass(this.styleSheet.hiddenContent);
                  panelSize = this.options.collapsedSize;
              }
              if (panelSize) {
                  if (this.options.orientation === Orientation.VERTICAL) {
                      attr.setStyle("height", panelSize);
                  } else {
                      attr.setStyle("width", panelSize);
                  }
              }

              if (this.options.orientation === Orientation.VERTICAL) {
                  attr.setStyle("width", "100%");
              } else {
                  attr.setStyle("height", "100%");
              }
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              this.collapsed = this.getGivenChildren()[0].options.collapsed;
              var isFirst = this.parent.panels.indexOf(this) === 0;
              var isLast = this.parent.panels.indexOf(this) === this.parent.panels.length - 1;
              var firstCaret = isLast ? "left" : "right";
              var lastCaret = isFirst ? "right" : "left";
              return [this.render(), UI.createElement(
                  "div",
                  { ref: "collapsedBarTitle", style: { display: this.collapsed ? "flex" : " none" },
                      className: this.styleSheet.collapsedBarTitle },
                  UI.createElement(
                      "div",
                      null,
                      UI.createElement(FAIcon, { icon: "caret-" + firstCaret })
                  ),
                  UI.createElement(
                      "div",
                      { className: this.styleSheet.title },
                      UI.createElement(
                          "div",
                          null,
                          this.options.title
                      )
                  ),
                  UI.createElement(
                      "div",
                      null,
                      UI.createElement(FAIcon, { icon: "caret-" + lastCaret })
                  )
              )];
          }
      }, {
          key: "toggle",
          value: function toggle() {
              var _this4 = this;

              if (this.collapsed) {
                  this.collapsed = false;
                  this.removeClass(this.styleSheet.hiddenContent);
                  this.collapsedBarTitle.setStyle("display", "none");
              } else {
                  this.collapsed = true;
                  this.collapsedBarTitle.setStyle("display", "flex");
                  setTimeout(function () {
                      _this4.addClass(_this4.styleSheet.hiddenContent);
                  }, 100);
              }
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this5 = this;

              this.collapsedBarTitle.addClickListener(function () {
                  _this5.dispatch("expand");
              });
              this.addListener("resize", function () {
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                      for (var _iterator = unwrapArray(_this5.render())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                          var child = _step.value;

                          child.dispatch("resize");
                      }
                  } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                          }
                      } finally {
                          if (_didIteratorError) {
                              throw _iteratorError;
                          }
                      }
                  }
              });
          }
      }]);
      return BarCollapsePanel;
  }(UI.Element)) || _class2$5);

  var TitledSectionDivider = (_dec3$1 = registerStyle(TitledDividerStyle), _dec3$1(_class3$9 = function (_SectionDivider) {
      inherits(TitledSectionDivider, _SectionDivider);

      function TitledSectionDivider() {
          classCallCheck(this, TitledSectionDivider);
          return possibleConstructorReturn(this, (TitledSectionDivider.__proto__ || Object.getPrototypeOf(TitledSectionDivider)).apply(this, arguments));
      }

      createClass(TitledSectionDivider, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return Object.assign({}, get(TitledSectionDivider.prototype.__proto__ || Object.getPrototypeOf(TitledSectionDivider.prototype), "getDefaultOptions", this).call(this), {
                  collapsedSize: 40,
                  autoCollapse: true
              });
          }
      }, {
          key: "getDividerBarClass",
          value: function getDividerBarClass() {
              return TitledSectionDividerBar;
          }
      }, {
          key: "setDimension",
          value: function setDimension(element, size) {
              if (this.getOrientation() === Orientation.HORIZONTAL) {
                  element.setWidth(size);
              } else {
                  element.setHeight(size);
              }
          }
      }, {
          key: "collapseChild",
          value: function collapseChild(index) {
              var _this7 = this;

              if (this.clearListeners) {
                  this.clearListeners();
              }

              this.addClass(this.styleSheet.paddingRemoved);
              this.addClass(this.styleSheet.animatedSectionDivider);

              var parentSize = this.getDimension(this);
              var child = this.panels[index];

              var childSize = this.getDimension(child);
              this.uncollapsedSizes.set(child, childSize);

              var unCollapsedCount = -1;
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = this.panels[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var panel = _step2.value;

                      if (!panel.collapsed && !panel.options.fixed) {
                          unCollapsedCount += 1;
                      }
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }

              this.setDimension(child, this.options.collapsedSize);
              child.toggle();

              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                  for (var _iterator3 = this.panels[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var _panel = _step3.value;

                      if (!_panel.collapsed && !_panel.options.fixed) {
                          this.setDimension(_panel, (this.getDimension(_panel) + (childSize - this.options.collapsedSize) / unCollapsedCount) * 100 / parentSize + "%");
                      }
                  }
              } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                      }
                  } finally {
                      if (_didIteratorError3) {
                          throw _iteratorError3;
                      }
                  }
              }

              setTimeout(function () {
                  _this7.removeClass(_this7.styleSheet.animatedSectionDivider);
                  _this7.recalculateDimensions();
              }, this.styleSheet.transitionTime * 1000);
          }
      }, {
          key: "expandChild",
          value: function expandChild(index) {
              var _this8 = this;

              this.removeClass(this.styleSheet.paddingRemoved);
              this.addClass(this.styleSheet.animatedSectionDivider);

              var parentSize = this.getDimension(this);
              var child = this.panels[index];

              var unCollapsedCount = 1;
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                  for (var _iterator4 = this.panels[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var panel = _step4.value;

                      if (!panel.collapsed && !panel.options.fixed) {
                          unCollapsedCount += 1;
                      }
                  }
              } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                      }
                  } finally {
                      if (_didIteratorError4) {
                          throw _iteratorError4;
                      }
                  }
              }

              var childSize = this.uncollapsedSizes.get(child);
              child.toggle();

              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                  for (var _iterator5 = this.panels[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                      var _panel2 = _step5.value;

                      if (this.getDimension(_panel2) && !_panel2.options.fixed) {
                          this.setDimension(_panel2, (this.getDimension(_panel2) - (childSize - this.options.collapsedSize) / (unCollapsedCount - 1)) * 100 / parentSize + "%");
                      }
                  }
              } catch (err) {
                  _didIteratorError5 = true;
                  _iteratorError5 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion5 && _iterator5.return) {
                          _iterator5.return();
                      }
                  } finally {
                      if (_didIteratorError5) {
                          throw _iteratorError5;
                      }
                  }
              }

              this.setDimension(child, childSize * 100 / parentSize + "%");

              setTimeout(function () {
                  _this8.removeClass(_this8.styleSheet.animatedSectionDivider);
                  _this8.recalculateDimensions();
              }, this.styleSheet.transitionTime * 1000);
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              var children = [];
              this.dividers = [];
              this.panels = [];
              var DividerBarClass = this.getDividerBarClass();

              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = undefined;

              try {
                  for (var _iterator6 = unwrapArray(this.render())[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                      var child = _step6.value;

                      if (child.options.collapsed) {
                          this.addClass(this.styleSheet.paddingRemoved);
                      }
                      if (this.panels.length) {
                          var divider = UI.createElement(DividerBarClass, { orientation: this.getOrientation() });
                          children.push(divider);
                          this.dividers.push(divider);
                      }
                      var wrappedChild = UI.createElement(
                          BarCollapsePanel,
                          { orientation: this.options.orientation, collapsedSize: this.options.collapsedSize,
                              title: child.options.title || "..." },
                          child
                      );
                      children.push(wrappedChild);
                      this.panels.push(wrappedChild);
                  }
              } catch (err) {
                  _didIteratorError6 = true;
                  _iteratorError6 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion6 && _iterator6.return) {
                          _iterator6.return();
                      }
                  } finally {
                      if (_didIteratorError6) {
                          throw _iteratorError6;
                      }
                  }
              }

              return children;
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this9 = this;

              get(TitledSectionDivider.prototype.__proto__ || Object.getPrototypeOf(TitledSectionDivider.prototype), "onMount", this).call(this);

              var _loop = function _loop(i) {
                  var panel = _this9.panels[i];
                  _this9.attachListener(panel, "expand", function () {
                      _this9.uncollapsedSizes.set(panel, _this9.getDimension(_this9) / _this9.panels.length);
                      _this9.expandChild(i);
                  });
              };

              for (var i = 0; i < this.panels.length; i += 1) {
                  _loop(i);
              }

              var _loop2 = function _loop2(i) {
                  _this9.attachListener(_this9.dividers[i], "collapseNext", function () {
                      return _this9.collapseChild(i + 1);
                  });
                  _this9.attachListener(_this9.dividers[i], "collapsePrevious", function () {
                      return _this9.collapseChild(i);
                  });
              };

              for (var i = 0; i < this.dividers.length; i += 1) {
                  _loop2(i);
              }
          }
      }]);
      return TitledSectionDivider;
  }(SectionDivider)) || _class3$9);

  var _dec$g, _class$w, _dec2$6, _class2$6;

  var AccordionDivider = (_dec$g = registerStyle(AccordionStyle), _dec$g(_class$w = function (_Divider) {
      inherits(AccordionDivider, _Divider);

      function AccordionDivider() {
          classCallCheck(this, AccordionDivider);
          return possibleConstructorReturn(this, (AccordionDivider.__proto__ || Object.getPrototypeOf(AccordionDivider)).apply(this, arguments));
      }

      createClass(AccordionDivider, [{
          key: "dragMousedown",
          value: function dragMousedown(event) {
              document.body.classList.add(this.styleSheet.noTextSelection);
              this.addClass(this.styleSheet.grabbing);
          }
      }, {
          key: "dragMouseup",
          value: function dragMouseup(event) {
              document.body.classList.remove(this.styleSheet.noTextSelection);
              this.removeClass(this.styleSheet.grabbing);
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              get(AccordionDivider.prototype.__proto__ || Object.getPrototypeOf(AccordionDivider.prototype), "extraNodeAttributes", this).call(this, attr);
              attr.addClass(this.styleSheet.grab);
          }
      }, {
          key: "render",
          value: function render() {
              return [UI.createElement(FACollapseIcon, { ref: "collapseIcon", collapsed: false, className: this.styleSheet.collapseIcon }), this.options.children];
          }
      }, {
          key: "setCollapsed",
          value: function setCollapsed(value) {
              this.collapseIcon.setCollapsed(value);
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this2 = this;

              get(AccordionDivider.prototype.__proto__ || Object.getPrototypeOf(AccordionDivider.prototype), "onMount", this).call(this);
              this.addListener("togglePanel", function () {
                  _this2.collapseIcon.toggleCollapsed();
              });
          }
      }]);
      return AccordionDivider;
  }(Divider)) || _class$w);
  var Accordion = (_dec2$6 = registerStyle(AccordionStyle), _dec2$6(_class2$6 = function (_UI$Element) {
      inherits(Accordion, _UI$Element);

      function Accordion() {
          classCallCheck(this, Accordion);
          return possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
      }

      createClass(Accordion, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.accordion);
          }
      }, {
          key: "getChildrenToRender",
          value: function getChildrenToRender() {
              var children = [];
              this.dividers = [];
              this.panels = [];
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = unwrapArray(this.render())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var child = _step.value;

                      var title = child.getTitle ? child.getTitle() : child.options.title ? child.options.title : "";
                      var divider = UI.createElement(
                          AccordionDivider,
                          null,
                          title
                      );
                      this.dividers.push(divider);
                      this.panels.push(child);
                      children.push(divider);
                      children.push(child);
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              return children;
          }
      }, {
          key: "getNextVisibleChild",
          value: function getNextVisibleChild(index) {
              for (var i = index; i < this.panels.length; i += 1) {
                  if (!this.panels[i].hasClass("hidden")) {
                      return this.panels[i];
                  }
              }
              return null;
          }
      }, {
          key: "getPreviousVisibleChild",
          value: function getPreviousVisibleChild(index) {
              for (var i = index - 1; i >= 0; i -= 1) {
                  if (!this.panels[i].hasClass("hidden")) {
                      return this.panels[i];
                  }
              }
              return null;
          }
      }, {
          key: "dividerMousedownFunction",
          value: function dividerMousedownFunction(dividerEvent) {
              var _this4 = this;

              var dragTriggered = void 0,
                  panelsHeight = void 0,
                  totalFlex = void 0;

              var previousEvent = dividerEvent.domEvent;
              var index = this.dividers.indexOf(dividerEvent.divider);

              var previousPanel = this.getPreviousVisibleChild(index);
              var nextPanel = this.getNextVisibleChild(index);

              panelsHeight = this.getHeight();
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = this.dividers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var divider = _step2.value;

                      panelsHeight -= divider.getHeight();
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }

              totalFlex = 0;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                  for (var _iterator3 = this.panels[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var panel = _step3.value;

                      if (!panel.hasClass("hidden")) {
                          totalFlex += parseFloat(getComputedStyle(panel.node, "flex"));
                      }
                  }
              } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                      }
                  } finally {
                      if (_didIteratorError3) {
                          throw _iteratorError3;
                      }
                  }
              }

              var mouseMoveListener = this.addListener("dividerMousemove", function (event) {
                  dragTriggered = true;
                  if (index != -1 && nextPanel && previousPanel) {
                      // Calculate the height to transfer from one panel to another
                      var delta = (Device.getEventY(event) - Device.getEventY(previousEvent)) * totalFlex / panelsHeight;

                      var nextSize = parseFloat(getComputedStyle(nextPanel.node, "flex"));
                      var previousSize = parseFloat(getComputedStyle(previousPanel.node, "flex"));

                      // Cap the delta value, to at most zero our panels
                      delta = Math.sign(delta) * Math.min(Math.abs(delta), delta > 0 ? nextSize : previousSize);

                      nextPanel.setStyle("flex", nextSize - delta);
                      previousPanel.setStyle("flex", previousSize + delta);

                      previousEvent = event;

                      _this4.dispatch("dragging");
                  }
              });

              var mouseUpListener = this.addListener("dividerMouseup", function () {
                  if (!dragTriggered) {
                      dividerEvent.divider.dispatch("togglePanel");
                      _this4.toggleChild(_this4.panels[index]);
                  }
                  mouseMoveListener.remove();
                  mouseUpListener.remove();
                  _this4.dispatch("childrenStatusChange");
              });
          }
      }, {
          key: "toggleChild",
          value: function toggleChild(child) {
              var totalFlex = 0;
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                  for (var _iterator4 = this.panels[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var _panel = _step4.value;

                      if (!_panel.hasClass("hidden")) {
                          totalFlex += parseFloat(getComputedStyle(_panel.node, "flex"));
                      }
                  }
              } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                      }
                  } finally {
                      if (_didIteratorError4) {
                          throw _iteratorError4;
                      }
                  }
              }

              var sign = child.hasClass("hidden") ? 1 : -1;
              totalFlex += sign * parseFloat(getComputedStyle(child, "flex"));
              child.toggleClass("hidden");
              if (totalFlex < 1) {
                  var _iteratorNormalCompletion5 = true;
                  var _didIteratorError5 = false;
                  var _iteratorError5 = undefined;

                  try {
                      for (var _iterator5 = this.panels[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                          var panel = _step5.value;

                          if (!panel.hasClass("hidden") && parseFloat(getComputedStyle(panel.node, "flex")) < 1) {
                              panel.setStyle("flex", 1);
                          }
                      }
                  } catch (err) {
                      _didIteratorError5 = true;
                      _iteratorError5 = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion5 && _iterator5.return) {
                              _iterator5.return();
                          }
                      } finally {
                          if (_didIteratorError5) {
                              throw _iteratorError5;
                          }
                      }
                  }
              }
          }
      }, {
          key: "getChildrenStatus",
          value: function getChildrenStatus() {
              var childrenStatus = [];
              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = undefined;

              try {
                  for (var _iterator6 = this.panels[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                      var panel = _step6.value;

                      childrenStatus.push({
                          flex: getComputedStyle(panel.node, "flex"),
                          collapsed: panel.hasClass("hidden")
                      });
                  }
              } catch (err) {
                  _didIteratorError6 = true;
                  _iteratorError6 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion6 && _iterator6.return) {
                          _iterator6.return();
                      }
                  } finally {
                      if (_didIteratorError6) {
                          throw _iteratorError6;
                      }
                  }
              }

              return childrenStatus;
          }
      }, {
          key: "getDefaultChildrenStatus",
          value: function getDefaultChildrenStatus() {
              var childrenStatus = [];
              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;

              try {
                  for (var _iterator7 = this.panels[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                      var panel = _step7.value;

                      childrenStatus.push({
                          flex: 1,
                          collapsed: false
                      });
                  }
              } catch (err) {
                  _didIteratorError7 = true;
                  _iteratorError7 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion7 && _iterator7.return) {
                          _iterator7.return();
                      }
                  } finally {
                      if (_didIteratorError7) {
                          throw _iteratorError7;
                      }
                  }
              }

              return childrenStatus;
          }
      }, {
          key: "setChildrenStatus",
          value: function setChildrenStatus(childrenStatus) {
              for (var i = 0; i < childrenStatus.length; i += 1) {
                  this.panels[i].setStyle("flex", childrenStatus[i].flex);
                  var collapsed = childrenStatus[i].collapsed;
                  if (collapsed) {
                      this.panels[i].addClass("hidden");
                  } else {
                      this.panels[i].removeClass("hidden");
                  }
                  this.dividers[i].setCollapsed(collapsed);
              }
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this5 = this;

              this.addListener("dividerMousedown", function (dividerEvent) {
                  return _this5.dividerMousedownFunction(dividerEvent);
              });
          }
      }]);
      return Accordion;
  }(UI.Element)) || _class2$6);

  var _class$x, _descriptor$c, _descriptor2$b, _descriptor3$b, _descriptor4$a, _dec$h, _class3$a;

  function _initDefineProp$d(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$d(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var CarouselStyle = (_class$x = function (_StyleSheet) {
      inherits(CarouselStyle, _StyleSheet);

      function CarouselStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, CarouselStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = CarouselStyle.__proto__ || Object.getPrototypeOf(CarouselStyle)).call.apply(_ref, [this].concat(args))), _this), _this.navigatorHeight = "35px", _this.hoverColor = "#364251", _this.transitionTime = "0.3", _this.textColor = "inherit", _this.navigatorTransitionTime = "0s", _initDefineProp$d(_this, "carousel", _descriptor$c, _this), _initDefineProp$d(_this, "container", _descriptor2$b, _this), _initDefineProp$d(_this, "navigator", _descriptor3$b, _this), _initDefineProp$d(_this, "navigatorIcon", _descriptor4$a, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return CarouselStyle;
  }(StyleSheet), (_descriptor$c = _applyDecoratedDescriptor$d(_class$x.prototype, "carousel", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              overflow: "hidden"
          };
      }
  }), _descriptor2$b = _applyDecoratedDescriptor$d(_class$x.prototype, "container", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              whiteSpace: "nowrap",
              height: "100%",
              ">*": {
                  width: "100%",
                  height: "100%",
                  display: "inline-block",
                  verticalAlign: "top"
              },
              ">:first-child": {
                  width: "0",
                  transition: "margin-left ease " + this.transitionTime + "s"
              }
          };
      }
  }), _descriptor3$b = _applyDecoratedDescriptor$d(_class$x.prototype, "navigator", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              width: "100%",
              height: this.navigatorHeight,
              display: "flex"
          };
      }
  }), _descriptor4$a = _applyDecoratedDescriptor$d(_class$x.prototype, "navigatorIcon", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              color: this.textColor,
              fontSize: "180% !important",
              textAlign: "center",
              cursor: "pointer",
              flex: "1",
              fontWeight: "900 !important",
              lineHeight: this.navigatorHeight + " !important",
              transition: "background-color " + this.navigatorTransitionTime,
              ":hover": {
                  backgroundColor: this.hoverColor
              }
          };
      }
  })), _class$x);

  var CarouselNavigator = function (_UI$Element) {
      inherits(CarouselNavigator, _UI$Element);

      function CarouselNavigator() {
          classCallCheck(this, CarouselNavigator);
          return possibleConstructorReturn(this, (CarouselNavigator.__proto__ || Object.getPrototypeOf(CarouselNavigator)).apply(this, arguments));
      }

      createClass(CarouselNavigator, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.navigator);
          }
      }, {
          key: "render",
          value: function render() {
              var _this3 = this;

              return [UI.createElement(FAIcon, { icon: "angle-left", className: this.styleSheet.navigatorIcon, onClick: function onClick() {
                      _this3.parent.dispatch("previousPage");
                  } }), UI.createElement(FAIcon, { icon: "angle-right", className: this.styleSheet.navigatorIcon, onClick: function onClick() {
                      _this3.parent.dispatch("nextPage");
                  } })];
          }
      }, {
          key: "styleSheet",
          get: function get$$1() {
              return this.options.styleSheet || this.parent.styleSheet;
          }
      }]);
      return CarouselNavigator;
  }(UI.Element);

  var Carousel = (_dec$h = registerStyle(CarouselStyle), _dec$h(_class3$a = function (_UI$Element2) {
      inherits(Carousel, _UI$Element2);

      function Carousel() {
          classCallCheck(this, Carousel);
          return possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
      }

      createClass(Carousel, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.carousel);
          }
      }, {
          key: "appendChild",
          value: function appendChild(child, doMount) {
              this.options.children.push(child);
              if (doMount) {
                  this.setActive(child);
              }
              child.mount(this, null);
              this.redraw();
          }
      }, {
          key: "eraseChild",
          value: function eraseChild(child) {
              if (this.options.children.indexOf(child) === this.options.children.length - 1) {
                  this.setActiveIndex(Math.max(this.options.children.length - 2, 0));
              }
              this.options.children.splice(this.options.children.indexOf(child), 1);
              this.redraw();
          }
      }, {
          key: "render",
          value: function render() {
              if (this.activeIndex == null) {
                  this.activeIndex = 0;
                  for (var i = 0; i < this.options.children.length; i += 1) {
                      if (this.options.children[i].options.active) {
                          this.activeIndex = i;
                          break;
                      }
                  }
              }

              return [UI.createElement(CarouselNavigator, { className: this.options.children.length > 1 ? "" : "hidden" }), UI.createElement(
                  "div",
                  { className: this.styleSheet.container },
                  UI.createElement("div", { ref: "pusher", style: { marginLeft: -this.activeIndex * 100 + "%" } }),
                  this.options.children
              )];
          }
      }, {
          key: "setActive",
          value: function setActive(panel) {
              this.setActiveIndex(this.options.children.indexOf(panel));
          }
      }, {
          key: "setActiveIndex",
          value: function setActiveIndex(index) {
              this.activeIndex = index;
              this.pusher.setStyle("margin-left", -index * this.getWidth() + "px");
          }
      }, {
          key: "getActive",
          value: function getActive() {
              return this.options.children[this.activeIndex];
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this5 = this;

              this.addListener("nextPage", function () {
                  return _this5.setActiveIndex((_this5.activeIndex + 1) % _this5.options.children.length);
              });
              this.addListener("previousPage", function () {
                  return _this5.setActiveIndex((_this5.activeIndex + _this5.options.children.length - 1) % _this5.options.children.length);
              });
          }
      }, {
          key: "getOrientation",
          value: function getOrientation() {
              return this.options.orientation || Orientation.VERTICAL;
          }
      }]);
      return Carousel;
  }(UI.Element)) || _class3$a);

  var _class$y, _descriptor$d, _descriptor2$c, _descriptor3$c, _descriptor4$b, _descriptor5$a, _descriptor6$8, _descriptor7$6;

  function _initDefineProp$e(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$e(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var RangePanelStyle = (_class$y = function (_StyleSheet) {
      inherits(RangePanelStyle, _StyleSheet);

      function RangePanelStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, RangePanelStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RangePanelStyle.__proto__ || Object.getPrototypeOf(RangePanelStyle)).call.apply(_ref, [this].concat(args))), _this), _this.rowHeight = 52, _initDefineProp$e(_this, "default", _descriptor$d, _this), _initDefineProp$e(_this, "tableContainer", _descriptor2$c, _this), _initDefineProp$e(_this, "scrollablePanel", _descriptor3$c, _this), _initDefineProp$e(_this, "fakePanel", _descriptor4$b, _this), _initDefineProp$e(_this, "footer", _descriptor5$a, _this), _initDefineProp$e(_this, "jumpToButton", _descriptor6$8, _this), _initDefineProp$e(_this, "table", _descriptor7$6, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return RangePanelStyle;
  }(StyleSheet), (_descriptor$d = _applyDecoratedDescriptor$e(_class$y.prototype, "default", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "auto",
              overflowY: "hidden"
          };
      }
  }), _descriptor2$c = _applyDecoratedDescriptor$e(_class$y.prototype, "tableContainer", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              flex: "1",
              height: "100%",
              width: "100%",
              position: "relative"
          };
      }
  }), _descriptor3$c = _applyDecoratedDescriptor$e(_class$y.prototype, "scrollablePanel", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              overflow: "auto",
              height: "calc(100% - 30px)",
              width: "100%"
          };
      }
  }), _descriptor4$b = _applyDecoratedDescriptor$e(_class$y.prototype, "fakePanel", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              width: "100%"
          };
      }
  }), _descriptor5$a = _applyDecoratedDescriptor$e(_class$y.prototype, "footer", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              fontWeight: "bold",
              textAlign: "center",
              position: "absolute",
              bottom: "0px",
              width: "100%",
              whiteSpace: "nowrap",
              paddingBottom: "15px",
              paddingTop: "3px"
          };
      }
  }), _descriptor6$8 = _applyDecoratedDescriptor$e(_class$y.prototype, "jumpToButton", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              marginLeft: "5px",
              padding: "2.3px 10px",
              verticalAlign: "bottom"
          };
      }
  }), _descriptor7$6 = _applyDecoratedDescriptor$e(_class$y.prototype, "table", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              width: "calc(100% - 15px)",
              marginBottom: "0px",
              top: "0px",
              position: "absolute",
              pointerEvents: "none",
              ">tbody>tr>td": {
                  height: this.rowHeight + "px !important",
                  whiteSpace: "nowrap !important"
              }
          };
      }
  })), _class$y);

  var EntriesManager = function (_Dispatchable) {
      inherits(EntriesManager, _Dispatchable);

      function EntriesManager(entries) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          classCallCheck(this, EntriesManager);

          var _this2 = possibleConstructorReturn(this, (EntriesManager.__proto__ || Object.getPrototypeOf(EntriesManager)).call(this));

          _this2.rawEntries = entries;
          _this2.options = options;
          _this2.cacheEntries();
          return _this2;
      }

      createClass(EntriesManager, [{
          key: "getRawEntries",
          value: function getRawEntries() {
              return this.rawEntries;
          }
      }, {
          key: "cacheEntries",
          value: function cacheEntries() {
              this.cachedEntries = this.sortEntries(this.filterEntries(this.getRawEntries()));
              this.dispatch("update");
          }
      }, {
          key: "getEntries",
          value: function getEntries() {
              return this.cachedEntries;
          }
      }, {
          key: "getEntriesCount",
          value: function getEntriesCount() {
              return this.cachedEntries.length;
          }
      }, {
          key: "getEntriesRange",
          value: function getEntriesRange(low, high) {
              return this.cachedEntries.slice(low, high);
          }
      }, {
          key: "updateEntries",
          value: function updateEntries(entries) {
              this.rawEntries = entries;
              this.cacheEntries();
          }
      }, {
          key: "sortEntries",
          value: function sortEntries(entries) {
              return this.getComparator() ? entries.sort(this.getComparator()) : entries;
          }
      }, {
          key: "filterEntries",
          value: function filterEntries(entries) {
              var filter = this.getFilter();
              return filter ? entries.filter(filter) : entries;
          }
      }, {
          key: "getComparator",
          value: function getComparator() {
              return this.options.comparator;
          }
      }, {
          key: "setComparator",
          value: function setComparator(comparator) {
              this.options.comparator = comparator;
              this.cacheEntries();
          }
      }, {
          key: "getFilter",
          value: function getFilter() {
              return this.options.filter;
          }
      }, {
          key: "setFilter",
          value: function setFilter(filter) {
              this.options.filter = filter;
              this.cacheEntries();
          }
      }]);
      return EntriesManager;
  }(Dispatchable);

  var _class$z, _descriptor$e, _descriptor2$d, _class3$b, _descriptor3$d, _descriptor4$c;

  function _initDefineProp$f(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$f(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var TableStyle = (_class$z = function (_StyleSheet) {
      inherits(TableStyle, _StyleSheet);

      function TableStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, TableStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TableStyle.__proto__ || Object.getPrototypeOf(TableStyle)).call.apply(_ref, [this].concat(args))), _this), _this.cellStyle = {
              padding: "8px",
              lineHeight: "1.42857143",
              verticalAlign: "top",
              borderTop: "1px solid #ddd"
          }, _this.theadCellStyle = {
              borderBottom: "2px solid #ddd",
              borderTop: "0"
          }, _initDefineProp$f(_this, "table", _descriptor$e, _this), _initDefineProp$f(_this, "tableStripped", _descriptor2$d, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return TableStyle;
  }(StyleSheet), (_descriptor$e = _applyDecoratedDescriptor$f(_class$z.prototype, "table", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              width: "100%",
              maxWidth: "100%",
              marginBottom: "20px",
              borderSpacing: "0",
              borderCollapse: "collapse",
              ">*>*>td": this.cellStyle,
              ">*>*>th": this.cellStyle,
              ">*>thead>*>*": this.theadCellStyle
          };
      }
  }), _descriptor2$d = _applyDecoratedDescriptor$f(_class$z.prototype, "tableStripped", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              ">tbody>tr:nth-of-type(odd)": {
                  backgroundColor: "#f5f5f5"
              }
          };
      }
  })), _class$z);
  var SortableTableStyle = (_class3$b = function (_TableStyle) {
      inherits(SortableTableStyle, _TableStyle);

      function SortableTableStyle() {
          var _ref2;

          var _temp2, _this2, _ret2;

          classCallCheck(this, SortableTableStyle);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = SortableTableStyle.__proto__ || Object.getPrototypeOf(SortableTableStyle)).call.apply(_ref2, [this].concat(args))), _this2), _initDefineProp$f(_this2, "sortIcon", _descriptor3$d, _this2), _initDefineProp$f(_this2, "table", _descriptor4$c, _this2), _temp2), possibleConstructorReturn(_this2, _ret2);
      }

      return SortableTableStyle;
  }(TableStyle), (_descriptor3$d = _applyDecoratedDescriptor$f(_class3$b.prototype, "sortIcon", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              position: "absolute",
              right: "0px",
              bottom: "0px",
              visibility: "hidden",
              float: "right"
          };
      }
  }), _descriptor4$c = _applyDecoratedDescriptor$f(_class3$b.prototype, "table", [styleRuleInherit], {
      enumerable: true,
      initializer: function initializer() {
          var _ref3;

          return _ref3 = {}, defineProperty(_ref3, " th:hover ." + this.sortIcon.getClassName(), {
              visibility: "inherit"
          }), defineProperty(_ref3, " th:hover", {
              cursor: "pointer"
          }), _ref3;
      }
  })), _class3$b);

  var _dec$i, _class$A;

  // TODO: the whole table architecture probably needs a rethinking

  var TableRow = function (_UI$Primitive) {
      inherits(TableRow, _UI$Primitive);

      function TableRow() {
          classCallCheck(this, TableRow);
          return possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).apply(this, arguments));
      }

      createClass(TableRow, [{
          key: "render",
          value: function render() {
              var rowCells = [];

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = this.options.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var column = _step.value;

                      rowCells.push(this.renderEntryCell(column));
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              return rowCells;
          }
      }, {
          key: "renderEntryCell",
          value: function renderEntryCell(column) {
              return UI.createElement(
                  "td",
                  { style: column.cellStyle, key: column.id },
                  column.value(this.options.entry, this.options.index)
              );
          }
      }]);
      return TableRow;
  }(UI.Primitive("tr"));

  var Table = (_dec$i = registerStyle(TableStyle), _dec$i(_class$A = function (_UI$Primitive2) {
      inherits(Table, _UI$Primitive2);

      function Table() {
          classCallCheck(this, Table);
          return possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
      }

      createClass(Table, [{
          key: "setOptions",
          value: function setOptions(options) {
              get(Table.prototype.__proto__ || Object.getPrototypeOf(Table.prototype), "setOptions", this).call(this, options);

              this.setColumns(options.columns || []);
              this.entries = options.entries || [];
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.table);
          }
      }, {
          key: "getRowClass",
          value: function getRowClass() {
              return TableRow;
          }
      }, {
          key: "getRowOptions",
          value: function getRowOptions(entry) {
              return {
                  entry: entry,
                  columns: this.columns
              };
          }
      }, {
          key: "render",
          value: function render() {
              return [UI.createElement(
                  "thead",
                  null,
                  this.renderTableHead()
              ), UI.createElement(
                  "tbody",
                  null,
                  this.renderTableBody()
              )];
          }
      }, {
          key: "renderTableHead",
          value: function renderTableHead() {
              return UI.createElement(
                  "tr",
                  null,
                  this.columns.map(this.renderHeaderCell, this)
              );
          }
      }, {
          key: "getEntryKey",
          value: function getEntryKey(entry, index) {
              return entry.id != null ? entry.id : index;
          }
      }, {
          key: "renderTableBody",
          value: function renderTableBody() {
              this.rows = [];

              var entries = this.getEntries();
              for (var i = 0; i < entries.length; i += 1) {
                  var entry = entries[i];
                  var RowClass = this.getRowClass(entry);
                  this.rows.push(UI.createElement(RowClass, _extends({ key: this.getEntryKey(entry, i), index: i }, this.getRowOptions(entry), { parent: this })));
              }
              return this.rows;
          }

          // Renders the whole header cell based on a column

      }, {
          key: "renderHeaderCell",
          value: function renderHeaderCell(column) {
              return UI.createElement(
                  "th",
                  { style: column.headerStyle, ref: "columnHeader" + column.id },
                  this.renderColumnHeader(column)
              );
          }

          // Only renders the content of the header cell

      }, {
          key: "renderColumnHeader",
          value: function renderColumnHeader(column) {
              if (typeof column.headerName === "function") {
                  return column.headerName();
              }
              return column.headerName;
          }

          // Original entries should not be modified. Overwrite this function to appy any modification in a new array.

      }, {
          key: "getEntries",
          value: function getEntries() {
              return this.entries || [];
          }
      }, {
          key: "columnDefaults",
          value: function columnDefaults(column, index) {
              column.id = index;
          }
      }, {
          key: "setColumns",
          value: function setColumns(columns) {
              this.columns = columns;
              for (var i = 0; i < this.columns.length; i += 1) {
                  this.columnDefaults(this.columns[i], i);
              }
          }
      }]);
      return Table;
  }(UI.Primitive("table"))) || _class$A);

  var _class$B, _descriptor$f, _descriptor2$e, _descriptor3$e;

  function _initDefineProp$g(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$g(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var TableRowInCollapsibleTable = function (_TableRow) {
      inherits(TableRowInCollapsibleTable, _TableRow);

      function TableRowInCollapsibleTable() {
          classCallCheck(this, TableRowInCollapsibleTable);
          return possibleConstructorReturn(this, (TableRowInCollapsibleTable.__proto__ || Object.getPrototypeOf(TableRowInCollapsibleTable)).apply(this, arguments));
      }

      createClass(TableRowInCollapsibleTable, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "tbody";
          }
      }, {
          key: "render",
          value: function render() {
              return UI.createElement(
                  "tr",
                  null,
                  get(TableRowInCollapsibleTable.prototype.__proto__ || Object.getPrototypeOf(TableRowInCollapsibleTable.prototype), "render", this).call(this)
              );
          }
      }]);
      return TableRowInCollapsibleTable;
  }(TableRow);

  var CollapsibleTableStyle = (_class$B = function (_StyleSheet) {
      inherits(CollapsibleTableStyle, _StyleSheet);

      function CollapsibleTableStyle() {
          var _ref;

          var _temp, _this2, _ret;

          classCallCheck(this, CollapsibleTableStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this2 = possibleConstructorReturn(this, (_ref = CollapsibleTableStyle.__proto__ || Object.getPrototypeOf(CollapsibleTableStyle)).call.apply(_ref, [this].concat(args))), _this2), _initDefineProp$g(_this2, "button", _descriptor$f, _this2), _initDefineProp$g(_this2, "collapsedButton", _descriptor2$e, _this2), _initDefineProp$g(_this2, "heading", _descriptor3$e, _this2), _temp), possibleConstructorReturn(_this2, _ret);
      }

      return CollapsibleTableStyle;
  }(StyleSheet), (_descriptor$f = _applyDecoratedDescriptor$g(_class$B.prototype, "button", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              marginTop: "0",
              marginBottom: "0",
              fontSize: "16px",
              color: "inherit",
              cursor: "pointer",
              ":hover": {
                  color: "inherit"
              },
              ":after": {
                  fontFamily: "'FontAwesome'",
                  content: "\"\\f107\"",
                  color: "grey",
                  float: "left",
                  fontWeight: "bold",
                  width: "0.7em",
                  fontSize: "130%",
                  verticalAlign: "top",
                  height: "0.7em",
                  marginTop: "-0.2em",
                  textAlign: "center"
              }
          };
      }
  }), _descriptor2$e = _applyDecoratedDescriptor$g(_class$B.prototype, "collapsedButton", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              ":after": {
                  content: "\"\\f105\" !important"
              }
          };
      }
  }), _descriptor3$e = _applyDecoratedDescriptor$g(_class$B.prototype, "heading", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              padding: "10px 15px",
              backgroundColor: "initial !important"
          };
      }
  })), _class$B);


  var collapsibleTableStyle = new CollapsibleTableStyle();

  // TODO: refactor this to support redraw and render override

  var CollapsibleTableRow = function (_CollapsibleMixin) {
      inherits(CollapsibleTableRow, _CollapsibleMixin);

      function CollapsibleTableRow() {
          classCallCheck(this, CollapsibleTableRow);
          return possibleConstructorReturn(this, (CollapsibleTableRow.__proto__ || Object.getPrototypeOf(CollapsibleTableRow)).apply(this, arguments));
      }

      createClass(CollapsibleTableRow, [{
          key: "getNodeType",
          value: function getNodeType() {
              return "tbody";
          }
      }, {
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return {
                  collapsed: true
              };
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this4 = this;

              this.toggleButton.addClickListener(function () {
                  return _this4.toggle();
              });
          }
      }, {
          key: "toggle",
          value: function toggle() {
              if (!this.options.collapsed) {
                  this.collapse();
              } else {
                  this.expand();
              }
          }
      }, {
          key: "expand",
          value: function expand() {
              get(CollapsibleTableRow.prototype.__proto__ || Object.getPrototypeOf(CollapsibleTableRow.prototype), "expand", this).call(this, this.contentArea);
              this.toggleButton.removeClass(collapsibleTableStyle.collapsedButton);
          }
      }, {
          key: "collapse",
          value: function collapse() {
              var _this5 = this;

              get(CollapsibleTableRow.prototype.__proto__ || Object.getPrototypeOf(CollapsibleTableRow.prototype), "collapse", this).call(this, this.contentArea);
              setTimeout(function () {
                  _this5.toggleButton.addClass(collapsibleTableStyle.collapsedButton);
              }, this.getCollapsibleStyleSheet().transitionDuration * 500);
          }

          // TODO: Very bad redraw practice here

      }, {
          key: "redraw",
          value: function redraw() {
              if (!get(CollapsibleTableRow.prototype.__proto__ || Object.getPrototypeOf(CollapsibleTableRow.prototype), "redraw", this).call(this)) {
                  return false;
              }

              if (this.options.collapsed) {
                  this.toggleButton.addClass(collapsibleTableStyle.collapsedButton);
                  this.contentArea.addClass(this.getCollapsibleStyleSheet().collapsed);
                  this.contentArea.addClass("hidden");
              } else {
                  this.toggleButton.removeClass(collapsibleTableStyle.collapsedButton);
                  this.contentArea.removeClass(this.getCollapsibleStyleSheet().collapsed);
                  this.contentArea.removeClass("hidden");
              }
              return true;
          }
      }, {
          key: "getInitialCollapsedContent",
          value: function getInitialCollapsedContent() {
              return this.renderCollapsible(this.options.entry);
          }
      }, {
          key: "render",
          value: function render() {
              return [UI.createElement(
                  "tr",
                  { className: collapsibleTableStyle.heading },
                  get(CollapsibleTableRow.prototype.__proto__ || Object.getPrototypeOf(CollapsibleTableRow.prototype), "render", this).call(this)
              ), UI.createElement(
                  "tr",
                  null,
                  UI.createElement(
                      "td",
                      { style: { overflow: "hidden", padding: "0px" },
                          colspan: this.options.columns.length },
                      UI.createElement(
                          "div",
                          { ref: "contentArea",
                              className: this.getCollapsibleStyleSheet().collapsed + " hidden" },
                          this.getInitialCollapsedContent()
                      )
                  )
              )];
          }
      }]);
      return CollapsibleTableRow;
  }(CollapsibleMixin(TableRow));

  var DelayedCollapsibleTableRow = function (_CollapsibleTableRow) {
      inherits(DelayedCollapsibleTableRow, _CollapsibleTableRow);

      function DelayedCollapsibleTableRow() {
          classCallCheck(this, DelayedCollapsibleTableRow);
          return possibleConstructorReturn(this, (DelayedCollapsibleTableRow.__proto__ || Object.getPrototypeOf(DelayedCollapsibleTableRow)).apply(this, arguments));
      }

      createClass(DelayedCollapsibleTableRow, [{
          key: "toggle",
          value: function toggle() {
              if (!this._haveExpanded) {
                  this._haveExpanded = true;
                  this.redrawCollapsible();
              }
              get(DelayedCollapsibleTableRow.prototype.__proto__ || Object.getPrototypeOf(DelayedCollapsibleTableRow.prototype), "toggle", this).call(this);
          }
      }, {
          key: "redrawCollapsible",
          value: function redrawCollapsible() {
              UI.renderingStack.push(this);
              this.contentArea.options.children = this.renderCollapsible(this.options.entry);
              UI.renderingStack.pop();
              this.contentArea.redraw();
          }
      }, {
          key: "getInitialCollapsedContent",
          value: function getInitialCollapsedContent() {
              return [];
          }
      }]);
      return DelayedCollapsibleTableRow;
  }(CollapsibleTableRow);

  function CollapsibleTableInterface(BaseTableClass) {
      return function (_BaseTableClass) {
          inherits(CollapsibleTable, _BaseTableClass);

          function CollapsibleTable() {
              classCallCheck(this, CollapsibleTable);
              return possibleConstructorReturn(this, (CollapsibleTable.__proto__ || Object.getPrototypeOf(CollapsibleTable)).apply(this, arguments));
          }

          createClass(CollapsibleTable, [{
              key: "setOptions",
              value: function setOptions(options) {
                  get(CollapsibleTable.prototype.__proto__ || Object.getPrototypeOf(CollapsibleTable.prototype), "setOptions", this).call(this, options);

                  if (options.renderCollapsible) {
                      this.renderCollapsible = options.renderCollapsible;
                  }
              }
          }, {
              key: "render",
              value: function render() {
                  return [UI.createElement(
                      "thead",
                      null,
                      this.renderTableHead()
                  ), this.renderTableBody()];
              }
          }, {
              key: "getRowClass",
              value: function getRowClass() {
                  return CollapsibleTableRow;
              }
          }, {
              key: "setColumns",
              value: function setColumns(columns) {
                  var _this8 = this;

                  var toggleColumn = {
                      value: function value(entry) {
                          var rowClass = _this8.getRowClass(entry);
                          // TODO: Fix it lad!
                          if (rowClass === CollapsibleTableRow || rowClass.prototype instanceof CollapsibleTableRow) {
                              return UI.createElement("a", { ref: "toggleButton",
                                  className: collapsibleTableStyle.button + " " + collapsibleTableStyle.collapsedButton });
                          }
                          return UI.createElement("a", { ref: "toggleButton" });
                      },
                      cellStyle: {
                          width: "1%",
                          "whiteSpace": "nowrap"
                      }
                  };

                  get(CollapsibleTable.prototype.__proto__ || Object.getPrototypeOf(CollapsibleTable.prototype), "setColumns", this).call(this, [toggleColumn].concat(columns));
              }
          }]);
          return CollapsibleTable;
      }(BaseTableClass);
  }

  var CollapsibleTable = CollapsibleTableInterface(Table);

  function SortableTableInterface(BaseTableClass) {
      var _dec, _class;

      var SortIconClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FASortIcon;
      var SortableTable = (_dec = registerStyle(SortableTableStyle), _dec(_class = function (_BaseTableClass) {
          inherits(SortableTable, _BaseTableClass);

          function SortableTable() {
              classCallCheck(this, SortableTable);
              return possibleConstructorReturn(this, (SortableTable.__proto__ || Object.getPrototypeOf(SortableTable)).apply(this, arguments));
          }

          createClass(SortableTable, [{
              key: "extraNodeAttributes",
              value: function extraNodeAttributes(attr) {
                  get(SortableTable.prototype.__proto__ || Object.getPrototypeOf(SortableTable.prototype), "extraNodeAttributes", this).call(this, attr);
                  attr.addClass(this.styleSheet.table);
              }
          }, {
              key: "setOptions",
              value: function setOptions(options) {
                  get(SortableTable.prototype.__proto__ || Object.getPrototypeOf(SortableTable.prototype), "setOptions", this).call(this, options);

                  this.columnSortingOrder = options.columnSortingOrder || [];
              }
          }, {
              key: "onMount",
              value: function onMount() {
                  var _this2 = this;

                  get(SortableTable.prototype.__proto__ || Object.getPrototypeOf(SortableTable.prototype), "onMount", this).call(this);

                  // TODO: fix multiple clicks registered here
                  // Sort table by clicked column
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                      var _loop = function _loop() {
                          var column = _step.value;

                          _this2["columnHeader" + column.id].addClickListener(function () {
                              _this2.sortByColumn(column);
                              _this2.dispatch("reorder");
                          });
                      };

                      for (var _iterator = this.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                          _loop();
                      }
                  } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                          }
                      } finally {
                          if (_didIteratorError) {
                              throw _iteratorError;
                          }
                      }
                  }
              }
          }, {
              key: "renderColumnHeader",
              value: function renderColumnHeader(column) {
                  var sortIcon = UI.createElement(SortIconClass, { className: this.styleSheet.sortIcon });
                  if (this.sortBy === column) {
                      if (this.sortDescending) {
                          sortIcon = UI.createElement(SortIconClass, { className: this.styleSheet.sortIcon, style: { visibility: "inherit" }, direction: Direction.DOWN });
                      } else {
                          sortIcon = UI.createElement(SortIconClass, { className: this.styleSheet.sortIcon, style: { visibility: "inherit" }, direction: Direction.UP });
                      }
                  }

                  return UI.createElement(
                      "div",
                      { style: { position: "relative" } },
                      get(SortableTable.prototype.__proto__ || Object.getPrototypeOf(SortableTable.prototype), "renderColumnHeader", this).call(this, column),
                      " ",
                      sortIcon
                  );
              }
          }, {
              key: "sortByColumn",
              value: function sortByColumn(column) {
                  if (column === this.sortBy) {
                      this.sortDescending = this.sortDescending != true;
                  } else {
                      this.sortDescending = true;
                  }

                  this.sortBy = column;

                  this.redraw();
              }
          }, {
              key: "getComparator",
              value: function getComparator() {
                  var _this3 = this;

                  if (!this.sortBy && this.columnSortingOrder.length === 0) {
                      return null;
                  }

                  var colCmp = function colCmp(a, b, col) {
                      if (!col) return 0;

                      var keyA = col.rawValue ? col.rawValue(a) : col.value(a);
                      var keyB = col.rawValue ? col.rawValue(b) : col.value(b);
                      return col.cmp(keyA, keyB);
                  };

                  return function (a, b) {
                      var cmpRes = void 0;

                      if (_this3.sortBy) {
                          cmpRes = colCmp(a, b, _this3.sortBy);
                          if (cmpRes !== 0) {
                              return _this3.sortDescending ? -cmpRes : cmpRes;
                          }
                      }

                      for (var i = 0; i < _this3.columnSortingOrder.length; i += 1) {
                          cmpRes = colCmp(a, b, _this3.columnSortingOrder[i]);
                          if (_this3.columnSortingOrder[i].sortDescending) {
                              cmpRes = -cmpRes;
                          }

                          if (cmpRes !== 0) {
                              return cmpRes;
                          }
                      }
                      return 0;
                  };
              }
          }, {
              key: "sortEntries",
              value: function sortEntries(entries) {
                  var sortedEntries = entries.slice();

                  if (this.getComparator()) {
                      sortedEntries.sort(this.getComparator());
                  }

                  return sortedEntries;
              }
          }, {
              key: "getEntries",
              value: function getEntries() {
                  return this.sortEntries(get(SortableTable.prototype.__proto__ || Object.getPrototypeOf(SortableTable.prototype), "getEntries", this).call(this));
              }
          }, {
              key: "columnDefaults",
              value: function columnDefaults(column, index) {
                  get(SortableTable.prototype.__proto__ || Object.getPrototypeOf(SortableTable.prototype), "columnDefaults", this).call(this, column, index);

                  if (!column.hasOwnProperty("cmp")) {
                      column.cmp = defaultComparator;
                  }
              }
          }]);
          return SortableTable;
      }(BaseTableClass)) || _class);

      return SortableTable;
  }

  var SortableTable = SortableTableInterface(Table);

  var _class$C, _temp$7;

  var TimeUnit = (_temp$7 = _class$C = function () {
      function TimeUnit(name, baseUnit, multiplier) {
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          classCallCheck(this, TimeUnit);

          this.name = name;
          this.pluralName = name + "s";
          this.baseUnit = baseUnit;
          this.multiplier = multiplier;
          this.milliseconds = (baseUnit && baseUnit.getMilliseconds() || 1) * multiplier;
          this.variableMultiplier = options.variableMultiplier || false;
          this.variableDuration = this.variableMultiplier || baseUnit && baseUnit.isVariable();
      }

      createClass(TimeUnit, [{
          key: "valueOf",
          value: function valueOf() {
              return this.milliseconds;
          }
      }, {
          key: "getName",
          value: function getName() {
              return this.name;
          }
      }, {
          key: "getPluralName",
          value: function getPluralName() {
              return this.pluralName;
          }
      }, {
          key: "getMilliseconds",
          value: function getMilliseconds() {
              return this.milliseconds;
          }
      }, {
          key: "isVariable",
          value: function isVariable() {
              return this.variableDuration;
          }
      }, {
          key: "hasVariableMultiplier",
          value: function hasVariableMultiplier() {
              return this.variableMultiplier;
          }
      }, {
          key: "getDateValue",
          value: function getDateValue(date) {}
      }, {
          key: "setDateValue",
          value: function setDateValue(date, value) {}
      }], [{
          key: "toTimeUnit",
          value: function toTimeUnit(timeUnit) {
              if (timeUnit instanceof TimeUnit) {
                  return timeUnit;
              }
              return this.CANONICAL[timeUnit];
          }
      }]);
      return TimeUnit;
  }(), _class$C.CANONICAL = {}, _class$C.ALL = [], _class$C.FIXED_DURATION = [], _class$C.VARIABLE_DURATION = [], _temp$7);

  TimeUnit.MILLISECOND = new TimeUnit("millisecond", null, 1);
  TimeUnit.SECOND = new TimeUnit("second", TimeUnit.MILLISECOND, 1000);
  TimeUnit.MINUTE = new TimeUnit("minute", TimeUnit.SECOND, 60);
  TimeUnit.HOUR = new TimeUnit("hour", TimeUnit.MINUTE, 60);
  TimeUnit.DAY = new TimeUnit("day", TimeUnit.HOUR, 24, { variableMultiplier: true });
  TimeUnit.WEEK = new TimeUnit("week", TimeUnit.DAY, 7);
  TimeUnit.MONTH = new TimeUnit("month", TimeUnit.DAY, 30, { variableMultiplier: true });
  TimeUnit.QUARTER = new TimeUnit("quarter", TimeUnit.MONTH, 3);
  TimeUnit.TRIMESTER = new TimeUnit("trimester", TimeUnit.MONTH, 4);
  TimeUnit.SEMESTER = new TimeUnit("semester", TimeUnit.MONTH, 6);
  TimeUnit.YEAR = new TimeUnit("year", TimeUnit.DAY, 365, { variableMultiplier: true });

  TimeUnit.DAY.dateMethodSuffix = "Date";
  TimeUnit.MONTH.dateMethodSuffix = "Month";
  TimeUnit.YEAR.dateMethodSuffix = "FullYear";

  var Duration = function () {
      function Duration(duration) {
          classCallCheck(this, Duration);

          if (duration instanceof self.Date) {
              throw new Error("Can't automatically transform Date to Duration, use date.getTime() if you really want to");
          }
          if (isNumber(duration)) {
              this.milliseconds = duration;
              return;
          }
          if (duration instanceof Duration) {
              Object.assign(this, duration);
              return;
          }
          if (isPlainObject(duration)) {
              this.milliseconds = 0;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = Object.keys(duration)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var key = _step.value;

                      var timeUnit = TimeUnit.CANONICAL[key];
                      if (!timeUnit) {
                          throw Error("Unknown time unit:", key);
                      }
                      // TODO: throw an error if can't parse these values
                      if (timeUnit.isVariable()) {
                          this[key] = parseInt(duration[key]);
                          this.relativeDuration = true;
                      } else {
                          this.milliseconds += parseFloat(duration[key]) * timeUnit.milliseconds;
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              return;
          }
          if (arguments.length > 0) {
              throw Error.apply(undefined, ["Invalid Duration arguments: "].concat(Array.prototype.slice.call(arguments)));
          }
          this.milliseconds = 0;
      }

      createClass(Duration, [{
          key: "increment",
          value: function increment(duration) {
              duration = this.constructor.toDuration(duration);
              for (var key in duration) {
                  if (!(key in TimeUnit.CANONICAL)) {
                      continue;
                  }
                  if (this.hasOwnProperty(key)) {
                      this[key] += duration[key];
                  } else {
                      this[key] = duration[key];
                  }
              }
              return this;
          }
      }, {
          key: "add",
          value: function add(duration) {
              return this.clone().increm(duration);
          }
      }, {
          key: "subtract",
          value: function subtract(duration) {
              duration = this.constructor.toDuration(duration).negate();
              return this.add(duration);
          }

          // Returns true if was defined terms of absolute primitives (anything less than a day)

      }, {
          key: "isAbsolute",
          value: function isAbsolute() {
              return !this.isVariable();
          }
      }, {
          key: "isVariable",
          value: function isVariable() {
              return this.relativeDuration;
          }
      }, {
          key: "negate",
          value: function negate() {
              var duration = new Duration(this);
              for (var key in duration) {
                  if (key in TimeUnit.CANONICAL) {
                      duration[key] = -duration[key];
                  }
              }
              return duration;
          }

          // Returns a new Duration with a positive length

      }, {
          key: "abs",
          value: function abs() {
              return new Duration(Math.abs(+this));
          }
      }, {
          key: "clone",
          value: function clone() {
              return new Duration(this);
          }

          // The primitive value

      }, {
          key: "valueOf",
          value: function valueOf() {
              return this.milliseconds;
          }
      }, {
          key: "toNanoseconds",
          value: function toNanoseconds() {
              return Math.floor(+this * 1e6);
          }

          // TODO: for all these units, should have a way to get the float and int value

      }, {
          key: "toMilliseconds",
          value: function toMilliseconds() {
              return Math.floor(+this);
          }
      }, {
          key: "getMilliseconds",
          value: function getMilliseconds() {
              return this.toMilliseconds() % 1000;
          }
      }, {
          key: "toSeconds",
          value: function toSeconds() {
              return Math.floor(+this / 1000);
          }
      }, {
          key: "getSeconds",
          value: function getSeconds() {
              return this.toSeconds() % 60;
          }
      }, {
          key: "toMinutes",
          value: function toMinutes() {
              return Math.floor(+this / (1000 * 60));
          }
      }, {
          key: "getMinutes",
          value: function getMinutes() {
              return this.toMinutes() % 60;
          }
      }, {
          key: "toHours",
          value: function toHours() {
              return Math.floor(+this / (1000 * 60 * 60));
          }
      }, {
          key: "getHours",
          value: function getHours() {
              return this.toHours() % 24;
          }
      }, {
          key: "toDays",
          value: function toDays() {
              return Math.floor(+this / (1000 * 60 * 60 * 24));
          }
      }, {
          key: "toMonths",
          value: function toMonths() {
              return Math.floor(+this / (1000 * 60 * 60 * 24 * 30));
          }
      }, {
          key: "toYears",
          value: function toYears() {
              return Math.floor(+this / (1000 * 60 * 60 * 24 * 365));
          }
      }, {
          key: "toString",
          value: function toString(locale) {
              // Humanize the duration (should work with localization)
          }
      }], [{
          key: "toDuration",
          value: function toDuration(duration) {
              if (duration instanceof Duration) {
                  return duration;
              }
              return new this(duration);
          }
      }]);
      return Duration;
  }();

  function addCanonicalTimeUnit(key, timeUnit) {
      TimeUnit.ALL.push(timeUnit);
      if (timeUnit.isVariable()) {
          TimeUnit.VARIABLE_DURATION.push(timeUnit);
      } else {
          TimeUnit.FIXED_DURATION.push(timeUnit);
      }

      TimeUnit.CANONICAL[timeUnit.name] = timeUnit;
      if (timeUnit.pluralName) {
          TimeUnit.CANONICAL[timeUnit.pluralName] = timeUnit;
      }

      var timeUnitsName = timeUnit.pluralName;

      // TODO: not sure about this anymore
      Duration[key] = new Duration(defineProperty({}, timeUnitsName, 1));
  }

  function addCanonicalTimeUnits() {
      for (var key in TimeUnit) {
          var timeUnit = TimeUnit[key];
          if (timeUnit instanceof TimeUnit) {
              addCanonicalTimeUnit(key, timeUnit);
          }
      }
  }

  addCanonicalTimeUnits();

  var _class$D;

  // MAX_UNIX_TIME is either ~Feb 2106 in unix seconds or ~Feb 1970 in unix milliseconds
  // Any value less than this is interpreted as a unix time in seconds
  // If you want to go around this behavious, you can use the static method .fromUnixMilliseconds()
  // To disable, set this value to 0
  var MAX_AUTO_UNIX_TIME = Math.pow(2, 32);

  var BaseDate = self.Date;

  var StemDate = extendsNative(_class$D = function (_BaseDate) {
      inherits(StemDate, _BaseDate);

      function StemDate() {
          classCallCheck(this, StemDate);
          return possibleConstructorReturn(this, (StemDate.__proto__ || Object.getPrototypeOf(StemDate)).apply(this, arguments));
      }

      createClass(StemDate, [{
          key: "toDate",
          value: function toDate() {
              return this;
          }
      }, {
          key: "set",
          value: function set$$1(date) {
              date = this.constructor.toDate(date);
              this.setTime(date.setTime());
          }
      }, {
          key: "clone",
          value: function clone() {
              return new this.constructor(this.getTime());
          }
      }, {
          key: "toUnix",
          value: function toUnix() {
              return this.getTime() / 1000;
          }
      }, {
          key: "unix",
          value: function unix() {
              return Math.floor(this.toUnix());
          }
      }, {
          key: "isBefore",
          value: function isBefore(date) {
              return this.getTime() < StemDate.toDate(date).getTime();
          }
      }, {
          key: "equals",
          value: function equals(date) {
              return this.getTime() === StemDate.toDate(date).getTime();
          }
      }, {
          key: "get",
          value: function get$$1(timeUnit) {
              timeUnit = TimeUnit.toTimeUnit(timeUnit);
              return timeUnit.getDateValue(this);
          }
      }, {
          key: "isSame",
          value: function isSame(date, timeUnit) {
              if (!timeUnit) {
                  return this.equals(date);
              }

              timeUnit = TimeUnit.toTimeUnit(timeUnit);
              date = this.constructor.toDate(date);
              var diff = this.diff(date);
              if (diff >= 2 * timeUnit) {
                  // If the distance between the two dates is more than 2 standard lengths of the time unit
                  // This would be wrong if you would have time unit that can sometimes last more than twice their canonical duration
                  // Works correctly for all implemented time units
                  return false;
              }
              return this.get(timeUnit) == date.get(timeUnit);
          }
      }, {
          key: "isAfter",
          value: function isAfter(date) {
              return this.getTime() > StemDate.toDate(date).getTime();
          }
      }, {
          key: "isSameOrBefore",
          value: function isSameOrBefore(date) {
              return this.isBefore(date) || this.equals(date);
          }
      }, {
          key: "isSameOrAfter",
          value: function isSameOrAfter(date) {
              return this.isAfter(date) || this.equals(date);
          }
      }, {
          key: "isBetween",
          value: function isBetween(a, b) {
              return this.isSameOrAfter(a) && this.isSameOrBefore(b);
          }
      }, {
          key: "getWeekDay",
          value: function getWeekDay() {
              return this.getDay();
          }
      }, {
          key: "addUnit",
          value: function addUnit(timeUnit) {
              var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

              timeUnit = TimeUnit.toTimeUnit(timeUnit);
              count = parseInt(count);

              if (!timeUnit.isVariable()) {
                  this.setTime(this.getTime() + timeUnit.getMilliseconds() * count);
                  return this;
              }

              while (!timeUnit.dateMethodSuffix) {
                  count *= timeUnit.multiplier;
                  timeUnit = timeUnit.baseUnit;
              }

              var dateMethodSuffix = timeUnit.dateMethodSuffix;
              var currentValue = this["get" + dateMethodSuffix]();
              this["set" + dateMethodSuffix](currentValue + count);

              return this;
          }
      }, {
          key: "capUp",


          // Assign the given date if current value if greater than it
          value: function capUp(date) {
              date = this.constructor.toDate(date);
              if (this.isAfter(date)) {
                  this.set(date);
              }
          }

          // Assign the given date if current value if less than it

      }, {
          key: "capDown",
          value: function capDown(date) {
              date = this.constructor.toDate(date);
              if (this.isBefore(date)) {
                  this.set(date);
              }
          }
      }, {
          key: "roundDown",
          value: function roundDown(timeUnit) {
              timeUnit = TimeUnit.toTimeUnit(timeUnit);
              // TODO: this is wrong for semester, etc, should be different then
              while (timeUnit = timeUnit.baseUnit) {
                  this["set" + timeUnit.dateMethodSuffix](0);
              }
              return this;
          }
      }, {
          key: "roundUp",
          value: function roundUp(timeUnit) {
              var roundDown = this.clone().roundDown(timeUnit);
              if (this.equals(roundDown)) {
                  this.set(roundDown);
                  return this;
              }
              this.addUnit(timeUnit);
              return this.roundDown(timeUnit);
          }
      }, {
          key: "round",
          value: function round(timeUnit) {
              var roundUp = this.clone().roundUp(timeUnit);
              var roundDown = this.clone().roundDown(timeUnit);
              // At a tie, preffer to round up, that's where time's going
              if (this.diff(roundUp) <= this.diff(roundDown)) {
                  this.setTime(roundUp.getTime());
              } else {
                  this.setTime(roundDown.getTime());
              }
              return this;
          }
      }, {
          key: "add",
          value: function add(duration) {
              duration = Duration.toDuration(duration);
              if (duration.isAbsolute()) {
                  this.setTime(this.getTime() + duration.toMilliseconds());
                  return this;
              }
              for (var key in duration) {
                  var timeUnit = TimeUnit.CANONICAL[key];
                  if (timeUnit) {
                      this.addUnit(timeUnit, duration[key]);
                  }
              }
              return this;
          }
      }, {
          key: "subtract",
          value: function subtract(duration) {
              duration = Duration.toDuration(duration).negate();
              return this.add(duration);
          }
      }, {
          key: "diffDuration",
          value: function diffDuration(date) {
              return new Duration(this.diff(date));
          }

          // TODO: this should be a duration

      }, {
          key: "diff",
          value: function diff(date) {
              date = this.constructor.toDate(date);
              return Math.abs(+this - date);
          }

          // Just to keep moment compatibility, until we actually implement locales

      }, {
          key: "locale",
          value: function locale(loc) {
              return this;
          }
      }, {
          key: "evalToken",
          value: function evalToken(token) {
              var func = this.constructor.tokenFormattersMap.get(token);
              if (!func) {
                  return token;
              }
              return func(this);
          }
      }, {
          key: "format",
          value: function format() {
              var _this2 = this;

              var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ISO";

              var tokens = this.constructor.splitToTokens(str);
              tokens = tokens.map(function (token) {
                  return _this2.evalToken(token);
              });
              return tokens.join("");
          }
      }, {
          key: "isValid",
          value: function isValid() {
              return this.toString() !== "Invalid Date";
          }
      }, {
          key: "utc",
          value: function utc() {
              // Temp hack
              return this.constructor.fromUnixMilliseconds(+this + this.getTimezoneOffset() * 60 * 1000);
          }
      }, {
          key: "isLeapYear",
          value: function isLeapYear() {
              var year = this.getFullYear();
              return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
          }
      }, {
          key: "daysInMonth",
          value: function daysInMonth() {
              // The 0th day of the next months is actually the last day in the current month
              var lastDayInMonth = new BaseDate(this.getFullYear(), this.getMonth() + 1, 0);
              return lastDayInMonth.getDate();
          }
      }, {
          key: "getDaysCountPerMonth",
          value: function getDaysCountPerMonth(index) {
              var months = [31, 28 + this.isLeapYear(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
              return months[index];
          }
      }, {
          key: "getDayInYear",
          value: function getDayInYear() {
              var month = this.getMonth();
              var totalDays = 0;
              for (var i = 0; i < month; i += 1) {
                  totalDays += this.getDaysCountPerMonth(i);
              }
              return totalDays + this.getDate() - 1;
          }
      }, {
          key: "getWeekInYear",
          value: function getWeekInYear() {
              return (this.getDayInYear() - this.getWeekDay()) / 7;
          }
      }], [{
          key: "create",

          // Still need to do this mess because of Babel, should be removed when moving to native ES6
          value: function create(value) {
              // Try to do an educated guess if this date is in unix seconds or milliseconds
              if (arguments.length === 1 && isNumber(value) && value < MAX_AUTO_UNIX_TIME) {
                  return instantiateNative(BaseDate, StemDate, value * 1000.0);
              } else {
                  return instantiateNative.apply(undefined, [BaseDate, StemDate].concat(Array.prototype.slice.call(arguments)));
              }
          }
      }, {
          key: "toDate",
          value: function toDate(date) {
              if (date instanceof StemDate) {
                  return date;
              } else {
                  return new this(date);
              }
          }
      }, {
          key: "now",
          value: function now() {
              return new this(BaseDate.now());
          }
      }, {
          key: "fromUnixMilliseconds",
          value: function fromUnixMilliseconds(unixMilliseconds) {
              return this.create(new BaseDate(unixMilliseconds));
          }
      }, {
          key: "fromUnixSeconds",
          value: function fromUnixSeconds(unixSecons) {
              return this.fromUnixMilliseconds(unixSecons * 1000);
          }

          // Creates a Date object from an instance of DOMHighResTimeStamp, returned by performance.now() for instance

      }, {
          key: "fromHighResTimestamp",
          value: function fromHighResTimestamp(highResTimestamp) {
              return this.fromUnixMilliseconds(highResTimestamp + self.performance.timing.navigationStart);
          }

          // You don't usually need to call this in most cases, constructor uses MAX_AUX_UNIX_TIME

      }, {
          key: "unix",
          value: function unix(unixTime) {
              return this.fromUnixSeconds(unixTime);
          }
      }, {
          key: "min",
          value: function min() {
              // TODO: simplify and remove code duplication
              var result = this.constructor.toDate(arguments[0]);
              for (var index = 1; index < arguments.length; index++) {
                  var candidate = this.constructor.toDate(arguments[index]);
                  if (candidate.isBefore(result)) {
                      result = candidate;
                  }
              }
              return result;
          }
      }, {
          key: "max",
          value: function max() {
              var result = this.constructor.toDate(arguments[0]);
              for (var index = 1; index < arguments.length; index++) {
                  var candidate = this.constructor.toDate(arguments[index]);
                  if (candidate.isAfter(result)) {
                      result = candidate;
                  }
              }
              return result;
          }
      }, {
          key: "splitToTokens",
          value: function splitToTokens(str) {
              // TODO: "[HH]HH" will be split to ["HH", "HH"], so the escape does not solve the problem
              var tokens = [];
              var lastIsLetter = null;
              var escapeByCurlyBracket = false;
              var escapeBySquareBracket = false;
              for (var i = 0; i < str.length; i++) {
                  var charCode = str.charCodeAt(i);
                  if (charCode === 125 && escapeByCurlyBracket) {
                      // '}' ending the escape
                      escapeByCurlyBracket = false;
                      lastIsLetter = null;
                  } else if (charCode === 93 && escapeBySquareBracket) {
                      // ']' ending the escape
                      escapeBySquareBracket = false;
                      lastIsLetter = null;
                  } else if (escapeByCurlyBracket || escapeBySquareBracket) {
                      // The character is escaped no matter what it is
                      tokens[tokens.length - 1] += str[i];
                  } else if (charCode === 123) {
                      // '{' starts a new escape
                      escapeByCurlyBracket = true;
                      tokens.push("");
                  } else if (charCode === 91) {
                      // '[' starts a new escape
                      escapeBySquareBracket = true;
                      tokens.push("");
                  } else {
                      var isLetter = 65 <= charCode && charCode <= 90 || 97 <= charCode && charCode <= 122;
                      if (isLetter === lastIsLetter) {
                          tokens[tokens.length - 1] += str[i];
                      } else {
                          tokens.push(str[i]);
                      }
                      lastIsLetter = isLetter;
                  }
              }
              if (escapeByCurlyBracket || escapeBySquareBracket) {
                  console.warn("Unfinished escaped sequence!");
              }
              return tokens;
          }
      }]);
      return StemDate;
  }(BaseDate)) || _class$D;

  Duration.prototype.format = function (pattern) {
      return StemDate.fromUnixMilliseconds(this.toMilliseconds()).utc().format(pattern);
  };

  var miniWeekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  var shortWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var longWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var longMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var DateLocale = function () {
      function DateLocale() {
          var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          classCallCheck(this, DateLocale);

          Object.assign(this, obj);
          this.formats = this.formats || {};
      }

      createClass(DateLocale, [{
          key: "getFormat",
          value: function getFormat(longDate) {
              return this.formats[longDate];
          }
      }, {
          key: "setFormat",
          value: function setFormat(pattern, func) {
              this.formats[pattern] = func;
          }
      }, {
          key: "format",
          value: function format(date, pattern) {
              return date.format(pattern);
          }
      }, {
          key: "getRelativeTime",
          value: function getRelativeTime() {
              throw Error("Not implemented");
          }
      }]);
      return DateLocale;
  }();

  StemDate.tokenFormattersMap = new Map([["ISO", function (date) {
      return date.toISOString();
  }], ["Y", function (date) {
      return date.getFullYear();
  }], ["YY", function (date) {
      return padNumber(date.getFullYear() % 100, 2);
  }], ["YYYY", function (date) {
      return date.getFullYear();
  }], ["M", function (date) {
      return date.getMonth() + 1;
  }], ["MM", function (date) {
      return padNumber(date.getMonth() + 1, 2);
  }], ["MMM", function (date) {
      return shortMonths[date.getMonth()];
  }], ["MMMM", function (date) {
      return longMonths[date.getMonth()];
  }], ["D", function (date) {
      return date.getDate();
  }], ["Do", function (date) {
      return suffixWithOrdinal(date.getDate());
  }], ["DD", function (date) {
      return padNumber(date.getDate(), 2);
  }], ["d", function (date) {
      return date.getWeekDay();
  }], ["do", function (date) {
      return suffixWithOrdinal(date.getWeekDay());
  }], ["dd", function (date) {
      return miniWeekDays[date.getWeekDay()];
  }], ["ddd", function (date) {
      return shortWeekDays[date.getWeekDay()];
  }], ["dddd", function (date) {
      return longWeekdays[date.getWeekDay()];
  }], ["H", function (date) {
      return date.getHours();
  }], ["HH", function (date) {
      return padNumber(date.getHours(), 2);
  }], ["h", function (date) {
      return date.getHours() % 12;
  }], ["hh", function (date) {
      return padNumber(date.getHours() % 12, 2);
  }], ["m", function (date) {
      return date.getMinutes();
  }], ["mm", function (date) {
      return padNumber(date.getMinutes(), 2);
  }], ["s", function (date) {
      return date.getSeconds();
  }], ["ss", function (date) {
      return padNumber(date.getSeconds(), 2);
  }], ["S", function (date) {
      return Math.floor(date.getMilliseconds() / 100);
  }], ["SS", function (date) {
      return padNumber(Math.floor(date.getMilliseconds() / 10), 2);
  }], ["SSS", function (date) {
      return padNumber(date.getMilliseconds(), 3);
  }], ["ms", function (date) {
      return padNumber(date.getMilliseconds(), 3);
  }], ["LL", function (date) {
      return date.format("MMMM Do, YYYY");
  }]]);

  // TODO: should use +TimeUnit.DAY
  var DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

  var DatePickerTable = function (_UI$Element) {
      inherits(DatePickerTable, _UI$Element);

      function DatePickerTable() {
          classCallCheck(this, DatePickerTable);
          return possibleConstructorReturn(this, (DatePickerTable.__proto__ || Object.getPrototypeOf(DatePickerTable)).apply(this, arguments));
      }

      return DatePickerTable;
  }(UI.Element);

  var TimePickerWidget = function (_UI$Element2) {
      inherits(TimePickerWidget, _UI$Element2);

      function TimePickerWidget() {
          classCallCheck(this, TimePickerWidget);
          return possibleConstructorReturn(this, (TimePickerWidget.__proto__ || Object.getPrototypeOf(TimePickerWidget)).apply(this, arguments));
      }

      createClass(TimePickerWidget, [{
          key: "render",
          value: function render() {
              var hours = parseInt(this.options.time / (60 * 60 * 1000));
              var minutes = parseInt((this.options.time - 60 * 60 * 1000 * hours) / (60 * 1000));
              var seconds = parseInt((this.options.time - 60 * 60 * 1000 * hours - 60 * 1000 * minutes) / 1000);
              var textSpanStyle = {
                  display: "inline-block",
                  flex: 1,
                  textAlign: "center",
                  fontSize: "1.5em",
                  fontWeight: "bold",
                  padding: "0 5px"
              };
              return [UI.createElement(
                  "div",
                  { style: { width: "130px", display: "flex" } },
                  UI.createElement("div", { style: textSpanStyle, ref: "hours" }),
                  UI.createElement(
                      "div",
                      { style: textSpanStyle },
                      ":"
                  ),
                  UI.createElement("div", { style: textSpanStyle, ref: "minutes" }),
                  UI.createElement(
                      "div",
                      { style: textSpanStyle },
                      ":"
                  ),
                  UI.createElement("div", { style: textSpanStyle, ref: "seconds" })
              ), UI.createElement(
                  "div",
                  { style: { width: "130px", display: "flex" } },
                  UI.createElement(VerticalSlideBar, { value: hours / 23, ref: "hourSlider", height: 200, barHeight: 5, style: { flex: 1 } }),
                  UI.createElement("div", { style: { flex: 1 } }),
                  UI.createElement(VerticalSlideBar, { value: minutes / 59, ref: "minuteSlider", height: 200, barHeight: 5, style: { flex: 1 } }),
                  UI.createElement("div", { style: { flex: 1 } }),
                  UI.createElement(VerticalSlideBar, { value: seconds / 59, ref: "secondSlider", height: 200, barHeight: 5, style: { flex: 1, marginRight: "5px" } })
              )];
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this3 = this;

              var changeCallback = function changeCallback() {
                  var hours = parseInt(_this3.hourSlider.getValue() * 23);
                  var minutes = parseInt(_this3.minuteSlider.getValue() * 59);
                  var seconds = parseInt(_this3.secondSlider.getValue() * 59);
                  _this3.hours.node.innerHTML = (hours < 10 ? "0" : "") + hours;
                  _this3.minutes.node.innerHTML = (minutes < 10 ? "0" : "") + minutes;
                  _this3.seconds.node.innerHTML = (seconds < 10 ? "0" : "") + seconds;
                  var time = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
                  _this3.dispatch("changeTime", time);
              };
              this.hourSlider.addListener("change", changeCallback);
              this.minuteSlider.addListener("change", changeCallback);
              this.secondSlider.addListener("change", changeCallback);
              changeCallback();
          }
      }]);
      return TimePickerWidget;
  }(UI.Element);

  var DateTimeWindow = function (_VolatileFloatingWind) {
      inherits(DateTimeWindow, _VolatileFloatingWind);

      function DateTimeWindow() {
          classCallCheck(this, DateTimeWindow);
          return possibleConstructorReturn(this, (DateTimeWindow.__proto__ || Object.getPrototypeOf(DateTimeWindow)).apply(this, arguments));
      }

      createClass(DateTimeWindow, [{
          key: "setOptions",
          value: function setOptions(options) {
              options.style = Object.assign({
                  marginBottom: "5px",
                  border: "1px solid #bbb",
                  borderRadius: "2px",
                  position: "absolute",
                  overflow: "auto",
                  boxShadow: "0 6px 12px rgba(0,0,0,.175)",
                  backgroundColor: "white",
                  padding: "10px",
                  zIndex: 10000
              }, options.style || {});
              get(DateTimeWindow.prototype.__proto__ || Object.getPrototypeOf(DateTimeWindow.prototype), "setOptions", this).call(this, options);
              this.computeInitial();
          }
      }, {
          key: "render",
          value: function render() {
              return [UI.createElement(DatePickerTable, { ref: "datePicker", date: this.date }), UI.createElement(TimePickerWidget, { ref: "timePicker", time: this.time })];
          }
      }, {
          key: "computeInitial",
          value: function computeInitial() {
              var initialDateTime = StemDate.parse(this.formatISO(this.options.initialDateTime)) || StemDate.now();
              this.time = initialDateTime % DAY_IN_MILLISECONDS;
              this.date = parseInt(initialDateTime / DAY_IN_MILLISECONDS);
          }
      }, {
          key: "formatISO",
          value: function formatISO(str) {
              if (!str) {
                  return "";
              }
              while (str.indexOf("/") !== -1) {
                  str = str.replace("/", " ");
              }
              while (str.indexOf(":") !== -1) {
                  str = str.replace(":", " ");
              }
              var tokens = str.split(" ");
              return tokens[2] + "-" + tokens[1] + "-" + tokens[0] + "T" + tokens[3] + ":" + tokens[4] + ":" + tokens[5] + ".000Z";
          }
      }, {
          key: "getValue",
          value: function getValue() {
              var currentDate = this.time + DAY_IN_MILLISECONDS * this.date;
              currentDate = StemDate.create(currentDate);
              var date = currentDate.toISOString();
              date = date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
              return date + " " + currentDate.toTimeString().slice(0, 8);
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this5 = this;

              this.options.output.setValue(this.getValue());
              this.datePicker.addListener("changeDate", function (date) {
                  _this5.date = date;
                  _this5.options.output.setValue(_this5.getValue());
              });
              this.timePicker.addListener("changeTime", function (time) {
                  _this5.time = time;
                  _this5.options.output.setValue(_this5.getValue());
              });
          }
      }]);
      return DateTimeWindow;
  }(VolatileFloatingWindow);

  var DateTimePicker = function (_UI$Element3) {
      inherits(DateTimePicker, _UI$Element3);

      function DateTimePicker() {
          classCallCheck(this, DateTimePicker);
          return possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).apply(this, arguments));
      }

      createClass(DateTimePicker, [{
          key: "setOptions",
          value: function setOptions(options) {
              options.format = options.format || "DD/MM/YYYY HH:mm:ss";
              get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), "setOptions", this).call(this, options);
              if (this.options.date) {
                  this.setDate(this.options.date);
              }
          }
      }, {
          key: "parseDateFromString",
          value: function parseDateFromString(str, format) {
              if (format !== "DD/MM/YYYY HH:mm:ss") {
                  throw Error("Format not supported!");
              }
              // Just parsing DD/MM/YYYY HH:mm:ss for now
              while (str.indexOf('/') !== -1) {
                  str = str.replace('/', ' ');
              }
              while (str.indexOf(':') !== -1) {
                  str = str.replace(':', ' ');
              }
              var tokens = str.split(' ');
              var integerTokens = [];
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                  for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var token = _step.value;

                      var number = parseFloat(token);
                      if (!isNaN(number)) {
                          integerTokens.push(number);
                      }
                  }
              } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                      }
                  } finally {
                      if (_didIteratorError) {
                          throw _iteratorError;
                      }
                  }
              }

              var years = integerTokens.length >= 3 ? integerTokens[2] : 0;
              var months = integerTokens.length >= 2 ? integerTokens[1] - 1 : 0;
              var days = integerTokens.length >= 1 ? integerTokens[0] : 0;
              var hours = integerTokens.length >= 4 ? integerTokens[3] : 0;
              var minutes = integerTokens.length >= 5 ? integerTokens[4] : 0;
              var seconds = integerTokens.length >= 6 ? integerTokens[5] : 0;
              var date = new StemDate(years, months, days, hours, minutes, seconds);
              if (!date.getTime()) {
                  return null;
              }
              return date;
          }
      }, {
          key: "getDate",
          value: function getDate() {
              var str = this.textInput.getValue();
              if (!str) {
                  return null;
              }
              var format = this.options.format;
              return this.parseDateFromString(str, format);
          }
      }, {
          key: "setDate",
          value: function setDate(date) {
              this.options.date = date;
              this.options.dateString = date.format(this.options.format);
              if (this.textInput) {
                  this.textInput.setValue(this.options.dateString);
              }
          }
      }, {
          key: "render",
          value: function render() {
              return [UI.createElement(TextInput, { ref: "textInput", placeholder: this.options.format, value: this.options.dateString || "" })];
          }

          // onMount() {
          //     this.calendarSpan.addClickListener((event) => {
          //         if (!this.dateTimeWindow) {
          //             let textInputOffset = getOffset(this.textInput);
          //             this.dateTimeWindow = DateTimeWindow.create(document.body, {
          //                 style: {
          //                     top: textInputOffset.top + 5 + this.textInput.getHeight() + "px",
          //                     left: textInputOffset.left + 5 + "px"
          //                 },
          //                 initialDateTime: this.textInput.getValue(),
          //                 output: this.textInput
          //             });
          //         } else {
          //             this.dateTimeWindow.hide();
          //             delete this.dateTimeWindow;
          //         }
          //         event.stopPropagation();
          //     });
          // }

      }]);
      return DateTimePicker;
  }(UI.Element);

  function enqueueIfNotLoaded(target, key, descriptor) {
      var method = descriptor.value;
      return Object.assign({}, descriptor, {
          value: function value() {
              if (this.isLoaded()) {
                  return method.call.apply(method, [this].concat(Array.prototype.slice.call(arguments)));
              } else {
                  this.enqueueMethodCall(method, arguments);
                  return null;
              }
          }
      });
  }

  var EnqueueableMethodMixin = function EnqueueableMethodMixin(BaseClass) {
      return function (_BaseClass) {
          inherits(EnqueueableMethodClass, _BaseClass);

          function EnqueueableMethodClass() {
              classCallCheck(this, EnqueueableMethodClass);
              return possibleConstructorReturn(this, (EnqueueableMethodClass.__proto__ || Object.getPrototypeOf(EnqueueableMethodClass)).apply(this, arguments));
          }

          createClass(EnqueueableMethodClass, [{
              key: "isLoaded",
              value: function isLoaded() {
                  throw Error("Not implemented!");
              }
          }, {
              key: "enqueueMethodCall",
              value: function enqueueMethodCall(method, args) {
                  this.methodCallQueue = this.methodCallQueue || [];
                  this.methodCallQueue.push([method, args]);
              }
          }, {
              key: "resolveQueuedMethods",
              value: function resolveQueuedMethods() {
                  if (!this.isLoaded()) {
                      throw Error("Cannot process scheduled jobs, element not loaded");
                  }
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                      for (var _iterator = (this.methodCallQueue || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                          var _methodCall$;

                          var methodCall = _step.value;

                          (_methodCall$ = methodCall[0]).call.apply(_methodCall$, [this].concat(toConsumableArray(methodCall[1])));
                      }
                  } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                          }
                      } finally {
                          if (_didIteratorError) {
                              throw _iteratorError;
                          }
                      }
                  }

                  delete this.methodCallQueue;
              }
          }]);
          return EnqueueableMethodClass;
      }(BaseClass);
  };

  var _class$E, _class2$7, _descriptor$g, _dec$j, _class4$1;

  function _initDefineProp$h(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$h(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var CodeEditor = (_class$E = function (_EnqueueableMethodMix) {
      inherits(CodeEditor, _EnqueueableMethodMix);

      function CodeEditor() {
          classCallCheck(this, CodeEditor);
          return possibleConstructorReturn(this, (CodeEditor.__proto__ || Object.getPrototypeOf(CodeEditor)).apply(this, arguments));
      }

      createClass(CodeEditor, [{
          key: "isLoaded",
          value: function isLoaded() {
              return !!this.getAce();
          }
      }, {
          key: "setOptions",
          value: function setOptions(options) {
              var defaultOptions = {
                  aceMode: "text",
                  readOnly: false,
                  aceTheme: "dawn",
                  aceKeyboardHandler: "ace",
                  fontSize: 14,
                  tabSize: 4,
                  showLineNumber: true,
                  showPrintMargin: false,
                  printMarginSize: 80
              };
              options = Object.assign(defaultOptions, options);

              get(CodeEditor.prototype.__proto__ || Object.getPrototypeOf(CodeEditor.prototype), "setOptions", this).call(this, options);

              if (this.options.aceMode) {
                  this.options.aceMode = this.options.aceMode.toLowerCase();
              }

              if (this.options.aceMode === "cpp" || this.options.aceMode === "c") {
                  this.options.aceMode = "c_cpp";
              }

              if (this.getAce()) {
                  this.applyAceOptions();
              }
          }
      }, {
          key: "redraw",
          value: function redraw() {
              if (this.getAce()) {
                  this.aceResize();
                  this.applyRef();
                  return;
              }
              get(CodeEditor.prototype.__proto__ || Object.getPrototypeOf(CodeEditor.prototype), "redraw", this).call(this);
          }
      }, {
          key: "whenLoaded",
          value: function whenLoaded(callback) {
              if (this.isLoaded()) {
                  callback();
              } else {
                  this.addListenerOnce("aceReady", callback);
              }
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this2 = this;

              // Sometimes when the parent div resizes the ace editor doesn't fully update.
              this.addListener("resize", function () {
                  _this2.aceResize();
              });

              this.addListener("change", function () {
                  _this2.aceResize();
              });

              if (!window.ace) {
                  this.constructor.requireAce(function () {
                      _this2.onDelayedMount();
                  });
                  return;
              }
              this.onDelayedMount();
          }
      }, {
          key: "onDelayedMount",
          value: function onDelayedMount() {
              var _this3 = this;

              this.ace = window.ace.edit(this.node);

              // Removes some warnings
              this.getAce().$blockScrolling = Infinity;

              this.resolveQueuedMethods();

              this.applyAceOptions();

              //#voodoo was here to automatically redraw when unhiding
              //This Ace event listener might be useful in the future
              this.getAce().renderer.$textLayer.addEventListener("changeCharacterSize", function (event) {
                  _this3.aceResize();
              });
              this.dispatch("aceReady");
          }
      }, {
          key: "getAce",
          value: function getAce() {
              return this.ace;
          }
      }, {
          key: "getValue",
          value: function getValue() {
              return this.getAce().getValue();
          }
      }, {
          key: "applyAceOptions",
          value: function applyAceOptions() {
              var _this4 = this;

              //set the language mode
              this.setAceMode(this.options.aceMode);
              this.setAceKeyboardHandler(this.options.aceKeyboardHandler);
              this.setAceTheme(this.options.aceTheme);
              this.setAceFontSize(this.options.fontSize);
              this.setAceTabSize(this.options.tabSize);
              this.setAceLineNumberVisible(this.options.showLineNumber);
              this.setAcePrintMarginVisible(this.options.showPrintMargin);
              this.setAcePrintMarginSize(this.options.printMarginSize);
              this.setReadOnly(this.options.readOnly);
              this.setUseWrapMode(this.options.lineWrapping || false);

              if (this.options.numLines) {
                  this.options.maxLines = this.options.minLines = this.options.numLines;
              }

              if (this.options.maxLines) {
                  this.setAceOptions({
                      maxLines: this.options.maxLines
                  });
              }

              if (this.options.minLines) {
                  this.setAceOptions({
                      minLines: this.options.minLines
                  });
              }

              if (this.options.value) {
                  this.setValue(this.options.value, -1);
              }
              if (this.options.hasOwnProperty("enableBasicAutocompletion") || this.options.hasOwnProperty("enableLiveAutocompletion")) {
                  var langTools = "/static/js/ext/ace/ext-language_tools.js";
                  require([langTools], function () {
                      _this4.setBasicAutocompletion(_this4.options.enableBasicAutocompletion);
                      _this4.setLiveAutocompletion(_this4.options.enableLiveAutocompletion);
                      _this4.setSnippets(_this4.options.enableSnippets);
                  });
              }
          }
      }, {
          key: "aceResize",
          value: function aceResize() {
              this.getAce().resize();
          }
      }, {
          key: "setValue",
          value: function setValue(sourceCode, fakeUserChange) {
              // We need to wrap the ace call in these flags so any event listeners can know if this change
              // was done by us or by the user
              this.apiChange = !fakeUserChange;
              this.getAce().setValue(sourceCode, -1);
              this.apiChange = false;
          }
      }, {
          key: "setAceOptions",
          value: function setAceOptions(options) {
              this.getAce().setOptions(options);
          }

          // TODO: should this be setEditable?

      }, {
          key: "setReadOnly",
          value: function setReadOnly(value) {
              this.getAce().setReadOnly(value);
          }
      }, {
          key: "setAceMode",
          value: function setAceMode(aceMode) {
              if (aceMode.hasOwnProperty("aceMode")) {
                  aceMode = aceMode.aceMode;
              }
              this.getAce().getSession().setMode("ace/mode/" + aceMode);
          }
      }, {
          key: "getAceKeyboardHandler",
          value: function getAceKeyboardHandler() {
              return this.getAce().$keybindingId;
          }
      }, {
          key: "setAceKeyboardHandler",
          value: function setAceKeyboardHandler(keyboardHandler) {
              if (keyboardHandler.hasOwnProperty("aceName")) {
                  keyboardHandler = keyboardHandler.aceName;
              }
              this.getAce().setKeyboardHandler("ace/keyboard/" + keyboardHandler);
          }
      }, {
          key: "getAceMode",
          value: function getAceMode() {
              return this.getAce().getSession().getMode();
          }
      }, {
          key: "setAceTheme",
          value: function setAceTheme(theme) {
              if (theme.hasOwnProperty("aceName")) {
                  theme = theme.aceName;
              }
              this.getAce().setTheme("ace/theme/" + theme);
          }
      }, {
          key: "getAceTheme",
          value: function getAceTheme() {
              return this.getAce().getTheme();
          }
      }, {
          key: "setAceFontSize",
          value: function setAceFontSize(fontSize) {
              this.getAce().setOptions({
                  fontSize: fontSize + "px"
              });
          }
      }, {
          key: "getAceFontSize",
          value: function getAceFontSize() {
              return this.getAce().getFontSize();
          }
      }, {
          key: "setAceTabSize",
          value: function setAceTabSize(tabSize) {
              this.getAce().setOptions({
                  tabSize: tabSize
              });
          }
      }, {
          key: "getAceTabSize",
          value: function getAceTabSize() {
              return this.getAce().getOption("tabSize");
          }
      }, {
          key: "setAceLineNumberVisible",
          value: function setAceLineNumberVisible(value) {
              this.getAce().renderer.setShowGutter(value);
          }
      }, {
          key: "getAceLineNumberVisible",
          value: function getAceLineNumberVisible() {
              return this.getAce().renderer.getShowGutter();
          }
      }, {
          key: "setAcePrintMarginVisible",
          value: function setAcePrintMarginVisible(value) {
              this.getAce().setShowPrintMargin(value);
          }
      }, {
          key: "getAcePrintMarginVisible",
          value: function getAcePrintMarginVisible() {
              return this.getAce().getShowPrintMargin();
          }
      }, {
          key: "setAcePrintMarginSize",
          value: function setAcePrintMarginSize(printMarginSize) {
              this.getAce().setPrintMarginColumn(printMarginSize);
          }
      }, {
          key: "getAcePrintMarginSize",
          value: function getAcePrintMarginSize() {
              return this.getAce().getPrintMarginColumn();
          }
      }, {
          key: "setBasicAutocompletion",
          value: function setBasicAutocompletion(value) {
              this.getAce().setOptions({
                  enableBasicAutocompletion: value
              });
          }
      }, {
          key: "setLiveAutocompletion",
          value: function setLiveAutocompletion(value) {
              this.getAce().setOptions({
                  enableLiveAutocompletion: value
              });
          }
      }, {
          key: "setSnippets",
          value: function setSnippets(value) {
              this.getAce().setOptions({
                  enableSnippets: value
              });
          }
      }, {
          key: "setAnnotations",
          value: function setAnnotations(annotations) {
              this.getAce().getSession().setAnnotations(annotations);
          }
      }, {
          key: "setUseWrapMode",
          value: function setUseWrapMode(value) {
              this.getAce().getSession().setUseWrapMode(value);
          }
      }, {
          key: "setIndentedSoftWrap",
          value: function setIndentedSoftWrap(value) {
              this.getAce().setOption("indentedSoftWrap", value);
          }
      }, {
          key: "blockScroll",
          value: function blockScroll() {
              this.getAce().$blockScrolling = Infinity;
          }
      }, {
          key: "setFoldStyle",
          value: function setFoldStyle(foldStyle) {
              this.getAce().getSession().setFoldStyle(foldStyle);
          }
      }, {
          key: "setHighlightActiveLine",
          value: function setHighlightActiveLine(value) {
              this.getAce().setHighlightActiveLine(value);
          }
      }, {
          key: "setHighlightGutterLine",
          value: function setHighlightGutterLine(value) {
              this.getAce().setHighlightGutterLine(value);
          }
      }, {
          key: "setShowGutter",
          value: function setShowGutter(value) {
              this.getAce().renderer.setShowGutter(value);
          }
      }, {
          key: "getScrollTop",
          value: function getScrollTop() {
              return this.getAce().getSession().getScrollTop();
          }
      }, {
          key: "setScrollTop",
          value: function setScrollTop(value) {
              this.getAce().getSession().setScrollTop(value);
          }
      }, {
          key: "addMarker",
          value: function addMarker(startLine, startCol, endLine, endCol) {
              var _getAce$getSession;

              var Range = this.constructor.AceRange;

              for (var _len = arguments.length, args = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
                  args[_key - 4] = arguments[_key];
              }

              return (_getAce$getSession = this.getAce().getSession()).addMarker.apply(_getAce$getSession, [new Range(startLine, startCol, endLine, endCol)].concat(args));
          }
      }, {
          key: "removeMarker",
          value: function removeMarker(marker) {
              this.getAce().getSession().removeMarker(marker);
          }
      }, {
          key: "getRendererLineHeight",
          value: function getRendererLineHeight() {
              return this.getAce().renderer.lineHeight;
          }
      }, {
          key: "getTextRange",
          value: function getTextRange(startLine, startCol, endLine, endCol) {
              var Range = this.constructor.AceRange;
              return this.getAce().getSession().doc.getTextRange(new Range(startLine, startCol, endLine, endCol));
          }
      }, {
          key: "setTextRange",
          value: function setTextRange(startLine, startCol, endLine, endCol, text) {
              var Range = this.constructor.AceRange;
              this.getAce().getSession().replace(new Range(startLine, startCol, endLine, endCol), text);
          }
      }, {
          key: "removeLine",
          value: function removeLine(line) {
              var Range = this.constructor.AceRange;
              this.getAce().getSession().getDocument().remove(new Range(line, 0, line + 1, 0));
          }
      }, {
          key: "insertAtLine",
          value: function insertAtLine(line, str) {
              var column = this.getAce().session.getLine(line - 1).length;
              this.getAce().gotoLine(line, column);
              this.insert(str);
          }
      }, {
          key: "replaceLine",
          value: function replaceLine(line, str) {
              var Range = this.constructor.AceRange;
              this.getAce().getSession().getDocument().replace(new Range(line, 0, line + 1, 0), str);
          }
      }, {
          key: "addAceSessionEventListener",
          value: function addAceSessionEventListener(event, callback) {
              this.getAce().getSession().addEventListener(event, callback);
          }
      }, {
          key: "addAceSessionChangeListener",
          value: function addAceSessionChangeListener(callback) {
              this.addAceSessionEventListener("change", callback);
          }
      }, {
          key: "addAceChangeListener",
          value: function addAceChangeListener(callback) {
              this.getAce().on("change", callback);
          }
      }, {
          key: "addAceEventListener",
          value: function addAceEventListener() {
              var _getAce;

              (_getAce = this.getAce()).addEventListener.apply(_getAce, arguments);
          }
      }, {
          key: "focus",
          value: function focus$$1() {
              this.getAce().focus();
          }
      }, {
          key: "gotoEnd",
          value: function gotoEnd() {
              var editor = this.getAce();
              var editorRow = editor.session.getLength() - 1;
              var editorColumn = editor.session.getLine(editorRow).length;
              editor.gotoLine(editorRow + 1, editorColumn);
          }
      }, {
          key: "setUndoManager",
          value: function setUndoManager(undoManager) {
              this.getAce().getSession().setUndoManager(undoManager);
          }
      }, {
          key: "setAceRendererOption",
          value: function setAceRendererOption(key, value) {
              this.getAce().renderer.setOption(key, value);
          }

          // Inserts the text at the current cursor position

      }, {
          key: "insert",
          value: function insert(text) {
              this.getAce().insert(text);
          }

          // Appends the text at the end of the document

      }, {
          key: "append",
          value: function append(text) {
              var lastRow = this.getAce().getSession().getLength() - 1;
              if (lastRow < 0) {
                  lastRow = 0;
              }
              var lastRowLength = this.getAce().getSession().getLine(lastRow).length;
              var scrolledToBottom = this.getAce().isRowFullyVisible(lastRow);
              // console.log("Scroll to bottom ", scrolledToBottom);
              this.getAce().getSession().insert({
                  row: lastRow,
                  column: lastRowLength
              }, text);

              this.aceResize();

              if (scrolledToBottom) {
                  // TODO: Include scroll lock option!
                  // TODO: See if scrolling to bottom can be done better
                  // TODO: for some reason the scroll bar height is not being updated, this needs to be fixed
                  this.getAce().scrollToLine(this.getAce().getSession().getLength() - 1, true, true, function () {});
              }
          }
      }, {
          key: "copyTextToClipboard",
          value: function copyTextToClipboard() {
              this.getAce().selectAll();
              this.getAce().focus();
              document.execCommand('copy');
          }
      }], [{
          key: "requireAce",
          value: function requireAce(callback) {
              throw Error("You need to implement requireAce");
          }
      }]);
      return CodeEditor;
  }(EnqueueableMethodMixin(UI.Element)), (_applyDecoratedDescriptor$h(_class$E.prototype, "applyAceOptions", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "applyAceOptions"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "aceResize", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "aceResize"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setValue", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setValue"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setAceOptions", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setAceOptions"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setReadOnly", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setReadOnly"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setAceMode", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setAceMode"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setAceKeyboardHandler", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setAceKeyboardHandler"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setAceTheme", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setAceTheme"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setAceFontSize", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setAceFontSize"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setAceTabSize", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setAceTabSize"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setAceLineNumberVisible", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setAceLineNumberVisible"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setAcePrintMarginVisible", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setAcePrintMarginVisible"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setAcePrintMarginSize", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setAcePrintMarginSize"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setBasicAutocompletion", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setBasicAutocompletion"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setLiveAutocompletion", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setLiveAutocompletion"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setSnippets", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setSnippets"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setAnnotations", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setAnnotations"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setUseWrapMode", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setUseWrapMode"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setIndentedSoftWrap", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setIndentedSoftWrap"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "blockScroll", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "blockScroll"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setFoldStyle", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setFoldStyle"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setHighlightActiveLine", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setHighlightActiveLine"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setHighlightGutterLine", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setHighlightGutterLine"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setShowGutter", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setShowGutter"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setScrollTop", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setScrollTop"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "addMarker", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "addMarker"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "removeMarker", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "removeMarker"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setTextRange", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setTextRange"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "removeLine", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "removeLine"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "insertAtLine", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "insertAtLine"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "replaceLine", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "replaceLine"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "addAceSessionEventListener", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "addAceSessionEventListener"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "addAceSessionChangeListener", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "addAceSessionChangeListener"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "addAceChangeListener", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "addAceChangeListener"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "addAceEventListener", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "addAceEventListener"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "focus", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "focus"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "gotoEnd", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "gotoEnd"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setUndoManager", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setUndoManager"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "setAceRendererOption", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "setAceRendererOption"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "insert", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "insert"), _class$E.prototype), _applyDecoratedDescriptor$h(_class$E.prototype, "append", [enqueueIfNotLoaded], Object.getOwnPropertyDescriptor(_class$E.prototype, "append"), _class$E.prototype)), _class$E);
  var StaticCodeHighlighterStyle = (_class2$7 = function (_StyleSheet) {
      inherits(StaticCodeHighlighterStyle, _StyleSheet);

      function StaticCodeHighlighterStyle() {
          var _ref;

          var _temp, _this5, _ret;

          classCallCheck(this, StaticCodeHighlighterStyle);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
          }

          return _ret = (_temp = (_this5 = possibleConstructorReturn(this, (_ref = StaticCodeHighlighterStyle.__proto__ || Object.getPrototypeOf(StaticCodeHighlighterStyle)).call.apply(_ref, [this].concat(args))), _this5), _initDefineProp$h(_this5, "hideActive", _descriptor$g, _this5), _temp), possibleConstructorReturn(_this5, _ret);
      }

      return StaticCodeHighlighterStyle;
  }(StyleSheet), (_descriptor$g = _applyDecoratedDescriptor$h(_class2$7.prototype, "hideActive", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              " .ace_gutter-active-line": {
                  display: "none"
              },
              " .ace_active-line": {
                  display: "none"
              },
              " .ace_cursor": {
                  display: "none"
              }
          };
      }
  })), _class2$7);
  var StaticCodeHighlighter = (_dec$j = registerStyle(StaticCodeHighlighterStyle), _dec$j(_class4$1 = function (_CodeEditor) {
      inherits(StaticCodeHighlighter, _CodeEditor);

      function StaticCodeHighlighter() {
          classCallCheck(this, StaticCodeHighlighter);
          return possibleConstructorReturn(this, (StaticCodeHighlighter.__proto__ || Object.getPrototypeOf(StaticCodeHighlighter)).apply(this, arguments));
      }

      createClass(StaticCodeHighlighter, [{
          key: "setOptions",
          value: function setOptions(options) {
              options = Object.assign({
                  fontSize: 13,
                  readOnly: true,
                  lineWrapping: true
              }, options);
              get(StaticCodeHighlighter.prototype.__proto__ || Object.getPrototypeOf(StaticCodeHighlighter.prototype), "setOptions", this).call(this, options);
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.hideActive);
          }
      }]);
      return StaticCodeHighlighter;
  }(CodeEditor)) || _class4$1);

  var _class$F, _descriptor$h, _dec$k, _class3$c;

  function _initDefineProp$i(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$i(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var getPathPrefix = function getPathPrefix() {
      return window.location.hostname === "localhost" ? "../../" : "dbribeapp/";
  };

  var transitionDelay = .9;

  var getTransitionDelay = function getTransitionDelay() {
      transitionDelay += .1;
      return transitionDelay;
  };

  var ImportedSVG = function (_Image) {
      inherits(ImportedSVG, _Image);

      function ImportedSVG() {
          classCallCheck(this, ImportedSVG);
          return possibleConstructorReturn(this, (ImportedSVG.__proto__ || Object.getPrototypeOf(ImportedSVG)).apply(this, arguments));
      }

      createClass(ImportedSVG, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return Object.assign({}, get(ImportedSVG.prototype.__proto__ || Object.getPrototypeOf(ImportedSVG.prototype), "getDefaultOptions", this).call(this), {
                  src: getPathPrefix() + "static/svg/" + this.getSVGName() + ".svg"
              });
          }
      }, {
          key: "getSVGName",
          value: function getSVGName() {
              return this.options.svgName;
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              get(ImportedSVG.prototype.__proto__ || Object.getPrototypeOf(ImportedSVG.prototype), "extraNodeAttributes", this).call(this, attr);
              attr.setStyle({
                  opacity: 0,
                  transform: "translateY(-69px)",
                  backdropFilter: "blur(10px)",
                  transition: "transform, opacity, backdrop-filter",
                  transitionDuration: "1s",
                  transitionTimingFunction: "ease",
                  transitionDelay: getTransitionDelay() + "s"
              });
          }
      }, {
          key: "onMount",
          value: function onMount() {
              var _this2 = this;

              get(ImportedSVG.prototype.__proto__ || Object.getPrototypeOf(ImportedSVG.prototype), "onMount", this).call(this);
              setTimeout(function () {
                  _this2.setStyle({
                      opacity: 1,
                      transform: "translateY(0)",
                      backdropFilter: "blur(0)"
                  });
              });
          }
      }]);
      return ImportedSVG;
  }(Image);

  var LogoStyle = (_class$F = function (_StyleSheet) {
      inherits(LogoStyle, _StyleSheet);

      function LogoStyle() {
          var _ref;

          var _temp, _this3, _ret;

          classCallCheck(this, LogoStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this3 = possibleConstructorReturn(this, (_ref = LogoStyle.__proto__ || Object.getPrototypeOf(LogoStyle)).call.apply(_ref, [this].concat(args))), _this3), _initDefineProp$i(_this3, "logo", _descriptor$h, _this3), _temp), possibleConstructorReturn(_this3, _ret);
      }

      return LogoStyle;
  }(StyleSheet), (_descriptor$h = _applyDecoratedDescriptor$i(_class$F.prototype, "logo", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              display: "inline-block",
              margin: "20px",
              height: "80px",
              width: "80px",
              transitionProperty: "transform",
              transitionTimingFunction: "ease",
              transform: "translateY(0) scale(1)",
              transitionDuration: ".3s",
              ":hover": {
                  transform: "translateY(-8px) scale(1.1)"
              }
          };
      }
  })), _class$F);

  var Logo = (_dec$k = registerStyle(LogoStyle), _dec$k(_class3$c = function (_Link) {
      inherits(Logo, _Link);

      function Logo() {
          classCallCheck(this, Logo);
          return possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
      }

      createClass(Logo, [{
          key: "getDefaultOptions",
          value: function getDefaultOptions() {
              return Object.assign({}, get(Logo.prototype.__proto__ || Object.getPrototypeOf(Logo.prototype), "getDefaultOptions", this).call(this), {
                  href: this.getHref(),
                  newTab: true
              });
          }
      }, {
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              get(Logo.prototype.__proto__ || Object.getPrototypeOf(Logo.prototype), "extraNodeAttributes", this).call(this, attr);
              attr.addClass(this.styleSheet.logo);
          }
      }, {
          key: "render",
          value: function render() {
              return [UI.createElement(ImportedSVG, { svgName: this.getSVGName() })];
          }
      }]);
      return Logo;
  }(Link)) || _class3$c);

  var MediumLogo = function (_Logo) {
      inherits(MediumLogo, _Logo);

      function MediumLogo() {
          classCallCheck(this, MediumLogo);
          return possibleConstructorReturn(this, (MediumLogo.__proto__ || Object.getPrototypeOf(MediumLogo)).apply(this, arguments));
      }

      createClass(MediumLogo, [{
          key: "getSVGName",
          value: function getSVGName() {
              return "medium";
          }
      }, {
          key: "getHref",
          value: function getHref() {
              return "https://medium.com/@dbribe";
          }
      }]);
      return MediumLogo;
  }(Logo);

  var FacebookLogo = function (_Logo2) {
      inherits(FacebookLogo, _Logo2);

      function FacebookLogo() {
          classCallCheck(this, FacebookLogo);
          return possibleConstructorReturn(this, (FacebookLogo.__proto__ || Object.getPrototypeOf(FacebookLogo)).apply(this, arguments));
      }

      createClass(FacebookLogo, [{
          key: "getSVGName",
          value: function getSVGName() {
              return "facebook";
          }
      }, {
          key: "getHref",
          value: function getHref() {
              return "https://www.facebook.com/k1r496";
          }
      }]);
      return FacebookLogo;
  }(Logo);

  var GitHubLogo = function (_Logo3) {
      inherits(GitHubLogo, _Logo3);

      function GitHubLogo() {
          classCallCheck(this, GitHubLogo);
          return possibleConstructorReturn(this, (GitHubLogo.__proto__ || Object.getPrototypeOf(GitHubLogo)).apply(this, arguments));
      }

      createClass(GitHubLogo, [{
          key: "getSVGName",
          value: function getSVGName() {
              return "github";
          }
      }, {
          key: "getHref",
          value: function getHref() {
              return "https://github.com/dbribe";
          }
      }]);
      return GitHubLogo;
  }(Logo);

  var InstagramLogo = function (_Logo4) {
      inherits(InstagramLogo, _Logo4);

      function InstagramLogo() {
          classCallCheck(this, InstagramLogo);
          return possibleConstructorReturn(this, (InstagramLogo.__proto__ || Object.getPrototypeOf(InstagramLogo)).apply(this, arguments));
      }

      createClass(InstagramLogo, [{
          key: "getSVGName",
          value: function getSVGName() {
              return "instagram";
          }
      }, {
          key: "getHref",
          value: function getHref() {
              return "https://www.instagram.com/dbribe/";
          }
      }]);
      return InstagramLogo;
  }(Logo);

  var LinkedInLogo = function (_Logo5) {
      inherits(LinkedInLogo, _Logo5);

      function LinkedInLogo() {
          classCallCheck(this, LinkedInLogo);
          return possibleConstructorReturn(this, (LinkedInLogo.__proto__ || Object.getPrototypeOf(LinkedInLogo)).apply(this, arguments));
      }

      createClass(LinkedInLogo, [{
          key: "getSVGName",
          value: function getSVGName() {
              return "linkedin";
          }
      }, {
          key: "getHref",
          value: function getHref() {
              return "https://www.linkedin.com/in/denis-mita/";
          }
      }]);
      return LinkedInLogo;
  }(Logo);

  var PinterestLogo = function (_Logo6) {
      inherits(PinterestLogo, _Logo6);

      function PinterestLogo() {
          classCallCheck(this, PinterestLogo);
          return possibleConstructorReturn(this, (PinterestLogo.__proto__ || Object.getPrototypeOf(PinterestLogo)).apply(this, arguments));
      }

      createClass(PinterestLogo, [{
          key: "getSVGName",
          value: function getSVGName() {
              return "pinterest";
          }
      }, {
          key: "getHref",
          value: function getHref() {
              return "https://www.pinterest.co.uk/skywalkerrr1996/";
          }
      }]);
      return PinterestLogo;
  }(Logo);

  var TwitterLogo = function (_Logo7) {
      inherits(TwitterLogo, _Logo7);

      function TwitterLogo() {
          classCallCheck(this, TwitterLogo);
          return possibleConstructorReturn(this, (TwitterLogo.__proto__ || Object.getPrototypeOf(TwitterLogo)).apply(this, arguments));
      }

      createClass(TwitterLogo, [{
          key: "getSVGName",
          value: function getSVGName() {
              return "twitter";
          }
      }, {
          key: "getHref",
          value: function getHref() {
              return "https://twitter.com/d_bribe";
          }
      }]);
      return TwitterLogo;
  }(Logo);

  var YouTubeLogo = function (_Logo8) {
      inherits(YouTubeLogo, _Logo8);

      function YouTubeLogo() {
          classCallCheck(this, YouTubeLogo);
          return possibleConstructorReturn(this, (YouTubeLogo.__proto__ || Object.getPrototypeOf(YouTubeLogo)).apply(this, arguments));
      }

      createClass(YouTubeLogo, [{
          key: "getSVGName",
          value: function getSVGName() {
              return "youtube";
          }
      }, {
          key: "getHref",
          value: function getHref() {
              return "https://www.youtube.com/channel/UC0k47b8_h6x2I7R5vMTLpMg?view_as=subscriber";
          }
      }]);
      return YouTubeLogo;
  }(Logo);

  var Shadow = function (_ImportedSVG) {
      inherits(Shadow, _ImportedSVG);

      function Shadow() {
          classCallCheck(this, Shadow);
          return possibleConstructorReturn(this, (Shadow.__proto__ || Object.getPrototypeOf(Shadow)).apply(this, arguments));
      }

      createClass(Shadow, [{
          key: "getSVGName",
          value: function getSVGName() {
              return "shadow";
          }
      }]);
      return Shadow;
  }(ImportedSVG);

  var DBribe = function (_ImportedSVG2) {
      inherits(DBribe, _ImportedSVG2);

      function DBribe() {
          classCallCheck(this, DBribe);
          return possibleConstructorReturn(this, (DBribe.__proto__ || Object.getPrototypeOf(DBribe)).apply(this, arguments));
      }

      createClass(DBribe, [{
          key: "getSVGName",
          value: function getSVGName() {
              return "dbribe";
          }
      }]);
      return DBribe;
  }(ImportedSVG);

  var _class$G, _descriptor$i, _dec$l, _class3$d;

  function _initDefineProp$j(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }

  function _applyDecoratedDescriptor$j(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }

      return desc;
  }

  var IndexPageStyle = (_class$G = function (_StyleSheet) {
      inherits(IndexPageStyle, _StyleSheet);

      function IndexPageStyle() {
          var _ref;

          var _temp, _this, _ret;

          classCallCheck(this, IndexPageStyle);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = IndexPageStyle.__proto__ || Object.getPrototypeOf(IndexPageStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$j(_this, "container", _descriptor$i, _this), _temp), possibleConstructorReturn(_this, _ret);
      }

      return IndexPageStyle;
  }(StyleSheet), (_descriptor$i = _applyDecoratedDescriptor$j(_class$G.prototype, "container", [styleRule], {
      enumerable: true,
      initializer: function initializer() {
          return {
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
          };
      }
  })), _class$G);

  var IndexPage = (_dec$l = registerStyle(IndexPageStyle), _dec$l(_class3$d = function (_UI$Element) {
      inherits(IndexPage, _UI$Element);

      function IndexPage() {
          classCallCheck(this, IndexPage);
          return possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
      }

      createClass(IndexPage, [{
          key: "extraNodeAttributes",
          value: function extraNodeAttributes(attr) {
              attr.addClass(this.styleSheet.container);
          }
      }, {
          key: "render",
          value: function render() {
              return [UI.createElement(
                  "div",
                  { style: { flex: 1, width: "-webkit-fill-available", maxWidth: "550px", padding: "30px", paddingTop: 0 } },
                  UI.createElement(DBribe, { style: { display: "block", margin: "10vh auto", marginBottom: "5vh", width: "100%" } })
              ), UI.createElement(
                  "div",
                  { style: { minHeight: "40vh", margin: "0 auto", textAlign: "center" } },
                  UI.createElement(YouTubeLogo, null),
                  UI.createElement(LinkedInLogo, null),
                  UI.createElement(FacebookLogo, null),
                  UI.createElement(InstagramLogo, null),
                  UI.createElement(TwitterLogo, null),
                  UI.createElement(MediumLogo, null),
                  UI.createElement(PinterestLogo, null),
                  UI.createElement(GitHubLogo, null),
                  UI.createElement("iframe", { src: "http://localhost:8080/iframe" })
              )];
          }
      }]);
      return IndexPage;
  }(UI.Element)) || _class3$d);

  var MAIN_ROUTE = new Route("", IndexPage, []);

  Theme.Global.setProperties({
      NAV_MANAGER_NAVBAR_HEIGHT: 0,
      COLOR_BACKGROUND: "#fff",
      COLOR_BACKGROUND_BODY: "#fff"
  });

  var AppClass = function (_EstablishmentApp) {
      inherits(AppClass, _EstablishmentApp);

      function AppClass() {
          classCallCheck(this, AppClass);
          return possibleConstructorReturn(this, (AppClass.__proto__ || Object.getPrototypeOf(AppClass)).apply(this, arguments));
      }

      createClass(AppClass, [{
          key: "getRoutes",
          value: function getRoutes() {
              return MAIN_ROUTE;
          }
      }], [{
          key: "registerWebsocketStreams",
          value: function registerWebsocketStreams() {}
      }]);
      return AppClass;
  }(EstablishmentApp.EstablishmentApp);

  var State = function (_Dispatchable) {
      inherits(State, _Dispatchable);

      function State() {
          classCallCheck(this, State);

          var _this = possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this));

          _this.stores = new Map();
          // A version of applyEvent that's binded to this
          // TODO: applyEvent should use the @bind decorator
          _this.applyEventWrapper = function (event) {
              _this.applyEvent(event);
          };
          return _this;
      }

      createClass(State, [{
          key: "getStore",
          value: function getStore(objectType) {
              objectType = objectType && objectType.toLowerCase();
              return this.stores.get(objectType);
          }
      }, {
          key: "getStoreForEvent",
          value: function getStoreForEvent(event) {
              var objectType = event.objectType || event.store;
              return this.getStore(objectType);
          }
      }, {
          key: "addStore",
          value: function addStore(store) {
              var objectType = store.objectType.toLowerCase();
              if (!this.stores.has(objectType)) {
                  this.stores.set(objectType, store);
              } else {
                  throw Error("GlobalState: Adding a store for an existing object type: " + store.objectType);
              }
          }
      }, {
          key: "applyEvent",
          value: function applyEvent(event) {
              if (event == null) {
                  return;
              }
              if (Array.isArray(event)) {
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                      for (var _iterator = event[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                          var individualEvent = _step.value;

                          this.applyEvent(individualEvent);
                      }
                  } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                          }
                      } finally {
                          if (_didIteratorError) {
                              throw _iteratorError;
                          }
                      }
                  }

                  return;
              }
              if (event.state) {
                  this.importState(event.state);
                  // We can have events that only have a state
                  if (!this.getStoreForEvent(event)) {
                      return;
                  }
              }
              var store = this.getStoreForEvent(event);
              if (store) {
                  return store.applyEvent(event);
              } else {
                  console.log("GlobalState: Missing store for event: ", event);
              }
          }
      }, {
          key: "get",
          value: function get$$1(objectType, objectId) {
              var store = this.getStore(objectType);
              if (store) {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return store.get.apply(store, toConsumableArray(args));
              } else {
                  console.error("GlobalState: Can't find store ", objectType);
                  return null;
              }
          }

          // Import the store for objectType and remove it from stateMap

      }, {
          key: "importStateFromTempMap",
          value: function importStateFromTempMap(objectType, stateMap) {
              var storeState = stateMap.get(objectType);
              stateMap.delete(objectType);

              var store = this.getStore(objectType);

              if (!store) {
                  console.error("Failed to import state, can't find store ", objectType);
                  return;
              }
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = store.getDependencies()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var dependency = _step2.value;

                      this.importStateFromTempMap(dependency.toLowerCase(), stateMap);
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }

              store.importState(storeState);
          }

          // Imports the state information from a plain object

      }, {
          key: "importState",
          value: function importState(state) {
              if (Array.isArray(state)) {
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;

                  try {
                      for (var _iterator3 = state[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                          var obj = _step3.value;

                          this.importState(obj);
                      }
                  } catch (err) {
                      _didIteratorError3 = true;
                      _iteratorError3 = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion3 && _iterator3.return) {
                              _iterator3.return();
                          }
                      } finally {
                          if (_didIteratorError3) {
                              throw _iteratorError3;
                          }
                      }
                  }

                  return;
              }
              // Import everything in a map and then do an implicit topological sort by dependencies
              var stateMap = new Map();
              for (var objectType in state) {
                  stateMap.set(objectType.toLowerCase(), state[objectType]);
              }
              while (stateMap.size > 0) {
                  var allKeys = stateMap.keys();
                  var _objectType = allKeys.next().value;
                  this.importStateFromTempMap(_objectType, stateMap);
              }
          }
      }]);
      return State;
  }(Dispatchable);

  var GlobalState = new State();

  // When creating a store without an explicit state, this value should be assumes
  // Change it to null for instance of you don't want stores to be added to any state by default
  var DefaultState = GlobalState;

  self.GlobalState = GlobalState;

  exports.AppClass = AppClass;
  exports.State = State;
  exports.GlobalState = GlobalState;
  exports.DefaultState = DefaultState;

  return exports;

}({},BlogPanel,ForumPanel,EstablishmentApp));
//# sourceMappingURL=bundle.js.map
