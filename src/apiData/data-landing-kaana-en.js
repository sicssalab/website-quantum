import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiKaanaEnMock";

const resource = {
    shortName: "Kaana",
    slug: pagesContants.landingKaanaES,
    locale: "en",
    metadata: {
        "metaTitle": "Kaana by Selva Escondida | Grupo Miraro",
        "metaDescription": "Condos in Puerto Morelos with more than 20 amenities.",
        "keywords": "",
        "url": pagesContants.landingKaanaES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/kaana.jpg"
    },
    localizations: [
        {
            shortName: "Kaana",
            "slug": pagesContants.landingKaanaES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "es"
        }
    ],
    ...pageData
}

export default resource;