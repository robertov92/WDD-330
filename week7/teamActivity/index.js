import HikesController from './controller.js'

document.addEventListener('DOMContentLoaded', () => {
    const parentElement = 'hikeList';
    const controller = new HikesController(parentElement);

    controller.showHikeList();
})