import Head from 'next/head';
import styled from 'styled-components';

import Hero from 'components/hero';
import LayoutLandingPage from 'components/layout/layoutLandingPage';

export default function Home() {
  return (
    <LayoutLandingPage>
      <Head>
        <title>Remora - Uncollateralized Lending</title>
      </Head>
      <Hero />
    </LayoutLandingPage>
  );
}
