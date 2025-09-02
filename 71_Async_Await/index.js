

//USing Resolve, Reject in Promise
function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            const dogwalked = true;

            if(dogwalked){

                resolve("You walked the dog");
            }
            else{
                reject("You didn't walk the dog")
            }

        }, 1500)
    })

}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            const cleanedKitchen = true;

            if(cleanedKitchen){
                resolve("You cleaned the kitchen");
            }
            else{
                reject("You didn't clean the kitchen");
            }

        }, 2500)
    })

}

function takeOutTrash(){
    
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{

            const tookOutTrash = true;

            if(tookOutTrash){
                resolve("You took out the trash");
            }
            else{
                reject("You didn't take out the trash");
            }

        }, 500)
    })

}

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores");
    }
    catch(error){
        console.error(error)
    }

}

doChores();
