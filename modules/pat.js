
function fillTab(tab,indLi, gamer){
    let trouve=false;
    let i=0;
    while (i< tab[indLi].length && trouve===false){
    //console.log("tab[indLi][j] : "+  tab[indLi][i]);
        if (tab[indLi][i]==="") {
            tab[indLi][i]=gamer;
            trouve=true;
        }
    i++;    
    }
    }
    let myTab=new Array(4);
    //console.log("myTab.length : "+myTab.length);
    
    function creeTab(myTab){
        for (let i=0;i<myTab.length;i++){
            myTab[i]=new Array(3);
            for (let j=0;j<myTab[i].length;j++){
                myTab[i][j]="";
            }
                 
        }
    
    }
    function litTab(myTab){
        for (let i=0;i<myTab.length;i++){
            for (let j=0;j<myTab[i].length;j++){
                console.log("myTab[i][j] : "+  myTab[i][j]);
            }
            
        }
    
    }
    function litLigne(myTab,indLi){
            for (let j=0;j<myTab[indLi].length;j++){
                console.log("myTab ligne  : "+  (indLi+1)  + " N° : "+ (j+1) + "   gamer = "+  myTab[indLi][j]);
            }
            
    }
    
    
    creeTab(myTab);
    console.log("myTab.length : "+myTab.length);
    
    const gamer1 = 'D';
    const gamer2 = 'P';
    let indLi=1;
    fillTab(myTab,indLi-1,gamer1);
    litLigne(myTab,indLi-1);
    fillTab(myTab,indLi-1,gamer2);
    litLigne(myTab,indLi-1);
    fillTab(myTab,indLi-1,gamer1);
    litLigne(myTab,indLi-1);
    
    indLi=2;
    fillTab(myTab,indLi-1,gamer1);
    fillTab(myTab,indLi-1,gamer2);
    fillTab(myTab,indLi-1,gamer1);
    
    indLi=3;
    fillTab(myTab,indLi-1,gamer1);
    fillTab(myTab,indLi-1,gamer2);
    fillTab(myTab,indLi-1,gamer1);
    
    indLi=4;
    fillTab(myTab,indLi-1,gamer1);
    fillTab(myTab,indLi-1,gamer2);
    fillTab(myTab,indLi-1,gamer1);
    
    
    
     litTab(myTab);
    