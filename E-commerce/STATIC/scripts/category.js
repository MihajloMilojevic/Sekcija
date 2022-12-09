import data from "../dummy-data.json" assert {type: 'json'};
import Product from "./classes/product.js";

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const category = params.category;
if(!category) window.location = "/";

document.getElementsByTagName("h1")[0].innerText = category;

const products = data.products.filter((pr) => pr.category === category);

const productsDiv = document.getElementById("products");

products.forEach(p => {
    const product = new Product(p);
    productsDiv.appendChild(product.getElement());
});