import React, { useState } from 'react'

export const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue)

	const handlerChangeValue = (event) => {
		setValue(event.target.value)
	}

	return {
		value,
		handlerChangeValue,
	}
}
