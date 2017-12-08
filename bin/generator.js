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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_json__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__settings_json__);
/* global require */



/* harmony default export */ __webpack_exports__["default"] = (initializer);

function initializer(profile = __WEBPACK_IMPORTED_MODULE_0__settings_json___default.a.default) {
    if (typeof profile === 'string') {
        if (__WEBPACK_IMPORTED_MODULE_0__settings_json___default.a.all.includes(profile)) {
            return __webpack_require__(8)(`./${profile}`);
        } else {
            return __webpack_require__(8)(`./${settings.default}`);
        }
    } else {
        return profile;
    }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"all":["none","measure"],"default":"none"}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./measure": 9,
	"./measure.js": 9,
	"./none": 10,
	"./none.js": 10,
	"./profiler": 6,
	"./profiler.js": 6,
	"./settings": 7,
	"./settings.json": 7
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 8;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entryPoint", function() { return entryPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utility", function() { return utility; });
/* global global, performance */



function entryPoint(fn) {
    return profiler(fn);
}

function utility(fn) {
    return profiler(fn);
}

function profiler(fn) {
    const DEFAULT_META = {times: 0, total: 0, mean: 0};
    const {name} = fn;

    return (...args) => {
        const [probablyMeta = {$$meta: 0}] = args.slice(-1);
        const params = probablyMeta.$$meta ? args.slice(0, -1) : args;

        if (probablyMeta.$$meta) {
            if (!probablyMeta.args) {
                probablyMeta.args = args.slice(0, -1);
            }

            if (!probablyMeta.times) {
                probablyMeta.times = 0;
            }

            global.gridMeta = probablyMeta;

            if (!probablyMeta.startTime) {
                probablyMeta.startTime = performance.now();
            }
        }

        const startTime = performance.now();
        const result = fn(...params);
        const endTime = performance.now();

        const meta = global.gridMeta || {};

        if (!meta[name]) {
            meta[name] = Object.assign({}, DEFAULT_META);
        }

        meta[name].times++;
        meta[name].total += endTime - startTime;
        meta[name].mean = meta[name].total / meta[name].times;

        if (probablyMeta.$$meta) {
            probablyMeta.endTime = performance.now();
            probablyMeta.totalTime = probablyMeta.endTime - probablyMeta.startTime;
            probablyMeta.times++;
            probablyMeta.meanTime = probablyMeta.totalTime / probablyMeta.times;

            delete global.gridMeta;
        }

        return result;
    };
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entryPoint", function() { return entryPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utility", function() { return utility; });


function entryPoint(fn) {
    return fn;
}

function utility(fn) {
    return fn;
}


/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_generator__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GridFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__src_generator__["a"]; });





/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_icosahedron_vertices__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_icosahedron_tile_tiles_json__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_icosahedron_tile_tiles_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__constants_icosahedron_tile_tiles_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_icosahedron_edge_tiles_json__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_icosahedron_edge_tiles_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__constants_icosahedron_edge_tiles_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_icosahedron_corner_tiles_json__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_icosahedron_corner_tiles_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants_icosahedron_corner_tiles_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profiler_profiler__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_grid__ = __webpack_require__(3);








const api = {};

/* harmony default export */ __webpack_exports__["a"] = (initializer);

function initializer({profile} = {}) {
    const {entryPoint, utility} = Object(__WEBPACK_IMPORTED_MODULE_4__profiler_profiler__["default"])(profile);

    Object.assign(api, {
        generateGrid: entryPoint($generateGrid),
        createNLevelGrid: utility($createNLevelGrid),
        create0LevelGrid: utility($create0LevelGrid),
        subdivideGrid: utility($subdivideGrid),
        addCorner: utility($addCorner),
        addEdge: utility($addEdge)
    });

    return {
        generateGrid: api.generateGrid,
        subdivideGrid: api.subdivideGrid
    };
}

function $generateGrid(lod = 0) {
    return lod
        ? api.createNLevelGrid(lod)
        : api.create0LevelGrid(lod);
}

function $createNLevelGrid(lod = 0) {
    return lod
        ? api.subdivideGrid(api.createNLevelGrid(lod - 1))
        : api.create0LevelGrid(lod);
}

function $create0LevelGrid(lod) {
    const grid = new __WEBPACK_IMPORTED_MODULE_5__classes_grid__["a" /* default */](lod);
    const {corners: dCorners, tiles: dTiles} = grid;

    dTiles.forEach((dTile) => {
        const {id: dTileId, tiles: dTileTiles, vector: dTileVector} = dTile;

        dTileVector.xyz = __WEBPACK_IMPORTED_MODULE_0__constants_icosahedron_vertices__["a" /* default */][dTileId];

        for (let k = 0; k < 5; k++) {
            dTileTiles[k] = dTiles[__WEBPACK_IMPORTED_MODULE_1__constants_icosahedron_tile_tiles_json___default.a[dTileId][k]];
        }
    });

    __WEBPACK_IMPORTED_MODULE_3__constants_icosahedron_corner_tiles_json___default.a.forEach((tileIds, cornerId) => {
        api.addCorner(cornerId, grid, ...tileIds);
    });

    dCorners.forEach((dCorner) => {
        const {corners: dCornerCorners, tiles: dCornerTiles} = dCorner;

        for (let k = 0; k < 3; k++) {
            dCornerCorners[k] = dCornerTiles[k].corners[dCornerTiles[k].position(dCorner) + 1];
        }
    });

    __WEBPACK_IMPORTED_MODULE_2__constants_icosahedron_edge_tiles_json___default.a.forEach((tileIds, edgeId) => {
        api.addEdge(edgeId, grid, ...tileIds);
    });

    return grid;
}

