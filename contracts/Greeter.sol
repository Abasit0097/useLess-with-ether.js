//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    uint private greeting;


    function greet() public view returns (uint) {
        return greeting;
    }

    function setGreeting(uint _greeting) public {
        greeting = _greeting;
    }
}
