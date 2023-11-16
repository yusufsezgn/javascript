// Classes

class Calculator {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    increasement() {
        let total = this.number1 + this.number2;
        return total
    }

    decreasement() {
        let total = this.number1 - this.number2
        return total
    }
}

const calculate = new Calculator(90, 78) // Describing class
console.log(calculate.increasement()); // Using class with method
console.log(calculate.decreasement());