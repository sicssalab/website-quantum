import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiBWBTechnologiesMock";

const resource = {
    shortName: "BWB Technologies",
    slug: pagesContants.landingBwBTechnologies,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: BWB Technologies",
        "metaDescription": "---",
        "keywords": "",
        "url": pagesContants.landingBwBTechnologies, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;