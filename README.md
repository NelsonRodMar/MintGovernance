# Alchemy University project to test OZ Governor contract

This project is a simple Hardhat project to test the OpenZeppelin Governor contract.
You can find the deployed contract here 
📇 MyGovernor.sol : [0x5010f603594ba5a7dad1fa7820f49eb03e39d844](https://goerli.etherscan.io/address/0x5010f603594ba5a7dad1fa7820f49eb03e39d844)
📇 MyToken.sol : [0xbC459Ba5c146b9237A6Acf65A9290034517e374C](https://goerli.etherscan.io/address/0xbC459Ba5c146b9237A6Acf65A9290034517e374C)


## Setup

1. Install dependencies

```shell
npm install
```

2. Copy the .env file and fill it with your data

```shell
copy .env.example .env
```

3. Deploy the contract

```shell
npx hardhat run scripts/deploy.js
```

4. Fill the 'scripts/MyGovernor.js' and 'scripts/MyToken.js' and then run following command to verify the contract on Etherscan

```shell
npx hardhat verify ADDRESS_MY_GOVERNOR_CONTRACT
npx hardhat verify ADDRESS_MY_TOKEN_CONTRACT
```

## Cast a vote

1. Fill the 'scripts/interactWithMyGovernor.js' with the data and then run following command to cast a vote

```shell
npx hardhat run scripts/interactWithMyGovernor.js
```
