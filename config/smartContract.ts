import { CHAINS } from '../sdk/constants';

export const SMARTCONTRACT_BY_NETWORK: {
  [key in CHAINS]: string;
} = {
  [CHAINS.FilecoinMainnet]: '00000',
  [CHAINS.Wallaby]: '00000',
  [CHAINS.Hyperspace]: '0x3f06D24C8F7F6E1eE99Db84A03b3563C89345A05',
};

export const getSmartContractAddress = (chainId: CHAINS): string => {
  return SMARTCONTRACT_BY_NETWORK[chainId];
};
