<script>
let tomb=[];

for(let i=0;i<10;i++){
	let generaltSzam=Math.round(Math.random()*100);
    tomb.push(generaltSzam);
}

document.write(tomb);
document.write("<hr><ul>");
for(let i=0;i<tomb.length;i++){
	document.write("<li>"+tomb[i]+"</li>");
}
document.write("</ul>");
//INDEX, kezdőérték:0


//ÖSSZEGZÉS TÉTELE
let osszeg=0;
for(let i=0;i<tomb.length;i++){
	osszeg=osszeg+tomb[i];
}
document.write("<br>A tömb elemeinek összege:"+osszeg);

//ÁTLAGSZÁMÍTÁS TÉTELE: a különbség
document.write("<br>A tömb elemeinek átlaga:"+osszeg/tomb.length);

//MINIMUM ÉRTÉK KERESÉS TÉTELE
let minErtek=tomb[0];
for(let i=1;i<tomb.length;i++){
	if(tomb[i]<minErtek){
    	minErtek=tomb[i];
    }
}
document.write("<br>A tömb legkisebb elemének értéke:"+minErtek);

//MAXIMUM ÉRTÉK KERESÉS TÉTELE
let maxErtek=tomb[0];
for(let i=1;i<tomb.length;i++){
	if(tomb[i]>maxErtek){
    	maxErtek=tomb[i];
    }
}
document.write("<br>A tömb legnagyobb elemének értéke:"+maxErtek);

//MINIMUM INDEX ALAPÚ KERESÉS TÉTELE
let minIndex=0;
for(let i=1;i<tomb.length;i++){
	if(tomb[i]<tomb[minIndex]){
    	minIndex=i;
    }
}
document.write("<br>A tömb legkisebb elemének indexe:"+minIndex);

//MAXIMUM INDEX ALAPÚ KERESÉS TÉTELE
let maxIndex=0;
for(let i=1;i<tomb.length;i++){
	if(tomb[i]>tomb[maxIndex]){
    	maxIndex=i;
    }
}
document.write("<br>A tömb legnagyobb elemének indexe:"+maxIndex);

//MEGSZÁMLÁLÁS TÉTELE: PÁROS SZÁMOKRA
let darab=0;
for(let i=0;i<tomb.length;i++){
	if(tomb[i]%2==0){
    	darab++;
    }
}
document.write("<br>A tömbben lévő páros elemeknek a mennyisége:"+darab);

//KIVÁLOGATÁS TÉTELE: PÁROS SZÁMOKRA
document.write("<br>A tömbben lévő páros elemeknek a következők:");

for(let i=0;i<tomb.length;i++){
	if(tomb[i]%2==0){
    	document.write(tomb[i]+",");
    }
}
</script>
