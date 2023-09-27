import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiNosotros";

const resource = {
    shortName: "Nosotros",
    slug: pagesContants.nosotrosES,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Nosotros",
        "metaDescription": "---",
        "keywords": "---",
        "url": pagesContants.nosotrosES, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [],
    ...apiHome
}

export default resource;