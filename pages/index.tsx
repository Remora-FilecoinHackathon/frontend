import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import Head from 'next/head';

import Hero from 'components/hero';
import LayoutLandingPage from 'components/layout/layoutLandingPage';
import Team from 'components/team';

export default function Home() {
  return (
    <LayoutLandingPage>
      <Head>
        <title>Remora - Uncollateralized Lending</title>
      </Head>
      <Hero />
      <Fade>
        <Slide left>
          <Team />
        </Slide>
      </Fade>
    </LayoutLandingPage>
  );
}
