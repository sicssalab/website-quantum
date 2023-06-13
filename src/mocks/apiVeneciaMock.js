

import pagesContants from "../constants/pagesContants";

const response = {
    items: [
        {
            type: "header-component",
            title: "VENECIA<br/>RESIDENCIAL",
            isLanding: true,
            socialNetwork: [],
            items: [
                {
                    name: "test1",
                    url: "https://sicssalab.net/test-miraro/mocks/venecia/Ordenador/banner_principal/AnyConv.com__1-portada.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/venecia/Mobile/banner_principal/portada_1.webp",
                },
            ],
        },
        {
            type: "information-residential-component",
            logo: "https://sicssalab.net/test-miraro/mocks/venecia/logo-venecia.svg",
            //title: "venecia",
            //logoUrl: 'https://www.selvaescondida.mx',
            description: "Desarrollo inmobiliario en CDMX conformado por tres torres de departamentos, con seis niveles cada torre.<br /><br />Un nuevo concepto de comodidad y modernidad gracias a sus espacios que reflejan un estilo de vida contemporáneo.",
            housing: "127",
            location: "Ciudad de México,<br/> México",
            status: "Vendido",
            construction: "2015 - 2017",
            altImage: 'Imagen Experience',
            frontPage: "https://sicssalab.net/test-miraro/mocks/venecia/Ordenador/video_cover/AnyConv.com__video-cover.webp",
            frontPageMobile: "https://sicssalab.net/test-miraro/mocks/venecia/Mobile/video_cover/video-mobile.webp",
            videoLink: "1GSAheaay_M"
        },
        {
            type: "gallery-residential-component",
            title: "Conoce venecia residencial",
            description: "Diseño urbano enfocado en maximizar la funcionalidad, con acabados y equipamientos de primer nivel.",
            items: [
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/venecia/Ordenador/galeria/AnyConv.com__1.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/venecia/Mobile/galeria/1-mobile.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/venecia/Ordenador/galeria/AnyConv.com__2.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/venecia/Mobile/galeria/2.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/venecia/Ordenador/galeria/AnyConv.com__3.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/venecia/Mobile/galeria/3.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/venecia/Ordenador/galeria/AnyConv.com__4.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/venecia/Mobile/galeria/4.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/venecia/Ordenador/galeria/AnyConv.com__5.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/venecia/Mobile/galeria/5.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/venecia/Ordenador/galeria/AnyConv.com__6.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/venecia/Mobile/galeria/6.webp",
                },
            ]
        },
        {
            type: "location-map-component",
            gmap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25307.439105444442!2d-99.18870433755082!3d19.456716616882577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9b2d68e227b%3A0xf76e6c0cf08f5c87!2sResidencial%20Venecia!5e0!3m2!1ses-419!2smx!4v1686244401886!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            location: {
                title: "Ubicación",
                description: "José Sánchez Trujillo #280 y #282 y Parthenon #20, Col. San Álvaro, Delegación Azcapotzalco, CDMX, México.",
            },
        },
        {
            type: "others-proyects-component",
            title: "Otros proyectos",
            description: "Conoce más sobre la innovación en desarrollo inmobiliario que hemos logrado.",
            items: [
                {
                    name: "SELVA ESCONDIDA II",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingSelvaEscondidaIIES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/selva2.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/selva2.webp",
                },
                {
                    name: "NAAY BY SELVA ESCONDIDA",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingNaayES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/naay.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/naay.webp",
                },
                {
                    name: "EVIA INTERLOMAS",
                    description: "Estado de México",
                    link: pagesContants.landingEviaES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/evia.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/evia.webp",
                },
                {
                    name: "SELVA ESCONDIDA RESIDENCIAL",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingSelvaEscondidaES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/selva1.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/selva1.webp",
                },
                {
                    name: "KAANA RESIDENCIAL",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingKaanaES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/kaana.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/kaana.webp",
                },
                {
                    name: "LUUM BY SELVA ESCONDIDA",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingLuumES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/luum.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/luum.webp",
                },
                {
                    name: "PALMAS BY SELVA ESCONDIDA",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingPalmasES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/palmas.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/palmas.webp",
                },
            ]
        },
    ]
}

export default response;