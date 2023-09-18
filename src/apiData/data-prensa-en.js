import pagesContants from "../constants/pagesContants";
import apiPrensa from "../mocks/apiPrensaEn";

const resource = {
    shortName: "Prensa",
    slug: pagesContants.prensaEN,
    locale: "en",
    metadata: {
        "metaTitle": "Press | Sicssa lab",
        "metaDescription": "Discover the latest news and updates from Sicssa lab in our press section. Stay informed about our real estate projects, investment opportunities, and industry insights. Explore our press releases to learn valuable information about our latest developments.",
        "keywords": "",
        "url": pagesContants.prensaEN,
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": null
    },
    localizations: [
        {
            "shortName": "Prensa EN",
            slug: pagesContants.prensaES,
            "locale": "es"
        }
    ],
    ...apiPrensa
}

export default resource;