import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiBlogCategoriesEn";

const resource = {
    shortName: "Blog",
    slug: pagesContants.blogCategoriasEN,
    locale: "en",
    metadata: {
        "metaTitle": "Blog Categories | Sicssa lab",
        "metaDescription": "Advice and information on real estate and construction, backed by more than 30 years of developing residential projects in Mexico.",
        "keywords": "",
        "url": pagesContants.blogCategoriasEN, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/home-blog.jpg"
    },
    localizations: [
        {
            "shortName": "Blog EN",
            slug: pagesContants.blogCategoriasES,
            "locale": "es"
        }
    ],
    ...apiHome
}

export default resource;