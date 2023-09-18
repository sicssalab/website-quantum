import apiHome from "../mocks/apiHome";

const resource = {
    shortName: "Inicio",
    slug: "/",
    locale: "es",
    metadata: {
        "metaTitle": "Sicssa Lab · Developers",
        "metaDescription": "Con más de 8 años de experiencia en análisis, diseño, desarrollo de aplicaciones  y mantenimiento, somos un grupo de expertos que ayudan a las emprsas a integrar soluciones tecnológicas, innovadoras y que aporten valor. Somos el puente entre el presente y el futuro.",
        "keywords": "Consultoría de TI, Consultoría de desarrollo de Software, Desarrollo de aplicaciones, Desarrollo de aplicaciones web, Desarrollo de software a la medida, Consultores de software, Desarrollo de aplicaciones móviles, Desarrollo de software escalable, Consultores en innovación tecnológica, automatización de procesos, programadores.",
        "url": "inicio", //canonical
        "sitename": "SICSSA LAB",
        "type": "website",
        "image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [
        {
            "shortName": "Home",
            "slug": "/", //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "en"
        }
    ],
    ...apiHome
}

export default resource;