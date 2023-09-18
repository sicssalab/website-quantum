import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiNosotrosEn";

const resource = {
    shortName: "Nosotros",
    slug: pagesContants.nosotrosEN,
    locale: "en",
    metadata: {
        "metaTitle": "About us | Sicssa lab",
        "metaDescription": "With more than 8 years of experience in analysis, design, application development and maintenance, we are a group of experts who help companies integrate technological, innovative solutions that add value. We are the bridge between the present and the future.",
        "keywords": "IT consulting, Software development consulting, Application development, Web application development, Custom software development, Software consultants, Mobile application development, Scalable software development, Technological innovation consultants, process automation, programmers .",
        "url": pagesContants.nosotrosEN, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [
        {
            "shortName": "Nosotros",
            slug: pagesContants.nosotrosES,
            "locale": "es"
        }
    ],
    ...apiHome
}

export default resource;