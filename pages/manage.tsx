import {
  FormEventHandler,
  FormEvent,
  useEffect,
  useState,
  SetStateAction,
} from 'react';
import Layout from 'components/layout';
import { mainContractAddress } from 'config/mainContractAddress';

import ConnectionError from 'components/connectionError';
import Head from 'next/head';
import styled from 'styled-components';

import EscrowABI from '../abi/Escrow.abi.json';
import LendingManagerABI from '../abi/LendingManager.abi.json';
import {
  useEscrowContractWeb3,
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
import ActivePositionModule from 'components/modules/LenderPositionModule';
import Toggle from 'components/toggle/Toggle';
import AccordianUi from 'components/accordian-ui';
import LenderPositionModule from 'components/modules/LenderPositionModule';
import BorrowerPositionModule from 'components/modules/BorrowerPositionModule';

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Manage() {
  const [loanPositions, setLoanPositions] = useState();
  const [borrowerPositions, setBorrowerPositions] = useState();
  const [isSelectedEscrow, setisSelectedEscrow] = useState('');
  const [isBorrower, setIsBorrower] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Lender');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLender, setIsLender] = useState(true);

  const { account } = useSDK();

  const contractRPC = useLendingManagerContractRPC();
  const contractLendingManager = useLendingManagerContractWeb3();

  const { openModal } = useModal(MODAL.connect);

  const HeadingWrapper = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
  `;

  const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: -150px;
    z-index: -1;
    transition: left 4s ease-in-out;
    animation: morph 4s ease-in-out infinite;
    @keyframes left {
      from {
        left: -150px;
      }
      to {
        left: -100px;
      }
    }
    @keyframes morph {
      0% {
        transform: skew(1);
      }
      50% {
        transform: skew(1.05);
      }
      100% {
        transform: skew(1);
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
  const handleSelectedEscrow = (id: string) => {
    setisSelectedEscrow(id);
    console.log(isSelectedEscrow);
  };

  // START LOAN ***
  const startLoan = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (account) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log(`escrow address: ${isSelectedEscrow}`);
        const contract = new ethers.Contract(
          isSelectedEscrow,
          EscrowABI,
          signer,
        );
        setIsLoading(true);
        const tx = await contract.startLoan();
        await tx?.wait();
        setIsLoading(false);
        console.log('Loan has started');
      } catch (error) {
        console.error(`there is an Error: ${error}`);
        setIsLoading(false);
      }
    } else {
      openModal();
    }
  };

  // WITHDRAW BEFORE LOAN START ***
  const handleWithdraw = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (account) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          isSelectedEscrow,
          EscrowABI,
          signer,
        );
        contract.withdrawBeforLoanStarts();
        setIsLoading(true);

        setTimeout(() => {
          setIsLoading(false);
          console.log('Loan is closed');
        }, 30000);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    } else {
      openModal();
    }
  };

  // REPAY ***
  const handleRepay = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log('repay button clicked');
    if (account) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          isSelectedEscrow,
          EscrowABI,
          signer,
        );
        contract.repay();
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          console.log('Loan repay');
        }, 30000);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    } else {
      openModal();
    }
  };

  // CLOSE LOAN ***
  const handleCloseLoan = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (account) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          isSelectedEscrow,
          EscrowABI,
          signer,
        );
        const tx = contract.closeLoan();
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          console.log('Loan is closed');
        }, 30000);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    } else {
      openModal();
    }
  };

  // SET LENDER POSITIONS
  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        mainContractAddress,
        LendingManagerABI,
        provider,
      );

      const loanKeysTotalNumber = (
        await contract.getLoanKeysLength()
      ).toNumber();
      console.log('starting loop');
      console.log(loanKeysTotalNumber);
      if (loanKeysTotalNumber > 0) {
        const positionsArray = [];
        for (let i = 0; i < loanKeysTotalNumber; i++) {
          const loanKey = await contract.loanKeys([i]);
          const position = await contract.positions(loanKey._hex);
          const positionFormatted = {
            id: [i],
            loanKey: loanKey,
            lender: position.lender,
            availableAmount: ethers.utils.formatEther(
              position.availableAmount.toString(),
            ),

            interestRate: position.interestRate.toString() / 100,
            endDate: position.endTimestamp.toString(),
          };
          console.log(`current loop on position: ${i}`);
          if (account !== positionFormatted.lender) {
            console.log(`negative match position at index ${i} with lender`);
          }
          if (account === positionFormatted.lender) {
            console.log(`positive match position at index ${i} with lender`);
            const escrowContract = await contract.escrowContracts(
              positionFormatted.loanKey,
              positionFormatted.id,
            );
            if (escrowContract) {
              console.log(`pushing index:{i} position to ui`);
              positionFormatted.escrowAddress = escrowContract;
              positionsArray.push(positionFormatted);
            }
            console.log(
              escrowContract
                ? `escrow contract:${escrowContract} at index ${i}`
                : `could not find escrow contract`,
            );
          }
        }
        setLoanPositions(positionsArray);
      }
    })();
  }, [account]);

  // SET BORROW POSITIONS
  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        mainContractAddress,
        LendingManagerABI,
        provider,
      );
      const escrowAddress = await contract.borrowerPositions(account, 0);
      if (escrowAddress) {
        const positionsArray = [];
        for (let i = 0; i < 1; i++) {
          const escrowAddress = await contract.borrowerPositions(account, i);
          console.log(escrowAddress);
          const escrowContract = new ethers.Contract(
            escrowAddress,
            EscrowABI,
            provider,
          );
          console.log(`successful grabbing ${escrowAddress}`);
          const loanAmount = await escrowContract.loanAmount();
          const interestRate = await escrowContract.rateAmount();
          const loanPaidAmount = await escrowContract.loanPaidAmount();
          const lastWithdraw = await escrowContract.lastWithdraw();
          const isStarted = await escrowContract.started();
          const endDate = await escrowContract.end();

          const escrowFormatted = {
            id: i,
            escrowAddress: escrowAddress,
            loanAmount: ethers.utils.formatEther(loanAmount),
            interestRate: ethers.utils.formatEther(interestRate),
            loanPaidAmount: ethers.utils.formatEther(loanPaidAmount),
            lastWithdraw: lastWithdraw.toString(),
            isStarted: isStarted,
            endDate: endDate.toString(),
          };
          console.log(escrowFormatted);
          console.log(`current loop on position: ${i}`);
          console.log(`pushing index:{i} position to ui`);
          positionsArray.push(escrowFormatted);
        }
        setBorrowerPositions(positionsArray);
      }
    })();
  }, [isLender]);

  // handling fade in animations
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 250);
  }, []);
  return (
    <Layout>
      <Head>
        <title>Remora - Uncollateralized Lending</title>
      </Head>

      <>
        <div style={isLoading ? { opacity: '50%' } : { opacity: '100%' }}>
          <div style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}>
            <div style={{ textAlign: 'center' }}>
              <Toggle
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                setIsLender={setIsLender}
                setIsBorrower={setIsBorrower}
              />
              <HeadingWrapper>
                <Heading size="sm"> Select Position to manage</Heading>
              </HeadingWrapper>
              {isLender
                ? loanPositions?.map((position) => (
                    <LenderPositionModule
                      key={position.loanKey}
                      loanKey={position.loanKey}
                      liquidity={position.availableAmount}
                      interestRate={position.interestRate}
                      endDate={position.endDate}
                      handleSelectedEscrow={handleSelectedEscrow}
                      isSelectedEscrow={isSelectedEscrow}
                      escrowAddress={position.escrowAddress}
                    />
                  ))
                : borrowerPositions?.map((position) => (
                    <BorrowerPositionModule
                      key={position.id}
                      loanAmount={position.loanAmount}
                      endDate={position.endDate}
                      interestRate={position.interestRate}
                      lastWithdraw={position.lastWithdraw}
                      handleSelectedEscrow={handleSelectedEscrow}
                      isSelectedEscrow={isSelectedEscrow}
                      escrowAddress={position.escrowAddress}
                      isStarted={position.isStarted}
                    />
                  ))}
              <ConnectionError />
              <HeadingWrapper>
                <Heading size={'sm'}>Choose action</Heading>
              </HeadingWrapper>

              {selectedOption === 'Lender' ? (
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
                      loading={isLoading ? true : false}
                      style={{ marginRight: '10px' }}
                      onClick={startLoan}
                    >
                      Start Loan
                    </Button>
                    <Button
                      size={'md'}
                      loading={isLoading ? true : false}
                      style={{ marginLeft: '10px' }}
                      onClick={handleWithdraw}
                    >
                      Withdraw
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
                      loading={isLoading ? true : false}
                      variant={'outlined'}
                      style={{ marginRight: '10px' }}
                      onClick={handleCloseLoan}
                    >
                      Close Loan
                    </Button>
                    <Button
                      size={'md'}
                      loading={isLoading ? true : false}
                      variant={'outlined'}
                      style={{ marginLeft: '10px' }}
                      onClick={handleRepay}
                    >
                      Call Repay
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
                  <Button
                    size={'md'}
                    type="submit"
                    style={{ marginLeft: '10px' }}
                    loading={isLoading ? true : false}
                    onClick={handleRepay}
                  >
                    Call Repay
                  </Button>
                  <Button
                    size={'md'}
                    variant={'outlined'}
                    type="submit"
                    style={{ marginRight: '10px' }}
                    loading={isLoading ? true : false}
                    onClick={startLoan}
                  >
                    Start Loan
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
      <div
        style={{
          textAlign: 'center',
          marginBottom: '10px',
          marginTop: '80px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s',
        }}
      >
        <Text
          style={{
            color: 'var(--white-color)',
            marginBottom: '2px',
          }}
          size="xl"
        >
          FAQ
        </Text>
        <Text color="secondary" size="xs">
          Frequently Asked Questions
        </Text>
      </div>
      <AccordianUi />

      <BackgroundWrapper>
        <Eclipse />
      </BackgroundWrapper>
    </Layout>
  );
}
