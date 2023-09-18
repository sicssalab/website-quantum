import pagesContants from "../constants/pagesContants";

const apiResponseMock = {
    items: [
        {
            type: "header-component",
            title: "DEL MAR BEACHFRONT CONDOS",
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
                    url: "https://sicssalab.net/test-miraro/mocks/delmar/delmar-olas.jpg",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/delmar/delmar-olas.jpg",
                },
            ],
        },
        {
            type: "information-residential-component",
            logo: "https://sicssalab.net/test-miraro/mocks/selva-escondidaii/logo-selva2.svg",
            title: "DEL MAR BEACHFRONT CONDOS",
            soon: "Coming Soon",
            isNewResidential: true,
            description: "A one of a kind residential project comprised of 28 exclusive condos, surrounded by the beauty and tranquility of the Mexican Caribbean. Our luxe beachfront condos feature over ten amenities, including an infinity pool with a breathtaking 360° view of Puerto Morelos beach. Inside, you will find modern, locally sourced finishes that make the one & only Del Mar a masterpiece you'll want to call your own.",
            housing: "28",
            location: "Puerto Morelos, Q.Roo",
            status: "Coming Soon",
            construction: "2023",
            altImage: 'Imagen Experience',
            frontPage: "https://sicssalab.net/test-miraro/mocks/delmar/portadaVideoDesk.jpg",
            frontPageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/portadaVideoMobile.jpg",
            videoLink: "XtptDRbJl-8"
        },
        {
            type: "gallery-residential-component",
            title: "Know Del Mar",
            description: "Exclusive beachfront condos with private beachfront access, less than 25 minutes from Cancun and Playa del Carmen.",
            items: [
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/1.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/1.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/2.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/2.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/3.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/3.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/4.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/4.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/5.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/5.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/6.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/6.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/7.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/7.jpg",
                }
            ]
        },
        {
            type: "contact-map-component",
            gmap: '<iframe class="iframe-gmap lazyload" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2002.231605175662!2d-86.89364969385508!3d20.867128334869157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e89ee0241ff1f%3A0x82b5c1f53c67e27b!2sShowroom%20Selva%20Escondida!5e0!3m2!1ses!2smx!4v1674531445616!5m2!1ses!2smx" frameborder="0"></iframe>', //TODO iframe,
            contact: {
                title: "BE THE FIRST TO KNOW ABOUT THE GREAT LAUNCH OF del mar",
                description: "BE THE FIRST TO KNOW ABOUT THE GREAT LAUNCH OF DEL MAR.",
            },
            hbsptSettings: {
                portalId: '8077024',
                region: 'na1',
                formId: 'c0a981b2-8914-44e0-960c-6195056252d3',
                target: '#hbspt-form-c0a981b2-8914-44e0-960c-6195056252d3', // target is formid
            }
        },
        {
            type: "others-proyects-component",
            title: "OTHER PROJECTS",
            description: "Learn more about the innovation in real estate development that we have achieved.",
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
                    description: "State of Mexico",
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
                {
                    name: "venecia residencial",
                    description: "State of Mexico",
                    link: pagesContants.landingVeneciaES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/venecia.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/venecia.webp",
                },
            ]
        },
    ]
}

export default apiResponseMock;