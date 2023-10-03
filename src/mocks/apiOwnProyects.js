import logo1 from "../assets/LOGO-MARCAS-PROVEEDORES/brookfield-ametek.jpg";
import logo2 from "../assets/LOGO-MARCAS-PROVEEDORES/velph.jpeg";
import logo3 from "../assets/LOGO-MARCAS-PROVEEDORES/hitachi-inspire-the-next.jpg";
import logo4 from "../assets/LOGO-MARCAS-PROVEEDORES/labindia.jpeg";
import logo5 from "../assets/LOGO-MARCAS-PROVEEDORES/abb.png";
import logo6 from "../assets/LOGO-MARCAS-PROVEEDORES/6optosky.jpeg";
import logo7 from "../assets/LOGO-MARCAS-PROVEEDORES/7sixcan.jpg";
import logo8 from "../assets/LOGO-MARCAS-PROVEEDORES/8astory-tecnica.png";
import logo9 from "../assets/LOGO-MARCAS-PROVEEDORES/9bwb-technologies.jpeg";
import logo10 from "../assets/LOGO-MARCAS-PROVEEDORES/10thomas-scientific.webp";
import logo11 from "../assets/LOGO-MARCAS-PROVEEDORES/11shimadzu.jpeg";
import logo12 from "../assets/LOGO-MARCAS-PROVEEDORES/12aqua-solutions.jpeg";
import pagesContants from "../constants/pagesContants";

const apiOwnProyects = {
    items: [
        {
            type: "header-component",
            title: "<span class='title-bg'>Nuestros<br /><strong>Productos</strong></span>",
            isLanding: false,
            socialNetwork: [
                {
                    alt: "red network",
                    link: "https://www.facebook.com/QuantumAnalytical",
                    type: "facebook"
                },
                {
                    alt: "red network",
                    link: "https://www.linkedin.com/company/quantum-do-analytical",
                    type: "linkedin"
                },
                // {
                //     alt: "red network",
                //     link: "https://www.youtube.com/@sicssalab",
                //     type: "youtube"
                // },
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
            title: "PRODUCTOS",
            description: "<b>Quantum Analytical</b> le ofrece una gran variedad de equipos de instrumentación analítical para satisfacer sus necesidades, entre la diversa gama de productos que manejamos puede encontrar los siguientes:",
            items: [
                {
                    alt: 'logo brookfield ametek',
                    image: logo1,
                    imageMobile: logo1,
                    link: pagesContants.ametek
                },
                {
                    alt: 'logo velph',
                    image: logo2,
                    imageMobile: logo2,
                    link: pagesContants.landingVelp
                },
                {
                    alt: 'logo hitachi',
                    image: logo3,
                    imageMobile: logo3,
                    link: pagesContants.landingHitachi
                },
                {
                    alt: 'logo labindia',
                    image: logo4,
                    imageMobile: logo4,
                    link: pagesContants.landingLabindia
                },
                {
                    alt: 'logo abb',
                    image: logo5,
                    imageMobile: logo5,
                    link: pagesContants.landingABB
                    // hasta qui con links
                },
                {
                    alt: 'logo labindia',
                    image: logo6,
                    imageMobile: logo6,
                    // link: pagesContants.landingNaayES
                },
                {
                    alt: 'logo labindia',
                    image: logo7,
                    imageMobile: logo7,
                    // link: pagesContants.landingNaayES
                },
                {
                    alt: 'logo labindia',
                    image: logo8,
                    imageMobile: logo8,
                    link: pagesContants.landingAstori
                },
                {
                    alt: 'logo labindia',
                    image: logo9,
                    imageMobile: logo9,
                    link: pagesContants.landingBwBTechnologies
                },
                {
                    alt: 'logo labindia',
                    image: logo10,
                    imageMobile: logo10,
                    // link: pagesContants.landingNaayES
                },
                {
                    alt: 'logo labindia',
                    image: logo11,
                    imageMobile: logo11,
                    // link: pagesContants.landingNaayES
                },
                {
                    alt: 'logo labindia',
                    image: logo12,
                    imageMobile: logo12,
                    link: pagesContants.landingAquaSolutions
                },
            ]
        },
    ]
}

export default apiOwnProyects;