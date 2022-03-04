import React, { useRef } from 'react'
import { useHover } from '../hook/useHover'
const Hover = () => {
	const divRef = useRef()
	const isHovering = useHover(divRef)

	return (
		<div
			ref={divRef}
			style={{
				width: '300px',
				height: '300px',
				background: isHovering ? 'teal' : 'yellow',
			}}
		>
			Hover
		</div>
	)
}

export default Hover
