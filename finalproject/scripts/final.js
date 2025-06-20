/* banner slider */
const images = document.querySelectorAll('.banner-img');
const texts = document.querySelectorAll('.banner-text');

let current = 0;
    setInterval(() => {
        images[current].classList.remove('active');
        texts[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
        texts[current].classList.add('active');
}, 4000);
       
/* navigation menu */
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('myButton');
  const nav = document.getElementById('animateme');

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    nav.classList.toggle('open');
  });
});

/* product cards*/
const url = "json/products.json";
const products = document.querySelector("#products");

async function getProductData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProducts(data.products);
}

const displayProducts = (productsData) => {
    productsData.forEach((product) => {
        const section = document.createElement('section');
        const name = document.createElement('h2');
        const origin = document.createElement('h3');
        const image = document.createElement('img');
        const roasted_grade = document.createElement('h4');
        const format = document.createElement('h4');
        const price = document.createElement('h3');
        const button = document.createElement('button');

        name.textContent = `${product.name}`;
        origin.textContent = `${product.origin || ''}`;
        roasted_grade.textContent = `Roasted Grade: ${product.roasted_grade}`;
        format.textContent = `Format: ${product.format}`;
        price.textContent = `USD: ${product.price}`;
        button.textContent = "Reserve this product";

        image.setAttribute('src', product.imageurl);
        image.setAttribute('alt', `${product.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('style', 'border-radius: 8px; margin-right: 5px; width: 90%; height: auto; display: flex;');

        section.setAttribute('class', 'product-card');
        section.setAttribute('style', `
            display: grid; 
            grid-template-columns: 30% 70%; 
            grid-template-rows: auto auto auto auto auto; 
            position: relative;
        `);

        // Style the button to stick to the bottom of the card
        button.setAttribute('style', `
            grid-column: 1 / span 2;
            margin-top: 16px;
            align-self: end;
            justify-self: center;
            padding: 8px 16px;
            background-color:black;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        `);

        button.addEventListener('click', () => {
            window.location.href = 'aboutus.html#form-container';
        });

        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(origin);
        section.appendChild(roasted_grade);
        section.appendChild(format);
        section.appendChild(price);
        section.appendChild(button);

        products.appendChild(section);
    });
};

getProductData();