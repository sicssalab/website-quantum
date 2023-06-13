import pagesContants from "../constants/pagesContants";
import apiHome from "../mocks/apiBlogPreview";

const resource = {
    shortName: "Blog preview",
    slug: "blog-test",
    locale: "es",
    metadata: {
        "metaTitle": "Blog preview",
        "metaDescription": "Un nuevo concepto residencial de departamentos en Puerto Morelos. La perfecta armonía entre naturaleza y modernidad.",
        "keywords": "HTML, CSS, JavaScript",
        //"url": "https://selvaescondida.mx", //canonical
        "sitename": "Grupo Miraro",
        "type": "website",
        //"follow": //TODO solo las que no llevan index agregarlo nofollow, noindex //Meta name=”robots” content=”noindex,nofollow”
        "image": null
    },
    localizations: [
        {
            "shortName": "Blog preview EN",
            slug: "blog-test",
            "locale": "en"
        }
    ],
    ...apiHome
}

export default resource;