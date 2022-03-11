import { ALIGNR,ALIGNY} from "./gamer.mjs";     
export function verif(myTab,gagne){
    
    let i=0;
    let j=0;
    //ligne 0 col0 ligne 0 col1 lign0 ...
     while (j< myTab[i].length && gagne==false ){
       gagne = vertic(myTab,j);
       if (gagne==false){

           if (j<myTab[i].length-1) j++; else break;
               
       }
       
       
     }
   
   console.log("vertic "+gagne);

    
    
    i=0;
    j=0;
   
   //ligne 0 col0 ligne 0 col1 lign0 ...
    while (i< myTab.length-1 && gagne==false ){
      gagne = horiz(myTab,i);
      if (gagne==false){

          if (i<myTab.length-1) i++; else break;
              
      }
      
      
    }
  
  console.log("horiz "+gagne);

  i=0;
  j=0;
  
  //ligne 0 col0 ligne 0 col1 lign0 ...
   while (i< myTab.length && gagne==false ){
     gagne = diagHautGauche(myTab,i,j);
     if (gagne==false){

         if (j<myTab[i].length-1) j++;
             else {
                 if (i<myTab.length-1)i++;else break;
                 j=0;
       }  
     }
     
     
   }
 
 console.log("diagHautGauche "+gagne);

   i=0;
   j=myTab[i].length-1;
    //let gamer =myTab[0][0];
     while (i< myTab.length && gagne==false ){
       gagne = diagHautDroite(myTab,i,j);
       if (gagne==false){

           if (j>1) j--;
               else {
                   if (i<myTab.length-1)i++;else break;
                   j=myTab[i].length-1;
         }  
       }
       
       
     }
   
   console.log("diagHautDroite "+gagne);
return gagne;
}


export function vertic(tab,indcol){
    let cpt =0;
    let i=0;
    let j=indcol;
    let str="";
    while (i<tab.length-1){
       
        str+=tab[i][j].code;
        console.log(tab[i][j].code);
       // console.log("i, j, tab[i][j].code, str  "+ i + " " +j+ " " + tab[i][j].code+ " "+str);
        if (i<tab.length-1)i++;
            
    }
    
    str+=tab[i][j].code;
    //console.log("rupture i, j, tab[i][j].code, str  "+ i + " " +j+ " " + tab[i][j].code+ " "+str);
    
    if (str.includes(ALIGNR)||str.includes(ALIGNY))
    return true;
    else return false;

}

export function diagHautDroite(tab,indli,indcol){
    let cpt =0;
    let i=indli;
    let j=indcol;
    let str="";
    while (j>0&&i<tab.length-1){
       
        str+=tab[i][j].code;
        // console.log("i, j, tab[i][j].code, str  "+ i + " " +j+ " " + tab[i][j].code+ " "+str);
        i++;
        j--;    
    }
    
    str+=tab[i][j].code;
    //console.log("rupture i, j, tab[i][j].code, str  "+ i + " " +j+ " " + tab[i][j].code+ " "+str);
    
    if (str.includes(ALIGNR)||str.includes(ALIGNY))
    return true;
    else return false;

}

export function diagHautGauche(tab,indli,indcol){
    let cpt =0;
    let i=indli;
    let j=indcol;
    let str="";
    while (j<tab[i].length-1&&i<tab.length-1){
       
        str+=tab[i][j].code;
      //  console.log("i, j, tab[i][j].code, str  "+ i + " " +j+ " " + tab[i][j].code+ " "+str);
        i++;
        j++;    
    }
    
    str+=tab[i][j].code;
    //console.log("rupture i, j, tab[i][j].code, str  "+ i + " " +j+ " " + tab[i][j].code+ " "+str);
    
    if (str.includes(ALIGNR)||str.includes(ALIGNY))
    return true;
    else return false;

}
export function horiz(tab,indli){
    let cpt =0;
    let i=indli;
    let j=0;
    let str="";
    while (j<tab[i].length-1){
       
        str+=tab[i][j].code;
      //  console.log("i, j, tab[i][j].code, str  "+ i + " " +j+ " " + tab[i][j].code+ " "+str);
        if (j<tab[i].length-1)j++;
            
    }
    
    str+=tab[i][j].code;
    //console.log("rupture i, j, tab[i][j].code, str  "+ i + " " +j+ " " + tab[i][j]+ " "+str);
    
    if (str.includes(ALIGNR)||str.includes(ALIGNY))
    return true;
    else return false;

}
    
