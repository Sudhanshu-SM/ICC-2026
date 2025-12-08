let arrowdown = document.getElementById("arrowdown")
let arrowdown2 = document.getElementById("arrowdown2")

window.addEventListener('scroll',() => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        arrowdown.style.display = "none";
        arrowdown2.style.display = "none";
    }
    else
    {
        arrowdown.style.display = "block";
        arrowdown2.style.display = "block";
    }
})


// JS FOR SOCIL ICONS

