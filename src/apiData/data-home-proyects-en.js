import pagesContants from "../constants/pagesContants";
import apiOwnProyects from "../mocks/apiOwnProyectsEN";

const resource = {
    shortName: "Our Proyects",
    slug: pagesContants.proyectsEN,
    locale: "en",
    metadata: {
        "metaTitle": "Our Projects | Grupo Miraro",
        "metaDescription": "Learn about our residential real estate projects in Mexico that represent investment opportunities for our clients.",
        "keywords": "",
        "url": pagesContants.proyectsEN, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/proyectos.jpg"
    },
    localizations: [
        {
            "shortName": "Nuestros Proyectos",
            "slug": pagesContants.proyectsES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "es"
        }
    ],
    ...apiOwnProyects
}

export default resource;