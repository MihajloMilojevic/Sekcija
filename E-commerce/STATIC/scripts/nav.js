import data from "../dummy-data.json" assert {type: 'json'};

const {categories} = data;

const nav = document.getElementById("nav");

const home = document.createElement("div");
home.innerHTML = `<a href="/">home</a>`;
nav.appendChild(home);

const ul = document.createElement("ul");

categories.forEach(category => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = category;
    a.href = `/pages/category.html?category=${category}`;
    li.appendChild(a);
    ul.appendChild(li);
})

nav.appendChild(ul);