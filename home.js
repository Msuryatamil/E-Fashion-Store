var sidenav = document.querySelector(".side-nav")
var cont=""
function shownav(){
    sidenav.style.left = "0"
}
function closenav(){
    sidenav.style.left="-80%"
}
// search input
var entered_text = ""
    var container = document.querySelector(".collection-container")
    var container_box=document.querySelector(".collection")
    var elements = container.querySelectorAll("h5")
    console.log(container_box)
    function check(event) {
        entered_text = event.target.value.toUpperCase()
        for (var i = 0; i < elements.length; i++) {
            if(elements[i].textContent.toUpperCase().indexOf(entered_text)<0)
        {
            elements[i].parentElement.style.display="none"
        }
        else{
            elements[i].parentElement.style.display="block"
        }

        }
    }
