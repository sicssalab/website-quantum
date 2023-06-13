import pagesContants from "../constants/pagesContants";

const apiPageMock = {
    items: [
        {
            type: "header-component",
            title: "Evia interlomas",
            isLanding: true,
            socialNetwork: [
                {
                    alt: "red network",
                    link: "https://www.facebook.com/eviainterlomasmx",
                    type: "facebook"
                },
                {
                    alt: "red network",
                    link: "https://www.instagram.com/evia.interlomas",
                    type: "instagram"
                },
                {
                    alt: "red network",
                    link: "https://www.youtube.com/@grupomiraro",
                    type: "youtube"
                },
            ],
            items: [
                {
                    name: "test1",
                    url: "https://sicssalab.net/test-miraro/mocks/evia/Ordenador/banner_principal/miraro-home1.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/evia/Mobile/banner_principal/portada-proyectos.webp",
                },
                {
                    name: "test2",
                    url: "https://sicssalab.net/test-miraro/mocks/evia/Ordenador/banner_principal/2-portada.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/evia/Mobile/banner_principal/banner2-mobile.webp",
                },
                {
                    name: "test3",
                    url: "https://sicssalab.net/test-miraro/mocks/evia/Ordenador/banner_principal/3-ortada.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/evia/Mobile/banner_principal/banner3-mobile.webp",
                }
            ],
        },
        {
            type: "information-residential-component",
            logo: "https://sicssalab.net/test-miraro/mocks/evia/logo-evia.svg",
            //title: "residencial puerto morelos",
            description: "<span class='font-16'>Un concepto único en Interlomas, compuesto por 3 torres de exclusivos departamentos, amenidades de lujo, accesos controlados y seguridad privada. <br /><br />Situado en la mejor privada de Hacienda de las Palmas.</span>",
            //description: "<span class='font-16'>Un concepto único en Interlomas, compuesto por 3 torres de<br/>exclusivos departamentos, amenidades de lujo, accesos<br/>controlados y seguridad privada. <br /><br />Situado en la mejor privada de Hacienda de las Palmas.</span>",
            housing: "35",
            location: "Estado de México,<br />México",
            status: "Próximamente",
            construction: "Próximamente",
            altImage: 'Imagen Experience',
            frontPage: "https://sicssalab.net/test-miraro/mocks/evia/Ordenador/video_cover/video-cover.webp",
            frontPageMobile: "https://sicssalab.net/test-miraro/mocks/evia/Mobile/video_cover/AnyConv.com__video-mobile.webp",
            videoLink: "JuvyfarNrDQ"
        },
        {
            type: "gallery-residential-component",
            title: "Conoce evia interlomas",
            description: "Un desarrollo inmobiliario en EDOMEX diseñado con espacios cómodos y de<br />recreación y convivencia familiar.",
            floatBoxX: "left",
            floatBoxY: "bottom",
            items: [
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/evia/Ordenador/galeria/1.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/evia/Mobile/galeria/1.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/evia/Ordenador/galeria/2.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/evia/Mobile/galeria/2.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/evia/Ordenador/galeria/3.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/evia/Mobile/galeria/3.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/evia/Ordenador/galeria/4.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/evia/Mobile/galeria/4.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/evia/Ordenador/galeria/5.webp",
                    //imageMobile: ImgGM5,
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/evia/Ordenador/galeria/6.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/evia/Mobile/galeria/6.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/evia/Ordenador/galeria/7.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/evia/Mobile/galeria/7.jpg",
                },
            ]
        },
        {
            type: "contact-map-component",
            gmap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.7866186564689!2d-99.28500390561746!3d19.39661768602442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d207defc08c55f%3A0x8725fd3236336fc5!2sEvia%20Interlomas!5e0!3m2!1ses-419!2smx!4v1686349601404!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            contact: {
                title: "Invierte en este destino y vive en Interlomas",
                description: "Déjanos tus datos y nos pondremos en contacto contigo.",
            },
            hbsptSettings: {
                portalId: '8077024',
                region: 'na1',
                formId: '4ec90b80-21f0-41ed-b466-37c14eb0d688',
                target: '#hbspt-form-4ec90b80-21f0-41ed-b466-37c14eb0d688', // target is formid
            }
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
                    description: "Ciudad de México",
                    link: pagesContants.landingVeneciaES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/venecia.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/venecia.webp",
                },
            ]
        },
    ]
}

export default apiPageMock;