"use strict";
(() => {
var exports = {};
exports.id = 841;
exports.ids = [841];
exports.modules = {

/***/ 6950:
/***/ ((module) => {

module.exports = require("@lidofinance/next-api-wrapper");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = require("prom-client");

/***/ }),

/***/ 4281:
/***/ ((module) => {

module.exports = import("tiny-invariant");;

/***/ }),

/***/ 4895:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

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

/***/ 927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports EXAMPLE_BY_NETWORK, getExampleAddress */
/* harmony import */ var _sdk_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7358);
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

/***/ 9464:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rH": () => (/* reexport safe */ _metrics__WEBPACK_IMPORTED_MODULE_5__.r)
/* harmony export */ });
/* unused harmony export serverRuntimeConfig */
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dynamics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4895);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6230);
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(927);
/* harmony import */ var _smartContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5598);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rpc__WEBPACK_IMPORTED_MODULE_2__, _example__WEBPACK_IMPORTED_MODULE_3__, _smartContract__WEBPACK_IMPORTED_MODULE_4__]);
([_rpc__WEBPACK_IMPORTED_MODULE_2__, _example__WEBPACK_IMPORTED_MODULE_3__, _smartContract__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const { serverRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ METRICS_PREFIX)
/* harmony export */ });
const METRICS_PREFIX = "frontend_template_";


/***/ }),

/***/ 6230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports getBackendRPCPath, backendRPC */
/* harmony import */ var _sdk_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7358);
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

/***/ 2167:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports SMARTCONTRACT_BY_NETWORK, getSmartContractAddress */
/* harmony import */ var _sdk_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7358);
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

/***/ 4549:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sdk_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7358);
/* harmony import */ var _lidofinance_next_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6950);
/* harmony import */ var _lidofinance_next_api_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lidofinance_next_api_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_fetchWithFallbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6674);
/* harmony import */ var utils_serverLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sdk_constants__WEBPACK_IMPORTED_MODULE_0__, utils_fetchWithFallbacks__WEBPACK_IMPORTED_MODULE_3__]);
([_sdk_constants__WEBPACK_IMPORTED_MODULE_0__, utils_fetchWithFallbacks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const { serverRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_2___default()();
const { apiProviderUrls  } = serverRuntimeConfig;
const rpc = async (req, res)=>{
    utils_serverLogger__WEBPACK_IMPORTED_MODULE_4__/* .serverLogger.debug */ .L.debug("Request to RPC");
    const chainId = Number(req.query.chainId);
    if (!_sdk_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHAINS */ .zG[chainId]) {
        throw new Error(`Chain ${chainId} is not supported`);
    }
    const customProvider = apiProviderUrls?.[chainId];
    const requested = await (0,utils_fetchWithFallbacks__WEBPACK_IMPORTED_MODULE_3__/* .fetchWithFallbacks */ .G)([
        customProvider
    ], {
        method: "POST",
        // Next by default parses our body for us, we don't want that here
        body: JSON.stringify(req.body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    res.setHeader("Content-Type", requested.headers.get("Content-Type") ?? "application/json");
    res.status(requested.status).send(requested.body);
};
// Error handler wrapper
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lidofinance_next_api_wrapper__WEBPACK_IMPORTED_MODULE_1__.wrapRequest)([
    (0,_lidofinance_next_api_wrapper__WEBPACK_IMPORTED_MODULE_1__.defaultErrorHandler)({
        serverLogger: utils_serverLogger__WEBPACK_IMPORTED_MODULE_4__/* .serverLogger */ .L
    })
])(rpc)); // export default rpc;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zG": () => (/* binding */ CHAINS)
/* harmony export */ });
/* unused harmony exports CHAINS_IDS, CHAINS_COLORS, getChainColor */
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
    invariant(color != null, "Chain is not supported");
    return color;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zG": () => (/* reexport safe */ _chains__WEBPACK_IMPORTED_MODULE_0__.zG)
/* harmony export */ });
/* harmony import */ var _chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7799);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chains__WEBPACK_IMPORTED_MODULE_0__]);
_chains__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6674:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ fetchWithFallbacks)
/* harmony export */ });
/* harmony import */ var _metrics_rpcResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1406);
/* harmony import */ var _serverLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_metrics_rpcResponse__WEBPACK_IMPORTED_MODULE_0__]);
_metrics_rpcResponse__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const fetchWithFallbacks = async (inputs, init)=>{
    const [input, ...restInputs] = inputs;
    let hostname;
    try {
        const url = new URL(input);
        hostname = url.hostname;
        _serverLogger__WEBPACK_IMPORTED_MODULE_1__/* .serverLogger.debug */ .L.debug("Sending request to " + hostname, init);
        const end = _metrics_rpcResponse__WEBPACK_IMPORTED_MODULE_0__/* .rpcResponse.labels */ ._.labels(hostname).startTimer();
        const response = await fetch(input, init);
        end();
        if (response.ok) {
            _serverLogger__WEBPACK_IMPORTED_MODULE_1__/* .serverLogger.debug */ .L.debug(`Request to ${hostname} successful`, init);
            return response;
        }
        throw new Error("[fetchWithFallbacks] Response not ok");
    } catch (error) {
        if (!restInputs.length) {
            _serverLogger__WEBPACK_IMPORTED_MODULE_1__/* .serverLogger.error */ .L.error(`All requests failed`, init);
            throw error;
        }
        return fetchWithFallbacks(restInputs, init);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ rpcResponse)
/* harmony export */ });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9464);
/* harmony import */ var prom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4818);
/* harmony import */ var prom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prom_client__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([config__WEBPACK_IMPORTED_MODULE_0__]);
config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const rpcResponse = new prom_client__WEBPACK_IMPORTED_MODULE_1__.Histogram({
    name: config__WEBPACK_IMPORTED_MODULE_0__/* .METRICS_PREFIX */ .rH + "ethereum_response",
    help: "Ethereum RCP response",
    labelNames: [
        "provider"
    ],
    buckets: [
        0.1,
        0.2,
        0.3,
        0.6,
        1,
        1.5,
        2,
        5
    ],
    registers: []
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ serverLogger)
});

