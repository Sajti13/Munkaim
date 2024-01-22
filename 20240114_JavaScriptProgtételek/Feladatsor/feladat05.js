let szam=Number(prompt("Add meg a számot:"));
let oszto=Number(prompt("Add meg az osztót:"));
if(szam%oszto==0){
	document.write(`A ${szam}-ot a ${oszto} maradék nélkül osztja`);
}
else{
	document.write(`A ${szam}-ot a ${oszto} NEM osztja maradék nélkül`);
}