import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiKaanaMock";

const resource = {
    shortName: "Kaana",
    slug: pagesContants.landingKaanaES,
    locale: "es",
    metadata: {
        "metaTitle": "Kaana by Selva Escondida | Sicssa lab",
        "metaDescription": "Departamentos en Puerto Morelos con más de 20 amenidades.",
        "keywords": "",
        "url": pagesContants.landingKaanaES, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/kaana.jpg"
    },
    localizations: [
        {
            shortName: "Kaana",
            "slug": pagesContants.landingKaanaES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "en"
        }
    ],
    ...pageData
}

export default resource;