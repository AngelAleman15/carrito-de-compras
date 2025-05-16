let totalAmount = 0;

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

function createProduct() {
    productCounter++; 

    const productId = 'product' + productCounter;
    const labelId = 'productLabel' + productCounter;

    const product = document.createElement('div');
    product.classList.add('product');
    product.id = productId;

    const productImg = document.createElement('div');
    productImg.classList.add('product-img');
    const img = document.createElement('img');
    img.src = 'img/televisor.png';
    img.alt = 'Televisor';
    productImg.appendChild(img);

    const productName = document.createElement('div');
    productName.classList.add('product-name');
    productName.innerText = 'Televisor';

    const productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    productPrice.innerText = '$1000';

    const productAmount = document.createElement('div');
    productAmount.classList.add('product-amount');

    const productAmountBtnMinus = document.createElement('div');
    productAmountBtnMinus.classList.add('product-amount-btn');
    productAmountBtnMinus.style.backgroundColor = '#8F3A3E';
    productAmountBtnMinus.style.color = 'white';
    productAmountBtnMinus.innerText = '-';
    productAmountBtnMinus.onclick = function() { restarLabel(labelId); };

    const productAmountLabel = document.createElement('div');
    productAmountLabel.classList.add('product-amount-label');
    productAmountLabel.id = labelId; 
    productAmountLabel.innerText = '0';

    const productAmountBtnPlus = document.createElement('div');
    productAmountBtnPlus.classList.add('product-amount-btn');
    productAmountBtnPlus.style.backgroundColor = '#C3DC4B';
    productAmountBtnPlus.style.color = 'black';
    productAmountBtnPlus.innerText = '+';
    productAmountBtnPlus.onclick = function() { sumarLabel(labelId); };

    productAmount.appendChild(productAmountBtnMinus);
    productAmount.appendChild(productAmountLabel);
    productAmount.appendChild(productAmountBtnPlus);

    const productAdd = document.createElement('div');
    productAdd.classList.add('product-add');
    productAdd.innerText = 'AGREGAR';
    productAdd.onclick = function() {
        addToCart('Televisor', 1000, labelId);
    };

    product.appendChild(productImg);
    product.appendChild(productName);
    product.appendChild(productPrice);
    product.appendChild(productAmount);
    product.appendChild(productAdd);

    const productsContainer = document.querySelector('.products');
    productsContainer.appendChild(product);
}