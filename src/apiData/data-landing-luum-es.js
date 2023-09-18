import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiLuumMock";

const resource = {
    shortName: "Luum",
    slug: pagesContants.landingLuumES,
    locale: "es",
    metadata: {
        "metaTitle": "Luum by Selva Escondida | Sicssa lab",
        "metaDescription": "Departamentos a solo 8 minutos de la playa con Seguridad Privada, Alberca, Casa Club y más.",
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
            "locale": "en"
        }
    ],
    ...pageData
}

export default resource;