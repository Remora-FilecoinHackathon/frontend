import { CHAINS } from '../sdk/constants';

export const EXAMPLE_BY_NETWORK: {
  [key in CHAINS]: string;
} = {
  [CHAINS.FilecoinMainnet]: '0x0000000000000000000000000000000000000000',
  [CHAINS.Wallaby]: '0x004Dd3C4Aa6Fa56bb9d2d741b98E9Fe9868E04B2',
  [CHAINS.Hyperspace]: '0x004Dd3C4Aa6Fa56bb9d2d741b98E9Fe9868E04B2',
};

export const getExampleAddress = (chainId: CHAINS): string => {
  return EXAMPLE_BY_NETWORK[chainId];
};
