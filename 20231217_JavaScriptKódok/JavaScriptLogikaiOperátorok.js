// && LOGIKAI ÉS - altGr+c
// || LOGIKAI VAGY - altGr+w
// ! LOGIKAI TAGADÁS - shirft+4

//Összekapcsoljunk vele feltételeket

let a=15;
let b=10;

//LOGIKAI VAGY
document.write("<h2>Logikai VAGY</h2>");
if(a>12 || b<12)//Ha mindkét feltétel igaz, akkor lefut
{
	document.write("<br>Mindkét feltétel igaz");
}

if(a>12 || b>12)//Ha egyik feltétel igaz, akkor lefut (ELSŐ)
{
	document.write("<br>Első feltétel igaz");
}

if(a<12 || b<12)//Ha egyik feltétel igaz, akkor lefut (MÁSODIK)
{
	document.write("<br>Második feltétel igaz");
}

if(a<12 || b>12)//Ha egyik feltétel sem igaz, akkor NEM FUT LE!
{
	document.write("<br>Egyik feltétel sem igaz");
}

//LOGIKAI ÉS
document.write("<h2>Logikai ÉS</h2>");
if(a>12 && b<12)//Ha mindkét feltétel igaz, akkor lefut
{
	document.write("<br>Mindkét feltétel igaz");
}

if(a>12 && b>12)//Ha egyik feltétel igaz, akkor  NEM FUT LE! (ELSŐ)
{
	document.write("<br>Első feltétel igaz");
}

if(a<12 && b<12)//Ha egyik feltétel igaz, akkor  NEM FUT LE! (MÁSODIK)
{
	document.write("<br>Második feltétel igaz");
}

if(a<12 && b>12)//Ha egyik feltétel sem igaz, akkor NEM FUT LE!
{
	document.write("<br>Egyik feltétel sem igaz");
}

//LOGIKAI TAGADÁS
document.write("<h2>Logikai TAGADÁS</h2>");
if (!true){
	document.write("Tagadom az igaz állítás");
}

if (!false){
	document.write("Tagadom az hamis állítás");
}