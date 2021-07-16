import QuakesController from './QuakesController.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();

const getQuakesBtn = document.getElementById("radiusBtn");
getQuakesBtn.addEventListener('click', () => {
    let radius = document.getElementById("radiusInput").value;
    myQuakesController.getQuakesByRadius(radius);
})