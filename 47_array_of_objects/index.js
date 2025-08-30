
const fruits = [{name: "apple", color:"red", calories:95},
                {name: "orange", color:"orange", calories:45},
                {name: "banana", color:"yellow", calories:105},
                {name: "coconut", color:"white", calories:159},
                {name: "pineapple", color:"yellow", calories:100}]

// forEach()
fruits.forEach(fruit => console.log(fruit.name))

// map()
const fruitNames = fruits.map(fruit => fruit.name)
console.log(fruitNames);

//filter()
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
console.log(yellowFruits);

// reduce()

const maxFruit = fruits.reduce((max, fruit)=> 
                                fruit.calories > max.calories ? fruit : max)
console.log(maxFruit);