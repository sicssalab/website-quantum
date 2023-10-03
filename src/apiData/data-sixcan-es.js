import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiSixcanMock";

const resource = {
    shortName: "Sixcan",
    slug: pagesContants.landingSixcan,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Sixcan",
        "metaDescription": "---",
        "keywords": "",
        "url": pagesContants.landingSixcan, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;