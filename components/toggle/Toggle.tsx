import { Button } from 'components/ui';
import React, { useState } from 'react';

const Toggle = ({ selectedOption, setSelectedOption }) => {
  const handleOptionChange = () => {
    setSelectedOption((prevOption) => {
      return prevOption === 'lenders' ? 'borrowers' : 'lenders';
    });
  };

  return (
    <div>
      <Button
        onClick={handleOptionChange}
        className={`toggle-button ${
          selectedOption === 'lenders' ? 'left' : 'right'
        }`}
      ></Button>
    </div>
  );
};

export default Toggle;
