import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiNaayEnMock";

const resource = {
    shortName: "Naay",
    slug: pagesContants.landingNaayES,
    locale: "en",
    metadata: {
        "metaTitle": "Naay by Selva Escondida | Sicssa lab",
        "metaDescription": "Exclusive condos in Puerto Morelos with more than ten amenities.",
        "keywords": "",
        "url": pagesContants.landingNaayES, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/naay.jpg"
    },
    localizations: [
        {
            shortName: "Naay",
            "slug": pagesContants.landingNaayES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "es"
        }
    ],
    ...pageData
}

export default resource;