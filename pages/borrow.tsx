import Layout from 'components/layout';

import ConnectionError from 'components/connectionError';
import Head from 'next/head';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { trackEvent, MatomoEventType } from '@lidofinance/analytics-matomo';
import { Heading, Text, Button, Eclipse } from '../components/ui';

import { useModal } from '../hooks';

import { MODAL } from '../providers';
import PositionModule from 'components/modules/PositionModule';

const DealWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export default function Home() {
  const [newContract, setNewContract] = useState(false);
  const [renderNewDiv, setRenderNewDiv] = useState(false);
  const [repIsSuccess, setRepIsSuccess] = useState(false);

  useEffect(() => {
    if (newContract) {
      setRenderNewDiv(true);
    }
  }, [newContract]);

  const { openModal } = useModal(MODAL.connect);

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
  return (
    <Layout>
      <Head>
        <title>Remora - Uncollateralized Lending</title>
      </Head>

      {!repIsSuccess ? (
        <>
          <div style={{ textAlign: 'center' }}>
            <HeadingWrapper>
              <Heading size="sm">Check Reputation</Heading>
              <Text color="secondary" size="xs">
                If successful select which loan fits your needs!
              </Text>
            </HeadingWrapper>
            <Button fullwidth>Check</Button>
          </div>
        </>
      ) : (
        <>
          <div style={{ textAlign: 'center' }}>
            <HeadingWrapper>
              <Heading size="sm">Borrow Fil</Heading>
              <Text color="secondary" size="xs">
                Select a contract to become a Storage Provider.
              </Text>
            </HeadingWrapper>
          </div>
          <DealWrapper>
            {/* */}
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
        </>
      )}
      <BackgroundWrapper>
        <Eclipse />
      </BackgroundWrapper>
      <ConnectionError />
    </Layout>
  );
}
