let szam=Number(prompt("Add meg a hatványozandó számot"));
let hatvany=Number(prompt("Add meg a hatványozás mértékét"));
//let eredmeny=szam**hatvany;
let eredmeny=Math.pow(szam, hatvany);
document.write(`A ${szam}<sup>${hatvany}</sup> eredménye: ${eredmeny}`);