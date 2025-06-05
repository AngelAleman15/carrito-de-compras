let totalAmount = 0;
let counter = 0;
const body = document.querySelector("body");

function addToCart(productName, price, labelId) {
    const cantidad = parseInt(document.getElementById(labelId).innerText);

    document.getElementById("selectedProductName").innerText = productName;
    document.getElementById("selectedProductPrice").innerText = `$${price}`;
    
    totalAmount += price * cantidad;
}

function showTotal() {
    document.getElementById("totalPrice").innerText = `$${totalAmount}`;
}

function clearCart() {
    document.getElementById("selectedProductName").innerText = 'Nombre Producto';
    document.getElementById("selectedProductPrice").innerText = '$0';
    document.getElementById("totalPrice").innerText = '$0';
    totalAmount = 0;

    const labels = document.querySelectorAll('.product-amount-label');
    labels.forEach(label => label.innerText = '0');
}

function sumarLabel(labelId) {
    const label = document.getElementById(labelId);
    label.innerText = parseInt(label.innerText) + 1;
}

function restarLabel(labelId) {
    const label = document.getElementById(labelId);
    let value = parseInt(label.innerText);
    if (value > 0) label.innerText = value - 1;
}

let productCounter = 0;

function createProductWin(){
    const createDiv = document.createElement("div");
    createDiv.className = "create-div";
    createDiv.innerHTML = `
        <span class="close-btn" style="position:absolute;top:8px;right:12px;cursor:pointer;font-size:20px;font-weight:bold;">&times;</span>
        <h2>Crear Producto</h2>
        <p class="label">Nombre del Producto:</p>
        <input type="text" id="productName" placeholder="Nombre del producto">
        <p class="label">Precio:</p>
        <input type="number" id="productPrice" placeholder="Precio del producto">
        <p class="button" id="addProductBtn" style="cursor:pointer;display:inline-block;padding:8px 16px;color:#fff;border-radius:4px;">Agregar Producto</p>`;
    createDiv.querySelector('.close-btn').onclick = function() {
        createDiv.remove();
    };
    createDiv.querySelector('#addProductBtn').onclick = addProduct;
    body.appendChild(createDiv);
}

function addProduct() {
    counter++;
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;

    if (name !== "" && price !== "" && price > 0) {
        const productsContainer = document.querySelector('.products');
        if (!productsContainer) return;

        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <div class="product-img">
                <img src="img/" alt="Template ${name}">
            </div>
            <div class="product-name">${name}</div>
            <div class="product-price">$${price}</div>
            <div class="product-amount">
                <div class="product-amount-btn" style="background-color:#8F3A3E; color: white;" onclick="restarLabel('label${counter}')">-</div>
                <div class="product-amount-label" id="label${counter}">0</div>
                <div class="product-amount-btn" style="background-color:#C3DC4B; color: black;" onclick="sumarLabel('label${counter}')">+</div>
            </div>
            <div class="product-add" onclick="addToCart('${name}', ${price}, 'label${counter}')">AGREGAR</div>
        `;
        productsContainer.appendChild(productDiv);

        document.querySelector(".create-div").remove();
    }
}