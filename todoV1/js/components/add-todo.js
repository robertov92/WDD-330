export default class AddTodo {
    constructor() {
        this.btn = document.getElementById('todo_btn');
        this.inputTodo = document.getElementById('todo_input');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if (this.inputTodo.value === '') {
                console.log('error')
            } else {
                callback(this.inputTodo.value);
            }

        }
    }
}