//hamburg menu

let menuIcon = document.querySelector(".fa");
let menuItems = document.querySelector(".menuItems")

const toggleMenuItems = function (){
    menuItems.classList.toggle("open");
}

menuIcon.addEventListener("click", toggleMenuItems);


//Goal add 3 comic books each time display more clicked 
//select element
let displayMoreButton = document.querySelector("input");
// console.log(displayMoreButton)



let lastThreeComics = document.querySelector(".last-three-comics");
// console.log(lastThreeComics)

let index = document.getElementById("all-images").childNodes; 
// console.log(index)

//make a funtion with the event handler
const toggleLastThreeComics = function(){
    lastThreeComics.classList.toggle("open")
    
} 


//add event listeners
displayMoreButton.addEventListener("click", toggleLastThreeComics);



// displayMoreButton.addEventListener("click", (e) =>{
//     lastThreeComics.classList.toggle("open");
//     if (displayMoreButton.innerText === "Display More"){
//        lastThreeComics1.classList.toggle("open");
//     }
//     })






