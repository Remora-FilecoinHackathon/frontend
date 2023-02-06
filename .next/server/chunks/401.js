"use strict";
exports.id = 401;
exports.ids = [401];
exports.modules = {

/***/ 9089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* reexport */ address_Address)
});

// UNUSED EXPORTS: trimAddress

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ui/address/AddressStyles.tsx

const AddressStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-e07b294c-0"
})`
  position: relative;
  display: inline-block;
  font-weight: 400;
`;
const AddressFullStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-e07b294c-1"
})`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: transparent;
`;
const AddressTrimmedStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-e07b294c-2"
})`
  user-select: none;
  pointer-events: none;
`;

;// CONCATENATED MODULE: ./components/ui/address/trimAddress.ts
const trimAddress = (address, symbols)=>{
    if (symbols <= 0) return "";
    if (symbols * 2 >= address.length) return address;
    const left = address.slice(0, symbols);
    const right = address.slice(-symbols);
    return `${left}...${right}`;
};

;// CONCATENATED MODULE: ./components/ui/address/Address.tsx




function Address(props, ref) {
    const { symbols =3 , address , ...rest } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AddressStyle, {
        ...rest,
        ref: ref,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AddressFullStyle, {
                children: address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AddressTrimmedStyle, {
                children: trimAddress(address, symbols)
            })
        ]
    });
}
/* harmony default export */ const address_Address = (/*#__PURE__*/(0,external_react_.forwardRef)(Address));

;// CONCATENATED MODULE: ./components/ui/address/index.ts





/***/ }),

/***/ 6009:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: Block, BlockColor, BlockVariant

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ui/block/BlockStyles.tsx

const colors = {
    foreground: external_styled_components_.css`
    background: var(--collective-color-foreground);
    color: var(--collective-color-textSecondary);
  `,
    background: external_styled_components_.css`
    background: var(--collective-color-background);
    color: var(--collective-color-textSecondary);
  `,
    accent: external_styled_components_.css`
    background: var(--collective-color-accent);
    color: var(--collective-color-accentContrast);
  `
};
const variants = {
    flat: external_styled_components_.css`
    box-shadow: none;
  `,
    shadow: external_styled_components_.css`
    box-shadow: ${({ theme  })=>theme.boxShadows.lg}
      var(--collective-colors-shadowLight);
  `
};
const paddings = external_styled_components_.css`
  padding: ${({ theme  })=>theme.spaceMap.xxl}px;

  ${({ theme  })=>theme.mediaQueries.md} {
    padding: ${({ theme  })=>theme.spaceMap.lg}px;
  }
`;
const BlockStyles_BlockStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-7ca04b90-0"
})`
  font-weight: 400;
  font-size: ${({ theme  })=>theme.fontSizesMap.xxs}px;
  line-height: 1.6em;
  border-radius: ${({ theme  })=>theme.borderRadiusesMap.xl}px;
  margin: 0;

  ${({ $paddingLess  })=>!$paddingLess && paddings}

  ${({ $variant  })=>variants[$variant]}
  ${({ $color  })=>colors[$color]}
`;

;// CONCATENATED MODULE: ./components/ui/block/Block.tsx



function Block(props, ref) {
    const { color ="foreground" , variant ="flat" , paddingLess =false , ...rest } = props;
    return /*#__PURE__*/ _jsx(BlockStyle, {
        $color: color,
        $variant: variant,
        $paddingLess: paddingLess,
        ref: ref,
        ...rest
    });
}
/* harmony default export */ const block_Block = (/*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(Block))));

;// CONCATENATED MODULE: ./components/ui/block/types.tsx
var BlockVariant;
(function(BlockVariant) {
    BlockVariant[BlockVariant["flat"] = 0] = "flat";
    BlockVariant[BlockVariant["shadow"] = 1] = "shadow";
})(BlockVariant || (BlockVariant = {}));
var BlockColor;
(function(BlockColor) {
    BlockColor[BlockColor["foreground"] = 0] = "foreground";
    BlockColor[BlockColor["background"] = 1] = "background";
    BlockColor[BlockColor["accent"] = 2] = "accent";
})(BlockColor || (BlockColor = {}));

;// CONCATENATED MODULE: ./components/ui/block/index.ts




/***/ }),

/***/ 5193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ button_Button),
  "Ei": () => (/* reexport */ button_ButtonIcon)
});

// UNUSED EXPORTS: ButtonColor, ButtonSize, ButtonVariant

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/ui/loaders/index.ts + 5 modules
var loaders = __webpack_require__(127);
;// CONCATENATED MODULE: ./components/ui/button/ButtonStyles.tsx


const sizes = {
    xxs: external_styled_components_.css`
    line-height: 1em;
    font-size: ${({ theme  })=>theme.fontSizesMap.xxxs}px;
    border-radius: ${({ theme  })=>theme.borderRadiusesMap.sm}px;
    padding: ${({ $square  })=>$square ? "11px" : "11px 16px"};
    min-width: ${({ $square  })=>$square ? "0" : "50px"};
  `,
    xs: external_styled_components_.css`
    line-height: 1em;
    font-size: ${({ theme  })=>theme.fontSizesMap.xxs}px;
    border-radius: ${({ theme  })=>theme.borderRadiusesMap.sm}px;
    padding: ${({ $square  })=>$square ? "10px" : "10px 16px"};
    min-width: ${({ $square  })=>$square ? "0" : "60px"};
  `,
    sm: external_styled_components_.css`
    line-height: 1em;
    font-size: ${({ theme  })=>theme.fontSizesMap.xs}px;
    border-radius: ${({ theme  })=>theme.borderRadiusesMap.sm}px;
    padding: ${({ $square  })=>$square ? "16px" : "16px 24px"};
    min-width: ${({ $square  })=>$square ? "0" : "100px"};
  `,
    md: external_styled_components_.css`
    line-height: 1em;
    font-size: ${({ theme  })=>theme.fontSizesMap.xs}px;
    border-radius: ${({ theme  })=>theme.borderRadiusesMap.lg}px;
    padding: ${({ $square  })=>$square ? "21px" : "21px 44px"};
    min-width: ${({ $square  })=>$square ? "0" : "120px"};
  `,
    lg: external_styled_components_.css`
    line-height: 1em;
    font-size: ${({ theme  })=>theme.fontSizesMap.sm}px;
    border-radius: ${({ theme  })=>theme.borderRadiusesMap.lg}px;
    box-shadow: ${({ theme  })=>theme.boxShadows.md}
      var(--collective-color-shadowDark);
    padding: ${({ $square  })=>$square ? "24px" : "24px 64px"};
    min-width: ${({ $square  })=>$square ? "0" : "160px"};
  `
};
const getMainColor = (props)=>{
    const colorsMap = {
        primary: `var(--primary-color)`,
        secondary: `var(--secondary-color)`,
        warning: `var(--collective-color-warning)`,
        error: `var(--collective-color-error)`,
        success: `var(--collective-color-success)`
    };
    return colorsMap[props.$color];
};
const getContrastColor = (props)=>{
    const colorsMap = {
        primary: `#313131`,
        secondary: `var(--collective-color-secondaryContrast)`,
        warning: `var(--collective-color-warningContrast)`,
        error: `var(--collective-color-errorContrast)`,
        success: `var(--collective-color-successContrast)`
    };
    return colorsMap[props.$color];
};
const getHoverColor = (props)=>{
    const colorsMap = {
        primary: `rgba(52, 248, 153, 0.7)`,
        secondary: `var(--collective-color-secondaryHover)`,
        warning: `var(--collective-color-warningHover)`,
        error: `var(--collective-color-errorHover)`,
        success: `var(--collective-color-successHover)`
    };
    return colorsMap[props.$color];
};
const variants = {
    filled: external_styled_components_.css`
    color: ${getContrastColor};
    background-color: ${getMainColor};
    transition: background-color ${({ theme  })=>theme.duration.fast} ease;

    :not(:disabled):hover,
    :focus-visible {
      background-color: ${getHoverColor};
    }
  `,
    outlined: external_styled_components_.css`
    color: ${getMainColor};
    transition: background-color ${({ theme  })=>theme.duration.fast} ease,
      color ${({ theme  })=>theme.duration.fast} ease;

    :before {
      display: block;
      border: 1px solid ${getMainColor};
    }

    :not(:disabled):hover,
    :focus-visible {
      background-color: ${getHoverColor};
      color: ${getContrastColor};
    }
  `,
    text: external_styled_components_.css`
    color: ${getMainColor};
    background-color: var(--collective-color-foreground);

    :before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({ theme  })=>theme.duration.fast} ease;
      opacity: 0;
    }

    :not(:disabled):hover,
    :focus-visible {
      :before {
        opacity: 0.1;
      }
    }
  `,
    ghost: external_styled_components_.css`
    color: ${getMainColor};

    :before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({ theme  })=>theme.duration.fast} ease;
      opacity: 0;
    }

    :not(:disabled):hover,
    :focus-visible {
      :before {
        opacity: 0.1;
      }
    }
  `,
    translucent: external_styled_components_.css`
    color: ${getMainColor};

    :before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({ theme  })=>theme.duration.fast} ease;
      opacity: 0.1;
    }

    :not(:disabled):hover,
    :focus-visible {
      :before {
        opacity: 0.2;
      }
    }
  `
};
const ButtonStyle = external_styled_components_default().button.withConfig({
    componentId: "sc-7916b179-0"
})`
  box-sizing: border-box;
  margin: 0;
  border: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  background: transparent;
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  width: ${({ $fullwidth  })=>$fullwidth ? " 100%" : "auto"};

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    border-radius: inherit;
    display: none;
  }

  :not(:disabled) {
    cursor: pointer;
  }

  :disabled {
    opacity: ${({ $loading  })=>$loading ? 1 : 0.5};
  }

  ${(props)=>sizes[props.$size]}
  ${(props)=>variants[props.$variant]}
`;
const ripple = external_styled_components_.keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;
const ButtonRippleStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-7916b179-1"
})`
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  pointer-events: none;
  animation: ${ripple} 0.8s linear;
  background-color: currentColor;
  opacity: 0.4;
`;
const ButtonContentStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-7916b179-2"
})`
  position: relative;
  pointer-events: none;
  visibility: ${({ $hidden  })=>$hidden ? "hidden" : "visible"};
`;
const ButtonLoaderStyle = external_styled_components_default()(loaders/* Loader */.aN).withConfig({
    componentId: "sc-7916b179-3"
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: currentColor;
  pointer-events: none;
`;

;// CONCATENATED MODULE: ./components/ui/button/useRipple.tsx



const useRipple = ({ onClick  })=>{
    const [ripple, setRipple] = (0,external_react_.useState)(null);
    const handleClick = (0,external_react_.useCallback)((event)=>{
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        const isMouseClick = event.clientX > 0 && event.clientY > 0;
        const x = isMouseClick ? event.clientX - rect.left : button.clientWidth / 2;
        const y = isMouseClick ? event.clientY - rect.top : button.clientHeight / 2;
        const style = {
            width: diameter,
            height: diameter,
            left: x - radius,
            top: y - radius
        };
        setRipple(/*#__PURE__*/ jsx_runtime_.jsx(ButtonRippleStyle, {
            style: style
        }, event.timeStamp));
        onClick?.(event);
    }, [
        onClick
    ]);
    return {
        ripple,
        handleClick
    };
};

;// CONCATENATED MODULE: ./components/ui/button/Button.tsx




const loaderSizes = {
    xxs: "small",
    xs: "small",
    sm: "small",
    md: "medium",
    lg: "medium"
};
function Button(props, ref) {
    const { size ="md" , variant ="filled" , color ="primary" , square =false , fullwidth =false , loading =false , active =false , onClick , disabled , children , ...rest } = props;
    const { handleClick , ripple  } = useRipple(props);
    const loaderSize = loaderSizes[size];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonStyle, {
        $size: size,
        $variant: variant,
        $fullwidth: fullwidth,
        $color: color,
        $square: square,
        $loading: loading,
        $active: active,
        onClick: handleClick,
        disabled: disabled || loading,
        type: "button",
        ref: ref,
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonContentStyle, {
                $hidden: loading,
                children: children
            }),
            loading && /*#__PURE__*/ jsx_runtime_.jsx(ButtonLoaderStyle, {
                size: loaderSize
            }),
            !active && ripple
        ]
    });
}
/* harmony default export */ const button_Button = (/*#__PURE__*/(0,external_react_.forwardRef)(Button));

;// CONCATENATED MODULE: ./components/ui/button/ButtonIconStyles.tsx

const ButtonWrapperStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-7c48bfb8-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 1em;
  min-width: 1em;
`;
const ButtonIconStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-7c48bfb8-1"
})`
  margin: ${({ $square  })=>$square ? "-12px" : "-12px -6px"};
  line-height: 0;
  flex-shrink: 0;
  svg {
    fill: currentColor;
  }
`;
const ButtonIconStyles_ButtonContentStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-7c48bfb8-2"
})`
  margin-left: 10px;
  :empty {
    display: none;
  }
`;

;// CONCATENATED MODULE: ./components/ui/button/ButtonIcon.tsx




function ButtonIcon(props, ref) {
    const { icon , children , ...rest } = props;
    const hasNoChildren = !children;
    return /*#__PURE__*/ jsx_runtime_.jsx(button_Button, {
        square: hasNoChildren,
        ...rest,
        ref: ref,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonWrapperStyle, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ButtonIconStyle, {
                    $square: hasNoChildren,
                    children: icon
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ButtonIconStyles_ButtonContentStyle, {
                    children: children
                })
            ]
        })
    });
}
/* harmony default export */ const button_ButtonIcon = (/*#__PURE__*/(0,external_react_.forwardRef)(ButtonIcon));

;// CONCATENATED MODULE: ./components/ui/button/types.ts
var ButtonSize;
(function(ButtonSize) {
    ButtonSize[ButtonSize["xxs"] = 0] = "xxs";
    ButtonSize[ButtonSize["xs"] = 1] = "xs";
    ButtonSize[ButtonSize["sm"] = 2] = "sm";
    ButtonSize[ButtonSize["md"] = 3] = "md";
    ButtonSize[ButtonSize["lg"] = 4] = "lg";
})(ButtonSize || (ButtonSize = {}));
var ButtonVariant;
(function(ButtonVariant) {
    ButtonVariant[ButtonVariant["filled"] = 0] = "filled";
    ButtonVariant[ButtonVariant["outlined"] = 1] = "outlined";
    ButtonVariant[ButtonVariant["text"] = 2] = "text";
    ButtonVariant[ButtonVariant["ghost"] = 3] = "ghost";
    ButtonVariant[ButtonVariant["translucent"] = 4] = "translucent";
})(ButtonVariant || (ButtonVariant = {}));
var ButtonColor;
(function(ButtonColor) {
    ButtonColor[ButtonColor["primary"] = 0] = "primary";
    ButtonColor[ButtonColor["secondary"] = 1] = "secondary";
    ButtonColor[ButtonColor["warning"] = 2] = "warning";
    ButtonColor[ButtonColor["error"] = 3] = "error";
    ButtonColor[ButtonColor["success"] = 4] = "success";
})(ButtonColor || (ButtonColor = {}));

;// CONCATENATED MODULE: ./components/ui/button/index.ts





/***/ }),

/***/ 1397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* reexport */ container_Container)
});

// UNUSED EXPORTS: ContainerSize

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ui/container/ContainerStyles.tsx

const sizes = {
    full: external_styled_components_.css`
    max-width: 1424px;
  `,
    content: external_styled_components_.css`
    max-width: 960px;
  `,
    tight: external_styled_components_.css`
    max-width: 560px;
  `
};
const ContainerStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-fea792e3-0"
})`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 320px;
  width: 100%;
  padding: 0 ${({ theme  })=>theme.spaceMap.xxl}px;
  ${({ theme  })=>theme.mediaQueries.lg} {
    padding: 0 ${({ theme  })=>theme.spaceMap.lg}px;
  }
  ${({ $size  })=>sizes[$size]}
`;

;// CONCATENATED MODULE: ./components/ui/container/Container.tsx



function Container(props, ref) {
    const { size ="full" , ...rest } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(ContainerStyle, {
        $size: size,
        ref: ref,
        ...rest
    });
}
/* harmony default export */ const container_Container = (/*#__PURE__*/(0,external_react_.forwardRef)(Container));

;// CONCATENATED MODULE: ./components/ui/container/types.ts
var ContainerSize;
(function(ContainerSize) {
    ContainerSize[ContainerSize["full"] = 0] = "full";
    ContainerSize[ContainerSize["content"] = 1] = "content";
    ContainerSize[ContainerSize["tight"] = 2] = "tight";
})(ContainerSize || (ContainerSize = {}));

;// CONCATENATED MODULE: ./components/ui/container/index.ts




/***/ }),

/***/ 3117:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: ThemeToggler

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/ui/button/index.ts + 6 modules
var ui_button = __webpack_require__(5193);
// EXTERNAL MODULE: ./components/ui/icons/index.tsx
var icons = __webpack_require__(6606);
;// CONCATENATED MODULE: ./components/ui/cookie-theme-toggler/styles.tsx



const styles_CookieThemeTogglerStyle = external_styled_components_default()(ui_button/* Button */.zx).attrs({
    variant: "text",
    size: "xs"
}).withConfig({
    componentId: "sc-8ea69cde-0"
})`
  display: inline-grid;
  grid-template-areas: 'a';
  min-width: 0;
  margin-left: ${({ theme  })=>theme.spaceMap.sm}px;
  line-height: 0;
  font-size: 0;
  padding: 0;
  width: 44px;
  height: 44px;
  // button element contains span as children container, we want to bypass it.
  // by aiming explicit "span:first-child" we're verifying that this is what we are aiming for
  // witout breaking our SVGs
  & > span:first-child {
    display: contents;
  }
`;
const styles_CookieThemeTogglerLightIcon = external_styled_components_default()(icons/* Light */._k).withConfig({
    componentId: "sc-8ea69cde-1"
})`
  grid-area: a;
  align-self: center;
  justify-self: center;
  visibility: var(--collective-color-darkModeVisibility);
`;
const styles_CookieThemeTogglerDarkIcon = external_styled_components_default()(icons/* Dark */.LP).withConfig({
    componentId: "sc-8ea69cde-2"
})`
  grid-area: a;
  align-self: center;
  justify-self: center;
  visibility: var(--collective-color-lightModeVisibility);
`;

// EXTERNAL MODULE: ./components/ui/theme/index.ts + 20 modules
var theme = __webpack_require__(5652);
;// CONCATENATED MODULE: ./components/ui/cookie-theme-toggler/cookie-theme-toggler.tsx




const ThemeToggler = ()=>{
    const { toggleTheme  } = useThemeToggle();
    return /*#__PURE__*/ _jsxs(CookieThemeTogglerStyle, {
        color: "secondary",
        onClick: toggleTheme,
        children: [
            /*#__PURE__*/ _jsx(CookieThemeTogglerLightIcon, {}),
            /*#__PURE__*/ _jsx(CookieThemeTogglerDarkIcon, {})
        ]
    });
};

;// CONCATENATED MODULE: ./components/ui/cookie-theme-toggler/index.ts



/***/ }),

/***/ 7903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H3": () => (/* reexport */ H3),
  "X6": () => (/* reexport */ heading_Heading)
});

// UNUSED EXPORTS: H1, H2, HeadingColor, HeadingSize

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ui/heading/HeadingStyles.tsx

const sizes = {
    sm: external_styled_components_.css`
    font-size: ${({ theme  })=>theme.fontSizesMap.xl}px;
    line-height: 1.3em;
  `,
    md: external_styled_components_.css`
    font-size: ${({ theme  })=>theme.fontSizesMap.xxl}px;
    line-height: 1.3em;
  `,
    lg: external_styled_components_.css`
    font-size: 60px;
    line-height: 1.3em;
  `
};
const getHeadingColor = (props)=>{
    const colorsMap = {
        text: `white`,
        secondary: `var(--collective-color-textSecondary)`
    };
    return colorsMap[props.$color];
};
const commonCSS = external_styled_components_.css`
  margin: 0;
  padding: 0;
  font-weight: 800;
  color: ${getHeadingColor};
`;
const HeadingStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-63142a2f-0"
})`
  ${commonCSS}
  ${(props)=>sizes[props.$size]}
`;
const HeadingStyles_H1Style = external_styled_components_default().h1.withConfig({
    componentId: "sc-63142a2f-1"
})`
  ${commonCSS}
  ${sizes.lg}
`;
const HeadingStyles_H2Style = external_styled_components_default().h2.withConfig({
    componentId: "sc-63142a2f-2"
})`
  ${commonCSS}
  ${sizes.md}
`;
const H3Style = external_styled_components_default().h3.withConfig({
    componentId: "sc-63142a2f-3"
})`
  ${commonCSS}
  ${sizes.sm}
`;

;// CONCATENATED MODULE: ./components/ui/heading/Heading.tsx



function Heading(props, ref) {
    const { size ="md" , color ="text" , ...rest } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(HeadingStyle, {
        $size: size,
        $color: color,
        ref: ref,
        ...rest
    });
}
/* harmony default export */ const heading_Heading = (/*#__PURE__*/(0,external_react_.forwardRef)(Heading));
const H1 = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef(function H1(props, ref) {
    const { color ="text" , ...rest } = props;
    return /*#__PURE__*/ _jsx(H1Style, {
        $color: color,
        ref: ref,
        ...rest
    });
})));
const H2 = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef(function H2(props, ref) {
    const { color ="text" , ...rest } = props;
    return /*#__PURE__*/ _jsx(H2Style, {
        $color: color,
        ref: ref,
        ...rest
    });
})));
const H3 = /*#__PURE__*/ (0,external_react_.forwardRef)(function H3(props, ref) {
    const { color ="text" , ...rest } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(H3Style, {
        $color: color,
        ref: ref,
        ...rest
    });
});

;// CONCATENATED MODULE: ./components/ui/heading/types.ts
var HeadingColor;
(function(HeadingColor) {
    HeadingColor[HeadingColor["text"] = 0] = "text";
    HeadingColor[HeadingColor["secondary"] = 1] = "secondary";
})(HeadingColor || (HeadingColor = {}));
var HeadingSize;
(function(HeadingSize) {
    HeadingSize[HeadingSize["sm"] = 0] = "sm";
    HeadingSize[HeadingSize["md"] = 1] = "md";
    HeadingSize[HeadingSize["lg"] = 2] = "lg";
})(HeadingSize || (HeadingSize = {}));

;// CONCATENATED MODULE: ./components/ui/heading/index.tsx





/***/ }),

/***/ 9472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gc": () => (/* reexport */ useBreakpoint),
  "Y5": () => (/* reexport */ useEscape),
  "ch": () => (/* reexport */ useInterceptFocus),
  "F5": () => (/* reexport */ useLockScroll),
  "qq": () => (/* reexport */ useMergeRefs)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./components/ui/hooks/useBreakpoint.ts


const useBreakpoint = (breakpoint)=>{
    const theme = (0,external_styled_components_.useTheme)();
    const maxWidth = theme.breakpointsMap[breakpoint].width;
    const [isBreakpoint, seIsBreakpoint] = (0,external_react_.useState)(()=>{
        try {
            return window.matchMedia(`(max-width: ${maxWidth})`).matches;
        } catch (error) {
            return false;
        }
    });
    (0,external_react_.useEffect)(()=>{
        try {
            const mql = window.matchMedia(`(max-width: ${maxWidth})`);
            const setMobileFromQuery = ({ matches  })=>{
                seIsBreakpoint(matches);
            };
            mql.addEventListener("change", setMobileFromQuery);
            setMobileFromQuery(mql);
            return ()=>{
                mql.removeEventListener("change", setMobileFromQuery);
            };
        } catch (error) {
            return;
        }
    }, [
        maxWidth
    ]);
    return isBreakpoint;
};

// EXTERNAL MODULE: external "use-callback-ref"
var external_use_callback_ref_ = __webpack_require__(4731);
;// CONCATENATED MODULE: ./components/ui/hooks/useMergeRefs.ts


const useMergeRefs = (refs)=>{
    return (0,external_use_callback_ref_.useMergeRefs)(refs.filter((ref)=>!!ref));
};

;// CONCATENATED MODULE: ./components/ui/hooks/useEscape.ts

const useEscape = (callback)=>{
    const handleKeyDown = (0,external_react_.useCallback)((event)=>{
        if (event.key === "Escape") {
            callback?.();
        }
    }, [
        callback
    ]);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        handleKeyDown
    ]);
};

;// CONCATENATED MODULE: ./components/ui/hooks/useLockScroll.ts

const getScrollbarSize = ()=>{
    const tempDiv = document.createElement("div");
    Object.assign(tempDiv.style, {
        position: "absolute",
        left: "-9000px",
        width: "100px",
        height: "100px",
        overflow: "scroll"
    });
    document.body.appendChild(tempDiv);
    const scrollbarSize = tempDiv.offsetWidth - tempDiv.clientWidth;
    document.body.removeChild(tempDiv);
    return scrollbarSize;
};
const isVerticalScroll = (element)=>{
    const isBody = document.body === element;
    return isBody ? window.innerWidth > document.documentElement.clientWidth : element.scrollHeight > element.clientHeight;
};
const getPaddingRight = (element)=>{
    return parseInt(window.getComputedStyle(element).paddingRight, 10) || 0;
};
const setStyleProperty = (element, property, value)=>{
    if (value) {
        element.style.setProperty(property, value);
    } else {
        element.style.removeProperty(property);
    }
};
const useLockScroll = (element = document.body)=>{
    const lockScroll = (0,external_react_.useCallback)(()=>{
        if (!isVerticalScroll(element)) return;
        const previousValues = {
            paddingRight: element.style.paddingRight,
            overflow: element.style.overflow
        };
        const paddingRight = getPaddingRight(element) + getScrollbarSize();
        setStyleProperty(element, "padding-right", `${paddingRight}px`);
        setStyleProperty(element, "overflow", "hidden");
        const unlockScroll = ()=>{
            const { paddingRight , overflow  } = previousValues;
            setStyleProperty(element, "padding-right", paddingRight);
            setStyleProperty(element, "overflow", overflow);
        };
        return unlockScroll;
    }, [
        element
    ]);
    (0,external_react_.useLayoutEffect)(()=>{
        const unlockScroll = lockScroll();
        return unlockScroll;
    }, [
        lockScroll
    ]);
};

;// CONCATENATED MODULE: ./components/ui/hooks/useInterceptFocus.ts

const useInterceptFocus = ()=>{
    const savedElement = (0,external_react_.useRef)(null);
    const restoreFocus = (0,external_react_.useCallback)(()=>{
        if (!(savedElement.current instanceof HTMLElement)) return;
        savedElement.current.focus();
    }, []);
    const interceptFocus = (0,external_react_.useCallback)((node)=>{
        savedElement.current = document.activeElement;
        const isFocusInside = node.contains(document.activeElement);
        if (isFocusInside) return;
        node.focus();
    }, []);
    return [
        interceptFocus,
        restoreFocus
    ];
};

;// CONCATENATED MODULE: ./components/ui/hooks/index.ts







/***/ }),

/***/ 6606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bs": () => (/* binding */ Bubbles),
/* harmony export */   "CK": () => (/* binding */ Copy),
/* harmony export */   "IB": () => (/* binding */ Fil),
/* harmony export */   "Kb": () => (/* binding */ EclipseColor),
/* harmony export */   "L1": () => (/* binding */ FloatingIcons),
/* harmony export */   "LP": () => (/* binding */ Dark),
/* harmony export */   "Y4": () => (/* binding */ Eclipse),
/* harmony export */   "_k": () => (/* binding */ Light),
/* harmony export */   "em": () => (/* binding */ MetaMaskCircleInversion),
/* harmony export */   "hY": () => (/* binding */ Refresh),
/* harmony export */   "w5": () => (/* binding */ Wallet),
/* harmony export */   "x8": () => (/* binding */ Close),
/* harmony export */   "xh": () => (/* binding */ ArrowBack),
/* harmony export */   "yW": () => (/* binding */ MetaMaskCircle)
/* harmony export */ });
/* unused harmony exports Check, Clfil, Coin98Circle, Coinbase, CookieInverse, Cookie, Deposit, Edit, Email, Error, Eth, Exodus, External, Facebook, Gamestop, History, ImtokenCircle, Imtoken, Ldo, Ldopl, LedgerCircleInversion, LedgerCircle, LedgerConfirm, LedgerFail, LedgerLoading, LedgerSuccess, Ledger, Linkedin, LockSmall, Lock, MathWalletCircleInversion, MathWalletCircle, MetaMask, OneInch, OperaWallet, Plus, Question, Referral, PlaceholderImage, Solana, Stake, Steth, Stsol, Success, TallyCircle, Telegram, Terra, TrustCircle, Trust, Twitter, Uniswap, Unstoppabledomains, Validators, WalletConnectCircle, WalletConnect, Warning, Weth, Whitepaper, Wrap, Wsteth, XdefiWallet, Zengo */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// THIS FILE IS AUTO GENERATED


