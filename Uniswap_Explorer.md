# Take Home Assignment #1

## Uniswap Explorer

Design a frontend application, that displays historical data of a Uniswap contract, with features, like tx hash, link to block explorer for that hash, parsed values displaying the amounts of assets in human readable form. Let the users login with metamask before querying the data.

- ethers.js or web3.js should be used to fetch all the events of a Uniswap swap contract (example link provided below)
- Use should be authenticated before making queries
- Additionally: process query result in the background

### Helpful links

- Uniswap V2, solidity Implementation → [https://docs.uniswap.org/protocol/V2/guides/smart-contract-integration/trading-from-a-smart-contract](https://docs.uniswap.org/protocol/V2/guides/smart-contract-integration/trading-from-a-smart-contract) ( only for context, no solidity needs to be coded itself )
- Ropsten swap router address example → [https://ropsten.etherscan.io/address/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D](https://ropsten.etherscan.io/address/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D)