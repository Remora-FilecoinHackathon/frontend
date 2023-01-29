import { contractHooksFactory } from '../sdk/factories';
import { getSmartContractAddress } from 'config';
import { LendingManagerAbi__factory } from 'generated';

const lendingManager = contractHooksFactory(
  LendingManagerAbi__factory,
  (chainId) => getSmartContractAddress(chainId),
);
export const useLendingManagerContractRPC = lendingManager.useContractRPC;
export const useLendingManagerContractWeb3 = lendingManager.useContractWeb3;
