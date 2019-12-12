pragma solidity ^0.5.11;

contract pulstion {

  uint public battement;

  constructor () public {
    battement = 0
  }

  function ajouterBattement() {
      battement += 1
  }
}
