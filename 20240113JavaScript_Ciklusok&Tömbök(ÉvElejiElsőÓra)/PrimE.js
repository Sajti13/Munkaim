let vizsgaltSzam=Number(prompt("Add meg a vizsgálandó számot:"));
let oszto=0;
for(let i=1;i<=vizsgaltSzam;i++){
	if(vizsgaltSzam%i==0){
    	oszto++;
    }
}

if(oszto==2){
	document.write("A "+vizsgaltSzam+" prím");
}
else{
	document.write("A "+vizsgaltSzam+" NEM prím");
}