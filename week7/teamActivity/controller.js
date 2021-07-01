import HikeModel from './model.js';
import HikesView from './view.js';

// Hike controller
export default class HikesController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        this.hikeModel = new HikeModel();
        this.hikesView = new HikesView(parentId);
    }

    showHikeList() {
        this.parentElement.innerHTML = '';
        this.hikesView.renderHikeList(this.hikeModel.getAllHikes(), this.parentElement);
        this.addHikeListener();
    }

    showOneHike(hikeName) {
        const hike = this.hikeModel.getHikeByName(hikeName);
        this.hikesView.renderOneHikeFull(hike, this.parentElement)
            .onclick = () => this.showHikeList();

    }
    addHikeListener() {
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(element => {
            element.addEventListener('click', () => {
                this.showOneHike(element.innerText.split('\n')[0]);
            });
        });
    }
}