const Bubbles = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Bubbles(props, svgRef) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "640",
        height: "411",
        viewBox: "0 0 640 411",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M101.5 316C96.2616 316 92 320.262 92 325.5C92 330.738 96.2616 335 101.5 335C106.738 335 111 330.738 111 325.5C111 320.262 106.738 316 101.5 316ZM101.5 333.724C96.9653 333.724 93.2761 330.035 93.2761 325.5C93.2761 320.965 96.9653 317.276 101.5 317.276C106.035 317.276 109.724 320.965 109.724 325.5C109.724 330.035 106.035 333.724 101.5 333.724Z",
                fill: "white",
                "fill-opacity": "0.2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M399.274 390C393.609 390 389 394.609 389 400.274C389 405.939 393.609 410.547 399.274 410.547C404.939 410.547 409.547 405.938 409.547 400.274C409.547 394.609 404.939 390 399.274 390ZM399.274 408.171C394.919 408.171 391.376 404.628 391.376 400.274C391.376 395.919 394.919 392.376 399.274 392.376C403.628 392.376 407.171 395.919 407.171 400.274C407.171 404.628 403.628 408.171 399.274 408.171Z",
                fill: "white",
                "fill-opacity": "0.2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M399.856 403.954C397.506 403.954 395.593 402.042 395.593 399.691C395.593 399.035 395.061 398.503 394.405 398.503C393.749 398.503 393.217 399.035 393.217 399.691C393.217 403.352 396.195 406.33 399.856 406.33C400.513 406.33 401.045 405.799 401.045 405.142C401.045 404.486 400.513 403.954 399.856 403.954Z",
                fill: "white",
                "fill-opacity": "0.2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M382.051 388.102C385.939 388.102 389.102 384.939 389.102 381.051C389.102 377.163 385.939 374 382.051 374C378.163 374 375 377.163 375 381.051C375 384.939 378.163 388.102 382.051 388.102ZM382.051 376.376C384.629 376.376 386.726 378.473 386.726 381.051C386.726 383.629 384.629 385.726 382.051 385.726C379.473 385.726 377.376 383.629 377.376 381.051C377.376 378.473 379.473 376.376 382.051 376.376Z",
                fill: "white",
                "fill-opacity": "0.2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M170.696 358C168.658 358 167 359.658 167 361.696C167 363.734 168.658 365.392 170.696 365.392C172.734 365.392 174.392 363.734 174.392 361.696C174.392 359.658 172.734 358 170.696 358ZM170.696 364.896C168.932 364.896 167.496 363.46 167.496 361.696C167.496 359.932 168.932 358.496 170.696 358.496C172.46 358.496 173.896 359.932 173.896 361.696C173.896 363.46 172.46 364.896 170.696 364.896Z",
                fill: "white",
                "fill-opacity": "0.2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M286.55 386.791C284.346 386.791 282.553 388.584 282.553 390.788C282.553 392.992 284.346 394.785 286.55 394.785C288.754 394.785 290.547 392.992 290.547 390.788C290.547 388.584 288.754 386.791 286.55 386.791ZM286.55 393.861C284.856 393.861 283.477 392.482 283.477 390.788C283.477 389.094 284.856 387.716 286.55 387.716C288.244 387.716 289.623 389.094 289.623 390.788C289.623 392.482 288.244 393.861 286.55 393.861Z",
                fill: "white",
                "fill-opacity": "0.2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M286.777 392.22C285.862 392.22 285.118 391.476 285.118 390.561C285.118 390.306 284.911 390.099 284.656 390.099C284.401 390.099 284.194 390.306 284.194 390.561C284.194 391.986 285.353 393.145 286.777 393.145C287.032 393.145 287.239 392.938 287.239 392.682C287.239 392.427 287.032 392.22 286.777 392.22Z",
                fill: "white",
                "fill-opacity": "0.2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M279.849 386.053C281.362 386.053 282.593 384.822 282.593 383.309C282.593 381.797 281.362 380.566 279.849 380.566C278.337 380.566 277.106 381.797 277.106 383.309C277.106 384.822 278.337 386.053 279.849 386.053ZM279.849 381.49C280.852 381.49 281.668 382.306 281.668 383.309C281.668 384.312 280.852 385.128 279.849 385.128C278.847 385.128 278.031 384.312 278.031 383.309C278.031 382.306 278.847 381.49 279.849 381.49Z",
                fill: "white",
                "fill-opacity": "0.2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M423.696 138C421.658 138 420 139.658 420 141.696C420 143.734 421.658 145.392 423.696 145.392C425.734 145.392 427.392 143.734 427.392 141.696C427.392 139.658 425.734 138 423.696 138ZM423.696 144.896C421.932 144.896 420.496 143.46 420.496 141.696C420.496 139.932 421.932 138.496 423.696 138.496C425.46 138.496 426.896 139.932 426.896 141.696C426.896 143.46 425.46 144.896 423.696 144.896Z",
                fill: "white",
                "fill-opacity": "0.1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M539.55 166.791C537.346 166.791 535.553 168.584 535.553 170.788C535.553 172.992 537.346 174.785 539.55 174.785C541.754 174.785 543.547 172.992 543.547 170.788C543.547 168.584 541.754 166.791 539.55 166.791ZM539.55 173.861C537.856 173.861 536.477 172.482 536.477 170.788C536.477 169.094 537.856 167.715 539.55 167.715C541.244 167.715 542.623 169.094 542.623 170.788C542.623 172.482 541.244 173.861 539.55 173.861Z",
                fill: "white",
                "fill-opacity": "0.1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M539.777 172.22C538.862 172.22 538.118 171.476 538.118 170.561C538.118 170.306 537.911 170.099 537.656 170.099C537.401 170.099 537.194 170.306 537.194 170.561C537.194 171.986 538.353 173.145 539.777 173.145C540.032 173.145 540.239 172.938 540.239 172.682C540.239 172.427 540.032 172.22 539.777 172.22Z",
                fill: "white",
                "fill-opacity": "0.1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M532.849 166.053C534.362 166.053 535.593 164.822 535.593 163.309C535.593 161.797 534.362 160.566 532.849 160.566C531.337 160.566 530.106 161.797 530.106 163.309C530.106 164.822 531.337 166.053 532.849 166.053ZM532.849 161.49C533.852 161.49 534.668 162.306 534.668 163.309C534.668 164.312 533.852 165.128 532.849 165.128C531.846 165.128 531.031 164.312 531.031 163.309C531.031 162.306 531.846 161.49 532.849 161.49Z",
                fill: "white",
                "fill-opacity": "0.1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M609.761 102.195C613.016 108.732 620.982 111.402 627.519 108.147C634.056 104.893 636.727 96.9264 633.472 90.3893C630.217 83.8522 622.251 81.182 615.714 84.4367C609.177 87.6914 606.507 95.6576 609.761 102.195ZM631.879 91.1822C634.697 96.8412 632.385 103.737 626.726 106.555C621.067 109.372 614.171 107.061 611.354 101.402C608.536 95.7427 610.848 88.8467 616.507 86.0292C622.166 83.2117 629.062 85.5233 631.879 91.1822Z",
                fill: "white",
                "fill-opacity": "0.8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M620.771 91.0455C620.293 91.1581 619.997 91.637 620.109 92.1153C620.222 92.5935 620.701 92.8897 621.179 92.777C624.68 91.952 628.199 94.129 629.024 97.6298C629.137 98.1081 629.616 98.4043 630.094 98.2916C630.572 98.1789 630.868 97.7 630.756 97.2218C629.706 92.7662 625.227 89.9955 620.771 91.0455Z",
                fill: "white",
                "fill-opacity": "0.8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M593.261 85.6795C595.152 89.4761 599.778 91.027 603.575 89.1367C607.372 87.2463 608.922 82.6197 607.032 78.8231C605.142 75.0265 600.515 73.4756 596.719 75.3658C592.922 77.2561 591.371 81.8827 593.261 85.6795ZM605.44 79.6159C606.893 82.5344 605.701 86.091 602.782 87.5441C599.864 88.9972 596.307 87.805 594.854 84.8865C593.401 81.968 594.593 78.4114 597.512 76.9583C600.43 75.5052 603.987 76.6973 605.44 79.6159Z",
                fill: "white",
                "fill-opacity": "0.8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M602.419 80.6324C603.204 82.2079 602.56 84.1279 600.985 84.9123C600.545 85.1313 600.366 85.6653 600.585 86.105C600.804 86.5447 601.338 86.7238 601.777 86.5048C604.231 85.2832 605.233 82.2931 604.012 79.8395C603.793 79.3998 603.259 79.2207 602.819 79.4397C602.379 79.6587 602.2 80.1927 602.419 80.6324Z",
                fill: "#D9D9D9",
                "fill-opacity": "0.8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11.8043 293.015C10.5069 290.41 7.33145 289.345 4.7257 290.642C2.11995 291.94 1.05553 295.115 2.35292 297.721C3.65031 300.327 6.82574 301.391 9.43149 300.094C12.0372 298.796 13.1017 295.621 11.8043 293.015ZM3.94541 296.928C3.08522 295.201 3.79095 293.095 5.5186 292.235C7.24624 291.375 9.35159 292.081 10.2118 293.808C11.072 295.536 10.3662 297.641 8.63859 298.501C6.91095 299.362 4.8056 298.656 3.94541 296.928Z",
                fill: "white",
                "fill-opacity": "0.8"
            })
        ]
    });
});
const ArrowBack = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function ArrowBack(props, svgRef) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M20 12H4m6 6l-6-6 6-6",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        })
    });
});
const Check = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Check(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.434 8.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0L7.293 12.98a1 1 0 111.414-1.414l2.02 2.02 5.293-5.293a1 1 0 011.414 0z"
        })
    });
})));
const Clfil = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Clfil(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 35,
        height: 35,
        viewBox: "0 0 35 35",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#prefix__prefix__clip0_3_360)",
                children: [
                    /*#__PURE__*/ _jsx("mask", {
                        id: "prefix__a",
                        maskUnits: "userSpaceOnUse",
                        x: 0,
                        y: 0,
                        width: 35,
                        height: 35,
                        children: /*#__PURE__*/ _jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0 0h35v35H0V0z",
                            fill: "#fff"
                        })
                    }),
                    /*#__PURE__*/ _jsxs("g", {
                        mask: "url(#prefix__a)",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        children: [
                            /*#__PURE__*/ _jsx("path", {
                                d: "M17.5 35C7.875 35 0 27.125 0 17.413.087 7.787 7.875-.087 17.587 0 27.212.087 35 7.875 35 17.675 34.913 27.212 27.125 35 17.5 35z",
                                fill: "#191919"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M19.163 15.4l-.526 2.8 4.988.7-.35 1.313-4.9-.7c-.35 1.137-.525 2.362-.962 3.412-.438 1.225-.875 2.45-1.4 3.588-.7 1.487-1.926 2.537-3.588 2.8-.963.175-2.013.087-2.8-.525-.262-.175-.525-.525-.525-.788 0-.35.175-.787.438-.962.175-.088.612 0 .874.087.263.263.525.613.7.963.525.7 1.226.787 1.925.262.788-.7 1.225-1.662 1.488-2.625.525-2.1 1.05-4.112 1.487-6.212v-.35l-4.637-.7.175-1.313 4.813.7.612-2.712-4.988-.788.175-1.4 5.163.7c.175-.525.262-.962.438-1.4.437-1.575.874-3.15 1.924-4.55 1.05-1.4 2.275-2.275 4.113-2.187.787 0 1.575.262 2.1.875.088.087.263.262.263.437 0 .35 0 .788-.263 1.05-.35.263-.787.175-1.137-.175-.263-.262-.438-.525-.7-.787-.525-.7-1.313-.788-1.925-.175A5.605 5.605 0 0021 8.4c-.613 1.838-1.05 3.763-1.663 5.688l4.813.7-.35 1.312-4.637-.7z",
                                fill: "#fff"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsx("clipPath", {
                    id: "prefix__prefix__clip0_3_360",
                    children: /*#__PURE__*/ _jsx("path", {
                        fill: "#fff",
                        d: "M0 0h35v35H0z"
                    })
                })
            })
        ]
    });
})));
const Close = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Close(props, svgRef) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M17.707 7.707a1 1 0 00-1.414-1.414L12 10.586 7.707 6.293a1 1 0 00-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 101.414 1.414L12 13.414l4.293 4.293a1 1 0 001.414-1.414L13.414 12l4.293-4.293z"
        })
    });
});
const Coin98Circle = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Coin98Circle(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: 24,
                cy: 24,
                r: 24,
                fill: "url(#prefix__prefix__paint0_linear_10169:6081)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M16.16 11.984a7.496 7.496 0 107.503 7.503 7.507 7.507 0 00-7.503-7.503zm0 11.922a4.423 4.423 0 114.424-4.422 4.438 4.438 0 01-4.424 4.422zm22.1-5.508a6.31 6.31 0 01-.788 3.067 8.612 8.612 0 00-2.692-1.483 3.338 3.338 0 10-5.875 0 8.613 8.613 0 00-2.691 1.483 6.406 6.406 0 015.631-9.48 6.421 6.421 0 016.415 6.413zm-6.415 2.595a7.496 7.496 0 107.49 7.504 7.512 7.512 0 00-7.49-7.504zm0 11.914a4.417 4.417 0 11.01-8.835 4.417 4.417 0 01-.01 8.835zm-9.27-3.336a6.416 6.416 0 11-12.833 0h3.079a3.337 3.337 0 106.675 0h3.079z",
                fill: "#252525"
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsxs("linearGradient", {
                    id: "prefix__prefix__paint0_linear_10169:6081",
                    x1: 45.553,
                    y1: 2.447,
                    x2: 3.111,
                    y2: 44.889,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ _jsx("stop", {
                            stopColor: "#F1D961"
                        }),
                        /*#__PURE__*/ _jsx("stop", {
                            offset: 1,
                            stopColor: "#CDA146"
                        })
                    ]
                })
            })
        ]
    });
})));
const Coinbase = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Coinbase(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 40,
        height: 40,
        viewBox: "0 0 40 40",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: 20,
                cy: 20,
                r: 15,
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20zm0-8c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12z",
                fill: "url(#prefix__prefix__a)"
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: 16,
                y: 16,
                width: 8,
                height: 8,
                rx: 1,
                fill: "#2952EA"
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsxs("linearGradient", {
                    id: "prefix__prefix__a",
                    x1: 20,
                    y1: 0,
                    x2: 20,
                    y2: 40,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ _jsx("stop", {
                            stopColor: "#345FF8"
                        }),
                        /*#__PURE__*/ _jsx("stop", {
                            offset: 1,
                            stopColor: "#1D44DC"
                        })
                    ]
                })
            })
        ]
    });
})));
const CookieInverse = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function CookieInverse(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                opacity: 0.4,
                width: 32,
                height: 32,
                rx: 8,
                fill: "#1C1C21"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M25.601 15.23c-1.286-.462-2.078-1.771-1.978-2.805 0-.17-.102-.328-.23-.44a.639.639 0 00-.496-.132c-1.96.288-3.756-1.146-3.934-3.162a.585.585 0 00-.785-.499c-1.59.582-3.09-.47-3.69-1.841a.586.586 0 00-.664-.337C9.314 7.02 6 11.377 6 16c0 5.493 4.507 10 10 10s10-4.507 10-10c-.016-.349-.019-.634-.399-.77zm-15.49 1.4a.586.586 0 110-1.172.586.586 0 010 1.172zm2.373 4.643a1.76 1.76 0 01-1.757-1.757c0-.97.788-1.758 1.757-1.758.97 0 1.758.788 1.758 1.758a1.76 1.76 0 01-1.758 1.758zm.586-7.03a1.173 1.173 0 01-1.172-1.173 1.173 1.173 0 012.344 0c0 .646-.526 1.172-1.172 1.172zm4.688 8.202a1.173 1.173 0 01-1.172-1.172c0-.645.526-1.171 1.172-1.171.646 0 1.172.526 1.172 1.171 0 .646-.526 1.172-1.172 1.172zm.586-4.687A1.76 1.76 0 0116.586 16c0-.97.789-1.758 1.758-1.758s1.758.789 1.758 1.758a1.76 1.76 0 01-1.758 1.758zm3.486 1.216a.586.586 0 110-1.172.586.586 0 010 1.172z",
                fill: "#fff"
            })
        ]
    });
})));
const Cookie = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Cookie(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                width: 32,
                height: 32,
                rx: 8,
                fill: "#F4F6F8"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M25.601 15.23c-1.286-.462-2.078-1.771-1.978-2.805 0-.17-.102-.328-.23-.44a.64.64 0 00-.496-.132c-1.96.288-3.756-1.146-3.934-3.162a.585.585 0 00-.785-.499c-1.59.582-3.09-.47-3.69-1.841a.586.586 0 00-.664-.337C9.314 7.02 6 11.377 6 16c0 5.493 4.507 10 10 10 5.492 0 10-4.507 10-10-.016-.349-.019-.634-.399-.77zm-15.49 1.4a.586.586 0 110-1.172.586.586 0 010 1.172zm2.373 4.643a1.76 1.76 0 01-1.757-1.757c0-.97.788-1.758 1.757-1.758.97 0 1.758.788 1.758 1.758a1.76 1.76 0 01-1.758 1.758zm.586-7.03a1.173 1.173 0 01-1.172-1.173 1.173 1.173 0 012.344 0c0 .646-.526 1.172-1.172 1.172zm4.688 8.202a1.173 1.173 0 01-1.172-1.172 1.173 1.173 0 012.344 0c0 .646-.526 1.172-1.172 1.172zm.586-4.687A1.76 1.76 0 0116.586 16a1.76 1.76 0 013.516 0 1.76 1.76 0 01-1.758 1.758zm3.486 1.216a.586.586 0 110-1.172.586.586 0 010 1.172z",
                fill: "#7A8AA0"
            })
        ]
    });
})));
const Copy = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Copy(props, svgRef) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.6 9.858V14.1a2.1 2.1 0 01-2.1 2.1h-.7v.7a2.1 2.1 0 01-2.1 2.1H8.1A2.1 2.1 0 016 16.9v-7c0-1.16.94-2.1 2.1-2.1h.7v-.7c0-1.16.94-2.1 2.1-2.1h2.835a.77.77 0 01.49.21l4.2 4.2a.62.62 0 01.175.448zM13.7 17.6a.7.7 0 00.7-.7v-.7h-3.5a2.1 2.1 0 01-2.1-2.1V9.2h-.7a.7.7 0 00-.7.7v7a.7.7 0 00.7.7h5.6zm.7-10.213L16.213 9.2H15.1a.7.7 0 01-.7-.7V7.387zm2.1 7.413a.7.7 0 00.7-.7v-3.5h-2.1A2.1 2.1 0 0113 8.5V6.4h-2.1a.7.7 0 00-.7.7v7a.7.7 0 00.7.7h5.6z"
        })
    });
});
const Dark = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Dark(props, svgRef) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19 12.63A7.015 7.015 0 1111.37 5 5.456 5.456 0 0019 12.63z"
        })
    });
});
const Deposit = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Deposit(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5 3h14a3 3 0 011 5.82V18a3 3 0 01-3 3H7a3 3 0 01-3-3V8.82A3 3 0 015 3zm9 10h-4a1 1 0 010-2h4a1 1 0 110 2zm4 5a1 1 0 01-1 1H7a1 1 0 01-1-1V9h12v9zM5 7h14a1 1 0 100-2H5a1 1 0 100 2z"
        })
    });
})));
const Eclipse = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Edit(props, svgRef) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "863",
        height: "606",
        viewBox: "0 0 863 606",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M467 275.16C528.5 275.16 726 651.16 852.5 600.66C885 548.16 852.5 -66.8398 517.5 168.16C496 -61.3398 11.0002 -83.3398 0.000244141 275.16C0.000244141 420.135 421.5 275.16 467 275.16Z",
                fill: "url(#paint0_linear_10_134)",
                "fill-opacity": "0.06"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear_10_134",
                    x1: "431.181",
                    y1: "0",
                    x2: "431.181",
                    y2: "605.327",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "1",
                            "stop-color": "#D9D9D9",
                            "stop-opacity": "0"
                        })
                    ]
                })
            })
        ]
    });
});
const EclipseColor = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Edit(props, svgRef) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "905",
        height: "385",
        viewBox: "0 0 905 385",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M196.191 2.60887C173.034 11.4302 125.622 40.3636 46.3768 112.977L28.7872 127.612C23.8843 131.691 19.5039 136.361 15.7455 141.514C-14.429 182.886 3.12598 241.63 51.0531 259.662L134.097 290.907L323.917 375.462C355.36 389.468 391.721 386.842 420.825 368.462L527.707 300.966C535.486 296.053 543.889 292.205 552.69 289.524L852.318 198.254C887.674 187.485 909.549 152.153 903.428 115.703C897.364 79.594 865.667 53.4417 829.064 54.3472L733.672 56.707C724.032 56.9455 714.407 55.8292 705.078 53.3909L524.903 6.29809C502.087 0.334834 477.917 2.38097 456.429 12.0947L387.387 43.3049C359.701 55.8204 327.902 55.4736 300.496 42.3573L224.688 6.07709C215.573 1.71497 205.634 -0.988219 196.191 2.60887Z",
                fill: "url(#paint0_linear_10_64)",
                "fill-opacity": "0.1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear_10_64",
                    x1: "425.481",
                    y1: "-12.9906",
                    x2: "493.511",
                    y2: "263.164",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            "stop-color": "#4200FF"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "1",
                            "stop-color": "#1DE3C2",
                            "stop-opacity": "0.82"
                        })
                    ]
                })
            })
        ]
    });
});
const Edit = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Edit(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M7.414 14.586l5.657-5.657 2.121 2.121-5.656 5.657-2.475.354.353-2.475zm6.364-6.364l1.06-1.06a1 1 0 011.415 0l.707.706a1 1 0 010 1.414l-1.06 1.061-2.122-2.121z"
        })
    });
})));
const Email = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Email(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.41 11.018C11.044 11.018 4 7.024 4 7.024V6.4A1.4 1.4 0 015.401 5H19.42c.774 0 1.402.627 1.402 1.4l-.011.7s-6.968 3.918-8.4 3.918z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.41 12.943c1.5 0 8.4-3.743 8.4-3.743l.012 8.4A1.4 1.4 0 0119.42 19H5.4A1.401 1.401 0 014 17.6l.011-8.4s7.032 3.743 8.4 3.743z"
            })
        ]
    });
})));
const Error = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Error(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 60,
        height: 60,
        viewBox: "0 0 60 60",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M30 58c15.464 0 28-12.536 28-28S45.464 2 30 2 2 14.536 2 30s12.536 28 28 28zm0 2c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30z",
                fill: "#E14D4D"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M23.071 37.071a1 1 0 001.414 0l5.657-5.657 5.657 5.657a1 1 0 001.414-1.414L31.556 30l5.657-5.657A1 1 0 0035.8 22.93l-5.657 5.657-5.657-5.657a1 1 0 00-1.414 1.414L28.728 30l-5.657 5.657a1 1 0 000 1.414z",
                fill: "#E14D4D"
            })
        ]
    });
})));
const Eth = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Eth(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M11.999 3.75v6.098l5.248 2.303-5.248-8.401z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11.999 3.75L6.75 12.151l5.249-2.303V3.75z"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M11.999 16.103v4.143l5.251-7.135L12 16.103z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11.999 20.246v-4.144L6.75 13.111l5.249 7.135z"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.2,
                d: "M11.999 15.144l5.248-2.993-5.248-2.301v5.294z"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M6.75 12.151l5.249 2.993V9.85l-5.249 2.3z"
            })
        ]
    });
})));
const Exodus = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Exodus(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",
                fill: "#1E1C32"
            }),
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#prefix__prefix__clip0_12052_1670)",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M38.755 17.375L25.98 9v4.683l8.195 5.326-.964 3.05H25.98v3.881h7.231l.964 3.051-8.195 5.326V39l12.775-8.35-2.089-6.637 2.09-6.637z",
                        fill: "url(#prefix__prefix__paint0_linear_12052_1670)"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M14.865 25.94h7.205v-3.881h-7.232l-.937-3.051 8.169-5.326V9L9.294 17.375l2.09 6.637-2.09 6.637L22.096 39v-4.683l-8.195-5.326.964-3.05z",
                        fill: "url(#prefix__prefix__paint1_linear_12052_1670)"
                    }),
                    /*#__PURE__*/ _jsxs("mask", {
                        id: "prefix__a",
                        maskUnits: "userSpaceOnUse",
                        x: 9,
                        y: 8,
                        width: 30,
                        height: 31,
                        children: [
                            /*#__PURE__*/ _jsx("path", {
                                d: "M38.755 17.375L25.98 9v4.683l8.195 5.326-.964 3.05H25.98v3.881h7.231l.964 3.051-8.195 5.326V39l12.775-8.35-2.089-6.637 2.09-6.637z",
                                fill: "url(#prefix__prefix__paint2_linear_12052_1670)"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M14.865 25.94h7.205v-3.881h-7.232l-.937-3.051 8.169-5.326V9L9.294 17.375l2.09 6.637-2.09 6.637L22.096 39v-4.683l-8.195-5.326.964-3.05z",
                                fill: "url(#prefix__prefix__paint3_linear_12052_1670)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("g", {
                        mask: "url(#prefix__a)",
                        children: /*#__PURE__*/ _jsx("path", {
                            d: "M38.56 8.999H9.31v30h29.25v-30z",
                            fill: "url(#prefix__prefix__paint4_linear_12052_1670)"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint0_linear_12052_1670",
                        x1: 34.622,
                        y1: 41.062,
                        x2: 26.065,
                        y2: 5.704,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#0B46F9"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#BBFBE0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint1_linear_12052_1670",
                        x1: 34.622,
                        y1: 41.062,
                        x2: 26.065,
                        y2: 5.704,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#0B46F9"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#BBFBE0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint2_linear_12052_1670",
                        x1: 34.622,
                        y1: 41.062,
                        x2: 26.065,
                        y2: 5.704,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#0B46F9"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#BBFBE0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint3_linear_12052_1670",
                        x1: 34.622,
                        y1: 41.062,
                        x2: 26.065,
                        y2: 5.704,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#0B46F9"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#BBFBE0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint4_linear_12052_1670",
                        x1: 11.185,
                        y1: 15.749,
                        x2: 25.997,
                        y2: 26.811,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0.12,
                                stopColor: "#8952FF",
                                stopOpacity: 0.87
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#DABDFF",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("clipPath", {
                        id: "prefix__prefix__clip0_12052_1670",
                        children: /*#__PURE__*/ _jsx("path", {
                            fill: "#fff",
                            transform: "translate(9.196 8.999)",
                            d: "M0 0h29.609v30H0z"
                        })
                    })
                ]
            })
        ]
    });
})));
const External = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function External(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.333 7.75a.583.583 0 00-.583.583v7.334c0 .322.261.583.583.583h7.334a.583.583 0 00.583-.583v-2a.75.75 0 011.5 0v2c0 1.15-.933 2.083-2.083 2.083H8.333a2.083 2.083 0 01-2.083-2.083V8.333c0-1.15.933-2.083 2.083-2.083h2a.75.75 0 010 1.5h-2zm5.667 0a.75.75 0 010-1.5h3a.748.748 0 01.75.75v3a.75.75 0 01-1.5 0V8.81l-4.053 4.054a.75.75 0 01-1.06-1.061l4.052-4.053H14z"
        })
    });
})));
const Facebook = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Facebook(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.964 20v-8h2.209l.293-2.758h-2.502l.004-1.38c0-.72.068-1.105 1.101-1.105h1.38V4h-2.208c-2.653 0-3.587 1.338-3.587 3.587v1.655H8V12h1.654v8h3.31z"
        })
    });
})));
const Fil = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Fil(props, svgRef) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: 35,
        height: 35,
        viewBox: "0 0 35 35",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                clipPath: "url(#prefix__prefix__clip0_3_354)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mask", {
                        id: "prefix__a",
                        maskUnits: "userSpaceOnUse",
                        x: 0,
                        y: 0,
                        width: 35,
                        height: 35,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0 0h35v35H0V0z",
                            fill: "#fff"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        mask: "url(#prefix__a)",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M17.5 35C7.875 35 0 27.125 0 17.412.087 7.787 7.875-.088 17.587 0 27.212.087 35 7.875 35 17.675 34.913 27.212 27.125 35 17.5 35z",
                                fill: "#0090FF"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M19.163 15.4l-.526 2.8 4.988.7-.35 1.312-4.9-.7c-.35 1.138-.525 2.363-.962 3.413-.438 1.225-.875 2.45-1.4 3.587-.7 1.488-1.926 2.538-3.588 2.8-.963.175-2.013.088-2.8-.525-.262-.175-.525-.525-.525-.787 0-.35.175-.788.438-.963.175-.087.612 0 .874.088.263.262.525.612.7.962.525.7 1.226.788 1.925.263.788-.7 1.225-1.663 1.488-2.625.525-2.1 1.05-4.113 1.487-6.213v-.35l-4.637-.7.175-1.312 4.813.7.612-2.713-4.988-.787.175-1.4 5.163.7c.175-.525.262-.963.438-1.4.437-1.575.874-3.15 1.924-4.55 1.05-1.4 2.275-2.275 4.113-2.188.787 0 1.575.263 2.1.875.088.088.263.263.263.438 0 .35 0 .787-.263 1.05-.35.262-.787.175-1.137-.175-.263-.263-.438-.525-.7-.788-.525-.7-1.313-.787-1.925-.175A5.605 5.605 0 0021 8.4c-.613 1.837-1.05 3.762-1.663 5.687l4.813.7-.35 1.313-4.637-.7z",
                                fill: "#fff"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "prefix__prefix__clip0_3_354",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "#fff",
                        d: "M0 0h35v35H0z"
                    })
                })
            })
        ]
    });
});
const FloatingIcons = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Fil(props, svgRef) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "822",
        height: "253",
        viewBox: "0 0 822 253",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M515.734 44.6667V43.6834C514.519 43.6834 513.397 43.121 512.789 42.2084C512.182 41.2957 512.182 40.171 512.789 39.2584C513.397 38.3457 514.519 37.7834 515.734 37.7834H518C518.626 37.7834 519.134 37.3431 519.134 36.8C519.134 36.257 518.626 35.8167 518 35.8167H515.734C515.433 35.8167 515.145 35.9203 514.932 36.1047C514.72 36.289 514.6 36.5393 514.6 36.8H512.334C512.334 36.0178 512.692 35.267 513.329 34.714C513.967 34.161 514.832 33.8501 515.734 33.8501V32.8667H518V33.8501C519.215 33.8501 520.337 34.4124 520.945 35.3251C521.552 36.2377 521.552 37.3624 520.945 38.2751C520.337 39.1877 519.215 39.7501 518 39.7501H515.734C515.108 39.7501 514.6 40.1904 514.6 40.7334C514.6 41.2764 515.108 41.7168 515.734 41.7168H518C518.626 41.7168 519.134 41.2764 519.134 40.7334H521.4C521.4 41.5157 521.042 42.2664 520.405 42.8194C519.767 43.3725 518.902 43.6834 518 43.6834V44.6667H515.734Z",
                fill: "white",
                "fill-opacity": "0.1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M516.867 25C521.074 25.004 525.107 26.4557 528.081 29.0365C531.056 31.6173 532.729 35.1169 532.734 38.7667C532.734 39.1894 532.706 39.5819 532.668 39.9642L540.608 46.8476H540.608C541.146 47.3195 541.618 47.8441 542.017 48.4103C542.668 48.7554 543.271 49.165 543.814 49.6307L551.747 56.514C552.198 56.4894 552.652 56.4666 553.133 56.4666C557.341 56.4666 561.377 57.917 564.353 60.4987C567.328 63.0805 569 66.5823 569 70.2333C569 73.8843 567.328 77.3861 564.353 79.9679C561.377 82.5496 557.341 84 553.133 84C548.926 84 544.89 82.5496 541.914 79.9679C538.939 77.3861 537.267 73.8843 537.267 70.2333C537.267 69.8145 537.294 69.4212 537.333 69.0358L529.393 62.1524H529.392C528.855 61.6805 528.382 61.1559 527.984 60.5897C527.333 60.2442 526.729 59.8346 526.187 59.3693L518.253 52.4811C517.808 52.5154 517.355 52.5382 516.873 52.5382H516.873C511.203 52.5391 505.964 49.9157 503.128 45.6558C500.292 41.3963 500.291 36.1473 503.125 31.8868C505.959 27.626 511.197 25.0009 516.867 25ZM527.418 52.0872C528.401 50.2505 530.103 48.775 532.22 47.9229L530.22 46.1872H530.22C528.99 47.8637 527.351 49.2856 525.419 50.3527L527.418 52.0872ZM540.214 49.6139C539.88 49.1135 539.471 48.6526 539 48.2435L532.177 42.3237C531.959 43.0265 531.678 43.713 531.334 44.3769L537.391 49.6289C538.107 50.2338 538.619 50.9963 538.872 51.8344C539.294 53.1926 539.022 54.643 538.125 55.8151C537.228 56.9873 535.794 57.7678 534.188 57.9578C534.193 57.9631 534.199 57.9688 534.203 57.9745L536.053 59.5794C538.285 58.8968 540.046 57.3818 540.852 55.4512C541.658 53.5209 541.424 51.3787 540.214 49.6139ZM533.216 56.0399V56.0403C534.175 56.0899 535.111 55.7818 535.791 55.1935C536.47 54.6053 536.826 53.7927 536.771 52.9613C535.811 52.917 534.875 53.2269 534.193 53.8138C533.55 54.363 533.19 55.1141 533.194 55.8968C533.198 55.9429 533.219 55.9929 533.221 56.0403L533.216 56.0399ZM539.777 62.8131L539.777 62.8135C541.006 61.137 542.645 59.7152 544.577 58.648L542.578 56.9135C541.595 58.7503 539.894 60.2253 537.777 61.0778L539.777 62.8131ZM543.517 52.1676L543.517 52.168C543.626 53.057 543.58 53.9556 543.379 54.8327L546.657 57.6773H546.658C547.422 57.3788 548.214 57.1338 549.024 56.9459L543.517 52.1676ZM529.787 59.3867C530.121 59.8872 530.53 60.3481 531.001 60.7572L539.018 67.7134C539.098 67.7823 539.177 67.842 539.286 67.9267H539.286C540.847 69.1712 542.92 69.8174 545.037 69.7191L545.159 71.6858C544.978 71.6928 544.797 71.6976 544.615 71.6976C544.489 71.6976 544.363 71.6866 544.237 71.6827V71.6831C544.657 73.6348 545.913 75.3763 547.751 76.559C549.59 77.7412 551.875 78.2763 554.15 78.0577C556.424 77.8387 558.519 76.8816 560.014 75.3781C561.509 73.875 562.294 71.9369 562.211 69.9527C562.127 67.9685 561.182 66.0852 559.565 64.68C557.948 63.2752 555.779 62.4526 553.492 62.378L553.578 60.4113C556.483 60.5074 559.233 61.568 561.262 63.374C563.291 65.1804 564.442 67.5936 564.478 70.1155C564.514 72.6371 563.432 75.0743 561.456 76.9238C559.479 78.7728 556.759 79.8927 553.859 80.0511C550.958 80.2096 548.098 79.3953 545.869 77.7759C543.641 76.1569 542.214 73.8566 541.885 71.3508C541.069 71.152 540.284 70.8653 539.549 70.497C539.631 73.6094 541.128 76.5674 543.712 78.7263C546.297 80.8853 549.762 82.0701 553.349 82.0222C556.936 81.9748 560.357 80.6983 562.864 78.4717C565.372 76.2447 566.762 73.2482 566.734 70.1352C566.706 67.0223 565.26 64.0452 562.712 61.8533C560.165 59.6614 556.721 58.4323 553.134 58.4335C552.57 58.4318 552.007 58.4621 551.448 58.524C549.875 58.6925 548.349 59.1012 546.94 59.7316C544.649 60.754 542.739 62.3182 541.43 64.2432L542.223 64.9315C542.5 65.176 542.824 65.3757 543.182 65.5215C544.391 63.5979 546.305 62.0794 548.622 61.2066C548.938 61.0872 549.299 61.0995 549.603 61.2391C549.908 61.3787 550.123 61.6307 550.187 61.9244C550.539 63.5223 549.956 65.168 548.631 66.3195C547.306 67.4709 545.411 67.9789 543.568 67.6768C542.445 67.4982 541.413 67.0223 540.614 66.3137L532.609 59.3685C531.896 58.764 531.387 58.0019 531.136 57.1648C530.874 56.3312 530.872 55.4519 531.131 54.6169C531.39 53.7824 531.9 53.0224 532.609 52.4154C533.476 51.6664 534.598 51.1792 535.808 51.026L533.958 49.4211C531.496 50.1691 529.621 51.9277 528.952 54.1156C528.767 54.6955 528.674 55.2947 528.676 55.8966C528.672 57.1261 529.056 58.333 529.787 59.3866L529.787 59.3867ZM545.794 65.6121C546.723 65.3043 547.456 64.6678 547.811 63.8618C547.036 64.3496 546.356 64.94 545.794 65.6121ZM519.777 51.0228L526.471 56.8315C526.428 56.5211 526.404 56.2095 526.399 55.8973C526.405 55.3179 526.478 54.7406 526.619 54.1743L521.388 49.636V49.6365C520.574 48.949 520.025 48.0601 519.814 47.0916C519.744 46.7856 519.709 46.4739 519.711 46.1623C519.715 44.8457 520.326 43.5858 521.406 42.6622C522.488 41.739 523.949 41.2288 525.466 41.2456C525.706 40.6117 525.853 39.9541 525.902 39.2886C525.565 39.2706 525.227 39.2706 524.889 39.2886L524.749 37.3219C525.089 37.303 525.429 37.3101 525.769 37.3219C525.349 35.3702 524.094 33.6283 522.255 32.4456C520.417 31.2633 518.131 30.7278 515.857 30.9464C513.583 31.165 511.488 32.122 509.993 33.6251C508.497 35.1282 507.713 37.0664 507.795 39.0506C507.878 41.0348 508.823 42.918 510.44 44.3233C512.057 45.7285 514.226 46.5511 516.513 46.6262C517.041 46.6437 517.484 46.9756 517.583 47.4256C517.858 48.6864 518.535 49.8554 519.537 50.7996C519.615 50.8733 519.691 50.948 519.777 51.0226L519.777 51.0228ZM522.207 45.1179C522.958 44.6429 523.62 44.0701 524.169 43.4195C523.724 43.5648 523.318 43.7896 522.978 44.0793C522.638 44.3734 522.375 44.7276 522.207 45.1179ZM516.54 50.5539C516.116 49.9187 515.784 49.2404 515.554 48.5341C512.671 48.2443 510.027 47.0064 508.165 45.0749C506.303 43.1437 505.366 40.6665 505.547 38.1533C505.727 35.6406 507.012 33.2836 509.136 31.568C511.26 29.8524 514.062 28.9095 516.964 28.9328C519.865 28.9565 522.646 29.9447 524.733 31.6944C526.82 33.4438 528.053 35.8214 528.18 38.3367C528.201 38.4724 528.201 38.6199 528.201 38.7674C528.203 40.5325 527.657 42.2657 526.62 43.7842C525.583 45.3027 524.093 46.5507 522.307 47.3962C522.474 47.7105 522.705 47.9963 522.987 48.24L523.781 48.9283C526 47.7904 527.803 46.1319 528.981 44.1433C529.709 42.9194 530.18 41.5933 530.373 40.2266C530.441 39.7424 530.473 39.2551 530.467 38.7675C530.47 35.6533 529.055 32.6646 526.529 30.4526C524.003 28.24 520.572 26.9842 516.983 26.9573C513.394 26.931 509.939 28.1364 507.37 30.3108C504.801 32.4856 503.327 35.4531 503.27 38.5669C503.211 41.6802 504.574 44.6877 507.061 46.9326C509.548 49.178 512.956 50.4796 516.545 50.5539L516.54 50.5539Z",
                fill: "white",
                "fill-opacity": "0.1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M554.267 67.2834H552C551.7 67.2834 551.411 67.387 551.199 67.5714C550.986 67.7558 550.867 68.006 550.867 68.2667H548.6C548.6 67.4845 548.958 66.7338 549.596 66.1807C550.233 65.6277 551.099 65.3168 552 65.3168V64.3335H554.267V65.3168C555.481 65.3168 556.604 65.8791 557.211 66.7918C557.818 67.7045 557.818 68.8292 557.211 69.7418C556.604 70.6545 555.481 71.2168 554.267 71.2168H552C551.374 71.2168 550.867 71.6571 550.867 72.2001C550.867 72.7432 551.374 73.1835 552 73.1835H554.267C554.893 73.1835 555.4 72.7432 555.4 72.2001H557.667C557.667 72.9824 557.308 73.7331 556.671 74.2862C556.033 74.8392 555.168 75.1501 554.267 75.1501V76.1334H552V75.1501C550.785 75.1501 549.663 74.5877 549.056 73.6751C548.448 72.7624 548.448 71.6377 549.056 70.7251C549.663 69.8124 550.785 69.2501 552 69.2501H554.267C554.893 69.2501 555.4 68.8098 555.4 68.2667C555.4 67.7237 554.893 67.2834 554.267 67.2834Z",
                fill: "white",
                "fill-opacity": "0.1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M142 252.5C134.029 252.5 127.501 245.976 127.5 237.927C127.574 229.947 134.029 223.427 142.07 223.5C150.045 223.572 156.499 230.022 156.5 238.147C156.426 246.048 149.974 252.5 142 252.5Z",
                stroke: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M143.425 236.2L142.975 238.6L147.25 239.2L146.95 240.325L142.75 239.725C142.45 240.7 142.3 241.75 141.925 242.65C141.55 243.7 141.175 244.75 140.725 245.725C140.125 247 139.075 247.9 137.65 248.125C136.825 248.275 135.925 248.2 135.25 247.675C135.025 247.525 134.8 247.225 134.8 247C134.8 246.7 134.95 246.325 135.175 246.175C135.325 246.1 135.7 246.175 135.925 246.25C136.15 246.475 136.375 246.775 136.525 247.075C136.975 247.675 137.575 247.75 138.175 247.3C138.85 246.7 139.225 245.875 139.45 245.05C139.9 243.25 140.35 241.525 140.725 239.725V239.425L136.75 238.825L136.9 237.7L141.025 238.3L141.55 235.975L137.275 235.3L137.425 234.1L141.85 234.7C142 234.25 142.075 233.875 142.225 233.5C142.6 232.15 142.975 230.8 143.875 229.6C144.775 228.4 145.825 227.65 147.4 227.725C148.075 227.725 148.75 227.95 149.2 228.475C149.275 228.55 149.425 228.7 149.425 228.85C149.425 229.15 149.425 229.525 149.2 229.75C148.9 229.975 148.525 229.9 148.225 229.6C148 229.375 147.85 229.15 147.625 228.925C147.175 228.325 146.5 228.25 145.975 228.775C145.6 229.15 145.225 229.675 145 230.2C144.475 231.775 144.1 233.425 143.575 235.075L147.7 235.675L147.4 236.8L143.425 236.2Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                opacity: "0.3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M793.275 187.095L804.934 187.184C805.431 187.162 805.837 187.343 806.356 187.819L814.203 196.441C814.834 197.21 816.101 196.557 815.854 195.472L811.23 178.541C810.984 177.456 809.764 176.912 808.792 177.453L793.098 185.31C791.922 185.76 792.281 187.138 793.275 187.095ZM788.013 198.88L795.86 207.502C796.175 207.886 796.582 208.068 797.282 208.137L808.94 208.226C809.935 208.182 810.294 209.561 809.321 210.102L793.627 217.959C792.654 218.499 791.435 217.955 791.189 216.87L786.565 199.939C786.115 198.763 787.381 198.11 788.013 198.88ZM803.365 192.332L790.441 192.897L798.647 202.898L811.572 202.333L803.365 192.332Z",
                    stroke: "white",
                    "stroke-width": "1.5",
                    "stroke-miterlimit": "10",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                opacity: "0.2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M6.18408 2.73703L8.12969 7.62397M5.02143 4.00717L3.27036 9.72005C2.87273 11.0193 3.6545 12.1718 5.00062 12.2817L9.15777 12.6394C9.70179 12.6812 10.445 12.3852 10.8115 11.981L13.5853 8.86396C14.4838 7.84966 14.2595 6.47515 13.0814 5.81402L7.89227 2.86421C6.71607 2.18081 5.41536 2.69865 5.02143 4.00717Z",
                        stroke: "white",
                        "stroke-width": "1.5",
                        "stroke-miterlimit": "10",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M5.39272 12.1041L8.12969 7.62399L13.197 8.99704M7.66991 15.2015L9.43204 15.2749C9.99144 15.297 10.5493 15.2014 11.0694 14.9943C11.5895 14.7872 12.0604 14.4733 12.4515 14.0728L13.681 12.8083C14.7822 11.6811 16.6614 12.8057 16.1836 14.3091L14.5337 19.5189C14.1286 20.7995 12.8372 21.3136 11.6535 20.6655L6.88359 18.0116C5.49395 17.2518 6.08602 15.1432 7.66991 15.2015Z",
                        stroke: "white",
                        "stroke-width": "1.5",
                        "stroke-miterlimit": "10",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    })
                ]
            })
        ]
    });
});
const Gamestop = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Gamestop(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",
                fill: "#000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M32.48 22.374h-2.615v-4.891c0-.661-.075-1.137-.436-1.137-.36 0-.436.476-.436 1.137v4.891H26.38v-4.891c0-.661-.075-1.137-.436-1.137-.36 0-.436.476-.436 1.137v4.891h-2.615v-7.47h2.617v.776a1.86 1.86 0 01.705-.686c.293-.161.624-.242.96-.233.713 0 1.332.256 1.722.99a1.8 1.8 0 01.701-.743c.301-.175.647-.261.996-.247 1.014 0 1.888.642 1.888 2.26l-.002 5.353zm-13.103-3.73c-.349.286-.873.586-.873 1.495 0 .612.158.862.438.862s.435-.25.435-.862v-1.495zm-.37-3.883c1.736 0 2.985.596 2.985 2.471v5.142h-2.615v-.647c-.28.44-.785.783-1.6.783-.562 0-1.873-.191-1.873-2.132 0-2.657 3.471-1.746 3.471-3.361 0-.661-.158-.93-.437-.93-.28 0-.436.269-.436.93v.41H16.02v-.19c0-1.876 1.251-2.472 2.987-2.472v-.004zm17.877 4.614h2.485c-.035 2.174-1.302 3.142-3.051 3.142-1.75 0-3.051-.987-3.051-3.228v-1.3c0-2.24 1.278-3.228 3.05-3.228 1.773 0 3.052.987 3.052 3.228v.783h-3.485v1.278c0 .659.085 1.134.5 1.134.414 0 .5-.476.5-1.134v-.675zm-.123-2.154c0-.66-.075-1.135-.436-1.135-.36 0-.436.476-.436 1.135v.395h.872v-.395zm-21.6-.715v-.381c0-2.585-1.558-3.284-3.278-3.284s-3.251.919-3.251 3.505v2.657c0 1.74.744 3.514 2.736 3.514.914 0 1.5-.437 1.753-.852l.207.717h1.82v-4.955h-3.163v1.597h.712v.334c0 .812-.114 1.555-.63 1.555-.518 0-.63-.743-.63-1.555v-3.404c0-.79.053-1.516.454-1.516s.453.726.453 1.516v.552h2.818zm7.432 16.632a3.9 3.9 0 01-1.5.3c-1.24 0-1.971-.7-1.971-2.029v-4.595h-.527v-.99h.527v-1.012h2.613v1.012h.858v.99h-.858v4.479c0 .483.087.907.51.907a.666.666 0 00.348-.1v1.04-.002zm-7.084-6.324h2.594v-.401c0-1.836-1.237-2.651-3.074-2.651-1.754 0-3.074.972-3.074 2.674 0 3.19 3.645 2.483 3.645 4.647 0 .573-.225.764-.5.764-.273 0-.497-.191-.497-.764v-.791h-2.617v.382c0 1.916 1.26 2.764 3.153 2.764 1.81 0 3.16-.997 3.16-2.781 0-3.555-3.75-2.57-3.75-4.537 0-.573.234-.764.48-.764.247 0 .48.191.48.764v.694zm10.927 1.337c0-.66-.075-1.135-.435-1.135s-.436.476-.436 1.135v2.819c0 .659.075 1.134.436 1.134.36 0 .435-.475.435-1.134v-2.82zm-.435-2.46c1.772 0 3.05.987 3.05 3.228v1.293c0 2.24-1.278 3.228-3.05 3.228-1.772 0-3.05-.988-3.05-3.228v-1.303c0-2.24 1.276-3.228 3.05-3.228v.01zm7.328 2.712c0-.661-.075-1.137-.436-1.137-.36 0-.435.476-.435 1.137v2.307c0 .66.075 1.135.435 1.135.361 0 .436-.476.436-1.135v-2.307zm.664-2.722c1.236 0 1.951.988 1.951 3.228v1.293c0 2.24-.715 3.228-1.951 3.228a1.879 1.879 0 01-1.543-.797v2.524h-2.6v-9.333h2.615v.653a1.879 1.879 0 011.543-.796h-.015zm1.612.415c.024.042.06.077.102.1a.26.26 0 00.143.039.268.268 0 00.139-.036.272.272 0 00.102-.102.263.263 0 00.038-.139.268.268 0 00-.142-.24.269.269 0 00-.137-.037.296.296 0 00-.14.036.264.264 0 00-.103.104.265.265 0 00-.039.137.28.28 0 00.037.138zm.036-.256a.244.244 0 01.146-.113.24.24 0 01.271.113.234.234 0 01-.089.324.222.222 0 01-.12.033.232.232 0 01-.12-.033.238.238 0 01-.09-.086.241.241 0 01.002-.238zm.292-.02a.134.134 0 00-.09-.024h-.086v.324h.049v-.131h.04l.079.13h.054l-.085-.142a.11.11 0 00.05-.036.093.093 0 00-.011-.122v.002zm-.127.02h.033a.106.106 0 01.055.011.04.04 0 01.014.017.046.046 0 01.004.021c0 .038-.026.056-.073.056h-.033v-.105z",
                fill: "#fff"
            })
        ]
    });
})));
const History = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function History(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20 8.94a.887.887 0 00-.25-.64l-6-6c-.198-.186-.406-.3-.69-.3H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V8.94zm-6-3.53L16.59 8H14V5.41zM17 20a1 1 0 001-1v-9h-5a1 1 0 01-1-1V4H7a1 1 0 00-1 1v14a1 1 0 001 1h10z"
        })
    });
})));
const ImtokenCircle = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function ImtokenCircle(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 49,
        viewBox: "0 0 48 49",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                y: 0.002,
                width: 48,
                height: 48,
                rx: 24,
                fill: "url(#prefix__prefix__paint0_linear_10169:6069)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M36.932 15.606c.858 11.153-6.607 16.427-13.3 16.99-6.221.522-12.077-3.15-12.592-8.792-.423-4.661 2.576-6.645 4.932-6.843 2.424-.204 4.46 1.401 4.638 3.345.17 1.869-1.043 2.72-1.888 2.79a1.46 1.46 0 01-1.043-.27 1.35 1.35 0 01-.54-.9c-.066-.718.218-.816.149-1.579-.123-1.358-1.357-1.516-2.033-1.46-.817.068-2.3.985-2.092 3.267.21 2.302 2.508 4.12 5.52 3.867 3.25-.272 5.513-2.702 5.684-6.113-.002-.18.038-.359.115-.523v-.004c.035-.072.076-.14.123-.206.082-.116.173-.227.273-.33 0-.004 0-.004.003-.004.084-.09.184-.188.298-.294 1.422-1.286 6.536-4.321 11.372-3.36a.489.489 0 01.264.149c.068.075.11.17.118.27",
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsxs("linearGradient", {
                    id: "prefix__prefix__paint0_linear_10169:6069",
                    x1: 46.656,
                    y1: 1.49,
                    x2: 0.001,
                    y2: 47.858,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ _jsx("stop", {
                            stopColor: "#11C4D1"
                        }),
                        /*#__PURE__*/ _jsx("stop", {
                            offset: 1,
                            stopColor: "#0062AD"
                        })
                    ]
                })
            })
        ]
    });
})));
const Imtoken = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Imtoken(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 40,
        height: 40,
        viewBox: "0 0 40 40",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M39.896 27.443s0 4.146-.443 5.926a8.333 8.333 0 01-2.186 3.96c-.928.92-2.152 1.76-4 2.198-1.876.437-5.918.416-5.918.416H12.651s-4.147 0-5.938-.438c-1.786-.458-3.052-1.276-3.973-2.198-.928-.92-1.77-2.135-2.193-4C.104 31.443.125 27.42.125 27.42V12.76s0-4.147.443-5.927A8.32 8.32 0 012.76 2.875c.923-.922 2.147-1.755 4-2.198C8.63.24 12.672.26 12.672.26h14.697s4.147 0 5.938.437c1.786.464 3.053 1.276 3.98 2.199.921.921 1.765 2.14 2.186 4 .423 1.864.423 5.885.423 5.885v14.662z",
                fill: "url(#prefix__prefix__paint0_linear)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M33.661 12.387c.823 11.285-6.713 16.649-13.473 17.233-6.272.547-12.167-3.141-12.672-8.86-.423-4.707 2.61-6.739 4.99-6.932 2.442-.208 4.483 1.407 4.671 3.375.172 1.885-1.053 2.76-1.912 2.828-.677.062-1.514-.338-1.604-1.176-.062-.73.235-.814.151-1.59-.13-1.385-1.37-1.53-2.04-1.468-.824.063-2.32 1.006-2.132 3.312.213 2.323 2.527 4.167 5.557 3.891 3.287-.292 5.584-2.74 5.751-6.197 0-.188.041-.355.125-.522.04-.062.063-.125.124-.186a2.49 2.49 0 01.276-.34l.298-.291c1.426-1.297 6.609-4.396 11.469-3.433.047 0 .088.021.11.042.186 0 .29.147.311.312",
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsxs("linearGradient", {
                    id: "prefix__prefix__paint0_linear",
                    x1: 38.783,
                    y1: 1.49,
                    x2: 0.211,
                    y2: 39.909,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ _jsx("stop", {
                            stopColor: "#11C4D1"
                        }),
                        /*#__PURE__*/ _jsx("stop", {
                            offset: 1,
                            stopColor: "#0062AD"
                        })
                    ]
                })
            })
        ]
    });
})));
const Ldo = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Ldo(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z",
                fill: "#F69988"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.005 4.223l3.859 6.025-3.859 2.244-3.858-2.244 3.858-6.025zm-2.677 5.74l2.677-4.18 2.677 4.18-2.677 1.557-2.677-1.557z",
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12 13.816l-4.477-2.603-.122.191a5.433 5.433 0 00.74 6.78 5.467 5.467 0 007.718 0 5.432 5.432 0 00.74-6.78l-.122-.19L12 13.816z",
                fill: "#fff"
            })
        ]
    });
})));
const Ldopl = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Ldopl(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M7.078 11.148l-.135.206a5.788 5.788 0 00.814 7.32 6.043 6.043 0 004.24 1.72l-4.92-9.246z",
                fill: "#D219B8"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M11.997 13.958l-4.92-2.81 4.92 9.246v-6.436zm4.925-2.81l.134.206a5.788 5.788 0 01-.813 7.32 6.043 6.043 0 01-4.24 1.72l4.92-9.246z",
                fill: "#D219B8"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.2,
                d: "M12.002 13.958l4.92-2.81-4.92 9.246v-6.436zm.001-6.278v4.847l4.238-2.422-4.238-2.425z",
                fill: "#D219B8"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M12.003 7.68l-4.24 2.425 4.24 2.422V7.68z",
                fill: "#D219B8"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12.003 3.604l-4.24 6.502 4.24-2.431V3.604z",
                fill: "#D219B8"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M12.003 7.674l4.241 2.432-4.24-6.506v4.074z",
                fill: "#D219B8"
            })
        ]
    });
})));
const LedgerCircleInversion = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function LedgerCircleInversion(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: 24,
                cy: 24,
                r: 24,
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M10 29.34v6.876h10.464v-1.525h-8.94v-5.35H10zm26.294 0v5.351h-8.94v1.525h10.464V29.34h-1.524zM20.479 18.876V29.34h6.876v-1.375h-5.352v-9.089H20.48zM10 12v6.876h1.525v-5.351h8.939V12H10zm17.355 0v1.525h8.939v5.351h1.524V12H27.355z",
                fill: "#000"
            })
        ]
    });
})));
const LedgerCircle = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function LedgerCircle(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: 24,
                cy: 24,
                r: 24,
                fill: "#000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M10 29.34v6.876h10.464v-1.525h-8.94v-5.35H10zm26.294 0v5.351h-8.94v1.525h10.464V29.34h-1.524zM20.479 18.876V29.34h6.876v-1.375h-5.352v-9.089H20.48zM10 12v6.876h1.525v-5.351h8.939V12H10zm17.355 0v1.525h8.939v5.351h1.524V12H27.355z",
                fill: "#fff"
            })
        ]
    });
})));
const LedgerConfirm = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function LedgerConfirm(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 354,
        height: 43,
        viewBox: "0 0 354 43",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: 58,
                y: 6,
                width: 238,
                height: 36,
                rx: 5,
                fill: "#F6F7FB",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M83 24a7 7 0 10-14 0 7 7 0 0014 0z",
                fill: "#F6F7FB",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M81 24a5 5 0 10-10 0 5 5 0 0010 0z",
                fill: "#136BFF",
                fillOpacity: 0.15
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M76 19.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z",
                stroke: "#136BFF",
                strokeOpacity: 0.35
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M77 24a1 1 0 10-2 0 1 1 0 002 0z",
                fill: "#136BFF"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M76 0c.276 0 .5.138.5.308v23.384c0 .17-.224.308-.5.308s-.5-.138-.5-.308V.308c0-.17.224-.308.5-.308z",
                fill: "url(#prefix__prefix__paint0_linear_10116:2145)"
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: 96.597,
                y: 10.597,
                width: 60.807,
                height: 26.807,
                rx: 3.403,
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 1.193
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M168 24c0-9.941 8.059-18 18-18h105.046A4.954 4.954 0 01296 10.954v26.092A4.954 4.954 0 01291.046 42H186c-9.941 0-18-8.059-18-18z",
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M193 24a7 7 0 10-14 0 7 7 0 0014 0z",
                fill: "#F6F7FB",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M191 24a5 5 0 10-10 0 5 5 0 0010 0z",
                fill: "#136BFF",
                fillOpacity: 0.15
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M186 19.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z",
                stroke: "#136BFF",
                strokeOpacity: 0.35
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M187 24a1 1 0 10-2 0 1 1 0 002 0z",
                fill: "#136BFF"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M186 0c.276 0 .5.138.5.308v23.384c0 .17-.224.308-.5.308s-.5-.138-.5-.308V.308c0-.17.224-.308.5-.308z",
                fill: "url(#prefix__prefix__paint1_linear_10116:2145)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M44 21a3 3 0 013-3h9.613c.766 0 1.387.62 1.387 1.387v9.226C58 29.38 57.38 30 56.613 30H47a3 3 0 01-3-3v-6z",
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M34.5 22.387c0-1.042.845-1.887 1.887-1.887h6.42c.383 0 .693.31.693.693v5.614c0 .383-.31.693-.693.693h-6.42a1.887 1.887 0 01-1.887-1.887v-3.226z",
                fill: "#fff",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M.5 22.5h34v3H.5v-3z",
                fill: "url(#prefix__prefix__paint2_linear_10116:2145)",
                stroke: "url(#prefix__prefix__paint3_linear_10116:2145)"
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint0_linear_10116:2145",
                        x1: 76.5,
                        y1: 0.308,
                        x2: 76.5,
                        y2: 23.692,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#136BFF",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#136BFF"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint1_linear_10116:2145",
                        x1: 186.5,
                        y1: 0.308,
                        x2: 186.5,
                        y2: 23.692,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#136BFF",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#136BFF"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint2_linear_10116:2145",
                        x1: 35.473,
                        y1: 24,
                        x2: 0,
                        y2: 24,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#fff"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#fff",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint3_linear_10116:2145",
                        x1: 35,
                        y1: 26,
                        x2: 2.838,
                        y2: 26,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#172340"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#172340",
                                stopOpacity: 0
                            })
                        ]
                    })
                ]
            })
        ]
    });
})));
const LedgerFail = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function LedgerFail(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 354,
        height: 38,
        viewBox: "0 0 354 38",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: 58,
                y: 1,
                width: 238,
                height: 36,
                rx: 5,
                fill: "#F6F7FB",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M83 19a7 7 0 10-14 0 7 7 0 0014 0z",
                fill: "#F6F7FB",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: 96.597,
                y: 5.597,
                width: 60.807,
                height: 26.807,
                rx: 3.403,
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 1.193
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M122.199 23.801a.679.679 0 00.96 0l3.841-3.84 3.841 3.84a.679.679 0 10.96-.96L127.96 19l3.841-3.84a.68.68 0 00-.96-.961L127 18.039l-3.841-3.84a.679.679 0 10-.96.96L126.04 19l-3.841 3.84a.68.68 0 000 .961z",
                fill: "#E14D4D"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M168 19c0-9.941 8.059-18 18-18h105.046A4.954 4.954 0 01296 5.954v26.092A4.954 4.954 0 01291.046 37H186c-9.941 0-18-8.059-18-18z",
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M193 19a7 7 0 10-14 0 7 7 0 0014 0z",
                fill: "#F6F7FB",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M44 16a3 3 0 013-3h9.613c.766 0 1.387.62 1.387 1.387v9.226C58 24.38 57.38 25 56.613 25H47a3 3 0 01-3-3v-6z",
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M34.5 17.387c0-1.042.845-1.887 1.887-1.887h6.42c.383 0 .693.31.693.693v5.614c0 .383-.31.693-.693.693h-6.42a1.887 1.887 0 01-1.887-1.887v-3.226z",
                fill: "#fff",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M.5 17.5h34v3H.5v-3z",
                fill: "url(#prefix__prefix__paint0_linear_10549_10810)",
                stroke: "url(#prefix__prefix__paint1_linear_10549_10810)"
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint0_linear_10549_10810",
                        x1: 35.473,
                        y1: 19,
                        x2: 0,
                        y2: 19,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#fff"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#fff",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint1_linear_10549_10810",
                        x1: 35,
                        y1: 21,
                        x2: 2.838,
                        y2: 21,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#172340"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#172340",
                                stopOpacity: 0
                            })
                        ]
                    })
                ]
            })
        ]
    });
})));
const LedgerLoading = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function LedgerLoading(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 354,
        height: 38,
        viewBox: "0 0 354 38",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: 58,
                y: 1,
                width: 238,
                height: 36,
                rx: 5,
                fill: "#F6F7FB",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M83 19a7 7 0 10-14 0 7 7 0 0014 0z",
                fill: "#F6F7FB",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: 96.597,
                y: 5.597,
                width: 60.807,
                height: 26.807,
                rx: 3.403,
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 1.193
            }),
            /*#__PURE__*/ _jsx("circle", {
                opacity: 0.1,
                cx: 127,
                cy: 19,
                r: 6,
                stroke: "#00A3FF",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M131.555 22.905A6 6 0 00127 13",
                stroke: "#00A3FF",
                strokeWidth: 2,
                strokeLinecap: "round",
                children: /*#__PURE__*/ _jsx("animateTransform", {
                    attributeName: "transform",
                    attributeType: "XML",
                    type: "rotate",
                    from: "0 127 19",
                    to: "360 127 19",
                    dur: "1s",
                    repeatCount: "indefinite"
                })
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M168 19c0-9.941 8.059-18 18-18h105.046A4.954 4.954 0 01296 5.954v26.092A4.954 4.954 0 01291.046 37H186c-9.941 0-18-8.059-18-18z",
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M193 19a7 7 0 10-14 0 7 7 0 0014 0z",
                fill: "#F6F7FB",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M44 16a3 3 0 013-3h9.613c.766 0 1.387.62 1.387 1.387v9.226C58 24.38 57.38 25 56.613 25H47a3 3 0 01-3-3v-6z",
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M34.5 17.387c0-1.042.845-1.887 1.887-1.887h6.42c.383 0 .693.31.693.693v5.614c0 .383-.31.693-.693.693h-6.42a1.887 1.887 0 01-1.887-1.887v-3.226z",
                fill: "#fff",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M.5 17.5h34v3H.5v-3z",
                fill: "url(#prefix__prefix__paint0_linear_10116:2259)",
                stroke: "url(#prefix__prefix__paint1_linear_10116:2259)"
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint0_linear_10116:2259",
                        x1: 35.473,
                        y1: 19,
                        x2: 0,
                        y2: 19,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#fff"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#fff",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint1_linear_10116:2259",
                        x1: 35,
                        y1: 21,
                        x2: 2.838,
                        y2: 21,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#172340"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#172340",
                                stopOpacity: 0
                            })
                        ]
                    })
                ]
            })
        ]
    });
})));
const LedgerSuccess = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function LedgerSuccess(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 354,
        height: 38,
        viewBox: "0 0 354 38",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: 58,
                y: 1,
                width: 238,
                height: 36,
                rx: 5,
                fill: "#F6F7FB",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M83 19a7 7 0 10-14 0 7 7 0 0014 0z",
                fill: "#F6F7FB",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: 96.597,
                y: 5.597,
                width: 60.807,
                height: 26.807,
                rx: 3.403,
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 1.193
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M132 15l-6.875 6.875L122 18.75",
                stroke: "#61B75F",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M168 19c0-9.941 8.059-18 18-18h105.046A4.954 4.954 0 01296 5.954v26.092A4.954 4.954 0 01291.046 37H186c-9.941 0-18-8.059-18-18z",
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M193 19a7 7 0 10-14 0 7 7 0 0014 0z",
                fill: "#F6F7FB",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M44 16a3 3 0 013-3h9.613c.766 0 1.387.62 1.387 1.387v9.226C58 24.38 57.38 25 56.613 25H47a3 3 0 01-3-3v-6z",
                fill: "#fff",
                stroke: "#172340",
                strokeWidth: 2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M34.5 17.387c0-1.042.845-1.887 1.887-1.887h6.42c.383 0 .693.31.693.693v5.614c0 .383-.31.693-.693.693h-6.42a1.887 1.887 0 01-1.887-1.887v-3.226z",
                fill: "#fff",
                stroke: "#172340"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M.5 17.5h34v3H.5v-3z",
                fill: "url(#prefix__prefix__paint0_linear_10116:2189)",
                stroke: "url(#prefix__prefix__paint1_linear_10116:2189)"
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint0_linear_10116:2189",
                        x1: 35.473,
                        y1: 19,
                        x2: 0,
                        y2: 19,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#fff"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#fff",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint1_linear_10116:2189",
                        x1: 35,
                        y1: 21,
                        x2: 2.838,
                        y2: 21,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#172340"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#172340",
                                stopOpacity: 0
                            })
                        ]
                    })
                ]
            })
        ]
    });
})));
const Ledger = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Ledger(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 40,
        height: 40,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: 24,
                cy: 24,
                r: 24,
                fill: "#000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M10 29.34v6.876h10.464v-1.525h-8.94v-5.35H10zm26.294 0v5.351h-8.94v1.525h10.464V29.34h-1.524zM20.479 18.876V29.34h6.876v-1.375h-5.352v-9.089H20.48zM10 12v6.876h1.525v-5.351h8.939V12H10zm17.355 0v1.525h8.939v5.351h1.524V12H27.355z",
                fill: "#fff"
            })
        ]
    });
})));
const Light = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Light(props, svgRef) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 3a1 1 0 011 1v1.455a1 1 0 11-2 0V4a1 1 0 011-1zm0 12.636a3.636 3.636 0 100-7.272 3.636 3.636 0 000 7.272zm1 2.91a1 1 0 10-2 0V20a1 1 0 102 0v-1.454zM5.635 5.634a1 1 0 011.414 0l1.033 1.033A1 1 0 116.668 8.08L5.635 7.048a1 1 0 010-1.414zm11.697 10.284a1 1 0 00-1.414 1.414l1.033 1.033a1 1 0 101.414-1.414l-1.033-1.033zM3 12a1 1 0 011-1h1.455a1 1 0 110 2H4a1 1 0 01-1-1zm15.546-1a1 1 0 100 2H20a1 1 0 100-2h-1.454zM8.082 15.918a1 1 0 010 1.414L7.05 18.365a1 1 0 11-1.414-1.414l1.033-1.033a1 1 0 011.414 0zm10.283-8.87a1 1 0 10-1.414-1.414l-1.033 1.033a1 1 0 001.414 1.414l1.033-1.033z"
        })
    });
});
const Linkedin = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Linkedin(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M8.537 6.632C8.517 5.705 7.854 5 6.779 5 5.703 5 5 5.705 5 6.632c0 .907.682 1.632 1.738 1.632h.02c1.096 0 1.779-.725 1.779-1.632zm-.206 2.922H5.188V19H8.33V9.554zm7.719-.222c2.07 0 3.62 1.35 3.62 4.252V19h-3.144v-5.054c0-1.27-.455-2.135-1.593-2.135-.868 0-1.386.584-1.613 1.148-.083.202-.104.483-.104.766V19h-3.144s.042-8.56 0-9.446h3.145v1.338c.417-.643 1.164-1.56 2.833-1.56z"
        })
    });
})));
const LockSmall = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function LockSmall(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M12 6a3.129 3.129 0 00-3.125 3.125V11H8.25C7.56 11 7 11.56 7 12.25V17c0 .69.56 1 1.25 1h7.5c.69 0 1.25-.31 1.25-1v-4.75c0-.69-.56-1.25-1.25-1.25h-.625V9.125A3.129 3.129 0 0012 6zm-1.875 3.125c0-1.034.841-1.875 1.875-1.875s1.875.841 1.875 1.875V11h-3.75V9.125zm2.5 5.702v.798a.625.625 0 11-1.25 0v-.798a1.245 1.245 0 01.354-2.298 1.25 1.25 0 011.521 1.221c0 .462-.252.86-.625 1.077z"
        })
    });
})));
const Lock = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Lock(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17 7v2a3 3 0 013 3v7a3 3 0 01-3 3H7a3 3 0 01-3-3v-7a3 3 0 013-3V7a5 5 0 0110 0zm-6 7a1 1 0 112 0v3a1 1 0 11-2 0v-3zM9 7a3 3 0 116 0v2H9V7zm8 13a1 1 0 001-1v-7a1 1 0 00-1-1H7a1 1 0 00-1 1v7a1 1 0 001 1h10z"
        })
    });
})));
const MathWalletCircleInversion = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function MathWalletCircleInversion(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: 24,
                cy: 24,
                r: 24,
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M31.954 22.596a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-5.802 5.803a1.296 1.296 0 111.832-1.833 1.296 1.296 0 01-1.832 1.833zm9.162-3.054a1.296 1.296 0 111.832-1.833 1.296 1.296 0 01-1.832 1.833zm-3.054 3.054a1.296 1.296 0 111.832-1.833A1.296 1.296 0 0132.26 28.4zm6.413-.306a.864.864 0 111.222-1.221.864.864 0 01-1.222 1.221zm-3.054 3.054a.864.864 0 111.222-1.221.864.864 0 01-1.222 1.221zM28.9 25.65a1.728 1.728 0 112.444-2.443A1.728 1.728 0 0128.9 25.65zm0-6.108a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-3.054 3.054a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-6.136 0a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-5.803 5.803a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm9.162-3.054a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm-3.054 3.054a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm-11.91-.306a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm3.054 3.054a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm12.216 0a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm-12.522-5.802a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm5.803.305a1.728 1.728 0 112.444-2.443 1.728 1.728 0 01-2.444 2.443zm0-6.108a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-3.054 3.054a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443z",
                fill: "#293037"
            })
        ]
    });
})));
const MathWalletCircle = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function MathWalletCircle(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: 24,
                cy: 24,
                r: 24,
                fill: "url(#prefix__prefix__paint0_linear_10169:6073)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M31.954 22.596a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-5.802 5.803a1.296 1.296 0 111.832-1.833 1.296 1.296 0 01-1.832 1.833zm9.162-3.054a1.296 1.296 0 111.832-1.833 1.296 1.296 0 01-1.832 1.833zm-3.054 3.054a1.296 1.296 0 111.832-1.833A1.296 1.296 0 0132.26 28.4zm6.413-.306a.864.864 0 111.222-1.221.864.864 0 01-1.222 1.221zm-3.054 3.054a.864.864 0 111.222-1.221.864.864 0 01-1.222 1.221zM28.9 25.65a1.728 1.728 0 112.444-2.443A1.728 1.728 0 0128.9 25.65zm0-6.108a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-3.054 3.054a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-6.136 0a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-5.803 5.803a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm9.162-3.054a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm-3.054 3.054a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm-11.91-.306a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm3.054 3.054a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm12.216 0a.864.864 0 111.221-1.221.864.864 0 01-1.221 1.221zm-12.522-5.802a1.296 1.296 0 111.833-1.833 1.296 1.296 0 01-1.833 1.833zm5.803.305a1.728 1.728 0 112.444-2.443 1.728 1.728 0 01-2.444 2.443zm0-6.108a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443zm-3.054 3.054a1.728 1.728 0 112.443-2.443 1.728 1.728 0 01-2.443 2.443z",
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsxs("linearGradient", {
                    id: "prefix__prefix__paint0_linear_10169:6073",
                    x1: 48,
                    y1: 0,
                    x2: 0,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ _jsx("stop", {
                            stopColor: "#293037"
                        }),
                        /*#__PURE__*/ _jsx("stop", {
                            offset: 1,
                            stopColor: "#16181D"
                        })
                    ]
                })
            })
        ]
    });
})));
const MetaMaskCircleInversion = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function MetaMaskCircleInversion(props, svgRef) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: 48,
        height: 49,
        viewBox: "0 0 48 49",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                y: 0.004,
                width: 48,
                height: 48,
                rx: 24,
                fill: "#fff"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M35.708 11.005L25.563 18.54l1.876-4.446 8.269-3.09z",
                fill: "#E2761B"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.285 11.004L22.35 18.61l-1.785-4.517-8.279-3.09zM32.057 28.47l-2.702 4.14 5.782 1.59 1.662-5.639-4.742-.091zm-20.842.091l1.652 5.639 5.78-1.59-2.701-4.14-4.731.091z",
                fill: "#E4761B"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18.322 21.476l-1.611 2.437 5.74.255-.204-6.169-3.925 3.477zm11.35 0l-3.977-3.548-.133 6.24 5.73-.255-1.62-2.437zM18.648 32.61l3.447-1.683-2.977-2.325-.47 4.008zm7.25-1.683l3.457 1.683-.48-4.008-2.977 2.325z",
                fill: "#E4761B"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M29.355 32.61l-3.457-1.682.276 2.253-.03.948 3.211-1.519zm-10.707 0l3.212 1.52-.02-.949.255-2.253-3.447 1.682z",
                fill: "#D7C1B3"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M21.91 27.115l-2.875-.846 2.03-.928.845 1.774zm4.172 0l.846-1.774 2.04.928-2.886.846z",
                fill: "#233447"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18.647 32.61l.49-4.14-3.192.093 2.702 4.047zm10.216-4.14l.49 4.14 2.702-4.047-3.192-.092zm2.426-4.557l-5.73.255.53 2.947.846-1.774 2.04.927 2.314-2.355zm-12.253 2.355l2.039-.927.836 1.774.54-2.947-5.74-.255 2.325 2.355z",
                fill: "#CD6116"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M16.71 23.914l2.407 4.69-.081-2.335-2.325-2.355zm12.267 2.354l-.102 2.335 2.416-4.69-2.314 2.355zm-6.527-2.1l-.54 2.947.673 3.477.153-4.578-.285-1.846zm3.11 0l-.275 1.835.122 4.589.684-3.477-.53-2.947z",
                fill: "#E4751F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26.093 27.114l-.683 3.477.49.336 2.977-2.325.102-2.334-2.886.846zm-7.058-.846l.082 2.334 2.977 2.325.49-.336-.674-3.477-2.875-.846z",
                fill: "#F6851B"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26.143 34.13l.03-.949-.255-.224h-3.844l-.234.224.02.949-3.212-1.52 1.122.918 2.274 1.58h3.905l2.284-1.58 1.122-.918-3.212 1.52z",
                fill: "#C0AD9E"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M25.898 30.928l-.49-.336h-2.824l-.49.336-.254 2.254.234-.225h3.844l.255.225-.275-2.254z",
                fill: "#161616"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M36.132 19.028l.866-4.16-1.295-3.864-9.809 7.28 3.773 3.191L35 23.035l1.182-1.376-.51-.367.816-.744-.632-.49.816-.622-.54-.408zM11 14.868l.867 4.16-.55.408.815.622-.622.49.816.744-.51.367 1.172 1.377 5.333-1.56 3.772-3.192-9.808-7.28L11 14.868z",
                fill: "#763D16"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M35.003 23.036l-5.333-1.56 1.621 2.437-2.416 4.69 3.181-.041h4.742l-1.795-5.526zm-16.681-1.56l-5.333 1.56-1.774 5.526h4.73l3.172.04-2.406-4.69 1.61-2.436zm7.237 2.693l.336-5.884 1.55-4.19h-6.883l1.53 4.19.357 5.884.122 1.855.01 4.568h2.825l.02-4.568.133-1.855z",
                fill: "#F6851B"
            })
        ]
    });
});
const MetaMaskCircle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function MetaMaskCircle(props, svgRef) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: 48,
        height: 49,
        viewBox: "0 0 48 49",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                y: 0.004,
                width: 48,
                height: 48,
                rx: 24,
                fill: "#233447"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M35.706 11.005L25.56 18.54l1.877-4.446 8.269-3.09z",
                fill: "#E2761B"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.285 11.004L22.35 18.61l-1.785-4.517-8.279-3.09zM32.056 28.47l-2.702 4.14 5.78 1.59 1.663-5.639-4.741-.091zm-20.841.091l1.652 5.639 5.78-1.59-2.701-4.14-4.731.091z",
                fill: "#E4761B"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18.322 21.476l-1.611 2.437 5.74.255-.204-6.169-3.925 3.477zm11.348 0l-3.977-3.548-.133 6.24 5.73-.255-1.62-2.437zM18.648 32.61l3.447-1.683-2.977-2.325-.47 4.008zm7.248-1.683l3.457 1.683-.48-4.008-2.977 2.325z",
                fill: "#E4761B"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M29.355 32.61l-3.457-1.682.276 2.253-.03.948 3.211-1.519zm-10.707 0l3.212 1.52-.02-.949.255-2.253-3.447 1.682z",
                fill: "#D7C1B3"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M21.91 27.115l-2.875-.846 2.03-.928.845 1.774zm4.17 0l.846-1.774 2.04.928-2.886.846z",
                fill: "#233447"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18.647 32.61l.49-4.14-3.192.093 2.702 4.047zm10.216-4.14l.49 4.14 2.702-4.047-3.192-.092zm2.427-4.557l-5.73.255.53 2.947.847-1.774 2.04.927 2.314-2.355zm-12.256 2.355l2.039-.927.836 1.774.54-2.947-5.74-.255 2.325 2.355z",
                fill: "#CD6116"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M16.71 23.914l2.407 4.69-.081-2.335-2.325-2.355zm12.269 2.354l-.102 2.335 2.417-4.69-2.315 2.355zm-6.526-2.1l-.54 2.947.672 3.477.153-4.578-.285-1.846zm3.109 0l-.275 1.835.123 4.589.683-3.477-.53-2.947z",
                fill: "#E4751F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26.091 27.114l-.683 3.477.49.336 2.977-2.325.102-2.334-2.886.846zm-7.056-.846l.082 2.334 2.977 2.325.49-.336-.674-3.477-2.875-.846z",
                fill: "#F6851B"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M26.143 34.13l.03-.949-.255-.224h-3.844l-.234.224.02.949-3.212-1.52 1.122.918 2.274 1.58h3.905l2.284-1.58 1.122-.918-3.212 1.52z",
                fill: "#C0AD9E"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M25.898 30.928l-.49-.336h-2.824l-.49.336-.254 2.254.234-.225h3.844l.255.225-.275-2.254z",
                fill: "#161616"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M36.133 19.028l.867-4.16-1.295-3.864-9.808 7.28 3.772 3.191 5.333 1.56 1.182-1.376-.51-.367.816-.744-.632-.49.816-.622-.54-.408zM11 14.868l.867 4.16-.55.408.815.622-.622.49.816.744-.51.367 1.172 1.377 5.333-1.56 3.772-3.192-9.808-7.28L11 14.868z",
                fill: "#763D16"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M35.003 23.036l-5.333-1.56 1.621 2.437-2.416 4.69 3.181-.041h4.742l-1.795-5.526zm-16.681-1.56l-5.333 1.56-1.774 5.526h4.73l3.172.04-2.406-4.69 1.61-2.436zm7.238 2.693l.337-5.884 1.55-4.19h-6.883l1.53 4.19.357 5.884.122 1.855.01 4.568h2.825l.02-4.568.133-1.855z",
                fill: "#F6851B"
            })
        ]
    });
});
const MetaMask = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function MetaMask(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 40,
        height: 40,
        viewBox: "0 0 40 40",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M34.413 4.457l-12.492 9.278 2.31-5.474 10.182-3.804z",
                fill: "#E2761B",
                stroke: "#E2761B",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M5.575 4.457l12.391 9.366-2.197-5.562L5.575 4.457zm24.344 21.507l-3.327 5.097 7.118 1.959 2.047-6.943-5.838-.113zm-25.663.113L6.29 33.02l7.119-1.959-3.327-5.097-5.826.113z",
                fill: "#E4761B",
                stroke: "#E4761B",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M13.007 17.351l-1.984 3 7.069.315-.251-7.596-4.834 4.281zm13.973-.001l-4.896-4.369-.163 7.684 7.056-.314-1.997-3zM13.41 31.061l4.243-2.072-3.666-2.862-.578 4.934zm8.925-2.071l4.257 2.071-.59-4.934-3.667 2.863z",
                fill: "#E4761B",
                stroke: "#E4761B",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M26.591 31.06l-4.256-2.07.339 2.774-.038 1.168 3.955-1.871zm-13.182 0l3.954 1.872-.025-1.168.314-2.775-4.243 2.072z",
                fill: "#D7C1B3",
                stroke: "#D7C1B3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M17.426 24.294l-3.54-1.042 2.498-1.143 1.042 2.185zm5.135 0l1.042-2.185 2.511 1.143-3.553 1.042z",
                fill: "#233447",
                stroke: "#233447",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M13.409 31.061l.602-5.097-3.93.113 3.328 4.984zm12.579-5.097l.603 5.097 3.327-4.984-3.93-.113zm2.989-5.612l-7.056.314.653 3.628 1.042-2.184 2.51 1.142 2.85-2.9zm-15.091 2.9l2.51-1.142 1.03 2.184.665-3.628-7.068-.314 2.863 2.9z",
                fill: "#CD6116",
                stroke: "#CD6116",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11.023 20.352l2.963 5.775-.1-2.875-2.863-2.9zm15.104 2.9l-.125 2.875 2.975-5.775-2.85 2.9zm-8.035-2.586l-.666 3.628.829 4.282.188-5.637-.351-2.273zm3.829 0l-.339 2.26.15 5.65.842-4.282-.653-3.628z",
                fill: "#E4751F",
                stroke: "#E4751F",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M22.574 24.294l-.842 4.28.603.415 3.666-2.862.126-2.875-3.553 1.042zm-8.688-1.042l.1 2.875 3.666 2.862.603-.414-.829-4.281-3.54-1.043z",
                fill: "#F6851B",
                stroke: "#F6851B",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M22.637 32.931l.037-1.167-.314-.277h-4.733l-.289.277.025 1.167-3.954-1.87 1.38 1.13 2.8 1.945h4.809l2.812-1.946 1.381-1.13-3.954 1.871z",
                fill: "#C0AD9E",
                stroke: "#C0AD9E",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M22.335 28.99l-.602-.415h-3.478l-.603.415-.314 2.774.29-.276h4.732l.314.276-.339-2.774z",
                fill: "#161616",
                stroke: "#161616",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M34.94 14.338l1.068-5.123-1.595-4.758-12.078 8.964 4.646 3.93 6.566 1.92 1.456-1.694-.627-.452 1.004-.917-.778-.602 1.004-.766-.665-.502zM3.993 9.215l1.067 5.123-.678.502 1.004.766-.766.602 1.005.917-.628.452 1.444 1.695 6.566-1.921 4.645-3.93L5.575 4.457 3.993 9.215z",
                fill: "#763D16",
                stroke: "#763D16",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M33.547 19.271l-6.567-1.92 1.997 3L26 26.127l3.917-.05h5.838l-2.21-6.806zm-20.54-1.921l-6.566 1.921-2.185 6.805h5.826l3.904.05-2.963-5.775 1.984-3zm8.914 3.316l.414-7.245 1.909-5.16h-8.475l1.883 5.16.44 7.245.15 2.285.013 5.624h3.478l.025-5.624.163-2.285z",
                fill: "#F6851B",
                stroke: "#F6851B",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
})));
const OneInch = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function OneInch(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 40,
        height: 40,
        viewBox: "0 0 40 40",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M10.391 22.35l.969-7.293-8.413-5.841 7.686 2.603 1.816-2.785 6.628-4.115 14.616 8.05.757 12.286-6.506 9.049-5.145.786 2.663-4.872v-4.69l-1.937-3.662-1.967-1.302-3.026 3.117v3.3l-2.36 2.208-2.997.363-1.331.757-2.179-.696-.908-3.268 1.634-2.3V22.35z",
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M23.828 9.156c-1.604-.333-3.36-.242-3.36-.242s-.574 2.663-4.145 3.359c.03 0 4.72 1.604 7.505-3.117zm1.452 24.149c1.936-1.513 3.389-3.601 4.054-5.962.03-.09.303-.242.485-.363.302-.181.605-.333.665-.575.121-.696.182-1.422.182-2.148 0-.273-.272-.545-.545-.817-.212-.182-.423-.394-.423-.545-.303-2.754-1.574-5.326-3.602-7.203l-.212.212c1.968 1.846 3.239 4.358 3.511 7.021.03.242.272.484.514.726.212.182.454.454.454.575 0 .697-.06 1.393-.181 2.088-.03.122-.303.243-.515.364-.302.151-.575.302-.635.544a11.185 11.185 0 01-4.6 6.265c.393-.848 1.634-3.601 2.3-4.994l-.121-4.478-3.844-3.723-2.178.303-2.391 3.873s1.12 1.423-.454 3.087c-1.543 1.634-2.754 1.998-2.754 1.998l-1.12-.606c.333-.423.999-1.059 1.514-1.482.877-.727 1.755-.787 1.755-1.574.03-1.634-1.725-1.18-1.725-1.18l-.636.605-.272 2.24-1.332 1.664-.151-.03-2.179-.485s1.332-.696 1.543-1.482c.212-.757-.423-3.269-.454-3.42.03.03.636.544.908 1.392.485-1.332 1.12-2.603 1.302-2.724.181-.12 2.633-1.422 2.633-1.422l-.818 2.149.606-.333 1.452-3.571s1.423-.696 2.482-.696c1.906-.03 4.72-2.36 3.45-6.537.363.151 6.657 3.299 7.747 9.472.817 4.751-1.876 9.2-6.416 11.772z",
                fill: "#94A6C3"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M18.078 9.82c.696-.816.423-2.027.423-2.027l-2.027 2.996c-.03 0 .726.03 1.604-.968zm-6.81 16.374l.242-1.21s-.999 1.755-1.09 1.997c-.09.272.06.756.454.726.394-.03.878-.605.878-1.029 0-.545-.484-.484-.484-.484z",
                fill: "#1B314F"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M29.245 6.945s1.514.06 3.087.242c-3.54-2.784-6.9-3.6-9.623-3.6-3.753 0-6.295 1.543-6.446 1.633l1.18-1.876s-4.72-.454-6.385 4.54c-.424-1.06-.817-2.603-.817-2.603S7.789 7.43 8.939 11C6.125 9.97 2.1 8.549 1.95 8.518c-.212-.03-.273.06-.273.06s-.06.091.121.243c.333.272 6.688 4.963 8.08 5.87-.302 1.09-.302 1.605 0 2.119.424.696.454 1.06.394 1.573-.06.515-.605 4.963-.726 5.508-.121.545-1.392 2.482-1.332 3.057.06.575.847 3.026 1.543 3.298.515.182 1.786.576 2.633.576.303 0 .575-.061.696-.182.515-.454.666-.545 1.03-.545h.09c.151 0 .333.03.545.03.484 0 1.12-.09 1.573-.514.666-.666 1.816-1.574 2.18-1.997a2.816 2.816 0 00.574-2.149c-.09-.726.303-1.362.757-1.997.575-.757 1.634-2.119 1.634-2.119 2.088 1.574 3.39 3.965 3.39 6.628 0 4.72-4.116 8.534-9.2 8.534a9.733 9.733 0 01-2.3-.273c2.33.818 4.297 1.09 5.9 1.09 3.42 0 5.236-1.24 5.236-1.24s-.635.816-1.664 1.754h.03c5.66-.787 8.413-5.447 8.413-5.447s-.212 1.513-.484 2.542c7.535-5.659 6.264-12.74 6.234-12.982.06.09.817.998 1.21 1.482 1.211-12.468-8.987-16.493-8.987-16.493zm-11.59 19.913c-.121.151-.636.605-.999.938-.363.333-.756.666-1.059.969-.12.12-.363.181-.726.181h-.908c.454-.605 1.785-1.997 2.24-2.3.544-.363.816-.726.483-1.362-.332-.635-1.21-.484-1.21-.484s.514-.212.968-.212c-.574-.151-1.3 0-1.634.333-.363.333-.302 1.513-.454 2.27-.151.787-.665 1.18-1.452 1.906-.424.394-.727.515-.969.515-.514-.09-1.12-.242-1.543-.393-.303-.394-.757-1.695-.878-2.24.091-.303.454-.938.636-1.301.363-.696.575-1.09.635-1.453.121-.514.515-3.692.666-5.023.394.514.938 1.361.817 1.906.878-1.24.242-2.451-.06-2.935-.273-.484-.636-1.453-.333-2.482.302-1.029 1.392-3.873 1.392-3.873s.363.635.878.514c.514-.12 4.66-6.355 4.66-6.355s1.12 2.451-.06 4.237c-1.211 1.785-2.391 2.118-2.391 2.118s1.664.303 3.207-.817c.636 1.483 1.241 3.026 1.271 3.238-.09.212-1.3 3.117-1.422 3.299-.06.06-.484.181-.787.242-.514.151-.817.242-.938.333-.212.181-1.18 2.844-1.634 4.146-.545.151-1.09.454-1.483 1.059.212-.152.878-.242 1.362-.303.424-.03 1.725.666 2.058 1.967v.06c.06.485-.09.939-.333 1.302zm-2.845.363c.273-.393.242-1.059.273-1.27.03-.213.09-.606.333-.667.242-.06.817.03.817.454 0 .394-.424.485-.727.757-.212.212-.635.666-.696.726zm12.075-5.78c.303-1.543.333-2.875.242-3.964 1.18 1.573 1.907 3.48 2.119 5.447.03.242.272.484.514.726.212.182.454.424.454.575 0 .696-.06 1.392-.182 2.088-.03.091-.302.242-.514.363-.303.152-.575.303-.636.545a11.268 11.268 0 01-3.994 5.84c2.814-2.935 4.176-7.776 1.997-11.62zm-1.907 11.893c1.968-1.513 3.48-3.631 4.146-6.022.03-.09.303-.242.485-.363.302-.152.605-.333.665-.575a12.61 12.61 0 00.182-2.149c0-.272-.272-.545-.545-.817-.151-.181-.393-.393-.393-.545a11.823 11.823 0 00-2.482-6.022c-.605-3.631-3.026-4.751-3.087-4.781.061.09 1.635 2.36.545 5.023-1.12 2.694-3.994 2.27-4.236 2.3-.243 0-1.18 1.21-2.36 3.45-.152-.06-.788-.212-1.514-.09.545-1.514 1.362-3.662 1.513-3.844.06-.06.515-.181.817-.272.575-.152.848-.242.938-.363.06-.091.363-.787.666-1.514.272 0 .968-.06 1.029-.09.06-.06.636-1.544.636-1.725 0-.152-1.18-3.087-1.635-4.207.212-.242.424-.545.636-.877 6.204.665 11.046 5.931 11.046 12.316 0 4.903-2.875 9.17-7.052 11.167z",
                fill: "#1B314F"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M16.928 16.992c.575-.666.273-1.906-.786-2.118.272-.636.665-1.907.665-1.907s-3.086 4.842-3.359 4.933c-.272.09-.545-.968-.545-.968-.575 2.209.969 2.512 1.15 1.815.848-.211 2.3-1.12 2.875-1.755z",
                fill: "#1B314F"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M14.296 18.174l1.574-2.694s.908.454.454 1.18c-.576.848-2.028 1.514-2.028 1.514z",
                fill: "#FFD923"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M33.755 30.642a17.06 17.06 0 01-1.573 1.846c3.904-7.505.181-14.375.03-14.647.272.272.545.575.787.848 2.996 3.328 3.359 8.322.756 11.953zm3.632-9.655c-1.362-3.662-3.299-6.779-7.566-9.593-4.115-2.724-8.534-2.512-8.776-2.482h-.06c.151-.06.302-.09.454-.12.938-.303 2.148-.545 3.359-.697 3.208-.454 6.446.636 8.655 2.966l.06.06c2.512 2.664 3.813 5.992 3.874 9.866zM28.85 6.006c-4.509-.847-7.414-.423-9.502.364-.06-.243-.272-.727-.454-1.12-.636.756-1.301 1.664-1.725 2.24-1.15.786-1.634 1.543-1.634 1.543.666-2.27 2.602-3.965 4.963-4.388a12.202 12.202 0 012.179-.182c2.088.03 4.176.545 6.173 1.543zm-16.672 5.812c-3.541-.121-2.361-4.237-2.3-4.479 0 .03.242 3.238 2.3 4.48zm3.479-7.414c-2.723 1.635-2.179 5.538-2.179 5.538-2.602-3.964 1.967-5.447 2.18-5.538z",
                fill: "#D82122"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11.181 12.908c.182.151.363.423.151.817-.12.212-.302.181-.575.06-.363-.181-2.542-1.452-4.509-2.754 2.24.787 4.51 1.635 4.872 1.816l.061.06z",
                fill: "#fff"
            })
        ]
    });
})));
const OperaWallet = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function OperaWallet(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",
                fill: "#F2F5FF"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M19.326 32.001c-1.57-1.853-2.587-4.593-2.657-7.668v-.669c.07-3.074 1.086-5.814 2.657-7.668 2.036-2.645 5.065-4.322 8.446-4.322 2.08 0 4.026.635 5.69 1.74a14.143 14.143 0 00-9.41-3.614L24 9.799c-7.843 0-14.2 6.358-14.2 14.2 0 7.615 5.995 13.83 13.523 14.183a14.149 14.149 0 0010.14-3.597c-1.664 1.104-3.61 1.74-5.69 1.74-3.382 0-6.41-1.678-8.447-4.323z",
                fill: "url(#prefix__prefix__paint0_linear_12052_1639)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M19.325 15.997c1.303-1.538 2.987-2.466 4.826-2.466 4.133 0 7.484 4.687 7.484 10.468s-3.35 10.468-7.485 10.468c-1.838 0-3.522-.928-4.824-2.465 2.037 2.645 5.065 4.322 8.447 4.322 2.08 0 4.027-.634 5.69-1.738A14.165 14.165 0 0038.2 24c0-4.206-1.83-7.985-4.735-10.585-1.666-1.105-3.612-1.74-5.693-1.74-3.381 0-6.41 1.678-8.447 4.323z",
                fill: "url(#prefix__prefix__paint1_linear_12052_1639)"
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint0_linear_12052_1639",
                        x1: 21.632,
                        y1: 10.262,
                        x2: 21.632,
                        y2: 37.785,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0.3,
                                stopColor: "#FF1B2D"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0.438,
                                stopColor: "#FA1A2C"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0.594,
                                stopColor: "#ED1528"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0.758,
                                stopColor: "#D60E21"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0.927,
                                stopColor: "#B70519"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#A70014"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint1_linear_12052_1639",
                        x1: 28.762,
                        y1: 11.884,
                        x2: 28.762,
                        y2: 36.227,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#9C0000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0.7,
                                stopColor: "#FF4B4B"
                            })
                        ]
                    })
                ]
            })
        ]
    });
})));
const Plus = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Plus(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 5a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5V6a1 1 0 011-1z"
        })
    });
})));
const Question = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Question(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M12.188 9.109a1.455 1.455 0 00-1.618.95.727.727 0 01-1.372-.482 2.91 2.91 0 015.653.97c0 1.112-.826 1.847-1.415 2.24a5.64 5.64 0 01-1.262.63.735.735 0 01-.922-.46.727.727 0 01.46-.92c.322-.113.633-.271.917-.46.502-.335.767-.69.767-1.032a1.454 1.454 0 00-1.208-1.436zM12 15.636a.727.727 0 100-1.454.727.727 0 000 1.454z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-6.545a6.545 6.545 0 100 13.09 6.545 6.545 0 000-13.09z"
            })
        ]
    });
})));
const Referral = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Referral(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.92 15.48A4 4 0 0118 14a4 4 0 11-4 4c.004-.239.027-.476.07-.71l-5.28-2.43a4 4 0 110-5.72l5.28-2.43a4 4 0 11.85 1.81l-5.1 2.35a3.64 3.64 0 010 2.26l5.1 2.35zM20 6a2 2 0 10-4 0 2 2 0 004 0zM6 14a2 2 0 110-4 2 2 0 010 4zm10 4a2 2 0 104 0 2 2 0 00-4 0z"
        })
    });
})));
const PlaceholderImage = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function PlaceholderImage(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: "145",
        height: "145",
        viewBox: "0 0 145 145",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("rect", {
            width: "145",
            height: "145",
            fill: "#515151"
        })
    });
})));
const Refresh = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Refresh(props, svgRef) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 30 30",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            fill: "none",
            stroke: "#191919",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M15 29c7.732 0 14-6.268 14-14S22.732 1 15 1 1 7.268 1 15s6.268 14 14 14z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M21.68 17.1a7.003 7.003 0 01-13.36 0v4.2M21.68 8.7v4.2a7.003 7.003 0 00-13.36 0"
                })
            ]
        })
    });
});
const Solana = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Solana(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M17.129 9.033a.442.442 0 01-.314.132H5.695c-.393 0-.592-.48-.318-.764l1.824-1.89a.441.441 0 01.318-.136H18.68c.396 0 .594.485.314.768l-1.865 1.89zm0 8.44a.447.447 0 01-.314.129H5.695a.438.438 0 01-.318-.745l1.824-1.843a.447.447 0 01.318-.132H18.68c.396 0 .594.472.314.748l-1.865 1.843zm0-6.716a.447.447 0 00-.314-.128H5.695a.438.438 0 00-.318.745l1.824 1.842a.446.446 0 00.318.132H18.68a.438.438 0 00.314-.748l-1.865-1.843z",
                fill: "url(#prefix__prefix__solana-icon-gradient)"
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsxs("linearGradient", {
                    id: "prefix__prefix__solana-icon-gradient",
                    x1: 6.263,
                    y1: 17.906,
                    x2: 18.092,
                    y2: 6.077,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ _jsx("stop", {
                            stopColor: "#CF41E8"
                        }),
                        /*#__PURE__*/ _jsx("stop", {
                            offset: 1,
                            stopColor: "#10F2B0"
                        })
                    ]
                })
            })
        ]
    });
})));
const Stake = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Stake(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.988 9.05a1 1 0 01.89.55 1 1 0 01-.08 1.04l-8 11a1 1 0 01-1.81-.59v-6h-5a1 1 0 01-.89-.64 1 1 0 01.08-1l8-11a1 1 0 011.12-.36 1 1 0 01.69 1v6h5zm-7 5v3.92l5-6.92h-4a1 1 0 01-1-1V6.13l-5 6.92h4a1 1 0 011 1z"
        })
    });
})));
const Steth = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Steth(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M7.078 11.148l-.135.206a5.788 5.788 0 00.814 7.32 6.043 6.043 0 004.24 1.72l-4.92-9.246z",
                fill: "#00A3FF"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M11.997 13.958l-4.92-2.81 4.92 9.246v-6.436zm4.925-2.81l.134.206a5.788 5.788 0 01-.813 7.32 6.043 6.043 0 01-4.24 1.72l4.92-9.246z",
                fill: "#00A3FF"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.2,
                d: "M12.002 13.958l4.92-2.81-4.92 9.246v-6.436zm.001-6.278v4.847l4.238-2.422-4.238-2.425z",
                fill: "#00A3FF"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M12.003 7.68l-4.24 2.425 4.24 2.422V7.68z",
                fill: "#00A3FF"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12.003 3.604l-4.24 6.502 4.24-2.431V3.604z",
                fill: "#00A3FF"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M12.003 7.674l4.241 2.432-4.24-6.506v4.074z",
                fill: "#00A3FF"
            })
        ]
    });
})));
const Stsol = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Stsol(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                width: 24,
                height: 24,
                rx: 12
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M17.129 9.032a.442.442 0 01-.314.132H5.695c-.393 0-.592-.48-.318-.764l1.824-1.89a.441.441 0 01.318-.135H18.68c.396 0 .594.484.314.768l-1.865 1.89zm0 8.44a.447.447 0 01-.314.129H5.695a.438.438 0 01-.318-.745l1.824-1.843a.449.449 0 01.318-.131H18.68c.396 0 .594.472.314.748l-1.865 1.843zm0-6.715a.447.447 0 00-.314-.129H5.695a.438.438 0 00-.318.745l1.824 1.843a.446.446 0 00.318.132H18.68a.438.438 0 00.314-.749l-1.865-1.842z",
                fill: "url(#prefix__prefix__paint0_linear)"
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsxs("linearGradient", {
                    id: "prefix__prefix__paint0_linear",
                    x1: 6.263,
                    y1: 17.905,
                    x2: 18.092,
                    y2: 6.077,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ _jsx("stop", {
                            stopColor: "#CF41E8"
                        }),
                        /*#__PURE__*/ _jsx("stop", {
                            offset: 1,
                            stopColor: "#10F2B0"
                        })
                    ]
                })
            })
        ]
    });
})));
const Success = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Success(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 60,
        height: 60,
        viewBox: "0 0 60 60",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M30 58c15.464 0 28-12.536 28-28S45.464 2 30 2 2 14.536 2 30s12.536 28 28 28zm0 2c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M38.707 24.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L27 34.586l10.293-10.293a1 1 0 011.414 0z"
            })
        ]
    });
})));
const TallyCircle = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function TallyCircle(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 300 300",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: 150,
                cy: 150,
                r: 150,
                fill: "#D08E39"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M241.377 139.857a11.625 11.625 0 014.096 6.987 8.049 8.049 0 01-.03 2.469 14.972 14.972 0 01-.211 1.716 24.985 24.985 0 01-.723 3.313 22.76 22.76 0 01-3.011 6.264c-.25.362-.567.776-.786 1.061l-.178.234v.15l.012.091c.034.243.097.695.229 1.355.363 2.188.474 4.411.331 6.625a38.065 38.065 0 01-3.011 12.498 27.827 27.827 0 01-7.71 10.69l-.391.362-.542.18a89.167 89.167 0 01-12.919 3.765 53.88 53.88 0 01-13.733 1.325h-.783a137.188 137.188 0 00-29.482-6.023 58.416 58.416 0 01-8.101-1.175 66.15 66.15 0 01-7.709-2.469 94.077 94.077 0 00-12.317-3.554 13.976 13.976 0 00-2.56 9.456 38.841 38.841 0 004.487 13.673 73.842 73.842 0 017.198 14.665 36.837 36.837 0 011.325 17.075l-.813 5.21-4.397-3.011c-.529-.453-1.521-1.054-2.466-1.626l-.546-.332-3.011-1.656a66.766 66.766 0 012.108 12.046 68.703 68.703 0 01-.211 10.57A36.665 36.665 0 01143.233 272c-12.484-18.97-22.673-24.404-31.598-29.164-5.994-3.197-11.419-6.09-16.585-12.575-7.65-10.871-9.576-23.369 1.084-47.009 2.952-7.305 4.773-15.317 6.262-21.869 1.262-5.548 2.285-10.05 3.555-12.191v.181a44.007 44.007 0 000 15.057 16.833 16.833 0 002.56 6.565 12.345 12.345 0 005.331 4.006 45.936 45.936 0 0014.214 3.011c2.469.392 4.969.392 7.528.392a36.907 36.907 0 013.976.15c1.355.121 2.68.301 4.005.482a97.653 97.653 0 0115.479 3.825 43.497 43.497 0 0014.244 2.86 134.854 134.854 0 0130.476 6.023 53.58 53.58 0 0011.654-.903c1.386-.241 2.771-.572 4.156-.903 6.806-1.988 14.455-13.552 5.601-12.588a48.534 48.534 0 00-7.317.903c-1.382.327-2.75.845-4.2 1.394-1.489.563-3.065 1.16-4.835 1.618a20.458 20.458 0 01-10.118-.271 29.813 29.813 0 00-9.035-2.109 11.431 11.431 0 014.728-1.445c1.218-.122 2.298-.08 3.334-.039.502.02.993.039 1.485.039 2.809.386 5.665.264 8.432-.361 1.421-.402 2.86-1.174 4.406-2.004 1.239-.664 2.546-1.365 3.966-1.941a27.32 27.32 0 019.907-2.108h-.06a21.41 21.41 0 013.704 0 12.047 12.047 0 003.012-9.426 6.51 6.51 0 00-3.674-2.681 96.928 96.928 0 00-2.256-.453c-4.47-.867-11.786-2.285-14.729-5.027-2.018-1.958-3.102-7.83 4.005-9.456a40.882 40.882 0 0111.414-.362l.145.014c1.705.162 5.937.563 6.932-.285a28.034 28.034 0 01-1.339-.964c-.214-.16-.428-.321-.649-.481l-9.335-7.107c-.644-.453-1.269-.911-1.882-1.36-.937-.686-1.846-1.353-2.756-1.953a8.878 8.878 0 00-.964-.602 6.721 6.721 0 00-1.024-.452 28.817 28.817 0 01-3.011-1.355 38.102 38.102 0 01-9.818-7.258 122.687 122.687 0 01-21.531-29.904 20.72 20.72 0 00-10.812-9.787 17.796 17.796 0 0113.281 4.818c.603.5 1.372 1.876 2.357 3.637 2.751 4.92 7.188 12.857 14.417 13.167 1.246-.1 2.473-.374 3.644-.813-3.589-3.397-6.019-7.489-8.293-11.319-3.45-5.81-6.544-11.02-12.788-12.29a41.735 41.735 0 01-4.577-1.958l-4.216-2.078-8.432-4.126a151.67 151.67 0 00-17.166-6.956 87.085 87.085 0 00-17.858-3.855c-1.438-.19-2.886-.3-4.336-.331a7.56 7.56 0 00-3.373.783c-.61.261-1.297.628-2.004 1.005-.759.405-1.54.821-2.272 1.133a74.472 74.472 0 00-4.186 1.927 83.56 83.56 0 00-15.449 9.697 40.415 40.415 0 00-9.336 9.185 34.239 34.239 0 0113.341 1.747 50.683 50.683 0 00-16.02 2.289 55.079 55.079 0 00-7.439 2.74 50.797 50.797 0 00-6.957 3.644 30.356 30.356 0 00-6.022 4.547 7.712 7.712 0 00-1.687 2.59c-.511 1.143-.962 2.376-1.414 3.61l-.001.004a116.078 116.078 0 00-4.186 15.479 125.278 125.278 0 00-2.41 31.891 61.923 61.923 0 006.596 24.755 466.502 466.502 0 0010.81-14.847 231.943 231.943 0 0012.499-20.087c1.984-3.559 3.746-7.283 5.527-11.047 1.624-3.433 3.264-6.899 5.103-10.304a65.456 65.456 0 016.535-10.42 24.806 24.806 0 014.397-4.487 10.115 10.115 0 015.782-2.318c-6.746 6.053-11.986 22.315-17.226 40.534-4.216 14.786-18.55 48.485-27.585 49.328-3.493.18-4.788-1.476-7.167-4.909l-1.988-2.71a53.969 53.969 0 01-7.83-15.901 79.662 79.662 0 01-3.011-17.105c-.277-5.694-.146-11.4.391-17.075a141.56 141.56 0 013.012-16.714 121.47 121.47 0 014.909-16.262c.542-1.355 1.084-2.68 1.746-4.035a19.01 19.01 0 011.235-2.168 19.424 19.424 0 011.717-2.018 31.528 31.528 0 017.348-5.21 50.018 50.018 0 0112.527-4.547 29.876 29.876 0 015.541-8.342 60.713 60.713 0 017.469-6.595 90.572 90.572 0 0116.502-10.36c.929-.464 2.06-.968 3.059-1.414.491-.22.951-.424 1.338-.603.52-.24 1.075-.527 1.676-.837a52.885 52.885 0 012.51-1.24A13.946 13.946 0 01127.122 54c1.574 0 2.733.12 3.923.245.381.04.765.08 1.167.116a93.357 93.357 0 0119.032 4.126 154.816 154.816 0 0117.858 7.258l8.583 4.155 4.246 2.109c1.037.56 2.36 1.068 3.801 1.621l.325.125a46.255 46.255 0 014.577 2.018 20.21 20.21 0 012.439 1.476 23.61 23.61 0 012.108 1.927 43.917 43.917 0 016.023 8.221l.647 1.127c2.938 5.124 5.687 9.92 9.954 12.726l3.011 1.987a2.943 2.943 0 01-.181.482l-.632 1.145-3.012 1.535a2.44 2.44 0 00-1.295 1.386 2.683 2.683 0 00-.18.903v1.928a10.567 10.567 0 01-.392 3.011c-.125.388-.276.734-.41 1.041-.188.432-.343.785-.343 1.067-.095.314-.095.65 0 .964a32.093 32.093 0 008.192 6.023l2.409 1.114c.567.204 1.121.445 1.656.723l1.536.933c1.347.855 2.451 1.695 3.549 2.531.449.341.897.682 1.36 1.023l9.365 7.137 2.229 1.656c.944.616 1.849 1.29 2.71 2.018zm-73.993-27.796c.301 3.734-4.156 6.655-9.606 7.258-6.867.692-10.541-3.283-9.577-7.89 1.807-7.71-2.168-5.09-4.818-2.078a.364.364 0 01-.449.152.36.36 0 01-.214-.423c1.114-7.951 5.782-8.282 7.86-8.282a94.985 94.985 0 0118.611 3.162.908.908 0 01.688.683.9.9 0 01-.327.913 6.782 6.782 0 00-2.168 6.505z",
                fill: "#002522"
            })
        ]
    });
})));
const Telegram = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Telegram(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.066 18.333c-.518 0-.43-.195-.609-.69l-1.524-5.016 11.733-6.96",
                fill: "#C8DAEA"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.067 18.334c.4 0 .577-.183.8-.4L12 15.858l-2.66-1.605",
                fill: "#A9C9DD"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.339 14.255l6.448 4.763c.735.406 1.266.196 1.45-.683L19.86 5.967c.27-1.077-.41-1.566-1.114-1.246L3.335 10.663c-1.052.422-1.046 1.01-.192 1.27l3.955 1.235 9.157-5.776c.432-.263.829-.122.503.167",
                fill: "url(#prefix__prefix__telegram-icon-gradient)"
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsxs("linearGradient", {
                    id: "prefix__prefix__telegram-icon-gradient",
                    x1: 9.997,
                    y1: 11.983,
                    x2: 11.707,
                    y2: 17.513,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ _jsx("stop", {
                            stopColor: "#EFF7FC"
                        }),
                        /*#__PURE__*/ _jsx("stop", {
                            offset: 1,
                            stopColor: "#fff"
                        })
                    ]
                })
            })
        ]
    });
})));
const Terra = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Terra(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#prefix__prefix__clip0)",
                fillRule: "evenodd",
                clipRule: "evenodd",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M8.067 7.792c-1.636-.38-3.215-1.717-3.449-4.285a15.67 15.67 0 00-.101-.87A11.897 11.897 0 0112 0c3.434 0 6.531 1.453 8.719 3.782-1.14.45-11.11 4.37-12.652 4.01zm9.879 13.6c3.427-2.025 4.01-3.757 4.67-6.541.659-2.784-7.708-1.24-9.96-.28-2.253.96-3.505 3.75-1.211 6.391 2.294 2.642 3.075 2.454 6.501.43z",
                        fill: "#2642B4"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M22.497 17.943c-2.27.476-4.992 2-6.202 3.044-1.171 1.01-.752 2.016.805 2.039a12.084 12.084 0 005.397-5.083zM20.061 3.132c-2.5-1.315-3.79-.942-9.322 1.122-6.943 2.59-4.035 8.105 1.26 9.943.512.178 1.01.353 1.494.524 4.244 1.494 7.469 2.629 9.695 1.74.524-1.357.812-2.833.812-4.377 0-3.55-1.52-6.741-3.939-8.952zM1.269 6.669c1.965-.063 5.788-1.184 7.275-3.33 1.43-2.067.122-2.367-1.803-2.12a12.092 12.092 0 00-5.472 5.45zm-.562 1.32A12.139 12.139 0 000 12.085a12.09 12.09 0 007.296 11.12c.096-1.356.162-2.967.096-4.419C7.274 16.22 3.622 11.151.707 7.99z",
                        fill: "#4393FF"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsx("clipPath", {
                    id: "prefix__prefix__clip0",
                    children: /*#__PURE__*/ _jsx("path", {
                        fill: "#fff",
                        d: "M0 0h24v24H0z"
                    })
                })
            })
        ]
    });
})));
const TrustCircle = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function TrustCircle(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",
                fill: "#3375BB"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.18 12.35a1.446 1.446 0 011.871 0c2.918 2.475 6.243 2.457 7.566 2.45h.18a1.446 1.446 0 011.447 1.467c-.063 4.243-.23 7.286-.562 9.525-.332 2.236-.844 3.811-1.697 5.014-.861 1.216-1.967 1.9-3.092 2.532l-.6.332c-.98.54-2.05 1.13-3.326 2.06-.507.37-1.195.37-1.703 0-1.274-.93-2.343-1.519-3.322-2.058a84.964 84.964 0 01-.602-.334c-1.124-.632-2.229-1.317-3.088-2.533-.85-1.203-1.362-2.778-1.692-5.014-.33-2.238-.497-5.281-.56-9.524a1.446 1.446 0 011.446-1.468l.179.001c1.312.007 4.637.025 7.555-2.45zm-6.261 5.32c.077 3.446.237 5.9.502 7.7.302 2.043.72 3.1 1.192 3.766.462.654 1.07 1.077 2.144 1.68.173.098.356.199.55.305.784.432 1.731.954 2.809 1.676 1.08-.723 2.028-1.245 2.813-1.677.193-.106.376-.207.549-.304 1.074-.603 1.684-1.027 2.147-1.681.473-.667.893-1.724 1.196-3.767.266-1.798.427-4.252.504-7.697-1.738-.092-4.533-.517-7.21-2.393-2.671 1.873-5.462 2.3-7.196 2.392z",
                fill: "#fff"
            })
        ]
    });
})));
const Trust = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Trust(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 40,
        height: 40,
        viewBox: "0 0 40 40",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M.89 8.827C0 11.173 0 14.115 0 20s0 8.827.89 11.173a13.682 13.682 0 007.937 7.937C11.173 40 14.115 40 20 40s8.827 0 11.173-.89a13.682 13.682 0 007.937-7.937C40 28.827 40 25.885 40 20s0-8.827-.89-11.173A13.682 13.682 0 0031.173.89C28.827 0 25.885 0 20 0S11.173 0 8.827.89A13.682 13.682 0 00.89 8.827zm18.242 23.745c.29.142.579.285.868.285.29 0 .579 0 .723-.143 1.302-.856 2.315-1.426 3.328-1.997 5.497-2.996 7.088-4.565 7.378-19.259 0-.428-.145-.713-.434-.998-.29-.286-.58-.428-1.013-.428h-.29c-1.446 0-5.352 0-8.824-2.568-.434-.428-1.157-.428-1.736 0-3.472 2.568-7.378 2.568-8.825 2.568h-.289c-.29 0-.723.142-1.013.285-.289.285-.434.57-.434.999.145 14.693 1.736 16.263 7.234 19.259.22.123.446.247.678.374.837.457 1.743.953 2.649 1.623zm-1.921-4.304c-4.163-2.406-5.458-3.154-5.746-15.383 2.025-.143 5.642-.57 8.535-2.568 3.183 2.14 6.22 2.425 8.246 2.568-.29 12.268-1.447 12.982-5.787 15.407a52.1 52.1 0 00-.868.53c-.521.323-1.1.681-1.736 1.04a46.074 46.074 0 00-2.049-1.245l-.555-.325-.04-.024z",
            fill: "#4276B6"
        })
    });
})));
const Twitter = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Twitter(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.05 9.192l.032.52-.524-.064c-1.91-.244-3.578-1.07-4.995-2.458l-.692-.688-.179.508c-.377 1.134-.136 2.33.651 3.136.42.444.325.508-.399.243-.252-.085-.472-.148-.493-.116-.073.074.179 1.038.378 1.419.273.53.829 1.049 1.437 1.356l.514.243-.608.011c-.588 0-.609.01-.546.233.21.689 1.039 1.42 1.962 1.737l.65.223-.566.339a5.906 5.906 0 01-2.812.784c-.472.01-.86.053-.86.084 0 .106 1.28.7 2.025.932 2.235.689 4.89.392 6.883-.783 1.416-.837 2.833-2.5 3.494-4.11.357-.858.713-2.426.713-3.178 0-.487.032-.55.62-1.133.346-.34.67-.71.734-.816.105-.201.094-.201-.44-.021-.893.317-1.019.275-.578-.202.325-.338.713-.953.713-1.133 0-.032-.157.021-.335.117-.19.106-.609.264-.924.36l-.566.18-.514-.35c-.284-.19-.682-.402-.892-.466-.535-.148-1.354-.127-1.836.043-1.312.476-2.14 1.705-2.046 3.05z"
        })
    });
})));
const Uniswap = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Uniswap(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 40,
        height: 40,
        viewBox: "0 0 40 40",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#prefix__prefix__prefix__clip0)",
                fill: "#FF007A",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M18.77 19.01c.84 1.485-1.037 1.945-1.918 2.03-1.336.13-1.612-.642-1.351-1.613a1.746 1.746 0 011.501-1.317 1.857 1.857 0 011.769.9zm5.24-2.742c-.975 7.498 12.18 5.938 11.93 11.905 1.297-1.694 1.855-6.299-1.965-8.668-3.404-2.113-7.839-.957-9.964-3.237zm7.58-2.831c-.086-.08-.174-.158-.26-.236.087.08.174.163.26.236zm3.058 5.468l-.008-.012a4.992 4.992 0 00-.405-.635 3.263 3.263 0 00-1.803-1.225 7.676 7.676 0 00-1.468-.232c-.503-.036-1.015-.057-1.533-.085-1.038-.057-2.1-.164-3.139-.461a8.726 8.726 0 01-1.537-.59 6.57 6.57 0 01-1.346-.98c-.8-.748-1.427-1.595-2.057-2.416a28.52 28.52 0 00-1.907-2.373 8.7 8.7 0 00-2.336-1.832 8.045 8.045 0 00-2.908-.835 6.848 6.848 0 013.107.381 8.213 8.213 0 012.695 1.72c.508.478.984.989 1.427 1.528 3.296-.651 5.97-.073 8.023 1.051l.047.023a10.118 10.118 0 012.087 1.511c.437.404.844.84 1.218 1.304l.029.037c1.213 1.544 1.812 3.149 1.813 4.121zm-.002 0l-.007-.016.007.016zM14.368 8.192c.84.123 1.698.46 2.251 1.1.553.642.757 1.476.916 2.27.13.615.233 1.242.474 1.825.117.284.288.533.43.802.119.223.334.423.417.662a.213.213 0 01-.024.21c-.294.327-1.085-.036-1.384-.182a4.503 4.503 0 01-1.36-1.042c-1.198-1.336-1.817-3.26-1.78-5.01.009-.212.028-.424.06-.635z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M28.43 23.262c-1.816 5.093 6.424 8.51 3.337 13.687 3.167-1.314 4.671-5.283 3.357-8.432-1.15-2.765-4.55-3.773-6.693-5.255zM17.533 29.92a7.176 7.176 0 011.61-.919 9.364 9.364 0 011.8-.521c1.22-.233 2.428-.29 3.443-.701a4.41 4.41 0 001.361-.848c.386-.36.681-.806.862-1.303.185-.524.26-1.081.22-1.636a6.017 6.017 0 00-.398-1.738 3.99 3.99 0 011.016 3.618 3.773 3.773 0 01-.99 1.792 4.592 4.592 0 01-1.708 1.069 7.168 7.168 0 01-1.896.39c-.622.053-1.225.067-1.816.103a11.66 11.66 0 00-3.504.694zm11.623 8.954c-.183.146-.366.3-.567.436a4.842 4.842 0 01-.635.355 3.288 3.288 0 01-1.471.335c-1.38-.026-2.357-1.059-2.928-2.225-.389-.795-.657-1.654-1.12-2.412-.66-1.083-1.79-1.955-3.114-1.794-.54.068-1.045.312-1.345.783-.79 1.229.344 2.95 1.788 2.707.123-.019.243-.052.358-.099.115-.049.222-.114.318-.194a1.45 1.45 0 00.44-.639 1.5 1.5 0 00.06-.812 1.116 1.116 0 00-.464-.695c.278.13.494.364.604.652.113.296.143.618.084.93a1.85 1.85 0 01-.413.878c-.113.129-.244.24-.389.332a2.269 2.269 0 01-1.473.323 2.694 2.694 0 01-1.31-.57c-.447-.355-.779-.819-1.182-1.218a5.617 5.617 0 00-1.612-1.182 5.985 5.985 0 00-1.297-.404 8.488 8.488 0 00-.68-.11c-.103-.01-.612-.123-.683-.057a14.232 14.232 0 012.284-1.72c.838-.5 1.739-.888 2.678-1.152a7.61 7.61 0 012.996-.23 5.818 5.818 0 011.505.39c.506.203.972.493 1.378.856a4.3 4.3 0 01.958 1.341c.208.473.363.967.462 1.474.296 1.516.187 3.867 2.163 4.213.103.02.207.035.312.045l.323.008c.222-.016.442-.048.66-.096a7.01 7.01 0 001.312-.45zm-11.485-1.656l-.052-.04.052.04zm-1.772-21.392a2.194 2.194 0 01-.37.768 3 3 0 01-1.23.945 4.744 4.744 0 01-1.371.362c-.103.013-.21.02-.312.029a1.398 1.398 0 00-1.301 1.043 3.557 3.557 0 00-.08.439c-.046.383-.054.782-.096 1.264a7.512 7.512 0 01-.7 2.362c-.469.993-.996 1.794-.874 2.938.08.743.46 1.241.963 1.755.909.933 2.942 1.35 2.488 3.65-.274 1.372-2.54 2.813-5.724 3.316.317-.049-.406-1.273-.452-1.35-.34-.538-.715-1.044-.986-1.626-.532-1.13-.778-2.438-.56-3.676.23-1.304 1.19-2.302 1.988-3.298.95-1.185 1.946-2.737 2.167-4.276.051-.372.088-.839.17-1.303.08-.514.24-1.012.476-1.476a3 3 0 01.625-.809.81.81 0 00.156-.985L5.8 6.726l7.29 9.038a.91.91 0 001.08.266.908.908 0 00.317-.236.62.62 0 00.02-.782c-.477-.61-.98-1.234-1.468-1.847l-1.835-2.28L7.522 6.33 2.5 0l5.494 5.922 3.92 4.353 1.956 2.182c.648.734 1.297 1.445 1.946 2.216l.106.13.024.203a2.4 2.4 0 01-.047.82z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M17.578 37.157a4.89 4.89 0 01-.931-.953c.285.342.596.66.931.953z"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsx("clipPath", {
                    id: "prefix__prefix__prefix__clip0",
                    children: /*#__PURE__*/ _jsx("path", {
                        fill: "#fff",
                        d: "M0 0h40v40H0z"
                    })
                })
            })
        ]
    });
})));
const Unstoppabledomains = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Unstoppabledomains(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",
                fill: "#4C47F7"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M38.897 10.964v10.242L9.104 33.309l29.793-22.344z",
                fill: "#2FE9FF"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M33.31 10.499v17.69a9.31 9.31 0 01-18.62 0V20.74l5.586-3.072v10.52a3.259 3.259 0 006.517 0V14.084L33.31 10.5z",
                fill: "#fff"
            })
        ]
    });
})));
const Validators = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Validators(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 18h-6.18A3 3 0 0013 16.18V13h7a1 1 0 100-2h-1V5a3 3 0 00-3-3H8a3 3 0 00-3 3v6H4a1 1 0 100 2h7v3.18A3 3 0 009.18 18H3a1 1 0 100 2h6.18a3 3 0 005.64 0H21a1 1 0 100-2zM7 11V5a1 1 0 011-1h8a1 1 0 011 1v6H7zm4 8a1 1 0 102 0 1 1 0 00-2 0z"
        })
    });
})));
const WalletConnectCircle = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function WalletConnectCircle(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                width: 48,
                height: 48,
                rx: 24,
                fill: "#3B99FC"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M16.323 19.113c4.24-4.15 11.114-4.15 15.355 0l.51.5a.523.523 0 010 .752l-1.746 1.71a.276.276 0 01-.384 0l-.702-.688c-2.958-2.896-7.754-2.896-10.712 0l-.752.736a.276.276 0 01-.383 0l-1.747-1.71a.523.523 0 010-.75l.56-.55zm18.965 3.535l1.553 1.522a.524.524 0 010 .75l-7.005 6.86a.551.551 0 01-.767 0l-4.973-4.868a.138.138 0 00-.192 0l-4.971 4.868a.551.551 0 01-.768 0l-7.006-6.86a.523.523 0 010-.75l1.554-1.522a.551.551 0 01.767 0l4.973 4.868a.137.137 0 00.191 0l4.972-4.868a.552.552 0 01.767 0l4.973 4.868a.138.138 0 00.192 0l4.972-4.868a.551.551 0 01.767 0h.001z",
                fill: "#fff"
            })
        ]
    });
})));
const WalletConnect = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function WalletConnect(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 40,
        height: 40,
        viewBox: "0 0 40 40",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M8.192 12.789c6.522-6.385 17.095-6.385 23.617 0l.784.769a.804.804 0 010 1.156l-2.685 2.629a.424.424 0 01-.59 0l-1.08-1.058c-4.55-4.454-11.926-4.454-16.475 0l-1.157 1.133a.424.424 0 01-.59 0l-2.686-2.63a.807.807 0 010-1.155l.861-.844h.001zm29.17 5.437l2.389 2.34a.804.804 0 010 1.155L28.976 32.27a.848.848 0 01-1.18 0l-7.648-7.487a.211.211 0 00-.295 0l-7.647 7.487a.848.848 0 01-1.181 0L.25 21.72a.804.804 0 010-1.156l2.39-2.34a.848.848 0 011.18 0l7.648 7.488c.081.08.213.08.295 0l7.647-7.487a.848.848 0 011.18 0l7.648 7.487c.082.08.214.08.295 0l7.647-7.487a.848.848 0 011.181 0h.001z",
            fill: "#3B99FC"
        })
    });
})));
const Wallet = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Wallet(props, svgRef) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                clipPath: "url(#prefix__prefix__clip0_3_343)",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M17.5 4.167v-.834c0-1.379-1.121-2.5-2.5-2.5H2.5a2.502 2.502 0 00-2.5 2.5v13.334c0 1.378 1.121 2.5 2.5 2.5h15c1.379 0 2.5-1.122 2.5-2.5v-10c0-1.38-1.121-2.5-2.5-2.5zM2.5 2.5H15c.46 0 .833.374.833.833v.834H2.5a.834.834 0 010-1.667zm15 15h-15a.834.834 0 01-.833-.833V5.69c.26.093.54.143.833.143h15c.46 0 .833.374.833.834V8.75H13.75a2.92 2.92 0 00-2.917 2.917 2.92 2.92 0 002.917 2.916h4.583v2.084c0 .46-.373.833-.833.833zm.833-4.583h-1.95a2.897 2.897 0 00-.002-2.5h1.952v2.5zm-5.833-1.25c0-.69.56-1.25 1.25-1.25a1.252 1.252 0 01.889 2.132 1.252 1.252 0 01-2.139-.883z"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "prefix__prefix__clip0_3_343",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M0 0h20v20H0z"
                    })
                })
            })
        ]
    });
});
const Warning = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Warning(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 64,
        height: 64,
        viewBox: "0 0 64 64",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 61.867c16.495 0 29.867-13.372 29.867-29.867S48.495 2.133 32 2.133 2.133 15.505 2.133 32 15.505 61.867 32 61.867zM32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32z",
                fill: "#EC8600"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 32,
                cy: 43,
                r: 1,
                fill: "#EC8600"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M32 20v15",
                stroke: "#EC8600",
                strokeWidth: 2,
                strokeLinecap: "round"
            })
        ]
    });
})));
const Weth = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Weth(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M11.999 3.75v6.098l5.248 2.303-5.248-8.401z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11.999 3.75L6.75 12.151l5.249-2.303V3.75z"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M11.999 16.103v4.143l5.251-7.135L12 16.103z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11.999 20.246v-4.144L6.75 13.111l5.249 7.135z"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.2,
                d: "M11.999 15.144l5.248-2.993-5.248-2.301v5.294z"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M6.75 12.151l5.249 2.993V9.85l-5.249 2.3z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 1.5c-.39 0-.774.021-1.152.062a.5.5 0 01-.108-.994 11.624 11.624 0 012.52 0 .5.5 0 11-.108.994A10.622 10.622 0 0012 1.5zm-3.967.225a.5.5 0 01-.256.659c-.708.311-1.376.699-1.992 1.152a.5.5 0 11-.592-.806c.674-.496 1.405-.92 2.181-1.262a.5.5 0 01.66.257zm7.934 0a.5.5 0 01.659-.257c.776.342 1.507.766 2.181 1.262a.5.5 0 11-.592.806 10.486 10.486 0 00-1.992-1.152.5.5 0 01-.256-.66zM3.429 5.086a.5.5 0 01.107.7c-.453.615-.84 1.283-1.152 1.991a.5.5 0 01-.916-.403c.342-.776.766-1.507 1.262-2.181a.5.5 0 01.7-.107zm17.142 0a.5.5 0 01.699.107c.496.674.92 1.405 1.262 2.181a.5.5 0 11-.916.403 10.494 10.494 0 00-1.152-1.992.5.5 0 01.107-.699zM1.12 10.297a.5.5 0 01.442.551 10.622 10.622 0 000 2.304.5.5 0 01-.994.108 11.624 11.624 0 010-2.52.5.5 0 01.552-.443zm21.76 0a.5.5 0 01.552.443 11.606 11.606 0 010 2.52.5.5 0 11-.994-.108 10.627 10.627 0 000-2.304.5.5 0 01.443-.55zm-21.155 5.67a.5.5 0 01.659.256c.311.708.699 1.376 1.152 1.992a.5.5 0 01-.806.592 11.486 11.486 0 01-1.262-2.181.5.5 0 01.257-.66zm20.55 0a.5.5 0 01.257.659 11.488 11.488 0 01-1.262 2.181.5.5 0 11-.806-.592 10.53 10.53 0 001.152-1.992.5.5 0 01.66-.256zM5.086 20.57a.5.5 0 01.7-.107c.615.453 1.283.84 1.991 1.152a.5.5 0 11-.403.916 11.49 11.49 0 01-2.181-1.262.5.5 0 01-.107-.7zm13.828 0a.5.5 0 01-.107.699c-.674.496-1.405.92-2.181 1.262a.5.5 0 11-.403-.916 10.491 10.491 0 001.992-1.152.5.5 0 01.699.107zm-8.617 2.31a.5.5 0 01.551-.443 10.627 10.627 0 002.304 0 .5.5 0 01.108.994 11.606 11.606 0 01-2.52 0 .5.5 0 01-.443-.551z"
            })
        ]
    });
})));
const Whitepaper = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Whitepaper(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20 8.94a.865.865 0 00-.25-.64l-6-6c-.176-.166-.472-.3-.7-.3H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V8.94zM10 10H9a1 1 0 010-2h1a1 1 0 110 2zm-2 3a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm8.59-5L14 5.41V7a1 1 0 001 1h1.59zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v9zM8 17a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"
        })
    });
})));
const Wrap = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Wrap(props, svgRef) {
    return /*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1 16.757a3.026 3.026 0 001.653 2.698l8 4a3 3 0 002.684 0l8-4A3 3 0 0023 16.77V7.23a3.026 3.026 0 00-1.665-2.686L13.337.546a3 3 0 00-2.684 0l-8 4A3.026 3.026 0 001 7.243v9.514zm20 .013a1 1 0 01-.555.895h-.002L13 21.388v-9.769l8-4v9.152zM19.77 5.998l-7.327-3.664a1 1 0 00-.896 0L9.226 3.495 17 7.382l2.77-1.384zM6.99 4.613L4.226 5.995 12 9.882 14.764 8.5 6.99 4.613zM3 7.618l8 4v9.774l-7.45-3.725h-.001a1 1 0 01-.549-.9V7.618z"
        })
    });
})));
const Wsteth = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Wsteth(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2z",
                fill: "#00A3FF"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M7.898 11.29l-.112.17a4.824 4.824 0 00.678 6.1 5.036 5.036 0 003.534 1.434l-4.1-7.705z",
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M11.997 13.63l-4.1-2.34 4.1 7.704v-5.363zm4.105-2.34l.112.17a4.823 4.823 0 01-.678 6.1 5.036 5.036 0 01-3.534 1.434l4.1-7.705z",
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.2,
                d: "M12.002 13.63l4.1-2.34-4.1 7.704v-5.363zm.001-5.23v4.038l3.531-2.018-3.531-2.02z",
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M12.003 8.4l-3.534 2.02 3.534 2.018V8.4z",
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12.003 5.002L8.469 10.42l3.534-2.027V5.002z",
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.6,
                d: "M12.003 8.394l3.534 2.027-3.534-5.422v3.395z",
                fill: "#fff"
            })
        ]
    });
})));
const XdefiWallet = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function XdefiWallet(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: 24,
                cy: 24,
                r: 24,
                fill: "#2043D0"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.022 27.432a13.605 13.605 0 007.644-1.784l1.404.835a14.963 14.963 0 01-9.134 2.42 8.841 8.841 0 01-6.52-2.858 7.307 7.307 0 01-1.477-5.871 7.509 7.509 0 01.687-2.222l.052-.105a13.508 13.508 0 014.685-5.103 13.746 13.746 0 0113.462-.76 13.562 13.562 0 015.24 4.549 13.315 13.315 0 01.982 13.286 13.494 13.494 0 01-4.518 5.252 13.711 13.711 0 01-6.557 2.35l-.128-1.457a12.22 12.22 0 005.84-2.092 12.025 12.025 0 004.023-4.679 11.866 11.866 0 00-.87-11.838 12.086 12.086 0 00-4.667-4.054 12.254 12.254 0 00-11.992.661 12.039 12.039 0 00-4.18 4.544l-.038.077a6.083 6.083 0 00-.556 1.79 5.842 5.842 0 001.156 4.729 7.483 7.483 0 005.462 2.33zm.806 3.411a16.008 16.008 0 009.668-3.537l1.34.797c-1.2 1.155-4.649 3.86-10.923 4.207-.489.038-.958.038-1.405.038-5.456 0-7.778-1.856-7.881-1.94l.534-.633.41-.5c.022.019 2.445 1.885 8.257 1.568zm12.187-2.027a10.785 10.785 0 01-2.892 2.604c-3.933 2.508-8.935 2.832-12.437 2.657l-.071 1.465c.59.029 1.154.042 1.703.042 9.876 0 13.867-4.446 14.982-6.033l-1.286-.746.001.011zm.271-5.743c-.19.13-.416.201-.647.204a1.18 1.18 0 01-1.186-1.172 1.172 1.172 0 111.833.968z",
                fill: "#fff"
            })
        ]
    });
})));
const Zengo = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Zengo(props, svgRef) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "currentColor",
        ref: svgRef,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",
                fill: "url(#prefix__prefix__paint0_linear_11640_1714)"
            }),
            /*#__PURE__*/ _jsx("g", {
                filter: "url(#prefix__prefix__filter0_i_11640_1714)",
                children: /*#__PURE__*/ _jsx("path", {
                    d: "M20.95 22.472c.901-.369 1.277.24.72.954-1.428 1.834-3.639 5.708-.85 7.436 1.248.772 3.112.206 4.678-.315l.25-.084c.414-.138.803-.267 1.147-.36 2.214-.598 4.55-1.168 6.841-.683 2.633.556 4.418 3.196 4.07 5.88-.345 2.661-2.72 4.58-5.371 4.58H16.256c-3.14.062-5.32-2.218-5.55-4.916-.04-.465-.027-.94.045-1.416.47-3.093 2.226-5.607 4.39-7.725 1.397-1.366 3.914-2.772 5.772-3.34l.038-.01zM31.745 8.028c3.14-.062 5.32 2.217 5.55 4.916.04.464.027.94-.045 1.415-.47 3.094-2.226 5.607-4.39 7.725-1.398 1.367-3.914 2.773-5.772 3.34-.012.003-.025.006-.038.011-.9.37-1.276-.24-.72-.953 1.428-1.835 3.64-5.709.85-7.436-1.652-1.023-4.385.302-6.074.759-2.214.598-4.55 1.167-6.841.683-2.633-.557-4.418-3.196-4.07-5.88.345-2.662 2.72-4.58 5.371-4.58h16.179z",
                    fill: "url(#prefix__prefix__paint1_linear_11640_1714)"
                })
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint0_linear_11640_1714",
                        x1: 24,
                        y1: 0,
                        x2: 24,
                        y2: 47.054,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#fff"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0.999,
                                stopColor: "#E6F7F7"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "prefix__prefix__paint1_linear_11640_1714",
                        x1: 11.982,
                        y1: 9.177,
                        x2: 37.421,
                        y2: 39.223,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#4FF4BA"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "#43CFC7",
                                stopOpacity: 0.677
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("filter", {
                        id: "prefix__prefix__filter0_i_11640_1714",
                        x: 10.15,
                        y: 8.027,
                        width: 27.699,
                        height: 32.854,
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ _jsx("feFlood", {
                                floodOpacity: 0,
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ _jsx("feOffset", {
                                dy: 1
                            }),
                            /*#__PURE__*/ _jsx("feGaussianBlur", {
                                stdDeviation: 1
                            }),
                            /*#__PURE__*/ _jsx("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: -1,
                                k3: 1
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0.262745 0 0 0 0 0.811765 0 0 0 0 0.780392 0 0 0 0.677133 0"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect1_innerShadow_11640_1714"
                            })
                        ]
                    })
                ]
            })
        ]
    });
})));


