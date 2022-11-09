import React from "react";
import CustomButton from "./CustomButton";


function Counter() {
	const [count, setCount] = React.useState(0);
	function handleIncrement() {
		setCount(count + 1)
	}
	function handleDecrement() {
		setCount((oldCount) => oldCount - 1);
	}
	return (
		<>
			<p>
				{count}  
				{" "} - {count > 0 ? "Pozitivno" : count < 0 ? "Negativno" : "Nula"}
				{count === 5 && <span> + PET!!!</span>}
			</p>
			<CustomButton color="red" onClick={handleDecrement}>-</CustomButton>
			<CustomButton color="green" onClick={handleIncrement}>+</CustomButton>	
		</>
	)
}

// class Counter extends React.Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			count: 0
// 		}
// 		this.handleDecrement = this.handleDecrement.bind(this);
// 		this.handleIncrement = this.handleIncrement.bind(this);
// 	}
// 	handleIncrement() {
// 		this.setState({count: this.state.count + 1});
// 	}
// 	handleDecrement() {
// 		this.setState({count: this.state.count - 1});
// 	}
// 	render() {
// 		return (
// 			<>
// 				<p>{this.state.count}</p>
// 				<CustomButton color="red" onClick={this.handleDecrement}>-</CustomButton>
// 				<CustomButton color="green" onClick={this.handleIncrement}>+</CustomButton>	
// 			</>
// 		)
// 	}
// }

export default Counter;