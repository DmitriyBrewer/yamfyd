import "./index.scss";

// document.addEventListener("DOMContentLoaded", function () {
//     const menuButton = document.querySelector(
//         ".chatHeader__menu"
//     ) as HTMLButtonElement;
//     const menu = document.querySelector(".chatMenu") as HTMLDivElement;

//     if (menuButton && menu) {
//         menuButton.addEventListener("click", function () {
//             menu.classList.toggle("show");
//         });
//     }

//     const addObjectButton = document.getElementById(
//         "addObject"
//     ) as HTMLAnchorElement;
//     const deleteObjectButton = document.getElementById(
//         "deleteObject"
//     ) as HTMLAnchorElement;

//     if (addObjectButton && deleteObjectButton) {
//         addObjectButton.addEventListener("click", function () {
//             console.log("Добавить объект");
//         });

//         deleteObjectButton.addEventListener("click", function () {
//             console.log("Удалить объект");
//         });
//     }
// });

export { default as ChatHeader } from "./index.hbs?raw";
