import logo from "../assets/LOGO-MARCAS-PROVEEDORES/optosky.jpeg";

import main1 from "../assets/landings/velp/home/main.jpeg"
import main2 from "../assets/landings/velp/home/main2.jpeg"

//import pro01_1 from "../assets/landings/abb/productos/ft-ir-mb3000/1.jpg";

const apiSelcaEscondidaMock = {
  items: [
    {
      type: "header-component",
      title: "optosky",
      isLanding: true,
      socialNetwork: [
        {
          alt: "red network",
          link: "https://www.facebook.com/ABB",
          type: "facebook",
        },
        {
          alt: "red network",
          link: "https://www.linkedin.com/company/277579",
          type: "linkedin",
        },
        {
          alt: "red network",
          link: "https://twitter.com/ABBgroupnews",
          type: "twitter",
        },
      ],
      items: [
        {
          name: "test1",
          url: main1,
          // urlMobile:
          //   "https://sicssalab.net/test-miraro/mocks/selva-escondidaii/banner-selva1.webp",
        },
        {
          name: "test2",
          url: main2,
        },
      ],
    },
    {
      type: "information-residential-component",
      logo: logo,
      title: "optosky",
      logoUrl: "",
      description: `Las capacidades de ABB abarcan una de las carteras más grandes del mundo de analizadores FT-IR/FT-NIR de laboratorio, en línea y de proceso. 
      <br><br>
      Fundada en 1973, ABB Analytical Measurements (anteriormente Bomem Inc) diseña, fabrica y comercializa espectrómetros FT-IR/FT-NIR asequibles y de alto rendimiento, así como soluciones analíticas llave en mano para petróleo, productos químicos, ciencias biológicas, semiconductores, académicos, metalurgia. Industrias OEM y espectrorradiómetros para el mercado de Teledetección/Aeroespacial.`,
      videoLink: "",
    },
    {
      type: "product-list",
      title: "Productos",
      items: [
        // {
        //   alt: "alt-logo",
        //   srcImage: pro01_1,
        //   typeProduct: {
        //     name: "Analizador",
        //     keyname: "analizador",
        //   },
        //   categoryProduct: {
        //     name: "Analizador",
        //     keyname: "analizador",
        //   },
        //   name: "",
        //   description: "",
        //   descriptionLong: ``,
        //   videoLink: "",
        //   sendPriceText: "Ver más información",
        // },
      ],
    },
  ],
};

export default apiSelcaEscondidaMock;
