import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiContacto";

const resource = {
    shortName: "Contacto",
    slug: pagesContants.contactoES,
    locale: "es",
    metadata: {
        "metaTitle": "Contacto | Sicssa Lab",
        "metaDescription": "Contáctanos y obtén información para obtener tu sitio web, aplicación móvil o desarrollo a la medida.",
        "keywords": "Consultoría de TI, Consultoría de desarrollo de Software, Desarrollo de aplicaciones, Desarrollo de aplicaciones web, Desarrollo de software a la medida, Consultores de software, Desarrollo de aplicaciones móviles, Desarrollo de software escalable, Consultores en innovación tecnológica, automatización de procesos, programadores.",
        "url": pagesContants.contactoES, //canonical
        "sitename": "SICSSA LAB",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [
        {
            "shortName": "Contact",
            slug: pagesContants.contactoEN,
            "locale": "en"
        }
    ],
    ...apiHome
}

export default resource;