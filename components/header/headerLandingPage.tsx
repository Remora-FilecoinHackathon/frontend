import { FC } from 'react';
import Link from 'next/link';
import { Logo } from '../logo';
import styled from 'styled-components';
import { Blochainwallet } from '../ui/icons';
import {
  HeaderStyle,
  HeaderLogoStyle,
  HeaderActionsStyle,
} from './headerStyles';
import HeaderWallet from './headerWallet';
import { AlchemyWebSocketProvider } from '@ethersproject/providers';
import { Button } from 'components/ui';

const LinksWrapper = styled.div`
  margin-left: 18px;
  font-weight: bold;
  color: ;
`;
const HeaderLandingPage: FC = () => (
  <HeaderStyle size="full" forwardedAs="header">
    <HeaderLogoStyle>
      <Link href="/">
        <Logo />
      </Link>
    </HeaderLogoStyle>
    <HeaderActionsStyle>
      <Link href="/lend">
        <Button>Launch App</Button>
      </Link>
    </HeaderActionsStyle>
  </HeaderStyle>
);

export default HeaderLandingPage;
