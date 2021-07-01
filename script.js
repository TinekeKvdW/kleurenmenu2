let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
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


// const bodyBackground = document.querySelector("body");

// const blueListItem = document.querySelector("#blueBG");

// blueListItem.addEventListener("click", () => {
//     bodyBackground.removeAttribute("class");
//     bodyBackground.classList.add("blauw");
// });





