# Mini Supermarket Application

## Overview
The Mini Supermarket Application is a web-based application designed to manage a mini supermarket's operations, including product management, sales management, reporting, and alerts for low stock and expiration dates. The application features role-based authentication for administrators and cashiers.

## Features
- **Product Management**: Add, update, delete, and retrieve products.
- **Sales Management**: Record sales transactions and retrieve sales data.
- **Basic Reporting**: Generate reports based on sales and product data.
- **Low Stock Alerts**: Notifications for products that are low in stock.
- **Expiration Alerts**: Notifications for products nearing their expiration date.
- **Role-Based Authentication**: Secure access for administrators and cashiers.

## Project Structure
```
mini-supermarket-app
├── public
│   ├── index.html
│   ├── css
│   │   └── styles.css
│   └── js
│       ├── app.js
│       ├── auth.js
│       ├── products.js
│       ├── sales.js
│       ├── reports.js
│       ├── alerts.js
│       └── utils.js
├── data
│   ├── products.json
│   ├── sales.json
│   └── users.json
├── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to run the application.
3. Ensure that the JSON data files in the `data` directory are populated with the necessary data for products, sales, and users.

## Usage Guidelines
- Log in using the credentials provided in the `data/users.json` file.
- Administrators can manage products and view reports.
- Cashiers can record sales transactions and view sales data.

## Technologies Used
- HTML, CSS, JavaScript for front-end development.
- JSON for data storage.

## Future Enhancements
- Implement a database for persistent data storage.
- Add more advanced reporting features.
- Improve user interface and user experience.