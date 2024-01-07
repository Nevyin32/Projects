var Name=document.getElementById("Name")
var Age=document.getElementById("Age")
var Gender1=document.getElementById("M")
var Gender2=document.getElementById("N")
var Course=document.getElementById("Sel")
var Email=document.getElementById("Email")
var Table=document.getElementById("Table")
function add(){
    var newrow=Table.insertRow(1)
    var cell1=newrow.insertCell(0)
    var cell2=newrow.insertCell(1)
    var cell3=newrow.insertCell(2)
    var cell4=newrow.insertCell(3)
    var cell5=newrow.insertCell(4)
    var cell6=newrow.insertCell(5)
    if(Gender1.checked==true){
        Gender=Gender1.value}
    else if(Gender2.checked==true){
        Gender=Gender2.value}
    cell1.innerHTML=Name.value
    cell2.innerHTML=Age.value
    cell3.innerHTML=Gender
    cell4.innerHTML=Course.value
    cell5.innerHTML=Email.value
    cell6.innerHTML="<button onclick='del(event)' class='i'>Delete</button>"
}
function del(event){

    event.target.parentElement.parentElement.remove()
}