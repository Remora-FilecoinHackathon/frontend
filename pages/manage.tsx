import { FormEventHandler, FormEvent, useEffect, useState } from 'react';
import Layout from 'components/layout';
import { mainContractAddress } from 'config/mainContractAddress';

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
import Toggle from 'components/toggle/Toggle';

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Active() {
  const [positions, setPositions] = useState();
  const [isSelectedLoanKey, setisSelectedLoanKey] = useState('');
  const [selectedOption, setSelectedOption] = useState('lenders');

  const { account } = useSDK();

  const contractRPC = useLendingManagerContractRPC();
  const contractWeb3 = useLendingManagerContractWeb3();

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
  const handleSelectedLoanKey = (id: string) => {
    setisSelectedLoanKey(id);
    console.log(isSelectedLoanKey);
  };

  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        mainContractAddress,
        LendingManagerAbi,
        provider,
      );

      const loanKeysTotalNumber = (
        await contract.getLoanKeysLength()
      ).toNumber();
      if (loanKeysTotalNumber > 0) {
        const positionsArray = [];
        for (let i = 0; i < loanKeysTotalNumber; i++) {
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
      }
    })();
  }, [account]);

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    event: FormEvent,
  ) => {
    event.preventDefault();
    // close Loan
    contractWeb3.closeLoan();
  };
  return (
    <Layout>
      <Head>
        <title>Remora - Uncollateralized Lending</title>
      </Head>
      <>
        <div style={{ textAlign: 'center' }}>
          <HeadingWrapper>
            <Heading size="sm">Position Manager</Heading>
          </HeadingWrapper>
          <Toggle
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          {positions?.map((position) => (
            <ActivePositionModule
              key={position.loanKey}
              loanKey={position.loanKey}
              liquidity={position.availableAmount}
              interestRate={position.interestRate}
              endDate={position.endDate}
              handleSelectedLoankey={handleSelectedLoanKey}
              isSelectedLoanKey={isSelectedLoanKey}
            />
          ))}
          <ConnectionError />

          {selectedOption === 'lender' ? (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginBottom: '20px',
                }}
              >
                <Button
                  size={'md'}
                  type="submit"
                  style={{ marginLeft: '10px' }}
                >
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
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <Button
                  size={'md'}
                  type="submit"
                  style={{ marginLeft: '10px' }}
                >
                  Call Repay
                </Button>
                <Button
                  size={'md'}
                  variant={'outlined'}
                  type="submit"
                  style={{ marginRight: '10px' }}
                >
                  Start Loan
                </Button>
              </div>
            </>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}
            >
              <Button size={'md'} type="submit" style={{ marginLeft: '10px' }}>
                Call Repay
              </Button>
              <Button
                size={'md'}
                variant={'outlined'}
                type="submit"
                style={{ marginRight: '10px' }}
              >
                Start Loan
              </Button>
            </div>
          )}
        </div>
      </>
      <BackgroundWrapper>
        <Eclipse />
      </BackgroundWrapper>
    </Layout>
  );
}
