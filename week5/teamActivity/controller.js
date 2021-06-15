import HikeModel from './model.js';
import HikesView from './view.js';

// Hike controller
export default class HikesController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        // this is how our controller will know about the model and view...we add them right into the class as members.
        this.hikeModel = new HikeModel();
        this.hikesView = new HikesView(parentId);
    }

    showHikeList() {
        this.hikesView.renderHikeList(this.hikeModel.getAllHikes(), this.parentElement);
        this.addHikeListener();
    }

    showOneHike(hikeName) {
        const hike = this.hikeModel.getHikeByName(hikeName);
        this.hikesView.renderOneHikeFull(hike, this.parentElement);

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