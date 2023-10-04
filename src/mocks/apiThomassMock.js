import logo from "../assets/landings/thomass/logo.png";

import main1 from "../assets/landings/thomass/HOME THOMAS.webp"
import main2 from "../assets/landings/thomass/HOME THOMAS.webp"

import pro01_1 from "../assets/landings/thomass/productos/hornos/natural-alta-temperatura/1.jpg";
import pro02_1 from "../assets/landings/thomass/productos/hornos/gravedad-digitales/1.jpg";
import pro03_1 from "../assets/landings/thomass/productos/hornos/convenccion-gravedad/1.jpg";
import pro04_1 from "../assets/landings/thomass/productos/hornos/gravedad-alta-temperatura-dx/1.jpg";
import pro05_1 from "../assets/landings/thomass/productos/hornos/gravedad-dvs/1.jpg";
import pro06_1 from "../assets/landings/thomass/productos/refractometros/atc-0-80/1.jpg";
import pro07_1 from "../assets/landings/thomass/productos/refractometros/pal-ri/1.jpg";
import pro08_1 from "../assets/landings/thomass/productos/agitadores/termomezcladores/1.jpg";
import pro09_1 from "../assets/landings/thomass/productos/agitadores/roto-mini/1.jpg";
import pro10_1 from "../assets/landings/thomass/productos/agitadores/maxq-6000/1.jpg";
import pro11_1 from "../assets/landings/thomass/productos/agitadores/roto-therm/1.jpg";

