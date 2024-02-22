<script>
    const EuropaiUnio = [{
        orszag: "Ausztria",
    csatlakozas: "1995.01.01"
    },
    {
        orszag: "Belgium",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Bulgária",
    csatlakozas: "2007.01.01"
    },
    {
        orszag: "Ciprus",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Csehország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Dánia",
    csatlakozas: "1973.01.01"
    },
    {
        orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
    },
    {
        orszag: "Észtország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Finnország",
    csatlakozas: "1995.01.01"
    },
    {
        orszag: "Franciaország",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Görögország",
    csatlakozas: "1981.01.01"
    },
    {
        orszag: "Hollandia",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Horvátország",
    csatlakozas: "2013.07.01"
    },
    {
        orszag: "Írország",
    csatlakozas: "1973.01.01"
    },
    {
        orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Lettország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Litvánia",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Magyarország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Málta",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Németország",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Olaszország",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Portugália",
    csatlakozas: "1986.01.01"
    },
    {
        orszag: "Románia",
    csatlakozas: "2007.01.01"
    },
    {
        orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
    },
    {
        orszag: "Svédország",
    csatlakozas: "1995.01.01"
    },
    {
        orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
    }
    ]


    // 1. Feladat: Hány tagja van az EU-nak?

    function hanyTagjaVan(EuropaiUnio){
        let osszesTag=0;
    for(let i=0;i<EuropaiUnio.length;i++){
        osszesTag++
    }
    return osszesTag;
}
    console.log("Az EU-nak összesen ennyi tagja van: "+hanyTagjaVan(EuropaiUnio));

    // 2. feladat: Hány ország csatlakozott 2007-ben?

    function EUCsatKetezerhet(EuropaiUnio){
        let csatlakozottakSzamaKetezerhetben=0;
    for(let i=0;i<EuropaiUnio.length;i++){
    	if(EuropaiUnio[i].csatlakozas=="2007.01.01"){
        csatlakozottakSzamaKetezerhetben++;
    }
    }
    return csatlakozottakSzamaKetezerhetben;
}
    console.log("Összesen 2007-ben csatlakozottak száma: "+EUCsatKetezerhet(EuropaiUnio));

    // 3. feladat: Csatlakozott e MO az EUhoz? IGEN\NEM

    function moEUCsat(EuropaiUnio){
        let mo=0;
    for(let i=0;i<EuropaiUnio.length;i++){
    	if(EuropaiUnio[i].orszag="Magyarország"){
        		return "Igen";
   			}
    else{
        		return "Nem";
            }
    }
    return mo;
}
    console.log("Magyarország csatlakozott-e az EU-hoz?: "+moEUCsat(EuropaiUnio));


    // 4. feladat: Májusban csatlakoztak e valaha? IGE\NEM

    function majCsatValaha(EuropaiUnio){
	for(let i=0;i<EuropaiUnio.length;i++){
        let csatlakozasok = EuropaiUnio[i].csatlakozas;
    let majus = csatlakozasok.substring(5,7);
    if(majus==="05") {
           return "Igen";
   		   }
    	}
    return "Nem";
      
         
}

    console.log("Volt májusban csatlakozás az EU-hoz?: "+majCsatValaha(EuropaiUnio));

    // 5. feladat Melyik osz csatlakozott utoljásra?

    function utosloCsat(EuropaiUnio){
        let utolso=0;
    for(let i=0;i<EuropaiUnio.length;i++){
		if(EuropaiUnio[i].csatlakozas>EuropaiUnio[utolso].csatlakozas){
        utolso = i;
        }
	}
    return utolso; 
}
    function UtolsoBelepoKIr(utosloCsat){
        console.log("Az utolsó csatlakozás: " + EuropaiUnio[utosloCsat].orszag);
}

    UtolsoBelepoKIr(utosloCsat(EuropaiUnio));

</script>

