

const names= ["Spongebob", "Patrick","Squidward", "Sandy"]
const person= {
    "name":"Spongebob",
    "age":30,
    "isEmployed": true,
    "hobbies":["Jellyfishing", "Karate", "Cooking"]
}
const people= [{
    "name":"Spongebob",
    "age":30,
    "isEmployed": true
},
{
    "name":"Patrick",
    "age":34,
    "isEmployed": false
},
{
    "name":"Squidward",
    "age":50,
    "isEmployed": true
},
{
    "name":"Sandy",
    "age":27,
    "isEmployed": false
}]

const jsonString = JSON.stringify(people); //converts to String

console.log(jsonString);