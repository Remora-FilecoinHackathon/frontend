"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[840],{5012:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(5893),i=t(6024),o=t(5077),l=t(7484),s=t(3100),c=t(6008),a=t(1855),d=function(n){return(0,r.jsxs)(i.U,{children:[(0,r.jsxs)(o.Q,{children:[(0,r.jsxs)(l.K,{fontFamily:"Questrial",background:"transparent",color:"var(--collective-color-textSecondary)",border:"0",fontSize:"15px",borderTop:"0.5px solid #323232",children:[(0,r.jsx)(s.xu,{as:"span",flex:"1",textAlign:"left",margin:"20px",marginLeft:"0px",children:"What is $FIL?"}),(0,r.jsx)(c.X,{})]}),(0,r.jsx)(a.H,{pb:4,marginBottom:"20px",children:"Filecoin’s cryptocurrency, FIL, is the native token powering its network. That means FIL is used to pay for storage and retrieval, and for any other transactions on the network."})]}),(0,r.jsxs)(o.Q,{children:[(0,r.jsxs)(l.K,{fontFamily:"Questrial",background:"transparent",color:"var(--collective-color-textSecondary)",border:"0",borderTop:"0.5px solid #323232",fontSize:"15px",children:[(0,r.jsx)(s.xu,{as:"span",flex:"1",textAlign:"left",margin:"20px",marginLeft:"0px",children:"What is a lender?"}),(0,r.jsx)(c.X,{})]}),(0,r.jsx)(a.H,{pb:4,marginBottom:"20px",children:"A user who owns $FIL can become a lender and then make their $FIL available for loans. The lender's position can be filled by multiple borrowers. The lender can redeem the borrower rates to repay the loan once a month."})]}),(0,r.jsxs)(o.Q,{children:[(0,r.jsxs)(l.K,{fontFamily:"Questrial",background:"transparent",color:"var(--collective-color-textSecondary)",border:"0",fontSize:"15px",borderTop:"0.5px solid #323232",children:[(0,r.jsx)(s.xu,{as:"span",flex:"1",textAlign:"left",margin:"20px",marginLeft:"0px",children:"What is a borrower?"}),(0,r.jsx)(c.X,{})]}),(0,r.jsx)(a.H,{pb:4,marginBottom:"20px",children:"A borrower chooses the best loan for their need from among the available (as yet unfilled) loans based on their needs of becoming a Storage Provider. A borrower repays their debt from the rewards of storage providing on Filecoin."})]})]})}},7938:function(n,e,t){t.d(e,{Z:function(){return j}});var r=t(5893),i=t(7297),o=t(186);function l(){let n=(0,i.Z)(["\n  padding: 45px 0;\n  text-align: center;\n"]);return l=function(){return n},n}let s=o.ZP.div.withConfig({componentId:"sc-4a5de703-0"})(l());var c=t(3821),a=t(3964),d=t(7294),u=t(795);function f(){let n=(0,i.Z)(["\n	display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-size: 12px;\n"]);return f=function(){return n},n}function x(){let n=(0,i.Z)(["\n	margin-top: 15px;\n"]);return x=function(){return n},n}function h(){let n=(0,i.Z)(["\n	margin-top: 15px;\n"]);return h=function(){return n},n}let p=o.ZP.div.withConfig({componentId:"sc-fc0d99d5-0"})(f());(0,o.ZP)(u.zx).withConfig({componentId:"sc-fc0d99d5-1"})(x());let C=(0,o.ZP)(u.H3).withConfig({componentId:"sc-fc0d99d5-2"})(h());var g=function(n){let{chains:e,...t}=n;return(0,r.jsxs)(p,{...t,children:[(0,r.jsx)(u.hY,{}),(0,r.jsx)(C,{size:"sm",children:"Unsupported chain"}),(0,r.jsxs)(u.xv,{children:["Please switch to ",e," in your wallet"]})]})};let m=()=>{let{error:n}=(0,c.$6)(),{isUnsupported:e,supportedChains:t}=(0,c.En)(),i=(0,d.useMemo)(()=>{if(1===t.length){let{chainId:n,name:e}=t[0],i=a.zG[n]||e;return(0,r.jsx)(u.rU,{href:"https://chainlist.org/?testnets=true&search=".concat(i),children:i})}let o=t.reduce((n,e,t,i)=>{let{chainId:o,name:l}=e,s=a.zG[o]||l,c="https://chainlist.org/chain/".concat(o);return 0===t&&n.push((0,r.jsx)(u.rU,{href:c,children:s},s)),t>0&&t!==i.length-1&&(n.push(", "),n.push((0,r.jsx)(u.rU,{href:c,children:s},s))),t===i.length-1&&(n.push(" or "),n.push((0,r.jsx)(u.rU,{href:c,children:s},s))),n},[]);return(0,r.jsx)(r.Fragment,{children:o})},[t]);return e?(0,r.jsx)(g,{chains:i}):null==n?void 0:n.message};var j=function(n){let e=m();return e?(0,r.jsx)(s,{...n,children:e}):null}},8231:function(n,e,t){t.d(e,{I5:function(){return a},Xv:function(){return d},v$:function(){return u}});var r=t(7297),i=t(1397),o=t(186);function l(){let n=(0,r.Z)(["\n  padding-top: 18px;\n  padding-bottom: 18px;\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n"]);return l=function(){return n},n}function s(){let n=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  flex-shrink: 0;\n  margin-right: ","px;\n"]);return s=function(){return n},n}function c(){let n=(0,r.Z)(["\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  flex-shrink: 1;\n  overflow: hidden;\n"]);return c=function(){return n},n}let a=(0,o.ZP)(i.W).withConfig({componentId:"sc-82f02d34-0"})(l()),d=o.ZP.div.withConfig({componentId:"sc-82f02d34-1"})(s(),n=>{let{theme:e}=n;return e.spaceMap.xxl}),u=o.ZP.div.withConfig({componentId:"sc-82f02d34-2"})(c())},5157:function(n,e,t){t.d(e,{Z:function(){return E}});var r=t(5893),i=t(7297),o=t(1664),l=t.n(o),s=t(9869),c=t(186),a=t(8231),d=t(3964),u=t(6287),f=t(3821),x=t(7294),h=t(795);function p(){let n=(0,i.Z)(["\n  display: inline-flex;\n  align-items: center;\n  padding: 14px 21px;\n  border-radius: 15px;\n  background: var(--collective-color-background);\n  color: var(--collective-color-text);\n  text-transform: none;\n"]);return p=function(){return n},n}function C(){let n=(0,i.Z)(["\n  margin-left: 15px;\n"]);return C=function(){return n},n}let g=c.ZP.span.withConfig({componentId:"sc-652a8723-0"})(p()),m=c.ZP.div.withConfig({componentId:"sc-652a8723-1"})(C()),j=n=>{let{address:e,...t}=n,i=(0,h.Gc)("md");return(0,r.jsxs)(g,{children:[(0,r.jsx)(h.w5,{}),(0,r.jsx)(m,{children:(0,r.jsx)(h.kL,{symbols:i?3:6,address:null!=e?e:"",...t})})]})};var w=t(241),v=t(5553);function Z(){let n=(0,i.Z)(["\n  flex-shrink: 1;\n  min-width: unset;\n  overflow: hidden;\n  padding: 5px 5px 5px 20px;\n  border-radius: 20px;\n  background: rgb(52, 248, 153);\n  background: linear-gradient(\n    65deg,\n    rgba(52, 248, 153, 1) 0%,\n    rgba(0, 194, 255, 1) 100%\n  );\n"]);return Z=function(){return n},n}function b(){let n=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  // margin: -10px -18px;\n"]);return b=function(){return n},n}function y(){let n=(0,i.Z)(["\n  margin-right: 12px;\n  margin-left: 4px;\n  font-size: ","px;\n  "," {\n    display: none;\n  }\n"]);return y=function(){return n},n}function M(){let n=(0,i.Z)(["\n  width: 60px;\n"]);return M=function(){return n},n}let I=(0,c.ZP)(h.zx).withConfig({componentId:"sc-2cbcc72-0"})(Z()),H=c.ZP.span.withConfig({componentId:"sc-2cbcc72-1"})(b()),_=c.ZP.span.withConfig({componentId:"sc-2cbcc72-2"})(y(),n=>{let{theme:e}=n;return e.fontSizesMap.xs},n=>{let{theme:e}=n;return e.mediaQueries.md});(0,c.ZP)(h.Gl).withConfig({componentId:"sc-2cbcc72-3"})(M());var k=t(6472);let F=n=>{let{amount:e,symbol:t,approx:i=!1,...o}=n,l=!i||(null==e?void 0:e.isZero())?"":"≈ ";return(0,r.jsxs)("span",{...o,children:[l,e,"\xa0",t]})};var z=t(6019);let P=n=>{let[e,t]=(0,x.useState)(""),{onClick:i,...o}=n,{openModal:l}=(0,k.dd)(z.zr.wallet),{account:s}=(0,u.eC)();async function c(n){let e=new w.Q(window.ethereum),r=await e.getBalance(n),i=v.dF(r),o=Number(i).toFixed(2);t(o)}return(0,x.useEffect)(()=>{s&&c(s)},[s]),(0,r.jsx)(I,{size:"sm",variant:"text",color:"main",onClick:l,...o,children:(0,r.jsxs)(H,{children:[(0,r.jsx)(_,{children:(0,r.jsx)(F,{amount:e,symbol:"tFIL"})}),(0,r.jsx)(j,{address:s})]})})},L=n=>{let{onClick:e,...t}=n,{openModal:i}=(0,k.dd)(z.zr.connect);return(0,r.jsx)(h.zx,{onClick:i,...t,children:"Connect wallet"})};function V(){let n=(0,i.Z)(["\n  margin-right: ","px;\n  color: ",";\n  line-height: 1.2em;\n"]);return V=function(){return n},n}let S=c.ZP.span.withConfig({componentId:"sc-92c9cea1-0"})(V(),n=>{let{theme:e}=n;return e.spaceMap.xl},n=>{let{$color:e}=n;return e}),B=()=>{let{active:n}=(0,f.$6)(),{chainId:e}=(0,u.eC)();d.zG[e];let t=e!==d.zG.FilecoinMainnet;return(0,r.jsxs)(r.Fragment,{children:[t&&n&&(0,r.jsx)(S,{$color:(0,d.EG)(e)}),n?(0,r.jsx)(P,{}):(0,r.jsx)(L,{size:"sm"})]})};function A(){let n=(0,i.Z)(["\n  margin-left: 18px;\n  font-weight: bold;\n  color: ;\n"]);return A=function(){return n},n}let G=c.ZP.div.withConfig({componentId:"sc-4f3b42bd-0"})(A()),U=()=>(0,r.jsxs)(a.I5,{size:"full",forwardedAs:"header",children:[(0,r.jsxs)(a.Xv,{children:[(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)(s.T,{})}),(0,r.jsx)(G,{children:(0,r.jsx)(l(),{href:"/lend",children:"Lend"})}),(0,r.jsx)(G,{children:(0,r.jsx)(l(),{href:"/borrow",children:"Borrow"})}),(0,r.jsx)(G,{children:(0,r.jsx)(l(),{href:"/manage",children:"Manage"})})]}),(0,r.jsx)(a.v$,{children:(0,r.jsx)(B,{})})]});var Q=t(3466);let T=n=>(0,r.jsx)(Q.E,{size:"tight",forwardedAs:"main",...n}),$=n=>{let{children:e}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U,{}),(0,r.jsx)(T,{children:e})]})};var E=$},9869:function(n,e,t){t.d(e,{T:function(){return a}});var r=t(5893),i=t(7294),o=t(7297),l=t(186);function s(){let n=(0,o.Z)(["\n  color: var(--collective-color-text);\n  line-height: 0;\n  display: flex;\n"]);return s=function(){return n},n}let c=l.ZP.div.withConfig({componentId:"sc-21fdda9f-0"})(s());var a=(0,i.forwardRef)(function(n,e){return(0,r.jsx)(c,{...n,ref:e,children:(0,r.jsxs)("svg",{width:"197",height:"57",viewBox:"0 0 197 57",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{filter:"url(#filter0_d_10_106)",children:(0,r.jsx)("path",{d:"M80.2703 21C79.5983 20.84 78.9583 20.776 78.3823 20.776C76.2383 20.776 74.8303 21.832 74.1583 23.4L73.9023 21.032H69.2623V37H74.1903V30.056C74.1903 26.888 75.8863 25.64 78.7023 25.64H80.2703V21ZM89.7175 37.416C94.1015 37.416 97.2695 35.144 97.8455 31.592H93.3335C92.9815 32.744 91.6695 33.416 89.8135 33.416C87.6375 33.416 86.4535 32.424 86.1655 30.312L97.7815 30.248V29C97.7815 23.784 94.6455 20.488 89.6215 20.488C84.7895 20.488 81.4295 23.976 81.4295 28.968C81.4295 33.896 84.8855 37.416 89.7175 37.416ZM89.6535 24.488C91.6375 24.488 92.8855 25.576 92.8855 27.272H86.2295C86.6135 25.352 87.7015 24.488 89.6535 24.488ZM105.628 37V28.424C105.628 25.736 107.068 24.968 108.476 24.968C110.044 24.968 111.068 25.928 111.068 27.912V37H115.996V28.424C115.996 25.704 117.404 24.936 118.812 24.936C120.38 24.936 121.436 25.896 121.436 27.912V37H126.364V26.536C126.364 22.888 124.316 20.488 120.188 20.488C117.884 20.488 115.996 21.608 115.164 23.304C114.236 21.608 112.7 20.488 110.3 20.488C107.996 20.488 106.428 21.544 105.628 22.664L105.308 21H100.7V37H105.628ZM129.023 28.968C129.023 34.024 132.735 37.384 137.855 37.384C142.943 37.384 146.655 34.024 146.655 28.968C146.655 23.912 142.943 20.52 137.855 20.52C132.735 20.52 129.023 23.912 129.023 28.968ZM133.983 28.936C133.983 26.536 135.551 24.936 137.855 24.936C140.127 24.936 141.695 26.536 141.695 28.936C141.695 31.368 140.127 32.968 137.855 32.968C135.551 32.968 133.983 31.368 133.983 28.936ZM160.52 21C159.848 20.84 159.208 20.776 158.632 20.776C156.488 20.776 155.08 21.832 154.408 23.4L154.152 21.032H149.512V37H154.44V30.056C154.44 26.888 156.136 25.64 158.952 25.64H160.52V21ZM167.219 37.416C169.619 37.416 171.731 36.36 172.243 34.888L172.563 37H176.915V27.656C176.915 23.08 174.291 20.488 169.651 20.488C165.075 20.488 162.099 22.856 162.099 26.472H166.195C166.195 25.032 167.315 24.232 169.395 24.232C171.155 24.232 172.115 25.064 172.115 26.632V26.888L167.635 27.24C163.795 27.528 161.715 29.352 161.715 32.296C161.715 35.432 163.827 37.416 167.219 37.416ZM168.947 33.768C167.443 33.768 166.739 33.224 166.739 32.072C166.739 31.048 167.507 30.568 169.651 30.376L172.147 30.152V31.016C172.147 32.84 170.835 33.768 168.947 33.768Z",fill:"url(#paint0_linear_10_106)"})}),(0,r.jsxs)("g",{"clip-path":"url(#clip0_10_106)",children:[(0,r.jsx)("path",{d:"M54.8298 21.6311C53.7451 20.2096 52.0977 19.3944 50.3095 19.3944H14.1223C14.8113 18.3162 15.454 16.8813 15.454 15.2773C15.454 11.8932 12.5935 9.25839 12.4718 9.14792C12.0465 8.76193 11.3977 8.76193 10.9725 9.14792C10.8508 9.2585 7.99052 11.8932 7.99052 15.2773C7.99052 15.9245 8.09574 16.5441 8.26582 17.124C7.6858 16.9539 7.0663 16.8487 6.41891 16.8487C3.03484 16.8487 0.400098 19.7091 0.289519 19.8308C-0.0964658 20.2562 -0.0964658 20.905 0.289519 21.3302C0.400098 21.452 3.03484 24.3123 6.41891 24.3123C8.15458 24.3123 9.69185 23.56 10.7938 22.8105C11.476 29.6316 15.167 35.8121 20.9606 39.6568C22.558 40.717 24.2743 41.5683 26.0747 42.1966C25.3615 44.1182 25.4368 45.9642 25.4423 46.0763C25.4701 46.6499 25.9289 47.1087 26.5025 47.1364C26.5245 47.1375 26.6134 47.1413 26.7566 47.1413C27.6819 47.1413 30.8733 46.9831 32.9453 44.911C33.3856 44.4708 33.7388 43.98 34.0229 43.4713C42.9997 43.3235 51.0841 37.9531 54.6922 29.7041C55.1341 28.6938 55.5049 27.6453 55.7946 26.5876C56.2672 24.8609 55.9156 23.0542 54.8298 21.6311ZM6.41858 22.0814C4.95032 22.0814 3.60053 21.2367 2.77518 20.5824C3.60348 19.9275 4.95765 19.08 6.41858 19.08C7.8865 19.08 9.23608 19.9243 10.0619 20.579C9.23379 21.234 7.8795 22.0814 6.41858 22.0814ZM10.2212 15.2774C10.2212 13.8077 11.0672 12.4571 11.722 11.632C12.377 12.4576 13.2228 13.8082 13.2228 15.2774C13.2228 16.7467 12.3771 18.0971 11.722 18.9228C11.0669 18.0972 10.2212 16.7468 10.2212 15.2774ZM31.3675 43.3337C30.3285 44.3726 28.7756 44.7295 27.7287 44.8502C27.8492 43.8031 28.2061 42.2502 29.2453 41.2113C30.2844 40.1722 31.8378 39.8153 32.8841 39.6947C32.7635 40.7416 32.4066 42.2946 31.3675 43.3337ZM34.8811 41.2048C35.2231 39.7509 35.1747 38.5579 35.1705 38.4685C35.1427 37.8949 34.6839 37.4361 34.1103 37.4083C33.9462 37.4002 30.0605 37.2406 27.6674 39.6337C27.4835 39.8177 27.3164 40.0111 27.1615 40.2104C25.8529 39.78 24.5914 39.2199 23.3932 38.5367C32.0846 30.5891 42.0946 30.1511 45.0429 30.2145C46.2357 30.2403 47.2248 30.2523 48.1553 30.2523H51.9502C48.5616 36.6161 42.0932 40.7747 34.8811 41.2048ZM53.6424 25.9988C53.4559 26.6802 53.2319 27.3575 52.9738 28.0212H48.1554C47.2413 28.0212 46.2676 28.0093 45.0911 27.9839C41.8793 27.9146 30.8574 28.3976 21.4588 37.2873C16.3888 33.6027 13.271 27.8656 12.9379 21.6255H50.3096C51.3961 21.6255 52.3971 22.1208 53.0561 22.9845C53.7165 23.8497 53.9301 24.9484 53.6424 25.9988Z",fill:"white"}),(0,r.jsx)("path",{d:"M47.0965 23.2846C46.3892 23.2846 45.8137 23.8601 45.8137 24.5674C45.8137 25.2748 46.3892 25.8503 47.0965 25.8503C47.8039 25.8503 48.3794 25.2748 48.3794 24.5674C48.3794 23.8601 47.8039 23.2846 47.0965 23.2846Z",fill:"white"}),(0,r.jsx)("path",{d:"M28.7802 22.534H16.2864C15.6704 22.534 15.1709 23.0334 15.1709 23.6495C15.1709 24.2657 15.6704 24.7651 16.2864 24.7651H28.7802C29.3963 24.7651 29.8958 24.2657 29.8958 23.6495C29.8958 23.0334 29.3962 22.534 28.7802 22.534Z",fill:"#34F899"}),(0,r.jsx)("path",{d:"M32.4615 22.534H32.2384C31.6224 22.534 31.1228 23.0334 31.1228 23.6495C31.1228 24.2657 31.6224 24.7651 32.2384 24.7651H32.4615C33.0775 24.7651 33.577 24.2657 33.577 23.6495C33.577 23.0334 33.0775 22.534 32.4615 22.534Z",fill:"#34F899"})]}),(0,r.jsxs)("defs",{children:[(0,r.jsxs)("filter",{id:"filter0_d_10_106",x:"57.2622",y:"7.48801",width:"139.653",height:"48.928",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,r.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,r.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,r.jsx)("feOffset",{dx:"4",dy:"3"}),(0,r.jsx)("feGaussianBlur",{stdDeviation:"8"}),(0,r.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,r.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.983333 0 0 0 0 0.983333 0 0 0 0 0.983333 0 0 0 0.25 0"}),(0,r.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_10_106"}),(0,r.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_10_106",result:"shape"})]}),(0,r.jsxs)("linearGradient",{id:"paint0_linear_10_106",x1:"149.413",y1:"56",x2:"64.5783",y2:"67.2497",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{"stop-color":"white"}),(0,r.jsx)("stop",{offset:"1","stop-color":"white"})]}),(0,r.jsx)("clipPath",{id:"clip0_10_106",children:(0,r.jsx)("rect",{width:"56",height:"56",fill:"white"})})]})]})})})},3466:function(n,e,t){t.d(e,{E:function(){return s}});var r=t(7297),i=t(795),o=t(186);function l(){let n=(0,r.Z)(["\n  position: relative;\n  margin-top: ","px;\n  margin-bottom: ","px;\n"]);return l=function(){return n},n}let s=(0,o.ZP)(i.W2).withConfig({componentId:"sc-35591cba-0"})(l(),n=>{let{theme:e}=n;return e.spaceMap.sm},n=>{let{theme:e}=n;return e.spaceMap.sm})}}]);