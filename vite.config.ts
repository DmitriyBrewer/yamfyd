import { defineConfig } from "vite";
import handlebars from "handlebars/runtime";

// Определение частей шаблонов в коде
const partials: Record<string, string> = {
    header: "<header>My Header</header>",
    footer: "<footer>My Footer</footer>",
    auth: "<p>hello</p>",
};

// Регистрация хелпера для использования частей шаблонов во время выполнения
handlebars.registerHelper("partial", function (name: string) {
    return new handlebars.SafeString(partials[name]);
});

export default defineConfig({
    // Дополнительные настройки Vite...
});
