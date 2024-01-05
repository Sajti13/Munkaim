let jegy=Number(prompt("Add meg a tanuló szerzett jegyét:"));

if(jegy==5){
	document.write(`A ${jegy} szöveges értékese: Jeles`);
}
else if(jegy==4){
	document.write(`A ${jegy} szöveges értékese: Jó`);
}
else if(jegy==3){
	document.write(`A ${jegy} szöveges értékese: Közepes`);
}
else if(jegy==2){
	document.write(`A ${jegy} szöveges értékese: Elégséges`);
}
else if(jegy==1){
	document.write(`A ${jegy} szöveges értékese: Elégtelen`);
}
else{
	document.write(`A ${jegy} érték: HIBÁS ADAT!`);
}