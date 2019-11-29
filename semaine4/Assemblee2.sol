pragma solidity ^0.5.11;

contract Assemblee {
  address[] membres;

  struct Decision {
    string description;
    uint votesPour;
    uint votesContre;
    mapping(address => bool) aVote
  }
  Decision[] decisions;

  function rejoindre() public{
    membres.push(msg.sender);
  }

  function estMembre(address utilisateur) public view return (bool){
    for (uint i = 0; i < membres.length; i++){
      if (membres[i] == utilisateur){
        return true;
      }
      else {
        return false;
      }
    }
  }

  function proposerDecision(string memory description) public{
    require(estMembre(msg.sender), "Il faut être membre !")
    Decision memory d;
    d.descrition = descrition
    d.votesPour = 0
    d.votesContre = 0
    Decision.push(d)
  }

  function voter(uint indice, bool value) public{
    require(estMembre(msg.sender), "il faut être membre !")
    if(value[indice] == true){
      decisions[indice].votesPour += 1;
    }
    else {
      decisions[indice].votesContre += 1;
    }
    decisions[indice].aVote[msg.sender] = true;
  }

  function comptabiliser(uint indice) public view returns (int) {
    result = int(decisions[indice].votesPour - decisions[indice].votesContre)
    return result
  }
}
