"use strict";
exports.id = 425;
exports.ids = [425];
exports.modules = {

/***/ 4962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ WalletsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sdk_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(947);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9401);
/* harmony import */ var _WalletsModalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9818);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sdk_hooks__WEBPACK_IMPORTED_MODULE_2__, _ui__WEBPACK_IMPORTED_MODULE_3__]);
([_sdk_hooks__WEBPACK_IMPORTED_MODULE_2__, _ui__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import { Terms } from '../Terms';


function WalletsModal(props) {
    const { onClose , shouldInvertWalletIcon =false , buttonsFullWidth =false  } = props;
    const [termsChecked, setTermsChecked] = (0,_sdk_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useLocalStorage */ ._)("collective-terms-agree", false);
    const handleTermsToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setTermsChecked((currentValue)=>!currentValue);
    }, [
        setTermsChecked
    ]);
    const [requirementsVisible, setRequirementsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [requirementsData, setRequirementsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const setRequirements = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((isVisible, requirementsData = {})=>{
        setRequirementsVisible(isVisible);
        setRequirementsData(requirementsData);
    }, []);
    const buttonsCommonProps = {
        // disabled: !termsChecked,
        disabled: false,
        onConnect: onClose,
        shouldInvertWalletIcon,
        setRequirements
    };
    // pass-into function is cheap, so we're losing performance on useCallback here
    const hideRequirements = ()=>{
        setRequirements(false);
    };
    const handleClose = onClose || _ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .VOID_FN */ .FX;
    const { icon: reqIcon , title: reqTitle , text: reqText  } = requirementsData;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: requirementsVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_3__/* .Modal */ .u_, {
            ...props,
            onClose: handleClose,
            onBack: hideRequirements,
            onExited: hideRequirements,
            center: true,
            title: reqTitle,
            subtitle: reqText,
            titleIcon: reqIcon,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_3__/* .Modal */ .u_, {
            title: "Connect wallet",
            ...props,
            center: false,
            onClose: handleClose,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletsModalStyles__WEBPACK_IMPORTED_MODULE_4__/* .WalletsButtonsContainer */ .r, {
                $buttonsFullWidth: buttonsFullWidth,
                children: props.children(buttonsCommonProps)
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ WalletsButtonsContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const WalletsButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-ad35352d-0"
})`
  ${({ theme: { mediaQueries  } , $buttonsFullWidth  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: grid;
    grid-template-columns: ${$buttonsFullWidth ? "100%" : "repeat(auto-fill, 112px)"};
    justify-content: space-between;

    ${mediaQueries.md} {
      grid-template-columns: ${$buttonsFullWidth ? "100%" : "repeat(auto-fill, 93px)"};
    }
  `}
`;


/***/ }),

/***/ 5232:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _WalletsModal__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _WalletsModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4962);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_WalletsModal__WEBPACK_IMPORTED_MODULE_0__]);
_WalletsModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ WalletsModalForEth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5033);
/* harmony import */ var _WalletsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5232);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4643);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_connectButtons__WEBPACK_IMPORTED_MODULE_2__, _WalletsModal__WEBPACK_IMPORTED_MODULE_3__]);
([_connectButtons__WEBPACK_IMPORTED_MODULE_2__, _WalletsModal__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const walletsButtons = {
    [_constants__WEBPACK_IMPORTED_MODULE_4__/* .WALLET_IDS.METAMASK */ .H.METAMASK]: _connectButtons__WEBPACK_IMPORTED_MODULE_2__/* .ConnectMetamask */ .o1
};
function getWalletButton(name, props) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(walletsButtons[name], {
        key: name,
        ...props
    });
}
function getWalletsButtons(commonProps, hiddenWallets = []) {
    let wallets = [
        _constants__WEBPACK_IMPORTED_MODULE_4__/* .WALLET_IDS.METAMASK */ .H.METAMASK
    ];
    wallets = wallets.filter((wallet)=>!hiddenWallets.includes(wallet));
    return wallets.map((wallet)=>getWalletButton(wallet, commonProps));
}
function WalletsModalForEth(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletsModal__WEBPACK_IMPORTED_MODULE_3__/* .WalletsModal */ ._, {
        ...props,
        children: (commonProps)=>getWalletsButtons(commonProps, props.hiddenWallets)
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2305:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* reexport safe */ _WalletsModalForETH__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var _WalletsModalForETH__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_WalletsModalForETH__WEBPACK_IMPORTED_MODULE_0__]);
_WalletsModalForETH__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1407:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectButtonStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1427);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_connectButtonStyles__WEBPACK_IMPORTED_MODULE_2__]);
_connectButtonStyles__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ConnectButton = (props)=>{
    const { iconSrcOrReactElement , children , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_connectButtonStyles__WEBPACK_IMPORTED_MODULE_2__/* .ConnectButtonStyle */ .M$, {
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_connectButtonStyles__WEBPACK_IMPORTED_MODULE_2__/* .ConnectButtonContentStyle */ .SY, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_connectButtonStyles__WEBPACK_IMPORTED_MODULE_2__/* .ConnectButtonIconStyle */ .nr, {
                    children: [
                        typeof iconSrcOrReactElement === "string" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: iconSrcOrReactElement,
                            alt: ""
                        }),
                        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(iconSrcOrReactElement) && iconSrcOrReactElement
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_connectButtonStyles__WEBPACK_IMPORTED_MODULE_2__/* .ConnectButtonTitleStyle */ .eZ, {
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1427:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M$": () => (/* binding */ ConnectButtonStyle),
/* harmony export */   "SY": () => (/* binding */ ConnectButtonContentStyle),
/* harmony export */   "eZ": () => (/* binding */ ConnectButtonTitleStyle),
/* harmony export */   "nr": () => (/* binding */ ConnectButtonIconStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui__WEBPACK_IMPORTED_MODULE_1__]);
_ui__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ConnectButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_ui__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx).attrs({
    variant: "ghost",
    square: true
}).withConfig({
    componentId: "sc-45be9da4-0"
})`
  ${({ theme: { fontSizesMap , spaceMap , colors  }  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    height: 116px;
    text-align: center;
    font-weight: 400;
    font-size: ${fontSizesMap.xxs}px;
    padding: 0;
    margin-bottom: ${spaceMap.md}px;
    background: ${colors.background};
  `}
`;
const ConnectButtonContentStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-45be9da4-1"
})`
  ${({ theme: { colors  }  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors.text};
  `}
`;
const ConnectButtonTitleStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-45be9da4-2"
})`
  ${({ theme: { colors  }  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${colors.text};
    line-height: 20px;
  `}
`;
const ConnectButtonIconStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-45be9da4-3"
})`
  display: flex;
  margin-bottom: 8px;
  svg {
    width: 40px;
  }
  img {
    width: 40px;
  }
  img {
    max-width: 40px;
    max-height: 40px;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4240:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sdk_web3_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8801);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9401);
/* harmony import */ var _connectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1407);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sdk_web3_react__WEBPACK_IMPORTED_MODULE_2__, _ui__WEBPACK_IMPORTED_MODULE_3__, _connectButton__WEBPACK_IMPORTED_MODULE_4__]);
([_sdk_web3_react__WEBPACK_IMPORTED_MODULE_2__, _ui__WEBPACK_IMPORTED_MODULE_3__, _connectButton__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ConnectMetamask = (props)=>{
    const { onConnect , shouldInvertWalletIcon , setRequirements , ...rest } = props;
    const { connect  } = (0,_sdk_web3_react__WEBPACK_IMPORTED_MODULE_2__/* .useConnectorMetamask */ .$B)();
    const WalletIcon = shouldInvertWalletIcon ? _ui__WEBPACK_IMPORTED_MODULE_3__/* .MetaMaskCircleInversion */ .em : _ui__WEBPACK_IMPORTED_MODULE_3__/* .MetaMaskCircle */ .yW;
    const handleConnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        onConnect?.();
        await connect();
    }, [
        connect,
        onConnect,
        setRequirements,
        WalletIcon
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_connectButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...rest,
        iconSrcOrReactElement: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WalletIcon, {}),
        onClick: handleConnect,
        children: "MetaMask"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectMetamask);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o1": () => (/* reexport safe */ _connectMetamask__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _connectButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1407);
/* harmony import */ var _connectMetamask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4240);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_connectButton__WEBPACK_IMPORTED_MODULE_0__, _connectMetamask__WEBPACK_IMPORTED_MODULE_1__]);
([_connectButton__WEBPACK_IMPORTED_MODULE_0__, _connectMetamask__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* reexport */ WALLET_IDS)
});

;// CONCATENATED MODULE: ./components/constants/wallets.ts
const WALLET_IDS = {
    METAMASK: "Metamask"
};

;// CONCATENATED MODULE: ./components/constants/index.ts



/***/ }),

/***/ 3390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _walletModal__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _walletModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_walletModal__WEBPACK_IMPORTED_MODULE_0__]);
_walletModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 594:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9401);
/* harmony import */ var _sdk_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(947);
/* harmony import */ var _sdk_web3_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8801);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(856);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _walletModalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9057);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui__WEBPACK_IMPORTED_MODULE_1__, _sdk_hooks__WEBPACK_IMPORTED_MODULE_2__, _sdk_web3_react__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_4__]);
([_ui__WEBPACK_IMPORTED_MODULE_1__, _sdk_hooks__WEBPACK_IMPORTED_MODULE_2__, _sdk_web3_react__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const WalletModal = (props)=>{
    const { onClose  } = props;
    const { account  } = (0,_sdk_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useSDK */ .eC)();
    const { providerName  } = (0,_sdk_web3_react__WEBPACK_IMPORTED_MODULE_3__/* .useConnectorInfo */ .w2)();
    const { disconnect  } = (0,_sdk_web3_react__WEBPACK_IMPORTED_MODULE_3__/* .useDisconnect */ .qL)();
    const handleDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        disconnect?.();
        onClose?.();
    }, [
        disconnect,
        onClose
    ]);
    const handleCopy = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCopyToClipboard */ .m9)(account ?? "");
    const handleEtherscan = (0,_sdk_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useEtherscanOpen */ .mG)(account ?? "", "address");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_1__/* .Modal */ .u_, {
        title: "Account",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_walletModalStyles__WEBPACK_IMPORTED_MODULE_6__/* .WalletModalContentStyle */ .vM, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_walletModalStyles__WEBPACK_IMPORTED_MODULE_6__/* .WalletModalConnectedStyle */ .Gt, {
                    children: [
                        providerName && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_walletModalStyles__WEBPACK_IMPORTED_MODULE_6__/* .WalletModalConnectorStyle */ .nF, {
                            children: [
                                "Connected with ",
                                providerName
                            ]
                        }),
                        disconnect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_walletModalStyles__WEBPACK_IMPORTED_MODULE_6__/* .WalletModalDisconnectStyle */ .pM, {
                            size: "xs",
                            variant: "outlined",
                            onClick: handleDisconnect,
                            children: "Disconnect"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_walletModalStyles__WEBPACK_IMPORTED_MODULE_6__/* .WalletModalAccountStyle */ .bU, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_1__/* .Identicon */ .bK, {
                            address: account ?? ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_walletModalStyles__WEBPACK_IMPORTED_MODULE_6__/* .WalletModalAddressStyle */ .Iw, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_1__/* .Address */ .kL, {
                                address: account ?? "",
                                symbols: 6
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_walletModalStyles__WEBPACK_IMPORTED_MODULE_6__/* .WalletModalActionsStyle */ .sA, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_1__/* .ButtonIcon */ .Ei, {
                        onClick: handleCopy,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_1__/* .Copy */ .CK, {}),
                        size: "xs",
                        variant: "ghost",
                        children: "Copy address"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gt": () => (/* binding */ WalletModalConnectedStyle),
/* harmony export */   "Iw": () => (/* binding */ WalletModalAddressStyle),
/* harmony export */   "bU": () => (/* binding */ WalletModalAccountStyle),
/* harmony export */   "nF": () => (/* binding */ WalletModalConnectorStyle),
/* harmony export */   "pM": () => (/* binding */ WalletModalDisconnectStyle),
/* harmony export */   "sA": () => (/* binding */ WalletModalActionsStyle),
/* harmony export */   "vM": () => (/* binding */ WalletModalContentStyle)
/* harmony export */ });
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const WalletModalContentStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-c96140ae-0"
})`
  background-color: var(--collective-color-background);
  border-radius: ${({ theme  })=>theme.borderRadiusesMap.lg}px;
  padding: ${({ theme  })=>theme.spaceMap.lg}px;
`;
const WalletModalConnectedStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-c96140ae-1"
})`
  display: flex;
  align-items: center;
`;
const WalletModalConnectorStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-c96140ae-2"
})`
  color: var(--white-color);
  font-size: ${({ theme  })=>theme.fontSizesMap.xxs}px;
  line-height: 1.4em;
  flex-grow: 1;
  padding-right: ${({ theme  })=>theme.spaceMap.md}px;
  margin: ${({ theme  })=>theme.spaceMap.sm}px 0;
  margin-right: auto;
`;
const WalletModalDisconnectStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ui_button__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .zx).withConfig({
    componentId: "sc-c96140ae-3"
})`
  flex-shrink: 0;
`;
const WalletModalAccountStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-c96140ae-4"
})`
  display: flex;
  align-items: center;
  margin: ${({ theme  })=>theme.spaceMap.sm}px 0;
`;
const WalletModalAddressStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-c96140ae-5"
})`
  margin-left: ${({ theme  })=>theme.spaceMap.sm}px;
  font-size: ${({ theme  })=>theme.fontSizesMap.sm}px;
  line-height: 1.2em;
  font-weight: 800;
`;
const WalletModalActionsStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-c96140ae-6"
})`
  margin: 0 ${({ theme  })=>-theme.spaceMap.sm}px;
  margin-top: ${({ theme  })=>theme.spaceMap.md}px;

  button {
    padding-left: ${({ theme  })=>theme.spaceMap.sm}px;
    padding-right: ${({ theme  })=>theme.spaceMap.sm}px;
    margin-right: ${({ theme  })=>theme.spaceMap.sm}px;
  }
`;


/***/ }),

/***/ 7002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Vh": () => (/* reexport */ EscrowAbi__factory),
  "je": () => (/* reexport */ LendingManagerAbi__factory)
});

// UNUSED EXPORTS: factories

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: ./generated/factories/EscrowAbi__factory.ts
/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ 
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_lender",
                type: "address"
            },
            {
                internalType: "address",
                name: "_borrower",
                type: "address"
            },
            {
                internalType: "address payable",
                name: "_minerActor",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_loanAmount",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_rateAmount",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_withdrawInterval",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_end",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "Already_Started",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "Loan_Already_Repaid",
        type: "error"
    },
    {
        inputs: [],
        name: "Loan_Already_Started",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "Loan_Not_Expired",
        type: "error"
    },
    {
        inputs: [],
        name: "Loan_Not_Started",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "Not_Enough_Balance",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "Not_The_Borrower",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "Not_The_Borrower_Or_Lender",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "Not_The_Lender",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "Too_Early",
        type: "error"
    },
    {
        inputs: [],
        name: "Wrong_Beneficiary",
        type: "error"
    },
    {
        inputs: [],
        name: "Wrong_Owner",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "time",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "paidAmount",
                type: "uint256"
            }
        ],
        name: "ClosedLoan",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "time",
                type: "uint256"
            }
        ],
        name: "FailedPaidRate",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "time",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "paidAmount",
                type: "uint256"
            }
        ],
        name: "PaidRate",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "Received",
        type: "event"
    },
    {
        inputs: [],
        name: "borrower",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "canTerminate",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "closeLoan",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "end",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "lastWithdraw",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "lender",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "loanAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "loanPaidAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "minerActor",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "nextWithdraw",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "rateAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "repay",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "startLoan",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "started",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes",
                        name: "amount_requested",
                        type: "bytes"
                    }
                ],
                internalType: "struct MinerTypes.WithdrawBalanceParams",
                name: "balanceParams",
                type: "tuple"
            }
        ],
        name: "transferFromMinerActor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transferToMinerActor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "withdrawBeforLoanStarts",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "withdrawInterval",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        stateMutability: "payable",
        type: "receive"
    }
];
class EscrowAbi__factory {
    static abi = _abi;
    static createInterface() {
        return new external_ethers_.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new external_ethers_.Contract(address, _abi, signerOrProvider);
    }
}

;// CONCATENATED MODULE: ./generated/factories/LendingManagerAbi__factory.ts
/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ 
const LendingManagerAbi_factory_abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_oracle",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "Empty_Amount",
        type: "error"
    },
    {
        inputs: [],
        name: "Empty_Lender",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "Impossible_Borrower",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "max",
                type: "uint256"
            }
        ],
        name: "InterestRate_Too_High",
        type: "error"
    },
    {
        inputs: [],
        name: "Loan_No_More_Available",
        type: "error"
    },
    {
        inputs: [],
        name: "Loan_Period_Excedeed",
        type: "error"
    },
    {
        inputs: [],
        name: "Miner_Bad_Reputation",
        type: "error"
    },
    {
        inputs: [],
        name: "Miner_Reputation_Value",
        type: "error"
    },
    {
        inputs: [],
        name: "No_Borrower_Permissions",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "escrow",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "loanAmount",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountToReapy",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "lenderAmountAvailable",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startBlock",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountToPay",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "key",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "minerActor",
                type: "address"
            }
        ],
        name: "BorrowOrder",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "minerActor",
                type: "address"
            }
        ],
        name: "CheckReputation",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "lender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "key",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "endTimestamp",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "interestRate",
                type: "uint256"
            }
        ],
        name: "LenderPosition",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "contractAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "MinerMockAPIDeployed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "response",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "minerAddress",
                type: "address"
            }
        ],
        name: "ReputationReceived",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "borrowerPositions",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "bps",
                type: "uint256"
            }
        ],
        name: "calculateInterest",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "minerActorAddress",
                type: "address"
            }
        ],
        name: "checkReputation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "loanKey",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                internalType: "address payable",
                name: "minerActorAddress",
                type: "address"
            }
        ],
        name: "createBorrow",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "loanInterestRate",
                type: "uint256"
            }
        ],
        name: "createLendingPosition",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "currentId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "deployMockMinerActor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "escrowContracts",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "borrower",
                type: "address"
            }
        ],
        name: "getEscrowForBorrowers",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getLoanKeysLength",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "minerActorAddress",
                type: "address"
            }
        ],
        name: "isControllingAddress",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "loanKeys",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "oracle",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "ownerToMinerActor",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "positions",
        outputs: [
            {
                internalType: "address",
                name: "lender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "availableAmount",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "endTimestamp",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "interestRate",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "response",
                type: "uint256"
            }
        ],
        name: "receiveReputationScore",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "reputationRequest",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "reputationResponse",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
class LendingManagerAbi__factory {
    static abi = LendingManagerAbi_factory_abi;
    static createInterface() {
        return new external_ethers_.utils.Interface(LendingManagerAbi_factory_abi);
    }
    static connect(address, signerOrProvider) {
        return new external_ethers_.Contract(address, LendingManagerAbi_factory_abi, signerOrProvider);
    }
}

;// CONCATENATED MODULE: ./generated/factories/index.ts
/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ 


;// CONCATENATED MODULE: ./generated/index.ts
/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ 




/***/ }),

/***/ 2688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W_": () => (/* binding */ useLendingManagerContractWeb3)
/* harmony export */ });
/* unused harmony exports useLendingManagerContractRPC, useEscrowContractRPC, useEscrowContractWeb3 */
/* harmony import */ var _sdk_factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8014);
/* harmony import */ var generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7002);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sdk_factories__WEBPACK_IMPORTED_MODULE_0__, config__WEBPACK_IMPORTED_MODULE_1__]);
([_sdk_factories__WEBPACK_IMPORTED_MODULE_0__, config__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const lendingManager = (0,_sdk_factories__WEBPACK_IMPORTED_MODULE_0__/* .contractHooksFactory */ .g)(generated__WEBPACK_IMPORTED_MODULE_2__/* .LendingManagerAbi__factory */ .je, (chainId)=>(0,config__WEBPACK_IMPORTED_MODULE_1__/* .getSmartContractAddress */ .F0)(chainId));
const escrow = (0,_sdk_factories__WEBPACK_IMPORTED_MODULE_0__/* .contractHooksFactory */ .g)(generated__WEBPACK_IMPORTED_MODULE_2__/* .EscrowAbi__factory */ .Vh, (chainId)=>(0,config__WEBPACK_IMPORTED_MODULE_1__/* .getSmartContractAddress */ .F0)(chainId));
const useLendingManagerContractRPC = lendingManager.useContractRPC;
const useLendingManagerContractWeb3 = lendingManager.useContractWeb3;
const useEscrowContractRPC = escrow.useContractWeb3;
const useEscrowContractWeb3 = escrow.useContractWeb3;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W_": () => (/* reexport safe */ _contracts__WEBPACK_IMPORTED_MODULE_2__.W_),
/* harmony export */   "dd": () => (/* reexport safe */ _useModal__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   "m9": () => (/* reexport safe */ _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_1__.m)
/* harmony export */ });
/* harmony import */ var _useModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1810);
/* harmony import */ var _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2481);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2688);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useModal__WEBPACK_IMPORTED_MODULE_0__, _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_1__, _contracts__WEBPACK_IMPORTED_MODULE_2__]);
([_useModal__WEBPACK_IMPORTED_MODULE_0__, _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_1__, _contracts__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2481:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useCopyToClipboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useCopyToClipboard = (text)=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(text);
        (0,_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .ToastInfo */ .hG)("Copied to clipboard");
    }, [
        text
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4228);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers__WEBPACK_IMPORTED_MODULE_1__]);
_providers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useModal = (modal)=>{
    const methods = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers__WEBPACK_IMPORTED_MODULE_1__/* .ModalContext */ .tC);
    const openModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        methods.openModal(modal);
    }, [
        methods,
        modal
    ]);
    return {
        openModal,
        closeModal: methods.closeModal
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4228:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tC": () => (/* reexport safe */ _modals__WEBPACK_IMPORTED_MODULE_5__.tC),
/* harmony export */   "zr": () => (/* reexport safe */ _modals__WEBPACK_IMPORTED_MODULE_5__.zr)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5652);
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4994);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5753);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_x_date_pickers_AdapterMoment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4884);
/* harmony import */ var _mui_x_date_pickers_AdapterMoment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterMoment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2677);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9698);
/* harmony import */ var themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(583);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modals__WEBPACK_IMPORTED_MODULE_5__, _web3__WEBPACK_IMPORTED_MODULE_6__, themes__WEBPACK_IMPORTED_MODULE_7__]);
([_modals__WEBPACK_IMPORTED_MODULE_5__, _web3__WEBPACK_IMPORTED_MODULE_6__, themes__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// import { CookieThemeProvider as ThemeProvider } from '../components/ui/theme';









const Providers = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_3__.LocalizationProvider, {
        dateAdapter: _mui_x_date_pickers_AdapterMoment__WEBPACK_IMPORTED_MODULE_4__.AdapterMoment,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_theme__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .f6, {
            theme: themes__WEBPACK_IMPORTED_MODULE_7__/* .themeLight */ .Qp,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles__WEBPACK_IMPORTED_MODULE_2__/* .GlobalStyle */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modals__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                        children: children
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Providers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tC": () => (/* binding */ ModalContext),
/* harmony export */   "zr": () => (/* binding */ MODAL)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9401);
/* harmony import */ var _components_walletModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3390);
/* harmony import */ var _components_WalletsModalForETH__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_2__, _components_walletModal__WEBPACK_IMPORTED_MODULE_3__, _components_WalletsModalForETH__WEBPACK_IMPORTED_MODULE_4__]);
([_components_ui__WEBPACK_IMPORTED_MODULE_2__, _components_walletModal__WEBPACK_IMPORTED_MODULE_3__, _components_WalletsModalForETH__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





var MODAL;
(function(MODAL) {
    MODAL[MODAL["connect"] = 0] = "connect";
    MODAL[MODAL["wallet"] = 1] = "wallet";
})(MODAL || (MODAL = {}));
const ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const ModalProvider = ({ children  })=>{
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { themeName  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .useThemeToggle */ .M1)();
    const openModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((modal)=>{
        setActive(modal);
    }, []);
    const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setActive(null);
    }, []);
    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            openModal,
            closeModal
        }), [
        closeModal,
        openModal
    ]);
    const common = {
        onClose: closeModal,
        shouldInvertWalletIcon: themeName === "dark"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ModalContext.Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_walletModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                open: active === MODAL.wallet,
                ...common
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WalletsModalForETH__WEBPACK_IMPORTED_MODULE_4__/* .WalletsModalForEth */ .D, {
                open: active === MODAL.connect,
                ...common
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ModalProvider));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sdk_web3_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8801);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8014);
/* harmony import */ var _config_dynamics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sdk_web3_react__WEBPACK_IMPORTED_MODULE_1__, config__WEBPACK_IMPORTED_MODULE_2__]);
([sdk_web3_react__WEBPACK_IMPORTED_MODULE_1__, config__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Web3Provider = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sdk_web3_react__WEBPACK_IMPORTED_MODULE_1__/* .ProviderWeb3 */ .BK, {
        defaultChainId: _config_dynamics__WEBPACK_IMPORTED_MODULE_3__/* ["default"].defaultChain */ .Z.defaultChain,
        supportedChainIds: _config_dynamics__WEBPACK_IMPORTED_MODULE_3__/* ["default"].supportedChains */ .Z.supportedChains,
        rpc: config__WEBPACK_IMPORTED_MODULE_2__/* .backendRPC */ .IL,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web3Provider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "f": () => (/* binding */ SDKContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4281);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(399);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tiny_invariant__WEBPACK_IMPORTED_MODULE_1__]);
tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const SDKContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});
const ProviderSDK = (props)=>{
    const { children , account , chainId , supportedChainIds , providerWeb3 , swrConfig  } = props;
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(chainId !== null, "Chain is not supported");
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(supportedChainIds?.length, "Supported chains are required");
    const providerRpc = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return props.providerRpc ?? (0,_ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__.getDefaultProvider)((0,_ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__.getNetwork)(chainId));
    }, [
        props.providerRpc,
        chainId
    ]);
    const providerMainnetRpc = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return props.providerMainnetRpc ?? (0,_ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__.getDefaultProvider)("mainnet");
    }, [
        props.providerMainnetRpc
    ]);
    const onError = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return props.onError ?? console.error;
    }, [
        props.onError
    ]);
    const value = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({
            account,
            chainId,
            supportedChainIds,
            providerMainnetRpc,
            providerRpc,
            providerWeb3,
            swrConfig,
            onError
        }), [
        account,
        chainId,
        supportedChainIds,
        providerMainnetRpc,
        providerRpc,
        providerWeb3,
        swrConfig,
        onError
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SDKContext.Provider, {
        value: value,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(ProviderSDK));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _SDK__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "f": () => (/* reexport safe */ _SDK__WEBPACK_IMPORTED_MODULE_0__.f)
/* harmony export */ });
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2696);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SDK__WEBPACK_IMPORTED_MODULE_0__]);
_SDK__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ createContractGetter)
/* harmony export */ });
const createContractGetter = (factory)=>{
    const providerCache = new WeakMap();
    return (address, signerOrProvider, cacheSeed = 0)=>{
        const cacheByAddressKey = `${address}-${cacheSeed}`;
        let cacheByAddress = providerCache.get(signerOrProvider);
        let contract = cacheByAddress?.[cacheByAddressKey];
        if (!cacheByAddress) {
            cacheByAddress = {};
            providerCache.set(signerOrProvider, cacheByAddress);
        }
        if (!contract) {
            contract = factory.connect(address, signerOrProvider);
            cacheByAddress[cacheByAddressKey] = contract;
        }
        return contract;
    };
};


/***/ }),

/***/ 4464:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ contractHooksFactory)
/* harmony export */ });
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(903);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(947);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_1__]);
_hooks__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const contractHooksFactory = (factory, getContractAddress)=>{
    const getContract = (0,_contracts__WEBPACK_IMPORTED_MODULE_2__/* .createContractGetter */ .X)(factory);
    return {
        useContractRPC: ()=>{
            const { chainId , providerRpc  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSDK */ .eC)();
            const contractAddress = getContractAddress(chainId);
            return getContract(contractAddress, providerRpc);
        },
        useContractWeb3: ()=>{
            const { chainId , providerWeb3  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSDK */ .eC)();
            const contractAddress = getContractAddress(chainId);
            const signer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
                return providerWeb3?.getSigner();
            }, [
                providerWeb3
            ]);
            if (!signer) return null;
            return getContract(contractAddress, signer);
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* reexport safe */ _contracts__WEBPACK_IMPORTED_MODULE_0__.g)
/* harmony export */ });
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4464);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contracts__WEBPACK_IMPORTED_MODULE_0__]);
_contracts__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export divide */
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tiny_invariant__WEBPACK_IMPORTED_MODULE_0__]);
tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const PRECISION = 6;
const divide = (number, divider, precision = PRECISION)=>{
    invariant(number != null, "Number is required");
    invariant(divider != null, "Divider is required");
    const multiplier = 10 ** precision;
    return number.mul(multiplier).div(divider).toNumber() / multiplier;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EB": () => (/* binding */ getEtherscanLink)
/* harmony export */ });
/* unused harmony exports ETHERSCAN_ENTITIES, ETHERSCAN_PREFIX_BY_NETWORK, getEtherscanPrefix, getEtherscanTxLink, getEtherscanTokenLink, getEtherscanAddressLink */
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4281);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tiny_invariant__WEBPACK_IMPORTED_MODULE_0__, _constants__WEBPACK_IMPORTED_MODULE_1__]);
([tiny_invariant__WEBPACK_IMPORTED_MODULE_0__, _constants__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


var ETHERSCAN_ENTITIES;
(function(ETHERSCAN_ENTITIES) {
    ETHERSCAN_ENTITIES["Tx"] = "tx";
    ETHERSCAN_ENTITIES["Token"] = "token";
    ETHERSCAN_ENTITIES["Address"] = "address";
})(ETHERSCAN_ENTITIES || (ETHERSCAN_ENTITIES = {}));
const ETHERSCAN_PREFIX_BY_NETWORK = {
    [_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHAINS.FilecoinMainnet */ .zG.FilecoinMainnet]: "filecoin",
    [_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHAINS.Wallaby */ .zG.Wallaby]: "wallaby.",
    [_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHAINS.Hyperspace */ .zG.Hyperspace]: "hyperspace."
};
const getEtherscanPrefix = (chainId)=>{
    const prefix = ETHERSCAN_PREFIX_BY_NETWORK[chainId];
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(prefix != null, "Chain is not supported");
    return prefix;
};
const getEtherscanLink = (chainId, hash, entity)=>{
    const prefix = getEtherscanPrefix(chainId);
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(hash && typeof hash === "string", "Hash should be a string");
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(entity && typeof entity === "string", "Entity should be a string");
    return `https://${prefix}etherscan.io/${entity}/${hash}`;
};
const getEtherscanTxLink = (chainId, hash)=>{
    return getEtherscanLink(chainId, hash, ETHERSCAN_ENTITIES.Tx);
};
const getEtherscanTokenLink = (chainId, hash)=>{
    return getEtherscanLink(chainId, hash, ETHERSCAN_ENTITIES.Token);
};
const getEtherscanAddressLink = (chainId, hash)=>{
    return getEtherscanLink(chainId, hash, ETHERSCAN_ENTITIES.Address);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EB": () => (/* reexport safe */ _etherscan__WEBPACK_IMPORTED_MODULE_1__.EB),
/* harmony export */   "xw": () => (/* reexport safe */ _openWindow__WEBPACK_IMPORTED_MODULE_2__.x)
/* harmony export */ });
/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _etherscan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4752);
/* harmony import */ var _openWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2842);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_divide__WEBPACK_IMPORTED_MODULE_0__, _etherscan__WEBPACK_IMPORTED_MODULE_1__]);
([_divide__WEBPACK_IMPORTED_MODULE_0__, _etherscan__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ openWindow)
/* harmony export */ });
const openWindow = (url)=>{
    if (true) return;
    window.open(url, "_blank", "noopener,noreferrer");
};


