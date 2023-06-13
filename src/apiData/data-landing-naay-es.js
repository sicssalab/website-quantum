import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiNaayMock";

const resource = {
    shortName: "Naay",
    slug: pagesContants.landingNaayES,
    locale: "es",
    metadata: {
        "metaTitle": "Naay by Selva Escondida | Grupo Miraro",
        "metaDescription": "Departamentos exclusivos en Puerto Morelos con más de 10 amenidades.",
        "keywords": "",
        "url": pagesContants.landingNaayES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/naay.jpg"
    },
    localizations: [
        {
            shortName: "Naay",
            "slug": pagesContants.landingNaayES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "en"
        }
    ],
    ...pageData
}

export default resource;