import React from 'react'
import Counter from './Counter';
import CustomButton from './CustomButton';

function App() {

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
		<>
			<h1>Hello React from Functional Component</h1>
			<CustomButton color="red" onClick={() => alert("Red clicked")}>Red</CustomButton>
			<CustomButton color="green" onClick={e => console.log(e)}>Green</CustomButton>
			<CustomButton color="blue" onClick={handleButtonClick}>Blue</CustomButton>
			<CustomButton color="black" onClick={returnOnClickFunction(Math.PI)}>Black</CustomButton>
			<Counter />
			<Counter />
			<Counter />
			<Counter />
		</>
	)
}

// class App extends React.Component {
// 	render() {
// 		return <h1>Hello React from Class Component</h1>
// 	}
// }

export default App;