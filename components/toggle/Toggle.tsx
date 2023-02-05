import { Button, Heading, Text } from 'components/ui';
import * as React from 'react';
import styled from 'styled-components';

export default function Toggle({
  selectedOption,
  setSelectedOption,
  setIsBorrower,
  setIsLender,
}) {
  const HeadingWrapper = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
  `;
  const toggleLender = () => {
    setIsBorrower(false);
    setSelectedOption('Lender');
    setIsLender(true);
    console.log('lender button');
  };
  const toggleBorrower = () => {
    setIsLender(false);
    setSelectedOption('Borrower');
    setIsBorrower(true);
    console.log('borrower button');
  };

  return (
    <>
      <HeadingWrapper>
        <Heading size="sm"> Select lender or borrower options</Heading>
      </HeadingWrapper>

      <Button
        color={'secondary'}
        fullwidth
        variant={selectedOption === 'Lender' ? 'translucent' : 'ghost'}
        style={{ marginBottom: '10px' }}
        onClick={toggleLender}
      >
        Lender
      </Button>
      <Button
        color={'secondary'}
        fullwidth
        variant={selectedOption === 'Borrower' ? 'translucent' : 'ghost'}
        style={{ marginBottom: '10px' }}
        onClick={toggleBorrower}
      >
        Borrower
      </Button>
    </>
  );
}
