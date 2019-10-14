/*function palindrome(chaine){
    for (let i = 0; i < chaine.length/2; i++) {
        console.log(i, chaine[i])
        if(chaine[i]!=chaine[chaine.length-(i+1)]){
            return false
        }
    }
    return true
}

console.log(palindrome("ANNA"))
*/

//Recursivité

function palindrome(mot){
    if((mot.length == 0) || (mot.length == 1)){
        return true
    }else if
        (mot[0] != mot[mot.length -1]){
            return false
           
            
        }else {
             return palindrome(mot.substring(1,mot.length-1))
        } 
             
                 
        
        
    }



function estPalindrome(chaine){
    if(palindrome(chaine)){
        console.log(chaine, "est un palindrome")

    }else{
        console.log(chaine, "n'est pas un palindrome")
    }
    
}

estPalindrome("T")
estPalindrome("BOB")
estPalindrome("TONY")