/***/ }),

/***/ 947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _useLocalStorage__WEBPACK_IMPORTED_MODULE_5__._),
/* harmony export */   "eC": () => (/* reexport safe */ _useSDK__WEBPACK_IMPORTED_MODULE_6__.e),
/* harmony export */   "mG": () => (/* reexport safe */ _useEtherscanOpen__WEBPACK_IMPORTED_MODULE_7__.m)
/* harmony export */ });
/* harmony import */ var _useDebounceCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5838);
/* harmony import */ var _useFilecoinBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2259);
/* harmony import */ var _useFilecoinSWR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2597);
/* harmony import */ var _useCollectiveSWR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4795);
/* harmony import */ var _useCollectiveSWRImmutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2032);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8345);
/* harmony import */ var _useSDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4718);
/* harmony import */ var _useEtherscanOpen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3826);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useFilecoinBalance__WEBPACK_IMPORTED_MODULE_1__, _useFilecoinSWR__WEBPACK_IMPORTED_MODULE_2__, _useCollectiveSWR__WEBPACK_IMPORTED_MODULE_3__, _useCollectiveSWRImmutable__WEBPACK_IMPORTED_MODULE_4__, _useSDK__WEBPACK_IMPORTED_MODULE_6__, _useEtherscanOpen__WEBPACK_IMPORTED_MODULE_7__]);
([_useFilecoinBalance__WEBPACK_IMPORTED_MODULE_1__, _useFilecoinSWR__WEBPACK_IMPORTED_MODULE_2__, _useCollectiveSWR__WEBPACK_IMPORTED_MODULE_3__, _useCollectiveSWRImmutable__WEBPACK_IMPORTED_MODULE_4__, _useSDK__WEBPACK_IMPORTED_MODULE_6__, _useEtherscanOpen__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4795:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export useCollectiveSWR */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var _useSDK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, _useSDK__WEBPACK_IMPORTED_MODULE_2__]);
([swr__WEBPACK_IMPORTED_MODULE_1__, _useSDK__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const COLLECTIVE_SWR_DEFAULT_CONFIG = {
    errorRetryInterval: 10000,
    focusThrottleInterval: 10000
};
const useCollectiveSWR = (key, fetcher, config)=>{
    const { swrConfig  } = useSDK();
    const result = useSWRSource(key, fetcher, {
        ...COLLECTIVE_SWR_DEFAULT_CONFIG,
        ...swrConfig,
        ...config
    });
    const mutate = result.mutate;
    const update = useCallback(()=>{
        return mutate(undefined, true);
    }, [
        mutate
    ]);
    return {
        mutate,
        update,
        /*
     * support dependency collection
     * https://swr.vercel.app/advanced/performance#dependency-collection
     */ get data () {
            return result.data;
        },
        get loading () {
            return result.isValidating;
        },
        get initialLoading () {
            return result.data == null && result.isValidating;
        },
        get error () {
            return result.error;
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2032:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export useCollectiveSWRImmutable */
/* harmony import */ var _useCollectiveSWR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4795);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useCollectiveSWR__WEBPACK_IMPORTED_MODULE_0__]);
_useCollectiveSWR__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useCollectiveSWRImmutable = (key, fetcher, config)=>{
    return useCollectiveSWR(key, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        ...config
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useDebounceCallback */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDebounceCallback = (callback, timeout = 0)=>{
    const timer = useRef(null);
    const clearTimer = useCallback(()=>{
        if (timer.current != null) {
            clearTimeout(timer.current);
        }
    }, []);
    useEffect(()=>{
        return clearTimer;
    }, [
        clearTimer
    ]);
    return useCallback(()=>{
        clearTimer();
        timer.current = setTimeout(callback, timeout);
    }, [
        callback,
        timeout,
        clearTimer
    ]);
};


/***/ }),

/***/ 3826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useEtherscanOpen)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5261);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSDK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers__WEBPACK_IMPORTED_MODULE_0__, _useSDK__WEBPACK_IMPORTED_MODULE_2__]);
([_helpers__WEBPACK_IMPORTED_MODULE_0__, _useSDK__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useEtherscanOpen = (hash, entity)=>{
    const { chainId  } = (0,_useSDK__WEBPACK_IMPORTED_MODULE_2__/* .useSDK */ .e)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const link = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__/* .getEtherscanLink */ .EB)(chainId, hash, entity);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__/* .openWindow */ .xw)(link);
    }, [
        chainId,
        entity,
        hash
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export useFilecoinBalance */
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(656);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSDK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4718);
/* harmony import */ var _useFilecoinSWR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2597);
/* harmony import */ var _useDebounceCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useSDK__WEBPACK_IMPORTED_MODULE_2__, _useFilecoinSWR__WEBPACK_IMPORTED_MODULE_3__]);
([_useSDK__WEBPACK_IMPORTED_MODULE_2__, _useFilecoinSWR__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useFilecoinBalance = (account)=>{
    const { providerWeb3 , account: sdkAccount  } = useSDK();
    const mergedAccount = account ?? sdkAccount;
    const result = useFilecoinSWR({
        shouldFetch: !!mergedAccount,
        method: "getBalance",
        params: [
            mergedAccount,
            "latest"
        ]
    });
    const updateBalance = useDebounceCallback(result.update);
    const subscribeToUpdates = useCallback(()=>{
        if (!mergedAccount || !providerWeb3) return;
        try {
            providerWeb3.on("block", updateBalance);
            return ()=>{
                providerWeb3.off("block", updateBalance);
            };
        } catch (error) {
            return warning(false, "Cannot subscribe to Block event");
        }
    }, [
        providerWeb3,
        mergedAccount,
        updateBalance
    ]);
    useEffect(subscribeToUpdates, [
        subscribeToUpdates
    ]);
    return result;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export useFilecoinSWR */
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4281);
/* harmony import */ var _useCollectiveSWR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4795);
/* harmony import */ var _useSDK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tiny_invariant__WEBPACK_IMPORTED_MODULE_0__, _useCollectiveSWR__WEBPACK_IMPORTED_MODULE_1__, _useSDK__WEBPACK_IMPORTED_MODULE_2__]);
([tiny_invariant__WEBPACK_IMPORTED_MODULE_0__, _useCollectiveSWR__WEBPACK_IMPORTED_MODULE_1__, _useSDK__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useFilecoinSWR = (props)=>{
    const { shouldFetch =true , params =[] , method , config  } = props;
    const providerRpcFromSdk = useSDK().providerRpc;
    const providerRpc = props.providerRpc ?? providerRpcFromSdk;
    invariant(providerRpc != null, "RPC Provider is not provided");
    invariant(method != null, "Method is required");
    return useCollectiveSWR(shouldFetch ? [
        providerRpc,
        method,
        ...params
    ] : null, (providerRpc, method, ...params)=>{
        return providerRpc[method](...params);
    }, config);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(656);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tiny_warning__WEBPACK_IMPORTED_MODULE_1__);


const useLocalStorage = (key, initialValue)=>{
    const readValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            tiny_warning__WEBPACK_IMPORTED_MODULE_1___default()("undefined" === "undefined", `Error reading localStorage key "${key}"`);
            return initialValue;
        }
    }, [
        initialValue,
        key
    ]);
    const [storedValue, setStoredValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(readValue);
    const saveToStorage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue)=>{
        try {
            window.localStorage.setItem(key, JSON.stringify(newValue));
            window.dispatchEvent(new Event("local-storage"));
        } catch (error) {
            tiny_warning__WEBPACK_IMPORTED_MODULE_1___default()("undefined" === "undefined", `Error setting localStorage key "${key}"`);
        }
    }, [
        key
    ]);
    const setValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value)=>{
        if (value instanceof Function) {
            setStoredValue((current)=>{
                const newValue = value(current);
                saveToStorage(newValue);
                return newValue;
            });
        } else {
            saveToStorage(value);
            setStoredValue(value);
        }
    }, [
        saveToStorage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setStoredValue(readValue());
    }, [
        readValue
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleStorageChange = ()=>{
            setStoredValue(readValue());
        };
        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("local-storage", handleStorageChange);
        return ()=>{
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("local-storage", handleStorageChange);
        };
    }, [
        readValue
    ]);
    return [
        storedValue,
        setValue
    ];
};


