require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('hardhat-abi-exporter');

require('./tasks');

module.exports = {
  solidity: '0.8.18',
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 11155111,
    },
  },
  abiExporter: {
    path: './data/abi',
    runOnCompile: true,
    clear: true,
    flat: true,
    only: [':ERC20$'],
    spacing: 2,
    format: 'minimal',
  },
};

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: '0.8.18',
// };
