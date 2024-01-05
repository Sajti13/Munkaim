let szam=Number(prompt("Adj meg egy számot"));

if(szam<0){
	document.write(`A ${szam} negatív`);
}
else if(szam>0){
	document.write(`A ${szam} pozitív`);
}
else{
	document.write(`A ${szam} értéke pontosan NULLA`);
}