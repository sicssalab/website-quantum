import pagesContants from "../constants/pagesContants";

const apiKaanaMock = {
    items: [
        {
            type: "header-component",
            title: "Kaana<br />by selva escondida",
            isLanding: true,
            socialNetwork: [
                {
                    alt: "red network",
                    link: "https://www.facebook.com/selvaescondidamx",
                    type: "facebook"
                },
                {
                    alt: "red network",
                    link: "https://www.instagram.com/selvaescondidamx/?hl=es",
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
                    url: "https://sicssalab.net/test-miraro/mocks/kaana/banner/banner-kaana1.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/kaana/banner/mobile/banner-mobile-kaana1.webp",
                },
                {
                    name: "test2",
                    url: "https://sicssalab.net/test-miraro/mocks/kaana/banner/banner-kaana2.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/kaana/banner/mobile/banner-mobile-kaana2.webp",
                },
                {
                    name: "test3",
                    url: "https://sicssalab.net/test-miraro/mocks/kaana/banner/banner-kaana3.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/kaana/banner/mobile/banner-mobile-kaana3.webp",
                }
            ],
        },
        {
            type: "information-residential-component",
            logo: "https://sicssalab.net/test-miraro/mocks/kaana/logo-kaana.svg",
            // logoUrl: 'https://www.selvaescondida.mx',//Italu: En esta no llevar a alguna página web con el logo.
            // title: "residencial puerto morelos",//ya lo trae el logo
            description: "Departamentos con opción a terraza y balcones, con más de 20 amenidades como Alberca, Casa Club, Caseta de Seguridad, Cancha Múltiple. Además un lote comercial a favor de la comodidad de nuestros clientes. <br /><br />Un concepto residencial que se adapta cada vez más a un estilo de bienestar y entretenimiento.",
            housing: "30",
            location: "Puerto Morelos, Q.Roo",
            status: "Vendido",
            construction: "2022",
            altImage: 'Imagen Experience',
            frontPage: "https://sicssalab.net/test-miraro/mocks/kaana/video-desk.webp",
            frontPageMobile: "https://sicssalab.net/test-miraro/mocks/kaana/video-mobile.webp",
            videoLink: "bw-wMQMXUKw"
        },
        {
            type: "gallery-residential-component",
            title: "conoce kaana by selva escondida",
            description: "Una comunidad privada y residencial, con acceso a 20 exclusivas amenidades <br />y a solo 8 minutos de hermosas playas.",
            items: [
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/1.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/mobile/1.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/2.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/mobile/2.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/3.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/mobile/3.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/4.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/mobile/4.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/5.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/mobile/5.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/6.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/mobile/6.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/7.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/kaana/gallery/mobile/7.webp",
                },
            ]
        },
        {
            type: "location-map-component",
            gmap: '<iframe class="iframe-gmap lazyload" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238429.73153326404!2d-87.03779810937803!3d20.974007362455122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e6370b44bafb5%3A0x77c2cea547db579a!2sKaana%20Residencial!5e0!3m2!1ses!2smx!4v1679979066328!5m2!1ses!2smx" frameborder="0"></iframe>', //TODO iframe,
            location: {
                title: "UBICACIÓN",
                description: "Calle Cerrada Las Nubes, Supermanzana 41, Manzana 18, Lote 1-01, 77580 Puerto Morelos, Q.R.",
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

export default apiKaanaMock;