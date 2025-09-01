
// STEP1 CREATE THE ELEMENT
const newListItem = document.createElement("li")

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent ="coconut"
newListItem.id = "coconut"
newListItem.style.fontWeight ="bold"
newListItem.style.backgroundColor="lightgreen"

// STEP 3 APPEND ELEMENT TO DOM
document.getElementById("fruits").append(newListItem)


// REMOVE HTML ELEMENT
document.getElementById("fruits").removeChild(newListItem)