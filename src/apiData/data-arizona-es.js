import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiAmetekMock";

const resource = {
    shortName: "Brookfield Ametek",
    slug: pagesContants.ametek,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Brookfield Ametek",
        "metaDescription": "--",
        "keywords": "",
        "url": pagesContants.ametek, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "https://sicssalab.net/test-miraro/mocks/metadatos/Selva-Escondida-II-Portadas-metadata---Miraro-Web.png"
    },
    localizations: [
    ],
    ...pageData
}

export default resource;