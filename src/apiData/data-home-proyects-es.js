import pagesContants from "../constants/pagesContants";
import apiOwnProyects from "../mocks/apiOwnProyects";

const resource = {
    shortName: "Nuestros Proyectos",
    slug: pagesContants.proyectsES,
    locale: "es",
    metadata: {
        "metaTitle": "Nuestros Proyectos | Grupo Miraro",
        "metaDescription": "Conoce nuestros proyectos inmobiliarios en México que representan una inversión inmobiliaria para nuestros clientes.",
        "keywords": "",
        "url": pagesContants.proyectsES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/proyectos.jpg"
    },
    localizations: [
        {
            "shortName": "Our Proyects",
            "slug": pagesContants.proyectsEN, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "en"
        }
    ],
    ...apiOwnProyects
}

export default resource;