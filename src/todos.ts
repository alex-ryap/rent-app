interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodosByCount = (count: number): void => {
  fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${count}`)
    .then((result) => result.json())
    .then((todos: Todo[]) => {
      todos.map((todo) => console.log(todo));
    })
    .catch((error) => console.log(`Error: ${error.message}`));
};
