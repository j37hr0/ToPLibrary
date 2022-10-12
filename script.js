//DOM queries
const main = document.getElementById("main")
const newbtn = document.getElementById("newBook");
const modal = document.getElementById("modal")
const closebtn = document.getElementsByClassName("close")[0]
//form inputs
const bookTitle = document.getElementById("bookName")
const bookAuthor = document.getElementById("author")
const bookPages = document.getElementById("pages")
const bookIsRead = document.getElementById("isRead")


let myLibrary = [{title: "test book1", author: "testauthor1", pages: 10, isRead: "yes"},
{title: "test book1", author: "testauthor1", pages: 10, isRead: "yes"},
{title: "test book1", author: "testauthor1", pages: 10, isRead: "yes"},
{title: "test book1", author: "testauthor1", pages: 10, isRead: "yes"},];

function createBook (title, author, nrPages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = nrPages;
    this.isRead = isRead;

    createBook.prototype.info = function() {
        return title, author, nrPages, isRead;
    }
}


//display books in myLibrary
function displayBooks(library){
for (let i = 0; i < library.length; i++){
    let box = document.createElement("div");
    let removebtn = document.createElement("button");
    let togglebtn = document.createElement("button");
    removebtn.innerHTML = "Remove";
    togglebtn.innerHTML = "Toggle Read"
    let p1 = document.createElement("p")
    p1.innerHTML = `Title: ${library[i].title}`;
    let p2 = document.createElement("p")
    p2.innerHTML = `Author: ${library[i].author}`;
    let p3 = document.createElement("p")
    p3.innerHTML = `Pages: ${library[i].pages}`;
    let p4 = document.createElement("p")
    p4.innerHTML = `Is Read: ${library[i].isRead}`;
    box.classList.add("box");
    removebtn.classList.add("remove");
    togglebtn.classList.add("toggle");
    main.appendChild(box)
    box.appendChild(p1)
    box.appendChild(p2)
    box.appendChild(p3)
    box.appendChild(p4)
    box.appendChild(togglebtn)
    box.appendChild(removebtn)

    
}
}


//Modal stuff
window.onclick = function (e) {
    if (e.target == modal){
        modal.style.display = "none";
    }
}

closebtn.onclick = function () {
    modal.style.display = "none";
}

newbtn.onclick = function () {
    modal.style.display = "grid";
}

displayBooks(myLibrary)