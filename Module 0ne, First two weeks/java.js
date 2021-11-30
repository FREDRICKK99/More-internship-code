class Car {
    constructor(name, model, year, country) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.country = country;
    }
}

const Car1 = new Car("Ford", "v6", 2015, "America");
const Car2 = new Car("chevrolet", "v7", 2020, "Britain");
const Car3 = new Car("Mercedes", "v5", 2019, "Germany");
const Car4 = new Car("Range Rover", "v8", 2021, "Britain");
const Car5 = new Car("AUDI", "v8", 2020, "Germany");
const Car6 = new Car("Mustang", "v7", 2019, "America");

const car1 = document.getElementById("mortal1");
const car2 = document.getElementById("mortal2");
const car3 = document.getElementById("mortal3");
const car4 = document.getElementById("mortal4");
const car5 = document.getElementById("mortal5");
const car6 = document.getElementById("mortal6");

car1.innerHTML =
    Car1.name + " " + Car1.model + " " + Car1.year + " " + Car1.country;
car2.innerHTML =
    Car2.name + " " + Car2.model + " " + Car2.year + " " + Car2.country;
car3.innerHTML =
    Car3.name + " " + Car3.model + " " + Car3.year + " " + Car3.country;
car4.innerHTML =
    Car4.name + " " + Car4.model + " " + Car4.year + " " + Car4.country;
car5.innerHTML =
    Car5.name + " " + Car5.model + " " + Car5.year + " " + Car5.country;
car6.innerHTML =
    Car6.name + " " + Car6.model + " " + Car6.year + " " + Car6.country;

console.log(Car1);
console.log(Car2);
console.log(Car3);
console.log(Car4);
console.log(Car5);
console.log(Car6);