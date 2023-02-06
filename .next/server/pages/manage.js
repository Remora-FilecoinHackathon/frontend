"use strict";
(() => {
var exports = {};
exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 7645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9401);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_stackedBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6714);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui__WEBPACK_IMPORTED_MODULE_1__]);
components_ui__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const BorrowerPositionModule = ({ loanAmount , interestRate , endDate , handleSelectedEscrow , isSelectedEscrow , escrowAddress , isStarted  })=>{
    const toggleSelection = ()=>{
        handleSelectedEscrow(isSelectedEscrow === escrowAddress ? "" : escrowAddress);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_ui__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .xv, {
                size: "xxs",
                color: "secondary",
                children: [
                    "Escrow Address: ",
                    escrowAddress
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_stackedBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                onClick: toggleSelection,
                style: {
                    border: isSelectedEscrow === escrowAddress ? "1px solid var(--secondary-color)" : "1px solid #353535",
                    cursor: "pointer",
                    marginBottom: "60px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginLeft: "20px",
                            justifyContent: "left"
                        },
                        children: [
                            isStarted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .xv, {
                                size: "xxs",
                                color: "success",
                                style: {
                                    display: "flex",
                                    alignItems: "left"
                                },
                                children: "Loan Started"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .xv, {
                                size: "xxs",
                                color: "warning",
                                style: {
                                    display: "flex",
                                    alignItems: "left"
                                },
                                children: "Not Active"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "left"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            display: "flex",
                                            fontSize: "28px",
                                            color: "white",
                                            fontStyle: "bold",
                                            alignItems: "center"
                                        },
                                        children: loanAmount
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__/* .Fil */ .IB, {
                                        style: {
                                            marginLeft: "12px"
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    display: "flex",
                                    alignItems: "left"
                                },
                                children: "Available Liquidity"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginRight: "20px",
                            justifyContent: "right"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "display",
                                    textAlign: "right"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        style: {
                                            color: "var(--secondary-color)"
                                        },
                                        children: [
                                            interestRate,
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    color: "var(--white-color)"
                                                },
                                                children: "Fil"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Monthly Interest Amount"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "display",
                                    textAlign: "right"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: +moment__WEBPACK_IMPORTED_MODULE_3___default()() < endDate ? "var(--primary-color)" : "red"
                                        },
                                        children: moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default().unix(endDate / 1000).format("MM/DD/YYYY")).fromNow()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Duration"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorrowerPositionModule);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9401);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_stackedBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6714);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui__WEBPACK_IMPORTED_MODULE_1__]);
components_ui__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const LenderPositionModule = ({ loanAmount , interestRate , endDate , handleSelectedEscrow , isSelectedEscrow , escrowAddress , isStarted  })=>{
    const toggleSelection = ()=>{
        handleSelectedEscrow(isSelectedEscrow === escrowAddress ? "" : escrowAddress);
    };
    console.log(`This is ${loanAmount}`);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_ui__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .xv, {
                size: "xxs",
                color: "secondary",
                children: [
                    "Escrow Address: ",
                    escrowAddress
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_stackedBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                onClick: toggleSelection,
                style: {
                    border: isSelectedEscrow === escrowAddress ? "1px solid var(--secondary-color)" : "1px solid #353535",
                    cursor: "pointer",
                    marginBottom: "60px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginLeft: "20px",
                            justifyContent: "left"
                        },
                        children: [
                            isStarted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .xv, {
                                size: "xxs",
                                color: "success",
                                style: {
                                    display: "flex",
                                    alignItems: "left"
                                },
                                children: "Loan Started"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .xv, {
                                size: "xxs",
                                color: "warning",
                                style: {
                                    display: "flex",
                                    alignItems: "left"
                                },
                                children: "Not Active"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "left"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            display: "flex",
                                            fontSize: "28px",
                                            color: "white",
                                            fontStyle: "bold",
                                            alignItems: "center"
                                        },
                                        children: loanAmount
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__/* .Fil */ .IB, {
                                        style: {
                                            marginLeft: "12px"
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    display: "flex",
                                    alignItems: "left"
                                },
                                children: "Available Liquidity"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginRight: "20px",
                            justifyContent: "right"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "display",
                                    textAlign: "right"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        style: {
                                            color: "var(--secondary-color)"
                                        },
                                        children: [
                                            interestRate,
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    color: "var(--white-color)"
                                                },
                                                children: "Fil"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Monthly Interest Amount"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "display",
                                    textAlign: "right"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: +moment__WEBPACK_IMPORTED_MODULE_3___default()() < endDate ? "var(--primary-color)" : "red"
                                        },
                                        children: moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default().unix(endDate / 1000).format("MM/DD/YYYY")).fromNow()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Duration"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LenderPositionModule);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1977:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Toggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9401);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui__WEBPACK_IMPORTED_MODULE_1__]);
components_ui__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Toggle({ selectedOption , setSelectedOption , setIsBorrower , setIsLender  }) {
    const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
        componentId: "sc-200e0120-0"
    })`
    margin-top: 10px;
    margin-bottom: 20px;
  `;
    const toggleLender = ()=>{
        setIsBorrower(false);
        setSelectedOption("Lender");
        setIsLender(true);
        console.log("lender button");
    };
    const toggleBorrower = ()=>{
        setIsLender(false);
        setSelectedOption("Borrower");
        setIsBorrower(true);
        console.log("borrower button");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeadingWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__/* .Heading */ .X6, {
                    size: "sm",
                    children: " Select lender or borrower options"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                color: "secondary",
                fullwidth: true,
                variant: selectedOption === "Lender" ? "translucent" : "ghost",
                style: {
                    marginBottom: "10px"
                },
                onClick: toggleLender,
                children: "Lender"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                color: "secondary",
                fullwidth: true,
                variant: selectedOption === "Borrower" ? "translucent" : "ghost",
                style: {
                    marginBottom: "10px"
                },
                onClick: toggleBorrower,
                children: "Borrower"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(415);
/* harmony import */ var config_mainContractAddress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5317);
/* harmony import */ var components_connectionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9973);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _abi_Escrow_abi_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5344);
/* harmony import */ var _abi_LendingManager_abi_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7562);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(856);
/* harmony import */ var sdk_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(947);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4228);
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9401);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_toggle_Toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1977);
/* harmony import */ var components_accordian_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5276);
/* harmony import */ var components_modules_LenderPositionModule__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2434);
/* harmony import */ var components_modules_BorrowerPositionModule__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7645);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layout__WEBPACK_IMPORTED_MODULE_2__, components_connectionError__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_8__, sdk_hooks__WEBPACK_IMPORTED_MODULE_9__, _providers__WEBPACK_IMPORTED_MODULE_10__, components_ui__WEBPACK_IMPORTED_MODULE_11__, components_toggle_Toggle__WEBPACK_IMPORTED_MODULE_13__, components_accordian_ui__WEBPACK_IMPORTED_MODULE_14__, components_modules_LenderPositionModule__WEBPACK_IMPORTED_MODULE_15__, components_modules_BorrowerPositionModule__WEBPACK_IMPORTED_MODULE_16__]);
([components_layout__WEBPACK_IMPORTED_MODULE_2__, components_connectionError__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_8__, sdk_hooks__WEBPACK_IMPORTED_MODULE_9__, _providers__WEBPACK_IMPORTED_MODULE_10__, components_ui__WEBPACK_IMPORTED_MODULE_11__, components_toggle_Toggle__WEBPACK_IMPORTED_MODULE_13__, components_accordian_ui__WEBPACK_IMPORTED_MODULE_14__, components_modules_LenderPositionModule__WEBPACK_IMPORTED_MODULE_15__, components_modules_BorrowerPositionModule__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const DealWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-3d04240c-0"
})`
  margin-bottom: ${({ theme  })=>theme.spaceMap.md}px;
`;
function Manage() {
    const [loanPositions, setLoanPositions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [borrowerPositions, setBorrowerPositions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [isSelectedEscrow, setisSelectedEscrow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isBorrower, setIsBorrower] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Lender");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isLender, setIsLender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [showLoans, setShowLoans] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showBorrows, setShowBorrows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { account  } = (0,sdk_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useSDK */ .eC)();
    const { openModal  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useModal */ .dd)(_providers__WEBPACK_IMPORTED_MODULE_10__/* .MODAL.connect */ .zr.connect);
    const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
        componentId: "sc-3d04240c-1"
    })`
    margin-top: 10px;
    margin-bottom: 20px;
  `;
    const BackgroundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
        componentId: "sc-3d04240c-2"
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
    // handling what contract is selected
    const handleSelectedEscrow = (id)=>{
        setisSelectedEscrow(id);
        console.log(isSelectedEscrow);
    };
    // START LOAN ***
    const startLoan = async (event)=>{
        event.preventDefault();
        if (account) {
            try {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                console.log(`escrow address: ${isSelectedEscrow}`);
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.Contract(isSelectedEscrow, _abi_Escrow_abi_json__WEBPACK_IMPORTED_MODULE_6__, signer);
                const tx = await contract.startLoan();
                setIsLoading(true);
                await tx?.wait();
                setIsLoading(false);
                console.log("Loan has started");
            } catch (error) {
                console.error(`there is an Error: ${error}`);
                setIsLoading(false);
            }
        } else {
            openModal();
        }
    };
    // WITHDRAW BEFORE LOAN START ***
    const handleWithdraw = async (event)=>{
        event.preventDefault();
        if (account) {
            try {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.Contract(isSelectedEscrow, _abi_Escrow_abi_json__WEBPACK_IMPORTED_MODULE_6__, signer);
                contract.withdrawBeforLoanStarts();
                setIsLoading(true);
                setTimeout(()=>{
                    setIsLoading(false);
                    console.log("Loan is closed");
                }, 30000);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        } else {
            openModal();
        }
    };
    // REPAY ***
    const handleRepay = async (event)=>{
        event.preventDefault();
        console.log("repay button clicked");
        if (account) {
            try {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.Contract(isSelectedEscrow, _abi_Escrow_abi_json__WEBPACK_IMPORTED_MODULE_6__, signer);
                contract.repay();
                setIsLoading(true);
                setTimeout(()=>{
                    setIsLoading(false);
                    console.log("Loan repay");
                }, 30000);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        } else {
            openModal();
        }
    };
    // CLOSE LOAN ***
    const handleCloseLoan = async (event)=>{
        event.preventDefault();
        if (account) {
            try {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.Contract(isSelectedEscrow, _abi_Escrow_abi_json__WEBPACK_IMPORTED_MODULE_6__, signer);
                const tx = contract.closeLoan();
                setIsLoading(true);
                setTimeout(()=>{
                    setIsLoading(false);
                    console.log("Loan is closed");
                }, 30000);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        } else {
            openModal();
        }
    };
    // SET LENDER POSITIONS
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            try {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.providers.Web3Provider(window.ethereum);
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.Contract(config_mainContractAddress__WEBPACK_IMPORTED_MODULE_17__/* .mainContractAddress */ .h, _abi_LendingManager_abi_json__WEBPACK_IMPORTED_MODULE_7__, provider);
                const loanKeysTotalNumber = (await contract.getLoanKeysLength()).toNumber();
                console.log("starting loop");
                console.log(loanKeysTotalNumber);
                if (loanKeysTotalNumber === 0) {
                    setShowLoans(true);
                    setShowBorrows(false);
                }
                if (loanKeysTotalNumber > 0) {
                    const positionsArray = [];
                    for(let i = 0; i < loanKeysTotalNumber; i++){
                        try {
                            setIsLoading(true);
                            const loanKey = await contract.loanKeys(i);
                            const position = await contract.positions(loanKey._hex);
                            const positionFormatted = {
                                id: i,
                                loanKey: loanKey,
                                lender: position.lender,
                                availableAmount: ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.utils.formatEther(position.availableAmount.toString()),
                                interestRate: position.interestRate.toString() / 100,
                                endDate: position.endTimestamp.toString()
                            };
                            console.log(`current loop on position: ${i}`);
                            if (account !== positionFormatted.lender) {
                                console.log(`negative match position at index ${i} with lender`);
                                setIsLoading(false);
                            } else {
                                console.log(`positive match position at index ${i} with lender`);
                                const escrowAddress = await contract.escrowContracts(positionFormatted.loanKey, positionFormatted.id);
                                const escrowContract = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.Contract(escrowAddress, _abi_Escrow_abi_json__WEBPACK_IMPORTED_MODULE_6__, provider);
                                console.log(`successful grabbing ${escrowAddress}`);
                                const loanAmount = await escrowContract.loanAmount();
                                const interestRate = await escrowContract.rateAmount();
                                const loanPaidAmount = await escrowContract.loanPaidAmount();
                                const lastWithdraw = await escrowContract.lastWithdraw();
                                const isStarted = await escrowContract.started();
                                const endDate = await escrowContract.end();
                                const escrowFormatted = {
                                    key: i,
                                    id: i,
                                    escrowAddress: escrowAddress,
                                    loanAmount: ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.utils.formatEther(loanAmount),
                                    interestRate: ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.utils.formatEther(interestRate),
                                    loanPaidAmount: ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.utils.formatEther(loanPaidAmount),
                                    lastWithdraw: lastWithdraw.toString(),
                                    isStarted: isStarted,
                                    endDate: endDate.toString()
                                };
                                if (escrowContract) {
                                    setIsLoading(false);
                                    console.log(`pushing index:${i} position to ui`);
                                    positionsArray.push(escrowFormatted);
                                }
                                setIsLoading(false);
                            }
                        } catch (e) {}
                    }
                    setLoanPositions(positionsArray);
                }
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        })();
    }, [
        account
    ]);
    // SET BORROW POSITIONS
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            try {
                setIsLoading(true);
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.providers.Web3Provider(window.ethereum);
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.Contract(config_mainContractAddress__WEBPACK_IMPORTED_MODULE_17__/* .mainContractAddress */ .h, _abi_LendingManager_abi_json__WEBPACK_IMPORTED_MODULE_7__, provider);
                var escrowsTotalNumber = await contract.getEscrowForBorrowers(account);
                if (escrowsTotalNumber.toNumber() === 0) {
                    setShowLoans(false);
                    setShowBorrows(true);
                } else {
                    const positionsArray = [];
                    for(let i = 0; i < escrowsTotalNumber.toNumber(); i++){
                        const escrowAddress = await contract.borrowerPositions(account, i);
                        if (escrowAddress) {
                            const escrowContract = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.Contract(escrowAddress, _abi_Escrow_abi_json__WEBPACK_IMPORTED_MODULE_6__, provider);
                            const loanAmount = await escrowContract.loanAmount();
                            const interestRate = await escrowContract.rateAmount();
                            const loanPaidAmount = await escrowContract.loanPaidAmount();
                            const lastWithdraw = await escrowContract.lastWithdraw();
                            const isStarted = await escrowContract.started();
                            const endDate = await escrowContract.end();
                            const escrowFormatted = {
                                id: i,
                                escrowAddress: escrowAddress,
                                loanAmount: ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.utils.formatEther(loanAmount),
                                interestRate: ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.utils.formatEther(interestRate),
                                loanPaidAmount: ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.utils.formatEther(loanPaidAmount),
                                lastWithdraw: lastWithdraw.toString(),
                                isStarted: isStarted,
                                endDate: endDate.toString()
                            };
                            setIsLoading(false);
                            positionsArray.push(escrowFormatted);
                            setIsLoading(false);
                        }
                    }
                    setBorrowerPositions(positionsArray);
                }
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        })();
    }, [
        account
    ]);
    // handling fade in animations
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            setIsVisible(true);
        }, 250);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Remora - Uncollateralized Lending"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: isLoading ? {
                        opacity: "50%"
                    } : {
                        opacity: "100%"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            opacity: isVisible ? 1 : 0,
                            transition: "opacity 1s"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_toggle_Toggle__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    selectedOption: selectedOption,
                                    setSelectedOption: setSelectedOption,
                                    setIsLender: setIsLender,
                                    setIsBorrower: setIsBorrower
                                }),
                                isLender ? loanPositions?.map((position)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_modules_LenderPositionModule__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        loanKey: position.loanKey,
                                        loanAmount: position.loanAmount,
                                        interestRate: position.interestRate,
                                        endDate: position.endDate,
                                        handleSelectedEscrow: handleSelectedEscrow,
                                        isSelectedEscrow: isSelectedEscrow,
                                        escrowAddress: position.escrowAddress
                                    }, position.loanKey)) : borrowerPositions?.map((position)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_modules_BorrowerPositionModule__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        loanAmount: position.loanAmount,
                                        endDate: position.endDate,
                                        interestRate: position.interestRate,
                                        lastWithdraw: position.lastWithdraw,
                                        handleSelectedEscrow: handleSelectedEscrow,
                                        isSelectedEscrow: isSelectedEscrow,
                                        escrowAddress: position.escrowAddress,
                                        isStarted: position.isStarted
                                    }, position.id)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_connectionError__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeadingWrapper, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Heading */ .X6, {
                                        size: "sm",
                                        children: "Choose action"
                                    })
                                }),
                                selectedOption === "Lender" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-evenly",
                                                marginBottom: "20px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .zx, {
                                                size: "md",
                                                disabled: !isLender,
                                                loading: isLoading ? true : false,
                                                style: {
                                                    marginLeft: "10px"
                                                },
                                                onClick: handleWithdraw,
                                                children: "Withdraw"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-evenly"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .zx, {
                                                    size: "md",
                                                    loading: isLoading ? true : false,
                                                    variant: "outlined",
                                                    disabled: !isLender,
                                                    style: {
                                                        marginRight: "10px"
                                                    },
                                                    onClick: handleCloseLoan,
                                                    children: "Close Loan"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .zx, {
                                                    size: "md",
                                                    loading: isLoading ? true : false,
                                                    variant: "outlined",
                                                    disabled: !isLender,
                                                    style: {
                                                        marginLeft: "10px"
                                                    },
                                                    onClick: handleRepay,
                                                    children: "Call Repay"
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-evenly",
                                                marginBottom: "20px"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .zx, {
                                                    size: "md",
                                                    type: "submit",
                                                    style: {
                                                        marginLeft: "10px"
                                                    },
                                                    loading: isLoading ? true : false,
                                                    onClick: handleRepay,
                                                    children: "Call Repay"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .zx, {
                                                    size: "md",
                                                    variant: "outlined",
                                                    type: "submit",
                                                    style: {
                                                        marginRight: "10px"
                                                    },
                                                    loading: isLoading ? true : false,
                                                    onClick: startLoan,
                                                    children: "Start Loan"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-evenly",
                                                marginLeft: "20px",
                                                marginBottom: "20px"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .zx, {
                                                    fullwidth: true,
                                                    style: {
                                                        marginRight: "20px"
                                                    },
                                                    variant: "translucent",
                                                    loading: isLoading ? true : false,
                                                    onClick: handleRepay,
                                                    children: "Miner Acter In"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Button */ .zx, {
                                                    fullwidth: true,
                                                    variant: "translucent",
                                                    style: {
                                                        marginRight: "20px"
                                                    },
                                                    loading: isLoading ? true : false,
                                                    onClick: startLoan,
                                                    children: "Miner Actor Out"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "10px",
                    marginTop: "80px",
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 1s"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .xv, {
                        style: {
                            color: "var(--white-color)",
                            marginBottom: "2px"
                        },
                        size: "xl",
                        children: "FAQ"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .xv, {
                        color: "secondary",
                        size: "xs",
                        children: "Frequently Asked Questions"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_accordian_ui__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackgroundWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_11__/* .Eclipse */ .Y4, {})
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

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

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

/***/ }),

/***/ 5344:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_lender","type":"address"},{"internalType":"address","name":"_borrower","type":"address"},{"internalType":"address payable","name":"_minerActor","type":"address"},{"internalType":"uint256","name":"_loanAmount","type":"uint256"},{"internalType":"uint256","name":"_rateAmount","type":"uint256"},{"internalType":"uint256","name":"_withdrawInterval","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"Already_Started","type":"error"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Loan_Already_Repaid","type":"error"},{"inputs":[],"name":"Loan_Already_Started","type":"error"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Loan_Not_Expired","type":"error"},{"inputs":[],"name":"Loan_Not_Started","type":"error"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Not_Enough_Balance","type":"error"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Not_The_Borrower","type":"error"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"Not_The_Borrower_Or_Lender","type":"error"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Not_The_Lender","type":"error"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Too_Early","type":"error"},{"inputs":[],"name":"Wrong_Beneficiary","type":"error"},{"inputs":[],"name":"Wrong_Owner","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paidAmount","type":"uint256"}],"name":"ClosedLoan","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"FailedPaidRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paidAmount","type":"uint256"}],"name":"PaidRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Received","type":"event"},{"inputs":[],"name":"borrower","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canTerminate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closeLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"end","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lender","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"loanAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"loanPaidAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minerActor","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rateAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"repay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"amount_requested","type":"bytes"}],"internalType":"struct MinerTypes.WithdrawBalanceParams","name":"balanceParams","type":"tuple"}],"name":"transferFromMinerActor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferToMinerActor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawBeforLoanStarts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,932,676,664,401,14,425,235,279,626], () => (__webpack_exec__(6706)));
module.exports = __webpack_exports__;

})();