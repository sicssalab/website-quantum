import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiNosotrosEn";

const resource = {
    shortName: "Nosotros",
    slug: pagesContants.nosotrosEN,
    locale: "en",
    metadata: {
        "metaTitle": "About us | Grupo Miraro",
        "metaDescription": "We are a real estate developer with projects in Mexico City, State of Mexico, and Quintana Roo.",
        "keywords": "",
        "url": pagesContants.nosotrosEN, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/about-us.jpg"
    },
    localizations: [
        {
            "shortName": "Nosotros EN",
            slug: pagesContants.nosotrosES,
            "locale": "es"
        }
    ],
    ...apiHome
}

export default resource;