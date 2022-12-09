export default class Product {
    constructor({id, title, price, description, category, image}) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.imagePath = "../images";
    }
    getElement() {
        const product = document.createElement("div");
        product.onclick = () => window.location = "/pages/product.html?id="+this.id;
        product.classList.add("product");
        const image = document.createElement("div");
        image.classList.add("product-image");
        const img = document.createElement("img");
        img.src = this.imagePath + "/" + this.image;
        image.appendChild(img);
        const info = document.createElement("div");
        info.innerHTML = `
            <h3>${this.title}</h3>
            <p>${this.description}</p>
            <p>$${this.price}</p>
        `
        const addToCartButton = document.createElement("button");
        addToCartButton.innerText = "Add To Cart";
        addToCartButton.onclick = () => alert("add: " + this.id);
        info.appendChild(addToCartButton);
        product.appendChild(image);
        product.appendChild(info);
        return product;
    }
}