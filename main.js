var popupbtn = document.getElementById("add-pop-btn")
var popuplay = document.querySelector(".popuplay")
var popupbox=document.querySelector(".popupbox")

popupbtn.addEventListener("click",function(){
    popuplay.style.display="block"
    popupbox.style.display="block"
})

var popupcancel = document.getElementById("cancel")
popupcancel.addEventListener("click",function(event){
    event.preventDefault()
    popuplay.style.display="none"
    popupbox.style.display="none"   
})

var container=document.querySelector(".container")
var addbtn=document.getElementById("add")
var title =document.getElementById("booktitleinput")
var author =document.getElementById("bookauthorinput")
var des=document.getElementById("bookdesinput")

addbtn.addEventListener("click",function(event){
   event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${title.value}</h1>
    <h5>${author.value}</h5>
    <p>${des.value}</p>
<button onclick="del(event)">delete</button>`
    container.append(div)
    popuplay.style.display="none"
    popupbox.style.display="none"
})

function del(event){
    event.target.parentElement.remove()
}