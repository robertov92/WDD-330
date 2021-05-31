import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', () => {
    const view = new View();
    const model = new Model();

    model.setView(view);
    view.setModel(model);

    view.render();
})