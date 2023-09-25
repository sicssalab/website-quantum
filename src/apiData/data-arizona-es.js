import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiAmetekMock";

const resource = {
    shortName: "Selva escondida II",
    slug: pagesContants.landingSelvaEscondidaIIES,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Brookfield Ametek",
        "metaDescription": "--",
        "keywords": "",
        "url": pagesContants.landingSelvaEscondidaIIES, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;