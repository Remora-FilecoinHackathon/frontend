import NormalBlock from 'components/normalBlock';
import { Fil } from 'components/ui';
import React from 'react';
import moment from 'moment';

const PositionModule = ({
  liquidity,
  interestRate,
  endDate,
  loanKey,
  handleSelectedLoanKey,
  isSelectedLoanKey,
}) => {
  const toggleSelection = () => {
    handleSelectedLoanKey(isSelectedLoanKey === loanKey ? '' : loanKey);
  };
  return (
    <NormalBlock
      onClick={+moment() < endDate ? toggleSelection : undefined}
      style={{
        border:
          isSelectedLoanKey === loanKey
            ? '1px solid var(--secondary-color)'
            : '1px solid #353535',
        cursor: +moment() < endDate ? 'pointer' : 'not-allowed',
        opacity: +moment() < endDate ? 1 : 0.5,
      }}
    >
      <div style={{ marginLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', margin: '8px' }}>
          <p style={{ fontSize: '28px', color: 'white', fontStyle: 'bold' }}>
            {liquidity}
          </p>
          <Fil style={{ marginLeft: '12px' }} />
        </div>
        <p>Available Liquidity</p>
      </div>
      <div style={{ marginRight: '20px' }}>
        <div>
          <p style={{ color: 'var(--secondary-color)' }}>{interestRate}%</p>
          <p>Interest Rate</p>
        </div>
        <div>
          <p
            style={{
              color: +moment() < endDate ? 'var(--primary-color)' : 'red',
            }}
          >
            {moment(moment.unix(endDate / 1000).format('MM/DD/YYYY')).fromNow()}
          </p>
          <p>Duration</p>
        </div>
      </div>
    </NormalBlock>
  );
};

export default PositionModule;