/***/ }),

/***/ 8759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bK": () => (/* reexport */ identicon_Identicon)
});

// UNUSED EXPORTS: IdenticonBadge, IdenticonBadgeColor

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/address/index.ts + 3 modules
var address = __webpack_require__(9089);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ui/identicon/IdenticonStyles.tsx

const colors = {
    background: external_styled_components_.css`
    background: var(--collective-color-background);
    color: var(--collective-color-textSecondary);
  `,
    accent: external_styled_components_.css`
    background: var(--collective-color-accentDarken);
    color: var(--collective-color-accentContrast);
  `
};
const IdenticonStyles_IdenticonBadgeStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-722f2d4e-0"
})`
  border-radius: 1000px;
  padding: 4px;
  margin: 0 6px;
  display: inline-flex;
  align-items: center;

  ${({ $color  })=>colors[$color]}
`;
const IdenticonStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-722f2d4e-1"
})`
  border-radius: 1000px;
  overflow: hidden;
  line-height: 0;
  display: inline-block;
`;
const IdenticonStyles_AddressWrapperStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-722f2d4e-2"
})`
  padding: 0 6px;
`;

// EXTERNAL MODULE: external "react-jazzicon"
var external_react_jazzicon_ = __webpack_require__(9881);
var external_react_jazzicon_default = /*#__PURE__*/__webpack_require__.n(external_react_jazzicon_);
;// CONCATENATED MODULE: ./components/ui/identicon/Identicon.tsx




