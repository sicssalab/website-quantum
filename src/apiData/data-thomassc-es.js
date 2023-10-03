import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiThomassMock";

const resource = {
    shortName: "Thomas Scientific",
    slug: pagesContants.landingThomas,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Thomas Scientific",
        "metaDescription": "---",
        "keywords": "",
        "url": pagesContants.landingThomas, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;