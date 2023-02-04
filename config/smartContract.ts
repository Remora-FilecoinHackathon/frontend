import { CHAINS } from '../sdk/constants';

export const SMARTCONTRACT_BY_NETWORK: {
  [key in CHAINS]: string;
} = {
  [CHAINS.FilecoinMainnet]: '00000',
  [CHAINS.Wallaby]: '00000',
  [CHAINS.Hyperspace]: '0xbCD7942E4016584b8a285BC2d8914c3B3d857f19',
};

export const getSmartContractAddress = (chainId: CHAINS): string => {
  return SMARTCONTRACT_BY_NETWORK[chainId];
};
