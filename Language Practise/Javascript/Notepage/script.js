var popup_content=document.getElementById("popup-content")
var popup_overley=document.getElementById("popup-overley")
var popup_button=document.getElementById("plus")

popup_button.addEventListener("click",function(){
    popup_overley.style.display="block"
    popup_content.style.display="block"
})

var cancel_button=document.getElementById("cancelbook")
var add_button=document.getElementById("addbook")
var delete_button=document.getElementById("Del")
var container=document.getElementById("Container")
var input_title=document.getElementById("title")
var input_name=document.getElementById("name")
var input_description=document.getElementById("description")
cancel_button.addEventListener("click",function(event){
    event.preventDefault()
    popup_overley.style.display="none"
    popup_content.style.display="none"
})
add_button.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("id","In-Container")
    div.innerHTML=`<h1>${input_title.value}</h1>
    <h3>${input_name.value}</h3>
    <p>${input_description.value}</p>
    <button type="button" id="Del" onclick="del(event)"><b>Delete</b></button>`
    container.append(div)
    popup_overley.style.display="none"
    popup_content.style.display="none"  
})

function del(event){
    event.target.parentElement.parentElement.remove()
}
