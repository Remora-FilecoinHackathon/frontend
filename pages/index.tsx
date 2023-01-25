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

const DecoratorLabelStyle = styled.span`
  display: inline-block;
  font-size: 12px;
  line-height: 39px;
  font-weight: 600;
  margin-left: 15px;
`;

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

const ButtonWrapper = styled.div`
  padding: 30px 30px 0 30px;
`;

const WalletSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;
`;

const WalletBalanceStyles = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

const WalletWrapperStyles = styled.span`
  margin-right: 20px;
  display: inline-flex;
  align-items: center;
`;

const WalledBalanceLoaderStyle = styled(InlineLoader)`
  width: 60px;
`;

export default function Home() {
  const [value, setValue] = useState('');
  const { active } = useWeb3();
  const { account } = useSDK();
  const { data: balance, initialLoading } = useFilecoinBalance();

  const contractRPC = useExampleContractRPC();
  const contractWeb3 = useExampleContractWeb3();

  const { data: clFilBalance, initialClFilLoading } = useContractSWR({
    contract: contractRPC,
    method: 'getBalance',
    params: [account],
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value as string);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    event: FormEvent,
  ) => {
    event.preventDefault();
    contractWeb3.deposit({ value: stringToEther(value) });
  };

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
      <StackedBlock>
        <form action="" method="post" onSubmit={handleSubmit}>
          {active && (
            <WalletSectionWrapper>
              <WalletWrapperStyles>
                <Wallet />
                {initialLoading ? (
                  <WalledBalanceLoaderStyle />
                ) : (
                  <WalletBalanceStyles>
                    <FormatToken amount={balance} symbol="tFIL" />
                  </WalletBalanceStyles>
                )}
              </WalletWrapperStyles>
              <Button type="button" size="xs" onClick={handleLendClick}>
                Lend
              </Button>
              <Button type="button" size="xs" onClick={handleBorrowClick}>
                Borrow
              </Button>
            </WalletSectionWrapper>
          )}
          <InputWrapper>
            <NormalBlock onClick={openModal}>
              Available Liquidity (100 fil) ----- Interest Rate ----- (2%)
              Duration (1yr)
            </NormalBlock>
            <NormalBlock onClick={openModal}>
              Available Liquidity (100 fil) ----- Interest Rate ----- (2%)
              Duration (1yr)
            </NormalBlock>
            <NormalBlock onClick={openModal}>
              Available Liquidity (100 fil) ----- Interest Rate ----- (2%)
              Duration (1yr)
            </NormalBlock>
          </InputWrapper>
        </form>
      </StackedBlock>
      <ConnectionError />
    </Layout>
  );
}
