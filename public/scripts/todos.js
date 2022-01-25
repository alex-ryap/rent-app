export const getTodosByCount = (count) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${count}`)
        .then((result) => result.json())
        .then((todos) => {
        todos.map((todo) => console.log(todo));
    })
        .catch((error) => console.log(`Error: ${error.message}`));
};
