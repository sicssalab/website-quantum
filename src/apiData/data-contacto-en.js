import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiContactoEn";

const resource = {
    shortName: "Contacto",
    slug: pagesContants.contactoEN,
    locale: "en",
    metadata: {
        "metaTitle": "Contact Us | Grupo Miraro",
        "metaDescription": "Contact us for information about investing in our real estate projects.",
        "keywords": "",
        "url": pagesContants.contactoEN, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/contact-us.jpg"
    },
    localizations: [
        {
            "shortName": "Contacto EN",
            slug: pagesContants.contactoES,
            "locale": "es"
        }
    ],
    ...apiHome
}

export default resource;