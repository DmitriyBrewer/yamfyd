import "./style.css";
import { setupCounter } from "./counter.ts";
import template from "./template.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  ${template({ doesWhat: "rocks!" })}
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
