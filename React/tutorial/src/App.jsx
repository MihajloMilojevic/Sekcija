import React from 'react'
import Counter from './Counter';
import CustomButton from './CustomButton';

const list = [
	"List Item 1",
	"List Item 2",
	"List Item 3",
	"List Item 4",
	"List Item 5",
	"List Item 6",
	"List Item 7",
	"List Item 8"
];

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
			<ul>
				{list.map((item, index) => <li key={index}>{item}</li>)}
			</ul>
		</>
	)
}

// class App extends React.Component {
// 	render() {
// 		return <h1>Hello React from Class Component</h1>
// 	}
// }

export default App;