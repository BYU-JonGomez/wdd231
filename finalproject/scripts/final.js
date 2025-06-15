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
const menuButton = document.getElementById('myButton');
const menuLinks = document.querySelector('ul.menuLinks');

menuButton.addEventListener('click', () => {
  menuLinks.classList.toggle('open');
  menuButton.classList.toggle('open'); // Add this line
});

/* product cards*/
const url = "json/final.json";
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

        name.textContent = `${product.name}`;
        origin.textContent = `${product.origin || ''}`;
        roasted_grade.textContent = `Roasted Grade: ${product.roasted_grade}`;
        format.textContent = `Format: ${product.format}`;
        price.textContent = `USD: ${product.price}`;
        
        image.setAttribute('src', product.imageurl);
        image.setAttribute('alt', `${product.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('style', 'border-radius: 50%; margin-right: 5px; width: 90%; height: auto; display: flex;');
        
        section.setAttribute('class', 'product-card');
        section.setAttribute('style', 'display: grid; grid-template-columns: 30% 70%; grid-template-rows: repeat(5, auto); padding: 10px; border: 1px solid #ccc; border-radius: 10px; gap: 5px; align-items: center;');

        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(origin);
        section.appendChild(roasted_grade);
        section.appendChild(format);
        section.appendChild(price);

        products.appendChild(section);
    });
};

getProductData();