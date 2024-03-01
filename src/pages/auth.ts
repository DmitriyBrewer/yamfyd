import handlebars from "handlebars";

const tmpl = "<div><h1>{{title}}</h1></div>";
const yhtml = document.getElementById("#entry-template");

const template = handlebars.compile(tmpl);

handlebars.registerPartial("HHH", `${yhtml}`);
const templateMenu = handlebars.compile(tmpl);
export const menu = templateMenu({ title: "sczx", body: "ss" });

const context = {
    title: "Собаке Качалова",
    desription: {
        age: 40,
        male: "male",
    },
};

export const html = template(context);
