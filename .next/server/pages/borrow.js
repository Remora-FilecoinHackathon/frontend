"use strict";
(() => {
var exports = {};
exports.id = 259;
exports.ids = [259];
exports.modules = {

/***/ 4934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_normalBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9729);
/* harmony import */ var components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9401);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ui__WEBPACK_IMPORTED_MODULE_2__]);
components_ui__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const PositionModule = ({ liquidity , interestRate , endDate , loanKey , handleSelectedLoanKey , isSelectedLoanKey  })=>{
    const toggleSelection = ()=>{
        handleSelectedLoanKey(isSelectedLoanKey === loanKey ? "" : loanKey);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_normalBlock__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        onClick: +moment__WEBPACK_IMPORTED_MODULE_4___default()() < endDate ? toggleSelection : undefined,
        style: {
            border: isSelectedLoanKey === loanKey ? "1px solid var(--secondary-color)" : "1px solid #353535",
            cursor: +moment__WEBPACK_IMPORTED_MODULE_4___default()() < endDate ? "pointer" : "not-allowed",
            opacity: +moment__WEBPACK_IMPORTED_MODULE_4___default()() < endDate ? 1 : 0.5
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    marginLeft: "20px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            margin: "8px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    fontSize: "28px",
                                    color: "white",
                                    fontStyle: "bold"
                                },
                                children: liquidity
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ui__WEBPACK_IMPORTED_MODULE_2__/* .Fil */ .IB, {
                                style: {
                                    marginLeft: "12px"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Available Liquidity"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    marginRight: "20px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                style: {
                                    color: "var(--secondary-color)"
                                },
                                children: [
                                    interestRate,
                                    "%"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Interest Rate"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    color: +moment__WEBPACK_IMPORTED_MODULE_4___default()() < endDate ? "var(--primary-color)" : "red"
                                },
                                children: moment__WEBPACK_IMPORTED_MODULE_4___default()(moment__WEBPACK_IMPORTED_MODULE_4___default().unix(endDate / 1000).format("MM/DD/YYYY")).fromNow()
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Duration"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PositionModule);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 4581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(415);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(856);
/* harmony import */ var _abi_LendingManager_abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7562);
/* harmony import */ var sdk_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(947);
/* harmony import */ var components_connectionError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9973);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9401);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4228);
/* harmony import */ var components_modules_PositionModule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4934);
/* harmony import */ var components_stackedBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6714);
/* harmony import */ var components_accordian_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5276);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var config_mainContractAddress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5317);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layout__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, _hooks__WEBPACK_IMPORTED_MODULE_3__, sdk_hooks__WEBPACK_IMPORTED_MODULE_5__, components_connectionError__WEBPACK_IMPORTED_MODULE_6__, _components_ui__WEBPACK_IMPORTED_MODULE_10__, _providers__WEBPACK_IMPORTED_MODULE_11__, components_modules_PositionModule__WEBPACK_IMPORTED_MODULE_12__, components_accordian_ui__WEBPACK_IMPORTED_MODULE_14__]);
([components_layout__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, _hooks__WEBPACK_IMPORTED_MODULE_3__, sdk_hooks__WEBPACK_IMPORTED_MODULE_5__, components_connectionError__WEBPACK_IMPORTED_MODULE_6__, _components_ui__WEBPACK_IMPORTED_MODULE_10__, _providers__WEBPACK_IMPORTED_MODULE_11__, components_modules_PositionModule__WEBPACK_IMPORTED_MODULE_12__, components_accordian_ui__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const DealWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-7865a6df-0"
})`
  margin-bottom: ${({ theme  })=>theme.spaceMap.md}px;
`;
function Home() {
    const { account  } = (0,sdk_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSDK */ .eC)();
    const [repIsSuccess, setRepIsSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("");
    const [mockMinerActor, setMockMinerActor] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const [positions, setPositions] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)();
    const [isSelectedLoanKey, setIsSelectedLoanKey] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("");
    const { openModal  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useModal */ .dd)(_providers__WEBPACK_IMPORTED_MODULE_11__/* .MODAL.connect */ .zr.connect);
    var MINER_ADDRESS = "";
    /* Wrapper Styles */ const DecoratorLabelStyle = styled_components__WEBPACK_IMPORTED_MODULE_8___default().span.withConfig({
        componentId: "sc-7865a6df-1"
    })`
    display: inline-block;
    font-size: 30px;
    line-height: 39px;
    font-weight: 600;
    margin-left: 15px;
  `;
    const LoaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
        componentId: "sc-7865a6df-2"
    })`
    display: flex;
    margin: auto;
    justify-content: center;
    margin-bottom: 20px;
  `;
    const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
        componentId: "sc-7865a6df-3"
    })`
    margin-top: 10px;
    margin-bottom: 20px;
  `;
    const BackgroundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
        componentId: "sc-7865a6df-4"
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
    /* Providers for reading and writing to contract */ const contractWeb3 = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLendingManagerContractWeb3 */ .W_)();
    const ENDPOINT_ADDRESS = "https://api.hyperspace.node.glif.io/rpc/v1";
    async function callRpc(method, params) {
        const res = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(ENDPOINT_ADDRESS, {
            jsonrpc: "2.0",
            method: method,
            params: params,
            id: 1
        });
        return res.data;
    }
    //  Reading contract to display positions currently available for borrowers
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        (async ()=>{
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.Contract(config_mainContractAddress__WEBPACK_IMPORTED_MODULE_16__/* .mainContractAddress */ .h, _abi_LendingManager_abi_json__WEBPACK_IMPORTED_MODULE_4__, provider);
            const loanKeysTotalNumber = (await contract.getLoanKeysLength()).toNumber();
            const positionsArray = [];
            if (loanKeysTotalNumber > 0) {
                for(let i = 0; i < loanKeysTotalNumber; i++){
                    const loanKey = await contract.loanKeys([
                        i
                    ]);
                    const position = await contract.positions(loanKey._hex);
                    const positionFormatted = {
                        loanKey: loanKey,
                        lender: position.lender,
                        availableAmount: ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.utils.formatEther(position.availableAmount.toString()),
                        interestRate: position.interestRate.toString() / 100,
                        endDate: position.endTimestamp.toString()
                    };
                    positionsArray.push(positionFormatted);
                }
                setPositions(positionsArray);
            }
        })();
    }, [
        account
    ]);
    const handleDeployMockMinerActor = async (event)=>{
        event.preventDefault();
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.Contract(config_mainContractAddress__WEBPACK_IMPORTED_MODULE_16__/* .mainContractAddress */ .h, _abi_LendingManager_abi_json__WEBPACK_IMPORTED_MODULE_4__, provider);
        if (account) {
            try {
                let tx = await contractWeb3?.deployMockMinerActor();
                setIsLoading(true);
                await tx?.wait();
                // contract.on('MinerMockAPIDeployed', (address, msg) => {
                //   console.log(`deployed Mock Miner: ${address}`);
                //   setMockMinerActor(address);
                //   setIsLoading(false);
                // });
                var priorityFee = await callRpc("eth_maxPriorityFeePerGas");
                MINER_ADDRESS = await contractWeb3?.ownerToMinerActor(account);
                console.log(MINER_ADDRESS);
                setMockMinerActor(MINER_ADDRESS);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        } else {
            openModal();
        }
    };
    const handleReputationSubmit = async (event)=>{
        event.preventDefault();
        if (account) {
            try {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.Contract(config_mainContractAddress__WEBPACK_IMPORTED_MODULE_16__/* .mainContractAddress */ .h, _abi_LendingManager_abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);
                const tx = await contract.checkReputation(mockMinerActor);
                setIsLoading(true);
                await tx.wait();
                contract.on("ReputationReceived", async function(id, response, miner) {
                    console.log("**** REPUTATION EVENT RECEIVED ****");
                    console.log(id, response, miner);
                    console.log(response);
                    setRepIsSuccess(true);
                    setIsLoading(false);
                });
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        } else {
            openModal();
        }
    };
    const handleCreateBorrowSubmit = async (event)=>{
        event.preventDefault();
        if (account) {
            try {
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.Contract(config_mainContractAddress__WEBPACK_IMPORTED_MODULE_16__/* .mainContractAddress */ .h, _abi_LendingManager_abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);
                setIsLoading(true);
                MINER_ADDRESS = await contractWeb3?.ownerToMinerActor(account);
                console.log(isSelectedLoanKey, ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.utils.parseEther(amount), MINER_ADDRESS);
                let tx = await contract.createBorrow(isSelectedLoanKey, ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.utils.parseEther(amount), MINER_ADDRESS);
                await tx.wait();
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        }
        setAmount("");
        setIsSelectedLoanKey("");
    };
    // handling what contract is selected
    const handleSelectedLoanKey = (id)=>{
        setIsSelectedLoanKey(id);
        console.log(isSelectedLoanKey);
    };
    const handleAmountChange = (event)=>{
        setAmount(event.currentTarget.value);
    };
    // handling fade in animations
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        setTimeout(()=>{
            setIsVisible(true);
        }, 250);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Remora - Uncollateralized Lending"
                })
            }),
            !repIsSuccess || !account ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_connectionError__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        action: "",
                        method: "post",
                        style: {
                            opacity: isVisible ? 1 : 0,
                            transition: "opacity 1s"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: !isLoading ? {
                                textAlign: "center",
                                opacity: "100%"
                            } : {
                                textAlign: "center",
                                opacity: "50%"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingWrapper, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Text */ .xv, {
                                            size: "xxs",
                                            style: {
                                                color: "var(--color-white)"
                                            },
                                            children: mockMinerActor == "" ? "" : `The Miner Actor address is: ${mockMinerActor}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Text */ .xv, {
                                            color: "error",
                                            size: "xxs",
                                            children: "** Lender wallet and Borrower wallet cannot be the same **"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Heading */ .X6, {
                                            size: "sm",
                                            children: "Step 1: Deploy Mock Contract"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Text */ .xv, {
                                            color: "secondary",
                                            size: "xs",
                                            children: "Deploy before checking reputation"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .zx, {
                                    fullwidth: true,
                                    loading: isLoading ? true : false,
                                    variant: "outlined",
                                    onClick: handleDeployMockMinerActor,
                                    style: {
                                        marginBottom: "40px"
                                    },
                                    children: "Deploy"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingWrapper, {
                                    children: [
                                        isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Text */ .xv, {
                                            color: "warning",
                                            style: {
                                                marginBottom: "40px"
                                            },
                                            children: "Please wait 1-2 min for action to be completed."
                                        }) : null,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Heading */ .X6, {
                                            size: "sm",
                                            children: "Step 2: Check Reputation"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Text */ .xv, {
                                            color: "secondary",
                                            size: "xs",
                                            children: "Check your reputation and you will be able to select which loan fits your needs!"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .zx, {
                                    fullwidth: true,
                                    loading: isLoading ? true : false,
                                    // style={{
                                    //   cursor: mockMinerActor ? 'pointer' : 'not-allowed',
                                    //   opacity: mockMinerActor ? 1 : 0.5,
                                    // }}
                                    onClick: handleReputationSubmit,
                                    children: "Check"
                                })
                            ]
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: mockMinerActor == "" ? "" : `The Miner Actor address is: ${mockMinerActor}`
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        action: "",
                        method: "post",
                        onSubmit: handleCreateBorrowSubmit,
                        style: {
                            opacity: isVisible ? 1 : 0,
                            transition: "opacity 1s"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingWrapper, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Heading */ .X6, {
                                            size: "sm",
                                            children: "Borrow Fil"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Text */ .xv, {
                                            color: "secondary",
                                            size: "xs",
                                            children: "Choose a contract solution to become a Storage Provider."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_connectionError__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DealWrapper, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Text */ .xv, {
                                        size: "sm",
                                        style: {
                                            color: "#fff",
                                            marginLeft: "10px",
                                            marginBottom: "10px"
                                        },
                                        children: [
                                            " ",
                                            "Set Amount To Borrow"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_stackedBlock__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        style: {
                                            marginBottom: "40px"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    marginBottom: "10px",
                                                    width: "100%"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Input */ .II, {
                                                    id: "fil",
                                                    fullwidth: true,
                                                    placeholder: "0",
                                                    value: amount,
                                                    onChange: handleAmountChange,
                                                    rightDecorator: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Fil */ .IB, {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DecoratorLabelStyle, {
                                                                children: "Fil"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Text */ .xv, {
                                        size: "sm",
                                        style: {
                                            color: "#fff",
                                            marginLeft: "10px",
                                            marginBottom: "10px"
                                        },
                                        children: "Select Contract"
                                    }),
                                    positions?.map((position)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_modules_PositionModule__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            loanKey: position.loanKey,
                                            liquidity: position.availableAmount,
                                            interestRate: position.interestRate,
                                            endDate: position.endDate,
                                            handleSelectedLoanKey: handleSelectedLoanKey,
                                            isSelectedLoanKey: isSelectedLoanKey
                                        }, position.loanKey))
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .zx, {
                                style: {
                                    marginTop: "30px"
                                },
                                loading: isLoading ? true : false,
                                fullwidth: true,
                                variant: "filled",
                                type: "submit",
                                children: "Submit"
                            })
                        ]
                    })
                ]
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Text */ .xv, {
                        style: {
                            color: "var(--white-color)",
                            marginBottom: "2px"
                        },
                        size: "xl",
                        children: "FAQ"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Text */ .xv, {
                        color: "secondary",
                        size: "xs",
                        children: "Frequently Asked Questions"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_accordian_ui__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackgroundWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* .Eclipse */ .Y4, {})
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
var __webpack_exports__ = __webpack_require__.X(0, [210,932,676,664,401,14,425,235,279,626], () => (__webpack_exec__(4581)));
module.exports = __webpack_exports__;

})();