function Identicon_Identicon(props, ref) {
    const { diameter =24 , address , paperStyles , svgStyles , ...rest } = props;
    const iconProps = {
        diameter,
        paperStyles,
        svgStyles
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(IdenticonStyle, {
        ...rest,
        ref: ref,
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_jazzicon_default()), {
            seed: (0,external_react_jazzicon_.jsNumberForAddress)(address),
            ...iconProps
        })
    });
}
/* harmony default export */ const identicon_Identicon = (/*#__PURE__*/(0,external_react_.forwardRef)(Identicon_Identicon));

;// CONCATENATED MODULE: ./components/ui/identicon/IdenticonBadge.tsx





function IdenticonBadge(props, ref) {
    const { symbols =3 , color ="background" , diameter , address , paperStyles , svgStyles , ...rest } = props;
    const identiconProps = {
        address,
        diameter,
        paperStyles,
        svgStyles
    };
    return /*#__PURE__*/ _jsxs(IdenticonBadgeStyle, {
        $color: color,
        ...rest,
        ref: ref,
        children: [
            symbols > 0 ? /*#__PURE__*/ _jsx(AddressWrapperStyle, {
                children: /*#__PURE__*/ _jsx(Address, {
                    address: address,
                    symbols: symbols
                })
            }) : "",
            /*#__PURE__*/ _jsx(Identicon, {
                ...identiconProps
            })
        ]
    });
}
/* harmony default export */ const identicon_IdenticonBadge = (/*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(IdenticonBadge))));

;// CONCATENATED MODULE: ./components/ui/identicon/types.ts

var IdenticonBadgeColor;
(function(IdenticonBadgeColor) {
    IdenticonBadgeColor[IdenticonBadgeColor["background"] = 0] = "background";
    IdenticonBadgeColor[IdenticonBadgeColor["accent"] = 1] = "accent";
})(IdenticonBadgeColor || (IdenticonBadgeColor = {}));

;// CONCATENATED MODULE: ./components/ui/identicon/index.ts





/***/ }),

