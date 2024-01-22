let also=Number(prompt("Add meg a intervallum alsó határát"));
let felso=Number(prompt("Add meg a intervallum felsó határát"));


let generaltSzam=Math.round(Math.random()*(felso-also))+also;
if(generaltSzam%2==0){
	document.write(`A generált páros szám a ${also}:${felso} intervallumban:${generaltSzam}`);
}
else if(generaltSzam!=felso){
	document.write(`A generált páros szám a ${also}:${felso} intervallumban:${generaltSzam+1}`);
}
else{
	document.write(`A generált páros szám a ${also}:${felso} intervallumban:${generaltSzam-1}`);
}