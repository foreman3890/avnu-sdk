import { constants } from 'starknet';

export const STAGING_BASE_URL = 'https://goerli.api.avnu.fi';
export const BASE_URL = 'https://goerli.api.avnu.fi';
export const AVNU_ADDRESS: { [chainId: string]: string } = {
  [constants.StarknetChainId.SN_MAIN]: '0x4270219d365d6b017231b52e92b3fb5d7c8378b05e9abc97724537a80e93b0f',
  [`${constants.StarknetChainId.SN_MAIN}-dev`]: '0x4270219d365d6b017231b52e92b3fb5d7c8378b05e9abc97724537a80e93b0f',
  [constants.StarknetChainId.SN_GOERLI]: '0x6d8cd321dcbbf54512eab67c8a6849faf920077a3996f40bb4761adc4f021d2',
  [`${constants.StarknetChainId.SN_GOERLI}-dev`]: '0x871a5d57d3d89a451edfccb4a925bfbb712f960c69396d19ca12b3916fb1cd',
};