/***/ 9401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bs": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_11__.Bs),
/* harmony export */   "CK": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_11__.CK),
/* harmony export */   "Ei": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_2__.Ei),
/* harmony export */   "F3": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_6__.F3),
/* harmony export */   "Gc": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_8__.Gc),
/* harmony export */   "Gl": () => (/* reexport safe */ _loaders__WEBPACK_IMPORTED_MODULE_5__.Gl),
/* harmony export */   "H3": () => (/* reexport safe */ _heading__WEBPACK_IMPORTED_MODULE_4__.H3),
/* harmony export */   "IB": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_11__.IB),
/* harmony export */   "II": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_13__.II),
/* harmony export */   "Ix": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_6__.Ix),
/* harmony export */   "Kb": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_11__.Kb),
/* harmony export */   "L1": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_11__.L1),
/* harmony export */   "LV": () => (/* reexport safe */ _toast__WEBPACK_IMPORTED_MODULE_12__.Ix),
/* harmony export */   "M1": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_6__.M1),
/* harmony export */   "Qp": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_6__.Qp),
/* harmony export */   "T8": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_6__.T8),
/* harmony export */   "W2": () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_3__.W),
/* harmony export */   "X6": () => (/* reexport safe */ _heading__WEBPACK_IMPORTED_MODULE_4__.X6),
/* harmony export */   "Y4": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_11__.Y4),
/* harmony export */   "aN": () => (/* reexport safe */ _loaders__WEBPACK_IMPORTED_MODULE_5__.aN),
/* harmony export */   "bK": () => (/* reexport safe */ _identicon__WEBPACK_IMPORTED_MODULE_10__.bK),
/* harmony export */   "em": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_11__.em),
/* harmony export */   "hG": () => (/* reexport safe */ _toast__WEBPACK_IMPORTED_MODULE_12__.yW),
/* harmony export */   "hY": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_11__.hY),
/* harmony export */   "kL": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "rU": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_15__.r),
/* harmony export */   "u_": () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_9__.u_),
/* harmony export */   "w5": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_11__.w5),
/* harmony export */   "xv": () => (/* reexport safe */ _text__WEBPACK_IMPORTED_MODULE_16__.xv),
/* harmony export */   "yW": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_11__.yW),
/* harmony export */   "zx": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_2__.zx)
/* harmony export */ });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9089);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6009);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5193);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1397);
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7903);
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(127);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5652);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2794);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9472);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9593);
/* harmony import */ var _identicon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8759);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6606);
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(226);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1499);
/* harmony import */ var _cookie_theme_toggler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3117);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3483);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_toast__WEBPACK_IMPORTED_MODULE_12__]);
_toast__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "II": () => (/* reexport */ input_Input)
});

