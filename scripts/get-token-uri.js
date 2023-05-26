async function main() {
  const contractAddress = '0x4382D47Ee4645112451d451004134047dc45c0F5'; // Replace with your contract address
  const tokenId = 1; // Replace with your token ID

  const Anky = await ethers.getContractFactory('Anky');
  const anky = Anky.attach(contractAddress);

  const tokenURI = await anky.tokenURI(tokenId);
  console.log(`Token URI of token ${tokenId}: ${tokenURI}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
