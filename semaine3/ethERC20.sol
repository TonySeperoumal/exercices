pragma solidity ^0.5.11;

interface IERC20{
    function totalSupply() external view returns(uint256);
    function balanceOf(address account) external view returns(uint256);
    function transfer(address recipient, uint256 amount) external returns(bool)
}

contract ERC20 is Context, IERC20{
  mapping (address => uint256)
}
