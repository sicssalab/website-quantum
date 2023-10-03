import logo from "../assets/LOGO-MARCAS-PROVEEDORES/hitachi-inspire-the-next.jpg";

import main1 from "../assets/landings/velp/home/main.jpeg"
import main2 from "../assets/landings/velp/home/main2.jpeg"

import pro01_1 from "../assets/landings/hitachi/productos/hlpc-chromaster-3/1.avif";

const apiSelcaEscondidaMock = {
  items: [
    {
      type: "header-component",
      title: "HITACHI",
      isLanding: true,
      socialNetwork: [
        {
          alt: "red network",
          link: "https://twitter.com/hitachi_hta?lang=en",
          type: "twitter",
        },
        {
          alt: "red network",
          link: "https://www.youtube.com/@HitachiHTA",
          type: "youtube",
        },
        {
          alt: "red network",
          link: "https://www.linkedin.com/company/hitachi-high-tech-america-inc",
          type: "linkedin",
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
      title: "Hitachi",
      logoUrl: "",
      description:
        "Establecida en 2014, Hitachi High-Tech Mexico, S.A. de C.V. es una empresa de soluciones industriales que comercializa una amplia serie de partes automotrices, incluidos diferentes tipos de resinas, productos de metal forjado y sensores de presión del aceite/interruptor y promueve la colaboración con empresas extranjeras y locales a fin de expandir los negocios globales.",
      videoLink: "FrDmJgVruB8",
    },
    {
      type: "gallery-residential-component",
      title: "Innovación y dinamismo",
      description:
        "Debemos nuestro éxito a una rica herencia de ideas, grandes inversiones en I+D y desarrollo tecnológico destinadas a maximizar la productividad y conectividad del producto y reducir el tiempo de comercialización.<br><br>VELP es un pionero de la tecnología de laboratorio inteligente (Smart Lab). Nuestros instrumentos analíticos y equipos de laboratorio ayudan a acelerar el progreso científico todos los días al ofrecer a los científicos de todo el mundo la capacidad de monitorear y controlar la tecnología VELP a través de una plataforma en la nube accesible desde cualquier dispositivo, en cualquier lugar y en cualquier momento.",
      items: [],
    },
    {
      type: "product-list",
      title: "Productos",
      items: [
        {
          alt: "alt-logo",
          srcImage: pro01_1,
          typeProduct: {
            name: "Cromatógrafos liquidos",
            keyname: "cromatografos-liquidos",
          },
          categoryProduct: {
            name: "Cromatógrafos liquidos",
            keyname: "cromatografos-liquidos",
          },
          name: "Controlador HPLC Chromaster para el software Waters® Empower™3",
          description: "Controladores (controladores) para Chromaster, el cromatógrafo líquido de alta velocidad de Hitachi. El Chromaster se puede utilizar con el software de estación de datos cromatográficos Waters® Empower™3. Los controladores utilizan la interfaz de control de dispositivos de software de uso general Empower™3 OIP*¹. El sistema de cromatografía líquida de Hitachi está controlado por Empower™3 y Empower™3 recopila los datos del sistema de cromatografía líquida de Hitachi.",
          descriptionLong: `Controladores (controladores) para Chromaster, el cromatógrafo líquido de alta velocidad de Hitachi. El Chromaster se puede utilizar con el software de estación de datos cromatográficos Waters® Empower™3.
          Los controladores utilizan la interfaz de control de dispositivos de software de uso general Empower™3 OIP*¹. El sistema de cromatografía líquida de Hitachi está controlado por Empower™3 y Empower™3 recopila los datos del sistema de cromatografía líquida de Hitachi.
          <br>
          *Chromaster y ChromasterUltra Rs son marcas comerciales registradas de Hitachi High-Tech Corporation en Japón y otros países.
          <h5>Características</h5>
          <h4>Empower™3 controla directamente el sistema de cromatografía líquida de Hitachi</h4>
          Las condiciones del módulo Chromaster/ChromasterUltra Rs se pueden configurar en Empower™3.
          <br>
          Las configuraciones de condición del dispositivo se administran en Empower™3 como método del dispositivo. La GUI fácil de usar facilita el establecimiento de condiciones.
          <div class="text-center">
            <img src="${pro01_1}" class="img-thumbnail" alt="imagen">
          </div>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro01_1,
          typeProduct: {
            name: "Cromatógrafos liquidos",
            keyname: "cromatografos-liquidos",
          },
          categoryProduct: {
            name: "Cromatógrafos liquidos",
            keyname: "cromatografos-liquidos",
          },
          name: "",
          description: "",
          descriptionLong: `
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
      ],
    },
  ],
};

export default apiSelcaEscondidaMock;
