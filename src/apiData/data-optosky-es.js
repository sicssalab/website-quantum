import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiOptoskyMock";

const resource = {
    shortName: "optosky",
    slug: pagesContants.landingOptosky,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: optosky",
        "metaDescription": "---",
        "keywords": "",
        "url": pagesContants.landingOptosky, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;