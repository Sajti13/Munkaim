//ÖSSZEGZÉS TÉTELE
let osszeg=0;
for(let i=0;i<tomb.length;i++){
	osszeg=osszeg+tomb[i];
}


//ÁTLAGSZÁMÍTÁS TÉTELE: a különbség
document.write("<br>A tömb elemeinek átlaga:"+osszeg/tomb.length);