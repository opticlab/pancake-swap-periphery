const PancakeRouter01 = artifacts.require("PancakeRouter01");
const PancakeRouter = artifacts.require("PancakeRouter");

const FACTORY_ADDRESS = "0x9CB23e762e8a452E69aC424C429D4F65cafE2aBF";
const WKLAY_ADDRESS = "0x5c9c987E08Bed353A5C304b76CCCA6f316B28847";

module.exports = async function(deployer) {
    deployer.deploy(PancakeRouter01, FACTORY_ADDRESS, WKLAY_ADDRESS);
    deployer.deploy(PancakeRouter, FACTORY_ADDRESS, WKLAY_ADDRESS);
};