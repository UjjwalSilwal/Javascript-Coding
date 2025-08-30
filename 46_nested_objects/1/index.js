const person ={
    fullName :"Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate","jellyfishing","cooking"],
    address: {
        street: "124 Conch Street",
        city:"Bikini Bottom",
        country:"Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.country);

for(const property in person.address){
    console.log(person.address[property]);
}