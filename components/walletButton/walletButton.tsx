import { FC, useEffect, useState } from 'react';
import { ButtonProps } from '../ui';
import AddressBadge from 'components/addressBadge';
import { ethers } from 'ethers';
import {
  WalledButtonStyle,
  WalledButtonWrapperStyle,
  WalledButtonBalanceStyle,
  WalledButtonLoaderStyle,
} from './walletButtonStyles';
import { useModal } from '../../hooks';
import { useFilecoinBalance, useSDK } from '../../sdk/hooks';
import FormatToken from '../formatToken';
import { MODAL } from 'providers';

const WalletButton: FC<ButtonProps> = (props) => {
  const [balance, setBalance] = useState('');
  const { onClick, ...rest } = props;
  const { openModal } = useModal(MODAL.wallet);
  const { account } = useSDK();

  async function getBalance(address: string | Promise<string>) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    setBalance(balanceInEth);
  }

  useEffect(() => {
    if (account) {
      getBalance(account);
    }
  }, [account]);

  return (
    <WalledButtonStyle
      size="sm"
      variant="text"
      color="main"
      onClick={openModal}
      {...rest}
    >
      <WalledButtonWrapperStyle>
        <WalledButtonBalanceStyle>
          <FormatToken amount={balance} symbol="tFIL" />
        </WalledButtonBalanceStyle>
        <AddressBadge address={account} />
      </WalledButtonWrapperStyle>
    </WalledButtonStyle>
  );
};

export default WalletButton;
