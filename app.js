// -------- JavaScript for Toggle Menu -------- Start

const navLinks = document.querySelector("#navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function closeMenu() {
    navLinks.style.right = "-200px";
}

const textBoxTitle = document.querySelector(".text-box.title");
const textBoxContent = document.querySelector(".text-box.content");

function handleMission() {
    // console.log(textBoxContent);
    if (textBoxTitle.style.display === "none") {
        textBoxTitle.style.display = "block";
        textBoxContent.style.display = "none";
    } else {
        textBoxTitle.style.display = "none";
        textBoxContent.style.display = "block";
    }
}
// -------- JavaScript for Toggle Menu -------- End
