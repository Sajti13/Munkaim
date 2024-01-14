//FOR - Előírt lépésszámú vagy számláló ciklus
document.write("Megoldás for ciklussal:<br>");
for(let i=0;i<10;i++){
	document.write(2**i+",");
}
document.write("<hr>");


//WHILE - ELőltesztelős ciklus
document.write("Megoldás while ciklussal:<br>");
let hatvany=1;
let j=1;
while(j<=10){
    j++;
	document.write(hatvany+",");
    hatvany*=2;
}
document.write("<hr>");


//DO-WHILE - Háltultesztelős ciklus
document.write("Megoldás do-while ciklussal:<br>");
let k=0;
do{
	document.write(Math.pow(2,k)+",");
    k++;
}while(k<10)