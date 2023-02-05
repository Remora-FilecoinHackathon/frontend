import Layout from 'components/layout';

import axios from 'axios';
import {
  useLendingManagerContractWeb3,
  useLendingManagerContractRPC,
} from '../hooks';

import LendingManagerABI from '../abi/LendingManager.abi.json';
import { useSDK } from 'sdk/hooks';
import ConnectionError from 'components/connectionError';
import Head from 'next/head';
import styled from 'styled-components';
import {
  useState,
  useEffect,
  ChangeEvent,
  FormEventHandler,
  FormEvent,
} from 'react';

import {
  Heading,
  Text,
  Button,
  Eclipse,
  Input,
  Fil,
  Loader,
} from '../components/ui';

import { useModal } from '../hooks';

import { MODAL } from '../providers';
import PositionModule from 'components/modules/PositionModule';
import StackedBlock from 'components/stackedBlock';

import AccordianUi from 'components/accordian-ui';
import { ethers } from 'ethers';
import { mainContractAddress } from 'config/mainContractAddress';
import { isResSent } from 'next/dist/shared/lib/utils';

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Home() {
  const { account } = useSDK();

  const [repIsSuccess, setRepIsSuccess] = useState(false);
  const [amount, setAmount] = useState('');
  // const [mockMinerActor, setMockMinerActor] = useState(
  //   '0xB45F0Fe59cE1179b236eaBdf6b05Efd2613C5798'
  // );

  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [positions, setPositions] = useState();
  const [isSelectedLoanKey, setIsSelectedLoanKey] = useState('');

  const [submit, setSubmit] = useState();

  const { openModal } = useModal(MODAL.connect);

  /* Wrapper Styles */
  const DecoratorLabelStyle = styled.span`
    display: inline-block;
    font-size: 30px;
    line-height: 39px;
    font-weight: 600;
    margin-left: 15px;
  `;

  const LoaderWrapper = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    margin-bottom: 20px;
  `;

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
  /* Providers for reading and writing to contract */
  const contractWeb3 = useLendingManagerContractWeb3();

  const ENDPOINT_ADDRESS = 'https://api.hyperspace.node.glif.io/rpc/v1';

  async function callRpc(method: string, params?: any) {
    const res = await axios.post(ENDPOINT_ADDRESS, {
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: 1,
    });
    return res.data;
  }

  //  Reading contract to display positions currently available for borrowers
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
      const positionsArray = [];
      if (loanKeysTotalNumber > 0) {
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
          positionsArray.push(positionFormatted);
        }
        setPositions(positionsArray);
      }
    })();
  }, [account]);

  const handleDeployMockMinerActor = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const contract = new ethers.Contract(
      mainContractAddress,
      LendingManagerABI,
      provider,
    );

    if (account) {
      try {
        let tx = await contractWeb3?.deployMockMinerActor();
        setIsLoading(true);
        await tx?.wait();
        // contract.on('MinerMockAPIDeployed', (address, msg) => {
        //   console.log(`deployed Mock Miner: ${address}`);
        //   setMockMinerActor(address);
        //   setIsLoading(false);
        // });
        var priorityFee = await callRpc('eth_maxPriorityFeePerGas');
        const MINER_ADDRESS: any = await contractWeb3?.ownerToMinerActor(
          account,
          {
            maxPriorityFeePerGas: priorityFee.result,
          },
        );
        console.log(MINER_ADDRESS);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    } else {
      openModal();
    }
  };

  const handleReputationSubmit = async (event) => {
    event.preventDefault();
    if (account) {
      try {
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        // const contract = new ethers.Contract(
        //   mainContractAddress,
        //   LendingManagerABI,
        //   signer,
        // );
        // const tx = await contract.checkReputation(mockMinerActor);
        // setIsLoading(true);
        // await tx.wait();
        // contract.on('ReputationReceived', async function (id, response, miner) {
        //   console.log('**** REPUTATION EVENT RECEIVED ****');
        //   console.log(id, response, miner);
        //   console.log(response);
        setRepIsSuccess(true);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    } else {
      openModal();
    }
  };

  const handleCreateBorrowSubmit:
    | FormEventHandler<HTMLFormElement>
    | undefined = async (event: FormEvent) => {
    event.preventDefault();

    if (account) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          mainContractAddress,
          LendingManagerABI,
          signer,
        );
        //   console.log(`Loan Key:${isSelectedLoanKey},
        // Amount: ${amount},
        // Mock Miner Actor: ${'0xB45F0Fe59cE1179b236eaBdf6b05Efd2613C5798'}`);
        var priorityFee = await callRpc('eth_maxPriorityFeePerGas');

        await contract.createBorrow(
          isSelectedLoanKey,
          ethers.utils.parseEther(amount),
          '0x446DBaa702F3461585a308327aC50e4cCb4f3Bb8',
          {
            maxPriorityFeePerGas: priorityFee.result,
          },
        );
      } catch (error) {
        console.log(error);
      }
    }
    setAmount('');
    setIsSelectedLoanKey('');
  };

  // handling what contract is selected
  const handleSelectedLoanKey = (id: string) => {
    setIsSelectedLoanKey(id);
    console.log(isSelectedLoanKey);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.currentTarget.value as string);
  };

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

      {!repIsSuccess || !account ? (
        <>
          <ConnectionError />

          <form
            action=""
            method="post"
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}
          >
            <div
              style={
                !isLoading
                  ? { textAlign: 'center', opacity: '100%' }
                  : { textAlign: 'center', opacity: '50%' }
              }
            >
              <HeadingWrapper>
                {/* <p>{mockMinerActor}</p> */}
                <Heading size="sm">Step 1: Deploy Mock Contract</Heading>
                <Text color="secondary" size="xs">
                  Deploy before checking reputation
                </Text>
              </HeadingWrapper>
              <Button
                fullwidth
                loading={isLoading ? true : false}
                variant={'outlined'}
                onClick={handleDeployMockMinerActor}
                style={{ marginBottom: '40px' }}
              >
                Deploy
              </Button>

              <HeadingWrapper
              // style={{
              //   cursor: mockMinerActor ? 'pointer' : 'not-allowed',
              //   opacity: mockMinerActor ? 1 : 0.5,
              // }}
              >
                <Heading size="sm">Step 2: Check Reputation</Heading>
                <Text color="secondary" size="xs">
                  Check your reputation and you will be able to select which
                  loan fits your needs!
                </Text>
              </HeadingWrapper>

              <Button
                fullwidth
                loading={isLoading ? true : false}
                // style={{
                //   cursor: mockMinerActor ? 'pointer' : 'not-allowed',
                //   opacity: mockMinerActor ? 1 : 0.5,
                // }}
                onClick={handleReputationSubmit}
              >
                Check
              </Button>
            </div>
          </form>
        </>
      ) : (
        <>
          {/* <p>{mockMinerActor}</p> */}
          <form
            action=""
            method="post"
            onSubmit={handleCreateBorrowSubmit}
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}
          >
            <div style={{ textAlign: 'center' }}>
              <HeadingWrapper>
                <Heading size="sm">Borrow Fil</Heading>
                <Text color="secondary" size="xs">
                  Choose a contract solution to become a Storage Provider.
                </Text>
              </HeadingWrapper>
            </div>
            <ConnectionError />

            <DealWrapper>
              <Text
                size="sm"
                style={{
                  color: '#fff',
                  marginLeft: '10px',
                  marginBottom: '10px',
                }}
              >
                {' '}
                Set Amount To Borrow
              </Text>
              <StackedBlock style={{ marginBottom: '40px' }}>
                <div style={{ marginBottom: '10px', width: '100%' }}>
                  <Input
                    id="fil"
                    fullwidth
                    placeholder="0"
                    value={amount}
                    onChange={handleAmountChange}
                    rightDecorator={
                      <>
                        <Fil />
                        <DecoratorLabelStyle>Fil</DecoratorLabelStyle>
                      </>
                    }
                  />
                </div>{' '}
              </StackedBlock>
              <Text
                size="sm"
                style={{
                  color: '#fff',
                  marginLeft: '10px',
                  marginBottom: '10px',
                }}
              >
                Select Contract
              </Text>
              {positions?.map((position) => (
                <PositionModule
                  key={position.loanKey}
                  loanKey={position.loanKey}
                  liquidity={position.availableAmount}
                  interestRate={position.interestRate}
                  endDate={position.endDate}
                  handleSelectedLoanKey={handleSelectedLoanKey}
                  isSelectedLoanKey={isSelectedLoanKey}
                />
              ))}
            </DealWrapper>
            <Button
              style={{ marginTop: '30px' }}
              loading={isLoading ? true : false}
              fullwidth
              variant="filled"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </>
      )}
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
