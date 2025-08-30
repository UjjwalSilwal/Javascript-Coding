
class Person{
    
    constructor(firstName, lastName, age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }

    set firstName(newfirstName){

        if(typeof(newfirstName)==="string" && newfirstName.length > 0){
            this._firstName= newfirstName
        }
        else{
            console.error("Please write the name in letters and it must not be empty");          
        }
    }

    set lastName(newlastName){

        if(typeof(newlastName)==="string" && newlastName.length > 0){
            this._lastName= newlastName
        }
        else{
            console.error("Please write the name in letters and it must not be empty");          
        }
    }

    set age(newAge){

        if(typeof(newAge)==="number" && newAge>= 0){
            this._age=newAge
        }
        else{
            console.error("Please write proper age");     
        }
    }

    get firstName(){
        return this._firstName
    }

    get lastName(){
        return this._lastName
    }

    get age(){
        return this._age
    }

    get fullName(){
        return this._firstName +" "+ this._lastName
    }

}

const person = new Person("ujjwal","silwal",89)

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);
