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

const LinksWrapper = styled.div`
  margin-left: 18px;
  font-weight: bold;
  color: ;
`;
const Header: FC = () => (
  <HeaderStyle size="full" forwardedAs="header">
    <HeaderLogoStyle>
      <Link href="/">
        <Logo />
      </Link>
      <LinksWrapper>
        <Link href="/lend">Lend</Link>
      </LinksWrapper>
      <LinksWrapper>
        <Link href="/borrow">Borrow</Link>
      </LinksWrapper>
      <LinksWrapper>
        <Link href="/active">Current Deals</Link>
      </LinksWrapper>
    </HeaderLogoStyle>
    <HeaderActionsStyle>
      <HeaderWallet />
    </HeaderActionsStyle>
  </HeaderStyle>
);

export default Header;
