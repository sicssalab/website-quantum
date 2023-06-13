import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiPalmasMockEn";

const resource = {
    shortName: "Palmas",
    slug: pagesContants.landingPalmasES,
    locale: "en",
    metadata: {
        "metaTitle": "Palmas by Selva Escondida | Grupo Miraro",
        "metaDescription": "Condos in the Mexican Caribbean with Pool, Private Security, and more.",
        "keywords": "",
        "url": pagesContants.landingPalmasES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/palmas.jpg"
    },
    localizations: [
        {
            shortName: "Palmas",
            "slug": pagesContants.landingPalmasES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "es"
        }
    ],
    ...pageData
}

export default resource;