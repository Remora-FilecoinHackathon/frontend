import { Button, Heading, Text } from 'components/ui';
import * as React from 'react';
import styled from 'styled-components';

export default function Toggle({ selectedOption, setSelectedOption }) {
  const HeadingWrapper = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
  `;
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
        onClick={() => setSelectedOption('Lender')}
      >
        Lender
      </Button>
      <Button
        color={'secondary'}
        fullwidth
        variant={selectedOption === 'Borrower' ? 'translucent' : 'ghost'}
        style={{ marginBottom: '10px' }}
        onClick={() => setSelectedOption('Borrower')}
      >
        Borrower
      </Button>
    </>
  );
}
