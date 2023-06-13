import apiHome from "../mocks/apiHome";

const resource = {
    shortName: "Inicio",
    slug: "/",
    locale: "es",
    metadata: {
        "metaTitle": "Quantum Analytical: Instrumentos, equipos analíticos y soluciones para la Industria Alimenticia, Láctea, Farmacéutica, Química, Petroquímica, Universidades e Investigación. Soporte y mantenimiento preventivo y correctivo.",
        "metaDescription": "Quantum Analytical es una empresa distribuidora de Instrumentos, equipos analíticos y soluciones para la Industria Alimenticia, Láctea, Farmacéutica, Química, Petroquímica, Universidades e Investigación. Soporte y mantenimiento preventivo y correctivo.",
        "keywords": "",
        "url": "inicio", //canonical
        "sitename": "quantumdo",
        "type": "website",
        "image": null
    },
    localizations: [
        {
            "shortName": "Home",
            "slug": "/", //TODO solo para la home revisar proceso puede mandar home y tomarlo como raiz
            "locale": "en"
        }
    ],
    ...apiHome
}

export default resource;