// UNUSED EXPORTS: InputColor, InputGroup, InputMessageVariant, InputType, InputVariant, Textarea

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ui/input/InputStyles.ts

const statesCSS = external_styled_components_.css`
  &:hover {
    z-index: 1;
  }

  &:focus-within {
    z-index: 2;
    border-color: var(--collective-color-borderActive);
  }
`;
const activeCSS = external_styled_components_.css`
  &,
  &:hover,
  &:focus-within {
    z-index: 2;
    border-color: var(--collective-color-borderActive);
  }
`;
const errorCSS = external_styled_components_.css`
  &,
  &:hover,
  &:focus-within {
    border-color: var(--collective-color-error);
  }
`;
const warningCSS = external_styled_components_.css`
  &,
  &:hover,
  &:focus-within {
    border-color: var(--collective-color-warning);
  }
`;
const wrapperColors = {
    default: external_styled_components_.css`
    background: 'transparent';
    border-color: var(--collective-color-border);
    color: var(--white-color);

    ${({ $disabled , $readonly  })=>$disabled ? `background: var(--collective-color-foreground);` : $readonly ? `background: var(--collective-color-foreground);` : `
          &:hover {
            border-color: var(--collective-color-borderHover);
          }
    `};
  `,
    accent: external_styled_components_.css`
    background: var(--collective-color-accentControlBg);
    border-color: var(--collective-color-accentBorder);
    color: var(--collective-color-accentText);

    ${({ $disabled  })=>$disabled ? `background: var(--collective-color-controlBg);` : `
          &:hover {
            border-color: var(--collective-color-accentBorderHover);
          }
    `};
  `
};
const InputStyles_InputWrapperStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-4e7b8e20-0"
})`
  position: relative;
  display: inline-flex;
  align-items: stretch;
  box-sizing: border-box;
  padding: 0 30px;
  cursor: ${({ $disabled  })=>$disabled ? "default" : "text"};
  transition: border-color ${({ theme  })=>theme.duration.fast} ease;
  width: ${({ $fullwidth  })=>$fullwidth ? "100%" : "auto"};

  ${({ $color  })=>wrapperColors[$color]};
  ${({ $disabled , $readonly  })=>$disabled || $readonly ? "" : statesCSS}

  ${({ $active  })=>$active ? activeCSS : ""}
  ${({ $warning  })=>$warning ? warningCSS : ""}
  ${({ $error  })=>$error ? errorCSS : ""}
`;
const contentVariants = {
    default: external_styled_components_.css`
    padding: 20px 0;
  `,
    small: external_styled_components_.css`
    padding: 9px 0;
  `,
    nopadding: external_styled_components_.css`
    padding: 0;
  `
};
const InputStyles_InputContentStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-4e7b8e20-1"
})`
  font-weight: 400;
  font-size: ${({ theme  })=>theme.fontSizesMap.xs}px;
  display: flex;
  flex-grow: 1;

  position: relative;

  ${({ $variant  })=>contentVariants[$variant]};
`;
const inputColors = {
    default: external_styled_components_.css`
    color: var(--white-color);

    &:disabled {
      color: var(--collective-color-textSecondary);
    }

    &::placeholder {
      color: var(--white-color);
      opacity: 80%;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 100px var(--collective-color-controlBg) inset !important;
      color: var(--white-color) !important;
    }

    &:-internal-autofill-selected {
      color: var(--white-color) !important;
    }
  `,
    accent: external_styled_components_.css`
    color: var(--collective-color-accentText);
    opacity: 1;

    &:disabled {
      color: var(--collective-color-accentText);
      opacity: 0.5;
    }

    &::placeholder {
      color: var(--collective-color-accentText);
      opacity: 0.5;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 100px var(--collective-color-accentControlBg) inset !important;
      color: var(--collective-color-accentContrast) !important;
    }

    &:-internal-autofill-selected {
      color: var(--collective-color-accentContrast) !important;
    }
  `
};
const InputStyle = external_styled_components_default().input.withConfig({
    componentId: "sc-4e7b8e20-2"
})`
  width: 100%;
  font-family: inherit;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;

  padding: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  border: none;
  outline: none;
  position: relative;
  text-align: left;

  &::placeholder {
    transition: opacity ${({ theme  })=>theme.duration.fast} ease;
  }

  ${({ $color  })=>inputColors[$color]}
`;
const InputStyles_TextareaStyle = external_styled_components_default()(InputStyle).attrs({
    as: "textarea"
}).withConfig({
    componentId: "sc-4e7b8e20-3"
})`
  resize: none;
`;
const messageVariants = {
    error: external_styled_components_.css`
    background: var(--collective-color-error);
    color: var(--collective-color-errorContrast);
    box-shadow: ${({ theme  })=>theme.boxShadows.sm}
      var(--collective-color-shadowLight);
  `,
    warning: external_styled_components_.css`
    background: var(--collective-color-warning);
    color: var(--collective-color-warningContrast);
    box-shadow: ${({ theme  })=>theme.boxShadows.sm}
      var(--collective-color-shadowLight);
  `,
    success: external_styled_components_.css`
    color: var(--collective-color-success);
  `
};
const InputStyles_InputMessageStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-4e7b8e20-4"
})`
  margin-top: ${({ $bordered  })=>$bordered ? 5 : 6}px;
  left: ${({ $bordered  })=>$bordered ? -1 : 0}px;
  position: absolute;
  top: 100%;
  line-height: 1.6em;
  font-weight: 400;
  font-size: ${({ theme  })=>theme.fontSizesMap.xxs}px;
  border-radius: ${({ theme  })=>theme.borderRadiusesMap.sm}px;
  padding: 6px 10px;

  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  text-overflow: ellipsis;
  max-width: ${({ $bordered  })=>$bordered ? "calc(100% + 2px)" : "100%"};

  ${({ $variant  })=>messageVariants[$variant]}
`;
const decoratorCSS = external_styled_components_.css`
  flex-grow: 0;
  flex-shrink: 0;
  cursor: inherit;
  display: flex;
  align-items: center;
`;
const InputLeftDecoratorStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-4e7b8e20-5"
})`
  ${decoratorCSS}
  padding-right: 16px;
`;
const InputRightDecoratorStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-4e7b8e20-6"
})`
  ${decoratorCSS}
  padding-left: 16px;
`;

;// CONCATENATED MODULE: ./components/ui/input/LabelStyles.ts

const colors = {
    default: external_styled_components_.css`
    color: var(--collective-color-textSecondary);
  `,
    accent: external_styled_components_.css`
    color: var(--collective-color-accentContrastSecondary);
  `
};
const labelCSS = external_styled_components_.css`
  ${({ $color  })=>colors[$color]}
`;
const InputLabelStyle = external_styled_components_default().label.withConfig({
    componentId: "sc-6075e63b-0"
})`
  display: block;
  padding-left: 30px;
  text-transform: uppercase;
  margin-bottom: 15px;
  display: block;
  font-size: 12px;
  ${labelCSS};
`;
const LabelStyles_TextareaLabelStyle = external_styled_components_default()(InputLabelStyle).withConfig({
    componentId: "sc-6075e63b-1"
})`
  top: 27px;
`;

;// CONCATENATED MODULE: ./components/ui/input/Input.tsx




function Input(props, ref) {
    const { label , error , warning , success , active =false , fullwidth =false , placeholder =" " , leftDecorator , rightDecorator , className , style , variant ="default" , color ="default" , wrapperRef , children , readOnly =false , ...rest } = props;
    const { id , disabled =false  } = props;
    const wrapperProps = {
        className,
        style
    };
    const hasLabel = !!label && variant === "default" || "nopading";
    const hasError = !!error;
    const hasErrorMessage = hasError && typeof error !== "boolean";
    const hasWarning = !hasError && !!warning; // `error` overrides `warning`
    const hasWarningMessage = hasWarning && typeof warning !== "boolean";
    const hasSuccess = !!success && !error;
    const hasSuccessMessage = hasSuccess && typeof success !== "boolean";
    const hasLeftDecorator = !!leftDecorator;
    const hasRightDecorator = !!rightDecorator;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            hasLabel && /*#__PURE__*/ jsx_runtime_.jsx(InputLabelStyle, {
                htmlFor: id,
                $color: color,
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputStyles_InputWrapperStyle, {
                $error: hasError,
                $warning: hasWarning,
                $active: active,
                $disabled: disabled,
                $fullwidth: fullwidth,
                $color: color,
                $readonly: readOnly,
                ref: wrapperRef,
                ...wrapperProps,
                children: [
                    hasLeftDecorator && /*#__PURE__*/ jsx_runtime_.jsx(InputLeftDecoratorStyle, {
                        children: leftDecorator
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputStyles_InputContentStyle, {
                        $variant: variant,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(InputStyle, {
                            $color: color,
                            placeholder: placeholder,
                            "aria-invalid": hasError,
                            type: "text",
                            ref: ref,
                            readOnly: readOnly,
                            ...rest
                        })
                    }),
                    hasErrorMessage && /*#__PURE__*/ jsx_runtime_.jsx(InputStyles_InputMessageStyle, {
                        $variant: "error",
                        $bordered: true,
                        children: error
                    }),
                    hasWarningMessage && /*#__PURE__*/ jsx_runtime_.jsx(InputStyles_InputMessageStyle, {
                        $variant: "warning",
                        $bordered: true,
                        children: warning
                    }),
                    hasSuccessMessage && /*#__PURE__*/ jsx_runtime_.jsx(InputStyles_InputMessageStyle, {
                        $variant: "success",
                        $bordered: true,
                        children: success
                    }),
                    hasRightDecorator && /*#__PURE__*/ jsx_runtime_.jsx(InputRightDecoratorStyle, {
                        children: rightDecorator
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const input_Input = (/*#__PURE__*/(0,external_react_.forwardRef)(Input));

;// CONCATENATED MODULE: ./components/ui/input/InputGroupStyles.ts

const InputGroupStyles_InputGroupStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-9b413afe-0"
})`
  display: inline-flex;
  position: relative;
  width: ${({ $fullwidth  })=>$fullwidth ? "100%" : "auto"};
`;
const InputGroupStyles_InputGroupContentStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-9b413afe-1"
})`
  display: flex;
  width: 100%;

  & > * {
    border-radius: 0px;
    margin: 0 -1px 0 0;

    &:first-child {
      border-top-left-radius: ${({ theme  })=>theme.borderRadiusesMap.lg}px;
      border-bottom-left-radius: ${({ theme  })=>theme.borderRadiusesMap.lg}px;
    }

    &:last-child {
      margin-right: 0;
      border-top-right-radius: ${({ theme  })=>theme.borderRadiusesMap.lg}px;
      border-bottom-right-radius: ${({ theme  })=>theme.borderRadiusesMap.lg}px;
    }
  }
`;

;// CONCATENATED MODULE: ./components/ui/input/InputGroup.tsx




function InputGroup(props, ref) {
    const { fullwidth =false , error , success , children , ...rest } = props;
    const hasError = !!error;
    const hasSuccess = !!success && !error;
    return /*#__PURE__*/ _jsxs(InputGroupStyle, {
        $fullwidth: fullwidth,
        ...rest,
        ref: ref,
        children: [
            /*#__PURE__*/ _jsx(InputGroupContentStyle, {
                children: children
            }),
            hasError && /*#__PURE__*/ _jsx(InputMessageStyle, {
                $variant: "error",
                children: error
            }),
            hasSuccess && /*#__PURE__*/ _jsx(InputMessageStyle, {
                $variant: "success",
                children: success
            })
        ]
    });
}
/* harmony default export */ const input_InputGroup = (/*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(InputGroup))));

;// CONCATENATED MODULE: ./components/ui/input/Textarea.tsx




function Textarea(props, ref) {
    const { label , error , warning , success , active =false , fullwidth =false , placeholder =" " , className , style , variant ="default" , color ="default" , wrapperRef , children , ...rest } = props;
    const { id , disabled =false  } = props;
    const wrapperProps = {
        className,
        style
    };
    const hasLabel = !!label && variant === "default";
    const hasError = !!error;
    const hasErrorMessage = hasError && typeof error !== "boolean";
    const hasWarning = !hasError && !!warning // `error` overrides `warning`
    ;
    const hasWarningMessage = hasWarning && typeof warning !== "boolean";
    const hasSuccess = !!success && !error;
    const hasSuccessMessage = hasSuccess && typeof success !== "boolean";
    return /*#__PURE__*/ _jsxs(InputWrapperStyle, {
        $error: hasError,
        $warning: hasWarning,
        $active: active,
        $disabled: disabled,
        $fullwidth: fullwidth,
        $color: color,
        htmlFor: id,
        ref: wrapperRef,
        ...wrapperProps,
        children: [
            /*#__PURE__*/ _jsxs(InputContentStyle, {
                $variant: variant,
                children: [
                    /*#__PURE__*/ _jsx(TextareaStyle, {
                        $labeled: hasLabel,
                        $color: color,
                        placeholder: placeholder,
                        "aria-invalid": hasError,
                        ref: ref,
                        ...rest
                    }),
                    hasLabel && /*#__PURE__*/ _jsx(TextareaLabelStyle, {
                        $color: color,
                        children: label
                    })
                ]
            }),
            hasErrorMessage && /*#__PURE__*/ _jsx(InputMessageStyle, {
                $variant: "error",
                $bordered: true,
                children: error
            }),
            hasWarningMessage && /*#__PURE__*/ _jsx(InputMessageStyle, {
                $variant: "warning",
                $bordered: true,
                children: warning
            }),
            hasSuccessMessage && /*#__PURE__*/ _jsx(InputMessageStyle, {
                $variant: "success",
                $bordered: true,
                children: success
            })
        ]
    });
}
/* harmony default export */ const input_Textarea = (/*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(Textarea))));

;// CONCATENATED MODULE: ./components/ui/input/types.ts

var InputMessageVariant;
(function(InputMessageVariant) {
    InputMessageVariant[InputMessageVariant["error"] = 0] = "error";
    InputMessageVariant[InputMessageVariant["warning"] = 1] = "warning";
    InputMessageVariant[InputMessageVariant["success"] = 2] = "success";
})(InputMessageVariant || (InputMessageVariant = {}));
var InputType;
(function(InputType) {
    InputType[InputType["text"] = 0] = "text";
    InputType[InputType["password"] = 1] = "password";
    InputType[InputType["number"] = 2] = "number";
    InputType[InputType["email"] = 3] = "email";
    InputType[InputType["search"] = 4] = "search";
    InputType[InputType["tel"] = 5] = "tel";
    InputType[InputType["url"] = 6] = "url";
})(InputType || (InputType = {}));
var InputVariant;
(function(InputVariant) {
    InputVariant[InputVariant["small"] = 0] = "small";
    InputVariant[InputVariant["default"] = 1] = "default";
    InputVariant[InputVariant["nopadding"] = 2] = "nopadding";
})(InputVariant || (InputVariant = {}));
var InputColor;
(function(InputColor) {
    InputColor[InputColor["default"] = 0] = "default";
    InputColor[InputColor["accent"] = 1] = "accent";
})(InputColor || (InputColor = {}));

;// CONCATENATED MODULE: ./components/ui/input/index.ts






/***/ }),

/***/ 3483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* reexport */ link_Link)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ui/link/LinkStyles.tsx

const LinkStyle = external_styled_components_default().a.withConfig({
    componentId: "sc-af62ed72-0"
})`
  text-decoration: none;
  color: var(--collective-color-link);
  :hover {
    color: var(--collective-color-linkHover);
  }
  ${(props)=>props.fadeVisited && external_styled_components_.css`
      :visited {
        color: var(--collective-color-linkVisited);
      }
    `}
`;

;// CONCATENATED MODULE: ./components/ui/link/Link.tsx



function Link(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(LinkStyle, {
        target: "_blank",
        rel: "nofollow noopener",
        ref: ref,
        ...props
    });
}
/* harmony default export */ const link_Link = (/*#__PURE__*/(0,external_react_.forwardRef)(Link));

;// CONCATENATED MODULE: ./components/ui/link/index.ts




/***/ }),

