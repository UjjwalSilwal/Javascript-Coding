
//using call back
// function walkDog(callback){
//     setTimeout(()=>{
//         console.log("You walked the dog");
//         callback();
//     }, 1500)
// }

// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log("You cleaned the kitchen");
//         callback();
//     }, 2500)
// }

// function takeOutTrash(callback){
//     setTimeout(()=>{
//         console.log("You took out the trash");
//         callback();
//     }, 500)
// }

// //Callback hell

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("You finished all the chores!");
//         })
//     })
// })

//USing Promise
function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("You walked the dog");
        }, 1500)
    })

}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("You cleaned the kitchen");
        }, 2500)
    })

}

function takeOutTrash(){
    
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("You took out the trash");
        }, 500)
    })

}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores");})