/***/ }),

/***/ 4718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useSDK)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3580);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_1__]);
_context__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useSDK = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__/* .SDKContext */ .f);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AH": () => (/* reexport */ CONNECTOR_NAMES),
  "g_": () => (/* reexport */ POLLING_INTERVAL),
  "yS": () => (/* reexport */ PROVIDER_NAMES),
  "zW": () => (/* reexport */ STORAGE_CONNECTOR_KEY)
});

;// CONCATENATED MODULE: ./sdk/web3-react/constants/web3.ts
const POLLING_INTERVAL = 12000;

;// CONCATENATED MODULE: ./sdk/web3-react/constants/storage.ts
const STORAGE_CONNECTOR_KEY = "collective-web3-connector";

;// CONCATENATED MODULE: ./sdk/web3-react/constants/connectors.ts
var PROVIDER_NAMES;
(function(PROVIDER_NAMES) {
    PROVIDER_NAMES["METAMASK"] = "MetaMask";
    PROVIDER_NAMES["INJECTED"] = "Injected";
})(PROVIDER_NAMES || (PROVIDER_NAMES = {}));
var CONNECTOR_NAMES;
(function(CONNECTOR_NAMES) {
    CONNECTOR_NAMES["INJECTED"] = "injected";
})(CONNECTOR_NAMES || (CONNECTOR_NAMES = {}));

