// Task 1: Create an Inventory Array of Product Objects

const inventory = [
{ name: 'Lipstick', price: 24, quantity: 400, lowStockLevel: 30 },
{ name: 'Mascara', price: 25, quantity: 500, lowStockLevel: 35 },
{ name: 'Blush', price: 28, quantity: 200, lowStockLevel: 20},
{ name: 'Highlighter', price: 28, quantity: 150, lowStockLevel: 15 },
{ name: 'Bronzer', price: 40, quantity: 300, lowStockLevel: 30 }];
// An array was created to list 5 given products.
// Products, price, quanity and low stock level numbers were given from the sample data. 
console.log(inventory);
// Task 1 is now complete.

//Task 2: Create a Function to Display Product Details
function displayProductDetails(product) {
let stockLevel = product.quantity <= product.lowStockLevel ? 'Low Stock' : 'In Stock';
console.log(`Name: ${product.name}`);
console.log(`Price: $${product.price}`);
console.log(`Quantity: ${product.quantity}`);
console.log(`Stock Level: ${stockLevel}`);};
displayProductDetails(inventory [0]);
/* Function to Display Product Details has been created
Function is meant to display "Low stock level' if the stock is equal to or less than the low stock level.
Function is meant to display the product as "in stock" if the stock is above low stock level in quantity.
This way, we ensure the code is displaying the correct status based on the quanity of the product.
Task 2 is now complete.  */