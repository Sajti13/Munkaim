let a=Number(prompt("Add meg a négyzet a oldalának méretét:"));
let b=Number(prompt("Add meg a négyzet b oldalának méretét:"));
let kerulet= (a+b)*2;
let terulet=a*b;
document.write(`A ${a},${b} egység oldalú téglalap kerulete: ${kerulet} egység`);
document.write(`<br>A ${a},${b} egység oldalú téglalap terulete: ${terulet} egység<sup>2</sup>`);
