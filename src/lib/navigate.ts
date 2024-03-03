import compiledTemplates from "./render";

export default function navigateToPage(page: string) {
    const template = compiledTemplates[page];
    const appElement = document.querySelector<HTMLDivElement>("#app");

    if (appElement) {
        appElement.innerHTML = template({});
    } else {
        console.error("Element with id 'app' not found.");
    }
}
