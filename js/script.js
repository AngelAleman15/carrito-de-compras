let totalAmount = 0;
let label = document.getElementById("productLabel");
let productAmount = 0;

function addToCart(productName, price) {
    document.getElementById("selectedProductName").innerText = productName;
    document.getElementById("selectedProductPrice").innerText = `$${price}`;

    totalAmount += price;
}

function showTotal() {
    document.getElementById("totalPrice").innerText = `$${totalAmount}`;
}

function clearCart() {
    document.getElementById("selectedProductName").innerText = 'Nombre Producto';
    document.getElementById("selectedProductPrice").innerText = '$0';
    document.getElementById("totalPrice").innerText = '$0';
    totalAmount = 0;
}

function sumarLabel() {
    productAmount += 1;
    label.innerText = productAmount;
}

function restarLabel() {
    if (productAmount <= 0) return;
    productAmount -= 1;
    label.innerText = productAmount;
}