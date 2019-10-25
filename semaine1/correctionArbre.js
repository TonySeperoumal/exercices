class Noeud{
    constructor(valeur){
        this.valeur = valeur
        this.gauche = undefined
        this.droite = undefined
    }
    _ajouter(valeur){

        if(valeur < this.valeur)
            if (this.gauche == undefined)
                this.gauche = new Noeud(valeur) 
            else
                this.gauche.ajouter(valeur)
        else if(valeur > this.valeur)
            if(this.droit == undefined)
                this.droit = new Noeud(valeur)
            else 
                this.droit.ajouter(valeur)  

    }

    _affichageInfixe(){
        affichage = []
        if(this.gauche)
            affichage = this.gauche.affichageInfixe()
        affichage = affichage.concat([this.valeur])
        if(this.droit)
            affichage = affichag.concat(this.droit.affichageInfixe())
        return affichage
        

    }

    _trouverValeur(v){
        if(this.valeur = v)
            return true
        else if(v < this.valeur)
            if(this.gauche)
                return this.gauche._trouverValeur(v)
            else
                return false
        else
            if(this.droit)
                return this.droit._trouverValeur(v)
            else
                return false

    }


}

class arbreBinaire {
    constructor(){
        this.racine = undefined
    }
    ajouter(valeur){
        if(this.racine === undefined)
            this.racine = new Noeud(valeur)
        else
            this.racine._ajouter(valeur)
    }
    affichageInfixe(){
        console.log("Affichage Infixe:", this.racine.affichageInfixe())
    }
    trouverValeur(){
        console.log(this.racine._trouverValeur())
    }
}

racine = new Noeud(6)
racine.ajouter(7)