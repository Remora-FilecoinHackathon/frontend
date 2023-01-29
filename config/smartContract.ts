import { CHAINS } from '../sdk/constants';

export const SMARTCONTRACT_BY_NETWORK: {
  [key in CHAINS]: string;
} = {
  [CHAINS.FilecoinMainnet]: '0xBA69E77937a1062c21cd1acFF80B87b56B739ce2',
  [CHAINS.Wallaby]: '0xBA69E77937a1062c21cd1acFF80B87b56B739ce2',
  [CHAINS.Hyperspace]: '0xBA69E77937a1062c21cd1acFF80B87b56B739ce2',
};

export const getSmartContractAddress = (chainId: CHAINS): string => {
  return SMARTCONTRACT_BY_NETWORK[chainId];
};
