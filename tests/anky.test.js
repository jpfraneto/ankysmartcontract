const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Anky', function () {
  it('Should return the right name and symbol', async function () {
    const Anky = await ethers.getContractFactory('Anky');
    const anky = await Anky.deploy();
    await anky.deployed();

    expect(await anky.name()).to.equal('Anky');
    expect(await anky.symbol()).to.equal('ANKY');
  });
});
