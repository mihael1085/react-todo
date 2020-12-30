import React from 'react'

function TodoItem(props) {
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
			<span style={styles.span}>
				<input type="checkbox" />
				<strong>{ props.index + 1}</strong>
				&nbsp;
				{ props.todo.title }
			</span>
			<button style={styles.button}>&times;</button>
		</li>
	)
}

export default TodoItem