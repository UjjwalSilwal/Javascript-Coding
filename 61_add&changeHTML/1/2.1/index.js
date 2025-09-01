
// STEP1 CREATE THE ELEMENT
const newh1 = document.createElement("h1")

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newh1.textContent = "I like pizza!"
newh1.id = "myH1"
newh1.style.color = "tomato"
newh1.style.textAlign="center"

// STEP 3 APPEND ELEMENT TO DOM
//document.getElementById("box1").append(newh1)
document.getElementById("box1").prepend(newh1)

// REMOVE HTML ELEMENT