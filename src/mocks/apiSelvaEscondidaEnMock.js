import pagesContants from "../constants/pagesContants";

const apiSelcaEscondidaMock = {
    items: [
        {
            type: "header-component",
            title: "Selva Escondida Residential",
            isLanding: true,
            socialNetwork: [
                {
                    alt: "red network",
                    link: "https://www.facebook.com/selvaescondidamx",
                    type: "facebook"
                },
                {
                    alt: "red network",
                    link: "https://www.instagram.com/selvaescondidamx",
                    type: "instagram"
                },
                {
                    alt: "red network",
                    link: "https://www.youtube.com/channel/UCFjcuzWcPsBf65OASlWMVZA",
                    type: "youtube"
                },
                {
                    alt: "red network",
                    link: "https://twitter.com/selva_escondida",
                    type: "twitter"
                },
            ],
            items: [
                {
                    name: "test1",
                    url: "https://sicssalab.net/test-miraro/mocks/selva-escondida/banner/banner-selva1.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/selva-escondida/banner/mobile/banner-mobile-selva1.webp",
                },
                {
                    name: "test2",
                    url: "https://sicssalab.net/test-miraro/mocks/selva-escondida/banner/banner-selva2.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/selva-escondida/banner/mobile/banner-mobile-selva2.webp",
                },
                {
                    name: "test3",
                    url: "https://sicssalab.net/test-miraro/mocks/selva-escondida/banner/banner-selva3.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/selva-escondida/banner/mobile/banner-mobile-selva3.webp",
                }
            ],
        },
        {
            type: "information-residential-component",
            logo: "https://sicssalab.net/test-miraro/mocks/selva-escondida/logo-selva1.svg",
            logoUrl: 'https://www.selvaescondida.mx/en',
            title: "residencial puerto morelos",
            description: "Private residential development of condos and homes nestled in the lush jungle of the Riviera Maya, just eight minutes from the beaches of the Mexican Caribbean.<br /><br />An idyllic location where national and foreign owners have created an international community centered around a tranquil, relaxed lifestyle.",
            housing: "654",
            location: "Puerto Morelos, Q.Roo",
            status: "Sold Out",
            construction: "2019 - 2022",
            altImage: 'Imagen Experience',
            frontPage: "https://sicssalab.net/test-miraro/mocks/selva-escondida/video-desk.webp",
            frontPageMobile: "https://sicssalab.net/test-miraro/mocks/selva-escondida/video-mobile.webp",
            videoLink: "fBAP2wJ4Y5I"
        },
        {
            type: "gallery-residential-component",
            title: "ABOUT SELVA ESCONDIDA RESIDENTIAL",
            description: "Quality condos and houses, providing owners with a safe investment in the Riviera Maya.",
            items: [
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/selva-escondida/gallery/1.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/selva-escondida/gallery/mobile/1.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/selva-escondida/gallery/2.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/selva-escondida/gallery/mobile/2.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/selva-escondida/gallery/3.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/selva-escondida/gallery/mobile/3.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/selva-escondida/gallery/4.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/selva-escondida/gallery/mobile/4.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/selva-escondida/gallery/5.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/selva-escondida/gallery/mobile/5.webp",
                }
            ]
        },
        {
            type: "location-map-component",
            gmap: '<iframe class="iframe-gmap lazyload" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2002.231605175662!2d-86.89364969385508!3d20.867128334869157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e89ee0241ff1f%3A0x82b5c1f53c67e27b!2sShowroom%20Selva%20Escondida!5e0!3m2!1ses!2smx!4v1674531445616!5m2!1ses!2smx" frameborder="0"></iframe>', //TODO iframe,
            location: {
                title: "LOCATION",
                description: "50, Av. de las Palmas, 77580 Puerto Morelos, Q.R.",
            },
        },
        {
            type: "others-proyects-component",
            title: "Other projects",
            description: "Learn more about our achievements in innovative real estate development.",
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
                {
                    name: "venecia residencial",
                    description: "Ciudad de México",
                    link: pagesContants.landingVeneciaES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/venecia.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/venecia.webp",
                },
            ]
        },
    ]
}

export default apiSelcaEscondidaMock;