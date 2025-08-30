const person1 = {
    firstName : "Spongebob",
    lastname:"Squarepants",
    age:30,
    job:"Fry Cook"
}

const person2 = {
    firstName : "Patrick",
    lastname:"Star  ",
    age:34,
}

const {firstName, lastname, age, job="unemployed"} =person2;

console.log(firstName);
console.log(lastname);
console.log(age);
console.log(job);