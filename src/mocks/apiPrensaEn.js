// import imgTorontoHispano from "../assets/mocks/nosotros/prensa_svg/TorontoHispano-blanco.png";
// import imgLaVerdad from "../assets/mocks/nosotros/prensa_svg/la-verdad-blanco.svg";
// import imgTelemundo from "../assets/mocks/nosotros/prensa_svg/telemundo-blanco.svg";

const apiHome = {
  //slug: "blog",// existe raiz del llamado a api
  items: [
    {
      type: "header-blog-component",
      title: "<span class='text-center'><span class='d-block'>PRESS</span><strong class='d-block'>LOOK WHO IS TALKING ABOUT US</strong></span>",
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
          title: "A residential paradise<br>in Puerto Morelos",
          description:
            "“Sicssa lab establishes itself as the most consistent and innovative real estate developer in the area”.",
          link: "https://www.forbes.com.mx/selva-escondida-ii-residencia-descanso-riviera-maya-puerto-morelos-inmueble",
          hasExternalLink: true,
        },
        {
          alt: "alt-logo",
          logo: "https://sicssalab.net/test-miraro/mocks/press/Inmobiliare-logo.svg",
          title: "Sicssa lab prepares to launch Selva Escondida II in the Riviera Maya",
          description:
            "“The real estate developer understood the needs [...] by listening and approaching its clients to offer today a well-conceptualized product at an accessible price and in an excellent location”.",
          link: "https://inmobiliare.com/grupo-miraro-prepara-el-lanzamiento-de-selva-escondida-ii-en-la-riviera-maya",
          hasExternalLink: true,
        },
        {
          alt: "alt-logo",
          logo: "https://sicssalab.net/test-miraro/mocks/press/Losangeles-logo.svg",
          title: "Coastal community in the heart of the Riviera Maya attracts Americans.",
          description:
            "“Selva Escondida is attracting the attention of buyers from all over the world”.",
          link: "https://www.latimes.com/paid-posts/?prx_t=uZgGAi25LAqfsPA",
          hasExternalLink: true,
        },
        {
          alt: "alt-logo",
          logo: "https://sicssalab.net/test-miraro/mocks/press/Expansion-logo.svg",
          title: "Seaside living is more enjoyable at Selva Escondida.",
          description:
            "“The development is a different concept in the area,It was planned by Sicssa lab to offer the best residential space and the quality of life living near the sea”.",
          link: "https://expansion.mx/inmobiliario/2021/12/13/vivir-junto-al-mar-se-disfruta-mas-en-selva-escondida-miraro",
          hasExternalLink: true,
        },
        {
          alt: "alt-logo",
          logo: "https://sicssalab.net/test-miraro/mocks/press/Vancouver-logo.svg",
          title: "Investing in real estate in the Riviera Maya offers an affordable life in paradise.",
          description:
            "“Sicssa lab, a real estate developer in Mexico with more than 30 years of experience, is making the dream of living in paradise a reality at an affordable price”.",
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
