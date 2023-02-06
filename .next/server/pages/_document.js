"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 4957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9401);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8014);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_4__]);
([_components_ui__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// for prod and dev use https and real domain
let host = "http://localhost";
class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static async getInitialProps(ctx) {
        const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_3__.ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        if (ctx?.req?.headers?.host) {
            host = `https://${ctx?.req?.headers?.host}`;
        }
        try {
            ctx.renderPage = ()=>originalRenderPage({
                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                                ...props
                            }))
                });
            const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(ctx);
            return {
                ...initialProps,
                styles: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        initialProps.styles,
                        sheet.getStyleElement()
                    ]
                })
            };
        } finally{
            sheet.seal();
        }
    }
    get metaTitle() {
        return "Remora";
    }
    get metaDescription() {
        return "Uncollateralized Lending with Remora. " + "Borrow or Lend depending on your needs using our app having a selection of available contracts." + "Become a storage provider or help others while earning rewards.";
    }
    get metaPreviewImgUrl() {
        return `${host}/collective-preview.png`;
    }
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "manifest",
                            href: "/manifest.json"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico",
                            sizes: "any"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            type: "image/svg+xml",
                            href: "favicon-512x512.svg"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/apple-touch-icon.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "194x194",
                            href: "/favicon-194x194.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon-32x32.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicon-16x16.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:type",
                            content: "website"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:title",
                            content: this.metaTitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:description",
                            content: this.metaDescription
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:image",
                            content: this.metaPreviewImgUrl
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:title",
                            content: this.metaTitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:description",
                            content: this.metaDescription
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:image:src",
                            content: this.metaPreviewImgUrl
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:site",
                            content: "@collectivefinance"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:creator",
                            content: "@collectivefinance"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: this.metaDescription
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "currentChain",
                            content: String(_config__WEBPACK_IMPORTED_MODULE_4__/* .dynamics.defaultChain */ .ju.defaultChain)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .Fonts */ .F3, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveUIHead */ .T8, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            src: "/runtime/window-env.js"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,859,401,14], () => (__webpack_exec__(4957)));
module.exports = __webpack_exports__;

})();