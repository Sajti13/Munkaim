function KivalasztottBetuk(vizsgaltSzoveg: string, kivalasztottBetuk: string[]): number {
    let gyakorisag = 0;
    for (const betu of kivalasztottBetuk) {
        for (let i = 0; i < vizsgaltSzoveg.length; i++) {
            if (vizsgaltSzoveg[i] === betu) {
                gyakorisag++;
            }
        }
    }
    return gyakorisag;
}
// 2. feladat

function Szamtani(elsoErtek: number, masodikErtek: number, harmadikErtek: number): boolean {
    const kulonbseg1 = masodikErtek - elsoErtek;
    const kulonbseg2 = harmadikErtek - masodikErtek;
    return kulonbseg1 === kulonbseg2;
}
// 3. feladat

function VizsgaJegy(osszPont: number): string {
    if (osszPont >= 0 && osszPont <= 49) {
        return "Elégtelen";
    } else if (osszPont >= 50 && osszPont <= 59) {
        return "Elégséges";
    } else if (osszPont >= 60 && osszPont <= 69) {
        return "Közepes";
    } else if (osszPont >= 70 && osszPont <= 79) {
        return "Jó";
    } else if (osszPont >= 80 && osszPont <= 100) {
        return "Jeles";
    } else {
        return "Érvénytelen pontszám";
    }
}