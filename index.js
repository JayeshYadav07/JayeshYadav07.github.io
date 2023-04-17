let i = 0;
let txt = "Full Stack Web Developer.";
let speed = 100;

typeWriter();

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("user-detail-name").style.color = "white";
        document.getElementById("demo1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // reset the index when it reaches the end of the text
        i = 0;
        // clear the text
        document.getElementById("demo1").innerHTML = "";
        // make the recursive call
        document.getElementById("user-detail-name").style.color = "#f51cb3";
        setTimeout(typeWriter, speed);
    }
}
new GitHubCalendar(".calendar", "JayeshYadav07");
var myNav = document.getElementById("nav-menu");
var myNav2 = document.getElementById("main");
window.onscroll = function () {
    if (document.documentElement.scrollTop >= 15) {
        myNav.classList.add("nav-colored");
        myNav2.classList.add("nav-colored");
        // myNav.classList.remove("nav-transparent");
    } else {
        // myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        myNav2.classList.remove("nav-colored");
    }
};

document.getElementById("resume-button-1").onclick = () => {
    window.open("./images/Jayesh_Yadav_Resume.pdf");
};

document.getElementById("resume-button-2").onclick = () => {
    window.open("./images/Jayesh_Yadav_Resume.pdf");
};

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display = "block";
}
