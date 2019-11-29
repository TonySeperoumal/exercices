pragma solidity ^0.5.11;

contract Assemblee {
  address[] membres;
  string[] descriptionDecisions;
  uint[] votesPour;
  uint[] votesContre;

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
    descriptionDecisions.push(description)
    votesPour.push(0)
    votesContre.push(0)
  }

  function voter(uint indice, bool value) public{
    require(estMembre(msg.sender), "il faut être membre !")
    if(value[indice] == true){
      votesPour[indice] += 1
    }
    else {
      votesContre[indice] += 1
    }
  }

  function comptabiliser(uint indice) public view returns (int) {
    result = int(votesPour[indice] - votesContre[indice])
    return result
  }
}
