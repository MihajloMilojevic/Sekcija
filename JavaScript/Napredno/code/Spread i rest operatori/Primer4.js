const styleColor = {
	color: "black",
	background: "yellow"
}
const styleSpace = {
	margin: "2rem",
	padding: "15px"
}
const border = "1px solid lime";
const styles = {
	border,
	...styleColor,
	...styleSpace
}
console.log(styles);
// {
// 	border: '1px solid lime',
// 	color: 'black',
// 	background: 'yellow',    
// 	margin: '2rem',
// 	padding: '15px'
// }