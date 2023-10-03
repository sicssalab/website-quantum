import logo from "../assets/LOGO-MARCAS-PROVEEDORES/7sixcan.jpg";

import main1 from "../assets/landings/velp/home/main.jpeg"
import main2 from "../assets/landings/velp/home/main2.jpeg"

import pro01_1 from "../assets/landings/sixcan/productos/sixcan-duo/1.jpg";

const apiSelcaEscondidaMock = {
  items: [
    {
      type: "header-component",
      title: "sixcan",
      isLanding: true,
      socialNetwork: [],
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
      title: "sixcan",
      logoUrl: "",
      description: `SIXCAN es un sistema que mide, procesa y registra parámetros físicos tales como temperatura, humedad, concentración de gases, peso, caudal, presión, niveles, estados lógicos, corriente, tensión, potencia, sensores 4-20 mA, 0-5V, sensores especiales..`,
      videoLink: "IXviYHogHo4",
    },
    {
      type: "product-list",
      title: "Productos",
      items: [
        {
          alt: "alt-logo",
          srcImage: pro01_1,
          typeProduct: {
            name: "Espectrómetro",
            keyname: "espectrometro",
          },
          categoryProduct: {
            name: "Espectrómetro",
            keyname: "espectrometro",
          },
          name: "Sixcan duo",
          description: "Equipo de adquisición de datos inalámbrico. Entradas para 2 sensores de cualquier tipo. Pantalla LCD. Límites de alarmas de maximos y minimos para cada sensor",
          descriptionLong: `Equipo de adquisición de datos inalámbrico. Entradas para 2 sensores de cualquier tipo. Pantalla LCD. Límites de alarmas de maximos y minimos para cada sensor
          <div class="text-center">
            <a target="_blank" href="${require("../assets/landings/sixcan/productos/sixcan-duo/SIXCAN-Gateway1.pdf")}">Ver documentación</a>
          </div>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        }
      ],
    },
  ],
};

export default apiSelcaEscondidaMock;
