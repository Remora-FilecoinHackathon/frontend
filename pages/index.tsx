import {
  FormEventHandler,
  FormEvent,
  FC,
  ChangeEventHandler,
  ChangeEvent,
  MouseEvent,
} from 'react';
import { ethers } from 'ethers';
import Layout from 'components/layout';
import StackedBlock from 'components/stackedBlock';
import NormalBlock from 'components/normalBlock/';
import ConnectionError from 'components/connectionError';
import Head from 'next/head';
import styled from 'styled-components';
import { Switch } from '@chakra-ui/react';
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
import OptionsSlider from 'components/ui/input/OptionsSlider';
import SliderInput from 'components/ui/input/SliderInput';
import { CookieThemeTogglerStyle } from 'components/ui/cookie-theme-toggler/styles';

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Home() {
  const [balance, setBalance] = useState('');
  const [newContract, setNewContract] = useState(false);
  const [renderNewDiv, setRenderNewDiv] = useState(false);
  const [value, setValue] = useState('');
  const { active } = useWeb3();
  const { account } = useSDK();

  async function getBalance(address: string | Promise<string>) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    setBalance(balanceInEth);
  }

  useEffect(() => {
    if (account) {
      getBalance(account);
    }
  }, [account]);

  const InputWrapper = styled.div`
    margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
    width: 100%;
  `;

  const ButtonWrapper = styled.div`
    margin: auto;
  `;

  const DecoratorLabelStyle = styled.span`
    display: inline-block;
    font-size: 30px;
    line-height: 39px;
    font-weight: 600;
    margin-left: 15px;
  `;
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value as string);
  };

  const NewContractInput = () => {
    return (
      <>
        <NormalBlock style={{ display: 'flex', flexDirection: 'column' }}>
          <InputWrapper>
            <Input
              id="fil"
              fullwidth
              placeholder="0"
              rightDecorator={
                <>
                  <Fil />
                  <DecoratorLabelStyle>Fil</DecoratorLabelStyle>
                </>
              }
              label="Amount"
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              id="interest-rate"
              fullwidth
              placeholder="0"
              rightDecorator={
                <>
                  <DecoratorLabelStyle>%</DecoratorLabelStyle>
                </>
              }
              label="Interest Rate (%)"
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              id="interest-rate"
              fullwidth
              placeholder="0"
              rightDecorator={
                <>
                  <DecoratorLabelStyle>Mths</DecoratorLabelStyle>
                </>
              }
              label="Duration (Months)"
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button size="sm" variant="filled">
              Submit
            </Button>
          </ButtonWrapper>
        </NormalBlock>
      </>
    );
  };

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
      <div
        style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}
      >
        <Heading size="sm">Lend Your Fil</Heading>
        <Text color="secondary" size="xs">
          Create a new contract or see available contracts.
        </Text>
      </div>
      <DealWrapper>
        <NewContractInput />
      </DealWrapper>
      <ConnectionError />
    </Layout>
  );
}
