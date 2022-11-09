import React, { useEffect } from 'react'
import { useStateContext } from '../context/stateContext'

function ContextTest() {

	const {setLoader} = useStateContext();
	useEffect(() => {
		setLoader(true);
		setTimeout(() => {
			setLoader(false)
		}, 3 * 1000);
	}, [])
	return (
		<h1>ContextTest</h1>
  	)
}

export default ContextTest