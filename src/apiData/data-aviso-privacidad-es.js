import pagesContants from "../constants/pagesContants";
import apiAvisoPrivacidad  from "../mocks/apiAvisoPrivacidad";

const resource = {
    shortName: "aviso de privacidad",
    slug: pagesContants.avisoPrivacidadES,
    //slugSub: "aviso-de-privadidad",
    locale: "es",
    metadata: {
        "metaTitle": "Aviso de Privacidad | Grupo Miraro",
        "metaDescription": "Conoce los alcances y condiciones generales del tratamiento de los datos personales que tienen los usuarios de nuestro sitio web.",
        "keywords": "",
        "url": pagesContants.avisoPrivacidadES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/aviso-privacidad.jpg"
    },
    localizations: [
        {
            "shortName": "aviso de privacidad EN",
            slug: pagesContants.avisoPrivacidadEN,
            "locale": "en"
        }
    ],
    ...apiAvisoPrivacidad
}

export default resource;