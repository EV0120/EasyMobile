// Navbar Interactions
const navbar = document.getElementById("navbar");
const bars = document.getElementById("bars");
const navigation = document.getElementById("navigation");

bars.addEventListener('click', () => {
    if (navigation.classList.contains("show")) {
        navigation.classList.remove("show");
        navigation.classList.add("hide");
    } else {
        navigation.classList.remove("hide");
        navigation.classList.add("show");
    }
})

window.addEventListener("scroll",()=>{
    if (window.scrollY>80) {
        navbar.classList.add("navbar_scroll"); 
    }else{
        navbar.classList.remove("navbar_scroll"); 

    }
})