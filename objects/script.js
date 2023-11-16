// Objects

const carModal = {
    name: "Fiat",
    model: "Egea",
    color: "Red",
    speed: 200,
    fullName: function() {
        return this.name + " " + this.model;
    }
} // Describing object.

console.log(carModal); // Print object on console.

console.log("Car name: ", carModal.name);
console.log("Car model: ", carModal.model);
console.log("Car color: ", carModal.color);
console.log("Car speed: ", carModal.speed);
console.log("Car full name: ", carModal.fullName())