function checkLowStock(products, threshold) {
    return products.filter(product => product.quantity <= threshold);
}

function checkExpiration(products) {
    const currentDate = new Date();
    return products.filter(product => new Date(product.expirationDate) < currentDate);
}

export { checkLowStock, checkExpiration };