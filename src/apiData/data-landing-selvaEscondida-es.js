import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiSelvaEscondidaMock";

const resource = {
    shortName: "Selva escondida",
    slug: pagesContants.landingSelvaEscondidaES,
    locale: "es",
    metadata: {
        "metaTitle": "Selva Escondida Residencial | Sicssa lab",
        "metaDescription": "Más de 650 viviendas en Puerto Morelos con más de 20 amenidades.",
        "keywords": "",
        "url": pagesContants.landingSelvaEscondidaES, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida---Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
        {
            "shortName": "Selva escondida",
            "slug": pagesContants.landingSelvaEscondidaEN, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "en"
        }
    ],
    ...pageData
}

export default resource;