import { contractHooksFactory } from '../sdk/factories';
import { getSmartContractAddress } from 'config';
import { LendingManagerAbi__factory } from 'generated';
import { EscrowAbi__factory } from 'generated';

const lendingManager = contractHooksFactory(
  LendingManagerAbi__factory,
  (chainId) => getSmartContractAddress(chainId),
);

const escrow = contractHooksFactory(EscrowAbi__factory, (chainId) =>
  getSmartContractAddress(chainId),
);
export const useLendingManagerContractRPC = lendingManager.useContractRPC;
export const useLendingManagerContractWeb3 = lendingManager.useContractWeb3;
export const useEscrowContractRPC = escrow.useContractWeb3;
export const useEscrowContractWeb3 = escrow.useContractWeb3;
