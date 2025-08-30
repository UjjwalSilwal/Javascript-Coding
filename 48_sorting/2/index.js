

const people = [{name:"Spongebob", age:30, gpa:3.0},
                {name:"Patrick", age:37, gpa:1.5},
                {name:"Squidward", age:51, gpa:2.5},
                {name:"Sandy", age:27, gpa:4.0}]

people.sort((a,b) => a.age - b.age)

//for reverse
//people.sort((a,b) => b.age - a.age)

//for name order
//people.sort((a,b) => a.name.localeCompare(b.name))


console.log(people);