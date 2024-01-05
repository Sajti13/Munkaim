let a=Number(prompt("Adj meg a értékét"));
let b=Number(prompt("Adj meg b értékét"));
let c=Number(prompt("Adj meg c értékét"));
let diff1=b-a;
let diff2=c-b;
if(diff1==diff2){
	document.write(`A ${a},${b},${c} elemek számtani sorozatot alkotnak!`);
}
else{
	document.write(`A ${a},${b},${c} elemek NEM alkotnak számtani sorozatot!`);
}