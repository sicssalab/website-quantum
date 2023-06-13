import pagesContants from "../constants/pagesContants";
import apiPrensa from "../mocks/apiPrensa";

const resource = {
    shortName: "Prensa",
    slug: pagesContants.prensaES,
    locale: "es",
    metadata: {
        "metaTitle": "Prensa | Grupo Miraro",
        "metaDescription": "Descubre las últimas noticias y actualizaciones de Grupo Miraro en nuestra sección de prensa. Mantente al día con nuestros proyectos inmobiliarios, oportunidades de inversión y conocimientos del sector. Explora nuestros comunicados de prensa para obtener información valiosa sobre nuestros últimos desarrollos.",
        "keywords": "",
        "url": pagesContants.prensaES,
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": null
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