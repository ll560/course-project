//hamburg menu

let menuIcon = document.querySelector(".fa");
let menuItems = document.querySelector(".menuItems")

const toggleMenuItems = function (){
    menuItems.classList.toggle("open");
}

menuIcon.addEventListener("click", toggleMenuItems);
//--------------------------------------------------------------------


//Goal add 3 comic books each time display more clicked 

//select element
let displayMoreButton = document.querySelector("input");
// console.log(displayMoreButton)



let lastThreeComics = document.querySelector(".last-three-comics");
// console.log(lastThreeComics)

let index = document.getElementById("all-images").childNodes; 
// console.log(index)

const comicBooks = [
    {
        title: "Fun Home: A Family Tragicomic",
        author: "by Alison Bechdel",
        rating: "5 stars",
        href: "./fun-home.+html",
        imgSrc: "./public/images/fun-home.jpg",
        imgAlt: "Fun Home: A Family Tragicomic comic book cover",
    },

    {
        title: "Hunter X Hunter Vol. 1",
        author: "by Yoshihiro Togashi",
        rating: "5 stars",
        href: "./hunter-x-hunter.html",
        imgSrc: "./public/images/hunter-x-hunter.jpg",
        imgAlt: "Hunter X Hunter comic book cover",
    },

    {
        title: "The Walking Dead, Vol. 1: Days Gone Bye",
        author: "by Robert Kirkman",
        rating: "4 stars",
        href: "./the-walking-dead.html",
        imgSrc: "./public/images/the-walking-dead.jpg",
        imgAlt: "The Walking Dead, Vol. 1: Days Gone Bye comic book cover",
    }

]


const displayMore = function(comicBooks){
    for(let i=0; i < comicBooks.length; i++){
    let thisBook = comicBooks[i];
    let newDiv = document.createElement("div")
    newDiv.classList.add('index-book');

    //insert img
    let newImg = document.createElement("img");
    newImg.setAttribute("href", thisBook.href);
    newImg.setAttribute("img src", thisBook.imgSrc);
    newImg.setAttribute("alt", thisBook.imgAlt);
    newDiv.appendChild(newImg);

    //title
    let titleSpan = document.createElement("span");
    titleSpan.appendChild(document.createTextNode(thisBook.title));

    newDiv.appendChild(titleSpan);

    //author
    let authorSpan = document.createElement('span');
    authorSpan.appendChild(document.createTextNode(thisBook.author));
    newDiv.appendChild(authorSpan);

    //ratings
    let ratingSpan = document.createElement('span');
    ratingSpan.appendChild(document.createTextNode(thisBook.rating))
    newDiv.appendChild(ratingSpan);
    }
}



//make a funtion with the event handler
// const displayMore = function(){
//     newDiv.classList.toggle("open");
    
// } 


//add event listeners
displayMoreButton.addEventListener("click", displayMore);











// displayMoreButton.addEventListener("click", (e) =>{
//     lastThreeComics.classList.toggle("open");
//     if (displayMoreButton.innerText === "Display More"){
//        lastThreeComics1.classList.toggle("open");
//     }
//     })






