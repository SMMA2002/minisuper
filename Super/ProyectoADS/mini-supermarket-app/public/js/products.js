// This file manages product-related functionalities, including adding, updating, deleting, and retrieving products.

let products = [];

// Load products from JSON file
async function loadProducts() {
    const response = await fetch('/data/products.json');
    products = await response.json();
}

// Add a new product
function addProduct(product) {
    products.push(product);
    saveProducts();
}

// Update an existing product
function updateProduct(productId, updatedProduct) {
    const index = products.findIndex(product => product.id === productId);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
        saveProducts();
    }
}

// Delete a product
function deleteProduct(productId) {
    products = products.filter(product => product.id !== productId);
    saveProducts();
}

// Retrieve all products
function getProducts() {
    return products;
}

// Save products to JSON file (mock implementation)
function saveProducts() {
    // This function would typically send a request to the server to save the updated products
    console.log('Products saved:', products);
}

// Initialize the product management
loadProducts();