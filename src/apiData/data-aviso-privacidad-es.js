import pagesContants from "../constants/pagesContants";
import apiAvisoPrivacidad  from "../mocks/apiAvisoPrivacidad";

const resource = {
    shortName: "aviso de privacidad",
    slug: pagesContants.avisoPrivacidadES,
    //slugSub: "aviso-de-privadidad",
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Aviso de Privacidad",
        "metaDescription": "Conoce los alcances y condiciones generales del tratamiento de los datos personales que tienen los usuarios de nuestro sitio web.",
        "keywords": "Consultoría de TI, Consultoría de desarrollo de Software, Desarrollo de aplicaciones, Desarrollo de aplicaciones web, Desarrollo de software a la medida, Consultores de software, Desarrollo de aplicaciones móviles, Desarrollo de software escalable, Consultores en innovación tecnológica, automatización de procesos, programadores.",
        "url": pagesContants.avisoPrivacidadES, //canonical
        "sitename": "SICSSA LAB",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [
        {
            "shortName": "aviso de privacidad EN",
            slug: pagesContants.avisoPrivacidadEN,
            "locale": "en"
        }
    ],
    ...apiAvisoPrivacidad
}

export default resource;