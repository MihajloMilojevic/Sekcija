import React from 'react'
import "./loader.css"

function Loader({show}) {
	return (
		<div className={`loader-wrapper gradient-background ${!show ?"hidden" : ""}`}><span className="loader"></span></div>
	)
}

export default Loader