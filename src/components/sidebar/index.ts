import renderTemplate from "../../lib/render";
import "./index.scss";

export { default as Sidebar } from "./index.hbs?raw";

const mockChats = [
    {
        title: "Chat1",
        message: "Last message 1",
        time: "10:30",
        counter: 4,
    },
    {
        title: "Chat2",
        message: "Last message 2",
        time: "11:45",
        counter: 2,
    },
    {
        title: "Chat3",
        message: "Last message 3",
        time: "13:15",
        counter: 0,
    },
];

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.includes("/chat")) {
        renderTemplate("Sidebar", {
            data: {
                chats: mockChats,
            },
        });
        const chat = renderTemplate("ChatPage", {
            data: {
                chats: mockChats,
            },
        });
        document.querySelector(".root")!.innerHTML = chat;
    }
});
