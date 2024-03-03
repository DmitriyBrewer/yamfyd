import * as partials from "../partials";
import handlebars from "handlebars";

function registerHandlebarsPartials(partials: Record<string, string>) {
    for (const partialName in partials) {
        if (Object.prototype.hasOwnProperty.call(partials, partialName)) {
            handlebars.registerPartial(partialName, partials[partialName]);
        }
    }
}

export const allPartials: Record<string, string> = {
    auth: partials.AuthPage,
    footer: partials.FooterPage,
    baseLayout: partials.BaseLayout,
};

registerHandlebarsPartials(allPartials);
