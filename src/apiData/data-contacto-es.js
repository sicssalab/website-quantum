import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiContacto";

const resource = {
    shortName: "Contacto",
    slug: pagesContants.contactoES,
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Contacto",
        "metaDescription": "Contáctanos y obtén información sobre los productos que manejamos",
        "keywords": "---",
        "url": pagesContants.contactoES, //canonical
        "sitename": "Quantumdo",
        "type": "website",
        //"image": "/src/assets/sicssa/metatag-sicssa-lab.png"
    },
    localizations: [],
    ...apiHome
}

export default resource;