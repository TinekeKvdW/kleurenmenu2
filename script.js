function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}

const bodyBackground = document.querySelector("body");

const blueListItem = document.querySelector(".blauw");
const makeBackgroundBlue = () => {
    bodyBackground.removeAttribute("class");
    bodyBackground.classList.add("blauw");
}
blueListItem.addEventListener("click", makeBackgroundBlue);

const yellowListItem = document.querySelector(".geel");
const makeBackgroundYellow = () => {
    bodyBackground.removeAttribute("class");
    bodyBackground.classList.add("geel");
}
yellowListItem.addEventListener("click", makeBackgroundYellow);

const greenListItem = document.querySelector(".groen");
const makeBackgroundGreen = () => {
    bodyBackground.removeAttribute("class");
    bodyBackground.classList.add("groen");
}
greenListItem.addEventListener("click", makeBackgroundGreen);

const redListItem = document.querySelector(".rood");
const makeBackgroundRed = () => {
    bodyBackground.removeAttribute("class");
    bodyBackground.classList.add("rood");
}
redListItem.addEventListener("click", makeBackgroundRed);