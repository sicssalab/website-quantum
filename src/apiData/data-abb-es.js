import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiABBMock";

const resource = {
    shortName: "ABB",
    slug: pagesContants.landingABB,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: ABB",
        "metaDescription": "---",
        "keywords": "",
        "url": pagesContants.landingABB, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;