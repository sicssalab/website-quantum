import logo from "../assets/LOGO-MARCAS-PROVEEDORES/abb.png";

import main1 from "../assets/landings/abb/HOME ABB.jpg"
import main2 from "../assets/landings/abb/HOMA ABB 2.jpg"

import pro01_1 from "../assets/landings/abb/productos/ft-ir-mb3000/1.jpg";
import pro02_1 from "../assets/landings/abb/productos/mb3000-ph/1.jpg";
import pro03_1 from "../assets/landings/abb/productos/mb3600/1.jpg";
import pro04_1 from "../assets/landings/abb/productos/mb3600-ph/1.jpg";

const apiSelcaEscondidaMock = {
  items: [
    {
      type: "header-component",
      title: "ABB",
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
      title: "ABB",
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
        {
          alt: "alt-logo",
          srcImage: pro01_1,
          typeProduct: {
            name: "Analizador",
            keyname: "analizador",
          },
          categoryProduct: {
            name: "Analizador",
            keyname: "analizador",
          },
          name: "Espectrómetro de laboratorio FT-IR versátil MB3000",
          description: "El ABB MB3000 es el analizador de laboratorio FT-IR más confiable del mercado con el menor costo de propiedad. Combinado con el intuitivo software FTIR Horizon MBTM, el MB3000 facilitará la adquisición, el procesamiento y el análisis de muestras.",
          descriptionLong: `<h5>Primer analizador FT-IR sin mantenimiento</h5>
          Fácil de usar, el MB3000 proporciona resultados de análisis constantes durante muchos años. Ofrece confiabilidad y resultados constantes para abordar las inquietudes de los usuarios del laboratorio. El MB3000 es el resultado de más de 40 años de experiencia en las industrias aeroespacial, académica, química, farmacéutica y petroquímica. Es el sucesor del espectrómetro FTLA2000, también desarrollado por el Dr. Buijs y comercializado por Bomem inc. desde 1985.
          <br><br>
          <h5>La huella más pequeña.</h5>
          Con un diseño vertical que ahorra espacio, el MB3000 optimiza el espacio de trabajo del laboratorio y facilita el acceso a los componentes internos.
          <br><br>
          <h5>Sin consumibles</h5>
          El MB3000 contiene componentes fijos que no se desgastan con el uso, lo que significa que no hay componentes que reemplazar o ajustar. Con el MB3000, el LÁSER HeNe se sustituye por un láser de estado sólido.
          Todas las ópticas son no higroscópicas. No se requiere purga para proteger la óptica.
          <br><br>
          <h5>Fuente de larga duración.</h5>
          Para maximizar la confiabilidad, la fuente se opera de manera que proporcione una vida útil esperada de 10 años.
          <br><br>
          <h5>Versatilidad de un vistazo</h5>
El compartimento de muestras abierto para zonas áridas del MB3000 satisface todas las necesidades del laboratorio analítico moderno. Puede contener una amplia variedad de accesorios ABB o de terceros fácilmente intercambiables que no requieren alineación. El instrumento también se puede purgar si es necesario.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro02_1,
          typeProduct: {
            name: "Analizador",
            keyname: "analizador",
          },
          categoryProduct: {
            name: "Analizador",
            keyname: "analizador",
          },
          name: "Analizador FT-IR para la industria farmacéutica",
          description: "El MB3000-PH está diseñado para laboratorios de control de calidad, formulación, investigación y desarrollo. Es extremadamente versátil y puede utilizar una amplia variedad de accesorios ABB o de terceros fácilmente intercambiables que están fijados en su lugar y no requieren alineación. (MIRacle ATR, ATR horizontal, DRIFT, celdas de gas, microscopio)",
          descriptionLong: `El MB3000-PH está diseñado para laboratorios de control de calidad, formulación, investigación y desarrollo. Es extremadamente versátil y puede utilizar una amplia variedad de accesorios ABB o de terceros fácilmente intercambiables que están fijados en su lugar y no requieren alineación. (MIRacle ATR, ATR horizontal, DRIFT, celdas de gas, microscopio)
          <br><br>
          El MB3000-PH combina todos los atributos de un instrumento de grado de investigación, en particular una excelente relación señal-ruido, con los beneficios de un analizador de laboratorio de costo mínimo de propiedad. Su nuevo diseño y metrología permiten al usuario operar el instrumento sin ningún mantenimiento programado por un período de 10 años.
          <br><br>
          El MB3000-PH está equipado con el nuevo software intuitivo Horizon MB FT-IR para la adquisición, procesamiento y análisis de espectros. El módulo complementario Horizon MB Library también forma parte del paquete y permite búsquedas eficientes en múltiples bibliotecas.
          <br><br>
          La solución también incluye el módulo adicional Horizon Security para permitir operaciones en un modo compatible con 21 CFR Parte 11. Este espectrómetro de alto rendimiento viene con un nuevo conjunto de documentos IQ-OQ y está respaldado por una garantía de 3 años.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro03_1,
          typeProduct: {
            name: "Analizador",
            keyname: "analizador",
          },
          categoryProduct: {
            name: "Analizador",
            keyname: "analizador",
          },
          name: "Analizador FT-NIR de alto rendimiento diseñado para QA/QC MB3600",
          description: "El MB3600 es el analizador FT-NIR más confiable del mercado, diseñado específicamente para análisis de control de calidad y desarrollo de métodos. Con su diseño vertical que ahorra espacio, el MB3600 optimiza el espacio de trabajo del laboratorio y facilita el acceso a los componentes internos.",
          descriptionLong: `El MB3600 es el analizador FT-NIR más confiable del mercado, diseñado específicamente para análisis de control de calidad y desarrollo de métodos. Con su diseño vertical que ahorra espacio, el MB3600 optimiza el espacio de trabajo del laboratorio y facilita el acceso a los componentes internos.
          <br><br>
          <h5>¡Primer analizador FT-NIR sin mantenimiento!</h5>
          El analizador de laboratorio MB3600 FT-NIR es un espectrómetro altamente eficaz para el desarrollo e implementación de procedimientos de análisis cuantitativos precisos para:
          <ul>
          <li>Desarrollo de métodos de monitoreo de procesos.</li>
          <li>Control de calidad del producto final</li>
          <li>Monitoreo del proceso en línea</li>
          </ul>
          El analizador MB3600 se puede utilizar para realizar análisis de líquidos, polvos/gránulos y geles.
          <br><br>
          <h5>Sin consumibles.</h5>
          El MB3600 contiene componentes fijos que no se desgastan con el uso, lo que significa que no hay componentes que reemplazar o ajustar. Con el MB3600, el LÁSER HeNe se sustituye por un láser de estado sólido. Todas las ópticas son no higroscópicas. No se requiere purga para proteger la óptica.
          <br><br>
          <h5>Fuente de larga duración.</h5>
          Para maximizar la confiabilidad, la fuente se opera de manera que proporcione una vida útil esperada de 10 años.
          <br><br>
          <h5>Versatilidad de un vistazo</h5>
          El compartimento de muestras abierto para zonas áridas del MB3600 satisface todas las necesidades del laboratorio analítico moderno. Puede contener una amplia variedad de accesorios ABB o de terceros fácilmente intercambiables que no requieren alineación. El instrumento también se puede purgar si es necesario.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro04_1,
          typeProduct: {
            name: "Analizador",
            keyname: "analizador",
          },
          categoryProduct: {
            name: "Analizador",
            keyname: "analizador",
          },
          name: "Analizador FT-NIR para la industria farmacéutica",
          description: "MB3600-PH es un espectrómetro FT-NIR para las industrias farmacéutica y de ciencias biológicas diseñado para control de calidad, investigación y desarrollo y aplicaciones PAT en línea.",
          descriptionLong: `MB3600-PH es un espectrómetro FT-NIR para las industrias farmacéutica y de ciencias biológicas diseñado para control de calidad, investigación y desarrollo y aplicaciones PAT en línea .
          <br><br>
          Desde 1997, ABB ha suministrado a las industrias farmacéutica y de ciencias biológicas instrumentos analíticos de alto rendimiento que tienen una reputación establecida por su rendimiento y confiabilidad.
          <br><br>
          Esta herencia ahora continúa con el MB3600-PH, un versátil analizador de sobremesa de infrarrojo cercano por transformada de Fourier (FT-NIR) que puede equiparse con una variedad de accesorios para realizar mediciones precisas en una amplia gama de aplicaciones en los sectores farmacéutico y de ciencias biológicas. industrias. Es la solución óptima para aplicaciones como:
          <ul>
          <li>Análisis de calidad y control de calidad de laboratorio</li>
          <li>Identificación y calificación de materias primas.</li>
          <li>Investigación y desarrollo</li>
          <li>Desarrollo del método NIR</li>
          <li>Mediciones PAT en línea</li>
          <li></li>
          </ul>
          El analizador MB3600-PH se puede utilizar como instrumento de sobremesa (QA/QC o laboratorio de investigación), pero también como unidad móvil sobre un carro móvil de acero inoxidable, con opción de suministro de energía ininterrumpida, para aplicaciones en el almacén o dispensario (materia prima). identificación y calificación) y para aplicaciones PAT en línea.
          <br><br>
          El MB3600-PH prácticamente no requiere mantenimiento y cuenta con una interfaz de software fácil de usar que permite operaciones en un modo compatible con 21 CFR Parte 11. El MB3600-PH representa la combinación definitiva de rendimiento, confiabilidad y facilidad de uso.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
      ],
    },
  ],
};

export default apiSelcaEscondidaMock;
