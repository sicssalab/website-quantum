import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiBlog";

const resource = {
    shortName: "Blog",
    slug: pagesContants.blogES,
    slugSub: "categorias",
    locale: "es",
    metadata: {
        "metaTitle": "Blog | Sicssa lab",
        "metaDescription": "Consejos e información en bienes raíces y construcción. Más de 30 años desarrollando proyectos residenciales en México nos respaldan.",
        "keywords": "",
        "url": pagesContants.blogES, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/home-blog.jpg"
    },
    localizations: [
        {
            "shortName": "Blog EN",
            slug: pagesContants.blogES,
            "locale": "en"
        }
    ],
    ...apiHome
}

export default resource;