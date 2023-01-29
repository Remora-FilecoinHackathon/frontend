import { CHAINS } from '../sdk/constants';

export const SMARTCONTRACT_BY_NETWORK: {
  [key in CHAINS]: string;
} = {
  [CHAINS.FilecoinMainnet]: '0xAEF78CCb5984EecfAC2D2F7b592A638f59F243f9',
  [CHAINS.Wallaby]: '0xAEF78CCb5984EecfAC2D2F7b592A638f59F243f9',
  [CHAINS.Hyperspace]: '0xAEF78CCb5984EecfAC2D2F7b592A638f59F243f9',
};

export const getSmartContractAddress = (chainId: CHAINS): string => {
  return SMARTCONTRACT_BY_NETWORK[chainId];
};
