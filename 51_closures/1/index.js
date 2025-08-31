

function outer(){

    let message = "Hello"
    function inner(){
        console.log(message);
    }

    inner()
}

outer()