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
    Auth: partials.AuthPage,
    BaseLayout: partials.BaseLayout,
    TextField: partials.TextField,
    Button: partials.Button,
};

registerHandlebarsPartials(allPartials);
