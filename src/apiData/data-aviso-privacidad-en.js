import pagesContants from "../constants/pagesContants";
import apiAvisoPrivacidad  from "../mocks/apiAvisoPrivacidadEN";

const resource = {
    shortName: "aviso de privacidad",
    slug: pagesContants.avisoPrivacidadEN,
    //slugSub: "aviso-de-privadidad",
    locale: "en",
    metadata: {
        "metaTitle": "Privacy Notice | Sicssa lab",
        "metaDescription": "The scope and general conditions of the processing of personal data of our website users.",
        "keywords": "",
        "url": pagesContants.avisoPrivacidadEN, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/privacy.jpg"
    },
    localizations: [
        {
            "shortName": "aviso de privacidad EN",
            slug: pagesContants.avisoPrivacidadES,
            "locale": "es"
        }
    ],
    ...apiAvisoPrivacidad
}

export default resource;