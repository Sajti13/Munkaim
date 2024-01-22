let kor=Number(prompt("Add meg életkorod:"));
if(kor>0 && kor<=6){
	document.write(`${kor} évesen kisgyermekkorban vagy`);
}
else if(kor>6 && kor<=12){
	document.write(`${kor} évesen gyermekkorban vagy`);
}
else if(kor>12 && kor<=16){
	document.write(`${kor} évesen serdülőkorban vagy`);
}
else if(kor>16 && kor<=20){
	document.write(`${kor} évesen ifjúkorban vagy`);
}
else if(kor>20 && kor<=30){
	document.write(`${kor} évesen fiatal felnőtt korban vagy`);
}
else if(kor>30 && kor<=60){
	document.write(`${kor} évesen felnőtt korban vagy`);
}
else if(kor>60 && kor<=120){
	document.write(`${kor} évesen aggkorban vagy`);
}
else{
	document.write(`${kor} NEM létezik az adatbázisban mint lehetőség!`);
}