;// CONCATENATED MODULE: ./sdk/web3-react/constants/index.ts





/***/ }),

/***/ 3968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b": () => (/* binding */ ConnectorsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6590);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(947);
/* harmony import */ var _hooks_useAutoConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(519);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7869);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4447);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_3__, _hooks_useAutoConnect__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks__WEBPACK_IMPORTED_MODULE_3__, _hooks_useAutoConnect__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ConnectorsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const ProviderConnectors = (props)=>{
    const BASE_URL =  true ? "" : 0;
    const DEFAULT_LOGO = `${BASE_URL}/apple-touch-icon.png`;
    const DEFAULT_NAME = "Collective";
    const { rpc , children , defaultChainId , appName =DEFAULT_NAME , appLogoUrl =DEFAULT_LOGO  } = props;
    const { supportedChainIds  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSDK */ .eC)();
    const walletConnectRPC = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>Object.entries(rpc).reduce((result, [key, value])=>({
                ...result,
                [key]: (0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .isUrl */ .CB)(value) ? value : BASE_URL + value
            }), {}), [
        rpc,
        BASE_URL
    ]);
    const connectors = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            [_constants__WEBPACK_IMPORTED_MODULE_5__/* .CONNECTOR_NAMES.INJECTED */ .AH.INJECTED]: new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__.InjectedConnector({
                supportedChainIds
            })
        }), [
        appLogoUrl,
        appName,
        rpc,
        defaultChainId,
        supportedChainIds,
        walletConnectRPC
    ]);
    (0,_hooks_useAutoConnect__WEBPACK_IMPORTED_MODULE_4__/* .useAutoConnect */ .vl)(connectors);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConnectorsContext.Provider, {
        value: connectors,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ProviderConnectors));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BK": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "bJ": () => (/* reexport safe */ _connectors__WEBPACK_IMPORTED_MODULE_1__.b)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3968);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3__WEBPACK_IMPORTED_MODULE_0__, _connectors__WEBPACK_IMPORTED_MODULE_1__]);
