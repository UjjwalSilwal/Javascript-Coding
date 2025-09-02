
let buttons = document.querySelectorAll(".myButtons")

// ADD HTML/CSS PROPERTIES  
// buttons.forEach(button =>{
//     button.style.backgroundColor = "green"
//     button.textContent +="😂"
// })

// CLICK event listener
// buttons.forEach(button =>{
//     button.addEventListener("click", event =>{
//         event.target.style.backgroundColor = "tomato"
//     })
// })

// MOUSEOVER + MOUSEOUT event listener
// buttons.forEach(button=>{
//     button.addEventListener("mouseover", event =>{
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)"
//     })
// })

// buttons.forEach(button=>{
//     button.addEventListener("mouseout", event =>{
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)"
//     })
// })

// Add an element
const  newButton = document.createElement("button") // Step 1
newButton.textContent = "Button 5" //step2;
newButton.classList = "myButtons";
document.body.appendChild(newButton) // step 3

buttons = document.querySelectorAll(".myButtons"); // step 4 update manually the nodelist

console.log(buttons);

// REMOVE an ELEMENT

// buttons.forEach(button =>{
//     button.addEventListener("click", event =>{
//         event.target.remove()
//         buttons =document.querySelectorAll(".myButtons")
//         console.log(buttons);
//     })
// })
