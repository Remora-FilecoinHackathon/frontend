import { Heading, Text } from 'components/ui';
import { HeroStyles } from './heroStyles';

function Hero(props: any) {
  return (
    <HeroStyles {...props}>
      <Heading size="lg">
        Be a storage provider with uncollateralized lending.
      </Heading>
      <Text size="lg">
        Bringing modern DeFi options to borrowers and lenders to get started
        today in decentralized Filecoin storage{' '}
      </Text>
    </HeroStyles>
  );
}

export default Hero;
