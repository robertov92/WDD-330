import HikeModel from './model.js';
import HikesView from './view.js';
import CommentController from './comments.js';

// Hike controller
export default class HikesController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        this.hikeModel = new HikeModel("hike");
        this.hikesView = new HikesView(parentId);
        this.comController = new CommentController('comments')
    }

    showHikeList() {
        this.parentElement.innerHTML = '';
        this.hikesView.renderHikeList(this.hikeModel.getAllHikes(), this.parentElement);
        this.addHikeListener();
        this.comController.showCommentList();
    }

    showOneHike(hikeName) {
        const hike = this.hikeModel.getHikeByName(hikeName);
        this.hikesView.renderOneHikeFull(hike, this.parentElement)
            .onclick = () => this.showHikeList();
        this.comController.showComsByName(hikeName);

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