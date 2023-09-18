import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiDelMarMockEn";

const resource = {
    shortName: "Del Mar",
    slug: pagesContants.landingDelMarES,
    locale: "en",
    metadata: {
        "metaTitle": "Del Mar | Sicssa lab",
        "metaDescription": "Luxury beachfront condos in Puerto Morelos with exclusive amenities.",
        "keywords": "",
        "url": pagesContants.landingDelMarES, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/del-mar.jpg"
    },
    localizations: [
        {
            "shortName": "Del Mar EN",
            "slug": pagesContants.landingDelMarES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "es"
        }
    ],
    ...pageData
}

export default resource;