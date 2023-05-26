const { Network, Alchemy } = require('alchemy-sdk');

const settings = {
  apiKey: 'pQFhRCImGBtTz2i836tzth_MFbtrvokk',
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const latestBlock = alchemy.core.getBlock('latest').then(console.log);
