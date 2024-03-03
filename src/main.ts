import renderTemplate from "./lib/render";
import navigateToPage from "./lib/navigate";

type AuthData = {
    title: string;
};

const authPage = renderTemplate<AuthData>("auth", {
    data: { title: "Hello" },
});

function goToAuthPage() {
    navigateToPage("auth");
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
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
