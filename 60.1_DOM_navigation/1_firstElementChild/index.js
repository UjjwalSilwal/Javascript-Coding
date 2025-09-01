
// .firstELementChild

//const element = document.getElementById("fruits")
// const firstChild = element.firstElementChild;

// firstChild.style.backgroundColor = "yellow"

const ulElements = document.querySelectorAll("ul")

ulElements.forEach(ulElement =>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow"
})
