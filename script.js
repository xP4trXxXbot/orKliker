const HEADING = document.querySelector('.heading');
const HEADING2 = document.querySelector('.heading2');
const HEADING2HEAD = document.querySelector('.headingHead2');
const DISHEAD = document.querySelector('.disHead');
const DISIMG = document.querySelector('.disImg');
const POINTS = document.querySelector('.points');
const COINS = document.querySelector('.coins');
const TEST = document.querySelector('.cos');

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
        pointsLogic+=4;
        POINTS.innerHTML = pointsLogic;
    }
};

const pointslvl3 = () => {
    if(pointsLogic >= 2001)
    {
        pointsLogic+=5;
        POINTS.innerHTML = pointsLogic;
    }
};

const pointslvl4 = () => {
    if(pointsLogic >= 5001)
    {
        pointsLogic+=10;
        POINTS.innerHTML = pointsLogic;
    }
};

const pointslvl5 = () => {
    if(pointsLogic >= 10001)
    {
        pointsLogic+=20;
        POINTS.innerHTML = pointsLogic;
    }
};

const coins = () => {
    if(pointsLogic > 0)
    if(pointsLogic % 20 == 0) {
        coinsLogic += 5;
        COINS.innerHTML = coinsLogic;
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