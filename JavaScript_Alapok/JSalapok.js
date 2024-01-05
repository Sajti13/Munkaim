//Megjegyzés szövege- vagy sor vége, vagy teljes sorba

/*
Létezik
többsoros 
megjegyzés 
is
teljes sor, sor közepén, vagy sor végén is...
*/

alert("Szeretem a programozást");
document.write("<b>Szeretem</b> a programozást");
console.log("Szeretem a programozást");

//VÁLTOZÓK:
//szám, szöveg, logikai, tömb, objektumok, undentify, symbol

//let - NEM újradeklarálható, de módosítható, hatáskör: {}
//const - NEM újradeklarálható, nem módosítható, hatáskör: GLOBÁLIS
//var - ÚJRADEKLARÁLHATÓ, MÓDOSÍTHATÓ, hatáskör: GLOBÁLIS

let szamEgesz=21;
let szamValos=5.6;
let szoveg='alma';
let szoveg2="körte";
let logikai=true;
let logikai2=false;

//Sima változó kíratása:
//document.write(szamEgesz);

//Változó és szöveg megjelenítése:
document.write("<br>Szám típusú változók: "+szamEgesz+","+szamValos);
document.write("<br>Szám típusú változók: ",szamEgesz,",",szamValos);
document.write(`<br>Szám típusú változók: ${szamEgesz},${szamValos},${szoveg}`);
alert(`Szám típusú változók: ${szamEgesz},${szamValos},${szoveg}`);
console.log(`Szám típusú változók: ${szamEgesz},${szamValos},${szoveg}`);

/*
Értékadó operátor:
	=
Aritmetikai operátorok:
	+
	-
	*
	/
	%
	**
*/
