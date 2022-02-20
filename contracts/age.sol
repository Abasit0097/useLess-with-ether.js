pragma solidity ^0.8.0;


//"SPDX-License-Identifier: UNLICENSED"

contract ages {

    uint private age;
    function getAge() external view returns(uint) {
        return age;
    }

    function setAge(uint _age) external {
        age = _age;
    }
}