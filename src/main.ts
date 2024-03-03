import renderTemplate from "./lib/render";
import navigateToPage from "./lib/navigate";
import "./index.scss";

type AuthData = {
    title: string;
};

const authPage = renderTemplate<AuthData>("Auth", {
    data: { title: "Hello" },
});

function goToAuthPage() {
    navigateToPage("auth");
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class='root'>
    <a id="authLink" href="/auth">Go to Auth Page</a>
    ${authPage}
  </div>
`;

document
    .querySelector<HTMLAnchorElement>("#authLink")
    ?.addEventListener("click", (event) => {
        event.preventDefault();
        goToAuthPage();
    });

if (window.location.pathname === "/auth") {
    goToAuthPage();
}
