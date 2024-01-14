let a=Number(prompt("Add meg a egyenlet négyzetes részét:"));
let b=Number(prompt("Add meg az egyenlet x-es részét"));
let c=Number(prompt("Add meg az egyenlet egész részét"));

if(a==0){
	document.write(` ${a}x<sup>2</sup>+(${b})x+(${c}) egyenlet nem másodfokú`);
}
else{
	let d=(b*b)-(4*a*c); //diszkrimináns
    if(d<0){
    	//nincs megoldás
        //3, 5, 4
    	document.write(` ${a}x<sup>2</sup>+(${b})x+(${c}) egyenletnek nincs megoldása`);
    }
    else if(d==0){
    	//1 megoldás lesz
        //4, 4, 1 megoldás -0,5
    	document.write(` ${a}x<sup>2</sup>+(${b})x+(${c}) egyenletnek egy megoldása van`);
        let x1=-b/(2*a);
        document.write("<br>x1="+x1);
    }
    else{
    	//2 megoldás lesz
        //1, 3, -10 megoldás 2 és -5
        document.write(` ${a}x<sup>2</sup>+(${b})x+(${c}) egyenletnek két megoldása van`);
        let x1=(-b+Math.sqrt(d))/(2*a)
        let x2=(-b-Math.sqrt(d))/(2*a)
        document.write("<br>x1="+x1);
        document.write("<br>x2="+x2);
    }
}