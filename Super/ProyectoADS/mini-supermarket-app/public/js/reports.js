// This file contains functions to generate basic reports based on sales and product data.

export function generateSalesReport(salesData) {
    const report = salesData.map(sale => {
        return {
            id: sale.id,
            productId: sale.productId,
            quantity: sale.quantity,
            saleDate: new Date(sale.saleDate).toLocaleDateString(),
            totalAmount: sale.totalAmount
        };
    });
    return report;
}

export function generateProductReport(productsData) {
    const report = productsData.map(product => {
        return {
            id: product.id,
            name: product.name,
            quantity: product.quantity,
            expirationDate: new Date(product.expirationDate).toLocaleDateString(),
            price: product.price
        };
    });
    return report;
}