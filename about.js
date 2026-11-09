var menuicon = document.getElementById("menu-icon")
var sidenav = document.getElementById("side-nav")
var closeicon = document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closeicon.addEventListener("click",function(){
    sidenav.style.right = "-50%"
})