import {
  Bubbles,
  Button,
  EclipseColor,
  FloatingIcons,
  Heading,
  Link,
  Text,
  Whitepaper,
} from 'components/ui';

import { relative } from 'path';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeroStyles } from './heroStyles';

function Hero(props: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;
  const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 40px;
    z-index: -2;
  `;

  const IconWrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    animation: rotate 30s ease-in-out infinite;

    @keyframes rotate {
      0% {
        transform: translate(0, 100px);
      }
      50% {
        transform: translate(0, 0px);
      }
      100% {
        transform: translate(0, 100px);
      }
    }
  `;

  const BubbleWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: 200px;
    z-index: -1;
    animation: bubble 25s ease-in-out infinite;



    @keyframes bubble {
      0% {
        transform: translate(0, 100px);
      }
      }
      50% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 100px);
      }
    }
  `;

  return (
    <>
      <HeroStyles
        {...props}
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 3s' }}
      >
        <Heading size="lg">
          Be a storage provider with{' '}
          <Text
            style={{
              fontSize: '60px',
              background:
                '-webkit-linear-gradient(150deg, var(--primary-color) 30.32%, var(--secondary-color) 77.34%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0',
            }}
          >
            uncollateralized lending
          </Text>
        </Heading>
        <Text size="md" style={{ color: 'var(--white-color)' }}>
          Bringing modern DeFi options to borrowers and lenders to get started
          today in decentralized Filecoin storage{' '}
        </Text>
      </HeroStyles>
      <ButtonWrapper>
        <a href="/lend">
          <Button
            size="lg"
            variant="filled"
            style={{ margin: '20px', paddingInline: '80px' }}
          >
            Lend
          </Button>
        </a>
        <a href="/borrow">
          <Button
            size="lg"
            fullwidth
            variant="outlined"
            style={{ margin: '20px', paddingInline: '70px' }}
          >
            Borrow
          </Button>
        </a>
      </ButtonWrapper>

      <BackgroundWrapper>
        <EclipseColor />
      </BackgroundWrapper>

      <IconWrapper>
        <FloatingIcons />
      </IconWrapper>
      <BubbleWrapper>
        <Bubbles />
      </BubbleWrapper>
    </>
  );
}

export default Hero;
