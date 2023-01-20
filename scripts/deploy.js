const { ethers, network } = require("hardhat");
const Web3 = require("web3");
require('dotenv').config();

async function main() {
  let web3;
  if (network.name === 'goerli') {
    web3 = new Web3(process.env.URL_ALCHEMY_GOERLI);
  } else if (network.name === 'mainnet') {
    web3 = new Web3(process.env.URL_ALCHEMY_MAINNET);
  } else {
    throw new Error('Network not supported');
  }

  const transactionCount = await web3.eth.getTransactionCount(process.env.OWNER_ADDRESS);

  // gets the address of the token before it is deployed
  const futureAddress = ethers.utils.getContractAddress({
    from: process.env.OWNER_ADDRESS,
    nonce: transactionCount + 1
  });

  const MyGovernor = await ethers.getContractFactory("MyGovernor");
  const governor = await MyGovernor.deploy(futureAddress);

  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(governor.address);

  console.log(
    `Governor deployed to ${governor.address}`,
    `Token deployed to ${token.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
