import pagesContants from "../constants/pagesContants";
import apiPrensa from "../mocks/apiPrensa";

const resource = {
    shortName: "Prensa",
    slug: pagesContants.prensaES,
    locale: "es",
    metadata: {
        "metaTitle": "Prensa | Sicssa Lab",
        "metaDescription": "Descubre las últimas noticias y actualizaciones de Sicssa Lab en nuestra sección de prensa. Mantente al día con nuestros proyectos, oportunidades de inversión y conocimientos del sector. Explora nuestros comunicados de prensa para obtener información valiosa sobre nuestros desarrollos.",
        "keywords": "Consultoría de TI, Consultoría de desarrollo de Software, Desarrollo de aplicaciones, Desarrollo de aplicaciones web, Desarrollo de software a la medida, Consultores de software, Desarrollo de aplicaciones móviles, Desarrollo de software escalable, Consultores en innovación tecnológica, automatización de procesos, programadores.",
        "url": pagesContants.prensaES,
        "sitename": "SICSSA LAB",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [
        {
            "shortName": "Prensa EN",
            slug: pagesContants.prensaEN,
            "locale": "en"
        }
    ],
    ...apiPrensa
}

export default resource;