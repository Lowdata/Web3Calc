var calculator = artifacts.require("./Calculator.sol");

module.exports = function(deployer) {
  deployer.deploy(calculator);
};
