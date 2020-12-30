import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
	const styles = {
		ul: {
			'width': '600px',
			'margin': '0 auto'
		}
	}
	return (
		<ul style={styles.ul}>
			{props.todos.map((todo, index) => {
				return ( <TodoItem todo = {todo} key={todo.id} index={index}/> )
			})}
		</ul>
	)
}

	export default TodoList