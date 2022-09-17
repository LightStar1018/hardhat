require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/cZNwSuFgH1Vlgqnt73U2rzdi9L41P7Qb",
      accounts: ["c3a2c68326de420b32fbc166276f43bc0588b8730367cb66fa22cf624a114b38"]
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
