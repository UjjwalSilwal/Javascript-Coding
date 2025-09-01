
// .lastELementChild

//const element = document.getElementById("fruits")
// const lastChild = element.lastElementChild;

// lastChild.style.backgroundColor = "yellow"

const ulElements = document.querySelectorAll("ul")

ulElements.forEach(ulElement =>{
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow"
})
