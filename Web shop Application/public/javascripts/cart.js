const carts = Array.from(document.querySelectorAll(".add-item"));

fetch("../products.json")
    .then(response => response.json())
    .then(data => getProducts(data))
    .catch(err => console.log(err))

// let getProducts = function(data) {
//     console.log(data);
//     return data;
// }

function getProducts(data) {
    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener("click", function() {
            cartNumbers(data[i]);
            totalCost(data[i]);
        })
    }
    console.log(data)
    return data;
}

function onLoadCartNumbers() {
    let productsNumbers = localStorage.getItem('cartNumbers');

    if (productsNumbers) {
        document.querySelector('.shopping-cart-span').textContent = productsNumbers;
    }
}

function cartNumbers(product) {
    console.log("The product clicked is", product)
    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector(".shopping-cart-span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(".shopping-cart-span").textContent = 1;
    }

    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)
    console.log("my cart items are", cartItems);

    if (cartItems !== null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        }
    }


    localStorage.setItem('productsInCart', JSON.stringify(cartItems))
}

function totalCost(product) {
    // console.log("the product price is", product.price);

    let cartCost = localStorage.getItem('totalCost');


    console.log("my cartcost is", cartCost)

    if (cartCost !== null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem('totalCost', cartCost + (product.price - product.discount))
    } else {
        localStorage.setItem('totalCost', product.price - product.discount);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');


    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=
                `<div class="product">
                    <i class="fas fa-times-circle"></i>
                    <img src="/images/${item.brand}.jpg" class="cart-images">
                    <span>${item.name}</span>
                    <span>${item.brand}</span>
                </div>
                <div class="price">$${item.price - item.discount}</div>
                <div class="quantity">
                    <i class="fas fa-minus-circle"></i>
                    <span>${item.inCart}</span>
                    <i class="fas fa-plus-circle"></i>
                </div>
                <div class="total">$${item.inCart * (item.price - item.discount)}</div>
            `
        });

        productContainer.innerHTML += `
        <div class="cartTotalContainer">
            <h4 class="cartTotalTitle">Total Cost</h4>
            <h4 class="totalCost"> ${cartCost},00</h4>
        `
    }
}

onLoadCartNumbers();
displayCart();