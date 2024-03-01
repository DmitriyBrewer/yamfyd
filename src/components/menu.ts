const menu = fetch("views/partials/menu.hbs")
    .then((response) => response.text())
    .then((menuTemplate) => {
        // Вставка содержимого частичного шаблона в div на странице
        const menuDiv = document.createElement("div");
        console.log(menuDiv);
        menuDiv.innerHTML = menuTemplate;
        console.log(menuTemplate);

        const appDiv = document.querySelector<HTMLDivElement>("#app");
        if (appDiv) {
            appDiv.appendChild(menuDiv);
        } else {
            console.error("Элемент #app не найден на странице.");
        }
    })
    .catch((error) =>
        console.error("Ошибка загрузки частичного шаблона:", error)
    );

export default menu;
