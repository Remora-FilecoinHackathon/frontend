"use strict";
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 6714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ stackedBlock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/stackedBlock/stackedBlockStyles.tsx

const StackedBlockStyles = external_styled_components_default().div.withConfig({
    componentId: "sc-1609144d-0"
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

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: #373737;
    border: 2px solid #191919;
    border-radius: 30px;
  }

  &::before {
    top: 12px;
    bottom: -12px;
    left: -12px;
    right: 12px;
    z-index: -1;
  }
`;

;// CONCATENATED MODULE: ./components/stackedBlock/stackedBlock.tsx


function StackedBlock(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(StackedBlockStyles, {
        ...props
    });
}
/* harmony default export */ const stackedBlock = (StackedBlock);

;// CONCATENATED MODULE: ./components/stackedBlock/index.ts



/***/ }),

/***/ 5317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ mainContractAddress)
/* harmony export */ });
const mainContractAddress = "0x3f06D24C8F7F6E1eE99Db84A03b3563C89345A05";


/***/ }),

/***/ 7562:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_oracle","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"Empty_Amount","type":"error"},{"inputs":[],"name":"Empty_Lender","type":"error"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Impossible_Borrower","type":"error"},{"inputs":[{"internalType":"uint256","name":"max","type":"uint256"}],"name":"InterestRate_Too_High","type":"error"},{"inputs":[],"name":"Loan_No_More_Available","type":"error"},{"inputs":[],"name":"Loan_Period_Excedeed","type":"error"},{"inputs":[],"name":"Miner_Bad_Reputation","type":"error"},{"inputs":[],"name":"Miner_Reputation_Value","type":"error"},{"inputs":[],"name":"No_Borrower_Permissions","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"escrow","type":"address"},{"indexed":false,"internalType":"uint256","name":"loanAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountToReapy","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lenderAmountAvailable","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountToPay","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"key","type":"uint256"},{"indexed":true,"internalType":"address","name":"minerActor","type":"address"}],"name":"BorrowOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"requestId","type":"uint256"},{"indexed":false,"internalType":"address","name":"minerActor","type":"address"}],"name":"CheckReputation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"key","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestRate","type":"uint256"}],"name":"LenderPosition","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"MinerMockAPIDeployed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"requestId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"response","type":"uint256"},{"indexed":false,"internalType":"address","name":"minerAddress","type":"address"}],"name":"ReputationReceived","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"borrowerPositions","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"bps","type":"uint256"}],"name":"calculateInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"minerActorAddress","type":"address"}],"name":"checkReputation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"loanKey","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"minerActorAddress","type":"address"}],"name":"createBorrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"loanInterestRate","type":"uint256"}],"name":"createLendingPosition","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currentId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deployMockMinerActor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"escrowContracts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"borrower","type":"address"}],"name":"getEscrowForBorrowers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLoanKeysLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"minerActorAddress","type":"address"}],"name":"isControllingAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"loanKeys","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ownerToMinerActor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"positions","outputs":[{"internalType":"address","name":"lender","type":"address"},{"internalType":"uint256","name":"availableAmount","type":"uint256"},{"internalType":"uint256","name":"endTimestamp","type":"uint256"},{"internalType":"uint256","name":"interestRate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"},{"internalType":"uint256","name":"response","type":"uint256"}],"name":"receiveReputationScore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"reputationRequest","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"reputationResponse","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');

/***/ })

};
;