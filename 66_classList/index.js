
const myButton = document.getElementById("myButton");

myButton.classList.add("enabled"); //adding class to id mybutton

myButton.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😡"
    }
    else{
        event.target.classList.replace("enabled", "disabled")
    }
})