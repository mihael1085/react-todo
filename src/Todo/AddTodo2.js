import React from 'react'

function AddTodo2({ onCreate }) {

const styles = {
	form: {
		'width': '650px',
		'margin': '0 auto',
		'marginBottom': '1 rem'
	}
}

function useInputValue(defaultValue = '') {
	const [value, setValue] = React.useState(defaultValue)
	
	return {
		bind: {
			value,
			onChange: (event) => setValue(event.target.value)
		},
		clear: () => setValue(''),
		value: () => value
	}
}

const input = useInputValue('')

function submitHandler(event) {
	event.preventDefault()
	
	if(input.value().trim()) {
		onCreate(input.value())
		input.clear()
	}
}

	return(
		<form style={styles.form} onSubmit={ submitHandler }>
			<input {...input.bind}/>
			<button type="submit" >Добавить</button>
		</form>
	)
}

export default AddTodo2