import {
  FormEventHandler,
  FormEvent,
  FC,
  ChangeEventHandler,
  ChangeEvent,
  MouseEvent,
} from 'react';
import Layout from 'components/layout';
import NormalBlock from 'components/normalBlock/';
import ConnectionError from 'components/connectionError';
import Head from 'next/head';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { trackEvent, MatomoEventType } from '@lidofinance/analytics-matomo';
import { Input, Fil, Heading, Text } from '../components/ui';
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
import PositionModule from 'components/modules/positionModule';

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

  useEffect(() => {
    if (newContract) {
      setRenderNewDiv(true);
    }
  }, [newContract]);

  const handleLendClick = (event: MouseEvent): void => {
    balance && setValue(formatBalance(balance));
  };
  const handleBorrowClick = (event: MouseEvent): void => {
    balance && setValue(formatBalance(balance));
  };

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
        <Heading size="sm">Borrow Fil</Heading>
        <Text color="secondary" size="xs">
          Select a contract to become a Storage Provider.
        </Text>
      </div>
      <DealWrapper>
        <PositionModule
          openModal={openModal}
          liquidity={20}
          interestRate={2}
          duration={12}
        />
        <PositionModule
          openModal={openModal}
          liquidity={0.05}
          interestRate={3}
          duration={3}
        />
        <PositionModule
          openModal={openModal}
          liquidity={42}
          interestRate={5}
          duration={2}
        />
      </DealWrapper>
      <ConnectionError />
    </Layout>
  );
}
