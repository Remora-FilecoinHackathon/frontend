import Layout from 'components/layout';

import {
  useLendingManagerContractWeb3,
  useLendingManagerContractRPC,
} from '../hooks';
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

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Home() {
  const [newContract, setNewContract] = useState(false);
  const [renderNewDiv, setRenderNewDiv] = useState(false);
  const [repIsSuccess, setRepIsSuccess] = useState(false);
  const [amount, setAmount] = useState('');
  const { account } = useSDK();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedModule, setSelectedModule] = useState({
    liquidity: 0,
    interestRate: 0,
    duration: 0,
  });

  useEffect(() => {
    if (newContract) {
      setRenderNewDiv(true);
    }
  }, [newContract]);

  const { openModal } = useModal(MODAL.connect);

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.currentTarget.value as string);
  };

  const InputWrapper = styled.div`
    margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
    width: 100%;
  `;
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

  const contractWeb3 = useLendingManagerContractWeb3();
  const contractRPC = useLendingManagerContractRPC();

  const loanKeys = useContractSWR({
    contract: contractRPC,
    method: 'loanKeys',
    params: [0],
  });

  useEffect(() => {
    console.log(loanKeys);
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

  const handleBorrowSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    event: FormEvent,
  ) => {
    event.preventDefault();
    if (account) {
      // what is loan key? (is this ID?)
      // what is  mineractoraddress (account?)
      // createBorrow(, amount, )
    } else {
      openModal();
    }
  };

  // function handleModuleClick(loankey) {
  //   setSelectedModule({
  //     // which module by loankey got selected
  //   });
  // }

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
                <InputWrapper>
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
                </InputWrapper>{' '}
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
