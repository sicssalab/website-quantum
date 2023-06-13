import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiVeneciaMock";

const resource = {
    shortName: "Venecia",
    slug: pagesContants.landingVeneciaES,
    locale: "es",
    metadata: {
        "metaTitle": "Venecia Residencial | Grupo Miraro",
        "metaDescription": "Moderno proyecto residencial en Ciudad de México con amenidades para toda la familia.",
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
            "locale": "en"
        }
    ],
    ...pageData
}

export default resource;