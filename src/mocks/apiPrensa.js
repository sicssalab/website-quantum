// import imgTorontoHispano from "../assets/mocks/nosotros/prensa_svg/TorontoHispano-blanco.png";
// import imgLaVerdad from "../assets/mocks/nosotros/prensa_svg/la-verdad-blanco.svg";
// import imgTelemundo from "../assets/mocks/nosotros/prensa_svg/telemundo-blanco.svg";

const apiHome = {
  //slug: "blog",// existe raiz del llamado a api
  items: [
    {
      type: "header-blog-component",
      title: "<span class='text-center'><span class='d-block'>prensa</span><strong class='d-block'>Ellos hablan de nosotros</strong></span>",
      items: [
        {
          name: "test1",
          url: "https://sicssalab.net/test-miraro/mocks/prensa/ordenador/portada.jpg",
          urlMobile: "https://sicssalab.net/test-miraro/mocks/prensa/mobile/portada-mobile.jpg",
        },
      ],
    },
    {
      type: "press-list",
      "textLink": "Ver más",
      items: [
        {
          alt: "alt-logo",
          logo: "https://sicssalab.net/test-miraro/mocks/press/Forbes-logo.svg",
          title: "un paraíso residencial<br>en Puerto Morelos",
          description:
            "“Sicssa lab se afianza como la desarrolladora inmobiliaria más  consistente e innovadora de la zona”.",
          link: "https://www.forbes.com.mx/selva-escondida-ii-residencia-descanso-riviera-maya-puerto-morelos-inmueble",
          hasExternalLink: true,
        },
        {
          alt: "alt-logo",
          logo: "https://sicssalab.net/test-miraro/mocks/press/Inmobiliare-logo.svg",
          title: "Sicssa lab prepara el lanzamiento de Selva Escondida II en la Riviera Maya",
          description:
            "“A la desarrolladora le sirvió entender las necesidades [...] para ofrecer el día de hoy un producto bien conceptualizado”.",
          link: "https://inmobiliare.com/grupo-miraro-prepara-el-lanzamiento-de-selva-escondida-ii-en-la-riviera-maya",
          hasExternalLink: true,
        },
        {
          alt: "alt-logo",
          logo: "https://sicssalab.net/test-miraro/mocks/press/Losangeles-logo.svg",
          title: "Una comunidad costera en el corazón de la Riviera Maya atrae a estadounidenses",
          description:
            "“Selva Escondida is attracting the attention of buyers from all over the world”.",
          link: "https://www.latimes.com/paid-posts/?prx_t=uZgGAi25LAqfsPA",
          hasExternalLink: true,
        },
        {
          alt: "alt-logo",
          logo: "https://sicssalab.net/test-miraro/mocks/press/Expansion-logo.svg",
          title: "Vivir junto al mar se disfruta más en Selva Escondida",
          description:
            "“El desarrollo resulta un concepto diferente en la zona, pues fue planeado por Sicssa lab para ofrecer lo mejor de un espacio residencial y la calidad de vida de vivir cerca del mar”.",
          link: "https://expansion.mx/inmobiliario/2021/12/13/vivir-junto-al-mar-se-disfruta-mas-en-selva-escondida-miraro",
          hasExternalLink: true,
        },
        {
          alt: "alt-logo",
          logo: "https://sicssalab.net/test-miraro/mocks/press/Vancouver-logo.svg",
          title: "Invertir en propiedades inmobiliarias en la Riviera Maya ofrece una vida asequible en el paraíso",
          description:
            "“Sicssa lab, a land developer in Mexico, with more than 30 years of experience is making the dream of affordable living in paradise a reality”.",
          link: "https://vancouversun.com/sponsored/realestate-sponsored/investing-in-real-estate-in-mexicos-riviera-maya-offers-affordable-living-in-paradise",
          hasExternalLink: true,
        },
        // {
        //   alt: "alt-logo",
        //   logo: imgTelemundo,
        //   description:
        //     "“Una oportunidad de inversión en rentas vacacionales. Es decir, tú alquilas tu propiedad y se paga sola”.",
        //   link: "https://www.youtube.com/watch?v=CMSC4wdjRxg",
        //   hasExternalLink: true,
        // },
        // {
        //   alt: "alt-logo",
        //   logo: imgTorontoHispano,
        //   description:
        //     "“Una compañía inmobiliaria respaldada por más de 30 años de experiencia desarrollando y comercializando conjuntos residenciales en México”.",
        //   link: "https://www.torontohispano.com/publicacion_vip/puedes-invertir-en-bienes-raices-en-la-riviera-maya-por-menos-de-cad-62000-descubre-donde",
        //   hasExternalLink: true,
        // },
        // {
        //   alt: "alt-logo",
        //   logo: imgLaVerdad,
        //   description:
        //     "“Sicssa lab [...] asegura a cada uno de sus clientes comodidad, innovación y una inversión segura en cada uno de sus proyectos”.",
        //   link: "https://laverdadnoticias.com/quintanaroo/Inversion-con-altos-rendimientos-Selva-Escondida-inicia-su-3era-etapa-20210517-0010.html",
        //   hasExternalLink: true,
        // },
      ],
    },
  ],
};

export default apiHome;
