// JavaScript for adding items to the cart
function addToCart(bookId) {
    const bookTitle = document.querySelector(`.book:nth-child(${bookId}) h3`).textContent;
    const cartItems = document.getElementById("cart-items");
    const cartItem = document.createElement("li");
    cartItem.textContent = bookTitle;
    cartItems.appendChild(cartItem);
}
