// selecting elements from the html page
const productList = document.querySelector("#productList");
const cartList = document.querySelector("#cartList");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const message = document.querySelector("#message");
 
// array of objects
const products = [
  { id: 1, name: "Wireless Mouse", price: 299, sale: true, stock: 7 },
  { id: 2, name: "USB-C Hub", price: 449, sale: true, stock: 3 },
  { id: 3, name: "Laptop Stand", price: 599, sale: false, stock: 9 },
  { id: 4, name: "Mechanical Keyboard", price: 899, sale: true, stock: 2 }
];
 
const saleProducts = products.filter(function (product) {
  return product.sale === true;
});
 
// rendering the products on the html page
function displayProducts(productArray) {
  productList.innerHTML = "";
 
  productArray.forEach(function (product) {
    const card = document.createElement("article");
    
    // ✅ ADD .product-card class HERE (was missing!)
    card.classList.add("product-card");
    
    // ✅ Add .low-stock class based on stock (correct logic)
    if (product.stock <= 3) {
      card.classList.add("low-stock");
    }
 
    const title = document.createElement("h3");
    const price = document.createElement("p");
 
    title.textContent = product.name;
    price.textContent = `R${product.price}`;
 
    card.appendChild(title);
    card.appendChild(price);
    
    // ✅ REMOVED: card.appendChild(document.querySelector(".low-stock"));
    // That line did nothing useful
    
    productList.appendChild(card);
  });
}
 
displayProducts(saleProducts);