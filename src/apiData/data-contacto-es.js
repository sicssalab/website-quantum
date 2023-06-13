import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiContacto";

const resource = {
    shortName: "Contacto",
    slug: pagesContants.contactoES,
    locale: "es",
    metadata: {
        "metaTitle": "Contacto | Grupo Miraro",
        "metaDescription": "Contáctanos y obtén información para invertir en uno de nuestros proyectos inmobiliarios.",
        "keywords": "",
        "url": pagesContants.contactoES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/contacto.jpg"
    },
    localizations: [
        {
            "shortName": "Contacto EN",
            slug: pagesContants.contactoEN,
            "locale": "en"
        }
    ],
    ...apiHome
}

export default resource;