const apiSelcaEscondidaMock = {
  items: [
    {
      type: "header-component",
      title: "thomas scientific",
      isLanding: true,
      socialNetwork: [
        {
          alt: "red network",
          link: "http://www.facebook.com/pages/Swedesboro-NJ/Thomas-Scientific/214157616300",
          type: "facebook",
        },
        {
          alt: "red network",
          link: "https://twitter.com/ThomasSci",
          type: "twitter",
        },
        {
          alt: "red network",
          link: "https://www.youtube.com/user/ThomasScientific",
          type: "youtube",
        },
        {
          alt: "red network",
          link: "https://www.linkedin.com/company/thomas-scientific",
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
      title: "thomas scientific",
      logoUrl: "https://www.thomassci.com/",
      description: `Durante más de 120 años, Thomas Scientific ha proporcionado lo último en equipos y suministros a la comunidad científica. De acuerdo con la tradición de los fundadores originales, Thomas Scientific ofrece un servicio de atención al cliente individualizado, equipos científicos innovadores y una cartera completa que ofrece una amplia selección de listados de productos a buen precio.`,
      videoLink: "VcCHc4jrMkA",
    },
    {
      type: "gallery-residential-component",
      title: "Descripción",
      description: `Más que un simple distribuidor, nuestros expertos actúan como consultores activos para flujos de trabajo científicos complejos. Ofrecemos una variedad de soluciones de servicios, que incluyen Thomas Inventory Management Solutions (soluciones VMI personalizadas), financiamiento de equipos y más.
      <br><br>
      Thomas Scientific se compromete a ofrecer productos de laboratorio de calidad y al mismo tiempo satisfacer las necesidades únicas de cada cliente individual. Durante más de un siglo, nuestra dedicación a brindar lo mejor en equipos científicos con un servicio personal y eficiente distingue a Thomas de la competencia.`,
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
            name: "Hornos",
            keyname: "hornos",
          },
          categoryProduct: {
            name: "Hornos de convencción natural",
            keyname: "hornos-convencccion-natural",
          },
          name: "Horno de convección natural de alta temperatura",
          description: "Horno de convección natural programable de 13,75 L con control de alta precisión en un rango de temperatura alto de 300 °C a 700 °C. Equipado con controlador de temperatura de alta operabilidad. Puede usarse como horno de temperatura constante, horno de secado y horno eléctrico para incineración, sinterización, etc., ya que la unidad es adecuada para cada una de estas tres funciones. La temperatura, la temperatura medida y la temperatura de prevención de sobrecalentamiento se pueden configurar digitalmente mediante el menú de operación y ?/? llaves. Operación fácil y programable, temperatura fija, parada automática rápida, parada automática y arranque automático.",
          descriptionLong: `Horno de convección natural programable de 13,75 L con control de alta precisión en un rango de temperatura alto de 300 °C a 700 °C. Equipado con controlador de temperatura de alta operabilidad. Puede usarse como horno de temperatura constante, horno de secado y horno eléctrico para incineración, sinterización, etc., ya que la unidad es adecuada para cada una de estas tres funciones. La temperatura, la temperatura medida y la temperatura de prevención de sobrecalentamiento se pueden configurar digitalmente mediante el menú de operación y ?/? llaves. Operación fácil y programable, temperatura fija, parada automática rápida, parada automática y arranque automático.`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro02_1,
          typeProduct: {
            name: "Hornos",
            keyname: "hornos",
          },
          categoryProduct: {
            name: "Hornos de convencción por gravedad",
            keyname: "hornos-convencccion-por-gravedad",
          },
          name: "Horno de convección por gravedad digitales",
          description: "Recientemente se lanzó nuestra serie Digital de nuestros hornos de laboratorio.",
          descriptionLong: `Recientemente se lanzó nuestra serie Digital de nuestros hornos de laboratorio. Estos nuevos modelos ofrecen toda la calidad y confiabilidad que se espera de los productos Quincy Lab, junto con la facilidad, conveniencia y estabilidad mejorada del control digital. El control digital combina las características de los modelos analógicos pero ofrece la facilidad de ajuste de temperatura y la estabilidad de un microprocesador PID completo que mantiene con precisión los ajustes dentro de +/- 1°C, incluso en condiciones ambientales o de suministro de energía variables. Los hornos de las series GCE y AFE tienen rangos de temperatura ambiente de +15°F hasta un máximo de 450°F/232°C y 225°F/107°C. Estos nuevos modelos tienen precios competitivos y ofrecen un valor y confiabilidad excepcionales.
          <br><br>
          <strong>ADVERTENCIA:</strong> Este producto puede exponerlo a sustancias químicas, incluido el ftalato de dietilhexilo (DEHP), que el estado de California reconoce como causante de cáncer, defectos de nacimiento u otros daños reproductivos.
          Para obtener más información, visite www.P65Warnings.ca.gov`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro03_1,
          typeProduct: {
            name: "Hornos",
            keyname: "hornos",
          },
          categoryProduct: {
            name: "Hornos de convencción por gravedad",
            keyname: "hornos-convencccion-por-gravedad",
          },
          name: "Hornos de convección por gravedad",
          description: "Alcanza los 200°C en aproximadamente 30 minutos",
          descriptionLong: `<h5>Alcanza los 200°C en aproximadamente 30 minutos</h5>
          <ul>
          <li>La temperatura está regulada por un termostato bimetálico.</li>
          <li>La luz piloto indica cuando los elementos están encendidos.</li>
          <li>Hay orificios de ventilación debajo del calentador que permiten que el aire ambiente entre por la parte inferior; el aire pasa a través del calentador y sale por dos respiraderos en la parte superior</li>
          <li>La temperatura de la cámara se indica mediante un termómetro que se pasa a través del soporte del termómetro en la parte superior del horno.</li>
          <li>Exterior de doble pared de aluminio, acero esmaltado y aislamiento de lana de vidrio; montado sobre pies de goma</li>
          <li>La puerta tiene bisagra continua, pestillo y pestillo de resorte.</li>
          <li>Se incluyen dos estantes de alambre niquelado extraíbles y un termómetro.</li>
          </ul>
          Los modelos 7187C10 y C15 tienen una capacidad de 0,6 pies cúbicos. pies, 50/60 Hz, 660 vatios. Dimensiones de la cámara (ancho x profundidad x alto): 11 1/4” x 9 3/4” x 9 1/4”; Dimensiones totales (ancho x profundidad x alto): 13 1/2” x 13 1/2” x 16 1/2”.
          <br>
          Los modelos 7187C17 y C18 tienen una capacidad de 1,6 pies cúbicos. pies, 50/60 Hz, 660 vatios. Dimensiones totales (ancho x profundidad x alto): 16 1/2” x 19” x 21 1/4”.
          <br>
          Los modelos 7187C20 y C25 tienen una capacidad de 2,7 pies 3 50/60 Hz, 1500 vatios. Dimensiones de la cámara (ancho x profundidad x alto): 17” x 14” x 18 1/2”; Dimensiones totales (ancho x profundidad x alto): 19 1/2” x 18 3/4 x 22 1/4”.`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro04_1,
          typeProduct: {
            name: "Hornos",
            keyname: "hornos",
          },
          categoryProduct: {
            name: "Hornos de convencción por gravedad",
            keyname: "hornos-convencccion-por-gravedad",
          },
          name: "Horno de convección por gravedad de alta temperatura serie DX",
          description: "Horno de secado estándar de convección natural a temperatura constante con amplias funciones y funcionamiento sencillo. Controlador PID digital, compensación de calibración y mayor seguridad+B8:B225 y funciones de autodiagnóstico. Temperatura de funcionamiento. desde ambiente +5~300°C.",
          descriptionLong: `Horno de secado estándar de convección natural a temperatura constante con amplias funciones y funcionamiento sencillo. Controlador PID digital, compensación de calibración y mayor seguridad+B8:B225 y funciones de autodiagnóstico. Temperatura de funcionamiento. desde ambiente +5~300°C.`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro05_1,
          typeProduct: {
            name: "Hornos",
            keyname: "hornos",
          },
          categoryProduct: {
            name: "Hornos de convencción por gravedad",
            keyname: "hornos-convencccion-por-gravedad",
          },
          name: "Hornos de convección programables por gravedad serie DVS",
          description: "Horno de secado básico de convección natural a temperatura constante, que incorpora funciones de operación programables y características de seguridad y operatividad mejoradas. Temperatura ambiente de funcionamiento +5~260°C.",
          descriptionLong: `Horno de secado básico de convección natural a temperatura constante, que incorpora funciones de operación programables y características de seguridad y operatividad mejoradas. Temperatura ambiente de funcionamiento +5~260°C.`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro06_1,
          typeProduct: {
            name: "Refractómetros",
            keyname: "refractometros",
          },
          categoryProduct: {
            name: "Refractómetros",
            keyname: "refractometros",
          },
          name: "Refractómetro de azúcar Brix con ATC - 0-80%",
          description: "Refractómetro de azúcar Brix para trabajar con líquidos relacionados con el azúcar, como jugos de frutas, refrescos, vino y miel, para ayudar a monitorear y controlar las concentraciones de azúcar en alimentos y bebidas.",
          descriptionLong: `Refractómetro de azúcar Brix para trabajar con líquidos relacionados con el azúcar, como jugos de frutas, refrescos, vino y miel, para ayudar a monitorear y controlar las concentraciones de azúcar en alimentos y bebidas. Un refractómetro mide el grado en que la luz se desvía (refracta) a través de una muestra de líquido. Se utilizan comúnmente para ayudar a identificar o confirmar la identidad de una muestra, evaluar la pureza de una muestra o determinar la concentración de un soluto en una solución. Este refractómetro portátil con compensación automática de temperatura (ATC) está diseñado específicamente para medir brix en frutas, verduras, jugos, miel, vino, etc. Es un dispositivo óptico fácil de usar, liviano y preciso. Este es un instrumento óptico bien hecho y de alta calidad y viene completo con un estuche rígido de transporte y un relleno de bombilla. , destornillador e instrucciones. Con cuidado razonable, su confiabilidad, precisión y rendimiento óptico durarán toda la vida. Ocular de goma suave para una visualización cómoda Cómodo agarre de goma antideslizante La escala de medición proporciona lectura directa Resultados de pruebas precisos Extremadamente fácil de usar y calibrar Durable y construido para durar Enfoque manual ajustable No requiere batería ni fuente de alimentación`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro07_1,
          typeProduct: {
            name: "Refractómetros",
            keyname: "refractometros",
          },
          categoryProduct: {
            name: "Refractómetros",
            keyname: "refractometros",
          },
          name: "Refractómetro Pal-Ri",
          description: "El refractómetro portátil PAL-RI proporciona una visualización continua de las lecturas del índice de refracción (resolución 0,0001) y la temperatura (°C). La unidad pro",
          descriptionLong: `Refractómetro Pal-Ri
          <ul>
          <li>Pantalla de medición continua</li>
          <li>Protección IP65</li>
          <li>Digital</li>
          </ul>
          El refractómetro portátil PAL-RI proporciona una visualización continua de las lecturas del índice de refracción (resolución 0,0001) y la temperatura (°C). La unidad pro
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro08_1,
          typeProduct: {
            name: "Agitadores",
            keyname: "agitadores",
          },
          categoryProduct: {
            name: "Agitadores",
            keyname: "agitadores",
          },
          name: "Termomezcladores",
          description: "Todas las unidades brindan flexibilidad para agitar de suave a vigoroso. La pantalla muestra la temperatura real y establecida para ayudar a garantizar la reproducibilidad. Los bastidores con 24 posiciones numeradas hacen que el procesamiento y transporte de muestras sea rápido y sencillo.",
          descriptionLong: `<h5>Velocidad de mezcla ajustable de 300 a 1400 rpm.</h5>
          <ul>
          <li>Función de mezcla corta para aplicaciones "vórtice"</li>
          <li>Visualización digital de todos los parámetros.</li>
          <li>Rejillas numeradas esterilizables en autoclave y aptas para congelador</li>
          </ul>
          Todas las unidades brindan flexibilidad para agitar de suave a vigoroso. La pantalla muestra la temperatura real y establecida para ayudar a garantizar la reproducibilidad. Los bastidores con 24 posiciones numeradas hacen que el procesamiento y transporte de muestras sea rápido y sencillo.
          <h5>Termomezclador R</h5>
          La unidad es ideal para laboratorios clínicos y de investigación en instalaciones universitarias, farmacéuticas, biotecnológicas y clínicas. Las aplicaciones incluyen biología molecular, pruebas enzimáticas, tecnología celular, pruebas inmunológicas y aplicaciones generales de laboratorio. El rango de temperatura ampliado permite al usuario realizar aplicaciones como ligaciones de ADN. El almacenamiento de programas permite almacenar parámetros para aplicaciones comunes o sucesivas. Se puede programar la mezcla intermitente para aplicaciones tales como reacciones enzimáticas o hibridaciones de ADN. Los bloques intercambiables permiten que la unidad admita 24 tubos con volúmenes de 0,5 ml, 1,5 ml o 2,0 ml. La interfaz RS 232 incorporada permite la documentación de los parámetros operativos.
          <br>
          NOTA: no incluye bloque, se debe comprar por separado
          <ul>
          <li>Rango de temperatura: 13°C por debajo de la temperatura ambiente hasta 99°C</li>
          <li>Tiempos rápidos de calentamiento y enfriamiento</li>
          <li>Almacenamiento de dos programas</li>
          <li>Diez bloques intercambiables</li>
          </ul>
          <h5>Termomezclador</h5>
          La unidad es ideal para laboratorios clínicos y de investigación en instalaciones universitarias, farmacéuticas, biotecnológicas y clínicas. Las aplicaciones incluyen biología molecular, pruebas enzimáticas, tecnología celular, pruebas inmunológicas y aplicaciones generales de laboratorio. La incubación y la mezcla se pueden realizar independientemente una de otra.
          <ul>
          <li>Funciones independientes de calentamiento y mezcla.</li>
          <li>Rango de temperatura: 4°C por encima de la temperatura ambiente hasta 99°C</li>
          <li>Capacidad: 24 tubos de 1,5 ml</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro09_1,
          typeProduct: {
            name: "Agitadores",
            keyname: "agitadores",
          },
          categoryProduct: {
            name: "Agitadores",
            keyname: "agitadores",
          },
          name: "Serie de rotadores Roto-Mini™",
          description: "La serie Roto-Mini de mezcladores giratorios de Benchmark proporciona una amplia gama de capacidades de mezcla.",
          descriptionLong: `La serie Roto-Mini de mezcladores giratorios de Benchmark proporciona una amplia gama de capacidades de mezcla. Adecuados para una variedad de aplicaciones de laboratorio que incluyen resuspensión, unión de proteínas, purificación de ácidos nucleicos, etc., los mezcladores incluyen soportes de tubos intercambiables para acomodar todos los tamaños de tubos comunes, desde 0,5 ml hasta 50 ml. El movimiento se puede ajustar desde una mezcla vertical (de un extremo a otro) hasta una mezcla horizontal (estilo rodante o de hibridación).
          <br><br>
          El rotador Roto-Mini también está disponible en una configuración "Plus", que proporciona las siguientes características adicionales:
          <ul>
          <li>Velocidad variable: 5 a 70 rpm</li>
          <li>Función “Mix”: Rotación en combinación con oscilaciones (mayor mezcla)</li>
          <li>Función “Pausa”: Rotación con “paradas” intermitentes durante la rotación</li>
          <li>Función “Rock”: movimiento de balanceo suave hacia adelante y hacia atrás (balancín)</li>
          </ul>
          Los modelos Plus también ofrecen una plataforma oscilante adicional (4,5 x 3 pulgadas), así como un soporte para tubos/tiras/placas de 96 x 0,2 ml para mezclar recipientes de PCR en el modo "Mix" (oscilante).
          `,
          videoLink: "xunLTSiUJsg",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro10_1,
          typeProduct: {
            name: "Agitadores",
            keyname: "agitadores",
          },
          categoryProduct: {
            name: "Agitadores",
            keyname: "agitadores",
          },
          name: "Agitadores apilables incubados y refrigerados MaxQ 6000",
          description: "Elija entre dos rangos de temperatura para realizar una variedad de estudios de biología molecular, expresión de proteínas o purificación de plásmidos.",
          descriptionLong: `<h5>Agitadores apilables incubados y refrigerados MaxQ 6000</h5>
          <ul>
          <li>Modelos incubados o refrigerados.</li>
          <li>Úselo sobre una mesa de trabajo o apílelo dos en altura</li>
          <li>Dos estantes de altura ajustable para almacenamiento de muestras.</li>
          <li>Temperatura, velocidad y tiempo en pantallas separadas</li>
          <li>Garantías: Cinco años en piezas, un año en mano de obra y de por vida en el mecanismo.</li>
          </ul>
          Elija entre dos rangos de temperatura para realizar una variedad de estudios de biología molecular, expresión de proteínas o purificación de plásmidos. La cámara de acero inoxidable resistente a la corrosión admite una variedad de plataformas universales y dedicadas disponibles de 18” x 18” (46 x 46 cm) para una mayor versatilidad. Una gran ventana de visualización y luz interna permiten la visibilidad de la muestra, minimizando la necesidad de abrir la puerta.
          <br><br>
          Las unidades se pueden apilar en dos alturas sobre el piso para ahorrar espacio. Se suministran con dos estantes de acero inoxidable perforados de altura ajustable para almacenamiento adicional de placas de incubación y otras muestras.
          <br><br>
          Los agitadores cuentan con un accionamiento triple excéntrico que maneja cargas de trabajo pesadas, proporciona una agitación uniforme y permite un funcionamiento continuo las 24 horas incluso a altas velocidades. Los usuarios pueden monitorear y controlar con precisión la temperatura de la cámara en un rango completo con una precisión de ±0,1 °C a 37 °C con un controlador de temperatura PID.
          <br><br>
          Las características incluyen motor CC sin escobillas de estado sólido, control de velocidad variable de 15 a 500 rpm y funcionamiento continuo y cronometrado de 0,1 hora a 999 horas o de 0,1 minuto a 999 minutos. El tiempo mostrado cuenta hacia arriba durante la operación continua y hacia abajo durante las carreras cronometradas.
          <br><br>
          Vea la velocidad, el tiempo de funcionamiento y la temperatura simultáneamente en tres pantallas LED individuales, lo que ayuda a minimizar los errores al establecer las condiciones de funcionamiento. Las señales visuales/audibles le alertan sobre las desviaciones de temperatura. El calor se apaga si la temperatura se desvía ±1°C del punto de ajuste.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro11_1,
          typeProduct: {
            name: "Agitadores",
            keyname: "agitadores",
          },
          categoryProduct: {
            name: "Agitadores",
            keyname: "agitadores",
          },
          name: "Rotadores de tubos incubados Roto-Therm™",
          description: "La serie Roto-Therm de mezcladores rotativos incubados de Benchmark proporciona una amplia gama de capacidades de mezcla.",
          descriptionLong: `La serie Roto-Therm de mezcladores rotativos incubados de Benchmark proporciona una amplia gama de capacidades de mezcla. Adecuados para una variedad de aplicaciones de laboratorio que incluyen resuspensión, unión de proteínas, purificación de ácidos nucleicos, histoquímica, hibridación, etc., los mezcladores incluyen soportes de tubos intercambiables para acomodar todos los tamaños de tubos comunes, desde 0,5 ml hasta 50 ml. El movimiento se puede ajustar desde una mezcla vertical (de un extremo a otro) hasta una mezcla horizontal (estilo rodante o de hibridación).
          <br><br>
          Para aplicaciones que requieren control de temperatura, la serie Roto-Therm se puede programar digitalmente para mantener temperaturas de la cámara de +5 °C a 60 °C ambiente e incluir una función de calibración "en laboratorio" para garantizar un control de temperatura preciso.
          <br><br>
          El Roto-Therm también está disponible en una configuración "Plus", que proporciona las siguientes características adicionales:
          <ul>
          <li>Velocidad variable: 5 a 70 rpm</li>
          <li>Función “Mix”: Rotación en combinación con oscilaciones (mayor mezcla)</li>
          <li>Función “Pausa”: Rotación con “paradas” intermitentes durante la rotación</li>
          <li>Función “Rock”: movimiento de balanceo suave hacia adelante y hacia atrás (balancín)</li>
          </ul>
          El modelo Plus también ofrece una plataforma oscilante adicional (4,5 x 3 pulgadas), así como un soporte para tubos/tiras/placas de 96 x 0,2 ml para mezclar recipientes de PCR en el modo "Mix" (oscilante).
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
      ],
    },  ],
};

export default apiSelcaEscondidaMock;
