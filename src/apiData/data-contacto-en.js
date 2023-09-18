import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiContactoEn";

const resource = {
    shortName: "Contacto",
    slug: pagesContants.contactoEN,
    locale: "en",
    metadata: {
        "metaTitle": "Contact Us | Sicssa lab",
        "metaDescription": "Contact us and obtain information to obtain your website, mobile application or custom development.",
        "keywords": "IT consulting, Software development consulting, Application development, Web application development, Custom software development, Software consultants, Mobile application development, Scalable software development, Technological innovation consultants, process automation, programmers .",
        "url": pagesContants.contactoEN, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [
        {
            "shortName": "Contacto",
            slug: pagesContants.contactoES,
            "locale": "es"
        }
    ],
    ...apiHome
}

export default resource;