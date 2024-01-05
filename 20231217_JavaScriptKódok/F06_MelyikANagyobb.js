let a=Number(prompt("Adj meg a értékét"));
let b=Number(prompt("Adj meg b értékét"));

if(a>b){
	document.write(`A ${a} és ${b}-ből ${a} nagyobb`);
}
else if(b>a){
	document.write(`A  ${a} és ${b}-ből ${b} nagyobb`);
}
else{
	document.write(`A ${a} és ${b} egyenlő`);
}