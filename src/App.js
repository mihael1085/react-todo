import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'

function App() {

  const [todos, setTodos] = React.useState([
    {id: 0, title: 'купить огурцы', completed: false},
    {id: 1, title: 'купить картошу', completed: false},
    {id: 2, title: 'купить молоко', completed: false}
  ])

  function deleteTodo(id) {
		setTodos(todos.filter(todo => todo.id !== id))
	}

  function toggleTodo(id) {
    setTodos(todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  return (
    <Context.Provider value ={{ toggleTodo }}>
    <div className="App">
      <h1>React todo list</h1>
      <TodoList todos = {todos} removeTodo={deleteTodo}/>
    </div>
    </Context.Provider>
  );
}

export default App;
