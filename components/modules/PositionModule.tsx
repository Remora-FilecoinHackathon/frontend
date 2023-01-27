import NormalBlock from 'components/normalBlock';
import { Fil } from 'components/ui';
import React from 'react';

const PositionModule = ({ openModal, liquidity, interestRate, duration }) => {
  return (
    <NormalBlock onClick={openModal}>
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
          <p style={{ color: 'var(--primary-color)' }}>{duration} months</p>
          <p>Duration</p>
        </div>
      </div>
    </NormalBlock>
  );
};

export default PositionModule;
