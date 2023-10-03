import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiLabindiaMock";

const resource = {
    shortName: "Labindia",
    slug: pagesContants.landingLabindia,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Labindia",
        "metaDescription": "---",
        "keywords": "",
        "url": pagesContants.landingLabindia, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;