import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiSelvaEscondidaEnMock";

const resource = {
    shortName: "Selva escondida",
    slug: pagesContants.landingSelvaEscondidaEN,
    locale: "en",
    metadata: {
        "metaTitle": "Selva Escondida Residential | Sicssa lab",
        "metaDescription": "More than 650 homes in Puerto Morelos with more than 20 amenities.",
        "keywords": "",
        "url": pagesContants.landingSelvaEscondidaEN, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida---Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
        {
            "shortName": "Selva escondida",
            "slug": pagesContants.landingSelvaEscondidaES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "es"
        }
    ],
    ...pageData
}

export default resource;