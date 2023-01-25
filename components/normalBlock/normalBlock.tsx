import { useState } from 'react';
import { NormalBlockStyles } from './normalBlockStyles';

function NormalBlock(props: any) {
  const [liquidity, setLiquidity] = useState('');
  const [duration, setDuration] = useState('');
  const [interestRate, setInterestRate] = useState('');

  return <NormalBlockStyles {...props}></NormalBlockStyles>;
}

export default NormalBlock;
