import logo from "../assets/LOGO-MARCAS-PROVEEDORES/astory-tecnica.png";

import main1 from "../assets/landings/astori/HOME ASTORI.jpg"
import main2 from "../assets/landings/astori/HOME ASTORI 2.jpg"

import pro01_1 from "../assets/landings/astori/productos/cryospecial/1.jpg";
import pro02_1 from "../assets/landings/astori/productos/cryotouch-1/1.jpeg";
import pro03_1 from "../assets/landings/astori/productos/cryotouch-20/1.jpeg";
import pro04_1 from "../assets/landings/astori/productos/cryotouch-40/1.jpeg";
import pro05_1 from "../assets/landings/astori/productos/speedy-lab/1.jpg";
import pro06_1 from "../assets/landings/astori/productos/centrifuga-astor-8-digit/1.jpg";
import pro07_1 from "../assets/landings/astori/productos/nucleo-counter-scc-100/1.jpg";

const apiSelcaEscondidaMock = {
  items: [
    {
      type: "header-component",
      title: "astory",
      isLanding: true,
      socialNetwork: [
        {
          alt: "red network",
          link: "https://www.facebook.com/AstoriTecnica",
          type: "facebook",
        },
        {
          alt: "red network",
          link: "https://youtube.com/channel/UCifpqvMP4w_U0qcL4x8mruA",
          type: "youtube",
        },
        {
          alt: "red network",
          link: "http://www.linkedin.com/company/astori-tecnica",
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
      title: "astory",
      logoUrl: "",
      description: `ASTORI TECNICA fue fundada por el Sr. Oscar Astori el 1 de marzo de 1959 en Brescia.
      <br><br>
      Durante los años, nuestra empresa se ha hecho cada vez mejor, abriendo nuevas secciones de producción y asistencia técnica, nombrando más colaboradores expertos y invertiendo en tecnologías innovadoras y competitivas, además del conseguimiento de estándares de calidad más elevados, para obtener la satisfacción de nuestros Clientes y Distribuidores. Recientemente, nos hemos especializado en el desarrollo y la venta de productos y equipos de calidad para los laboratorios de análisis agroalimentarios; ahora somos una empresa líder en este sector y proponemos soluciones 100% únicas y originales a nuestros Clientes.`,
      videoLink: "lYG1WX_dJe4",
    },
    {
      type: "product-list",
      title: "Productos",
      items: [
        {
          alt: "alt-logo",
          srcImage: pro01_1,
          typeProduct: {
            name: "Crióscopo",
            keyname: "crioscopo",
          },
          categoryProduct: {
            name: "Crióscopo CryoSpecial",
            keyname: "crioscopo-cryospecial",
          },
          name: "CryoSpecial 1",
          description: "CryoSpecial 1 es un crióscopo muy accesible para la rápida y exacta determinación de la variación del punto de congelación de leche/nata y del porcentaje de agua añadida, con prestaciones analíticas según las normas de referencia IDF-ISO 5764:2009 y AFNOR.",
          descriptionLong: `CryoSpecial 1 es un crióscopo muy accesible para la rápida y exacta determinación de la variación del punto de congelación de leche/nata y del porcentaje de agua añadida, con prestaciones analíticas según las normas de referencia IDF-ISO 5764:2009 y AFNOR.
          <br><br>
          <h5>CARACTERÍSTICAS TÉCNICAS</h5>
          <ul>
          <li>Capacidad: muestra individual</li>
          <li>El punto crioscópico y el porcentaje de agua adicionada aparecen en la pantalla</li>
          <li>Enfriamiento del baño con celdas Peltier controladas por microprocesador</li>
          <li>Cabezal de lectura con movimiento manual y inicio/término automático del análisis</li>
          <li>Temperatura de operación: de +5°C a +36°C</li>
          <li>Calibración automática</li>
          <li>No requiere el líquido refrigerante</li>
          <li>Agitación y golpe controlados por el software</li>
          <li>Resultados en grados °C o °Hortvet y agua%</li>
          <li>Volumen de muestra: 2 o 2,5 ml</li>
          <li>Tiempo de análisis: unos 3 minutos</li>
          <li>Tiempo de pre-calentamiento: unos 5 minutos</li>
          <li>Resolución: ±0,0005 °C</li>
          <li>Reproducibilidad (leche bovina): ±0,0025 °C</li>
          <li>Alimentación: 110/220 V, 50/60 Hz, 90 W</li>
          <li>Dimensiones: 285 x 380 x 450 cm (A x L x H – con cabezal levantado)</li>
          <li>Peso: unos 10 kg.</li>
          <li></li>
          </ul>
          `,
          videoLink: "rMI4bOki2U8",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro02_1,
          typeProduct: {
            name: "Crióscopo",
            keyname: "crioscopo",
          },
          categoryProduct: {
            name: "Crióscopo CryoTouch",
            keyname: "crioscopo-cryotouch",
          },
          name: `Crióscopo CryoTouch 1, con función (leche sin lactosa)`,
          description: "CryoTouch 1 es un equipo automático para la rápida y exacta determinación de la variación del punto de congelación de leche y nata, y del porcentaje de agua añanida en el pleno respeto de la norma internacional IDF-ISO 5764:2009.",
          descriptionLong: `<h5>Análisis profesionales de agua añadida en muestras de leche/nata</h5>
          <br><br>
          CryoTouch 1 es un equipo automático para la rápida y exacta determinación de la variación del punto de congelación de leche y nata, y del porcentaje de agua añanida en el pleno respeto de la norma internacional IDF-ISO 5764:2009.
          <br><br>
          Este crióscopo de nueva generación incluye muchas novedades gracias al empleo de la tecnología más reciente: pantalla táctil a color de 7”, visualización en tiempo real de la curva de temperatura, memoria para más de 4.000 resultados, software para la gestión de datos en un PC, puerto USB para descargar los datos a un pen drive, etc.
          <br><br>
          Con CryoTouch 1 los laboratorios y las industrias de lácteos pueden realizar análisis oficiales basados en el método de referencia ISO. La función “Leche sin lactosa” ayuda el control y la comprobación del correcto proceso de eliminación de lactosa en leche y nata.
          <h5>NUEVAS FUNCIONES Y GRANDES VENTAJAS:</h5>
          <ul>
          <li>6 opciones para configurar el valor de referencia y 2 distintas fórmulas para calcular el porcentaje de agua añadida</li>
          <li>2 modalidades de lectura: “de meseta”, según el método ISO, o a tiempo establecido</li>
          <li>Gráfico de la temperatura de la muestra en tiempo real</li>
          <li>Las muestras se pueden identificar con un código alfanumérico</li>
          <li>Lector opcional de códigos de barra de las muestras (bajo pedido: necesita un puerto RS232 adicional)</li>
          <li>Resultados mostrados en diferentes colores para identificar rápidamente anomalías o valores críticos</li>
          <li>Nueva función “Leche sin lactosa” para controlar la eliminación de lactosa en leche y nata</li>
          <li>Memoria para 2 distintas curvas de calibración: la curva tradicional en el respeto de la norma ISO y una curva adicional según las exigencias del usuario (por ejemplo: leche sin lactosa)</li>
          <li>Memoria para más de 4.000 resultados</li>
          <li>Fácil descarga de los datos analíticos a un pen drive USB</li>
          <li>Monitoreo en tiempo real o rápida descarga de los resultados a un PC gracias al programa de gestión CryoSoft Touch</li>
          <li>Visualización inmediata de los mensajes de error</li>
          </ul>
          <h5>CARACTERÍSTICAS TÉCNICAS:</h5>
          <ul>
          <li>Capacidad: muestra individual</li>
          <li>Pantalla táctil a color de 7”</li>
          <li>Enfriamiento del baño con celdas Peltier controladas por microprocesador</li>
          <li>Temperatura de operación: de +5°C a +36°C</li>
          <li>Calibración automática</li>
          <li>Agitación y golpe controlados por el software</li>
          <li>Resultados en grados °C o °Hortvet y agua%</li>
          <li>Volumen de muestra: 2 o 2.5 mL</li>
          <li>Tiempo de análisis: unos 2 minutos/muestra</li>
          <li>Tiempo de pre-calentamiento: unos 5 minutos</li>
          <li>Resolución: ±0,0005°C</li>
          <li>Reproducibilidad (en leche bovina): ±0,0025°C</li>
          <li>Puerto USB para descargar los datos analíticos a un a pen drive</li>
          <li>2 puertos RS232 para la conexión de una impresora opcional y un ordenador</li>
          <li>Un puerto RS232 adicional se puede añadir bajo pedido para la conexión de un lector opcional de códigos de barra</li>
          <li>Consumo: max. 150 W</li>
          <li>Dimensiones: 285x485x360 mm (AxLxH, con cabezal bajado)</li>
          <li>Peso: 16,1 Kg</li>
          </ul>
          `,
          videoLink: "xB8bLvjlWOA",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro03_1,
          typeProduct: {
            name: "Crióscopo",
            keyname: "crioscopo",
          },
          categoryProduct: {
            name: "Crióscopo CryoTouch",
            keyname: "crioscopo-cryotouch",
          },
          name: "Crióscopo CryoTouch 20, con función (leche sin lactosa)",
          description: "CryoTouch 20 es un equipo automático con automuestreador de 20 tubos para la rápida y exacta determinación de la variación del punto de congelación de leche y nata, y del porcentaje de agua añanida en el pleno respeto de la norma internacional IDF-ISO 5764:2009.",
          descriptionLong: `<h5>Análisis profesionales de agua añadida en muestras de leche/nata</h5>
          <br><br>
          CryoTouch 20 es un equipo automático con automuestreador de 20 tubos para la rápida y exacta determinación de la variación del punto de congelación de leche y nata, y del porcentaje de agua añanida en el pleno respeto de la norma internacional IDF-ISO 5764:2009.
          <br><br>
          Este crióscopo de nueva generación incluye muchas novedades gracias al empleo de la tecnología más reciente: pantalla táctil a color de 7”, visualización en tiempo real de la curva de temperatura, memoria para más de 4.000 resultados, software para la gestión de datos en un PC, puerto USB para descargar los datos a un pen drive, etc.
          <br><br>
          Con CryoTouch 20 los laboratorios y las industrias de lácteos pueden realizar análisis oficiales basados en el método de referencia ISO. La función “Leche sin lactosa” ayuda el control y la comprobación del correcto proceso de eliminación de lactosa en leche y nata.
          <br><br>
          <h5>NUEVAS FUNCIONES Y GRANDES VENTAJAS:</h5>
          <ul>
          <li>6 opciones para configurar el valor de referencia y 2 distintas fórmulas para calcular el porcentaje de agua añadida</li>
          <li>2 modalidades de lectura: “de meseta”, según el método ISO, o a tiempo establecido</li>
          <li>Gráfico de la temperatura de la muestra en tiempo real</li>
          <li>Las muestras se pueden identificar con un código alfanumérico</li>
          <li>Lector opcional de códigos de barra de las muestras (bajo pedido: necesita un puerto RS232 adicional)</li>
          <li>Resultados mostrados en diferentes colores para identificar rápidamente anomalías o valores críticos</li>
          <li>Nueva función “Leche sin lactosa” para controlar la eliminación de lactosa en leche y nata</li>
          <li>Memoria para 2 distintas curvas de calibración: la curva tradicional en el respeto de la norma ISO y una curva adicional según las exigencias del usuario (por ejemplo: leche sin lactosa)</li>
          <li>Memoria para más de 4.000 resultados</li>
          <li>Fácil descarga de los datos analíticos a un pen drive USB</li>
          <li>Monitoreo en tiempo real o rápida descarga de los resultados a un PC gracias al programa de gestión CryoSoft Touch</li>
          <li>Visualización inmediata de los mensajes de error</li>
          </ul>
          <h5>CARACTERÍSTICAS TÉCNICAS:</h5>
          <ul>
          <li>Capacidad: hasta 20 muestras</li>
          <li>Pantalla táctil a color de 7”</li>
          <li>Enfriamiento del baño con celdas Peltier controladas por microprocesador</li>
          <li>Temperatura de operación: de +5°C a +36°C</li>
          <li>Calibración automática</li>
          <li>Agitación y golpe controlados por el software</li>
          <li>Resultados en grados °C o °Hortvet y agua%</li>
          <li>Volumen de muestra: 2 o 2.5 mL</li>
          <li>Tiempo de análisis: unos 2 minutos/muestra</li>
          <li>Tiempo de pre-calentamiento: unos 5 minutos</li>
          <li>Resolución: ±0,0005°C</li>
          <li>Reproducibilidad (en leche bovina): ±0,0025°C</li>
          <li>Puerto USB para descargar los datos analíticos a un a pen drive</li>
          <li>2 puertos RS232 para la conexión de la impresora (incluida) y un ordenador opcional</li>
          <li>Un puerto RS232 adicional se puede añadir bajo pedido para la conexión de un lector opcional de códigos de barra</li>
          <li>Consumo: max. 150 W</li>
          <li>Dimensiones: 285x485x360 mm (AxLxH, con cabezal bajado)</li>
          <li>Peso: 17,4 Kg</li>
          </ul>
          `,
          videoLink: "xB8bLvjlWOA",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro04_1,
          typeProduct: {
            name: "Crióscopo",
            keyname: "crioscopo",
          },
          categoryProduct: {
            name: "Crióscopo CryoTouch",
            keyname: "crioscopo-cryotouch",
          },
          name: "Crióscopo CryoTouch 40, con función (leche sin lactosa)",
          description: "CryoTouch 40 es un equipo automático con automuestreador de 40 tubos para la rápida y exacta determinación de la variación del punto de congelación de leche y nata, y del porcentaje de agua añanida en el pleno respeto de la norma internacional IDF-ISO 5764:2009.",
          descriptionLong: `<h5>Análisis profesionales de agua añadida en muestras de leche/nata</h5>
          <br><br>
          CryoTouch 40 es un equipo automático con automuestreador de 40 tubos para la rápida y exacta determinación de la variación del punto de congelación de leche y nata, y del porcentaje de agua añanida en el pleno respeto de la norma internacional IDF-ISO 5764:2009.
          <br><br>
          Este crióscopo de nueva generación incluye muchas novedades gracias al empleo de la tecnología más reciente: pantalla táctil a color de 7”, visualización en tiempo real de la curva de temperatura, memoria para más de 4.000 resultados, software para la gestión de datos en un PC, puerto USB para descargar los datos a un pen drive, etc.
          <br><br>
          Con CryoTouch 40 los laboratorios y las industrias de lácteos pueden realizar análisis oficiales basados en el método de referencia ISO. La función “Leche sin lactosa” ayuda el control y la comprobación del correcto proceso de eliminación de lactosa en leche y nata.
          <br><br>
          <h5>NUEVAS FUNCIONES Y GRANDES VENTAJAS:</h5>
          <ul>
          <li>6 opciones para configurar el valor de referencia y 2 distintas fórmulas para calcular el porcentaje de agua añadida</li>
          <li>2 modalidades de lectura: “de meseta”, según el método ISO, o a tiempo establecido</li>
          <li>Gráfico de la temperatura de la muestra en tiempo real</li>
          <li>Las muestras se pueden identificar con un código alfanumérico</li>
          <li>Lector opcional de códigos de barra de las muestras (bajo pedido: necesita un puerto RS232 adicional)</li>
          <li>Resultados mostrados en diferentes colores para identificar rápidamente anomalías o valores críticos</li>
          <li>Nueva función “Leche sin lactosa” para controlar la eliminación de lactosa en leche y nata</li>
          <li>Memoria para 2 distintas curvas de calibración: la curva tradicional en el respeto de la norma ISO y una curva adicional según las exigencias del usuario (por ejemplo: leche sin lactosa)</li>
          <li>Memoria para más de 4.000 resultados</li>
          <li>Fácil descarga de los datos analíticos a un pen drive USB</li>
          <li>Monitoreo en tiempo real o rápida descarga de los resultados a un PC gracias al programa de gestión CryoSoft Touch</li>
          <li>Visualización inmediata de los mensajes de error</li>
          </ul>
          <h5>CARACTERÍSTICAS TÉCNICAS:</h5>
          <ul>
          <li>Capacidad: hasta 40 muestras</li>
          <li>Pantalla táctil a color de 7”</li>
          <li>Enfriamiento del baño con celdas Peltier controladas por microprocesador</li>
          <li>Temperatura de operación: de +5°C a +36°C</li>
          <li>Calibración automática</li>
          <li>Agitación y golpe controlados por el software</li>
          <li>Resultados en grados °C o °Hortvet y agua%</li>
          <li>Volumen de muestra: 2 o 2.5 mL</li>
          <li>Tiempo de análisis: unos 2 minutos/muestra</li>
          <li>Tiempo de pre-calentamiento: unos 5 minutos</li>
          <li>Resolución: ±0,0005°C</li>
          <li>Reproducibilidad (en leche bovina): ±0,0025°C</li>
          <li>Puerto USB para descargar los datos analíticos a un a pen drive</li>
          <li>2 puertos RS232 para la conexión de la impresora (incluida) y un ordenador opcional</li>
          <li>Un puerto RS232 adicional se puede añadir bajo pedido para la conexión de un lector opcional de códigos de barra</li>
          <li>Consumo: max. 150 W</li>
          <li>Dimensiones: 330x610x360 mm (AxLxH, con cabezal bajado)</li>
          <li>Peso: 17,4 Kg</li>
          </ul>
          `,
          videoLink: "xB8bLvjlWOA",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro05_1,
          typeProduct: {
            name: "Crióscopo",
            keyname: "crioscopo",
          },
          categoryProduct: {
            name: "Crióscopo CryoTouch",
            keyname: "crioscopo-cryotouch",
          },
          name: "Speedy Lab - Analizador de leche, nata y suero",
          description: "Equipo automático para la rápida determinación de los componentes tradicionales en muestras de leche, nata y suero. Basado en una aplicación especial de la técnica de ultrasonidos, Speedy Lab no requiere ninguna preparación de la muestra, ni homogeneización, calefacción, consumibles o reactivos químicos.",
          descriptionLong: `<h5>Análisis de grasa, proteína, lactosa y sólidos - 5 teclas...1 minuto...0 problemas!</h5>
          <br><br>
          Equipo automático para la rápida determinación de los componentes tradicionales en muestras de leche, nata y suero. Basado en una aplicación especial de la técnica de ultrasonidos, Speedy Lab no requiere ninguna preparación de la muestra, ni homogeneización, calefacción, consumibles o reactivos químicos. Sus elevadas flexibilidad y fiabilidad, junto a su precio muy competitivo, ponen Speedy Lab a la vanguardia para los análisis rápidos de lácteos. Excelente para las necesidades de las industrias lecheras y de fabricación de queso.
          <br><br>
          La versión más reciente de Speedy Lab permite analizar también muestras de nata y suero de forma directa, gracias a los mejores rangos de medición y niveles de exactitud.
          <h5>VENTAJAS:</h5>
          <ul>
          <li>Análisis de grasa, proteínas, lactosa, densidad, sal y sólidos no grasos (SNF) en diferentes tipos de leche</li>
          <li>Menú interactivo para análisis y calibración, muy fácil de usar</li>
          <li>Calibraciones simples, mediante el teclado o con un ordenador</li>
          <li>Resultados en unos 60 segundos, sin necesidad de la presencia del usuario</li>
          <li>Ninguna preparación o homogeneización de las muestras</li>
          <li>Ningún consumible o reactivo/agente químico</li>
          <li>Aspiración de muestra desde cualquier recipiente, mediante bomba de precisión</li>
          <li>Tubo toma-muestra extensible hasta 70 cm</li>
          <li>Tubos separados para la entrada y la salida de la muestra: ausencia de contaminación cruzada ("carry-over") entre 2 muestras sucesivas y máxima exactitud</li>
          <li>Software gratuito para adquirir los resultados y para la calibración de un ordenador</li>
          </ul>
          <h5>Y ahora:</h5>
          <ul>
          <li>Certificado según el Instituto GOSS de Rusia</li>
          </ul>
          <h5>CARACTERÍSTICAS TÉCNICAS:</h5>
          <ul>
          <li>
            <h5>Rango de medición y exactitud:</h5>
            <ul>
            <li>Grasa: de 0,01% a 45,00% ± 0,06%</li>
            <li>Proteína: de 2,00% a 7,00% ± 0,15%</li>
            <li>Lactosa: de 0,01% a 6,00% ± 0,20%</li>
            <li>SNF: de 3,00% a 40,00% ± 0,15%</li>
            <li>Sal: de 0,40% a 1,50% ± 0,05%</li>
            <li>Densidad: de 1.015 a 1.160 Kg/m3 ± 0,3 Kg/m3</li>
            </ul>
          </li>
          <li>Volumen de muestra: 15 mL</li>
          <li>Condiciones de operación: temperatura de 10°C a 35°C, humedad de 30% a 80%</li>
          <li>Salida RS232 para PC/impresora (impresora termica EP-50 opcional)</li>
          <li>Salida USB para la conexión al ordenador</li>
          <li>Alimentador 12 VDC para voltajes de 110 a 240 VAC - 50/60 Hz. Cable para el coche, bajo pedido</li>
          <li>Consumo: 65 W</li>
          <li>Dimensiones: 230 x 230 x 205 (H) mm</li>
          <li>Peso: 4,5 Kg.</li>
          </ul>
          `,
          videoLink: "ULUkueSl33I",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro06_1,
          typeProduct: {
            name: "Crióscopo",
            keyname: "crioscopo",
          },
          categoryProduct: {
            name: "Crióscopo CryoTouch",
            keyname: "crioscopo-cryotouch",
          },
          name: "Centrífuga Astor 8 Digit",
          description: "La centrífuga Astor 8 Digit para 8 butirómetros es completamente digital y está desarrollada para cumplir con las normas de seguridad y el método Gerber para la determinación cuantitativa del contenido de grasa en leche y lácteos.",
          descriptionLong: `<h5>La nueva centrífuga digital para el método de Gerber</h5>
          <br><br>
          La centrífuga Astor 8 Digit para 8 butirómetros es completamente digital y está desarrollada para cumplir con las normas de seguridad y el método Gerber para la determinación cuantitativa del contenido de grasa en leche y lácteos.
          <h5>CARACTERÍSTICAS TÉCNICAS:</h5>
          <ul>
          <li>Estructura metálica y pintada contra ácidos</li>
          <li>Tapa con ventanilla para inspeccionar la cámara durante la centrifugación</li>
          <li>Bloqueo de seguridad de la tapa con rotor activo</li>
          <li>Freno electrónico del motor para reducir el tiempo de parada</li>
          <li>Pantalla digital con indicación del calentamiento activo, tapa abierta/cerrada, tiempo de centrifugación, tiempo restante, freno activo, ciclo terminado</li>
          <li>Regulación digital del tiempo de centrifugación: de 0 a 60 minutos o tiempo indefinido</li>
          <li>Interruptor general retroalumbrado y teclas separadas para abrir la tapa y encender/apagar el calentamiento</li>
          <li>Luces indicadoras LED: temperatura correcta en la cámara (luz morada) y tapa desbloqueada (luz verde)</li>
          <li>Max. capacidad: 8 butirometros</li>
          <li>Soportes anti-ácidos de los butirómetros, fáciles para sacar y limpiar</li>
          <li>Temperatura establecida a 65°C, según Gerber</li>
          <li>Tiempo de pre-calentamiento: máx. 20 minutos</li>
          <li>Temperatura muy homogenea en la cámara</li>
          <li>Fuerza de centrifugación: 350 g ± 50 g, según Gerber</li>
          <li>Dimensiones y peso: 49x41x26 (H) cm, 18 Kg.</li>
          <li>Alimentación: 230 V o 115 V, 50 o 60 Hz</li>
          <li>Max. consumo: 840 W</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro07_1,
          typeProduct: {
            name: "Crióscopo",
            keyname: "crioscopo",
          },
          categoryProduct: {
            name: "Crióscopo CryoTouch",
            keyname: "crioscopo-cryotouch",
          },
          name: "NucleoCounter® SCC-100",
          description: "NucleoCounter® SCC-100 se basa en la microscopía de fluorescencia y en el uso de un práctico cartucho desechable, el que dosifica la muestra y la pone en contacto con los reactivos integrados en el mismo consumible. Este cartucho trabaja como una celda de lectura calibrada.",
          descriptionLong: `<h5>El contaje de células somáticas en leche en 3 simples pasos</h5>
          <br><br>
          NucleoCounter® SCC-100 se basa en la microscopía de fluorescencia y en el uso de un práctico cartucho desechable, el que dosifica la muestra y la pone en contacto con los reactivos integrados en el mismo consumible. Este cartucho trabaja como una celda de lectura calibrada. Después de poner el cartucho en el equipo, y sólo apretando una tecla, el resultado aparece en la pantalla e inmediatamente impreso si la impresora opcional está conectada. Por lo tanto, el análisis se efectua en 3 simple y rápidos pasos: introducción de la muestra, inserción del cartucho en el equipo y presión de la tecla RUN.
          <h5>VENTAJAS:</h5>
          <ul>
          <li>Método según la regulación internacional FIL-IDF 148</li>
          <li>Excelentes niveles de exactitud y precisión con cualquier tipo de leche</li>
          <li>Análisis inmediatos, en 30 segundos</li>
          <li>No requiere ninguna calibración, ni durante ni después la instalación</li>
          <li>Libre de mantenimiento programado y extraordinario</li>
          <li>Evita el manejo de reactivos tóxicos o carcinogénicos</li>
          <li>Listo para usar después de tan sólo 5 segundos de calentamiento</li>
          <li>Compacto, ligero y confiable</li>
          <li>Mínimo trabajo por parte del operador</li>
          <li>Conexión USB para la impresora (opcional)</li>
          <li>Software SomaticView® opcional para el manejo de los resultados</li>
          </ul>
          <h5>CARACTERÍSTICAS TÉCNICAS:</h5>
          <ul>
          <li>Volumen de muestra: min. 500 μl</li>
          <li>Tiempo de análisis: < 30 segundos</li>
          <li>Rango de medición: 10.000 ÷ 2.000.000 células/ml</li>
          <li>Consumo: menos de 25 W</li>
          <li>Dimensiones: 22 x 38 x 26 (H) cm, sin impresora</li>
          <li>Peso: 3 Kg.</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
      ],
    },
  ],
};

export default apiSelcaEscondidaMock;
