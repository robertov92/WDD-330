export default class Model {
    constructor() {
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos2'));
        if (!this.todos || this.todos.length < 1) {
            this.todos = [{
                id: 0,
                text: 'To-do example. You may delete this entry as you wish. It will reappear if this list is empty and you refresh the page.',
                completed: false
            }]
            this.currentId = 1;
        } else {
            this.currentId = this.todos[this.todos.length - 1].id + 1;
        }


    }

    setView(view) {
        this.view = view;
    }

    getTodos() {
        return this.todos;
    }

    findTodo(id) {
        return this.todos.findIndex(todo => todo.id === id);
    }

    save() {
        localStorage.setItem('todos2', JSON.stringify(this.todos));
        this.view.tasksLeft.innerHTML = this.countTasksLeft();
    }

    countTasksLeft() {
        let count = 0;
        for (const todo of this.todos) {
            if (!todo.completed) count++;
        }
        return count;
    }

    addTodo(text) {
        const todo = {
            id: this.currentId++,
            text,
            completed: false
        }
        this.todos.push(todo);
        console.log(this.todos);
        this.save();
        return {...todo };
    }

    removeTodo(id) {
        const index = this.findTodo(id);
        this.todos.splice(index, 1);
        this.save();
    }

    toggleComplete(id) {
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        if (todo.completed) {
            document.getElementById(id).style.textDecoration = 'line-through';
        } else {
            document.getElementById(id).style.textDecoration = 'none';
        }
        this.save();
    }
}