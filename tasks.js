const { task } = require('hardhat/config');

task('mint', 'Mints a new token')
  .addParam('contract', 'The address of the contract')
  .addParam('tokenuri', 'The token URI')
  .setAction(async taskArgs => {
    const contractAddr = taskArgs.contract;
    const tokenURI = taskArgs.tokenuri;
    const PRICE = ethers.utils.parseEther('0.015');

    const Contract = await ethers.getContractFactory('Anky');

    // We get the contract to deploy
    const contract = Contract.attach(contractAddr);

    const overrides = {
      value: PRICE, // Pay the price of the minting in the transaction
    };

    const tx = await contract.mintAnky(tokenURI, overrides);
    await tx.wait();

    console.log('Token minted:', tx.hash);
  });

task('balance', "Prints an account's balance")
  .addParam('account', "The account's address")
  .setAction(async taskArgs => {
    const balance = await ethers.provider.getBalance(taskArgs.account);

    console.log(ethers.utils.formatEther(balance), 'ETH');
  });
