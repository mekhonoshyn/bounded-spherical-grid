module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        Object.assign(this, {x, y, z});
    }
    set xyz({x: bx = 0, y: by = 0, z: bz = 0, 0: x = bx, 1: y = by, 2: z = bz}) {
        Object.assign(this, {x, y, z});
    }
    get length() {
        const {x, y, z} = this;

        return Math.hypot(x, y, z);
    }
    normalize() {
        return this.constructor.normalize(this, this);
    }
    add(u) {
        return this.constructor.add(this, u, this);
    }
    static eq(v, u) {
        const {x: vx, y: vy, z: vz} = v;
        const {x: ux, y: uy, z: uz} = u;

        return vx === ux && vy === uy && vz === uz;
    }
    static neq(v, u) {
        return !this.eq(v, u);
    }
    static add(v, u, destination = new Vector3()) {
        const {x: vx, y: vy, z: vz} = v;
        const {x: ux, y: uy, z: uz} = u;

        return Object.assign(destination, {x: vx + ux, y: vy + uy, z: vz + uz});
    }
    static subtract(v, u, destination = new Vector3()) {
        const {x: vx, y: vy, z: vz} = v;
        const {x: ux, y: uy, z: uz} = u;

        return Object.assign(destination, {x: vx - ux, y: vy - uy, z: vz - uz});
    }
    static multiply(v, k, destination = new Vector3()) {
        const {x: vx, y: vy, z: vz} = v;

        return Object.assign(destination, {x: vx * k, y: vy * k, z: vz * k});
    }
    static isZero(v) {
        return this.eq(v, ZERO);
    }
    static isParallel(v, u) {
        return this.isZero(this.crossProduct(v, u));
    }
    static normalize(v, destination = new Vector3()) {
        return this.multiply(v, 1 / v.length, destination);
    }
    static crossProduct(v, u) {
        const {x: vx, y: vy, z: vz} = v;
        const {x: ux, y: uy, z: uz} = u;

        return new Vector3(vy * uz - vz * uy, vz * ux - vx * uz, vx * uy - vy * ux);
    }
    static dotProduct(v, u) {
        const {x: vx, y: vy, z: vz} = v;
        const {x: ux, y: uy, z: uz} = u;

        return vx * ux + vy * uy + vz * uz;
    }
    static distance(v, u) {
        return this.subtract(v, u).length;
    }
    static angle(v, u) {
        return Math.acos(this.dotProduct(v, u) / (v.length * u.length));
    }
    static get ZERO() {
        return ZERO;
    }
}

const ZERO = new Vector3();

/* harmony default export */ __webpack_exports__["a"] = (Vector3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector3__ = __webpack_require__(0);


class Corner {
    constructor(id) {
        Object.assign(this, {
            id,
            corners: new Array(3),
            edges: new Array(3),
            tiles: new Array(3),
            vector: new __WEBPACK_IMPORTED_MODULE_0__vector3__["a" /* default */]()
        });
    }
    position(instance) {
        switch (instance.constructor) {
            case Corner: {
                return this.corners.indexOf(instance);
            }
            default: {
                console.error(this, instance, `instance class should be one of the following: ${Corner.name}`);
                return -1;
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Corner);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const proxyHandler = {
    get: (target, property) => {
        const fixedProperty = isInteger(property)
            ? normalizeIndex(+property, target.length)
            : property;

        return target[fixedProperty];
    },
    set: (target, property, value) => {
        const fixedProperty = isInteger(property)
            ? normalizeIndex(+property, target.length)
            : property;

        target[fixedProperty] = value;

        return true;
    }
};

class Stack extends Array {
    constructor(firstArg, ...restArgs) {
        super(firstArg, ...restArgs);

        if (isInteger(firstArg) && !restArgs.length) {
            this.fill(null);
        }

        return new Proxy(this, proxyHandler);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Stack);

function isInteger(value) {
    return typeof value === 'string'
        ? Number.isInteger(+value)
        : Number.isInteger(value)
}

function normalizeIndex(index, length) {
    return (index % length + length) % length;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__corner__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edge__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tile__ = __webpack_require__(5);




class Grid {
    constructor(lod) {
        Object.assign(this, {
            lod,
            corners: createCorners(lod),
            edges: createEdges(lod),
            tiles: createTiles(lod)
        });
    }
    static cornersCount(lod) {
        return 20 * Math.pow(3, lod);
    }
    static edgesCount(lod) {
        return 30 * Math.pow(3, lod) + 2;
    }
    static tilesCount(lod) {
        return 10 * Math.pow(3, lod) + 2;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Grid);

function createCorners(lod) {
    const cornersCount = Grid.cornersCount(lod);

    return new Array(cornersCount).fill(0).map((item, index) => new __WEBPACK_IMPORTED_MODULE_0__corner__["a" /* default */](index));
}

function createEdges(lod) {
    const edgesCount = Grid.edgesCount(lod);

    return new Array(edgesCount).fill(0).map((item, index) => new __WEBPACK_IMPORTED_MODULE_1__edge__["a" /* default */](index));
}

function createTiles(lod) {
    const tileCount = Grid.tilesCount(lod);

    return new Array(tileCount).fill(0).map((item, index) => new __WEBPACK_IMPORTED_MODULE_2__tile__["a" /* default */](index, index < 12 ? 5 : 6));
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Edge {
    constructor(id) {
        Object.assign(this, {
            id,
            corners: new Array(2),
            tiles: new Array(2)
        });
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Edge);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__corner__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_stack__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vector3__ = __webpack_require__(0);




class Tile {
    constructor(id, edgesCount) {
        Object.assign(this, {
            id,
            edgesCount,
            corners: new __WEBPACK_IMPORTED_MODULE_1__utils_stack__["a" /* default */](edgesCount),
            edges: new Array(edgesCount),
            tiles: new __WEBPACK_IMPORTED_MODULE_1__utils_stack__["a" /* default */](edgesCount),
            vector: new __WEBPACK_IMPORTED_MODULE_2__vector3__["a" /* default */]()
        });
    }
    position(instance) {
        switch (instance.constructor) {
            case __WEBPACK_IMPORTED_MODULE_0__corner__["a" /* default */]: {
                return this.corners.indexOf(instance);
            }
            case Tile: {
                return this.tiles.indexOf(instance);
            }
            default: {
                console.error(this, instance, `instance class should be one of the following: ${__WEBPACK_IMPORTED_MODULE_0__corner__["a" /* default */].name} or ${Tile.name}`);
                return -1;
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Tile);


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_classes_grid__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_classes_vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_utils_stack__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_0__src_classes_grid__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Vector3", function() { return __WEBPACK_IMPORTED_MODULE_1__src_classes_vector3__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return __WEBPACK_IMPORTED_MODULE_2__src_utils_stack__["a"]; });







/***/ })
/******/ ]);