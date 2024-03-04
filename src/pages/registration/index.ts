import renderTemplate from "../../lib/render";
import "./index.scss";

type Data = {
    title: string;
};

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.includes("/registration")) {
        const registrationPage = renderTemplate<Data>("Registration", {
            data: { title: "Регистрация" },
        });
        document.querySelector(".root")!.innerHTML = registrationPage;
    }

    const registrationLink = document.querySelector("a[href='/registration']");
    if (registrationLink) {
        registrationLink.addEventListener("click", (event) => {
            event.preventDefault();
            const registrationPage = renderTemplate<Data>("Registration", {
                data: { title: "Регистрация" },
            });
            document.querySelector(".root")!.innerHTML = registrationPage;

            window.history.pushState({}, "", "/registration");
        });
    }
});

export { default as RegistrationPage } from "./index.hbs?raw";
