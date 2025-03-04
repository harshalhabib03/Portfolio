//this function is used for navigation bar when it becomes responsive/ while using in small device

function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu"){
        menuBtn.className += "responsive";
    }
    else{
        menuBtn.className = "nav-menu";
    }
}


//this dark mode is for themes
/* dark mode */

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});


//this typing effect is for moving the words one after one
/* typing effect */

var typingEffect =new Typed(".typedText", {
    strings: ["Coder", "Developer"],

    loop:true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});


//this scroll animation is for when we are seeing webpage from top to bottom 
//by scrolling the contents will slowly display one after one
/* scroll animation */

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });


sr.reveal(".project-box", {interval: 200});

sr.reveal(".top-header", {});


const srleft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srleft.reveal(".about-info", {delay: 100});
srleft.reveal(".contact-info", {delay: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRigth.reveal(".skill", {delay: 100});
srRight.reveal(".skill-box", {delay: 100});


/* active-link */

const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,

        sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        }
        else{
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);    