"use strict";
(() => {
var exports = {};
exports.id = 852;
exports.ids = [852];
exports.modules = {

/***/ 9729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ normalBlock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/normalBlock/normalBlockStyles.tsx

const NormalBlockStyles = external_styled_components_default().div.withConfig({
    componentId: "sc-1a7954d3-0"
})`
  display: flex;
  background-color: #181818;
  color: #e4e4e4;
  position: relative;
  padding: 20px 0;
  margin-bottom: 15px;
  border-radius: 25px;
  border: 1px solid #353535;
  box-sizing: border-box;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: flex-end;
`;

;// CONCATENATED MODULE: ./components/normalBlock/normalBlock.tsx


function NormalBlock(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(NormalBlockStyles, {
        ...props
    });
}
/* harmony default export */ const normalBlock = (NormalBlock);

;// CONCATENATED MODULE: ./components/normalBlock/index.ts



/***/ }),

/***/ 351:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8716);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(415);
/* harmony import */ var components_normalBlock___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9729);
/* harmony import */ var components_connectionError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9973);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9401);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(856);
/* harmony import */ var sdk_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(947);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4228);
/* harmony import */ var components_accordian_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, components_layout__WEBPACK_IMPORTED_MODULE_5__, components_connectionError__WEBPACK_IMPORTED_MODULE_7__, _components_ui__WEBPACK_IMPORTED_MODULE_11__, _hooks__WEBPACK_IMPORTED_MODULE_12__, sdk_hooks__WEBPACK_IMPORTED_MODULE_13__, _providers__WEBPACK_IMPORTED_MODULE_14__, components_accordian_ui__WEBPACK_IMPORTED_MODULE_15__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, components_layout__WEBPACK_IMPORTED_MODULE_5__, components_connectionError__WEBPACK_IMPORTED_MODULE_7__, _components_ui__WEBPACK_IMPORTED_MODULE_11__, _hooks__WEBPACK_IMPORTED_MODULE_12__, sdk_hooks__WEBPACK_IMPORTED_MODULE_13__, _providers__WEBPACK_IMPORTED_MODULE_14__, components_accordian_ui__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const DealWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default().div.withConfig({
    componentId: "sc-845d6ae7-0"
})`
  margin-bottom: ${({ theme  })=>theme.spaceMap.md}px;
`;
function Home() {
    // inputs
    const [interestValue, setInterestValue] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("");
    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(new Date());
    const [submit, setSubmit] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [newLendingPositionCreated, setNewLendingPositionCreated] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const { account  } = (0,sdk_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSDK */ .eC)();
    const color = "#DCDCDC";
    const CalendarInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default().div.withConfig({
        componentId: "sc-845d6ae7-1"
    })`
    margin-bottom: 25px;
    width: 100%;
  `;
    const LoaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default().div.withConfig({
        componentId: "sc-845d6ae7-2"
    })`
    display: flex;
    margin: auto;
    justify-content: center;
    margin-bottom: 20px;
  `;
    const DecoratorLabelStyle = styled_components__WEBPACK_IMPORTED_MODULE_9___default().span.withConfig({
        componentId: "sc-845d6ae7-3"
    })`
    display: inline-block;
    font-size: 30px;
    line-height: 39px;
    font-weight: 600;
    margin-left: 15px;
  `;
    const BackgroundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default().div.withConfig({
        componentId: "sc-845d6ae7-4"
    })`
    position: absolute;
    top: 0;
    left: -150px;
    z-index: -1;
    transition: left 4s ease-in-out;
    animation: morph 4s ease-in-out infinite;
    @keyframes left {
      from {
        left: -150px;
      }
      to {
        left: -100px;
      }
    }
    @keyframes morph {
      0% {
        transform: skew(1);
      }
      50% {
        transform: skew(1.05);
      }
      100% {
        transform: skew(1);
      }
    }
  `;
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        setTimeout(()=>{
            setIsVisible(true);
        }, 250);
    }, []);
    const handleInterestChange = (event)=>{
        setInterestValue(event.currentTarget.value);
    };
    const handleAmountChange = (event)=>{
        setAmount(event.currentTarget.value);
    };
    const contractWeb3 = (0,_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useLendingManagerContractWeb3 */ .W_)();
    const ENDPOINT_ADDRESS = "https://api.hyperspace.node.glif.io/rpc/v1";
    async function callRpc(method, params) {
        const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(ENDPOINT_ADDRESS, {
            jsonrpc: "2.0",
            method: method,
            params: params,
            id: 1
        });
        return res.data;
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        var priorityFee = await callRpc("eth_maxPriorityFeePerGas");
        console.log(priorityFee);
        console.log(`End Date: ${endDate._d.getTime()},
    Interest Value: ${parseFloat(interestValue * 100)}, Amount: ${ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(amount)}`);
        if (account) {
            try {
                setIsLoading(true);
                setNewLendingPositionCreated(false);
                let tx = await contractWeb3?.createLendingPosition(endDate._d.getTime(), parseFloat(interestValue) * 100, {
                    value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(amount)
                });
                await tx?.wait();
                setIsLoading(false);
                setAmount("");
                setInterestValue("");
                setEndDate(new Date());
                setNewLendingPositionCreated(true);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        } else {
            openModal();
        }
    };
    const { openModal  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useModal */ .dd)(_providers__WEBPACK_IMPORTED_MODULE_14__/* .MODAL.connect */ .zr.connect);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Remora - Uncollateralized Lending"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "20px",
                    marginTop: "20px",
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 1s"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Heading */ .X6, {
                        size: "sm",
                        children: "Lend Your Fil"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .xv, {
                        color: "secondary",
                        size: "xs",
                        children: "Create a new Lending position."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: newLendingPositionCreated ? "New lending position created!" : ""
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoaderWrapper, {
                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Loader */ .aN, {
                    color: "secondary"
                }) : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_connectionError__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DealWrapper, {
                style: isLoading ? {
                    opacity: "30%"
                } : {
                    opacity: "100%"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    action: "",
                    method: "post",
                    onSubmit: handleSubmit,
                    style: {
                        opacity: isVisible ? 1 : 0,
                        transition: "opacity 1s"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_normalBlock___WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            style: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginBottom: "10px",
                                        width: "100%"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Input */ .II, {
                                        style: {
                                            marginBottom: "20px",
                                            width: "100%"
                                        },
                                        id: "fil",
                                        fullwidth: true,
                                        placeholder: "0",
                                        value: amount,
                                        onChange: handleAmountChange,
                                        rightDecorator: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Fil */ .IB, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DecoratorLabelStyle, {
                                                    children: "Fil"
                                                })
                                            ]
                                        }),
                                        label: "Amount"
                                    }, "fil")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginBottom: "10px",
                                        width: "100%"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Input */ .II, {
                                        id: "interest-rate",
                                        fullwidth: true,
                                        value: interestValue,
                                        onChange: handleInterestChange,
                                        placeholder: "0",
                                        rightDecorator: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DecoratorLabelStyle, {
                                                children: "%"
                                            })
                                        }),
                                        label: "Interest Rate (%)"
                                    }, "interest-rate")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CalendarInputWrapper, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "duration",
                                                style: {
                                                    paddingLeft: "30px",
                                                    textTransform: "uppercase",
                                                    marginBottom: "15px",
                                                    display: "block",
                                                    fontSize: "12px",
                                                    color: "var(--collective-color-textSecondary)"
                                                },
                                                children: "Duration (end date)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    position: "relative",
                                                    display: "inline-flex",
                                                    alignItems: "stretch",
                                                    boxSizing: "border-box",
                                                    padding: "0 30px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_1__.DatePicker, {
                                                    value: endDate,
                                                    onChange: (date)=>{
                                                        setEndDate(date);
                                                    },
                                                    renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            ...params,
                                                            sx: {
                                                                svg: {
                                                                    color
                                                                },
                                                                input: {
                                                                    color
                                                                },
                                                                label: {
                                                                    color
                                                                },
                                                                "& .MuiOutlinedInput-notchedOutline": {
                                                                    border: "0.5px solid #5E5E5E"
                                                                }
                                                            }
                                                        })
                                                }, "date-picker")
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .zx, {
                            fullwidth: true,
                            variant: "filled",
                            type: "submit",
                            style: !isLoading ? {
                                marginTop: "30px",
                                cursor: "pointer"
                            } : {
                                marginTop: "30px",
                                cursor: "not-allowed"
                            },
                            children: "Lend"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "10px",
                    marginTop: "20px",
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 1s"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .xv, {
                        style: {
                            color: "var(--white-color)",
                            marginTop: "30px",
                            marginBottom: "2px"
                        },
                        size: "xl",
                        children: "FAQ"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .xv, {
                        color: "secondary",
                        size: "xs",
                        children: "Frequently Asked Questions"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_accordian_ui__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackgroundWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Eclipse */ .Y4, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 8716:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers");

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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

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
var __webpack_exports__ = __webpack_require__.X(0, [210,932,676,664,401,14,425,235,279], () => (__webpack_exec__(351)));
module.exports = __webpack_exports__;

})();