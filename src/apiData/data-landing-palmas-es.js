import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiPalmasMock";

const resource = {
    shortName: "Palmas",
    slug: pagesContants.landingPalmasES,
    locale: "es",
    metadata: {
        "metaTitle": "Palmas by Selva Escondida | Grupo Miraro",
        "metaDescription": "Departamentos en Riviera Maya con Alberca, Seguridad Privada y más.",
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
            "locale": "en"
        }
    ],
    ...pageData
}

export default resource;