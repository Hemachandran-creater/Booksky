var popupoverlay=document.querySelector(".popup-overlay")
var popoupbox=document.querySelector(".popup-box")
var addpopup=document.getElementById("add-popup-button")

addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popoupbox.style.display="block"
})

var cancel=document.getElementById("cancel-popup")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popoupbox.style.display="none"
})
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdiscription=document.getElementById("book-discription-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2> <h5>${bookauthor.value}</h5> <p>${bookdiscription.value}</P> <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popoupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}