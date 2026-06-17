const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2500, quantity: 1 }
];

function calculateTotal(items) {
    let total = 0;

    items.forEach(item => {
        total += item.price * item.quantity;
    });

    return total;
}

function displayCart(items) {
    items.forEach(item => {
        console.log(
            `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
        );
    });

    console.log("Total:", calculateTotal(items));
}

displayCart(cart);