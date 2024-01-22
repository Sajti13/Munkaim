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