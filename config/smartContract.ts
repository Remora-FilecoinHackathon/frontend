import { CHAINS } from '../sdk/constants';

export const SMARTCONTRACT_BY_NETWORK: {
  [key in CHAINS]: string;
} = {
  [CHAINS.FilecoinMainnet]: '00000',
  [CHAINS.Wallaby]: '00000',
  [CHAINS.Hyperspace]: '0xa999Db46A5df0F8C1ba0dB06593186168F471D24',
};

export const getSmartContractAddress = (chainId: CHAINS): string => {
  return SMARTCONTRACT_BY_NETWORK[chainId];
};
