import pagesContants from "../constants/pagesContants";
import apiOwnProyects from "../mocks/apiOwnProyects";

const resource = {
    shortName: "Nuestros Proyectos",
    slug: pagesContants.proyectsES,
    locale: "es",
    metadata: {
        "metaTitle": "Nuestros Proyectos | Sicssa Lab",
        "metaDescription": "Con más de 8 años de experiencia en análisis, diseño, desarrollo de aplicaciones  y mantenimiento, somos un grupo de expertos que ayudan a las emprsas a integrar soluciones tecnológicas, innovadoras y que aporten valor. Somos el puente entre el presente y el futuro.",
        "keywords": "Consultoría de TI, Consultoría de desarrollo de Software, Desarrollo de aplicaciones, Desarrollo de aplicaciones web, Desarrollo de software a la medida, Consultores de software, Desarrollo de aplicaciones móviles, Desarrollo de software escalable, Consultores en innovación tecnológica, automatización de procesos, programadores.",
        "url": pagesContants.proyectsES, //canonical
        "sitename": "SICSSA LAB",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [],
    ...apiOwnProyects
}

export default resource;