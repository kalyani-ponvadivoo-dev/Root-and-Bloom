var menuicon = document.getElementById("menu-icon")
var sidenav = document.getElementById("side-nav")
var closeicon = document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closeicon.addEventListener("click",function(){
    sidenav.style.right = "-50%"
})



//search bar

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var searchBtn = document.getElementById("search-button")
var productList = productContainer.querySelectorAll("div")


function filterProducts() {
    var enterdValue = search.value.toUpperCase()
   
    for(count=0;count<productList.length;count++){
        productName = productList[count].querySelector("h4").textContent
        
        if(productName.toUpperCase().indexOf(enterdValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }

    }
}

//search by typing
search.addEventListener("keyup",filterProducts)
//seach by button
searchBtn.addEventListener("click", filterProducts)

