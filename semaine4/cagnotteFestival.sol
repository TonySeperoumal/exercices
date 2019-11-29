pragma solidity ^0.5.11;
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract  Cogere {
  using SafeMath for uint;
  mapping (address => uint) organisateurs;
  string[] sponsors;
  uint private depensesTotales;

  constructor() public {
    organisateurs[msg.sender] = 100;
  }


  function transfererOrga(address orga, uint parts) public {
    require(estOrga(msg.sender), "Vous ne faites pas partis des organisateurs !")
    organisateurs[msg.sender] -= parts;
    organisateurs[orga] += parts;
  }

  function acheterTicket() public payable {
  require(msg.value>= 500 finney,"Place à 0.5 Ethers");
  require(placesRestantes>0,"Plus de places !");
  festivaliers[msg.sender]=true;
  }

  function payer(address payable destinataire, uint montant) public {
   require(estOrga(msg.sender));
   require(destinataire != address(0));
   require(montant > 0);
   destinataire.transfer(montant);
  }

  function sponsoriser(string memory nom) public payable {
    require(msg.sender != address(0));
    require(msg.value >= 30 ether, "30 ether minimum !");
    sponsors.push(nom);

  }

  function comptabiliserDepense(uint montant) private {
   depensesTotales += montant;
  }

  function () external payable {
  }
}

contract CagnotteFestival is Cogere {}
