import { html, menu } from "./pages/auth";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <a href="./views/partials/home.hbs">Регистрация</a>
  ${html}
  ${menu}
  </div>
`;
