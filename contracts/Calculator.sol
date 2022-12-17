//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
contract Calculator{

    uint public result;
    event success(string msg);

    function addNum(uint num1, uint num2) public pure returns(uint){
        return num1+num2;
    }

    function subNum(uint num1, uint num2) public pure returns(uint){
        return num1-num2;
    }

    function mulNum(uint num1, uint num2) public pure returns(uint){
        return num1*num2;
    }


    function divNum(uint num1, uint num2) public pure returns(uint){
        require(num1>0, "Num2 can not be 0 or -ve");
        require(num1>num2, "Num1 should be greater========TRY AGAIN!");
        return num1/num2;
    }
}