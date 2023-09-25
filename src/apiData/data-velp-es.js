import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apivelpMock";

const resource = {
    shortName: "Selva escondida II",
    slug: pagesContants.landingVelp,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: VELP Scientifica",
        "metaDescription": "---",
        "keywords": "",
        "url": pagesContants.landingVelp, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;