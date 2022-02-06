const AXE = document.querySelector(".axe");
const CZAS = document.querySelector(".czas");
let licznik = 0;

AXE.addEventListener('click', axe = () => {
    if (coinsLogic >= 2000) {
        coinsLogic = coinsLogic - 2000;
        COINS.innerHTML = coinsLogic;

        const stoper = () => {
            licznik++;
            CZAS.innerHTML = licznik;
            for (let i = 0; i < 80; i++) {
                pointsLogic++;
            }
            POINTS.innerHTML = pointsLogic;
                for (let i = 0; i < 20; i++) {
                    coinsLogic++;
                }
            COINS.innerHTML = coinsLogic;
            if (licznik === 60) {
                clearInterval(Interval);
            }
            if (licznik === 120) {
                clearInterval(Interval);
            }
            if (licznik === 180) {
                clearInterval(Interval);
                licznik = 0;
            }
        };

        const Interval = setInterval(stoper, 1000);
    }
});