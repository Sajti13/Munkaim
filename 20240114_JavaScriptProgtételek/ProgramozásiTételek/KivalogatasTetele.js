//KIVÁLOGATÁS TÉTELE: PÁROS SZÁMOKRA
document.write("<br>A tömbben lévő páros elemeknek a következők:");

for(let i=0;i<tomb.length;i++){
	if(tomb[i]%2==0){
    	document.write(tomb[i]+",");
    }
}