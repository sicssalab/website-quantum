import pagesContants from "../constants/pagesContants";
import apiTerminosCondiciones  from "../mocks/apiTerminosCondiciones";

const resource = {
    shortName: "Terminos y condiciones",
    slug: pagesContants.terminosCondicionesES,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Términos y Condiciones",
        "metaDescription": "Conoce los derechos y obligaciones mutuas con los usuarios en nuestro sitio web.",
        "keywords": "Consultoría de TI, Consultoría de desarrollo de Software, Desarrollo de aplicaciones, Desarrollo de aplicaciones web, Desarrollo de software a la medida, Consultores de software, Desarrollo de aplicaciones móviles, Desarrollo de software escalable, Consultores en innovación tecnológica, automatización de procesos, programadores.",
        "url": pagesContants.terminosCondicionesES, //canonical
        "sitename": "SICSSA LAB",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        //"image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [],
    ...apiTerminosCondiciones
}

export default resource;