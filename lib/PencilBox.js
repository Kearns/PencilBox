(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PencilBox", [], factory);
	else if(typeof exports === 'object')
		exports["PencilBox"] = factory();
	else
		root["PencilBox"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getClientX = getClientX;
exports.getClientY = getClientY;
exports.getMousePos = getMousePos;
exports.calculateVelocity = calculateVelocity;
exports.clearCanvas = clearCanvas;
function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
}

function getClientY(e) {
    return e.touches ? e.touches[0].clientY : e.clientY;
}

function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();

    return {
        x: getClientX(e) - rect.left,
        y: getClientY(e) - rect.top
    };
}

function calculateVelocity(eInit, e) {

    if (e === false) {
        return false;
    }

    var xDist = getClientX(e) - eInit.clientX;
    var yDist = getClientY(e) - eInit.clientY;
    var interval = Date.now() - e.time;

    return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
}

function clearCanvas() {
    this.PencilBox.ctx.clearRect(0, 0, this.offsetWidth, this.offsetHeight);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createPencilBox;

var _PencilBox = __webpack_require__(2);

var _PencilBox2 = _interopRequireDefault(_PencilBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPencilBox(canvas) {
    return new _PencilBox2.default(canvas);
}
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_Utils);

var _Settings = __webpack_require__(3);

var _Settings2 = _interopRequireDefault(_Settings);

var _History = __webpack_require__(4);

var _DrawFunctions = __webpack_require__(5);

var _Brushes = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PencilBox = function PencilBox(canvas) {
	var _this = this;

	_classCallCheck(this, PencilBox);

	this.brush = _Brushes.pen;
	this.availableBrushes = { pen: _Brushes.pen, pencil: _Brushes.pencil };
	this.clear = utils.clearCanvas.bind(this);
	this.undo = _History.undo;
	this.updateStore = _History.updateStore;
	this.canvas = canvas;
	this.settings = _Settings2.default;
	this.selectBrush = _Brushes.selectBrush;
	this.setBrushSize = _Brushes.setBrushSize;
	this.onDrawStart = _DrawFunctions.onDrawStart;
	this.onDraw = _DrawFunctions.onDraw;
	this.onDrawEnd = _DrawFunctions.onDrawEnd;
	this.ctx = canvas.getContext('2d');
	this.ctx.fillStyle = 'black';
	this.ctx.strokeStyle = 'black';
	this.ctx.lineCap = 'round';

	/* Enable default event handlers */
	['mousedown', 'touchstart'].forEach(function (val) {
		return _this.canvas.addEventListener(val, function (e) {
			return _this.onDrawStart(e);
		}, false);
	});

	['mousemove', 'touchmove'].forEach(function (val) {
		return _this.canvas.addEventListener(val, function (e) {
			return _this.onDraw(e);
		}, false);
	});

	['mouseup', 'mouseleave', 'touchend'].forEach(function (val) {
		return _this.canvas.addEventListener(val, function (e) {
			return _this.onDrawEnd(e);
		}, false);
	});
};

exports.default = PencilBox;
;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var settings = {
    originPosition: { x: 0, y: 0 },
    mousePosition: [{}, {}, {}],
    isMouseActive: false,
    previousVelocity: 0,
    currentVelocity: 0,
    lineWidth: 5,
    brushType: 'pen',
    velocity: 0,
    previousEvent: false
};

exports.default = settings;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateStore = updateStore;
exports.undo = undo;
var store = [];
var index = -1;

function updateStore() {

    var step = new Image();

    step.src = this.canvas.toDataURL();
    store.push(step);
    index += 1;

    if (store.length >= 10) {
        store.shift();
    }
};

function undo() {
    this.PencilBox.clear();
    this.PencilBox.ctx.drawImage(store[index], 0, 0);
    index -= 1;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onDrawEnd = onDrawEnd;
exports.onDrawStart = onDrawStart;
exports.onDraw = onDraw;

var _Utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_Utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function onDrawEnd(e, callback) {

    e.preventDefault();
    this.ctx.closePath();
    this.settings.mousePosition = [{}, {}, {}];
    this.settings.isMouseActive = false;

    if (callback) {
        callback();
    }
};

function onDrawStart(e, callback) {

    e.preventDefault();
    this.updateStore();
    this.settings.isMouseActive = true;
    this.ctx.beginPath();
    this.ctx.moveTo(this.settings.mousePosition[0].x, this.settings.mousePosition[0].y);

    if (callback) {
        callback();
    }
};

function onDraw(e, callback) {
    e.preventDefault();

    if (!this.settings.isMouseActive) {
        return;
    }

    e.time = Date.now();
    this.settings.velocity = utils.calculateVelocity(e, this.settings.previousEvent);
    this.settings.mousePosition.shift();
    this.settings.mousePosition.push(utils.getMousePos(e.target, e));
    this.settings.previousEvent = e;

    this.brush();

    if (callback) {
        callback();
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectBrush = selectBrush;
exports.setBrushSize = setBrushSize;
exports.pen = pen;
exports.pencil = pencil;
function selectBrush(brushName) {
    this.settings.brush = this.availableBrushes[brushName];
};

function setBrushSize(brushSize) {
    this.settings.lineWidth = brushSize;
};

function pen() {

    var x = void 0,
        y = void 0;
    var mousePosition = this.settings.mousePosition;
    var lineWidth = this.settings.lineWidth;
    var velocity = this.settings.velocity;
    var ctx = this.ctx;

    ctx.lineWidth = lineWidth / velocity;

    if (ctx.lineWidth > lineWidth) {
        ctx.lineWidth = lineWidth;
    } else if (ctx.lineWidth < lineWidth / 5) {
        ctx.lineWidth = lineWidth / 5;
    }

    ctx.beginPath();

    x = (mousePosition[0].x + mousePosition[1].x) / 2;
    y = (mousePosition[0].y + mousePosition[1].y) / 2;

    ctx.moveTo(x, y);

    x = (mousePosition[1].x + mousePosition[2].x) / 2;
    y = (mousePosition[1].y + mousePosition[2].y) / 2;

    ctx.quadraticCurveTo(mousePosition[1].x, mousePosition[1].y, x, y);
    ctx.stroke();
};

function pencil() {

    var lineWidth = this.settings.lineWidth;
    var mousePosition = this.settings.mousePosition;
    var ctx = this.ctx;

    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(mousePosition[1].x, mousePosition[1].y);
    ctx.lineTo(mousePosition[2].x, mousePosition[2].y);
    ctx.stroke();
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=PencilBox.js.map