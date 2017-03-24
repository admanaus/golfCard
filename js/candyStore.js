
if (!db.get('cart')) {
    db.save('cart', []);
}

displayCart();

document.getElementById('add').onclick = function () {
    var candyName = document.getElementById('candyName').value;
    var candy = { name: candyName };
    var cart = db.get('cart');

    cart.push(candy);

    db.update('cart', cart);

    displayCart();
};

function displayCart() {
    var cart = db.get('cart');

    if (cart.length) {
        var candyList = '';

        cart.forEach(function (candy) {
            candyList = candyList + '<li>' + candy.name + '</li>';
        });

        document.getElementById('cart').innerHTML = candyList;
    }
}