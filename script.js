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

const changeBackgroundColor = document.querySelector("blauw");
function changeBackgroundColorOnBody() {
    blauw.backgroundColor = "blauw"
};
blauw.addEventListener("click", changeBackgroundColor);

// mybutton.addEventListener("click", changeText);
// function changeText() {
//   mybutton.textContent = "Button clicked"
// };
// const colorButton = document.querySelector("mybutton2");
// const toggleBackgroundColorOnMyButton2 = () => {
//   mybutton2.classList.toggle("redBackground");
// };
// mybutton2.addEventListener("click", toggleBackgroundColorOnMyButton2);




// const backgroundColor = function () {
//     const blauw = document.querySelector(".blauw");
//     blauw.addEventListener("click", makeBodyBackgroundBlauw);
//     if (makeBodyBackgroundBlauw === true) {
//         blauw.classList.add("blauw body");
//     }
//     else if (makeBodyBackgroundBlauw = false)

//     const geel = document.querySelector(".geel");
//     const groen = document.querySelector(".groen");
//     const rood = document.querySelector(".rood");

//     const makeBodyBackgroundBlauw = () => {
//         // blauw.classList.remove("geel");
//         // blauw.classList.remove("groen");
//         // blauw.classList.remove("rood");
//         blauw.classList.add("blauw");
//     }


// }
// 