([_web3__WEBPACK_IMPORTED_MODULE_0__, _connectors__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3185:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4281);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(399);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3566);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7543);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3580);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7869);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3968);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tiny_invariant__WEBPACK_IMPORTED_MODULE_1__, _constants__WEBPACK_IMPORTED_MODULE_3__, _context__WEBPACK_IMPORTED_MODULE_5__, _connectors__WEBPACK_IMPORTED_MODULE_9__]);
([tiny_invariant__WEBPACK_IMPORTED_MODULE_1__, _constants__WEBPACK_IMPORTED_MODULE_3__, _context__WEBPACK_IMPORTED_MODULE_5__, _connectors__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function getLibrary(provider) {
    const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__.Web3Provider(provider);
    library.pollingInterval = _constants__WEBPACK_IMPORTED_MODULE_8__/* .POLLING_INTERVAL */ .g_;
    return library;
}
const ProviderSDK = (props)=>{
    const { rpc , defaultChainId , supportedChainIds , children , pollingInterval =_constants__WEBPACK_IMPORTED_MODULE_8__/* .POLLING_INTERVAL */ .g_ , ...rest } = props;
    const { chainId =defaultChainId , library , account  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_6__.useWeb3React)();
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(rpc[chainId], `RPC url for chain ${chainId} is not provided`);
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(rpc[_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHAINS.FilecoinMainnet */ .zG.FilecoinMainnet], "RPC url for mainnet is not provided");
    // const providerRpc = getStaticRpcBatchProvider(
    //   chainId,
    //   rpc[chainId],
    //   0,
    //   pollingInterval,
    // );
    // const providerMainnetRpc = getStaticRpcBatchProvider(
    //   CHAINS.Mainnet,
    //   rpc[CHAINS.Mainnet],
    //   0,
    //   pollingInterval,
    // );
    const providerRpc = (0,_providers__WEBPACK_IMPORTED_MODULE_4__/* .getStaticRpcProvider */ .KA)(chainId, rpc[chainId], 0, pollingInterval);
    const providerMainnetRpc = (0,_providers__WEBPACK_IMPORTED_MODULE_4__/* .getStaticRpcProvider */ .KA)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHAINS.FilecoinMainnet */ .zG.FilecoinMainnet, rpc[_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHAINS.FilecoinMainnet */ .zG.FilecoinMainnet], 0, pollingInterval);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context__WEBPACK_IMPORTED_MODULE_5__/* .ProviderSDK */ .E, {
        chainId: chainId,
        supportedChainIds: supportedChainIds,
        providerWeb3: library,
        providerRpc: providerRpc,
        providerMainnetRpc: providerMainnetRpc,
        account: account ?? undefined,
        ...rest,
        children: children
    });
};
const ProviderWeb3 = (props)=>{
    const { children , rpc , appName , appLogoUrl , ...sdkProps } = props;
    const { defaultChainId  } = props;
    const connectorsProps = {
        rpc,
        appName,
        appLogoUrl,
        defaultChainId
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__.Web3ReactProvider, {
        getLibrary: getLibrary,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProviderSDK, {
            rpc: rpc,
            ...sdkProps,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_connectors__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                ...connectorsProps,
                children: children
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_7__.memo)(ProviderWeb3));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "IX": () => (/* reexport */ checkIfBraveBrowser),
  "bP": () => (/* reexport */ hasInjected),
  "E2": () => (/* reexport */ isBraveWalletProvider),
  "T7": () => (/* reexport */ isMetamaskProvider),
  "CB": () => (/* reexport */ isUrl)
});

