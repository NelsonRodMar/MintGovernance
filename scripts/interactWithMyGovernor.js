const {ethers} = require("hardhat");
require('dotenv').config();

async function main() {
    let myGovernor = "0x5010f603594bA5A7DaD1fa7820F49eb03E39D844",
        myToken = "0xbC459Ba5c146b9237A6Acf65A9290034517e374C";

    let governor = await ethers.getContractAt("MyGovernor", myGovernor);
    let token = await ethers.getContractAt("MyToken", myGovernor);
    /* Cast A Vote */

    let tx = await governor.propose(
        [myToken],
        [0],
        [token.interface.encodeFunctionData("mint", [
            process.env.OWNER_ADDRESS,
            ethers.utils.parseEther("25000")
        ])],
        "Give the owner more tokens !"
    );
    /* Execute A Proposal */
    /*
    let tx = await governor.execute(
        [myToken],
        [0],
        [token.interface.encodeFunctionData("mint", [
            process.env.OWNER_ADDRESS,
            ethers.utils.parseEther("25000")
        ])],
        ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Give the owner more tokens !"))
    );
    */
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
