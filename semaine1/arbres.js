class Noeud {
    constructor (valeur) {
    this.valeur = valeur
    this.gauche = undefined
    this.droite = undefined
    }
    ajouterAGauche (valeur){

        this.gauche = new Noeud(valeur)
    }
    ajouter(valeur) {
        if (this.gauche == undefined)
        this.gauche = new Noeud(valeur)
        else if (this.droite == undefined)
        this.droite = new Noeud(valeur)
        else
        this.gauche.ajouter(valeur)
        }
    }
    noeud = new Noeud(2)
    noeud.ajouterAGauche(65)
    noeud.ajouter()
    console.log(noeud)


    inOrde
    inorder(node) {
            if (node !== null) {
                this.inorder(node.left);
                console.log(node.data);
                this.inorder(node.right);
            }
        }
    preorder(node) { if (node != null) { console.log(node.data); this.preorder(node.left); this.preorder(node.right); } } // postorder(node) // Performs postorder traversal of a tree postorder(node) { if (node != null) { this.postorder(node.left); this.postorder(node.right); console.log(node.data); } }