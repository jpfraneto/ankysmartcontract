// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract RoyaltySplitter {
    address public creator;
    address public blu3Wallet;

    constructor(address _creator, address _blu3Wallet) {
        creator = _creator;
        blu3Wallet = _blu3Wallet;
    }

    receive() external payable {
        uint256 half = msg.value / 2;
        payable(creator).transfer(half);
        payable(blu3Wallet).transfer(half);
    }
}
