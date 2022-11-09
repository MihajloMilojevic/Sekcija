import React from 'react'
import CustomButton from '../components/CustomButton';

function Buttons() {

	function handleButtonClick() {
		alert("handleButtonClick");
	}

	function returnOnClickFunction(num) {
		console.warn("Ova funkcija je izvšena pre klika");
		return e => {
			alert(num);
		}
	}


	return (
		<div>
			
			<CustomButton color="red" onClick={() => alert("Red clicked")}>Red</CustomButton>
			<CustomButton color="green" onClick={e => console.log(e)}>Green</CustomButton>
			<CustomButton color="blue" onClick={handleButtonClick}>Blue</CustomButton>
			<CustomButton color="black" onClick={returnOnClickFunction(Math.PI)}>Black</CustomButton>
		</div>
	)
}

export default Buttons