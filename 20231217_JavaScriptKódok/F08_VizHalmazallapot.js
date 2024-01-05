let fok=Number(prompt("Add meg az aktuális hőmérsékletet"));

if(fok<0){
	document.write(`A víz halmazállapota ${fok}C° esetén szilárd(jég)`);
}
else if(fok>100){
	document.write(`A víz halmazállapota ${fok}C° esetén légnemű(gőz)`);
}
else{
	document.write(`A víz halmazállapota ${fok}C° esetén folyékony(víz)`);
}