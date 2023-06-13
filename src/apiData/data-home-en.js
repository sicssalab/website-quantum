import apiHome from "../mocks/apiHomeEN";

const resource = {
    shortName: "home",
    slug: "/",
    locale: "en",
    metadata: {
        "metaTitle": "Grupo Miraro · Land Developers",
        "metaDescription": "Real estate developer in Mexico with projects in Quintana Roo, Mexico City, and State of Mexico.",
        "keywords": "",
        "url": "home", //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/home.jpg"
    },
    localizations: [
        {
            "shortName": "Inicio",
            "slug": "/", //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "es"
        }
    ],
    ...apiHome
}

export default resource;