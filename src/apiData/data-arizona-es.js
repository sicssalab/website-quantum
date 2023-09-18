import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiAmetekMock";

const resource = {
    shortName: "Selva escondida II",
    slug: pagesContants.landingSelvaEscondidaIIES,
    locale: "es",
    metadata: {
        "metaTitle": "Selva Escondida II | Sicssa lab",
        "metaDescription": "Departamentos en Puerto Morelos con más de 30 amenidades tipo resort.",
        "keywords": "",
        "url": pagesContants.landingSelvaEscondidaIIES, //canonical
        "sitename": "Sicssa lab",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;