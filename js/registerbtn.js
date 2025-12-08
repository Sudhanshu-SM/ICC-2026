let home = document.getElementById("home");
let register = document.getElementById("menu2")
let home1 = document.getElementById("home1");
let menu1 = document.getElementById("men1")
let menu2 = document.getElementById("men2");
let menu3 = document.getElementById("men3")
let regbtn = document.getElementById("reghover")

let ahome = document.getElementById("aHome");
let amenu2 = document.getElementById("aMenu2");
let amenu1 = document.getElementById("aMenu1");
let amenu3 = document.getElementById("aMenu3")

let check1 = ahome.getAttribute("aria-expanded");
let check2 = amenu2.getAttribute("aria-expanded");
let check3 = amenu1.getAttribute("aria-expanded");
let check4 = amenu3.getAttribute("aria-expanded")

function hiden()
{
    regbtn.style.visibility="hidden";
    regbtn.style.display="none";   
}
function unhide()
{
    regbtn.style.display="block";
    regbtn.style.visibility="visible";
}

function change()
{
    home.classList.remove("active","in")
    register.classList.add("active","in")
    home1.classList.remove("active")
    menu1.classList.remove("active")
    menu2.classList.add("active")
    menu3.classList.remove("active")


    if(check1=="true" && check2=="false")
    {
        check1 = "false";
        check2 = "true";
    }
    else{
        check1 = "true";
        check2 = "false";
    }

    if(check3=="true" && check2=="false")
    {
        check3 = "false";
        check2 = "true";
    }
    else{
        check3 = "true";
        check2 = "false";
    }
    
    if(check4=="true" && check2=="false")
    {
        check4 = "false";
        check2 = "true";
    }
    else{
        check4 = "true";
        check2 = "false";
    }

}

