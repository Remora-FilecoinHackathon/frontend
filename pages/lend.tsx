import { FormEventHandler, FormEvent, ChangeEvent } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import axios from 'axios';

import Layout from 'components/layout';
import NormalBlock from 'components/normalBlock/';
import ConnectionError from 'components/connectionError';
import Head from 'next/head';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { trackEvent, MatomoEventType } from '@lidofinance/analytics-matomo';
import { Input, Button, Fil, Heading, Text, Eclipse } from '../components/ui';
import {
  useExampleContractRPC,
  useExampleContractWeb3,
  useLendingManagerContractWeb3,
  useModal,
} from '../hooks';

import { useWeb3 } from 'sdk/web3-react';
import { useSDK } from 'sdk/hooks';

import { formatBalance, stringToEther } from '../utils';
import { MODAL } from '../providers';
import { AbsoluteCenter } from '@chakra-ui/react';

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Home() {
  // inputs
  const [interestValue, setInterestValue] = useState('');
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [submit, setSubmit] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const { account } = useSDK();

  const color = '#DCDCDC';

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

  const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: -100px;
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

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 250);
  }, []);

  const handleInterestChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInterestValue(event.currentTarget.value as string);
  };

  const NewContractInput = () => {
    return (
      <>
        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}
        >
          <NormalBlock style={{ display: 'flex', flexDirection: 'column' }}>
            <InputWrapper>
              <Input
                id="interest-rate"
                fullwidth
                value={interestValue}
                onChange={handleInterestChange}
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
              <Button variant="filled" type="submit">
                Submit
              </Button>
            </ButtonWrapper>
          </NormalBlock>
        </form>
      </>
    );
  };

  const contractWeb3 = useLendingManagerContractWeb3();

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    event: FormEvent,
  ) => {
    event.preventDefault();
    if (account && endDate._d && interestValue) {
      console.log(
        endDate._d.getTime(),
        interestValue * 100,
        // {
        //   maxPriorityFeePerGas: priorityFee.result,
        // },
      );
      // (interestValue, endDate._d);
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
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          marginTop: '20px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s',
        }}
      >
        <Heading size="sm">Lend Your Fil</Heading>
        <Text color="secondary" size="xs">
          Create a new contract or see available contracts.
        </Text>
      </div>
      <DealWrapper>
        <NewContractInput />
      </DealWrapper>
      <BackgroundWrapper>
        <Eclipse />
      </BackgroundWrapper>
      <ConnectionError />
    </Layout>
  );
}
