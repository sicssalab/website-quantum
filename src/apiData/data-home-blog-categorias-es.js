import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiBlogCategories";

const resource = {
    shortName: "Blog",
    slug: pagesContants.blogCategoriasES,
    locale: "es",
    metadata: {
        "metaTitle": "Categorías de Blogs | Grupo Miraro",
        "metaDescription": "Consejos e información en bienes raíces y construcción. Más de 30 años desarrollando proyectos residenciales en México nos respaldan.",
        "keywords": "",
        "url": pagesContants.blogCategoriasES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/home-blog.jpg"
    },
    localizations: [
        {
            "shortName": "Blog EN",
            slug: pagesContants.blogCategoriasES,
            "locale": "en"
        }
    ],
    ...apiHome
}

export default resource;