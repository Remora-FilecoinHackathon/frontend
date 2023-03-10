import {
  createContext,
  useMemo,
  useCallback,
  memo,
  useState,
  FC,
  PropsWithChildren,
} from 'react';
import { useThemeToggle } from '../components/ui';
import WalletModal from '../components/walletModal';
import { WalletsModalForEth } from '../components/WalletsModalForETH';

export type ModalContextValue = {
  openModal: (modal: MODAL) => void;
  closeModal: () => void;
};

export enum MODAL {
  connect,
  wallet,
}

export const ModalContext = createContext({} as ModalContextValue);

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [active, setActive] = useState<MODAL | null>(null);
  const { themeName } = useThemeToggle();

  const openModal = useCallback((modal: MODAL) => {
    setActive(modal);
  }, []);

  const closeModal = useCallback(() => {
    setActive(null);
  }, []);

  const value = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [closeModal, openModal],
  );

  const common = {
    onClose: closeModal,
    shouldInvertWalletIcon: themeName === 'dark',
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <WalletModal open={active === MODAL.wallet} {...common} />
      <WalletsModalForEth open={active === MODAL.connect} {...common} />
    </ModalContext.Provider>
  );
};

export default memo<FC<PropsWithChildren>>(ModalProvider);
