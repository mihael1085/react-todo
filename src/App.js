import React, { Suspense, useEffect} from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/Modal'

const AddTodo2 = React.lazy (
      () => 
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(import('./Todo/AddTodo2'))
            }, 3000)
          })
 )

function App() {

  const [todos, setTodos] = React.useState('')

  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
        .then(response => response.json())
        .then(todos => setTimeout (
           () => {
             setTodos(todos)
             setLoading(false)
            }, 2000 )
        )
      } , [] )

  function removeTodo(id) {
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

	function addTodo(title) {
		setTodos(todos.concat({
      id: Date.now(),
      title: title,
      completed: false
    }))
  }


  return (
    <Context.Provider value ={{ toggleTodo, removeTodo, addTodo }}>
    <div className="App">
      <h1>React todo list</h1>
        <Modal />
      <React.Suspense fallback={<Loader />}>
        <AddTodo2 onCreate={ addTodo }/>
      </React.Suspense>
      {(todos.length) ? <TodoList todos = {todos} /> : 
      (loading ? <Loader /> : <p>No todos </p> )}
    </div>
    </Context.Provider>
  );
}

export default App;
