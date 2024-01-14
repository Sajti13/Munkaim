//i++  i=i+1
//i--  i=i-1

//i+=2  i=i+2
//i*=2  i=i*2
//i-=3  i=i-3

//FOR - Előírt lépésszámú vagy számláló ciklus
document.write("Megoldás for ciklussal:<br>");
for(let i=0;i<10;i++){
	document.write(i+",");
}
document.write("<hr>");


//WHILE - ELőltesztelős ciklus
document.write("Megoldás while ciklussal:<br>");
let j=0;
while(j<10){
	document.write(j+",");
    j++;
}
document.write("<hr>");


//DO-WHILE - Háltultesztelős ciklus
document.write("Megoldás do-while ciklussal:<br>");
let k=0;
do{
	document.write(k+",");
    k++;
}while(k<10)