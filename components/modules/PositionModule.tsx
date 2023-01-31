import NormalBlock from 'components/normalBlock';
import { Fil } from 'components/ui';
import React from 'react';
import moment from 'moment';

const PositionModule = ({
  liquidity,
  interestRate,
  duration,
  loanKey,
  handleSelected,
  isSelected,
}) => {
  return (
    <NormalBlock
      onClick={handleSelected(loanKey)}
      style={{
        border:
          isSelected === loanKey
            ? '1px solid var(--secondary-color)'
            : '1px solid #353535;',
        cursor: 'pointer',
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
          <p style={{ color: 'var(--primary-color)' }}>
            {moment(
              moment.unix(duration / 1000).format('MM/DD/YYYY'),
            ).fromNow()}
          </p>
          <p>Duration</p>
        </div>
      </div>
    </NormalBlock>
  );
};

export default PositionModule;