/***/ 127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gl": () => (/* reexport */ loaders_InlineLoader),
  "aN": () => (/* reexport */ loaders_Loader)
});

// UNUSED EXPORTS: InlineLoaderColor, LoaderColor, LoaderSize

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ui/loaders/types.ts
var LoaderSize;
(function(LoaderSize) {
    LoaderSize[LoaderSize["small"] = 18] = "small";
    LoaderSize[LoaderSize["medium"] = 24] = "medium";
    LoaderSize[LoaderSize["large"] = 64] = "large";
})(LoaderSize || (LoaderSize = {}));
var LoaderColor;
(function(LoaderColor) {
    LoaderColor[LoaderColor["primary"] = 0] = "primary";
    LoaderColor[LoaderColor["secondary"] = 1] = "secondary";
    LoaderColor[LoaderColor["foreground"] = 2] = "foreground";
    LoaderColor[LoaderColor["success"] = 3] = "success";
})(LoaderColor || (LoaderColor = {}));
var InlineLoaderColor;
(function(InlineLoaderColor) {
    InlineLoaderColor[InlineLoaderColor["text"] = 0] = "text";
    InlineLoaderColor[InlineLoaderColor["secondary"] = 1] = "secondary";
    InlineLoaderColor[InlineLoaderColor["foreground"] = 2] = "foreground";
})(InlineLoaderColor || (InlineLoaderColor = {}));

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ui/loaders/LoaderStyles.tsx

const rotation = external_styled_components_.keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const LoaderStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-6450a0cc-0"
})`
  margin: 0;
  padding: 0;
  line-height: 0;
  width: ${(props)=>props.$size}px;
  height: ${(props)=>props.$size}px;
  color: ${({ $color  })=>`var(--collective-color-${$color})`};
`;
const LoaderCircleBgStyle = external_styled_components_default().circle.withConfig({
    componentId: "sc-6450a0cc-1"
})`
  fill: none;
  stroke: currentColor;
  stroke-width: ${(props)=>props.$thickness};
  opacity: 0.2;
`;
const LoaderCircleFgStyle = external_styled_components_default().circle.withConfig({
    componentId: "sc-6450a0cc-2"
})`
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: ${(props)=>props.$thickness};
  stroke-dasharray: ${(props)=>{
    const circumference = 2 * props.r * Math.PI;
    const filledPart = 0.25;
    return `${circumference * filledPart} ${circumference * (1 - filledPart)}`;
}};
  transform: rotate(0deg);
  transform-origin: 50% 50%;
  animation: ${rotation} 1.4s linear infinite;
`;

;// CONCATENATED MODULE: ./components/ui/loaders/Loader.tsx




