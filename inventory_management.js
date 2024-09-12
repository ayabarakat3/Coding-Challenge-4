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
function displayProductDetails(inventory) {
let stockStatus = product.quantity <= product.lowStockLevel ? 'Low Stock' : 'In Stock';
}