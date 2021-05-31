import AddTodo from './components/add-todo.js';

export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('todo_table');
        this.addTodoForm = new AddTodo();
        this.tasksLeft = document.getElementById('tasks_left');

        this.all = document.getElementById('all');
        this.active = document.getElementById('active');
        this.completed = document.getElementById('completed');

        this.all.onclick = () => { this.filterAll() }
        this.active.onclick = () => { this.filterActive() }
        this.completed.onclick = () => { this.filterCompleted() }

        this.addTodoForm.onClick(text => this.addTodo(text));
    }

    setModel(model) {
        this.model = model;
    }

    render() {
        const todos = this.model.getTodos();
        todos.forEach(todo => this.createRow(todo));
        this.tasksLeft.innerHTML = this.model.countTasksLeft();
    }

    addTodo(text) {
        const todo = this.model.addTodo(text);
        this.createRow(todo);
    }

    toggleComplete(id) {
        this.model.toggleComplete(id);
    }

    removeTodo(id) {
        this.model.removeTodo(id);
        document.getElementById(id).remove();
    }

    createRow(todo) {
        // creates row
        const row = this.table.insertRow();
        row.setAttribute('id', todo.id)
        row.innerHTML = `<td></td><td>${todo.text}</td><td></td>`;

        // creates checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        if (todo.completed) {
            document.getElementById(todo.id).style.textDecoration = 'line-through';
        } else {
            document.getElementById(todo.id).style.textDecoration = 'none';
        }
        checkbox.onclick = () => this.toggleComplete(todo.id);

        //creates delete btn
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'X';
        deleteBtn.onclick = () => this.removeTodo(todo.id);

        // adds btn and checkbox to row
        row.children[0].appendChild(checkbox);
        row.children[2].appendChild(deleteBtn);
    }

    filterAll() {
        const rows = this.table.getElementsByTagName('tr');
        for (const row of rows) {
            row.style.display = 'table-row';
        }
    }

    filterActive() {
        const rows = this.table.getElementsByTagName('tr');
        for (const row of rows) {
            row.style.display = 'table-row';
            const [completed, text, delBtn] = row.children;
            const isCompleted = completed.children[0].checked;
            console.log(isCompleted);

            if (isCompleted) {
                row.style.display = 'none';
            }
        }
    }

    filterCompleted() {
        const rows = this.table.getElementsByTagName('tr');
        for (const row of rows) {
            row.style.display = 'table-row';
            const [completed, text, delBtn] = row.children;
            const isCompleted = completed.children[0].checked;
            console.log(isCompleted);

            if (!isCompleted) {
                row.style.display = 'none';
            }
        }
    }
}