;// CONCATENATED MODULE: external "@darkobits/mask-string"
const mask_string_namespaceObject = require("@darkobits/mask-string");
var mask_string_default = /*#__PURE__*/__webpack_require__.n(mask_string_namespaceObject);
;// CONCATENATED MODULE: ./utils/serverLogger.ts

const anyHexadecimal = new RegExp("0x[a-fA-F0-9]+", "gi");
const anyEnsAddress = new RegExp("[a-zA-Z.]+\\.eth", "gi");
const secrets = [
    anyHexadecimal,
    anyEnsAddress
].filter(Boolean);
const mask = (message)=>mask_string_default()(secrets, message);
var LEVEL;
(function(LEVEL) {
    LEVEL["error"] = "error";
    LEVEL["warn"] = "warn";
    LEVEL["info"] = "info";
    LEVEL["debug"] = "debug";
})(LEVEL || (LEVEL = {}));
const stringify = (data)=>{
    let stringified = JSON.stringify(data);
    if (data instanceof Error) {
        // extract Error's non-enumerable props before stringifying
        stringified = JSON.stringify({
            message: data.message,
            stack: data.stack
        });
    }
    return stringified;
};
const sanitize = (output)=>JSON.parse(mask(JSON.stringify(output.map(stringify))));
const log = (level)=>(...output)=>{
        try {
            console[level](sanitize(output));
        } catch  {
            console.warn("Failed to sanitize output");
        }
    };
const serverLogger =  true ? {
    error: log(LEVEL.error),
    warn: log(LEVEL.warn),
    info: log(LEVEL.info),
    debug: log(LEVEL.debug),
    log: log(LEVEL.debug)
} : 0;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4549));
module.exports = __webpack_exports__;

})();