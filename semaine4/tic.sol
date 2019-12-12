pragma solidity ^0.5.11;

contract pulstion {

  uint public battement;
  string private message;

  constructor (string memory _message) public {
    battement = 0;
    message = _message;
  }

  function ajouterBattement() public {
      battement += 1;
      return message;
  }
}

contract Pendule  {

 Pulsation pulse;

 function provoquerUnePulsation()public{
   pulse.ajouterBattement();
 }
}
  
