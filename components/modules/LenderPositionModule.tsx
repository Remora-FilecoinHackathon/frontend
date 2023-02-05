import { Fil, Text } from 'components/ui';
import React, { useEffect } from 'react';
import moment from 'moment';
import StackedBlock from 'components/stackedBlock';

const LenderPositionModule = ({
  loanAmount,
  interestRate,
  endDate,
  handleSelectedEscrow,
  isSelectedEscrow,
  escrowAddress,
  isStarted,
}) => {
  const toggleSelection = () => {
    handleSelectedEscrow(
      isSelectedEscrow === escrowAddress ? '' : escrowAddress,
    );
  };
  console.log(`This is ${loanAmount}`);
  return (
    <>
      <Text size="xxs" color="secondary">
        Escrow Address: {escrowAddress}
      </Text>
      <StackedBlock
        onClick={toggleSelection}
        style={{
          border:
            isSelectedEscrow === escrowAddress
              ? '1px solid var(--secondary-color)'
              : '1px solid #353535',
          cursor: 'pointer',
          marginBottom: '60px',
        }}
      >
        <div style={{ marginLeft: '20px', justifyContent: 'left' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'left',
            }}
          >
            <p
              style={{
                display: 'flex',
                fontSize: '28px',
                color: 'white',
                fontStyle: 'bold',
                alignItems: 'center',
              }}
            >
              {loanAmount}
            </p>
            <Fil style={{ marginLeft: '12px' }} />
          </div>
          <p style={{ display: 'flex', alignItems: 'left' }}>
            Available Liquidity
          </p>
        </div>
        <div style={{ marginRight: '20px', justifyContent: 'right' }}>
          <div style={{ display: 'display', textAlign: 'right' }}>
            <p style={{ color: 'var(--secondary-color)' }}>
              {interestRate}{' '}
              <span style={{ color: 'var(--white-color)' }}>Fil</span>
            </p>
            <p>Monthly Interest Amount</p>
          </div>
          <div style={{ display: 'display', textAlign: 'right' }}>
            <p
              style={{
                color: +moment() < endDate ? 'var(--primary-color)' : 'red',
              }}
            >
              {moment(
                moment.unix(endDate / 1000).format('MM/DD/YYYY'),
              ).fromNow()}
            </p>
            <p>Duration</p>
          </div>
        </div>
      </StackedBlock>
    </>
  );
};

export default LenderPositionModule;
