import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiNosotros";

const resource = {
    shortName: "Nosotros",
    slug: pagesContants.nosotrosES,
    locale: "es",
    metadata: {
        "metaTitle": "Nosotros | Grupo Miraro",
        "metaDescription": "Somos una desarrolladora inmobiliaria con proyectos inmobiliarios en Ciudad de México, Estado de México y Quintana Roo.",
        "keywords": "",
        "url": pagesContants.nosotrosES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/nosotros.jpg"
    },
    localizations: [
        {
            "shortName": "Nosotros EN",
            slug: pagesContants.nosotrosEN,
            "locale": "en"
        }
    ],
    ...apiHome
}

export default resource;