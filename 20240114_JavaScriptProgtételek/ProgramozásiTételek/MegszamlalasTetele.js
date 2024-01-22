//MEGSZÁMLÁLÁS TÉTELE: PÁROS SZÁMOKRA
let darab=0;
for(let i=0;i<tomb.length;i++){
	if(tomb[i]%2==0){
    	darab++;
    }
}
document.write("<br>A tömbben lévő páros elemeknek a mennyisége:"+darab);