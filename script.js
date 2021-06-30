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

const blueListItem = document.querySelector(".blueBG");
const makeBackgroundBlue = () => {
    bodyBackground.classList.add("blauw");
}
blueListItem.addEventListener("click", makeBackgroundBlue);



// const bodyBackground = document.querySelector('body');
// bodyBackground.classList.add('blauw');

// const bodyBackground = document.querySelector("body");
// const maakAchtergrondBlauw = () => {
//     bodyBackground.classList.add("blauw");
// }
// bodyBackground.addEventListener("click", maakAchtergrondBlauw);

// const blauwAchtergrond = document.querySelector("body");
// const maakAchtergrondBlauw = () => {
//     blauwAchtergrond.classList.add("blauw");
// }
// blauwAchtergrond.addEventListener("click", maakAchtergrondBlauw);
// const geelAchtergrond = document.querySelector("body");
// const maakAchtergrondGeel = () => {
//     geelAchtergrond.classList.add("geel");
// }
// geelAchtergrond.addEventListener("click", maakAchtergrondGeel);
// const groenAchtergrond = document.querySelector("body");
// const maakAchtergrondGroen = () => {
//     groenAchtergrond.classList.add("groen");
// }
// groenAchtergrond.addEventListener("click", maakAchtergrondGroen);
// const roodAchtergrond = document.querySelector("body");
// const maakAchtergrondRood = () => {
//     roodAchtergrond.classList.add("rood");
// }
// roodAchtergrond.addEventListener("click", maakAchtergrondRood);


// const bodyBackground = document.querySelector("body");

// const makeBackgroundBlue = () => {
//     bodyBackground.classList.add(".blauw");
// };
// bodyBackground.addEventListener("click", makeBackgroundBlue);


// // const blueBackground = document.querySelector("blauw");



// const bodyBackgroundBlauw = document.querySelector("body");
// bodyBackgroundBlauw.classList.add("blauw");
// function changeBackgroundColorOnBody() {
//     bodyBackgroundBlauw.addEventListener("click", blauw);
// }

// const bodyBackground = document.querySelector("body");
// bodyBackground.classList.add("blauw");
// function changeBackgroundColorOnBody() {
//     bodyBackground.addEventListener("click", blauw);
// }


// if (BodyBackgroundBlauw === true) {
//     bodyBackgroundBlauw.addEventListener("click", blauw);
//         }
//         else if (BodyBackgroundBlauw = false)
// bodyBackgroundBlauw.addEventListener("click", blauw);


// const bodyBackground = document.querySelector("body");
// bodyBackground.classList.add("blauw");
// bodyBackground.addEventListener("click", makeBodyBackgroundBlue);


// const changeBackgroundColor = document.querySelector("blauw");
// function changeBackgroundColorOnBody() {
//     blauw.backgroundColor = "blauw"
// };
// blauw.addEventListener("click", changeBackgroundColor);

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