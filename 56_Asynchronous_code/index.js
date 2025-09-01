

function func1(callback){
    setTimeout(()=> {console.log("Task 1");
                    callback()}, 3000)
}

function funct2(){
    console.log('task 2');
    console.log('task 3');
    console.log('task 4');
}

func1(funct2);