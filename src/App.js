import React from 'react'
import TodoList from './Todo/TodoList'

const todos = [
  {id: 0, title: 'купить огурцы', completed: false},
  {id: 1, title: 'купить картошу', completed: false},
  {id: 2, title: 'купить молоко', completed: false}
]

function App() {
  return (
    <div className="App">
      <TodoList todos = {todos} />
    </div>
  );
}

export default App;
