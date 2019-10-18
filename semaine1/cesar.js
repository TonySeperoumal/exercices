


function chiffrer(chaine){
    let nc = "";
        for (let i = 0; i < chaine.length; i++ ) {
         
            console.log(chaine.charCodeAt(i));

            code = chaine[i].charCodeAt();
            if(code >= 65 && code <= 90){
                nc += String.fromCharCode(code + 5);
            }
        }
    return nc
}


console.log(chiffrer("BONJOUR"))

//a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z