// UNUSED EXPORTS: browser, device, isAndroid, isDappBrowserProvider, isEdge, isFirefox, isIOS, isMobile, isMobileOrTablet, isTablet, os

// EXTERNAL MODULE: external "ua-parser-js"
var external_ua_parser_js_ = __webpack_require__(9621);
;// CONCATENATED MODULE: ./sdk/web3-react/helpers/ua.ts

const parser = new external_ua_parser_js_.UAParser();
const device = parser.getDevice();
const browser = parser.getBrowser();
const os = parser.getOS();
const isIOS = os.name === "iOS";
const isAndroid = os.name === "Android";
const isMobile = device.type === "mobile";
const isTablet = device.type === "tablet";
const ua_isMobileOrTablet = isMobile || isTablet;
const isFirefox = browser.name === "Firefox";
const isEdge = browser.name === "Edge";
const checkIfBraveBrowser = async ()=>// @ts-expect-error TS2339: Property 'brave' does not exist on type 'Navigator'.
    navigator?.brave && await navigator?.brave.isBrave() || false;

;// CONCATENATED MODULE: ./sdk/web3-react/helpers/providerDetectors.ts

const hasInjected = ()=>{
    try {
        return !!window.ethereum;
    } catch (error) {
        return false;
    }
};
const isMetamaskProvider = ()=>{
    try {
        return !!window.ethereum?.isMetaMask;
    } catch (error) {
        return false;
    }
};
const isBraveWalletProvider = ()=>{
    try {
        return !!window.ethereum?.isBraveWallet;
    } catch (error) {
        return false;
    }
};
const isDappBrowserProvider = ()=>{
    return isMobileOrTablet && hasInjected();
};

;// CONCATENATED MODULE: ./sdk/web3-react/helpers/isUrl.ts
const pattern = new RegExp("^" + "(?:(?:(?:https?|ftp):)?\\/\\/)" + "(?:\\S+(?::\\S*)?@)?" + "(?:" + "(?!(?:10|127)(?:\\.\\d{1,3}){3})" + "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" + "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" + "(?:" + "(?:" + "[a-z0-9\\u00a1-\\uffff]" + "[a-z0-9\\u00a1-\\uffff_-]{0,62}" + ")?" + "[a-z0-9\\u00a1-\\uffff]\\." + ")+" + "(?:[a-z\\u00a1-\\uffff]{2,}\\.?)" + ")" + "(?::\\d{2,5})?" + "(?:[/?#]\\S*)?" + "$", "i");
/* harmony default export */ function isUrl(url) {
    return pattern.test(url);
}

;// CONCATENATED MODULE: ./sdk/web3-react/helpers/index.ts





/***/ }),

