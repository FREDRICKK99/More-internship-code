let p_age;
let p_year;

function User(name, age, year_of_study) {
    this.name = name;
    this.p_age = age;
    this.p_year = year_of_study;
}

const user1 = new User("Mosh", 12, "second");

const user2 = new User("Fred", 21, "Third");

const user3 = new User("Tamale", 23, "Fourth");

console.log(user1);
console.log(user2);
console.log(user3);