import "./style.css";
import { setupCounter } from "./counter.ts";
import handlebars from "handlebars";

const tmpl = "<div><h1>{{title}}</h1></div>";
const yhtml = document.getElementById("#entry-template");

const template = handlebars.compile(tmpl);

handlebars.registerPartial("HHH", yhtml);
const templateMenu = handlebars.compile(tmpl);
const menu = templateMenu({ title: "sczx", body: "ss" });

const context = {
    title: "Собаке Качалова",
    desription: {
        age: 40,
        male: "male",
    },
};
const html = template(context);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <a href="./views/partials/home.hbs">Регистрация</a>
  ${template({ doesWhat: "rocks!" })}
  ${html}
  ${menu}
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <script id="entry-template" type="text/x-handlebars-template">
    <div class="entry"> <h1>{{title}}</h1> <div class="body">
    {{body}}
    </div> </div>
</script>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
