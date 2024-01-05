let szam=Number(prompt("Adj meg egy számot:"));

if(szam==0){
	document.write(`A ${szam} pontosan NULLA`);
}
else if(szam%2==0){
	document.write(`A ${szam} páros`);
}
else{
	document.write(`A ${szam} páratlan`);
}