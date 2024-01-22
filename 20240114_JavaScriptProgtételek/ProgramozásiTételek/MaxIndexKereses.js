//MAXIMUM INDEX ALAPÚ KERESÉS TÉTELE
let maxIndex=0;
for(let i=1;i<tomb.length;i++){
	if(tomb[i]>tomb[maxIndex]){
    	maxIndex=i;
    }
}
document.write("<br>A tömb legnagyobb elemének indexe:"+maxIndex);