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
import { trackEvent, MatomoEventType } from '@lidofinance/analytics-matomo';
import { Heading, Text, Button, Eclipse, Input, Fil } from '../components/ui';

import { useModal } from '../hooks';

import { MODAL } from '../providers';
import PositionModule from 'components/modules/PositionModule';
import StackedBlock from 'components/stackedBlock';
import { useContractSWR } from 'sdk/hooks/useContractSWR';
import AccordianUi from 'components/accordian-ui';
import { ethers } from 'ethers';
import { position } from '@chakra-ui/react';

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Home() {
  const [newContract, setNewContract] = useState(false);
  const [renderNewDiv, setRenderNewDiv] = useState(false);
  const [repIsSuccess, setRepIsSuccess] = useState(true);
  const [amount, setAmount] = useState('');
  const { account } = useSDK();
  const [isVisible, setIsVisible] = useState(false);
  const [positions, setPositions] = useState();
  const [isSelected, setIsSelected] = useState('');
  const [submit, setSubmit] = useState();

  useEffect(() => {
    if (newContract) {
      setRenderNewDiv(true);
    }
  }, [newContract]);

  const { openModal } = useModal(MODAL.connect);

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.currentTarget.value as string);
  };

  const DecoratorLabelStyle = styled.span`
    display: inline-block;
    font-size: 30px;
    line-height: 39px;
    font-weight: 600;
    margin-left: 15px;
  `;

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

  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        '0xAEF78CCb5984EecfAC2D2F7b592A638f59F243f9',
        LendingManagerABI,
        provider,
      );
      //use getLoanKeyNumber function when luca finishes it
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

        positionsArray.push(positionFormatted);
      }
      setPositions(positionsArray);
    })();
  }, []);

  const handleReputationSubmit:
    | FormEventHandler<HTMLFormElement>
    | undefined = (event: FormEvent) => {
    event.preventDefault();
    if (account) {
      // Do i pass account of wallet to reputation?
      // contractWeb3.checkReputation(account);
    } else {
      openModal();
    }
  };

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

  const handleBorrowSubmit:
    | FormEventHandler<HTMLFormElement>
    | undefined = async (event: FormEvent) => {
    event.preventDefault();
    var priorityFee = await callRpc('eth_maxPriorityFeePerGas');
    if (account) {
      contractWeb3?.createBorrow(
        //loan key
        isSelected,
        // amount
        ethers.utils.parseEther(amount),
        //miner acttor?

        {
          value: ethers.utils.parseEther(amount),
          maxPriorityFeePerGas: priorityFee.result,
        },
      );
    }
  };
  // handling what contract is selected
  const handleSelected = (id: string) => {
    setIsSelected(id);
    console.log(isSelected);
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

      {!repIsSuccess ? (
        <>
          <form action="" method="post" onSubmit={handleReputationSubmit}>
            <div style={{ textAlign: 'center' }}>
              <HeadingWrapper>
                <Heading size="sm">Check Reputation</Heading>
                <Text color="secondary" size="xs">
                  If successful select which loan fits your needs!
                </Text>
              </HeadingWrapper>
              <Button fullwidth type="submit">
                Check
              </Button>
            </div>
          </form>
        </>
      ) : (
        <>
          <form
            action=""
            method="post"
            onSubmit={handleBorrowSubmit}
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
              <StackedBlock style={{ marginBottom: '30px' }}>
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
                  duration={position.endDate}
                  handleSelected={handleSelected}
                  isSelected={isSelected}
                />
              ))}
            </DealWrapper>
            <Button
              style={{ marginTop: '30px' }}
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
          marginTop: '20px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s',
        }}
      >
        <Text
          style={{
            color: 'var(--white-color)',
            marginTop: '100px',
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
      <ConnectionError />
    </Layout>
  );
}
