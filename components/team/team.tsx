import Frank from '../teamImages/Frank.png';
import ZeroXThresh from '../teamImages/0xThresh.png';
import Kalpita from '../teamImages/Kalpita.png';
import Luca from '../teamImages/Luca.png';
import Jajablinky from '../teamImages/Jajablinky.png';
import Image from 'next/image';
import LanguageIcon from '@mui/icons-material/Language';
import { Heading, Link, Text } from 'components/ui';

import { useEffect, useState } from 'react';

import { TeamStyles } from './teamStyles';

function Team(props: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <>
      <TeamStyles
        {...props}
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 3s' }}
      >
        <Heading size="sm" style={{ marginBottom: '30px' }}>
          The Team
        </Heading>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div>
            <Image src={Frank} alt="Frank" height="128" width="128" />
            <Text size="xs" style={{ color: 'var(--color-white)' }}>
              Frank
            </Text>
            <Text
              size="xxs"
              style={{ color: 'var(--color-white)', opacity: '70%' }}
            >
              Solidity Engineer
            </Text>
            <Link href="https://linktr.ee/frankcc">
              <LanguageIcon fontSize="small" />
            </Link>
          </div>
          <div>
            <Image src={ZeroXThresh} alt="0xThresh" height="128" width="128" />
            <Text size="xs" style={{ color: 'var(--color-white)' }}>
              0xThresh
            </Text>

            <Text
              size="xxs"
              style={{ color: 'var(--color-white)', opacity: '70%' }}
            >
              Backend Developer
            </Text>
            <Link href="https://twitter.com/0xthresh">
              <LanguageIcon fontSize="small" />
            </Link>
          </div>
          <div>
            <Image src={Kalpita} alt="Kalpita" height="128" width="128" />
            <Text size="xs" style={{ color: 'var(--color-white)' }}>
              Kalpita
            </Text>
            <Text
              size="xxs"
              style={{ color: 'var(--color-white)', opacity: '70%' }}
            >
              Solidity Engineer
            </Text>
            <Link href="https://linktr.ee/kalpita_mandal">
              <LanguageIcon fontSize="small" />
            </Link>
          </div>
          <div>
            <Image src={Luca} alt="Luca" height="128" width="128" />
            <Text size="xs" style={{ color: 'var(--color-white)' }}>
              Luca Di Domenico
            </Text>
            <Text
              size="xxs"
              style={{ color: 'var(--color-white)', opacity: '70%' }}
            >
              Solidity Engineer
            </Text>
            <Link href="https://linktr.ee/lucadidomenico">
              <LanguageIcon fontSize="small" />
            </Link>
          </div>
          <div>
            <Image src={Jajablinky} alt="Jajablinky" height="128" width="128" />
            <Text size="xs" style={{ color: 'var(--color-white)' }}>
              Jajablinky
            </Text>
            <Text
              size="xxs"
              style={{ color: 'var(--color-white)', opacity: '70%' }}
            >
              Frontend Developer
            </Text>
            <Link href="http://twitter.com/jajablinky">
              <LanguageIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </TeamStyles>
    </>
  );
}

export default Team;
