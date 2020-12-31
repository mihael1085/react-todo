import React, {useContext} from 'react'
import Context from '../context'

function TodoItem({ todo, index, deleteTodo}) {
	const { toggleTodo } = useContext(Context)
	const styles = {
		li: {
			'listStyleType': 'none',
			'marginBottom': '1rem',
			'display': 'flex',
			'justifyContent': 'space-between'
		},
		button: {
			'borderRadius': '50%',
			'backgroundColor': 'red',
			'color': '#fff'
		},
		span:{
		}
	}



	return (
		<li style={styles.li}>
			<span className={todo.completed ? 'done' : ''}>
				<input 
					type="checkbox" 
					onChange = {() => {
						toggleTodo(todo.id)
						console.log(todo)
					}
					}
				/>
				<strong>{ index + 1}</strong>
				&nbsp;
				{ todo.title }
			</span>
			<button style={styles.button} onClick={() => deleteTodo(todo.id)}>&times;</button>
		</li>
	)
}

export default TodoItem