// Navbar Scrolled 

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on")
    } else {
        nav.classList.remove("scroll-on")
    }
}

// Navbar hide

let navBar = document.querySelectorAll(".nav-link");
let navbarcollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (e) {
    e.addEventListener("click", function () {
        navbarcollapse.classList.remove("show");
    })
})


// Counter Section
