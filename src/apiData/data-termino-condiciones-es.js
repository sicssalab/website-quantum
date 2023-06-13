import pagesContants from "../constants/pagesContants";
import apiTerminosCondiciones  from "../mocks/apiTerminosCondiciones";

const resource = {
    shortName: "Terminos y condiciones",
    slug: pagesContants.terminosCondicionesES,
    locale: "es",
    metadata: {
        "metaTitle": "Términos y Condiciones | Grupo Miraro",
        "metaDescription": "Conoce los derechos y obligaciones mutuas con los usuarios en nuestro sitio web.",
        "keywords": "",
        "url": pagesContants.terminosCondicionesES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/terminos-condiciones.jpg"
    },
    localizations: [
        {
            "shortName": "aviso de privacidad EN",
            slug: pagesContants.terminosCondicionesEN,
            "locale": "en"
        }
    ],
    ...apiTerminosCondiciones
}

export default resource;