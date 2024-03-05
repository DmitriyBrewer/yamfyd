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
    ButtonWrapper: partials.ButtonWrapper,
    ErrorPage: partials.ErrorPage,
    SidebarLayout: partials.SidebarLayout,
    ChatPage: partials.ChatPage,
    Sidebar: partials.Sidebar,
    SearchField: partials.SearchField,
    ChatItem: partials.ChatItem,
    Avatar: partials.Avatar,
    ChatTitle: partials.ChatTitle,
    ChatWindow: partials.ChatWindow,
};

registerHandlebarsPartials(allPartials);
