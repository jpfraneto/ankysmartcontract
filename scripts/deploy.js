require('dotenv').config();

async function main() {
  const Anky = await ethers.getContractFactory('Anky');
  const anky = await Anky.deploy(process.env.WALLET_ADDRESS);

  console.log('Anky deployed to:', anky.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
