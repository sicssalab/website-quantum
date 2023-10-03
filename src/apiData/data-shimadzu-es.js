import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiShimadzuMock";

const resource = {
    shortName: "shimadzu",
    slug: pagesContants.landingShimadzu,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: shimadzu",
        "metaDescription": "---",
        "keywords": "",
        "url": pagesContants.landingShimadzu, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;