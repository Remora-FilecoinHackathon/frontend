import { CHAINS } from '../sdk/constants';

export const SMARTCONTRACT_BY_NETWORK: {
  [key in CHAINS]: string;
} = {
  [CHAINS.FilecoinMainnet]: '00000',
  [CHAINS.Wallaby]: '00000',
  [CHAINS.Hyperspace]: '0x893F0c58b4712B26D8e17f29deD725f85deC46b1',
};

export const getSmartContractAddress = (chainId: CHAINS): string => {
  return SMARTCONTRACT_BY_NETWORK[chainId];
};
