import { FormEventHandler, FormEvent, useEffect, useState } from 'react';
import Layout from 'components/layout';

import ConnectionError from 'components/connectionError';
import Head from 'next/head';
import styled from 'styled-components';

import LendingManagerAbi from '../abi/LendingManager.abi.json';
import { useContractSWR } from 'sdk/hooks/useContractSWR';
import {
  useLendingManagerContractRPC,
  useLendingManagerContractWeb3,
  useModal,
} from '../hooks';
import { useSDK } from 'sdk/hooks';
import FormatToken from 'components/formatToken';
import { formatBalance, stringToEther } from '../utils';
import { MODAL } from '../providers';
import { Button, Eclipse, Fil, Heading, Input, Text } from 'components/ui';
import StackedBlock from 'components/stackedBlock';
import { ethers } from 'ethers';
import ActivePositionModule from 'components/modules/ActivePositionModule';

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Active() {
  const [positions, setPositions] = useState();
  const [isSelected, setIsSelected] = useState('');

  const { account } = useSDK();

  const contractRPC = useLendingManagerContractRPC();
  const contractWeb3 = useLendingManagerContractWeb3();

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    event: FormEvent,
  ) => {
    event.preventDefault();
    // close Loan
    // contractWeb3.closeLoan({ value: stringToEther(value) });
  };

  const { openModal } = useModal(MODAL.connect);

  const HeadingWrapper = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
  `;

  const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: -100px;
    z-index: -1;
    transition: left 4s ease-in-out;
    @keyframes left {
      from {
        left: -150px;
      }
      to {
        left: -100px;
      }
    }
  `;
  const DecoratorLabelStyle = styled.span`
    display: inline-block;
    font-size: 30px;
    line-height: 39px;
    font-weight: 600;
    margin-left: 15px;
  `;

  // handling what contract is selected
  const handleSelected = (id: string) => {
    setIsSelected(id);
    console.log(isSelected);
  };

  useEffect(() => {
    (async () => {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        '0xAEF78CCb5984EecfAC2D2F7b592A638f59F243f9',
        LendingManagerAbi,
        provider,
      );
      const loanKeysTotalNumber = ['key', 'key'];
      const positionsArray = [];
      for (let i = 0; i < loanKeysTotalNumber.length; i++) {
        const loanKey = await contract.loanKeys([i]);
        const position = await contract.positions(loanKey._hex);
        const positionFormatted = {
          loanKey: loanKey,
          lender: position.lender,
          availableAmount: ethers.utils.formatEther(
            position.availableAmount.toString(),
          ),

          interestRate: position.interestRate.toString() / 100,
          endDate: position.endTimestamp.toString(),
        };

        if (account === positionFormatted.lender) {
          positionsArray.push(positionFormatted);
        }
      }
      setPositions(positionsArray);
    })();
  }, [account]);

  return (
    <Layout>
      <Head>
        <title>Remora - Uncollateralized Lending</title>
      </Head>
      <>
        <div style={{ textAlign: 'center' }}>
          <HeadingWrapper>
            <Heading size="sm">Position Manager</Heading>
            <Text color="secondary" size="xs">
              Close Loan, withdraw and see active loans!
            </Text>
          </HeadingWrapper>
          {positions?.map((position) => (
            <ActivePositionModule
              key={position.loanKey}
              loanKey={position.loanKey}
              liquidity={position.availableAmount}
              interestRate={position.interestRate}
              endDate={position.endDate}
              handleSelected={handleSelected}
              isSelected={isSelected}
            />
          ))}
          <ConnectionError />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Button size={'md'} type="submit" style={{ marginLeft: '10px' }}>
              Withdraw
            </Button>
            <Button
              size={'md'}
              variant={'outlined'}
              type="submit"
              style={{ marginRight: '10px' }}
            >
              Close Loan
            </Button>
          </div>
        </div>
      </>
      <BackgroundWrapper>
        <Eclipse />
      </BackgroundWrapper>
      <ConnectionError />
    </Layout>
  );
}
