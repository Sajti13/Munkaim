let jegy=Number(prompt("Add meg a napnak a számát:"));
if(jegy==2){
	document.write(`A ${jegy} jegy szöveges szorgalom értékelése: Hanyag`); 
}
else if(jegy==3){
	document.write(`A ${jegy} jegy szöveges szorgalom értékelése: Változó`); 
}
else if(jegy==4){
	document.write(`A ${jegy} jegy szöveges szorgalom értékelése: Jó`); 
}
else if(jegy==5){
	document.write(`A ${jegy} jegy szöveges szorgalom értékelése: Példás`); 
}
else{
	document.write(`A ${jegy} jegy Hibás Adat, ilyen értékelés nincs!`); 
}