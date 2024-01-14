let nap=Number(prompt("Add meg a napnak a számát:"));
if(nap==1){
	document.write(`A ${nap}. nap a Hétfő`); 
}
else if(nap==2){
	document.write(`A ${nap}. nap a Kedd`); 
}
else if(nap==3){
	document.write(`A ${nap}. nap a Szerda`); 
}
else if(nap==4){
	document.write(`A ${nap}. nap a Csütörtök`); 
}
else if(nap==5){
	document.write(`A ${nap}. nap a Péntek`); 
}
else if(nap==6){
	document.write(`A ${nap}. nap a Szombat`); 
}
else if(nap==7){
	document.write(`A ${nap}. nap a Vasárnap`); 
}
else{
	document.write(`A ${nap}. nap NEM létezik: Hibás Adat`); 
}