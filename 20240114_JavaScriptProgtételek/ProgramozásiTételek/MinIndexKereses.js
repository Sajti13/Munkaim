//MINIMUM INDEX ALAPÚ KERESÉS TÉTELE
let minIndex=0;
for(let i=1;i<tomb.length;i++){
	if(tomb[i]<tomb[minIndex]){
    	minIndex=i;
    }
}
document.write("<br>A tömb legkisebb elemének indexe:"+minIndex);
