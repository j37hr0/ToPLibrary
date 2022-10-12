//DOM queries
const newbtn = document.getElementById("newBook");
const modal = document.getElementById("modal")
const closebtn = document.getElementsByClassName("close")[0]
//form inputs
const bookTitle = document.getElementById("bookName")
const bookAuthor = document.getElementById("author")
const bookPages = document.getElementById("pages")
const bookIsRead = document.getElementById("isRead")


let myLibrary = [];

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
    let removebtn = document.createElement("button");
    let togglebtn = document.createElement("button");
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

