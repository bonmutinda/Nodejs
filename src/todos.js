let todos = [];

function getAll() {
    return todos;
}

function add(todo) {
    todo.id = todos.length + 1; 
    todos.push(todo);
}

function remove(id) {
    todos = todos.filter(todo => todo.id !== parseInt(id, 10));
}

module.exports = {
    getAll,
    add,
    remove
};
