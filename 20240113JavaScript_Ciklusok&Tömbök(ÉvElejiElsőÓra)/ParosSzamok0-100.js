//FOR - Előírt lépésszámú vagy számláló ciklus
document.write("Megoldás for ciklussal:<br>");
for(let i=0;i<=100;i+=2){
	document.write(i+",");
}
document.write("<hr>");


//WHILE - ELőltesztelős ciklus
document.write("Megoldás while ciklussal:<br>");
let j=0;
while(j<101){
	document.write(j+",");
    j=j+2;
}
document.write("<hr>");


//DO-WHILE - Háltultesztelős ciklus
document.write("Megoldás do-while ciklussal:<br>");
let k=0;
do{
	if(k%2==0){
		document.write((k)+",");
    }
    k++;
}while(k<=100)