/***/ 3885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$6": () => (/* reexport safe */ _useWeb3__WEBPACK_IMPORTED_MODULE_4__.$),
/* harmony export */   "$B": () => (/* reexport safe */ _useConnectorMetamask__WEBPACK_IMPORTED_MODULE_7__.$),
/* harmony export */   "En": () => (/* reexport safe */ _useSupportedChains__WEBPACK_IMPORTED_MODULE_3__.E),
/* harmony export */   "qL": () => (/* reexport safe */ _useDisconnect__WEBPACK_IMPORTED_MODULE_2__.q),
/* harmony export */   "w2": () => (/* reexport safe */ _useConnectorInfo__WEBPACK_IMPORTED_MODULE_6__.w)
/* harmony export */ });
/* harmony import */ var _useAutoConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var _useConnectorStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8657);
/* harmony import */ var _useDisconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8861);
/* harmony import */ var _useSupportedChains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9573);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5938);
/* harmony import */ var _useConnectorError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6764);
/* harmony import */ var _useConnectorInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(120);
/* harmony import */ var _useConnectorMetamask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6729);
/* harmony import */ var _useConnectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4193);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useAutoConnect__WEBPACK_IMPORTED_MODULE_0__, _useConnectorStorage__WEBPACK_IMPORTED_MODULE_1__, _useConnectorMetamask__WEBPACK_IMPORTED_MODULE_7__, _useConnectors__WEBPACK_IMPORTED_MODULE_8__]);
([_useAutoConnect__WEBPACK_IMPORTED_MODULE_0__, _useConnectorStorage__WEBPACK_IMPORTED_MODULE_1__, _useConnectorMetamask__WEBPACK_IMPORTED_MODULE_7__, _useConnectors__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 519:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vl": () => (/* binding */ useAutoConnect)
/* harmony export */ });
/* unused harmony exports useEagerConnector, useSaveConnectorToLS, useDeleteConnectorFromLS, useWatchConnectorInLS */
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(656);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5938);
/* harmony import */ var _useConnectorStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8657);
/* harmony import */ var _useConnectorInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(120);
/* harmony import */ var _useDisconnect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8861);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useConnectorStorage__WEBPACK_IMPORTED_MODULE_3__]);
_useConnectorStorage__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const useAutoConnect = (connectors)=>{
    useEagerConnector(connectors);
    useSaveConnectorToLS();
    useDeleteConnectorFromLS();
    useWatchConnectorInLS();
};
const useEagerConnector = (connectors)=>{
    const { active , activate  } = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3 */ .$)();
    const [savedConnector] = (0,_useConnectorStorage__WEBPACK_IMPORTED_MODULE_3__/* .useConnectorStorage */ .i)();
    const tried = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const getEagerConnector = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const { injected  } = connectors;
        // Saved in LS
        const saved = savedConnector && connectors[savedConnector];
        if (saved) return saved;
        return null;
    }, [
        connectors,
        savedConnector
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (tried.current || active) return;
        (async ()=>{
            tried.current = true;
            const connector = await getEagerConnector();
            if (!connector) return;
            try {
                await activate(connector, undefined, true);
            } catch (error) {
                tiny_warning__WEBPACK_IMPORTED_MODULE_0___default()(false, "Connector is not activated");
            }
        })();
    }, [
        activate,
        getEagerConnector,
        active
    ]);
};
const useSaveConnectorToLS = ()=>{
    const [, saveConnector] = (0,_useConnectorStorage__WEBPACK_IMPORTED_MODULE_3__/* .useConnectorStorage */ .i)();
    const { isInjected  } = (0,_useConnectorInfo__WEBPACK_IMPORTED_MODULE_4__/* .useConnectorInfo */ .w)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isInjected) return saveConnector("injected");
    }, [
        isInjected,
        saveConnector
    ]);
};
const useDeleteConnectorFromLS = ()=>{
    const [, saveConnector] = (0,_useConnectorStorage__WEBPACK_IMPORTED_MODULE_3__/* .useConnectorStorage */ .i)();
    const { active  } = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3 */ .$)();
    const lastState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(active);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const isStateChanged = lastState.current !== active;
        const isDisconnected = !active;
        lastState.current = active;
        if (isStateChanged && isDisconnected) {
            saveConnector(null);
        }
    }, [
        active,
        saveConnector
    ]);
};
const useWatchConnectorInLS = ()=>{
    const [savedConnector] = (0,_useConnectorStorage__WEBPACK_IMPORTED_MODULE_3__/* .useConnectorStorage */ .i)();
    const { disconnect  } = (0,_useDisconnect__WEBPACK_IMPORTED_MODULE_5__/* .useDisconnect */ .q)();
    const lastConnector = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(savedConnector);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const isConnectorChanged = lastConnector.current !== savedConnector;
        const isDisconnected = !savedConnector;
        lastConnector.current = savedConnector;
        if (isConnectorChanged && isDisconnected) {
            disconnect?.();
        }
    }, [
        savedConnector,
        disconnect
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useConnectorError */
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5938);

const useConnectorError = ()=>{
    const { error  } = useWeb3();
    if (!error) {
        return error;
    }
    return error;
};


/***/ }),

/***/ 120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useConnectorInfo)
/* harmony export */ });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6590);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5938);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7869);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4447);




const useConnectorInfo = ()=>{
    const { active , connector  } = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)();
    const isInjected = active && connector instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector;
    const isMetamask = isInjected && (0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .isMetamaskProvider */ .T7)();
    const providerName = (()=>{
        // Metamask should be last in this list because almost all EIP-1193 wallets
        // are trying to mimic Metamask by setting isMetamask = true
        if (isMetamask) return _constants__WEBPACK_IMPORTED_MODULE_2__/* .PROVIDER_NAMES.METAMASK */ .yS.METAMASK;
        // General providers which doesn't specify what exact wallet is being used.
        // Works as a fallback.
        if (isInjected) return _constants__WEBPACK_IMPORTED_MODULE_2__/* .PROVIDER_NAMES.INJECTED */ .yS.INJECTED;
        return undefined;
    })();
    const connectorName = (()=>{
        if (isInjected) return _constants__WEBPACK_IMPORTED_MODULE_2__/* .CONNECTOR_NAMES.INJECTED */ .AH.INJECTED;
        return undefined;
    })();
    return {
        connectorName,
        providerName,
        isMetamask,
        isInjected
    };
};


/***/ }),

/***/ 6729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useConnectorMetamask)
/* harmony export */ });
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4281);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(656);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tiny_warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5261);
/* harmony import */ var _useConnectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4193);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5938);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4447);
/* harmony import */ var _useDisconnect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8861);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tiny_invariant__WEBPACK_IMPORTED_MODULE_0__, _helpers__WEBPACK_IMPORTED_MODULE_3__, _useConnectors__WEBPACK_IMPORTED_MODULE_4__]);
([tiny_invariant__WEBPACK_IMPORTED_MODULE_0__, _helpers__WEBPACK_IMPORTED_MODULE_3__, _useConnectors__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const WALLET_URL = "https://metamask.app.link/dapp/";
const useConnectorMetamask = ()=>{
    const { injected  } = (0,_useConnectors__WEBPACK_IMPORTED_MODULE_4__/* .useConnectors */ .Y)();
    const { activate  } = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_5__/* .useWeb3 */ .$)();
    const { disconnect  } = (0,_useDisconnect__WEBPACK_IMPORTED_MODULE_7__/* .useForceDisconnect */ .Q)();
    const openInWallet = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        try {
            const { host , pathname , search  } = window.location;
            const pageUrlWithoutProtocol = encodeURI(host + pathname + search);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .openWindow */ .xw)(`${WALLET_URL}${pageUrlWithoutProtocol}`);
        } catch (error) {
            tiny_warning__WEBPACK_IMPORTED_MODULE_1___default()(false, "Failed to open the link");
        }
    }, []);
    const connect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(injected, "Connector is required");
        // Brave Wallet mimics MetaMask.
        // If a user has the Brave Browser without the MetaMask extension we want
        // to redirect the user to the MetaMask website.
        // If MetaMask is installed, the isBraveWallet property will be false.
        if (await (0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .checkIfBraveBrowser */ .IX)() && (0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .isBraveWalletProvider */ .E2)()) {
            openInWallet();
            return;
        }
        // Do not check for isMetamaskProvider here,
        // it will break an ability to connect with other EIP-1193 wallets,
        // which do not have their branded connection button
        // and recommend to click on MetaMask button in such case.
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .hasInjected */ .bP)()) {
            await disconnect();
            activate(injected);
        } else {
            openInWallet();
        }
    }, [
        activate,
        disconnect,
        openInWallet,
        injected
    ]);
    return {
        connect,
        connector: injected
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8657:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useConnectorStorage)
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(947);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7869);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_0__]);
_hooks__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useConnectorStorage = ()=>(0,_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useLocalStorage */ ._)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .STORAGE_CONNECTOR_KEY */ .zW, null);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useConnectors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_1__]);
_context__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useConnectors = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__/* .ConnectorsContext */ .bJ);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useForceDisconnect),
/* harmony export */   "q": () => (/* binding */ useDisconnect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5938);


const useForceDisconnect = ()=>{
    const { deactivate , connector  } = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)();
    const extendedConnector = connector;
    const disconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        try {
            deactivate();
            extendedConnector?.deactivate();
            await extendedConnector?.close?.();
        } catch (error) {
        //
        }
    }, [
        deactivate,
        extendedConnector
    ]);
    return {
        disconnect
    };
};
const useDisconnect = ()=>{
    const { active  } = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)();
    const { disconnect  } = useForceDisconnect();
    const available = active;
    return {
        disconnect: available ? disconnect : undefined
    };
};


/***/ }),

/***/ 9573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useSupportedChains)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5938);



