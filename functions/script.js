// Functions

function Increase(number1, number2) {
    let total;
    total = number1 + number2;

    console.log("Total: ", total) // Write on console.
}

Increase(16, 29); // Call function with props.

function Decrease(number1, number2) {
    let total;
    total = number1 - number2;
    return `Total: ${total}`
}

console.log(Decrease(18, 5)); // Calling a function with return

// Arrow Functions

const Impact = (number1, number2) => {
    return number1 * number2
}

console.log(Impact(12, 15));