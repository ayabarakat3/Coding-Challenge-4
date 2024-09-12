// Task 1: Create an Inventory Array of Product Objects
let inventory = [
    { name: 'Lipstick', price: 24, quantity: 300, lowStockLevel: 30 },
    { name: 'Mascara', price: 27, quantity: 35, lowStockLevel: 35 },
    { name: 'Blush', price: 22, quantity: 18, lowStockLevel: 20 },
    { name: 'Highlighter', price: 28, quantity: 150, lowStockLevel: 15 },
    { name: 'Bronzer', price: 40, quantity: 300, lowStockLevel: 30 }];
// An array was created to list 5 chosen products.
// Products, price, quanity and low stock level numbers were given from the sample data. 
console.log(inventory);
// Task 1 is now complete.

//Task 2: Create a Function to Display Product Details
function displayProductDetails(product) {
let stockLevel = product.quantity > product.lowStockLevel ? 'In Stock' : 'Low Stock';
//Function created to display product details. 
console.log(`Name: ${product.name}`);
console.log(`Price: $${product.price}`);
console.log(`Quantity: ${product.quantity}`);
console.log(`Stock Level: ${stockLevel}`);};
displayProductDetails(inventory [0]);
/* Function to Display Product Details has been created
Function is meant to display "Low stock level' if the stock is equal to or less than the low stock level.
Function is meant to display the product as "in stock" if the stock is above low stock level in quantity.
This way, we ensure the code is displaying the correct status based on the quanity of the product.
Task 2 is now complete. */

// Task 3: Create a Function to Update Product Stock After Sales
function updateStock(product, unitsSold) 
{product.quantity -= unitsSold;
// This code shows to get the accurate stock amount remaining.
console.log(product.name + ' shows as ' + (product.quantity <= 0 ? 'out of stock' : 
product.quantity <= product.lowStockLevel ? '"low stock"' : '"in stock"'));}
updateStock(inventory[0], 90);
// Stock status is now printed and updated. 
// Task 3 is now complete.

// Task 4: Create a Function to Check Low Stock Products
function checkLowStock(stockStatus) {
inventory.forEach(function(product) 
{ if (stockStatus === 'low' && product.quantity <= product.lowStockLevel) {
// Function has now been created to to determine whether or if any products are low in stock.
console.log(product.name + ' is low in stock.');}});}
console.log('Check for products low in stock');
checkLowStock('low');
// Function is created to go through each product and display if products are low in stock.
// Function will display items that are low in stock.
// Task 4 is now complete.

// Task 5: Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(StockPrice) {
let inventoryTotalValue = 0;
// A loop will be created to ensure function goes through all listed products. 
inventory.forEach(product => {inventoryTotalValue += product.price * product.quantity;});
return inventoryTotalValue;}
// A loop and return function were created. Inventory total value will be returned using the function created. 
let totalInventoryValue = calculateInventoryValue();
console.log(`Total inventory value: $${totalInventoryValue}`);
//Function created to calculate total invetory value in $. 
// Task 5 is now complete.  

// Task 6: Create a Function to Process a Sale
function processSale(productName, unitsSold) {
let product = inventory.find(item => item.name === productName);
if (product) {updateStock(product, unitsSold);}
else {console.log(`Error: We're sorry! ${productName} is not in our inventory.`); }}
// Error message created for products not in the inventory. 
processSale('Banana', 70);
processSale('Duck', 70);
// Error message tested on items not found in the inventory.
// Error message displays expected output. 
//Task 6 is now complete. 
// All tasks have now been complete.