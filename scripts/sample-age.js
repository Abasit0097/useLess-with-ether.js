// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Age = await hre.ethers.getContractFactory("ages");
  //const age = await Age.deploy();
  const age = await Age.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3');


    const value = await age.getAge()
    const set = await age.setAge(34)
    const value2 = await age.getAge()

    console.log("age =", value.toString())
    console.log("age =", value2.toString())



  //await age.deployed();

  //console.log("Ages deployed to:", age.address);




}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
