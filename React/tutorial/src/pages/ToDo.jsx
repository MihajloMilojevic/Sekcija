import React, {useState} from "react";

function ToDo() {

	const [list, setList] = useState([]);
	const [text, setText] = useState("");

	function handleChange(e) {
		setText(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if(!text) return;
		setList([...list, text]);
		setText("");
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" value={text} onChange={handleChange} />
				<button type="submit">ADD</button>
			</form>
			<ul>
				{
					list.map((item, index) => <li key={index}>{item}</li>)
				}
			</ul>
		</>
	)
}

export default  ToDo;