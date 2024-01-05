//Random szám generálás

//0-1ig valós szám:
//let randomSzam=Math.random();


//0-100ig valós szám:
//let randomSzam=Math.random()*100;


//0-100ig egész szám szám:
/*
let randomSzam=Math.round(Math.random()*100);//Általános kerekítés szabályainak felel meg
let randomSzam2=Math.ceil(Math.random()*100);//felfelé kerekítés
let randomSzam3=Math.floor(Math.random()*100);//lefelé kerekítés

document.write(randomSzam);
document.write("<hr>");
document.write(randomSzam2);
document.write("<hr>");
document.write(randomSzam3);
*/


//-10 és +10 közötti egész szám
let randomSzam=Math.round(Math.random()*10)-5;
document.write(randomSzam);
document.write("<hr>");

//Változós magyarázattal
let felsoHatar=5;
let alsoHatar=-5;
let randomSzam2=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
document.write(randomSzam2);


//Érdekesség:

//Php
//$randomSzam=Rand(-5,5);

//JavaScript
//let randomSzam=Math.round(Math.random()*10)-5;
