import pagesContants from "../constants/pagesContants";
//import logo from "../assets/landings/arizona/brookfield-logo2023.png"
import logo from "../assets/LOGO-MARCAS-PROVEEDORES/brookfield-ametek.jpg";

import producto1_1 from "../assets/landings/arizona/productos/1/computrac-max-4000xl_315x220_l.png";
import producto1_2 from "../assets/landings/arizona/productos/1/computrac-max-4000xl_315x220_r.png";

import producto2_1 from "../assets/landings/arizona/productos/2/computrac-max-5000-xl_l.png";
import producto2_2 from "../assets/landings/arizona/productos/2/computrac-max-5000-xl_r.png";

import producto3_1 from "../assets/landings/arizona/productos/3/computrac-vapor-pro-xl_315x220_left.png";
import producto3_2 from "../assets/landings/arizona/productos/3/computrac-vapor-pro-xl_315x220_right.png";

import producto4_1 from "../assets/landings/arizona/productos/4/vaporproxl-autosampler-lab.png";

const apiSelcaEscondidaMock = {
  items: [
    {
      type: "header-component",
      title: "ARIZONA INSTRUMENT",
      isLanding: true,
      socialNetwork: [
        {
          alt: "red network",
          link: "https://www.facebook.com/AMETEKBrookfield",
          type: "facebook",
        },
        {
          alt: "red network",
          link: "https://www.youtube.com/@AMETEKBrookfield",
          type: "youtube",
        },
        {
          alt: "red network",
          link: "https://twitter.com/BrookfieldEng",
          type: "twitter",
        },
        {
          alt: "red network",
          link: "https://www.linkedin.com/company/ametek-brookfield",
          type: "linkedin",
        },
      ],
      items: [
        {
          name: "test1",
          url: "https://sicssalab.net/test-miraro/mocks/selva-escondidaii/selva1.webp",
          urlMobile:
            "https://sicssalab.net/test-miraro/mocks/selva-escondidaii/banner-selva1.webp",
        },
        {
          name: "test2",
          url: "https://sicssalab.net/test-miraro/mocks/selva-escondidaii/selva2.webp",
        },
        {
          name: "test3",
          url: "https://sicssalab.net/test-miraro/mocks/selva-escondidaii/selva3.webp",
        },
      ],
    },
    {
      type: "information-residential-component",
      logo: logo,
      title: "ARIZONA INSTRUMENT",
      logoUrl: "https://www.brookfieldengineering.com",
      description:
        "Empresa fundada en 1976; dedicada a la fabricación de instrumentos para el análisis de humedad con alta exactitud y precisión, confiable y de fácil uso. A través de los años la compañía ha expandido su línea Computrac y se ha transformado en un líder en el análisis de humedad. Sus productos tienen aplicación en la industria farmacéutica, química, de alimentos, plásticos, pinturas, papel, etc. Entre sus analizadores de humedad se encuentran.",
      videoLink: "Gpi8A5_WS9w",
    },
    {
      type: "product-list",
      title: "Nuestros productos",
      items: [
        {
          alt: "alt-logo",
          srcImage: producto1_2,
          name: "Analizador de humedad y sólidos por pérdida al secarse",
          description:
            "El Computrac MAX® 4000XL proporciona resultados rápidos, fiables y precisos. Esto mejora la capacidad de ajustar o monitorear los procesos, asegurando productos de calidad y minimizando el desperdicio, los requisitos de energía y las horas-hombre. La facilidad de uso y la durabilidad, junto con un servicio y soporte superiores, hacen del Computrac® MAX® 4000XL una opción ideal para entornos de investigación, fabricación y laboratorio.",
          descriptionLong: `El Computrac MAX® 4000XL proporciona resultados rápidos, fiables y precisos. Esto mejora la capacidad de ajustar o monitorear los procesos, asegurando productos de calidad y minimizando el desperdicio, los requisitos de energía y las horas-hombre. La facilidad de uso y la durabilidad, junto con un servicio y soporte superiores, hacen del Computrac® MAX® 4000XL una opción ideal para entornos de investigación, fabricación y laboratorio.
                <br><br>
                <ul>
                    <li>Preciso: Resultados precisos y repetibles impulsados por una balanza de resolución de 100 microgramos.</li>
                    <li>Duradero: Fabricado en los EE.UU. con una carcasa totalmente de acero, el MAX 4000XL fue diseñado para uso pesado.</li>
                    <li>Rápido: El exclusivo sistema de enfriamiento rápido mejora el rendimiento en un 25% con respecto a otras pérdidas rápidas en instrumentos de secado.</li>
                    <li>Versátil: El MAX 4000XL es lo suficientemente robusto como para sobresalir en una amplia gama de aplicaciones, desde alimentos hasta plástico y papel.</li>
                    <li>Soporte de clase mundial: Si encuentra una aplicación desafiante, nuestro equipo de expertos en análisis de humedad está aquí para ayudarlo, de forma gratuita.</li>
                </ul>`,
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: producto2_1,
          name: "Analizador de humedad, sólidos y cenizas",
          description:
            "El analizador de humedad, sólidos y cenizas Computrac MAX 5000XL puede proporcionar lecturas precisas tanto de humedad como de cenizas de una sola muestra, ofreciendo muchas de las mismas características de los analizadores termogravimétricos a una fracción del costo. Con una temperatura máxima de 600 °C y un tamaño de muestra máximo de 100 gramos, el MAX 5000XL tiene la versatilidad para una amplia gama de tareas de prueba de materiales.",
          descriptionLong: `El analizador de humedad, sólidos y cenizas Computrac MAX 5000XL puede proporcionar lecturas precisas tanto de humedad como de cenizas de una sola muestra, ofreciendo muchas de las mismas características de los analizadores termogravimétricos a una fracción del costo. Con una temperatura máxima de 600 °C y un tamaño de muestra máximo de 100 gramos, el MAX 5000XL tiene la versatilidad para una amplia gama de tareas de prueba de materiales.
                <br><br>
                <ul>
                    <li>Versátil: Obtenga lecturas precisas tanto para el contenido de cenizas como para el contenido de humedad de una sola muestra.</li>
                    <li>Rápido: Lecturas de humedad y cenizas en media hora o menos.</li>
                    <li>Sencillo: Operación con un solo botón sin necesidad de pasos intermedios de pesaje o enfriamiento.</li>
                    <li>Duradero: Fabricado en los EE.UU. con una carcasa totalmente de acero, el MAX 5000XL fue diseñado para un uso intensivo.</li>
                    <li>Preciso: Se correlaciona con métodos populares, incluidos ASTM D5630, ASTM D4574, ASTM E1534 y más.</li>
                </ul>`,
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: producto3_2,
          name: "La próxima generación en análisis de humedad libre de químicos",
          description:
            "Capacidad de repetibilidad mejorada, precisión, flexibilidad y una interfaz de usuario avanzada: el Vapor Pro® XL es lo último en tecnología de análisis específico de humedad de Computrac®. El VPXL es ideal para casi cualquier aplicación en la que se utilice la valoración de Karl Fischer. Cuenta con un calentador mejorado y un mayor control sobre las temperaturas de prueba. El VPXL también es compatible con múltiples tamaños de viales de muestra y está equipado con capacidades de prueba de temperatura escalonada para mejorar el desarrollo de métodos.",
          descriptionLong: `Capacidad de repetibilidad mejorada, precisión, flexibilidad y una interfaz de usuario avanzada: el Vapor Pro® XL es lo último en tecnología de análisis específico de humedad de Computrac®. El VPXL es ideal para casi cualquier aplicación en la que se utilice la valoración de Karl Fischer. Cuenta con un calentador mejorado y un mayor control sobre las temperaturas de prueba. El VPXL también es compatible con múltiples tamaños de viales de muestra y está equipado con capacidades de prueba de temperatura escalonada para mejorar el desarrollo de métodos.
                  <br><br>
                  <ul>
                    <li>Específico de la humedad: La tecnología de sensor RH mide el contenido de humedad y solo el contenido de humedad.</li>
                    <li>Preciso: El calentador mejorado permite un mayor control sobre un rango más amplio de temperaturas de prueba.</li>
                    <li>Sensible: Detecte tan solo 10 microgramos (0.00001g) de agua y determine el contenido de humedad tan bajo como 10 ppm.</li>
                    <li>Flexible: Muestre muestras en viales de diferentes tamaños sin exponerlas al aire ambiente.</li>
                    <li>Fácil de usar: La nueva pantalla táctil y la interfaz de usuario intuitiva ayudan a eliminar las posibles fuentes de error del operador.</li>
                </ul>`,
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: producto4_1,
          name: "Análisis automatizado de humedad libre de químicos",
          description:
            "El muestreador automático Vapor Pro XL (VPXL) es lo último en tecnología de análisis específico de humedad que ofrece exactitud, precisión, flexibilidad y automatización para probar hasta 16 muestras con perfiles de prueba individuales. Las capacidades avanzadas de análisis de humedad del muestreador automático VPXL lo convierten en una alternativa libre de químicos a la valoración Karl Fischer. Su tamaño compacto y características mejoradas hacen que el muestreador automático VPXL sea ideal para casi cualquier aplicación donde se necesite automatización de pruebas y un mayor rendimiento.",
          descriptionLong: `El muestreador automático Vapor Pro XL (VPXL) es lo último en tecnología de análisis específico de humedad que ofrece exactitud, precisión, flexibilidad y automatización para probar hasta 16 muestras con perfiles de prueba individuales. Las capacidades avanzadas de análisis de humedad del muestreador automático VPXL lo convierten en una alternativa libre de químicos a la valoración Karl Fischer. Su tamaño compacto y características mejoradas hacen que el muestreador automático VPXL sea ideal para casi cualquier aplicación donde se necesite automatización de pruebas y un mayor rendimiento.
                  <br><br>
                  <h5>FUNCIONES:</h5> 
Cero reactivos químicos: El Vapor Pro® XL ofrece análisis específicos de humedad que se correlacionan bien con Karl Fischer sin la molestia o el gasto de reactivos químicos peligrosos, cristalería costosa o mantenimiento que consume mucho tiempo.
Versátil: El muestreador automático VPXL es ideal para casi cualquier aplicación en la que se utilice la valoración Karl Fischer. Su capacidad para individualizar los perfiles de prueba de muestra lo hace perfecto para todas las industrias, desde plásticos y productos derivados del petróleo hasta productos farmacéuticos y químicos. La temperatura máxima de prueba se puede ajustar a 300 ° C. También permite un mejor control sobre las temperaturas de prueba en todo el rango del instrumento.
Automatización: El muestreador automático VPXL proporciona la capacidad de probar rápida y automáticamente hasta 16 muestras, lo que aumenta drásticamente el rendimiento en un
instrumento compacto.<br><br>
Prueba de temperatura escalonada: El muestreador automático VPXL ofrece capacidades de prueba de temperatura escalonadas que hacen que el desarrollo de métodos sea más fácil que nunca.
Criterios finales flexibles: Los criterios finales ajustables por el usuario optimizan los resultados de las pruebas y el rendimiento para cualquier aplicación única.
Almacenamiento de datos: El muestreador automático VPXL almacena hasta 250 programas de prueba y conserva los 1000 resultados de prueba anteriores y 100 gráficos de prueba. Los usuarios pueden ver y seleccionar resultados de pruebas anteriores para análisis estadísticos y probar varias muestras con facilidad.
`,
          sendPriceText: "Ver más información",
        },
      ],
    },
  ],
};

export default apiSelcaEscondidaMock;
