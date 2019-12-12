pragma solidity ^0.5.11;

import "./zombieattack.sol";
import "./erc721.sol";
import "./safemath.sol";

/// TODO : A remplacez avec par des descriptions natspec
contract PlaneOwnership is Fight, ERC721 {

  using SafeMath for uint256;

  mapping (uint => address) planeApprovals;

  function balanceOf(address _owner) public view returns (uint256 _balance) {
    return ownerPlaneCount[_owner];
  }

  function ownerOf(uint256 _tokenId) public view returns (address _owner) {
    return planeToOwner[_tokenId];
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private {
    ownerPlaneCount[_to] = ownerPlaneCount[_to].add(1);
    ownerPlaneCount[msg.sender] = ownerPlaneCount[msg.sender].sub(1);
    planeToOwner[_tokenId] = _to;
    Transfer(_from, _to, _tokenId);
  }

  function transfer(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    _transfer(msg.sender, _to, _tokenId);
  }

  function approve(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    planeApprovals[_tokenId] = _to;
    Approval(msg.sender, _to, _tokenId);
  }

  function takeOwnership(uint256 _tokenId) public {
    require(planeApprovals[_tokenId] == msg.sender);
    address owner = ownerOf(_tokenId);
    _transfer(owner, msg.sender, _tokenId);
  }
}