function $subdivideGrid({lod: sLod, tiles: sTiles, corners: sCorners}) {
    const dGrid = new __WEBPACK_IMPORTED_MODULE_5__classes_grid__["a" /* default */](sLod + 1);
    const {corners: dCorners, tiles: dTiles} = dGrid;
    const {length: sTilesCount} = sTiles;
    const {length: sCornersCount} = sCorners;

    let nextCornerId = 0;
    let nextEdgeId = 0;

    for (let i = 0; i < sTilesCount; i++) {
        const {corners: sTileCorners, vector: sTileVector} = sTiles[i];
        const {edgesCount: dTileEdgesCount, tiles: dTileTiles, vector: dTileVector} = dTiles[i];

        dTileVector.xyz = sTileVector;

        for (let k = 0; k < dTileEdgesCount; k++) {
            dTileTiles[k] = dTiles[sTileCorners[k].id + sTilesCount];
        }
    }

    for (let i = 0; i < sCornersCount; i++) {
        const {corners: sCornerCorners, tiles: sCornerTiles, vector: sCornerVector} = sCorners[i];
        const {tiles: dTileTiles, vector: dTileVector} = dTiles[i + sTilesCount];

        dTileVector.xyz = sCornerVector;

        for (let k = 0; k < 3; k++) {
            dTileTiles[2 * k] = dTiles[sCornerCorners[k].id + sTilesCount];
            dTileTiles[2 * k + 1] = dTiles[sCornerTiles[k].id];
        }
    }

    sTiles.forEach((sTile) => {
        const {id: sTileId} = sTile;
        const {id: dTileId, edgesCount: dTileEdgesCount, tiles: dTileTiles} = dTiles[sTileId];

        for (let k = 0; k < dTileEdgesCount; k++) {
            api.addCorner(nextCornerId++, dGrid, dTileId, dTileTiles[k - 1].id, dTileTiles[k].id);
        }
    });

    dCorners.forEach((dCorner) => {
        const {corners: dCornerCorners, tiles: dCornerTiles} = dCorner;

        for (let k = 0; k < 3; k++) {
            dCornerCorners[k] = dCornerTiles[k].corners[dCornerTiles[k].position(dCorner) + 1];
        }
    });

    dTiles.forEach((dTile) => {
        const {id: dTileId, edgesCount: dTileEdgesCount, edges: dTileEdges, tiles: dTileTiles} = dTile;

        for (let k = 0; k < dTileEdgesCount; k++) {
            if (!dTileEdges[k]) {
                api.addEdge(nextEdgeId++, dGrid, dTileId, dTileTiles[k].id);
            }
        }
    });

    return dGrid;
}

function $addCorner(cornerId, {tiles, corners}, tileIndexA, tileIndexB, tileIndexC) {
    const corner = corners[cornerId];
    const tileA = tiles[tileIndexA];
    const tileB = tiles[tileIndexB];
    const tileC = tiles[tileIndexC];

    corner.vector.add(tileA.vector).add(tileB.vector).add(tileC.vector).normalize();

    tileA.corners[tileA.position(tileC)] =
    tileB.corners[tileB.position(tileA)] =
    tileC.corners[tileC.position(tileB)] = corner;

    corner.tiles[0] = tileA;
    corner.tiles[1] = tileB;
    corner.tiles[2] = tileC;
}

function $addEdge(edgeId, {corners, edges, tiles}, tileIndexA, tileIndexB) {
    const edge = edges[edgeId];
    const tileA = tiles[tileIndexA];
    const tileB = tiles[tileIndexB];
    const tileBIndexInTileA = tileA.position(tileB);
    const cornerA = corners[tileA.corners[tileBIndexInTileA].id];
    const cornerB = corners[tileA.corners[tileBIndexInTileA + 1].id];

    tileA.edges[tileBIndexInTileA] =
    tileB.edges[tileB.position(tileA)] =
    cornerA.edges[cornerA.position(cornerB)] =
    cornerB.edges[cornerB.position(cornerA)] = edge;

    edge.tiles[0] = tileA;
    edge.tiles[1] = tileB;

    edge.corners[0] = cornerA;
    edge.corners[1] = cornerB;
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const x = 0.525731112119133606;
const z = 0.850650808352039932;

/* harmony default export */ __webpack_exports__["a"] = ([
    [ x,  0, -z],
    [-x,  0, -z],
    [ x,  0,  z],
    [-x,  0,  z],
    [ 0, -z, -x],
    [ 0, -z,  x],
    [ 0,  z, -x],
    [ 0,  z,  x],
    [-z, -x,  0],
    [ z, -x,  0],
    [-z,  x,  0],
    [ z,  x,  0]
]);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = [[9,4,1,6,11],[4,8,10,6,0],[11,7,3,5,9],[2,7,10,8,5],[9,5,8,1,0],[2,3,8,4,9],[0,1,10,7,11],[11,6,10,3,2],[5,3,10,1,4],[2,5,4,0,11],[3,7,6,1,8],[7,2,9,0,6]]

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = [[0,9],[0,4],[0,1],[0,6],[0,11],[1,4],[1,8],[1,10],[1,6],[2,11],[2,7],[2,3],[2,5],[2,9],[3,7],[3,10],[3,8],[3,5],[4,9],[4,5],[4,8],[5,8],[5,9],[6,10],[6,7],[6,11],[7,11],[7,10],[8,10],[9,11]]

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = [[0,9,4],[0,11,9],[0,4,1],[0,1,6],[0,6,11],[3,5,2],[3,2,7],[3,7,10],[3,10,8],[3,8,5],[10,1,8],[1,10,6],[6,10,7],[6,7,11],[11,7,2],[11,2,9],[9,2,5],[9,5,4],[4,5,8],[4,8,1]]

/***/ })
/******/ ]);