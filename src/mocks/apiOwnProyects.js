
//import pagesContants from "../constants/pagesContants";

const apiOwnProyects = {
    items: [
        {
            type: "header-component",
            title: "<span class='title-bg'>Nuestros<br /><strong>Proyectos</strong></span>",
            isLanding: false,
            socialNetwork: [
                {
                    alt: "red network",
                    link: "https://www.facebook.com/sicssalab",
                    type: "facebook"
                },
                {
                    alt: "red network",
                    link: "https://www.instagram.com/sicssalab/",
                    type: "instagram"
                },
                {
                    alt: "red network",
                    link: "https://www.linkedin.com/company/sicssa-lab",
                    type: "linkedin"
                },
                {
                    alt: "red network",
                    link: "https://www.youtube.com/@sicssalab",
                    type: "youtube"
                },
            ],
            items: [
                {
                    name: "main",
                    url: "/src/assets/sicssa/servicios/main/main.jpg",
                    urlMobile:"/src/assets/sicssa/servicios/main/main-mobile.jpg",
                }
            ],
        },
        {
            type: "own-proyects-component",
            title: "CASOS DE EXITO",
            description: "Comprometidos por ser uno de los principales desarrolladores de aplicaciones móviles y software en México, nos esforzamos por superar las expectativas de nuestros clientes en cada proyecto.",
            items: [
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/1.png",
                    imageMobile: "/src/assets/sicssa/servicios/1.png",
                    // title: 'SELVA ESCONDIDA II',
                    // address: 'Puerto Morelos, Quintana Roo, México',
                    // link: pagesContants.landingSelvaEscondidaIIES
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/2.png",
                    imageMobile: "/src/assets/sicssa/servicios/2.png",
                    // title: 'SELVA ESCONDIDA RESIDENCIAL',
                    // address: 'Puerto Morelos, Quintana Roo, México',
                    // link: pagesContants.landingSelvaEscondidaES
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/3.png",
                    imageMobile: "/src/assets/sicssa/servicios/3.png",
                    // title: 'EVIA INTERLOMAS',
                    // address: 'Huixquilucan, Estado de México, México',
                    // link: pagesContants.landingEviaES
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/4.png",
                    imageMobile: "/src/assets/sicssa/servicios/4.png",
                    // title: 'NAAY BY SELVA ESCONDIDA',
                    // address: 'Puerto Morelos, Quintana Roo, México',
                    // link: pagesContants.landingNaayES
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/5.png",
                    imageMobile: "/src/assets/sicssa/servicios/5.png",
                    // title: 'PALMAS BY SELVA ESCONDIDA',
                    // address: 'Puerto Morelos, Quintana Roo, México',
                    // link: pagesContants.landingPalmasES
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/6.png",
                    imageMobile: "/src/assets/sicssa/servicios/6.png",
                    // title: 'LUUM BY SELVA ESCONDIDA',
                    // address: 'Puerto Morelos, Quintana Roo, México',
                    // link: pagesContants.landingLuumES
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/7.png",
                    imageMobile: "/src/assets/sicssa/servicios/7.png",
                    // title: 'KAANA BY SELVA ESCONDIDA',
                    // address: 'Puerto Morelos, Quintana Roo, México',
                    // link: pagesContants.landingKaanaES
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/8.png",
                    imageMobile: "/src/assets/sicssa/servicios/8.png",
                    //title: 'VENECIA RESIDENCIAL',
                    // address: 'Azcapotzalco, Ciudad de México, México',
                    // link: pagesContants.landingVeneciaES
                },
            ]
        },
    ]
}

export default apiOwnProyects;