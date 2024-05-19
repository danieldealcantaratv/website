document.addEventListener("DOMContentLoaded", function() {
    fetchProducts();
});

async function fetchProducts() {
    try {
        const response = await fetch('https://seu-projeto.glitch.me/api/products');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

async function renderProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    for (const product of products) {
        const [name, price, link] = product;
        try {
            const imageUrl = await fetchImage(link);
            const productItem = document.createElement('div');
            productItem.classList.add('grid-item');
            productItem.innerHTML = `
                <img src="${imageUrl}" alt="${name}">
                <h3>${name}</h3>
                <p>${price}</p>
                <a href="${link}" target="_blank">Ver produto</a>
            `;
            productGrid.appendChild(productItem);
        } catch (error) {
            console.error('Error fetching product image:', error);
        }
    }
}

async function fetchImage(link) {
    const response = await fetch(`https://seu-projeto.glitch.me/api/product-image?url=${encodeURIComponent(link)}`);
    const data = await response.json();
    return data.imageUrl;
}
