// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./RoyaltySplitter.sol";

contract Anky is ERC721URIStorage, Ownable {
uint256 public constant MAX_SUPPLY = 8888;
uint256 public constant PRICE = 0.015 ether;  // In $ETH
address public blu3Wallet;
uint256 private _currentTokenId = 0;
mapping(uint256 => address) private _originalCreators;
mapping(uint256 => address) private _royaltySplitters;
constructor(address _blu3Wallet) ERC721("Anky", "ANKY") {
    blu3Wallet = _blu3Wallet;
}

function mintAnky(string memory _tokenURI) public payable {
    require(msg.value == PRICE, "Incorrect price");
    require(_currentTokenId < MAX_SUPPLY, "All tokens have been minted");

    _currentTokenId += 1;
    _mint(msg.sender, _currentTokenId);
    _setTokenURI(_currentTokenId, _tokenURI);

    _originalCreators[_currentTokenId] = msg.sender;
    RoyaltySplitter splitter = new RoyaltySplitter(msg.sender, blu3Wallet);
    _royaltySplitters[_currentTokenId] = address(splitter);
}

function royaltyInfo(uint256 _tokenId, uint256 _salePrice) external view returns (address receiver, uint256 royaltyAmount) {
    uint256 royalty = _salePrice * 8 / 100;
    return (_royaltySplitters[_tokenId], royalty);
}

function originalCreator(uint256 tokenId) public view returns (address) {
    return _originalCreators[tokenId];
}

function _burn(uint256 tokenId) internal override {
    super._burn(tokenId);
}

function tokenURI(uint256 tokenId) public view override returns (string memory) {
    return super.tokenURI(tokenId);
}

function supportsInterface(bytes4 interfaceId) public view override returns (bool) {
    return super.supportsInterface(interfaceId);
}
}
