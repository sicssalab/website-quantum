import pagesContants from "../constants/pagesContants";
import apiTerminosCondiciones  from "../mocks/apiTerminosCondicionesEN";

const resource = {
    shortName: "Terminos y condiciones",
    slug: pagesContants.terminosCondicionesEN,
    locale: "en",
    metadata: {
        "metaTitle": "Terms and Conditions | Grupo Miraro",
        "metaDescription": "The mutual rights and obligations with users on our website.",
        "keywords": "",
        "url": pagesContants.terminosCondicionesEN, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/terms-conditions.jpg"
    },
    localizations: [
        {
            "shortName": "aviso de privacidad EN",
            slug: pagesContants.terminosCondicionesES,
            "locale": "es"
        }
    ],
    ...apiTerminosCondiciones
}

export default resource;