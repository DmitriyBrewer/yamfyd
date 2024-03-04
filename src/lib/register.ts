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
    Registration: partials.RegistrationPage,
    BaseLayout: partials.BaseLayout,
    TextField: partials.TextField,
    Button: partials.Button,
    Link: partials.Link,
    Form: partials.Form,
    Title: partials.Title,
    FieldWrapper: partials.FieldWrapper,
    ButtonWrapper: partials.FieldWrapper,
    ErrorPage: partials.ErrorPage,
};

registerHandlebarsPartials(allPartials);
