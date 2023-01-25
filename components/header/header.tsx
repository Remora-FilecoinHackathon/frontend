import { FC } from 'react';
import Link from 'next/link';
import { Logo } from '../logo';
import { Wallet, Wrap } from '../ui/icons';
import {
  HeaderStyle,
  HeaderLogoStyle,
  HeaderActionsStyle,
} from './headerStyles';
import HeaderWallet from './headerWallet';
import { AlchemyWebSocketProvider } from '@ethersproject/providers';

const Header: FC = () => (
  <HeaderStyle size="full" forwardedAs="header">
    <HeaderLogoStyle>
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/lend">Lend</Link>
      <Link href="/borrow">Borrow</Link>
      <Link href="/active">Current Deals</Link>
    </HeaderLogoStyle>
    <HeaderActionsStyle>
      <HeaderWallet />
    </HeaderActionsStyle>
  </HeaderStyle>
);

export default Header;
