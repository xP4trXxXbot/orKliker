
TEST.addEventListener('click', addSave = () => {
    localStorage.setItem("points", pointsLogic);
    localStorage.setItem("coins", coinsLogic);
});

TEST2.addEventListener('click', deleteSave = () => {
    localStorage.removeItem("points");
    localStorage.removeItem("coins");
});