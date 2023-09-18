import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiLuumEnMock";

const resource = {
    shortName: "Luum",
    slug: pagesContants.landingLuumES,
    locale: "en",
    metadata: {
        "metaTitle": "Luum by Selva Escondida | Sicssa lab",
        "metaDescription": "Gated community just eight minutes from the beach with Private Security, Pool, Clubhouse, and more.",
        "keywords": "",
        "url": pagesContants.landingLuumES, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/luum.jpg"
    },
    localizations: [
        {
            shortName: "Luum",
            "slug": pagesContants.landingLuumES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "es"
        }
    ],
    ...pageData
}

export default resource;