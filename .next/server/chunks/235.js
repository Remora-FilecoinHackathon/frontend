"use strict";
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 5772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I5": () => (/* binding */ HeaderStyle),
/* harmony export */   "Xv": () => (/* binding */ HeaderLogoStyle),
/* harmony export */   "v$": () => (/* binding */ HeaderActionsStyle)
/* harmony export */ });
/* harmony import */ var _ui_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1397);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const HeaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ui_container__WEBPACK_IMPORTED_MODULE_0__/* .Container */ .W).withConfig({
    componentId: "sc-82f02d34-0"
})`
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const HeaderLogoStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-82f02d34-1"
})`
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: ${({ theme  })=>theme.spaceMap.xxl}px;
`;
const HeaderActionsStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-82f02d34-2"
})`
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
`;


/***/ }),

/***/ 9869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ logo_Logo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/logo/LogoStyles.tsx

const LogoStyles = external_styled_components_default().div.withConfig({
    componentId: "sc-21fdda9f-0"
})`
  color: var(--collective-color-text);
  line-height: 0;
  display: flex;
`;

;// CONCATENATED MODULE: ./components/logo/Logo.tsx



function Logo(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(LogoStyles, {
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "197",
            height: "57",
            viewBox: "0 0 197 57",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    filter: "url(#filter0_d_10_106)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M80.2703 21C79.5983 20.84 78.9583 20.776 78.3823 20.776C76.2383 20.776 74.8303 21.832 74.1583 23.4L73.9023 21.032H69.2623V37H74.1903V30.056C74.1903 26.888 75.8863 25.64 78.7023 25.64H80.2703V21ZM89.7175 37.416C94.1015 37.416 97.2695 35.144 97.8455 31.592H93.3335C92.9815 32.744 91.6695 33.416 89.8135 33.416C87.6375 33.416 86.4535 32.424 86.1655 30.312L97.7815 30.248V29C97.7815 23.784 94.6455 20.488 89.6215 20.488C84.7895 20.488 81.4295 23.976 81.4295 28.968C81.4295 33.896 84.8855 37.416 89.7175 37.416ZM89.6535 24.488C91.6375 24.488 92.8855 25.576 92.8855 27.272H86.2295C86.6135 25.352 87.7015 24.488 89.6535 24.488ZM105.628 37V28.424C105.628 25.736 107.068 24.968 108.476 24.968C110.044 24.968 111.068 25.928 111.068 27.912V37H115.996V28.424C115.996 25.704 117.404 24.936 118.812 24.936C120.38 24.936 121.436 25.896 121.436 27.912V37H126.364V26.536C126.364 22.888 124.316 20.488 120.188 20.488C117.884 20.488 115.996 21.608 115.164 23.304C114.236 21.608 112.7 20.488 110.3 20.488C107.996 20.488 106.428 21.544 105.628 22.664L105.308 21H100.7V37H105.628ZM129.023 28.968C129.023 34.024 132.735 37.384 137.855 37.384C142.943 37.384 146.655 34.024 146.655 28.968C146.655 23.912 142.943 20.52 137.855 20.52C132.735 20.52 129.023 23.912 129.023 28.968ZM133.983 28.936C133.983 26.536 135.551 24.936 137.855 24.936C140.127 24.936 141.695 26.536 141.695 28.936C141.695 31.368 140.127 32.968 137.855 32.968C135.551 32.968 133.983 31.368 133.983 28.936ZM160.52 21C159.848 20.84 159.208 20.776 158.632 20.776C156.488 20.776 155.08 21.832 154.408 23.4L154.152 21.032H149.512V37H154.44V30.056C154.44 26.888 156.136 25.64 158.952 25.64H160.52V21ZM167.219 37.416C169.619 37.416 171.731 36.36 172.243 34.888L172.563 37H176.915V27.656C176.915 23.08 174.291 20.488 169.651 20.488C165.075 20.488 162.099 22.856 162.099 26.472H166.195C166.195 25.032 167.315 24.232 169.395 24.232C171.155 24.232 172.115 25.064 172.115 26.632V26.888L167.635 27.24C163.795 27.528 161.715 29.352 161.715 32.296C161.715 35.432 163.827 37.416 167.219 37.416ZM168.947 33.768C167.443 33.768 166.739 33.224 166.739 32.072C166.739 31.048 167.507 30.568 169.651 30.376L172.147 30.152V31.016C172.147 32.84 170.835 33.768 168.947 33.768Z",
                        fill: "url(#paint0_linear_10_106)"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                    "clip-path": "url(#clip0_10_106)",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M54.8298 21.6311C53.7451 20.2096 52.0977 19.3944 50.3095 19.3944H14.1223C14.8113 18.3162 15.454 16.8813 15.454 15.2773C15.454 11.8932 12.5935 9.25839 12.4718 9.14792C12.0465 8.76193 11.3977 8.76193 10.9725 9.14792C10.8508 9.2585 7.99052 11.8932 7.99052 15.2773C7.99052 15.9245 8.09574 16.5441 8.26582 17.124C7.6858 16.9539 7.0663 16.8487 6.41891 16.8487C3.03484 16.8487 0.400098 19.7091 0.289519 19.8308C-0.0964658 20.2562 -0.0964658 20.905 0.289519 21.3302C0.400098 21.452 3.03484 24.3123 6.41891 24.3123C8.15458 24.3123 9.69185 23.56 10.7938 22.8105C11.476 29.6316 15.167 35.8121 20.9606 39.6568C22.558 40.717 24.2743 41.5683 26.0747 42.1966C25.3615 44.1182 25.4368 45.9642 25.4423 46.0763C25.4701 46.6499 25.9289 47.1087 26.5025 47.1364C26.5245 47.1375 26.6134 47.1413 26.7566 47.1413C27.6819 47.1413 30.8733 46.9831 32.9453 44.911C33.3856 44.4708 33.7388 43.98 34.0229 43.4713C42.9997 43.3235 51.0841 37.9531 54.6922 29.7041C55.1341 28.6938 55.5049 27.6453 55.7946 26.5876C56.2672 24.8609 55.9156 23.0542 54.8298 21.6311ZM6.41858 22.0814C4.95032 22.0814 3.60053 21.2367 2.77518 20.5824C3.60348 19.9275 4.95765 19.08 6.41858 19.08C7.8865 19.08 9.23608 19.9243 10.0619 20.579C9.23379 21.234 7.8795 22.0814 6.41858 22.0814ZM10.2212 15.2774C10.2212 13.8077 11.0672 12.4571 11.722 11.632C12.377 12.4576 13.2228 13.8082 13.2228 15.2774C13.2228 16.7467 12.3771 18.0971 11.722 18.9228C11.0669 18.0972 10.2212 16.7468 10.2212 15.2774ZM31.3675 43.3337C30.3285 44.3726 28.7756 44.7295 27.7287 44.8502C27.8492 43.8031 28.2061 42.2502 29.2453 41.2113C30.2844 40.1722 31.8378 39.8153 32.8841 39.6947C32.7635 40.7416 32.4066 42.2946 31.3675 43.3337ZM34.8811 41.2048C35.2231 39.7509 35.1747 38.5579 35.1705 38.4685C35.1427 37.8949 34.6839 37.4361 34.1103 37.4083C33.9462 37.4002 30.0605 37.2406 27.6674 39.6337C27.4835 39.8177 27.3164 40.0111 27.1615 40.2104C25.8529 39.78 24.5914 39.2199 23.3932 38.5367C32.0846 30.5891 42.0946 30.1511 45.0429 30.2145C46.2357 30.2403 47.2248 30.2523 48.1553 30.2523H51.9502C48.5616 36.6161 42.0932 40.7747 34.8811 41.2048ZM53.6424 25.9988C53.4559 26.6802 53.2319 27.3575 52.9738 28.0212H48.1554C47.2413 28.0212 46.2676 28.0093 45.0911 27.9839C41.8793 27.9146 30.8574 28.3976 21.4588 37.2873C16.3888 33.6027 13.271 27.8656 12.9379 21.6255H50.3096C51.3961 21.6255 52.3971 22.1208 53.0561 22.9845C53.7165 23.8497 53.9301 24.9484 53.6424 25.9988Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M47.0965 23.2846C46.3892 23.2846 45.8137 23.8601 45.8137 24.5674C45.8137 25.2748 46.3892 25.8503 47.0965 25.8503C47.8039 25.8503 48.3794 25.2748 48.3794 24.5674C48.3794 23.8601 47.8039 23.2846 47.0965 23.2846Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M28.7802 22.534H16.2864C15.6704 22.534 15.1709 23.0334 15.1709 23.6495C15.1709 24.2657 15.6704 24.7651 16.2864 24.7651H28.7802C29.3963 24.7651 29.8958 24.2657 29.8958 23.6495C29.8958 23.0334 29.3962 22.534 28.7802 22.534Z",
                            fill: "#34F899"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M32.4615 22.534H32.2384C31.6224 22.534 31.1228 23.0334 31.1228 23.6495C31.1228 24.2657 31.6224 24.7651 32.2384 24.7651H32.4615C33.0775 24.7651 33.577 24.2657 33.577 23.6495C33.577 23.0334 33.0775 22.534 32.4615 22.534Z",
                            fill: "#34F899"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("filter", {
                            id: "filter0_d_10_106",
                            x: "57.2622",
                            y: "7.48801",
                            width: "139.653",
                            height: "48.928",
                            filterUnits: "userSpaceOnUse",
                            "color-interpolation-filters": "sRGB",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("feFlood", {
                                    "flood-opacity": "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("feOffset", {
                                    dx: "4",
                                    dy: "3"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("feGaussianBlur", {
                                    stdDeviation: "8"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.983333 0 0 0 0 0.983333 0 0 0 0 0.983333 0 0 0 0.25 0"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_10_106"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_10_106",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint0_linear_10_106",
                            x1: "149.413",
                            y1: "56",
                            x2: "64.5783",
                            y2: "67.2497",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    "stop-color": "white"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    "stop-color": "white"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                            id: "clip0_10_106",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                width: "56",
                                height: "56",
                                fill: "white"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const logo_Logo = (/*#__PURE__*/(0,external_react_.forwardRef)(Logo));

;// CONCATENATED MODULE: ./components/logo/index.ts



/***/ }),

/***/ 3466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ MainStyle)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9401);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui__WEBPACK_IMPORTED_MODULE_0__]);
_ui__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const MainStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ui__WEBPACK_IMPORTED_MODULE_0__/* .Container */ .W2).withConfig({
    componentId: "sc-35591cba-0"
})`
  position: relative;
  margin-top: ${({ theme  })=>theme.spaceMap.sm}px;
  margin-bottom: ${({ theme  })=>theme.spaceMap.sm}px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;