import {
  FormEventHandler,
  FormEvent,
  FC,
  ChangeEventHandler,
  ChangeEvent,
  MouseEvent,
} from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import Moment from 'moment';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
import { purple } from '@mui/material/colors';

import { useWeb3 } from 'sdk/web3-react';
import { useFilecoinBalance, useSDK } from 'sdk/hooks';
import FormatToken from 'components/formatToken';
import { formatBalance, stringToEther } from '../utils';
import { MODAL } from '../providers';
import { Logo } from 'components/logo';
import OptionsSlider from 'components/ui/input/OptionsSlider';
import SliderInput from 'components/ui/input/SliderInput';
import { CookieThemeTogglerStyle } from 'components/ui/cookie-theme-toggler/styles';
import InputCalendar from 'components/ui/input/InputCalendar';
import 'react-datepicker/dist/react-datepicker.css';

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [newContract, setNewContract] = useState(false);
  const [renderNewDiv, setRenderNewDiv] = useState(false);
  const [value, setValue] = useState('');
  const { active } = useWeb3();
  const { account } = useSDK();
  const [amount, setAmount] = useState(0);
  const [errorColor, setErrorColor] = useState(false);
  const [endDate, setEndDate] = useState(new Date());

  async function getBalance(address: string | Promise<string>) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    setBalance(Number(balanceInEth));
  }

  const color = '#DCDCDC';
  // This will be error handling if amount planning to lend exceeds the amount you type in.
  // useEffect(() => {
  //   if (amount > balance) {
  //     console.log('RED');
  //     setErrorColor(true);
  //   } else {
  //     console.log('NORMAL');
  //     setErrorColor(false);
  //   }
  // }, [amount, balance]);

  useEffect(() => {
    if (account) {
      getBalance(account);
    }
  }, []);

  const InputWrapper = styled.div`
    margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
    width: 100%;
  `;

  const CalendarInputWrapper = styled.div`
    margin-bottom: 25px;
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
              // onChange={(e) => setAmount(Number(e.target.value))}
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
          <CalendarInputWrapper>
            <div>
              <label
                htmlFor="duration"
                style={{
                  paddingLeft: '30px',
                  textTransform: 'uppercase',
                  marginBottom: '15px',
                  display: 'block',
                  fontSize: '12px',
                  color: 'var(--collective-color-textSecondary)',
                }}
              >
                Duration (end date)
              </label>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'stretch',
                  boxSizing: 'border-box',
                  padding: '0 30px',
                }}
              >
                <DatePicker
                  value={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: '0.5px solid #5E5E5E',
                        },
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </CalendarInputWrapper>
          <ButtonWrapper>
            <Button size="sm" variant="filled" onClick={handleSubmit}>
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

  const handleSubmit = () => {
    if (account) {
      console.log('submit lend');
    } else {
      openModal();
    }
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
