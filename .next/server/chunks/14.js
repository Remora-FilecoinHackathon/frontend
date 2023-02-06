"use strict";
exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 7905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ dynamics)
});

// NAMESPACE OBJECT: ./env-dynamics.mjs
var env_dynamics_namespaceObject = {};
__webpack_require__.r(env_dynamics_namespaceObject);
__webpack_require__.d(env_dynamics_namespaceObject, {
  "defaultChain": () => (defaultChain),
  "matomoHost": () => (matomoHost),
  "supportedChains": () => (supportedChains)
});

;// CONCATENATED MODULE: ./env-dynamics.mjs
/** @type string */ const matomoHost = process.env.MATOMO_HOST;
/** @type number */ const defaultChain = parseInt(process.env.DEFAULT_CHAIN, 10) || 1;
/** @type number[] */ const supportedChains = process.env?.SUPPORTED_CHAINS?.split(",").map((chainId)=>parseInt(chainId, 10)) ?? [
    1,
    4,
    5
];

;// CONCATENATED MODULE: ./config/dynamics.ts

/* harmony default export */ const dynamics = ( false ? 0 : env_dynamics_namespaceObject);


/***/ }),

/***/ 4501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports EXAMPLE_BY_NETWORK, getExampleAddress */
/* harmony import */ var _sdk_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sdk_constants__WEBPACK_IMPORTED_MODULE_0__]);
_sdk_constants__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const EXAMPLE_BY_NETWORK = {
    [_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.FilecoinMainnet */ .zG.FilecoinMainnet]: "0x0000000000000000000000000000000000000000",
    [_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.Wallaby */ .zG.Wallaby]: "0x004Dd3C4Aa6Fa56bb9d2d741b98E9Fe9868E04B2",
    [_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.Hyperspace */ .zG.Hyperspace]: "0x004Dd3C4Aa6Fa56bb9d2d741b98E9Fe9868E04B2"
};
const getExampleAddress = (chainId)=>{
    return EXAMPLE_BY_NETWORK[chainId];
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F0": () => (/* reexport safe */ _smartContract__WEBPACK_IMPORTED_MODULE_4__.F),
/* harmony export */   "IL": () => (/* reexport safe */ _rpc__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   "ju": () => (/* reexport safe */ _dynamics__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* unused harmony export serverRuntimeConfig */
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7905);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9692);
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4501);
/* harmony import */ var _smartContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rpc__WEBPACK_IMPORTED_MODULE_2__, _example__WEBPACK_IMPORTED_MODULE_3__, _smartContract__WEBPACK_IMPORTED_MODULE_4__]);
([_rpc__WEBPACK_IMPORTED_MODULE_2__, _example__WEBPACK_IMPORTED_MODULE_3__, _smartContract__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const { serverRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9692:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ backendRPC)
/* harmony export */ });
/* unused harmony export getBackendRPCPath */
/* harmony import */ var _sdk_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3566);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sdk_constants__WEBPACK_IMPORTED_MODULE_0__]);
_sdk_constants__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const { serverRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const { basePath  } = serverRuntimeConfig;
const getBackendRPCPath = (chainId)=>{
    return `${basePath ?? ""}/api/rpc?chainId=${chainId}`;
};
const backendRPC = {
    [_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.FilecoinMainnet */ .zG.FilecoinMainnet]: getBackendRPCPath(_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.FilecoinMainnet */ .zG.FilecoinMainnet),
    [_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.Wallaby */ .zG.Wallaby]: getBackendRPCPath(_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.Wallaby */ .zG.Wallaby),
    [_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.Hyperspace */ .zG.Hyperspace]: getBackendRPCPath(_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.Hyperspace */ .zG.Hyperspace)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getSmartContractAddress)
/* harmony export */ });
/* unused harmony export SMARTCONTRACT_BY_NETWORK */
/* harmony import */ var _sdk_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sdk_constants__WEBPACK_IMPORTED_MODULE_0__]);
_sdk_constants__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const SMARTCONTRACT_BY_NETWORK = {
    [_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.FilecoinMainnet */ .zG.FilecoinMainnet]: "00000",
    [_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.Wallaby */ .zG.Wallaby]: "00000",
    [_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS.Hyperspace */ .zG.Hyperspace]: "0x3f06D24C8F7F6E1eE99Db84A03b3563C89345A05"
};
const getSmartContractAddress = (chainId)=>{
    return SMARTCONTRACT_BY_NETWORK[chainId];
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EG": () => (/* binding */ getChainColor),
/* harmony export */   "zG": () => (/* binding */ CHAINS)
/* harmony export */ });
/* unused harmony exports CHAINS_IDS, CHAINS_COLORS */
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tiny_invariant__WEBPACK_IMPORTED_MODULE_0__]);
tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

var CHAINS;
(function(CHAINS) {
    CHAINS[CHAINS["FilecoinMainnet"] = 314] = "FilecoinMainnet";
    CHAINS[CHAINS["Wallaby"] = 31415] = "Wallaby";
    CHAINS[CHAINS["Hyperspace"] = 3141] = "Hyperspace";
})(CHAINS || (CHAINS = {}));
const CHAINS_IDS = [
    CHAINS.Hyperspace,
    CHAINS.Wallaby,
    CHAINS.FilecoinMainnet
];
const CHAINS_COLORS = {
    [CHAINS.Wallaby]: "#34F899",
    [CHAINS.Hyperspace]: "#34F899"
};
const getChainColor = (chainId)=>{
    const color = CHAINS_COLORS[chainId];
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(color != null, "Chain is not supported");
    return color;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EG": () => (/* reexport safe */ _chains__WEBPACK_IMPORTED_MODULE_0__.EG),
/* harmony export */   "zG": () => (/* reexport safe */ _chains__WEBPACK_IMPORTED_MODULE_0__.zG)
/* harmony export */ });
/* harmony import */ var _chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5711);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chains__WEBPACK_IMPORTED_MODULE_0__]);
_chains__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;