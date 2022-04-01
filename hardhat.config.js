require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const privateKey = process.env.PRIVATE_KEY;
if (!privateKey) {
  throw new Error('Please set your PRIVATE_KEY in a .env file');
}

const ropstenUrl = process.env.ROPSTEN_URL;
if (!ropstenUrl) {
  throw new Error('Please set your ROPSTEN_URL in a .env file');
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: ropstenUrl,
      accounts: [`0x${privateKey}`]
    }
  }
};
