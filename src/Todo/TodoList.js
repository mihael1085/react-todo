import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, index, key}) {
	const styles = {
		ul: {
			'width': '600px',
			'margin': '0 auto'
		}
	}
	return (
		<ul style={styles.ul}>
			{todos.map((todo, index) => {
				return ( <TodoItem todo={todo} key={todo.id} index={index}/> )
			})}
		</ul>
	)
}

	export default TodoList