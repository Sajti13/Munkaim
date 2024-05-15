function KivalasztottBetuk(vizsgaltSzoveg, kivalasztottBetuk) {
    var gyakorisag = 0;
    for (var _i = 0, kivalasztottBetuk_1 = kivalasztottBetuk; _i < kivalasztottBetuk_1.length; _i++) {
        var betu = kivalasztottBetuk_1[_i];
        for (var i = 0; i < vizsgaltSzoveg.length; i++) {
            if (vizsgaltSzoveg[i] === betu) {
                gyakorisag++;
            }
        }
    }
    return gyakorisag;
}
// 2. feladat
function Szamtani(elsoErtek, masodikErtek, harmadikErtek) {
    var kulonbseg1 = masodikErtek - elsoErtek;
    var kulonbseg2 = harmadikErtek - masodikErtek;
    return kulonbseg1 === kulonbseg2;
}
// 3. feladat
function VizsgaJegy(osszPont) {
    if (osszPont >= 0 && osszPont <= 49) {
        return "Elégtelen";
    }
    else if (osszPont >= 50 && osszPont <= 59) {
        return "Elégséges";
    }
    else if (osszPont >= 60 && osszPont <= 69) {
        return "Közepes";
    }
    else if (osszPont >= 70 && osszPont <= 79) {
        return "Jó";
    }
    else if (osszPont >= 80 && osszPont <= 100) {
        return "Jeles";
    }
    else {
        return "Érvénytelen pontszám";
    }
}
