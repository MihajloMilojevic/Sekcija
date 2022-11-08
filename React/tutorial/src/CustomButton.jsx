import React from "react";
import "./CustomButton.css"

function CustomButton({children, color, onClick}) {
	return (
		<button
			onClick={onClick}
			className="custom-button"
			style={{
				borderColor: color,
				color: color,
			}}
		>
			{children}
		</button>
	)
}

// class CustomButton extends React.Component {
// 	render() {
// 		return (
// 			<button
// 				style={{
// 					outline: "none",
// 					background: "#eeeeee",
// 					borderWidth: 3,
// 					borderColor: this.props.color,
// 					borderStyle: "solid",
// 					color: this.props.color,
// 					fontSize: 24,
// 					padding: "0.75rem 1.5rem",
// 					margin: "10px",
// 					cursor: "pointer"
// 				}}
// 			>
// 				{this.props.children}
// 			</button>
// 		)
// 	}
// }

export default CustomButton;