import React from 'react'
import {useParams, useNavigate} from "react-router-dom";
import CustomButton from '../components/CustomButton';

function Hooks() {

	const params = useParams();
	const navigate = useNavigate();

	return (
		<div>
			<h1>Test react-router-dom hooks</h1>
			<p>{params.text}</p>
			<p>Try changing the url</p>
			<CustomButton color={"green"} onClick={() => navigate(`/hooks/${Math.round(Math.random()*Math.pow(100, 10)).toString(36)}`)}>Random url</CustomButton>
		</div>
	)
}

export default Hooks