import { FormEventHandler, FormEvent, ChangeEvent } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { ethers } from 'ethers';

import Layout from 'components/layout';
import NormalBlock from 'components/normalBlock/';
import ConnectionError from 'components/connectionError';
import Head from 'next/head';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { Input, Button, Fil, Heading, Text, Eclipse } from '../components/ui';
import { useLendingManagerContractWeb3, useModal } from '../hooks';

import { useSDK } from 'sdk/hooks';

import { MODAL } from '../providers';
import AccordianUi from 'components/accordian-ui';

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Home() {
  // inputs
  const [interestValue, setInterestValue] = useState('');
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [submit, setSubmit] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [amount, setAmount] = useState('');

  const { account } = useSDK();

  const color = '#DCDCDC';

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

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 250);
  }, []);

  const handleInterestChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInterestValue(event.currentTarget.value as string);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.currentTarget.value as string);
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

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (
    event: FormEvent,
  ) => {
    event.preventDefault();
    var priorityFee = await callRpc('eth_maxPriorityFeePerGas');
    if (account) {
      contractWeb3?.createLendingPosition(
        endDate._d.getTime(),
        parseFloat(interestValue) * 100,
        {
          value: ethers.utils.parseEther(amount),
          maxPriorityFeePerGas: priorityFee.result,
        },
      );
      if (contractWeb3) {
        setAmount('');
        setInterestValue('');
        setEndDate(new Date());
      }
    } else {
      openModal();
    }
  };

  const { openModal } = useModal(MODAL.connect);

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
          Create a new contract.
        </Text>
      </div>
      <ConnectionError />

      <DealWrapper>
        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}
        >
          <NormalBlock style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '10px', width: '100%' }}>
              <Input
                style={{ marginBottom: '20px', width: '100%' }}
                key="fil"
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
                label="Amount"
              />
            </div>
            <div style={{ marginBottom: '10px', width: '100%' }}>
              <Input
                key="interest-rate"
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
            </div>
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
                    key="date-picker"
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
          </NormalBlock>
          <Button
            fullwidth
            variant="filled"
            type="submit"
            style={{ marginTop: '30px' }}
          >
            Lend
          </Button>
        </form>
      </DealWrapper>
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
            marginTop: '30px',
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
