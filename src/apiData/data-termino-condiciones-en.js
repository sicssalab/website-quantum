import pagesContants from "../constants/pagesContants";
import apiTerminosCondiciones  from "../mocks/apiTerminosCondicionesEN";

const resource = {
    shortName: "Terminos y condiciones",
    slug: pagesContants.terminosCondicionesEN,
    locale: "en",
    metadata: {
        "metaTitle": "Terms and Conditions | Sicssa lab",
        "metaDescription": "Learn about the mutual rights and obligations with users on our website.",
        "keywords": "IT consulting, Software development consulting, Application development, Web application development, Custom software development, Software consultants, Mobile application development, Scalable software development, Technological innovation consultants, process automation, programmers .",
        "url": pagesContants.terminosCondicionesEN, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [
        {
            "shortName": "terminos y condiciones EN",
            slug: pagesContants.terminosCondicionesES,
            "locale": "es"
        }
    ],
    ...apiTerminosCondiciones
}

export default resource;