let elsoElem=Number(prompt("Add meg az sorozat első elemének értéket:"));
let kulonbseg=Number(prompt("Add meg sorozat elemei közti különbséget:"));
let elemSzam=Number(prompt("Add meg hány elemű legyen a számtani sorozatod:"));
for(let i=0;i<elemSzam;i++){
	document.write(elsoElem+",");
    elsoElem=elsoElem+kulonbseg;
}