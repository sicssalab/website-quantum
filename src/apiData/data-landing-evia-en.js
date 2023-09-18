import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiEviaEnMock";

const resource = {
    shortName: "Evia Interlomas",
    slug: pagesContants.landingEviaES,
    locale: "en",
    metadata: {
        "metaTitle": "EVIA Interlomas | Sicssa lab",
        "metaDescription": "Condos with security in Mexico City, in an area of high capital gains.",
        "keywords": "",
        "url": pagesContants.landingEviaES, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/Interlomas -Portadas-metadata---Miraro-Web.jpg"
    },
    localizations: [
        {
            shortName: "Evia Interlomas",
            "slug": pagesContants.landingEviaES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "es"
        }
    ],
    ...pageData
}

export default resource;