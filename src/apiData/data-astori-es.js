import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiAstoriMock";

const resource = {
    shortName: "astori",
    slug: pagesContants.landingAstori,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: astori",
        "metaDescription": "---",
        "keywords": "",
        "url": pagesContants.landingAstori, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;