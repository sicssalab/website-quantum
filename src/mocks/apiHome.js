import pagesContants from "../constants/pagesContants";
import main1 from "../assets/home1.jpeg"
import main2 from "../assets/home2.jpeg"

const apiHome = {
    items: [
        {
            type: "header-component",
            title: "Analytycal Solutions <br /><strong>for Quality Assurance</strong>",
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
                    url: main1,
                },
                {
                    name: "main 2",
                    url: main2,
                    urlMobile:main1,
                }
            ],
        },
        {
            type: "proyects-component",
            title: "<strong>quantum analytical</strong>",
            description: "Quantum Analytical es una empresa 100% nacional teniendo como principales objetivos la industria farmacéutica, química, petroquímica y de alimentos; así como universidades e institutos de investigación. Para lograrlo contamos con la representación exclusiva de diversas marcas de reconocimiento mundial así como con el personal técnico especializado y capacitado para brindar asesoría, soporte técnico y el mantenimiento preventivo y correctivo necesario para garantizar el buen funcionamiento de los instrumentos de las marcas que representamos. Todos nuestros esfuerzos y conocimientos están enfocados en conjuntar lo anterior y así lograr cerrar al 100% el ciclo de un servicio integral.",
            linkMore: pagesContants.proyectsES,
            textMore: "NUESTROS PROVEEDORES",
            items: []
        },
        {
            type: "experience-component",
            title: "<strong>SERVICIOS</strong>",
            description: `Quantum Analytical ofrece servicio y soporte técnico especializado, como:
            <br><br>
            <ul class="text-start">
            <li>Desarrollo de IQ, OQ y PQ</li>
            <li>Instalación y puesta en marcha</li>
            <li>Mantenimiento correctivo y preventivo (contratos anuales disponibles)</li>
            <li>Refacciones Originales, consumibles y equipo de demostración</li>
            <li>Soporte y asesoría técnica que garantiza el buen funcionamiento de los instrumentos</li>
            </ul>
            No dude en contactarse con nosotros para recibir asistencia e información sobre nuestros servicios.`,
            // videoType: "youtube",
            // altImage:'Imagen Experience',
            // frontPage: "https://sicssalab.net/test-miraro/mocks/home/video-miraro-webp.webp",
            // frontPageMobile: "https://sicssalab.net/test-miraro/mocks/home/video-miraro.webp",
            // videoLink: "I69BKXFRm4U"
        },
    ]
}

export default apiHome;