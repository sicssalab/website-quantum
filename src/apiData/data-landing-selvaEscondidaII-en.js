import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiSelvaEscondidaIIENMock";

const resource = {
    shortName: "Selva escondida II",
    slug: pagesContants.landingSelvaEscondidaIIEN,
    locale: "en",
    metadata: {
        "metaTitle": "Selva Escondida II | Grupo Miraro",
        "metaDescription": "Condos in Puerto Morelos with more than 30 resort-like amenities.",
        "keywords": "",
        "url": pagesContants.landingSelvaEscondidaIIEN, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
        {
            "shortName": "Selva escondida II",
            "slug": pagesContants.landingSelvaEscondidaIIES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "es"
        }
    ],
    ...pageData
}

export default resource;