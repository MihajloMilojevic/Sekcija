import React from 'react'

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

function List() {
	return (
		<ul>
			{list.map((item, index) => <li key={index}>{item}</li>)}
		</ul>
	)
}

export default List