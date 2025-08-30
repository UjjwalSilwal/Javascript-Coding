function displayPerson({firstName, lastname, age, job="unemployed"}){
    console.log(`name: ${firstName} ${lastname}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

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

displayPerson(person1)