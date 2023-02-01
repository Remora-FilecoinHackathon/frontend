import { Fil } from 'components/ui';
import React, { useEffect } from 'react';
import moment from 'moment';
import StackedBlock from 'components/stackedBlock';

const ActivePositionModule = ({
  liquidity,
  interestRate,
  endDate,
  loanKey,
  handleSelected,
  isSelected,
}) => {
  return (
    <StackedBlock
      onClick={() => handleSelected(loanKey)}
      style={{
        border:
          isSelected === loanKey
            ? '1px solid var(--secondary-color)'
            : '1px solid #353535',
        cursor: 'pointer',
        marginBottom: '60px',
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
    </StackedBlock>
  );
};

export default ActivePositionModule;
