import renderTemplate from "./lib/render";
import "./index.scss";

type AuthData = {
    title: string;
};

const authPage = renderTemplate<AuthData>("Auth", {
    data: { title: "Вход" },
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class='root'>
   ${authPage}
  </div>
`;
