import { CHAINS } from '../sdk/constants';

export const SMARTCONTRACT_BY_NETWORK: {
  [key in CHAINS]: string;
} = {
  [CHAINS.FilecoinMainnet]: '00000',
  [CHAINS.Wallaby]: '00000',
  [CHAINS.Hyperspace]: '0x6B362d0a81bECe92f402D256bcA797885bEA1336',
};

export const getSmartContractAddress = (chainId: CHAINS): string => {
  return SMARTCONTRACT_BY_NETWORK[chainId];
};