const STABLE_ARRAY = [];
const useSupportedChains = ()=>{
    const { error , connector  } = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3 */ .$)();
    const supportedIds = connector?.supportedChainIds ?? STABLE_ARRAY;
    const supportedChains = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return supportedIds.map((chainId)=>(0,_ethersproject_providers__WEBPACK_IMPORTED_MODULE_1__.getNetwork)(chainId));
    }, [
        supportedIds
    ]);
    const isUnsupported = error instanceof _useWeb3__WEBPACK_IMPORTED_MODULE_2__/* .UnsupportedChainIdError */ .U;
    return {
        isUnsupported,
        supportedChains
    };
};


/***/ }),

/***/ 5938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useWeb3),
/* harmony export */   "U": () => (/* reexport safe */ _web3_react_core__WEBPACK_IMPORTED_MODULE_0__.UnsupportedChainIdError)
/* harmony export */ });
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_0__);


const useWeb3 = _web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React;


/***/ }),

/***/ 8801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$6": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.$6),
/* harmony export */   "$B": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.$B),
/* harmony export */   "BK": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_1__.BK),
/* harmony export */   "En": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.En),
/* harmony export */   "qL": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.qL),
/* harmony export */   "w2": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.w2)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7869);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6488);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3885);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4447);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_1__, _hooks__WEBPACK_IMPORTED_MODULE_2__]);
([_context__WEBPACK_IMPORTED_MODULE_1__, _hooks__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "KA": () => (/* reexport */ getStaticRpcProvider)
});

// UNUSED EXPORTS: getRpcBatchProvider, getRpcProvider, getStaticRpcBatchProvider

// EXTERNAL MODULE: external "@ethersproject/providers"
var providers_ = __webpack_require__(399);
// EXTERNAL MODULE: external "@ethersproject/properties"
var properties_ = __webpack_require__(8212);
// EXTERNAL MODULE: external "@ethersproject/logger"
var logger_ = __webpack_require__(1601);
;// CONCATENATED MODULE: ./sdk/web3-react/providers/staticJsonRpcBatchProvider.ts



/*
 * is based on
 * https://github.com/ethers-io/ethers.js/blob/master/packages/providers/src.ts/url-json-rpc-provider.ts#L28
 */ const logger = new logger_.Logger("StaticJsonRpcBatchProvider/1.0");
class StaticJsonRpcBatchProvider extends providers_.JsonRpcBatchProvider {
    async detectNetwork() {
        let network = this.network;
        if (network == null) {
            network = await super.detectNetwork();
            if (!network) {
                logger.throwError("no network detected", logger_.Logger.errors.UNKNOWN_ERROR, {});
            }
            // If still not set, set it
            if (this._network == null) {
                // A static network does not support "any"
                (0,properties_.defineReadOnly)(this, "_network", network);
                this.emit("network", network, null);
            }
        }
        return network;
    }
}

;// CONCATENATED MODULE: ./sdk/web3-react/providers/providersRPC.ts


const createProviderGetter = (Provider)=>{
    const cache = new Map();
    return (chainId, url, cacheSeed = 0, pollingInterval = null)=>{
        const cacheKey = `${chainId}-${cacheSeed}-${url}`;
        let provider = cache.get(cacheKey);
        if (!provider) {
            provider = new Provider(url, chainId);
            cache.set(cacheKey, provider);
        }
        if (pollingInterval) {
            provider.pollingInterval = pollingInterval;
        }
        return provider;
    };
};
const getRpcProvider = createProviderGetter(providers_.JsonRpcProvider);
const getRpcBatchProvider = createProviderGetter(providers_.JsonRpcBatchProvider);
const getStaticRpcProvider = createProviderGetter(providers_.StaticJsonRpcProvider);
const getStaticRpcBatchProvider = createProviderGetter(StaticJsonRpcBatchProvider);

;// CONCATENATED MODULE: ./sdk/web3-react/providers/index.ts



/***/ }),

/***/ 4994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ global)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./styles/global.ts

const GlobalStyle = external_styled_components_.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    width: 100%;
  }
  body {
    --primary-color: #34F899;
    --secondary-color: #00C2FF;
    --white-color: #E4E4E4;
    background: #1D1D1D;
    color: var(--white-color);
    position: relative;
    box-sizing: border-box;
    font-size: ${({ theme  })=>theme.fontSizesMap.xs}px;
    line-height: 1.5em;
    font-weight: 500;
    text-size-adjust: none;
  }
  a {
    color: var(--secondary-color);
    text-decoration: none;

    &:hover {
      color: ${({ theme  })=>theme.colors.primaryHover};
    }

    &:visited {
      color: ${({ theme  })=>theme.colors.primaryVisited};
    }
  }
`;
/* harmony default export */ const global = (GlobalStyle);

;// CONCATENATED MODULE: ./styles/index.ts



/***/ }),

/***/ 583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qp": () => (/* binding */ themeLight)
/* harmony export */ });
/* unused harmony exports themeDark, themeMap, reverseThemeMap, themeDefault */
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_0__]);
_components_ui__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const themeLight = {
    ..._components_ui__WEBPACK_IMPORTED_MODULE_0__/* .themeLight */ .Qp,
    name: _components_ui__WEBPACK_IMPORTED_MODULE_0__/* .ThemeName.light */ .Ix.light,
    colors: {
        ..._components_ui__WEBPACK_IMPORTED_MODULE_0__/* .themeLight.colors */ .Qp.colors,
        darkThemeOpacity: "0",
        lightThemeOpacity: "1",
        lightModeVisibility: "visible",
        darkModeVisibility: "hidden",
        lightDisplay: "initial",
        darkDisplay: "none",
        secondary: "#273852",
        secondaryHover: "#212f45",
        secondaryContrast: "#fff",
        background: "#fafafa",
        backgroundDarken: "#dae0e5",
        foreground: "#fff",
        overlay: "rgba(0, 0, 0, 0.5)",
        shadowLight: "rgba(39, 56, 82, 0.08)",
        shadowDark: "rgba(0, 0, 0, .25)",
        text: "#273852",
        textSecondary: "#7a8aa0",
        accentText: "#273852",
        border: "#f2f2f2",
        borderActive: "#f2f2f2",
        borderHover: "#f2f2f2",
        borderLight: "#dfe5eb",
        accentBorder: "rgba(0, 10, 61, 0.12)",
        accentBorderHover: "rgba(0, 10, 61, 0.24)",
        controlBg: "#f7f7f7",
        accentControlBg: "rgba(239, 242, 246, 0.56)",
        popupMenuItemBgActiveHover: "#000a3d"
    }
};
const themeDark = themeLight;
// export const themeDark = {
//   ...baseThemeDark,
//   name: ThemeName.dark,
//   colors: {
//     ...baseThemeDark.colors,
//     darkThemeOpacity: '1',
//     lightThemeOpacity: '0',
//     lightModeVisibility: 'hidden',
//     darkModeVisibility: 'visible',
//     lightDisplay: 'none',
//     darkDisplay: 'initial',
//     secondary: 'rgba(255, 255, 255, .8)',
//     secondaryHover: '#fff',
//     secondaryContrast: '#273852',
//     background: '#1c1c21',
//     backgroundDarken: '#131317',
//     foreground: '#34343d',
//     overlay: 'rgba(0, 0, 0, 0.5)',
//     shadowLight: 'rgba(0, 0, 0, .25)',
//     shadowDark: 'rgba(0, 0, 0, .5)',
//     text: '#fff',
//     textSecondary: 'rgba(255, 255, 255, .8)',
//     accentText: '#fff',
//     border: 'rgba(255, 255, 255, 0.12)',
//     borderActive: 'rgba(255, 255, 255, 0.48)',
//     borderHover: 'rgba(255, 255, 255, 0.24)',
//     borderLight: '#484855',
//     accentBorder: 'rgba(255, 255, 255, 0.12)',
//     accentBorderHover: 'rgba(255, 255, 255, 0.24)',
//     controlBg: '#2f2f37',
//     accentControlBg: 'rgba(39, 39, 46, 0.56)',
//     popupMenuItemBgActiveHover: '#fff',
//   },
// };
const themeMap = {
    [_components_ui__WEBPACK_IMPORTED_MODULE_0__/* .ThemeName.light */ .Ix.light]: themeLight,
    [_components_ui__WEBPACK_IMPORTED_MODULE_0__/* .ThemeName.dark */ .Ix.dark]: themeDark
};
const reverseThemeMap = new WeakMap([
    [
        themeLight,
        _components_ui__WEBPACK_IMPORTED_MODULE_0__/* .ThemeName.light */ .Ix.light
    ],
    [
        themeDark,
        _components_ui__WEBPACK_IMPORTED_MODULE_0__/* .ThemeName.dark */ .Ix.dark
    ]
]);
const themeDefault = (/* unused pure expression or super */ null && (themeLight));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;