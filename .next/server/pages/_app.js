"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7544);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9401);
/* harmony import */ var providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4228);
/* harmony import */ var utils_withCsp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1343);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_3__, providers__WEBPACK_IMPORTED_MODULE_4__]);
([_components_ui__WEBPACK_IMPORTED_MODULE_3__, providers__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const App = (props)=>{
    const { Component , pageProps  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
};
const MemoApp = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(App);
const AppWrapper = (props)=>{
    const { ...rest } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(providers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MemoApp, {
                ...rest
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .ToastContainer */ .LV, {})
        ]
    });
};
AppWrapper.getInitialProps = async (appContext)=>{
    return await next_app__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(appContext);
};
// export default AppWrapper;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ( false ? 0 : (0,utils_withCsp__WEBPACK_IMPORTED_MODULE_5__/* .withCsp */ .a)(AppWrapper));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ withCsp)
});

// UNUSED EXPORTS: contentSecurityPolicy

;// CONCATENATED MODULE: external "next-secure-headers"
const external_next_secure_headers_namespaceObject = require("next-secure-headers");
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: ./utils/withCsp.ts


const { serverRuntimeConfig  } = config_default()();
const { cspTrustedHosts , cspReportOnly , cspReportUri  } = serverRuntimeConfig;
const trustedHosts = cspTrustedHosts ? cspTrustedHosts.split(",") : [
    "https://*.collectif.fi"
];
const reportOnly = cspReportOnly === "true";
const contentSecurityPolicy = {
    directives: {
        styleSrc: [
            "'self'",
            "https://fonts.googleapis.com",
            "'unsafe-inline'"
        ],
        fontSrc: [
            "'self'",
            "https://fonts.gstatic.com",
            ...trustedHosts
        ],
        imgSrc: [
            "'self'",
            "data:",
            ...trustedHosts
        ],
        scriptSrc: [
            "'self'",
            "'unsafe-eval'",
            "'unsafe-inline'",
            ...trustedHosts
        ],
        connectSrc: [
            "'self'",
            "wss://*.walletconnect.org",
            "https://*.walletconnect.org",
            ...trustedHosts
        ],
        prefetchSrc: [
            "'self'",
            ...trustedHosts
        ],
        formAction: [
            "'self'",
            ...trustedHosts
        ],
        frameAncestors: [
            "*"
        ],
        manifestSrc: [
            "'self'",
            ...trustedHosts
        ],
        mediaSrc: [
            "'self'",
            ...trustedHosts
        ],
        childSrc: [
            "'self'",
            ...trustedHosts
        ],
        objectSrc: [
            "'self'",
            ...trustedHosts
        ],
        defaultSrc: [
            "'self'",
            ...trustedHosts
        ],
        baseUri: [
            "'none'"
        ],
        reportURI: cspReportUri
    },
    reportOnly: reportOnly
};
const withCsp = (app)=>(0,external_next_secure_headers_namespaceObject.withSecureHeaders)({
        contentSecurityPolicy,
        frameGuard: false
    })(app);


/***/ }),

/***/ 1601:
/***/ ((module) => {

module.exports = require("@ethersproject/logger");

/***/ }),

/***/ 8212:
/***/ ((module) => {

module.exports = require("@ethersproject/properties");

/***/ }),

/***/ 399:
/***/ ((module) => {

module.exports = require("@ethersproject/providers");

/***/ }),

/***/ 4884:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/AdapterMoment");

/***/ }),

/***/ 5753:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/LocalizationProvider");

/***/ }),

/***/ 8054:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 6590:
/***/ ((module) => {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ 8887:
/***/ ((module) => {

module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9881:
/***/ ((module) => {

module.exports = require("react-jazzicon");

/***/ }),

/***/ 4466:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 656:
/***/ ((module) => {

module.exports = require("tiny-warning");

/***/ }),

/***/ 9621:
/***/ ((module) => {

module.exports = require("ua-parser-js");

/***/ }),

/***/ 4731:
/***/ ((module) => {

module.exports = require("use-callback-ref");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 4281:
/***/ ((module) => {

module.exports = import("tiny-invariant");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [932,544,401,14,425], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();