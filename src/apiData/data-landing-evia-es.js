import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiEviaMock";

const resource = {
    shortName: "Evia Interlomas",
    slug: pagesContants.landingEviaES,
    locale: "es",
    metadata: {
        "metaTitle": "EVIA Interlomas | Grupo Miraro",
        "metaDescription": "Departamentos con Seguridad Privada en Ciudad de México, en zona de alta plusvalía.",
        "keywords": "",
        "url": pagesContants.landingEviaES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/Interlomas -Portadas-metadata---Miraro-Web.jpg"
    },
    localizations: [
        {
            shortName: "Evia Interlomas",
            "slug": pagesContants.landingEviaES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "en"
        }
    ],
    ...pageData
}

export default resource;