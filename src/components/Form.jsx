import React from 'react'
import { useInput } from '../hook/useInput'
const Form = () => {
	const { value, handlerChangeValue } = useInput('')

	return (
		<>
			<p>{value}</p>
			<input value={value} onChange={handlerChangeValue} />
			<button>Click on me</button>
		</>
	)
}

export default Form
