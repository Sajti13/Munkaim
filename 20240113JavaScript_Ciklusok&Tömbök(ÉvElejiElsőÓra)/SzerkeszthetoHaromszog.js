let a=Number(prompt("Add meg az a oldal méretét:"));
let b=Number(prompt("Add meg az b oldal méretét:"));
let c=Number(prompt("Add meg az c oldal méretét:"));
if(a+b>c && a+c>b && b+c>a){
	document.write(`A ${a}, ${b}, ${c} oldalakkal rendelkező háromszög szerkeszthető!`);
}
else{
	document.write(`A ${a}, ${b}, ${c} oldalakkal rendelkező háromszög NEM szerkeszthető!`);
}