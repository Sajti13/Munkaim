let also=Number(prompt("Add meg a intervallum alsó határát"));
let felso=Number(prompt("Add meg a intervallum felsó határát"));

let megvan=false;
while(megvan==false){
	let generaltSzam=Math.round(Math.random()*(felso-also))+also;
    if(generaltSzam%2==0){
    	document.write(`A generált páros szám a ${also}:${felso} intervallumban:${generaltSzam}`);
    	megvan=true;
    }
}
