import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


var usrlang = navigator.language
    || navigator.userLanguage;
console.log(
    "User's preferred language is: "
    + usrlang);

const language = () => {
    if (usrlang == "es") return 'es-ES';
    else return 'en-EN';
};

const languageL = () => {
    if (language() === "es-ES") return localeEsMessages;
    else return localeEnMessages;
};

ReactDOM.render(
    <IntlProvider locale= {language()} messages={languageL()}>
        <JobsList idioma = {language()}/>
    </IntlProvider>, document.getElementById("root")
);




