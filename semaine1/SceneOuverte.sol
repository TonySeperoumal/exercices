pragma solidity ^0.5.11;

contract SceneOuverte{
        //0xAbDc121E246fbEf60FE177104bdA4684909A67E3
    string[12]  public passagesArtistes;
    uint public creneauxLibres = 12;
    
    function sInscrire(string memory _nomDArtiste) public {
        if (creneauxLibres > 0){
            passagesArtistes[12-creneauxLibres] = _nomDArtiste;
            creneauxLibres -=1;//creneauxLibres -1
        }
    }
    uint public tour = 0;
    
    function passageArtisteSuivant() public{
        tour += 1;
    }
    function getTour() public view returns(uint){
        return tour;
    }
    function artisteEncours() public view returns(string memory){
        return passagesArtistes[tour-1];
    }    
}