function Loader(props, ref) {
    const { size ="medium" , thickness =3 , color ="primary" , ...rest } = props;
    const pxSize = LoaderSize[size];
    const center = pxSize / 2;
    const radius = pxSize / 2 - thickness / 2;
    return /*#__PURE__*/ jsx_runtime_.jsx(LoaderStyle, {
        $size: pxSize,
        $color: color,
        ...rest,
        ref: ref,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: pxSize,
            height: pxSize,
            viewBox: `0 0 ${pxSize} ${pxSize}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(LoaderCircleBgStyle, {
                    $thickness: thickness,
                    cx: center,
                    cy: center,
                    r: radius
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(LoaderCircleFgStyle, {
                    $thickness: thickness,
                    cx: center,
                    cy: center,
                    r: radius
                })
            ]
        })
    });
}
/* harmony default export */ const loaders_Loader = (/*#__PURE__*/(0,external_react_.forwardRef)(Loader));

;// CONCATENATED MODULE: ./components/ui/loaders/InlineLoaderStyles.tsx

const translation = external_styled_components_.keyframes`
  100% {
    background-position: 0 0;
  }
`;
const InlineLoaderStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-4f055d3c-0"
})`
  --loader-color: ${({ $color  })=>$color ? `var(--collective-color-${$color})` : "currentColor"};

  width: 100%;
  display: inline-block;
  vertical-align: top;
  border-radius: 1000px;
  position: relative;
  overflow: hidden;
  user-select: none;
  opacity: 0.05;
  animation: ${translation} 2s infinite;
  background-size: 300% 100%;
  background-position: 100% 0;
  background-image: linear-gradient(
    90deg,
    var(--loader-color) 0,
    var(--loader-color) 33.33%,
    transparent 44.44%,
    transparent 55.55%,
    var(--loader-color) 66.66%,
    var(--loader-color) 100%
  );

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--loader-color);
    opacity: 0.2;
  }
`;

;// CONCATENATED MODULE: ./components/ui/loaders/InlineLoader.tsx



function InlineLoader(props, ref) {
    const { color , ...rest } = props;
    const heightAdjuster = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "\xa0"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(InlineLoaderStyle, {
        $color: color,
        ...rest,
        ref: ref,
        children: heightAdjuster
    });
}
/* harmony default export */ const loaders_InlineLoader = (/*#__PURE__*/(0,external_react_.forwardRef)(InlineLoader));

;// CONCATENATED MODULE: ./components/ui/loaders/index.ts





/***/ }),

/***/ 9593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u_": () => (/* reexport */ modal_Modal)
});

// UNUSED EXPORTS: ModalButton, ModalExtra, ModalOverlay

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/ui/icons/index.tsx
var icons = __webpack_require__(6606);
// EXTERNAL MODULE: ./components/ui/button/index.ts + 6 modules
var ui_button = __webpack_require__(5193);
;// CONCATENATED MODULE: ./components/ui/modal/ModalStyles.tsx





const ModalStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-fda00d5b-0"
})`
  ${({ theme: { fontSizesMap , borderRadiusesMap , colors , boxShadows  } , $center  })=>external_styled_components_.css`
    width: 432px;
    max-width: 100%;
    font-weight: 400;
    font-size: ${fontSizesMap.xs}px;
    line-height: 1.5em;
    text-align: ${$center ? "center" : "left"};
    border-radius: ${borderRadiusesMap.xl}px;
    box-shadow: ${boxShadows.xxl} ${colors.shadowDark};
  `}
`;
const ModalBaseStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-fda00d5b-1"
})`
  ${({ theme: { colors  }  })=>external_styled_components_.css`
    color: ${colors.text};
    background: ${colors.foreground};
    border-radius: inherit;
    position: relative;
    z-index: 1;
  `}
`;
const ModalHeaderStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-fda00d5b-2"
})`
  ${({ theme: { spaceMap , fontSizesMap , mediaQueries  } , $short  })=>external_styled_components_.css`
    display: flex;
    align-items: flex-start;
    min-height: 32px;
    margin-bottom: ${$short ? -spaceMap.md : 0}px;
    padding: ${spaceMap.xl}px ${spaceMap.xxl}px;
    font-size: ${fontSizesMap.md}px;
    line-height: 1.5em;

    ${mediaQueries.md} {
      padding: ${spaceMap.lg}px;
    }
  `}
`;
const ModalTitleStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-fda00d5b-3"
})`
  ${({ theme: { fontSizesMap , spaceMap , mediaQueries  } , $center , $withBackButton , $withCloseButton , $withTitleIcon  })=>external_styled_components_.css`
    font-size: ${fontSizesMap.sm}px;
    line-height: 1.5em;
    font-weight: 700;
    margin-left: ${$center && !$withBackButton ? spaceMap.xxl : "0"}px;
    margin-right: ${$center && !$withCloseButton ? spaceMap.xxl : "0"}px;
    padding-top: ${$withTitleIcon ? spaceMap.sm : "0"}px;
    padding-left: 0;
    padding-right: ${spaceMap.sm}px;
    flex-grow: 1;
    align-self: center;

    ${mediaQueries.md} {
      padding-right: ${spaceMap.xs}px;
    }
  `}
`;
const ModalTitleIconStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-fda00d5b-4"
})`
  ${({ theme: { spaceMap  } , $center  })=>external_styled_components_.css`
    display: ${$center ? "flex" : "block"};
    justify-content: ${$center ? "center" : "flex-start"};
    line-height: 0.7;
    margin-bottom: ${spaceMap.md}px;
  `}
`;
const ModalTitleTextStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-fda00d5b-5"
})`
  margin: ${({ theme  })=>theme.spaceMap.xs}px 0;
`;
const ModalSubtitleStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-fda00d5b-6"
})`
  ${({ theme: { colors , fontSizesMap , spaceMap , mediaQueries  }  })=>external_styled_components_.css`
    color: ${colors.textSecondary};
    font-size: ${fontSizesMap.xs}px;
    font-weight: 400;
    line-height: 24px;
    margin-top: -${spaceMap.xl}px;
    padding: 0 ${spaceMap.xxl}px ${spaceMap.sm}px;

    ${mediaQueries.md} {
      padding-left: ${spaceMap.xl}px;
      padding-right: ${spaceMap.xl}px;
    }
  `}
`;
const ModalContentStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-fda00d5b-7"
})`
  ${({ theme: { spaceMap , mediaQueries  }  })=>external_styled_components_.css`
    padding: 0 ${spaceMap.xxl}px ${spaceMap.xxl}px;

    ${mediaQueries.md} {
      padding: 0 ${spaceMap.lg}px ${spaceMap.lg}px;
    }
  `}
`;
const ModalCloseStyle = external_styled_components_default()(ui_button/* ButtonIcon */.Ei).attrs({
    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Close */.x8, {}),
    color: "secondary",
    variant: "ghost",
    size: "xs"
}).withConfig({
    componentId: "sc-fda00d5b-8"
})`
  margin: 0 -10px 0 0;
  color: var(--collective-color-textSecondary);
  flex-shrink: 0;
  border-radius: 50%;
`;
const ModalBackStyle = external_styled_components_default()(ui_button/* ButtonIcon */.Ei).attrs({
    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons/* ArrowBack */.xh, {}),
    color: "secondary",
    variant: "ghost",
    size: "xs"
}).withConfig({
    componentId: "sc-fda00d5b-9"
})`
  ${({ theme: { colors , spaceMap  }  })=>external_styled_components_.css`
    color: ${colors.textSecondary};
    flex-shrink: 0;
    margin: 0 ${spaceMap.sm}px 0 -6px;
    border-radius: 50%;
    background: transparent !important;
  `}
`;

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
// EXTERNAL MODULE: ./components/ui/hooks/index.ts + 5 modules
var hooks = __webpack_require__(9472);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(4466);
;// CONCATENATED MODULE: ./components/ui/transition/constants.ts
const DEFAULT_DURATION = 150;

;// CONCATENATED MODULE: ./components/ui/transition/withTransition.tsx





function withTransition(Component) {
    function Wrapped(props, externalRef) {
        const { in: state = false , timeout =DEFAULT_DURATION , mountOnEnter =true , unmountOnExit =true , appear =true , enter =true , exit =true , addEndListener , onEnter , onEntering , onEntered , onExit , onExiting , onExited , ...rest } = props;
        const transitionProps = {
            in: state,
            timeout,
            mountOnEnter,
            unmountOnExit,
            appear,
            enter,
            exit,
            addEndListener,
            onEnter,
            onEntering,
            onEntered,
            onExit,
            onExiting,
            onExited
        };
        const ref = (0,hooks/* useMergeRefs */.qq)([
            externalRef
        ]);
        return /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.Transition, {
            ...transitionProps,
            nodeRef: ref,
            children: (status)=>/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...rest,
                    duration: timeout,
                    transitionStatus: status,
                    ref: ref
                })
        });
    }
    return /*#__PURE__*/ (0,external_react_.forwardRef)(Wrapped);
}

;// CONCATENATED MODULE: ./components/ui/transition/index.ts



// EXTERNAL MODULE: ./components/ui/utils/index.ts + 2 modules
var utils = __webpack_require__(2794);
;// CONCATENATED MODULE: ./components/ui/modal/ModalOverlayStyles.tsx

const getOpacity = ({ $transition  })=>{
    return [
        "exiting",
        "exited"
    ].includes($transition) ? 0 : 1;
};
const ModalPortalStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-62719b4a-0"
})`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 300;
  background: var(--collective-color-overlay);
  cursor: ${({ $closable  })=>$closable ? "pointer" : "default"};
  transition: opacity ${({ $duration  })=>$duration}ms ease;
  opacity: ${getOpacity};
`;
const ModalOverflowStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-62719b4a-1"
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  overflow: auto;
  overflow-x: hidden;
  display: flex;
`;
const getTransform = ({ $transition  })=>{
    return [
        "exiting",
        "exited"
    ].includes($transition) ? "translateY(6px)" : "translateY(0)";
};
const ModalOverlayStyles_ModalContentStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-62719b4a-2"
})`
  box-sizing: border-box;
  max-width: 100%;
  padding: ${({ theme  })=>theme.spaceMap.lg}px;
  outline: none;
  margin: auto;
  cursor: default;
  transition: transform ${({ $duration  })=>$duration}ms ease-out;
  transform: ${getTransform};
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

;// CONCATENATED MODULE: ./components/ui/modal/constants.ts
const FOCUSABLE_ELEMENTS = [
    "a[href]",
    "area[href]",
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    "select:not([disabled]):not([aria-hidden])",
    "textarea:not([disabled]):not([aria-hidden])",
    "button:not([disabled]):not([aria-hidden])",
    "iframe",
    "object",
    "embed",
    "[contenteditable]",
    '[tabindex]:not([tabindex^="-"])'
];

;// CONCATENATED MODULE: ./components/ui/modal/useModalFocus.ts



const useModalFocus = ()=>{
    const modalRef = (0,external_react_.useRef)(null);
    const getFocusableNodes = (0,external_react_.useCallback)(()=>{
        const nodes = modalRef.current?.querySelectorAll(FOCUSABLE_ELEMENTS.join(",")) ?? [];
        return Array.from(nodes).filter((node)=>node && node instanceof HTMLElement && node.offsetParent !== null);
    }, []);
    const handleRetainFocus = (0,external_react_.useCallback)((event)=>{
        const focusableNodes = getFocusableNodes();
        if (focusableNodes.length === 0) return;
        const currentElement = document.activeElement;
        const focusedItemIndex = currentElement instanceof HTMLElement && focusableNodes.indexOf(currentElement);
        if (event.shiftKey && focusedItemIndex === 0) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
        }
        if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
            focusableNodes[0].focus();
            event.preventDefault();
        }
    }, [
        getFocusableNodes
    ]);
    (0,external_react_.useEffect)(()=>{
        const handleKeyDown = (event)=>{
            if (event.code === "Tab") handleRetainFocus(event);
        };
        document.addEventListener("keydown", handleKeyDown);
        return ()=>document.removeEventListener("keydown", handleKeyDown);
    }, [
        handleRetainFocus
    ]);
    const [interceptFocus, restoreFocus] = (0,hooks/* useInterceptFocus */.ch)();
    (0,external_react_.useEffect)(()=>{
        if (!modalRef.current) return;
        interceptFocus(modalRef.current);
        return restoreFocus;
    }, [
        interceptFocus,
        restoreFocus
    ]);
    return modalRef;
};

;// CONCATENATED MODULE: ./components/ui/modal/useModalClose.ts

const useModalClose = (callback)=>{
    const ref = (0,external_react_.useRef)(null);
    const handleClick = (0,external_react_.useCallback)((event)=>{
        const contentElement = ref.current;
        if (!contentElement) return;
        if (!(event.target instanceof Node)) return;
        if (contentElement.contains(event.target)) return;
        callback?.();
    }, [
        callback
    ]);
    return {
        ref,
        handleClick
    };
};

;// CONCATENATED MODULE: ./components/ui/modal/ModalOverlay.tsx









function ModalOverlay(props, externalRef) {
    const { onClose , onBack , duration , transitionStatus , ...rest } = props;
    const closable = !!onClose;
    (0,hooks/* useEscape */.Y5)(onClose);
    (0,hooks/* useLockScroll */.F5)();
    const controlRef = useModalFocus();
    const { ref: closeRef , handleClick  } = useModalClose(onClose);
    const mergedRef = (0,hooks/* useMergeRefs */.qq)([
        controlRef,
        closeRef,
        externalRef
    ]);
    if (!utils/* modalRoot */.cV) return null;
    return /*#__PURE__*/ external_react_dom_default().createPortal(/*#__PURE__*/ jsx_runtime_.jsx(ModalPortalStyle, {
        $closable: closable,
        $duration: duration,
        $transition: transitionStatus,
        onClick: handleClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ModalOverflowStyle, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(ModalOverlayStyles_ModalContentStyle, {
                tabIndex: -1,
                role: "dialog",
                "aria-modal": "true",
                ref: mergedRef,
                $transition: transitionStatus,
                $duration: duration,
                ...rest
            })
        })
    }), utils/* modalRoot */.cV);
}
/* harmony default export */ const modal_ModalOverlay = (withTransition(/*#__PURE__*/ (0,external_react_.forwardRef)(ModalOverlay)));

;// CONCATENATED MODULE: ./components/ui/modal/Modal.tsx




function Modal(props, ref) {
    const { children , title , titleIcon , subtitle , center =false , extra , open , ...rest } = props;
    const { onClose , onBack  } = props;
    const withTitleIcon = !!titleIcon;
    const withSubtitle = !!subtitle;
    const withCloseButton = !!onClose;
    const withBackButton = !!onBack;
    const modalHeader = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalHeaderStyle, {
        $short: !title,
        children: [
            withBackButton && /*#__PURE__*/ jsx_runtime_.jsx(ModalBackStyle, {
                onClick: onBack
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalTitleStyle, {
                $center: center,
                $withTitleIcon: withTitleIcon,
                $withCloseButton: withCloseButton,
                $withBackButton: withBackButton,
                children: [
                    withTitleIcon && /*#__PURE__*/ jsx_runtime_.jsx(ModalTitleIconStyle, {
                        $center: center,
                        children: titleIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ModalTitleTextStyle, {
                        children: title
                    })
                ]
            }),
            withCloseButton && /*#__PURE__*/ jsx_runtime_.jsx(ModalCloseStyle, {
                onClick: onClose
            })
        ]
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(modal_ModalOverlay, {
        in: open,
        ...rest,
        ref: ref,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalStyle, {
            $center: center,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalBaseStyle, {
                    children: [
                        modalHeader,
                        withSubtitle && /*#__PURE__*/ jsx_runtime_.jsx(ModalSubtitleStyle, {
                            children: subtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ModalContentStyle, {
                            children: children
                        })
                    ]
                }),
                extra
            ]
        })
    });
}
/* harmony default export */ const modal_Modal = (/*#__PURE__*/(0,external_react_.forwardRef)(Modal));

;// CONCATENATED MODULE: ./components/ui/modal/ModalExtraStyles.tsx

const ModalExtraStyles_ModalExtraStyle = external_styled_components_default().div.withConfig({
    componentId: "sc-39999541-0"
})`
  margin-top: ${({ theme  })=>-theme.borderRadiusesMap.xl}px;
  color: var(--collective-color-accentContrast);
  background: var(--collective-color-accent);
  padding: ${({ theme  })=>theme.spaceMap.xxl}px;
  padding-top: ${({ theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.xxl}px;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;

  ${({ theme  })=>theme.mediaQueries.md} {
    padding: ${({ theme  })=>theme.spaceMap.lg}px;
    padding-top: ${({ theme  })=>theme.borderRadiusesMap.xl + theme.spaceMap.lg}px;
  }
`;

;// CONCATENATED MODULE: ./components/ui/modal/ModalExtra.tsx



function ModalExtra(props, ref) {
    return /*#__PURE__*/ _jsx(ModalExtraStyle, {
        ...props,
        ref: ref
    });
}
/* harmony default export */ const modal_ModalExtra = (/*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(ModalExtra))));

;// CONCATENATED MODULE: ./components/ui/modal/ModalButtonStyles.tsx


const ModalButtonStyles_ModalButtonStyle = external_styled_components_default()(ui_button/* Button */.zx).withConfig({
    componentId: "sc-84e21d3e-0"
})`
  border: ${({ active  })=>active ? `1px solid var(--collective-color-primary)` : `1px solid var(--collective-color-background)`};

  background-color: ${({ active  })=>active ? "rgba(0, 163, 255, 0.1);" : `var(--collective-color-background)`};

  color: var(--collective-color-text);

  :not(:disabled):hover,
  :focus-visible {
    background-color: rgba(0, 163, 255, 0.1);
    color: var(--collective-color-text);
  }
`;
const ModalButtonStyles_ModalButtonContentStyle = external_styled_components_default().span.withConfig({
    componentId: "sc-84e21d3e-1"
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

;// CONCATENATED MODULE: ./components/ui/modal/ModalButton.tsx



const iconSize = {
    xxs: {
        width: "16px",
        height: "16px"
    },
    xs: {
        width: "24px",
        height: "24px"
    },
    sm: {
        width: "32px",
        height: "32px"
    },
    md: {
        width: "48px",
        height: "48px"
    },
    lg: {
        width: "64px",
        height: "64px"
    }
};
function ModalButton(props, ref) {
    const { size ="md" , loading =false , children , icon  } = props;
    const AdaptiveIconProps = icon.props.width || icon.props.height ? icon.props : {
        ...iconSize[size]
    };
    const AdaptiveIcon = /*#__PURE__*/ React.cloneElement(icon, AdaptiveIconProps);
    return /*#__PURE__*/ _jsx(ModalButtonStyle, {
        type: "button",
        size: size,
        loading: loading,
        ref: ref,
        ...props,
        children: /*#__PURE__*/ _jsxs(ModalButtonContentStyle, {
            children: [
                children,
                " ",
                AdaptiveIcon
            ]
        })
    });
}
/* harmony default export */ const modal_ModalButton = (/*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(ModalButton))));

;// CONCATENATED MODULE: ./components/ui/modal/types.tsx


;// CONCATENATED MODULE: ./components/ui/modal/index.ts







/***/ }),

/***/ 4960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xv": () => (/* reexport */ text_Text)
});

// UNUSED EXPORTS: TextColor, TextSize

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ui/text/textStyles.tsx

const sizes = {
    xxs: external_styled_components_.css`
    font-size: ${({ theme  })=>theme.fontSizesMap.xxs}px;
    line-height: 1.5em;
  `,
    xs: external_styled_components_.css`
    font-size: ${({ theme  })=>theme.fontSizesMap.xs}px;
    line-height: 1.5em;
  `,
    sm: external_styled_components_.css`
    font-size: ${({ theme  })=>theme.fontSizesMap.sm}px;
    line-height: 1.5em;
  `,
    md: external_styled_components_.css`
    font-size: ${({ theme  })=>theme.fontSizesMap.md}px;
    line-height: 1.5em;
  `,
    lg: external_styled_components_.css`
    font-size: ${({ theme  })=>theme.fontSizesMap.lg}px;
    line-height: 1.4em;
  `,
    xl: external_styled_components_.css`
    font-size: ${({ theme  })=>theme.fontSizesMap.xl}px;
    line-height: 1.4em;
  `
};
const getTextColor = (props)=>{
    const { theme: { colors  } , color  } = props;
    const colorsMap = {
        default: colors.text,
        secondary: colors.textSecondary,
        primary: colors.primary,
        warning: colors.warning,
        error: colors.error,
        success: colors.success
    };
    return colorsMap[color];
};
const getTextDecoration = (props)=>{
    const { underline , strikeThrough  } = props;
    switch(true){
        case underline:
            return "underline";
        case strikeThrough:
            return "line-through";
        default:
            return "none";
    }
};
const TextStyle = external_styled_components_default().p.withConfig({
    componentId: "sc-950c8d95-0"
})`
  ${({ strong , italic , size  })=>external_styled_components_.css`
    font-style: ${italic ? "italic" : "normal"};
    font-weight: ${strong ? 700 : 400};
    margin: 0;
    padding: 0;
    color: ${getTextColor};
    text-decoration: ${getTextDecoration};
    ${sizes[size]}
  `}
`;

;// CONCATENATED MODULE: ./components/ui/text/Text.tsx



function Text(props, ref) {
    const { size ="md" , color ="default" , ...rest } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(TextStyle, {
        size: size,
        color: color,
        ref: ref,
        ...rest
    });
}
/* harmony default export */ const text_Text = (/*#__PURE__*/(0,external_react_.forwardRef)(Text));

;// CONCATENATED MODULE: ./components/ui/text/types.ts
var TextColor;
(function(TextColor) {
    TextColor[TextColor["default"] = 0] = "default";
    TextColor[TextColor["secondary"] = 1] = "secondary";
    TextColor[TextColor["primary"] = 2] = "primary";
    TextColor[TextColor["warning"] = 3] = "warning";
    TextColor[TextColor["error"] = 4] = "error";
    TextColor[TextColor["success"] = 5] = "success";
})(TextColor || (TextColor = {}));
var TextSize;
(function(TextSize) {
    TextSize[TextSize["xxs"] = 0] = "xxs";
    TextSize[TextSize["xs"] = 1] = "xs";
    TextSize[TextSize["sm"] = 2] = "sm";
    TextSize[TextSize["md"] = 3] = "md";
    TextSize[TextSize["lg"] = 4] = "lg";
    TextSize[TextSize["xl"] = 5] = "xl";
})(TextSize || (TextSize = {}));

;// CONCATENATED MODULE: ./components/ui/text/index.ts




/***/ }),

/***/ 5652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T8": () => (/* reexport */ CollectiveUIHead),
  "F3": () => (/* reexport */ Fonts),
  "Ix": () => (/* reexport */ ThemeName),
  "f6": () => (/* reexport */ ThemeProvider),
  "Qp": () => (/* reexport */ themes_themeLight),
  "M1": () => (/* reexport */ useThemeToggle)
});

// UNUSED EXPORTS: CookieThemeProvider, DEFAULT_THEME_NAME, DarkThemeProvider, LightThemeProvider, ThemeToggleContext, globalStyleDataAttribute, initColors, prefersDarkThemeMediaQuery, reverseThemeMap, themeCookieExpire, themeCookieKey, themeDark, themeDefault, themeMap

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ui/theme/constants.ts
var ThemeName;
(function(ThemeName) {
    ThemeName["light"] = "light";
    ThemeName["dark"] = "dark";
})(ThemeName || (ThemeName = {}));
const DEFAULT_THEME_NAME = ThemeName.light;
const constants_themeCookieKey = "collective-theme-manual";
const globalStyleDataAttribute = "data-collective-ui-global-style";
const constants_themeCookieExpire = 365;
const prefersDarkThemeMediaQuery =  false ? 0 : undefined;

;// CONCATENATED MODULE: ./components/ui/theme/base/colors.ts
const colors = {
    darkThemeOpacity: "0",
    lightThemeOpacity: "1",
    lightModeVisibility: "visible",
    darkModeVisibility: "hidden",
    lightDisplay: "initial",
    darkDisplay: "none",
    primary: "#00a3ff",
    primaryHover: "#009bf2",
    primaryContrast: "#fff",
    primaryVisited: "#4bbeff",
    link: "#4bbeff",
    linkHover: "#00a3ff",
    linkVisited: "#4bbeff",
    accent: "#27272e",
    accentContrast: "#fff",
    accentContrastSecondary: "rgba(255, 255, 255, 0.6)",
    accentDarken: "rgba(0, 0, 0, .2)",
    accentControlBg: "rgba(0, 0, 0, .1)",
    accentBorder: "rgba(255, 255, 255, 0.2)",
    accentBorderHover: "rgba(255, 255, 255, 0.3)",
    error: "#e14d4d",
    errorHover: "#d44c4d",
    errorContrast: "#fff",
    warning: "#EC8600",
    warningHover: "#f0a431",
    warningContrast: "#fff",
    success: "#53BA95",
    successHover: "#5dae5e",
    successContrast: "#fff"
};
/* harmony default export */ const base_colors = ({
    colors
});

;// CONCATENATED MODULE: ./components/ui/theme/base/breakpoints.ts
const sm = {
    width: "359px",
    height: "639px"
};
const md = {
    width: "479px",
    height: "799px"
};
const lg = {
    width: "767px",
    height: "1023px"
};
const xl = {
    width: "1023px",
    height: "1365px"
};
const mediaQueries = {
    sm: `@media screen and (max-width: ${sm.width})`,
    md: `@media screen and (max-width: ${md.width})`,
    lg: `@media screen and (max-width: ${lg.width})`,
    xl: `@media screen and (max-width: ${xl.width})`
};
const breakpointsMap = {
    sm,
    md,
    lg,
    xl
};
const breakpoints = [
    sm.width,
    md.width,
    lg.width,
    xl.width
];
/* harmony default export */ const base_breakpoints = ({
    breakpoints,
    breakpointsMap,
    mediaQueries
});

;// CONCATENATED MODULE: ./components/ui/theme/base/spacing.ts
const space = [
    4,
    8,
    16,
    24,
    32
];
const spaceMap = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32
};
/* harmony default export */ const spacing = ({
    space,
    spaceMap
});

;// CONCATENATED MODULE: ./components/ui/theme/base/transitions.ts
const duration = {
    fast: "100ms",
    med: "150ms",
    norm: "200ms"
};
const ease = {
    inSine: "cubic-bezier(0.47, 0, 0.745, 0.715)",
    outSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
    inOutSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
    inQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    outQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    inOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    inCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    outCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    inOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    inQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    outQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    inOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
    inQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    outQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    inOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
    inExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
    outExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
    inOutExpo: "cubic-bezier(1, 0, 0, 1)",
    inCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
    outCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
    inOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    inBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
    outBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    inOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
};
/* harmony default export */ const transitions = ({
    duration,
    ease
});

;// CONCATENATED MODULE: ./components/ui/theme/base/typography.ts
const fontSizes = [
    10,
    12,
    14,
    16,
    18,
    20,
    26,
    32,
    40,
    50
];
const fontSizesMap = {
    xxxs: 10,
    xxs: 12,
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 26,
    xxl: 32,
    xxxl: 40,
    xxxxl: 50
};
/* harmony default export */ const typography = ({
    fontSizes,
    fontSizesMap
});

;// CONCATENATED MODULE: ./components/ui/theme/base/borders.ts
const borderRadiuses = [
    4,
    6,
    8,
    10,
    12
];
const borderRadiusesMap = {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 10,
    xl: 20
};
/* harmony default export */ const borders = ({
    borderRadiuses,
    borderRadiusesMap
});

;// CONCATENATED MODULE: ./components/ui/theme/base/shadows.ts
const boxShadows = {
    xs: "0px 4px 8px 0px",
    sm: "0px 4px 12px 0px",
    md: "0px 4px 16px 0px",
    lg: "0px 8px 24px 0px",
    xl: "0px 8px 32px 0px",
    xxl: "0px 8px 44px 0px"
};
/* harmony default export */ const shadows = ({
    boxShadows
});

;// CONCATENATED MODULE: ./components/ui/theme/base/index.ts







/* harmony default export */ const base = ({
    ...spacing,
    ...base_breakpoints,
    ...base_colors,
    ...transitions,
    ...typography,
    ...borders,
    ...shadows
});

;// CONCATENATED MODULE: ./components/ui/theme/themes.ts


const themes_themeLight = {
    ...base,
    name: ThemeName.light,
    colors: {
        ...base.colors,
        darkThemeOpacity: "0",
        lightThemeOpacity: "1",
        lightModeVisibility: "visible",
        darkModeVisibility: "hidden",
        lightDisplay: "initial",
        darkDisplay: "none",
        primary: "#202020",
        primaryHover: "rgba(0, 0, 0, 0.8)",
        secondary: "#273852",
        secondaryHover: "#212f45",
        secondaryContrast: "#fff",
        background: "#1D1D1D",
        backgroundDarken: "#dae0e5",
        foreground: "#fff",
        overlay: "rgba(0, 0, 0, 0.5)",
        shadowLight: "rgba(39, 56, 82, 0.08)",
        shadowDark: "rgba(0, 0, 0, .25)",
        text: "#191919",
        textSecondary: "#808080",
        accentText: "#273852",
        border: "#f2f2f2",
        borderActive: "#f2f2f2",
        borderHover: "#f2f2f2",
        borderLight: "#f2f2f2",
        accentBorder: "#f2f2f2",
        accentBorderHover: "#f2f2f2",
        controlBg: "#f7f7f7",
        accentControlBg: "rgba(239, 242, 246, 0.56)",
        popupMenuItemBgActiveHover: "#000a3d"
    }
};
const themes_themeDark = {
    ...base,
    name: ThemeName.dark,
    colors: {
        ...base.colors,
        darkThemeOpacity: "1",
        lightThemeOpacity: "0",
        lightModeVisibility: "hidden",
        darkModeVisibility: "visible",
        lightDisplay: "none",
        darkDisplay: "initial",
        secondary: "rgba(255, 255, 255, .8)",
        secondaryHover: "#fff",
        secondaryContrast: "#273852",
        background: "#1D1D1D",
        backgroundDarken: "#131317",
        foreground: "#34343d",
        overlay: "rgba(0, 0, 0, 0.5)",
        shadowLight: "rgba(0, 0, 0, .25)",
        shadowDark: "rgba(0, 0, 0, .5)",
        text: "#fff",
        textSecondary: "rgba(255, 255, 255, .8)",
        accentText: "#fff",
        border: "rgba(255, 255, 255, 0.12)",
        borderActive: "rgba(255, 255, 255, 0.48)",
        borderHover: "rgba(255, 255, 255, 0.24)",
        borderLight: "#484855",
        accentBorder: "rgba(255, 255, 255, 0.12)",
        accentBorderHover: "rgba(255, 255, 255, 0.24)",
        controlBg: "#2f2f37",
        accentControlBg: "rgba(39, 39, 46, 0.56)",
        popupMenuItemBgActiveHover: "#fff"
    }
};
const themeMap = {
    [ThemeName.light]: themes_themeLight,
    [ThemeName.dark]: themes_themeDark
};
const reverseThemeMap = new WeakMap([
    [
        themes_themeLight,
        ThemeName.light
    ],
    [
        themes_themeDark,
        ThemeName.dark
    ]
]);
const themeDefault = themes_themeLight;

;// CONCATENATED MODULE: ./components/ui/theme/utils/cookies.ts
// TODO: use /packages/utils/cookies-client-side.ts

// we're using all-same regex in element-theme-script.tsx.
// Sadly, we cannot re-use it as this script is supposed to be inlined in document head
const cookieThemeMatcher = new RegExp(`(^| )${constants_themeCookieKey}=([^;]+)`);
const getThemeNameFromCookies = ()=>{
    if (true) {
        return null;
    }
    return (document.cookie.match(cookieThemeMatcher)?.[2]) ?? null;
};

;// CONCATENATED MODULE: ./components/ui/theme/document-head-contents/element-fonts.tsx


const CSS_FONTS = `@import url(https://fonts.googleapis.com/css2?family=Questrial:wght@200;300;400;500;600;700;800);
body {
font-family: Questrial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}`;
const Fonts = ()=>/*#__PURE__*/ jsx_runtime_.jsx("style", {
        children: CSS_FONTS
    });

;// CONCATENATED MODULE: ./components/ui/theme/utils/generate-css-color-variables.ts
const toRgb = (color)=>{
    switch(true){
        case /^#[\da-fA-F]{3}$/.test(color):
            return [
                color.slice(1, 2) + color.slice(1, 2),
                color.slice(2, 3) + color.slice(2, 3),
                color.slice(3, 4) + color.slice(3, 4)
            ].map((val)=>parseInt(val, 16));
        case /^#[\da-fA-F]{6}$/.test(color):
            return [
                color.slice(1, 3),
                color.slice(3, 5),
                color.slice(5, 7)
            ].map((val)=>parseInt(val, 16));
        case /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(color):
            return color.replace(/^.*\((.*)\).*$/, "$1").split(",").map((n)=>parseInt(n)).slice(0, 3);
        default:
            return null;
    }
};
const generateCssColorVariables = (colors)=>{
    return [
        ...Object.keys(colors)
    ].map((key)=>{
        const color = colors[key];
        const rgb = toRgb(color);
        return rgb ? `--collective-color-${key}: ${color};\n--collective-rgb-${key}: ${rgb[0]},${rgb[1]},${rgb[2]};\n` : `--collective-color-${key}: ${color};\n`;
    }).join("");
};

// EXTERNAL MODULE: ./components/ui/utils/index.ts + 2 modules
var utils = __webpack_require__(2794);
;// CONCATENATED MODULE: ./components/ui/theme/document-head-contents/element-theme-colors.tsx






/**
 * What is happening here:
 * We want to have React dehydrated HTML to be loaded after theme is initialized.
 * That means that we need to have some code executed BEFORE main react components code,
 * before even injected script itself, so we need to provide some CSS and JS in document head
 * to read the theme from cookie and make global CSS follow preferred palette.
 * This file is providing CSS themes that defines custom CSS variables with palette to
 * make HTML document styled even before any code is loaded
 * */ const darkThemeColors = generateCssColorVariables(themes_themeDark.colors);
const lightThemeColors = generateCssColorVariables(themes_themeLight.colors);
let initGlobalColors = utils/* VOID_FN */.FX;
const themeCSSValueString = `
html, [data-collective-theme='${ThemeName.light}'] {
color-theme: light;
${lightThemeColors}
}
@media (prefers-color-scheme: dark) {
html:not([data-collective-theme='${ThemeName.light}']) { 
color-theme: dark;
${darkThemeColors} 
}
}
[data-collective-theme='${ThemeName.dark}'] {
color-theme: dark;
${darkThemeColors}
}`;
if (false) {}
const StyleThemeColors = ()=>/*#__PURE__*/ jsx_runtime_.jsx("style", {
        [globalStyleDataAttribute]: true,
        dangerouslySetInnerHTML: {
            __html: themeCSSValueString
        }
    });

// EXTERNAL MODULE: external "ua-parser-js"
var external_ua_parser_js_ = __webpack_require__(9621);
;// CONCATENATED MODULE: ./components/ui/theme/utils/set-theme-cookie.ts



const setThemeCookie = (theme)=>{
    const cookie = `${themeCookieKey}=${theme};expires=${themeCookieExpire};path=/;domain=${getTopLevelDomain()};samesite=None;`;
    // 1. we want this cookie to be available on HTTP websites too.
    // 2. there is a bug on localhost which causes Chrome to ignore cookies set without Secure,
    // and Safari when cookies are set with Secure, so we're forcing cookie into both
    const parser = new UAParser();
    if (parser.getBrowser()?.name?.toLowerCase() === "safari") {
        if (window.location.protocol === "https:") {
            document.cookie = `${cookie}Secure;`;
        } else {
            document.cookie = cookie;
        }
    } else {
        document.cookie = `${cookie}Secure;`;
    }
};

;// CONCATENATED MODULE: ./components/ui/theme/document-head-contents/element-theme-script.tsx





/**
 * What is happening here:
 * We want to have React dehydrated HTML to be loaded after theme is initialized.
 * That means that we need to have some code executed BEFORE main react components code,
 * before even injected script itself, so we need to provide some CSS and JS in document head
 * to read the theme from cookie and make global CSS follow preferred palette.
 * This file is providing JS code that reads/writes cookie value, including <script> element to inject
 * */ /**
 *  this FN should be hermetic and has zero external items - it is inlined via .toString()
 *  __PURE__ annotation may throw an error on some external usage cases
 *  (with chances, but it is better than nothing)
 * */ /*#__PURE__*/ const themeScriptValueString = function(key) {
    if (!window.matchMedia) {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return ()=>{};
    }
    const match = window.matchMedia("(prefers-color-scheme: dark)");
    const setTheme = ()=>{
        const cookieMatcher = new RegExp(`(^| )${key}=([^;]+)`);
        const themeCookie = (document.cookie.match(cookieMatcher)?.[2]) ?? null;
        if (themeCookie) {
            document.documentElement.dataset.collectiveTheme = themeCookie;
        } else {
            delete document.documentElement.dataset.collectiveTheme;
        }
    };
    setTheme();
    match.addEventListener("change", setTheme);
    return setTheme;
};
// eslint-disable-next-line @typescript-eslint/no-empty-function
let updateGlobalTheme = utils/* VOID_FN */.FX;
let initGlobalCookieTheme =  true ? utils/* VOID_FN */.FX : 0;
const ScriptThemeValue = ()=>/*#__PURE__*/ jsx_runtime_.jsx("script", {
        dangerouslySetInnerHTML: {
            __html: `(${themeScriptValueString.toString()})("${constants_themeCookieKey}")`
        }
    });

;// CONCATENATED MODULE: ./components/ui/theme/document-head-contents/index.tsx






const initColors = ()=>{
    initGlobalColors();
    initGlobalCookieTheme();
};
const CollectiveUIHead = ({ cssStyleVars =true , cssFont =false , jsStyleScript =true  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            cssStyleVars ? /*#__PURE__*/ jsx_runtime_.jsx(StyleThemeColors, {}) : null,
            jsStyleScript ? /*#__PURE__*/ jsx_runtime_.jsx(ScriptThemeValue, {}) : null,
            cssFont ? /*#__PURE__*/ jsx_runtime_.jsx(Fonts, {}) : null
        ]
    });

;// CONCATENATED MODULE: ./components/ui/theme/cookie-theme-provider.tsx








const defaultThemeContext = {};
const ThemeToggleContext = /*#__PURE__*/ (0,external_react_.createContext)(defaultThemeContext);
// we need to initialize this before react component code if we're using this provider or ThemeProvider
initColors();
/**
 * This is really complicated logic here. Comments will be added on specific lines
 *
 * Cookie theme provider acts differently from common theme provider.
 * 1. it can be nested, BUT it should re-use value provided by itself for optimisation purposes
 * 2. if it is top-level, it is not altering itself, but instead altering theme behavior on HTMLElement level
 * 3. it does not support custom themes, preferring pre-defined themes instead
 * */ const CookieThemeProvider = /*#__PURE__*/ external_react_default().memo(({ children , initialThemeName , // overrideThemeName is mainly used for storybook
overrideThemeName  })=>{
    const parentTheme = (0,external_react_.useContext)(ThemeToggleContext);
    // we do not want to do nested injections, and we're checking
    // if context we inject in this component is already provided
    const isTopLevelProvider = parentTheme === defaultThemeContext;
    // we always start with default theme, or, if server wants to provide
    // specific default theme, with server-provided theme to avoid hydration errors
    const [internalThemeName, setThemeName] = (0,external_react_.useState)(initialThemeName || DEFAULT_THEME_NAME);
    // since we're using this component to provide cookie-theme,
    // we eventually want to respect theme provided in cookie, not general theme,
    // so we're picking `parentTheme.themeName` if we have one.
    // If user needs custom theme, not "cookie theme", he should use ThemeProvider instead.
    const themeName = parentTheme.themeName || internalThemeName;
    const theme = themeMap[themeName];
    // This logic is really hydrating everything, since we started with server-rendered default prop.
    // It also follows cookie value change.
    (0,external_react_.useEffect)(()=>{
        // This logic is useless if we're nested - it is already done in top-level provider
        if (!isTopLevelProvider) {
            return;
        }
        const setTheme = ()=>{
            const systemThemeName = prefersDarkThemeMediaQuery?.matches ? ThemeName.dark : ThemeName.light;
            const themeNameCookie = getThemeNameFromCookies();
            const newThemeName = // first, if we have some override (e.g. in Storybook), we respect it
            overrideThemeName || // then, if we have cookie theme, we use theme from cookie
            themeNameCookie || // else, we follow theme we were provided in initialization from server,
            // which means server explicitly wants specific theme by default, not "follow-system"
            initialThemeName || // then, we use media query theme, if available (not all browsers may still support it)
            systemThemeName || // and, finally, falling back to default
            DEFAULT_THEME_NAME;
            setThemeName(newThemeName);
            // and when theme is switched, we're setting global-level CSS variable data-attribute
            // to modify CSS vars provided on a top-level
            document.documentElement.dataset.collectiveTheme = newThemeName;
        };
        // Users may have auto-theme (switching on sunset or schedule or whatever) so we need to listen for this event
        prefersDarkThemeMediaQuery?.addEventListener("change", setTheme);
        setTheme();
        // This code check that the theme cookie was changed on other tab or site (the same second-level domain)
        const checkCookieThemeWasChanged = ()=>{
            const themeNameCookie = getThemeNameFromCookies();
            if (themeNameCookie && (themeNameCookie === ThemeName.dark || themeNameCookie === ThemeName.light)) {
                setThemeName(themeNameCookie);
            }
        };
        window.addEventListener("focus", checkCookieThemeWasChanged);
        return ()=>{
            window.removeEventListener("focus", checkCookieThemeWasChanged);
        };
    }, [
        initialThemeName,
        isTopLevelProvider,
        overrideThemeName,
        parentTheme,
        theme
    ]);
    const value = (0,external_react_.useMemo)(()=>({
            themeName,
            toggleTheme () {
                setThemeName((themeName)=>{
                    const newThemeName = themeName === ThemeName.light ? ThemeName.dark : ThemeName.light;
                    // note that we're writing cookie theme only on explicit calls,
                    // not on "internal theme state" change
                    updateGlobalTheme(newThemeName);
                    // we do not need to run setTheme here, as effect is triggered
                    return newThemeName;
                });
            }
        }), [
        themeName
    ]);
    if (isTopLevelProvider) {
        // if this provider is top-level we rely on element-theme-script.tsx logic
        // which defines data-collective-theme injection
        return /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggleContext.Provider, {
            value: value,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
                theme: theme,
                children: children
            })
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                display: "contents"
            },
            "data-collective-theme": themeName,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
                theme: theme,
                children: children
            })
        });
    }
});
CookieThemeProvider.displayName = "CookieThemeProvider";

;// CONCATENATED MODULE: ./components/ui/theme/theme-provider.tsx






// we need to initialize this before react component code if we're using this provider or CookieThemeProvider
initColors();
const StyledWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-7b59c3cc-0"
})`
  display: contents;
  ${({ colors  })=>colors ? generateCssColorVariables(colors) : null}
`;
const ThemeProvider = ({ theme =themeDefault , children , ...rest })=>{
    const internalThemeName = reverseThemeMap.get(theme);
    const props = internalThemeName ? {
        // if theme is detected as internally defined, we can just use data-collective-theme to set CSS vars instead of colors
        "data-collective-theme": internalThemeName
    } : {
        // if theme is auto-detected from cookies, it will interfere with global script logic - so we need to not provide CSS
        colors: theme.colors
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledWrapper, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
            theme: theme,
            ...rest,
            children: children
        })
    });
};
const LightThemeProvider = (props)=>/*#__PURE__*/ _jsx(ThemeProvider, {
        ...props,
        theme: themeLight
    });
const DarkThemeProvider = (props)=>/*#__PURE__*/ _jsx(ThemeProvider, {
        ...props,
        theme: themeDark
    });

;// CONCATENATED MODULE: ./components/ui/theme/hooks.ts


const useThemeToggle = ()=>{
    return (0,external_react_.useContext)(ThemeToggleContext);
};

;// CONCATENATED MODULE: ./components/ui/theme/index.ts









/***/ }),

/***/ 239:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ToastContainer)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ToastContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer).attrs({
    draggable: false
}).withConfig({
    componentId: "sc-5cb5049e-0"
})`
  /* Animations */
  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0);
    }
  }

  @keyframes Toastify__bounceInRight {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }

  @keyframes Toastify__bounceInLeft {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }

  @keyframes Toastify__bounceInUp {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }

  @keyframes Toastify__bounceInDown {
    0%,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }

  @keyframes Toastify__slideInRight {
    0% {
      transform: translate3d(110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideInLeft {
    0% {
      transform: translate3d(-110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideInUp {
    0% {
      transform: translate3d(0, 110%, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideInDown {
    0% {
      transform: translate3d(0, -110%, 0);
      visibility: visible;
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes Toastify__slideOutRight {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(110%, 0, 0);
    }
  }

  @keyframes Toastify__slideOutLeft {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-110%, 0, 0);
    }
  }

  @keyframes Toastify__slideOutDown {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 500px, 0);
    }
  }

  @keyframes Toastify__slideOutUp {
    0% {
      transform: translateZ(0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -500px, 0);
    }
  }

  @keyframes Toastify__flipIn {
    0% {
      transform: perspective(400px) rotateX(90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotateX(-20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotateX(10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotateX(-5deg);
    }
    to {
      transform: perspective(400px);
    }
  }

  @keyframes Toastify__flipOut {
    0% {
      transform: perspective(400px);
    }
    30% {
      transform: perspective(400px) rotateX(-20deg);
      opacity: 1;
    }
    to {
      transform: perspective(400px) rotateX(90deg);
      opacity: 0;
    }
  }
  /* /Animations */

  & {
    width: auto;
    max-width: calc(100vw - ${({ theme  })=>2 * theme.spaceMap.lg}px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 480px) {
      max-width: calc(100vw - ${({ theme  })=>2 * theme.spaceMap.sm}px);
    }

    &.Toastify__toast-container {
      z-index: 9999;
      transform: translateZ(9999px);
      position: fixed;
      padding: 4px;
      box-sizing: border-box;
      color: #fff;

      /* Positions */
      &--top-left {
        top: ${({ theme  })=>theme.spaceMap.lg}px;
        left: ${({ theme  })=>theme.spaceMap.lg}px;

        @media screen and (max-width: 480px) {
          top: ${({ theme  })=>theme.spaceMap.sm}px;
          left: ${({ theme  })=>theme.spaceMap.sm}px;
        }
      }
      &--top-center {
        top: ${({ theme  })=>theme.spaceMap.lg}px;
        left: 50%;
        transform: translateX(-50%);

        @media screen and (max-width: 480px) {
          top: ${({ theme  })=>theme.spaceMap.sm}px;
          left: 45%;
          transform: translateX(-40%);
        }
      }
      &--top-right {
        top: ${({ theme  })=>theme.spaceMap.lg}px;
        right: ${({ theme  })=>theme.spaceMap.lg}px;
        left: auto;

        @media screen and (max-width: 480px) {
          top: ${({ theme  })=>theme.spaceMap.sm}px;
          right: ${({ theme  })=>theme.spaceMap.sm}px;
          transform: none;
        }
      }
      &--bottom-left {
        bottom: ${({ theme  })=>theme.spaceMap.lg}px;
        left: ${({ theme  })=>theme.spaceMap.lg}px;

        @media screen and (max-width: 480px) {
          bottom: ${({ theme  })=>theme.spaceMap.sm}px;
          left: ${({ theme  })=>theme.spaceMap.sm}px;
        }
      }
      &--bottom-center {
        bottom: ${({ theme  })=>theme.spaceMap.lg}px;
        transform: translateX(-50%);
        left: 50%;

        @media screen and (max-width: 480px) {
          bottom: ${({ theme  })=>theme.spaceMap.sm}px;
          left: 45%;
          transform: translateX(-40%);
        }
      }
      &--bottom-right {
        bottom: ${({ theme  })=>theme.spaceMap.lg}px;
        right: ${({ theme  })=>theme.spaceMap.lg}px;
        left: auto;

        @media screen and (max-width: 480px) {
          bottom: ${({ theme  })=>theme.spaceMap.sm}px;
          right: ${({ theme  })=>theme.spaceMap.sm}px;
          transform: none;
        }
      }
      /* /Positions */
    }
  }

  .Toastify {
    &__toast {
      position: relative;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      direction: ltr;
      max-width: 360px;
      max-height: 800px;
      min-height: 0;

      border-radius: ${({ theme  })=>theme.borderRadiusesMap.md}px;
      box-shadow: ${({ theme  })=>theme.boxShadows.xs}
        var(--collective-color-shadowLight);
      margin: ${({ theme  })=>theme.spaceMap.xs}px 0;
      padding: ${({ theme  })=>theme.spaceMap.sm}px
        ${({ theme  })=>theme.spaceMap.md}px;
      background-color: var(--collective-color-accent);
      color: var(--collective-color-accentContrast);
      font-size: ${({ theme  })=>theme.fontSizesMap.xs}px;
      line-height: 1.3em;
      font-family: inherit;
      cursor: default;

      &-body {
        margin: auto 0;
        flex: 1 1 auto;
        padding: 6px;
      }

      a,
      a:hover {
        color: currentColor;
        text-decoration: underline;
      }
    }

    &--animate {
      animation-fill-mode: both;
      animation-duration: 0.7s;
    }

    &__progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      z-index: 9999;
      opacity: 0.7;
      background: rgba(255, 255, 255, 0.25);
      transform-origin: left;

      &--animated {
        animation: Toastify__trackProgress linear 1 forwards;
      }

      &--controlled {
        transition: transform 0.2s;
      }

      &--rtl {
        right: 0;
        left: auto;
        transform-origin: right;
      }
    }

    &__toast--rtl {
      direction: rtl;
    }

    /* Variants */
    //&__toast--dark {
    //  background: #121212;
    //  color: #fff;
    //}
    //&__toast--default {
    //  background: #fff;
    //  color: #aaa;
    //}
    &__toast--info {
      background-color: var(--collective-color-accent);
      color: var(--collective-color-accentContrast);
    }
    &__toast--error {
      background-color: var(--collective-color-error);
      color: var(--collective-color-errorContrast);
    }
    &__toast--warning {
      background-color: var(--collective-color-warning);
      color: var(--collective-color-warningContrast);
    }
    &__toast--success {
      background-color: var(--collective-color-success);
      color: var(--collective-color-successContrast);
    }
    /* /Variants */

    /* For animations */
    &__flip-enter {
      animation-name: Toastify__flipIn;
    }

    &__flip-exit {
      animation-name: Toastify__flipOut;
    }

    &__bounce-enter--bottom-left,
    &__bounce-enter--top-left {
      animation-name: Toastify__bounceInLeft;
    }

    &__bounce-enter--bottom-right,
    &__bounce-enter--top-right {
      animation-name: Toastify__bounceInRight;
    }

    &__bounce-enter--top-center {
      animation-name: Toastify__bounceInDown;
    }

    &__bounce-enter--bottom-center {
      animation-name: Toastify__bounceInUp;
    }

    &__bounce-exit--bottom-left,
    &__bounce-exit--top-left {
      animation-name: Toastify__bounceOutLeft;
    }

    &__bounce-exit--bottom-right,
    &__bounce-exit--top-right {
      animation-name: Toastify__bounceOutRight;
    }

    &__bounce-exit--top-center {
      animation-name: Toastify__bounceOutUp;
    }

    &__bounce-exit--bottom-center {
      animation-name: Toastify__bounceOutDown;
    }
    /* /For animations */
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ToastDefault */
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
/* harmony import */ var _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__, _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_0__, _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ToastDefault(content, options) {
    return toast(content, {
        ...TOASTS_DEFAULT_OPTIONS,
        ...options || {}
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ToastError */
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
/* harmony import */ var _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__, _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_0__, _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ToastError(content, options) {
    return toast.error(content, {
        ...TOASTS_ERROR_OPTIONS,
        ...options || {}
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ToastInfo)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
/* harmony import */ var _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__, _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_0__, _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ToastInfo(content, options) {
    return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.info(content, {
        ..._toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__/* .TOASTS_INFO_OPTIONS */ .VY,
        ...options || {}
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ToastPending */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var _ToastPendingStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5162);
/* harmony import */ var _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_4__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ToastPending(content, options) {
    return toast(/*#__PURE__*/ _jsxs(ToastPendingStyle, {
        children: [
            /*#__PURE__*/ _jsx(ToastPendingLoaderStyle, {}),
            /*#__PURE__*/ _jsx(ToastPendingTextStyle, {
                children: content
            })
        ]
    }), {
        ...TOASTS_PENDING_OPTIONS,
        ...options || {}
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports ToastPendingStyle, ToastPendingTextStyle, ToastPendingLoaderStyle */
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const ToastPendingStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1fd20d55-0"
})`
  display: flex;
  align-items: center;
`;
const ToastPendingTextStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1fd20d55-1"
})``;
const ToastPendingLoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_loaders__WEBPACK_IMPORTED_MODULE_0__/* .Loader */ .aN).withConfig({
    componentId: "sc-1fd20d55-2"
})`
  margin: ${({ theme  })=>-theme.spaceMap.xs}px;
  margin-right: ${({ theme  })=>theme.spaceMap.md}px;
  svg {
    color: var(--collective-color-accentContrast);
  }
`;


/***/ }),

/***/ 1945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ToastSuccess */
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
/* harmony import */ var _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__, _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_0__, _toastsDefaultOptions__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ToastSuccess(content, options) {
    return toast.success(content, {
        ...TOASTS_SUCCESS_OPTIONS,
        ...options || {}
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ix": () => (/* reexport safe */ _ToastContainer__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "yW": () => (/* reexport safe */ _ToastInfo__WEBPACK_IMPORTED_MODULE_4__.y)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
/* harmony import */ var _ToastContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(239);
/* harmony import */ var _ToastDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1113);
/* harmony import */ var _ToastError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1589);
/* harmony import */ var _ToastInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7285);
/* harmony import */ var _ToastPending__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5640);
/* harmony import */ var _ToastSuccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1945);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5248);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__, _ToastContainer__WEBPACK_IMPORTED_MODULE_1__, _ToastDefault__WEBPACK_IMPORTED_MODULE_2__, _ToastError__WEBPACK_IMPORTED_MODULE_3__, _ToastInfo__WEBPACK_IMPORTED_MODULE_4__, _ToastPending__WEBPACK_IMPORTED_MODULE_5__, _ToastSuccess__WEBPACK_IMPORTED_MODULE_6__, _types__WEBPACK_IMPORTED_MODULE_7__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_0__, _ToastContainer__WEBPACK_IMPORTED_MODULE_1__, _ToastDefault__WEBPACK_IMPORTED_MODULE_2__, _ToastError__WEBPACK_IMPORTED_MODULE_3__, _ToastInfo__WEBPACK_IMPORTED_MODULE_4__, _ToastPending__WEBPACK_IMPORTED_MODULE_5__, _ToastSuccess__WEBPACK_IMPORTED_MODULE_6__, _types__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VY": () => (/* binding */ TOASTS_INFO_OPTIONS)
/* harmony export */ });
/* unused harmony exports TOASTS_DEFAULT_OPTIONS, TOASTS_ERROR_OPTIONS, TOASTS_SUCCESS_OPTIONS, TOASTS_PENDING_OPTIONS */
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const TOASTS_DEFAULT_OPTIONS = {
    position: react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.POSITION.BOTTOM_LEFT,
    closeButton: false,
    hideProgressBar: false,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    closeOnClick: false,
    autoClose: 6000,
    icon: false,
    delay: 0
};
const TOASTS_ERROR_OPTIONS = {
    ...TOASTS_DEFAULT_OPTIONS,
    closeOnClick: true
};
const TOASTS_SUCCESS_OPTIONS = {
    ...TOASTS_DEFAULT_OPTIONS
};
const TOASTS_INFO_OPTIONS = {
    ...TOASTS_DEFAULT_OPTIONS,
    closeOnClick: true
};
const TOASTS_PENDING_OPTIONS = {
    ...TOASTS_DEFAULT_OPTIONS,
    autoClose: false
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ToastPosition */
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const ToastPosition = react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.POSITION;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FX": () => (/* binding */ VOID_FN),
  "cV": () => (/* reexport */ modalRoot)
});

// UNUSED EXPORTS: getCrossDomainCookieClientSide, getDomainCookieClientSide, getTopLevelDomain, removeCookiesClientSide, setCrossDomainCookieClientSide

;// CONCATENATED MODULE: ./components/ui/utils/modalRoot.ts
const ROOT_ID = "collective-ui-modal-root";
const ModalRoot = (()=>{
    try {
        let modalRoot = document.getElementById(ROOT_ID);
        if (!modalRoot) {
            modalRoot = document.createElement("div");
            modalRoot.id = ROOT_ID;
            document.body.append(modalRoot);
        }
        return modalRoot;
    } catch (error) {
        return null;
    }
})();
/* harmony default export */ const modalRoot = (ModalRoot);

// EXTERNAL MODULE: external "ua-parser-js"
var external_ua_parser_js_ = __webpack_require__(9621);
;// CONCATENATED MODULE: ./components/ui/utils/cookies-client-side.ts


const setCrossDomainCookieClientSide = (key, value, expire = 365)=>{
    if (true) {
        return;
    }
    const cookie = `${key}=${value};expires=${expire};path=/;domain=${getTopLevelDomain()};samesite=None;`;
    // 1. we want this cookie to be available on HTTP websites too.
    // 2. there is a bug on localhost which causes Chrome to ignore cookies set without Secure,
    // and Safari when cookies are set with Secure, so we're forcing cookie into both
    const parser = new UAParser();
    if (parser.getBrowser()?.name?.toLowerCase() === "safari") {
        if (window.location.protocol === "https:") {
            document.cookie = `${cookie}Secure;`;
        } else {
            document.cookie = cookie;
        }
    } else {
        document.cookie = `${cookie}Secure;`;
    }
};
const getCrossDomainCookieClientSide = (key)=>{
    const defaultValue = null;
    if (true) {
        return defaultValue;
    }
    const cookieMatcher = new RegExp(`(^| )${key}=([^;]+)`);
    return (document.cookie.match(cookieMatcher)?.[2]) ?? defaultValue;
};
const getDomainCookieClientSide = (key)=>{
    return getCrossDomainCookieClientSide(key);
};
const removeCookiesClientSide = (key)=>{
    document.cookie = `${key}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
};

;// CONCATENATED MODULE: ./components/ui/utils/index.ts




// eslint-disable-next-line @typescript-eslint/no-empty-function
const VOID_FN = ()=>{};


/***/ })

};
;