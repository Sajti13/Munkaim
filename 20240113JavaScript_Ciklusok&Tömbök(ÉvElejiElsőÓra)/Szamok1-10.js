//FOR - Előírt lépésszámú vagy számláló ciklus
document.write("Megoldás for ciklussal:<br>");
for(let i=1;i<=10;i++){
	document.write(i+",");
}
document.write("<hr>");


//WHILE - ELőltesztelős ciklus
document.write("Megoldás while ciklussal:<br>");
let j=1;
while(j<11){
	document.write(j+",");
    j++;
}
document.write("<hr>");


//DO-WHILE - Háltultesztelős ciklus
document.write("Megoldás do-while ciklussal:<br>");
let k=0;
do{
	document.write((k+1)+",");
    k++;
}while(k<10)