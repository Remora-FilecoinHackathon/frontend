import { Button, Text } from 'components/ui';
import * as React from 'react';

export default function Toggle({ selectedOption, setSelectedOption }) {
  return (
    <>
      <Text color="secondary">Manage</Text>
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
        style={{ marginBottom: '20px' }}
        onClick={() => setSelectedOption('Borrower')}
      >
        Borrower
      </Button>
    </>
  );
}
