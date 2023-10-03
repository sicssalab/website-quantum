import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiHitachiMock";

const resource = {
    shortName: "Hitachi",
    slug: pagesContants.landingHitachi,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Hitachi",
        "metaDescription": "---",
        "keywords": "",
        "url": pagesContants.landingHitachi, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;