import pagesContants from "../constants/pagesContants";
import pageData from "../mocks/apiDelMarMock";

const resource = {
    shortName: "Del Mar",
    slug: pagesContants.landingDelMarES,
    locale: "es",
    metadata: {
        "metaTitle": "Del Mar | Grupo Miraro",
        "metaDescription": "Departamentos de lujo a orilla del mar en Puerto Morelos con exclusivas amenidades.",
        "keywords": "",
        "url": pagesContants.landingDelMarES, //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": "https://sicssalab.net/test-miraro/mocks/metadatos/del-mar.jpg"
    },
    localizations: [
        {
            "shortName": "Del Mar EN",
            "slug": pagesContants.landingDelMarES, //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "en"
        }
    ],
    ...pageData
}

export default resource;