class Noeud {
  constructor(valeur) {
    this.valeur = valeur
    this.gauche = undefined
<<<<<<< HEAD
    this.droit = undefined
=======
    this.droite = undefined
>>>>>>> d3124383d4ce20eadb2a564af351f6da2a038715
  }

  ajouter(valeur) {
    if (this.gauche == undefined)
      this.gauche = new Noeud(valeur)
    else if (this.droite == undefined)
      this.droite = new Noeud(valeur)
<<<<<<< HEAD
    else 
      this.gauche.ajouter(valeur)
  }

  afficherSousArbre() {
    let sousArbre = this.valeur.toString()
    if(this.gauche)
      sousArbre += '('+ this.gauche.afficherSousArbre() +')'
    if(this.droite)
      sousArbre += '('+ this.droite.afficherSousArbre() +')'
    return  sousArbre
  }
=======
    else
      this.gauche.ajouter(valeur)
  }

  ajouterGauche(valeur) {
    if (this.gauche == undefined)
      this.gauche = new Noeud(valeur)
    else
      this.gauche.ajouter(valeur)
  }

  ajouterDroite(valeur) {
    if (this.droite == undefined)
      this.droite = new Noeud(valeur)
    else
      this.droite.ajouter(valeur)
  }

  afficherSousArbre() {
    let sousArbre = this.valeur.toString()
    if (this.gauche)
      sousArbre += '(' + this.gauche.afficherSousArbre() + ')'
    if (this.droite)
      sousArbre += '(' + this.droite.afficherSousArbre() + ')'
    return sousArbre
  }

  rechercher(valeur) {
    if (this.valeur == valeur)
      return this
    else {
      if (this.gauche == undefined && this.droite == undefined) {
        return undefined
      }
      let gauche = this.gauche.rechercher(valeur)
      if (gauche != undefined) {
        return gauche
      }
      let droite = this.droite.rechercher(valeur)
      if (droite != undefined) {
        return droite
      }
    }
  }

  parcoursinfixe() {
    if (this.gauche != undefined)
      this.gauche.parcoursinfixe()
    console.log(this.valeur)
    if (this.droite != undefined)
      this.droite.parcoursinfixe()

  }

>>>>>>> d3124383d4ce20eadb2a564af351f6da2a038715
}

class Arbre {
  constructor() {
    this.racine = undefined
  }

  ajouterNoeud(valeur) {
<<<<<<< HEAD
    if (this.racine !== undefined) 
      this.racine.ajouter(valeur)
    else 
      this.racine = new Noeud(valeur)
  }

  afficherArbre(){
    return this.racine.afficherSousArbre()
  }
}

=======
    if (this.racine !== undefined)
      this.racine.ajouter(valeur)
    else
      this.racine = new Noeud(valeur)
  }

  afficherArbre() {
    return this.racine.afficherSousArbre()
  }



}





>>>>>>> d3124383d4ce20eadb2a564af351f6da2a038715
babobab = new Arbre()
babobab.ajouterNoeud(6)
babobab.ajouterNoeud(3)
babobab.ajouterNoeud(7)
<<<<<<< HEAD
console.log("Baobab:", babobab)
console.log("Affichage prefix:", babobab.afficherArbre())

=======
babobab.ajouterNoeud(13)
babobab.ajouterNoeud(74)
babobab.ajouterNoeud(54)
babobab.ajouterNoeud(71)
babobab.ajouterNoeud(36)
babobab.ajouterNoeud(78)
babobab.ajouterNoeud(33)
babobab.ajouterNoeud(79)

let result = babobab.racine.parcoursinfixe()
console.log("Baobab:", babobab)
console.log("Affichage prefix:", babobab.afficherArbre())
console.log(result)
>>>>>>> d3124383d4ce20eadb2a564af351f6da2a038715
