import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiNosotros";

const resource = {
    shortName: "Nosotros",
    slug: pagesContants.nosotrosES,
    locale: "es",
    metadata: {
        "metaTitle": "Nosotros | Sicssa Lab",
        "metaDescription": "Con más de 8 años de experiencia en análisis, diseño, desarrollo de aplicaciones  y mantenimiento, somos un grupo de expertos que ayudan a las emprsas a integrar soluciones tecnológicas, innovadoras y que aporten valor. Somos el puente entre el presente y el futuro.",
        "keywords": "Consultoría de TI, Consultoría de desarrollo de Software, Desarrollo de aplicaciones, Desarrollo de aplicaciones web, Desarrollo de software a la medida, Consultores de software, Desarrollo de aplicaciones móviles, Desarrollo de software escalable, Consultores en innovación tecnológica, automatización de procesos, programadores.",
        "url": pagesContants.nosotrosES, //canonical
        "sitename": "SICSSA LAB",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [
        {
            "shortName": "about us",
            slug: pagesContants.nosotrosEN,
            "locale": "en"
        }
    ],
    ...apiHome
}

export default resource;