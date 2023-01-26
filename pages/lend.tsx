import {
  FormEventHandler,
  FormEvent,
  FC,
  ChangeEventHandler,
  ChangeEvent,
  MouseEvent,
} from 'react';
import Layout from 'components/layout';
import StackedBlock from 'components/stackedBlock';
import NormalBlock from 'components/normalBlock/';
import ConnectionError from 'components/connectionError';
import Head from 'next/head';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { trackEvent, MatomoEventType } from '@lidofinance/analytics-matomo';
import {
  Input,
  InputGroup,
  Button,
  Fil,
  Clfil,
  Wallet,
  InlineLoader,
  Container,
  Whitepaper,
  Heading,
  Text,
} from '../components/ui';
import { useContractSWR } from 'sdk/hooks/useContractSWR';
import {
  useExampleContractRPC,
  useExampleContractWeb3,
  useModal,
} from '../hooks';
import { useWeb3 } from 'sdk/web3-react';
import { useFilecoinBalance, useSDK } from 'sdk/hooks';
import FormatToken from 'components/formatToken';
import { formatBalance, stringToEther } from '../utils';
import { MODAL } from '../providers';
import { Logo } from 'components/logo';

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Home() {
  const [newContract, setNewContract] = useState(false);
  const [renderNewDiv, setRenderNewDiv] = useState(false);
  const [value, setValue] = useState('');
  const { active } = useWeb3();
  const { account } = useSDK();
  const { data: balance, initialLoading } = useFilecoinBalance();

  const contractRPC = useExampleContractRPC();
  const contractWeb3 = useExampleContractWeb3();

  const NewContractInput = () => {
    return (
      <NormalBlock style={{ backgroundColor: '#323232' }}>
        <div style={{ marginLeft: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', margin: '8px' }}>
            <Input>
              <Fil style={{ marginLeft: '12px' }} />
            </Input>
          </div>
          <p>Available Liquidity</p>
        </div>
        <div style={{ marginRight: '20px' }}>
          <div>
            <Input />

            <p>Interest Rate</p>
          </div>
          <div>
            <Input />

            <p>Duration</p>
          </div>
        </div>
      </NormalBlock>
    );
  };

  useEffect(() => {
    if (newContract) {
      setRenderNewDiv(true);
    }
  }, [newContract]);

  const { openModal } = useModal(MODAL.connect);

  useEffect(() => {
    const matomoHomePageOpenedEvent: MatomoEventType = [
      'CollectifDAO',
      'Home page opened',
      'home_page_opened',
    ];

    trackEvent(...matomoHomePageOpenedEvent);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Remora - Uncollateralized Lending</title>
      </Head>
      <div style={{ textAlign: 'center' }}>
        <Heading size="sm">Lend Your Fil</Heading>
        <Text color="secondary" size="xs">
          Create a new contract or see available contracts.
        </Text>
      </div>
      <DealWrapper>
        {!newContract ? (
          <NormalBlock
            style={{
              backgroundColor: '#323232',
              borderColor: '#181818',
            }}
            onClick={() => setNewContract(true)}
          >
            <div
              style={{
                display: 'flex',
                textAlign: 'center',
                margin: 'auto',
              }}
            >
              + Create New Contract
            </div>
          </NormalBlock>
        ) : (
          <NewContractInput />
        )}
        <NormalBlock onClick={openModal}>
          <div style={{ marginLeft: '20px' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', margin: '8px' }}
            >
              <p
                style={{ fontSize: '28px', color: 'white', fontStyle: 'bold' }}
              >
                25
              </p>
              <Fil style={{ marginLeft: '12px' }} />
            </div>
            <p>Available Liquidity</p>
          </div>
          <div style={{ marginRight: '20px' }}>
            <div>
              <p style={{ color: 'var(--secondary-color)' }}>2%</p>
              <p>Interest Rate</p>
            </div>
            <div>
              <p style={{ color: 'var(--primary-color)' }}>1yr</p>
              <p>Duration</p>
            </div>
          </div>
        </NormalBlock>
        <NormalBlock onClick={openModal}>
          <div style={{ marginLeft: '20px' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', margin: '8px' }}
            >
              <p
                style={{ fontSize: '28px', color: 'white', fontStyle: 'bold' }}
              >
                0.05
              </p>
              <Fil style={{ marginLeft: '12px' }} />
            </div>
            <p>Available Liquidity</p>
          </div>
          <div style={{ marginRight: '20px' }}>
            <div>
              <p style={{ color: 'var(--secondary-color)' }}>2%</p>
              <p>Interest Rate</p>
            </div>
            <div>
              <p style={{ color: 'var(--primary-color)' }}>1yr</p>
              <p>Duration</p>
            </div>
          </div>
        </NormalBlock>
        <NormalBlock onClick={openModal}>
          <div style={{ marginLeft: '20px' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', margin: '8px' }}
            >
              <p
                style={{ fontSize: '28px', color: 'white', fontStyle: 'bold' }}
              >
                10.5
              </p>
              <Fil style={{ marginLeft: '12px' }} />
            </div>
            <p>Available Liquidity</p>
          </div>
          <div style={{ marginRight: '20px' }}>
            <div>
              <p style={{ color: 'var(--secondary-color)' }}>2%</p>
              <p>Interest Rate</p>
            </div>
            <div>
              <p style={{ color: 'var(--primary-color)' }}>1yr</p>
              <p>Duration</p>
            </div>
          </div>
        </NormalBlock>
      </DealWrapper>
      <ConnectionError />
    </Layout>
  );
}
