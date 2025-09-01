
// STEP1 CREATE THE ELEMENT
const newh1 = document.createElement("h1")

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newh1.textContent = "I like pizza!"
newh1.id = "myH1"
newh1.style.color = "tomato"
newh1.style.textAlign="center"

// STEP 3 APPEND ELEMENT TO DOM

const box2 = document.getElementById("box2");
document.body.insertBefore(newh1, box2);

// REMOVE HTML ELEMENT