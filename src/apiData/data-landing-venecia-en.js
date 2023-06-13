import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiVeneciaEnMock";

const resource = {
    shortName: "Venecia",
    slug: pagesContants.landingVeneciaES,
    locale: "en",
    metadata: {
        "metaTitle": "Venecia Residential | Grupo Miraro",
        "metaDescription": "Modern residential project in Mexico City with amenities for the whole family.",
        "keywords": "",
        "url": pagesContants.landingVeneciaES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/Venecia--Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
        {
            "shortName": "Venecia en",
            "slug": pagesContants.landingVeneciaES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "es"
        }
    ],
    ...pageData
}

export default resource;