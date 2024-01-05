let x=Number(prompt("Add meg az x koordinátát:"));
let y=Number(prompt("Add meg az y koordinátát:"));

if(x>0 && y>0){
	document.write(`A ${x},${y} koordináta az 1. síknegyedben van`);
}
else if(x<0 && y>0){
	document.write(`A ${x},${y} koordináta az 2. síknegyedben van`);
}
else if(x<0 && y<0){
	document.write(`A ${x},${y} koordináta az 3. síknegyedben van`);
}
else if(x>0 && y<0){
	document.write(`A ${x},${y} koordináta az 4. síknegyedben van`);
} 
else if(x==0 && y==0){
	document.write(`A ${x},${y} koordináta az Origóban van`);
}
else if(x==0){
	document.write(`A ${x},${y} koordináta az y tengelyen van`);
}
else{
	document.write(`A ${x},${y} koordináta az x tengelyen van`);
}