var addbook=document.getElementById("adddetail")
function popup(){
    addbook.style.display="block"
}

function cancel(event){
    event.preventDefault()
     addbook.style.display="none"
}

var container=document.getElementById("bookhere")
var title=document.getElementById("booktitle")
var author=document.getElementById("bookauthor")
var des=document.getElementById("bookdescription")

function addbookclick(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h1>${title.value}</h1>
    <h3>${author.value}</h3>
    <p>${des.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    
    container.append(div)
    addbook.style.display="none"
    title.value=null
    author.value=null
    des.value=null
}
function deletebook(event){
    event.target.parentElement.remove()
}