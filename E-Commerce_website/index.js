//Side-Navbar
var sidebar = document.querySelector(".Nav-Menu")

function opennavbar(){
    sidebar.style.left = "0"
}

function closenavbar(){
    sidebar.style.left = "-60%"
}

//Search bar

var productcontainer = document.getElementById("product")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1){
        var productname = productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})
