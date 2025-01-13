//selecting html elements

var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
var sidenav  = document.getElementById("sidenav")


menuicon.addEventListener("click",function(){
    sidenav.style.right= 0
})

closenav.addEventListener("click",function(){
    sidenav.style.right = "-50%"
})


//selecting resume 

var download = document.getElementById("download-btn")

download.addEventListener("click",function(){
    console.log()
    alert("Thank you for  download My resume!")
})