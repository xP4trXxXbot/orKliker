const HEADING = document.querySelector('.heading');
const HEADING2 = document.querySelector('.heading2');
const HEADING2HEAD = document.querySelector('.headingHead2');
const DISHEAD = document.querySelector('.disHead');
const DISIMG = document.querySelector('.disImg');
const POINTS = document.querySelector('.points');
const COINS = document.querySelector('.coins');
const TEST = document.querySelector('.cos');
const SMOK = document.querySelector('.smok');
const MONSTER1 = document.querySelector('.monster1');

let pointsLogic = 0;
let coinsLogic = 0;

POINTS.innerHTML = pointsLogic;
COINS.innerHTML = coinsLogic;

//logika
const basicPoints = () => {
    pointsLogic++;
    POINTS.innerHTML = pointsLogic;
};

const pointslvl2 = () => {
    if(pointsLogic >= 1001)
    {
        coinsLogic++;
        COINS.innerHTML = coinsLogic;
        pointsLogic+=4;
        POINTS.innerHTML = pointsLogic;
    }
};

const pointslvl3 = () => {
    if(pointsLogic >= 2001)
    {
        coinsLogic++;
        coinsLogic++;
        COINS.innerHTML = coinsLogic;
        pointsLogic+=5;
        POINTS.innerHTML = pointsLogic;
    }
};

const pointslvl4 = () => {
    if(pointsLogic >= 5001)
    {
        coinsLogic++;
        coinsLogic++;
        coinsLogic++;
        COINS.innerHTML = coinsLogic;
        pointsLogic+=10;
        POINTS.innerHTML = pointsLogic;
    }
};

const pointslvl5 = () => {
    if(pointsLogic >= 10001)
    {
        coinsLogic++;
        coinsLogic++;
        coinsLogic++;
        coinsLogic++;
        COINS.innerHTML = coinsLogic;
        pointsLogic+=20;
        POINTS.innerHTML = pointsLogic;
    }
};

const pointslvl6 = () => {
    if(pointsLogic >= 50000)
    {
        coinsLogic++;
        coinsLogic++;
        coinsLogic++;
        coinsLogic++;
        coinsLogic++;
        COINS.innerHTML = coinsLogic;
        pointsLogic+=30;
        POINTS.innerHTML = pointsLogic;
    }
};

const pointslvl7 = () => {
    if(pointsLogic >= 500000)
    {
        coinsLogic++;
        coinsLogic++;
        coinsLogic++;
        coinsLogic++;
        coinsLogic++;
        coinsLogic++;
        COINS.innerHTML = coinsLogic;
        pointsLogic+=40;
        POINTS.innerHTML = pointsLogic;
    }
};

const coins = () => {
    if(pointsLogic > 0)
    if(pointsLogic % 20 == 0 || pointsLogic % 4 == 0 || pointsLogic % 7 == 0) {
        coinsLogic += 1;
        COINS.innerHTML = coinsLogic;
    }
};

const smok = () => {
    if (coinsLogic >= 50) {
        coinsLogic = coinsLogic - 50;
        COINS.innerHTML = coinsLogic;
        pointsLogic = pointsLogic + 200;
        POINTS.innerHTML = pointsLogic;
    }
};

const monster1 = () => {
    if (coinsLogic >= 500) {
        coinsLogic = coinsLogic - 500;
        COINS.innerHTML = coinsLogic;
        pointsLogic = pointsLogic + 5000;
        POINTS.innerHTML = pointsLogic;
    }
};

DISIMG.addEventListener('click', addPoints = () => {
    basicPoints();
    pointslvl2();
    pointslvl3();
    pointslvl4();
    pointslvl5();
    coins();
});

SMOK.addEventListener('click', smok);
MONSTER1.addEventListener('click', monster1);






//po kliknięciu
// HEADING.addEventListener('click', showDIS = () => {
//     DISHEAD.classList.add('show');
//     HEADING.classList.add('hidden');
//     HEADING2.classList.add('show');
//     HEADING2HEAD.classList.add('show');
// });

// HEADING2.addEventListener('click', closeDIS = () => {
//     DISHEAD.classList.remove('show');
//     HEADING.classList.remove('hidden');
//     HEADING2.classList.remove('show');
//     HEADING2HEAD.classList.remove('show');
// });