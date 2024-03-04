import "./index.scss";
import renderTemplate from "../../lib/render";

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.includes("/chat")) {
        const chat = renderTemplate("ChatPage");
        document.querySelector(".root")!.innerHTML = chat;
    }

    const chatLink = document.querySelector("a[href='/chat']");
    if (chatLink) {
        chatLink.addEventListener("click", (event) => {
            event.preventDefault();
            const chatPage = renderTemplate("ChatPage");
            document.querySelector(".root")!.innerHTML = chatPage;

            window.history.pushState({}, "", "/chat");
        });
    }
});

export { default as ChatPage } from "./index.hbs?raw";
