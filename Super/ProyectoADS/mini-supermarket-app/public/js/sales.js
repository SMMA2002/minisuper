// This file manages sales transactions, including recording sales and retrieving sales data. 
// It exports functions such as recordSale and getSales.

let sales = [];

// Load sales data from the JSON file
function loadSalesData() {
    fetch('/data/sales.json')
        .then(response => response.json())
        .then(data => {
            sales = data;
        })
        .catch(error => console.error('Error loading sales data:', error));
}

// Record a new sale
function recordSale(productId, quantity, totalAmount) {
    const sale = {
        id: sales.length + 1,
        productId: productId,
        quantity: quantity,
        saleDate: new Date().toISOString(),
        totalAmount: totalAmount
    };
    sales.push(sale);
    saveSalesData();
}

// Save sales data to the JSON file
function saveSalesData() {
    fetch('/data/sales.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sales)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => console.error('Error saving sales data:', error));
}

// Get all sales
function getSales() {
    return sales;
}

// Load sales data when the script is executed
loadSalesData();