import data from "../dummy-data.json" assert {type: 'json'};

const {categories} = data;

const nav = document.getElementById("nav");
const ul = document.createElement("ul");

categories.forEach(category => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = category;
    a.href = `?category=${category}`;
    li.appendChild(a);
    ul.appendChild(li);
})

nav.appendChild(ul);