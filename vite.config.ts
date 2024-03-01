import { defineConfig } from "vite";
import handlebars from "handlebars/runtime";

const partials: Record<string, string> = {
    header: "<header>My Header</header>",
    footer: "<footer>My Footer</footer>",
    auth: "<p>hello</p>",
};

handlebars.registerHelper("partial", function (name: string) {
    return new handlebars.SafeString(partials[name]);
});

export default defineConfig({});
