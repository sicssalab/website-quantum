import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiAquaMock";

const resource = {
    shortName: "aqua solutions",
    slug: pagesContants.landingAquaSolutions,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Aqua Solutions",
        "metaDescription": "---",
        "keywords": "",
        "url": pagesContants.landingAquaSolutions, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;