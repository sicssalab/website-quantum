import logo from "../assets/LOGO-MARCAS-PROVEEDORES/hitachi-inspire-the-next.jpg";

import main1 from "../assets/landings/hitachi/HOME HITACHI.webp"
import main2 from "../assets/landings/hitachi/HOME HITACHI 2.jpg"

import pro01_1 from "../assets/landings/hitachi/productos/hlpc-chromaster-3/1.avif";
import pro02_1 from "../assets/landings/hitachi/productos/cromatografos/liquido-alto-rendimiento-chromaster/1.avif";
import pro03_1 from "../assets/landings/hitachi/productos/cromatografos/primaide/1.avif";
import pro04_1 from "../assets/landings/hitachi/productos/cromatografos/chromaster-ultra-rs/1.avif";
import pro05_1 from "../assets/landings/hitachi/productos/espectrofotometro/u2900/1.avif";
import pro06_1 from "../assets/landings/hitachi/productos/espectrofotometro/uh5300/1.avif";
import pro07_1 from "../assets/landings/hitachi/productos/espectrofotometro/u5100/1.avif";
import pro08_1 from "../assets/landings/hitachi/productos/espectrofotometro/u3900/1.avif";

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
          <br><br>
          <h4>Características</h4>
          <h5>Empower™3 controla directamente el sistema de cromatografía líquida de Hitachi</h5>
Las condiciones del módulo Chromaster/ChromasterUltra Rs se pueden configurar en Empower™3.<br>
Las configuraciones de condición del dispositivo se administran en Empower™3 como método del dispositivo. La GUI fácil de usar facilita el establecimiento de condiciones.
Pantalla de configuración de condiciones del dispositivo
          <h5>Empower™3 recopila datos del DAD y otros detectores.</h5>
Los datos recopilados por los detectores del módulo Chromaster/ChromasterUltra Rs se transfieren a los datos de Empower™3. Los datos, incluidos los datos 3D del DAD, se pueden analizar y gestionar utilizando la amplia funcionalidad de Empower™3.
Pantalla de procesamiento de datos
          <h5>Empower™3 puede comprobar el estado operativo del sistema</h5>
El estado operativo de los módulos Chromaster/ChromasterUltra Rs conectados se puede ver en la pantalla de recopilación de datos del software Empower™3.
Los datos de transición de presión, los errores operativos y más se pueden gestionar en Empower™3.
Empower™3 ofrece una amplia gama de funciones
Todos los módulos Chromaster/ChromasterUltra Rs conectados se controlan a través de Empower™3. Las condiciones de los módulos se gestionan como métodos en Empower™3 y los datos recopilados también se gestionan como datos de Empower™3. Por lo tanto, la funcionalidad de auditoría y otras funciones que respaldan el cumplimiento normativo se pueden utilizar tal como están. Empower™3 también se puede combinar con opciones de análisis de datos compatibles.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro02_1,
          typeProduct: {
            name: "Cromatógrafos liquidos",
            keyname: "cromatografos-liquidos",
          },
          categoryProduct: {
            name: "Cromatógrafos liquidos",
            keyname: "cromatografos-liquidos",
          },
          name: "Cromatógrafo líquido de alto rendimiento Chromaster",
          description: "Dos capacidades de rendimiento respaldan la confiabilidad de los datos: excelente reproducibilidad posible gracias a la bomba y el muestreador automático y excelente estabilidad del horno de columna y el detector.",
          descriptionLong: `
          <h5>Rendimiento excepcional</h5>
          Dos capacidades de rendimiento respaldan la confiabilidad de los datos: excelente reproducibilidad posible gracias a la bomba y el muestreador automático y excelente estabilidad del horno de columna y el detector.
          <br><br>
          <h5>Fácil de usar</h5>
          Además de un funcionamiento sencillo y facilidad de uso, Chromaster ofrece facilidad de mantenimiento, un requisito fundamental para HPLC.
          <br><br>
          <h5>Robustez</h5>
          La reputación de Hitachi por la robustez y confiabilidad de sus instrumentos continúa con el Chromaster, que está construido con materiales más resistentes y fabricado con los estrictos estándares de control de calidad de Hitachi.
          <br><br>
          <h5>Características</h5>
          <ul>
          <li>Opcional</li>
          <li>Hay disponibles muestreadores automáticos con o sin termostato</li>
          <li>Hay disponibles bombas con o sin válvula de purga automática</li>
          </ul>
          <h4>Alineación de módulos</h4>
          <h5>Bomba</h5>
          <ul>
          <li>5110: Presión hasta 40 MPa</li>
          <li>5160: Presión hasta 60 MPa</li>
          </ul>

          <h5>Modelos UHPLC básicos con una amplia gama de aplicaciones de HPLC</h5>

          <table class="table table-bordered">
          <tr>
            <th>Artículo</th>
            <th>5110</th>
            <th>5160</th>
          </tr>
          <tr>
            <td>Rango tardío del flujo de operación</td>
            <td>0,001 a 9,999 ml/min</td>
            <td>0,001 a 5,000 ml/min</td>
          </tr>
          <tr>
            <td>Presión máxima de funcionamiento</td>
            <td>40 MPa (0,001 a 5,000 ml/min)
            20 MPa (5,001 a 9,999 ml/min)</td>
            <td>60 MPa (0,001 a 2,500 ml/min)
            30 MPa (2,501 a 5,000 ml/min)</td>
          </tr>
          <tr>
            <td>Dimensiones</td>
            <td colspan="2">340 (ancho) × 440 (profundidad) × 140 (alto) mm</td>
          </tr>
          <tr>
            <td>Número de disolventes mezclados*1</td>
            <td colspan="2">Hasta 4</td>
          </tr>
        </table>
          <h5>Muestreador automático</h5>
          5260: Presión soportada 60 MPa, método de inyección en bucle<br>
          5280: Presión soportada 60 MPa, método de inyección directa
          <br><br>
          <h5>Línea de productos para adaptarse a diversas aplicaciones</h5>
          <table class="table table-bordered">
            <tr>
              <th>Artículo</th>
              <th>5260</th>
              <th>5280</th>
            </tr>
            <tr>
              <td>Sistema de inyección de muestra</td>
              <td>Método de inyección en bucle (inyección cortada, inyección en todo el volumen, método de inyección en bucle completo)</td>
              <td>Método de inyección directa</td>
            </tr>
            <tr>
              <td>Resistir la presión</td>
              <td>60MPa</td>
              <td>60MPa</td>
            </tr>
            <tr>
              <td>Función de lavado</td>
              <td>Equipado con bomba de lavado incorporada
              Función de lavado con dos disolventes</td>
              <td>Suministro de disolvente de lavado mediante jeringa.</td>
            </tr>

            <tr>
              <td>Control de temperatura del rack de muestras</td>
              <td>1 a 45 ºC</td>
              <td>1 a 35 ºC</td>
            </tr>
            <tr>
              <td>(Rango de ajuste de temperatura)</td>
              <td>Capaz de enfriar y calentar</td>
              <td>Sólo refrigeración</td>
            </tr>
            <tr>
              <td>Capacidad de muestra Estándar</td>
              <td>120 × 1,5 ml</td>
              <td>200 × 1,5 ml</td>
            </tr>
            <tr>
              <td>Capacidad de muestra Opcional</td>
              <td>72 × 4 ml</td>
              <td>128 × 4ml</td>
            </tr>
          </table>
          <h5>Horno de columna</h5>
          5310: Tipo horizontal<br>
          6310: Tipo vertical
          <br><br>
          <h5>Se adapta fácilmente a una columna analítica de 300 mm equipada con una columna de protección</h5>
          <table class="table table-bordered">
          <tr>
            <th>Artículo</th>
            <th>5310</th>
            <th>6310</th>
          </tr>
          <tr>
            <td>Rango de ajuste de temperatura</td>
            <td>1 a 85 °C (pasos de 1 °C)</td>
            <td>4 a 90 °C (pasos de 1 °C)</td>
          </tr>
          <tr>
            <td>Rango de control de temperatura</td>
            <td>[Temperatura ambiente -15 °C] a [Temperatura ambiente +60 °C] y rango de ajuste de temperatura</td>
            <td>[Temperatura ambiente -15 °C] a [Temperatura ambiente +75 °C] y dentro del rango de ajuste de temperatura</td>
          </tr>
          
          <tr>
            <td>Capacidad de columna</td>
            <td colspan="2">300 mm × 3 (máximo)</td>
          </tr>
          <tr>
            <td>Tanque de agua incorporado de 3 litros</td>
            <td>-</td>
            <td>Disponible</td>
          </tr>
          <tr>
            <td>Dimensiones</td>
            <td>410 (ancho) × 440 (profundidad) × 140 (alto) mm</td>
            <td>165(W) × 515(D) × 689(H) mm (Patas no incluidas)</td>
          </tr>
        </table>
        <h5>Detector</h5>
        5410: Detector UV<br>
        5420: Detector UV-Vis<br>
        5430: Detector de matriz de diodos<br>
        5440: Detector de fluorescencia<br>
        5450: Detector RI<br>
        5610: Detector MS
        <br><br>
        <table class="table table-bordered">
          <tr>
            <th>Artículo</th>
            <th>Detector UV 5410</th>
            <th>Detector UV-Vis 5420</th>
            <th>Detector de matriz de diodos 5430</th>
          </tr>
          <tr>
            <td>Sistema óptico</td>
            <td colspan="2">Sistema fotométrico de doble relación de haz.</td>
            <td>Sistema fotométrico de relación de haz único</td>
          </tr>
          <tr>
            <td>Rango de onda</td>
            <td>190 a 600 nm</td>
            <td>190 a 900 nm</td>
            <td>190 a 900 nm</td>
          </tr>
          <tr>
            <td>Celda de flujo</td>
            <td colspan="3">Longitud del camino óptico 10 mm</td>
          </tr>
          <tr>
            <td>Medición simultánea</td>
            <td colspan="2">Dos longitudes de onda*</td>
            <td>adquisición de espectro</td>
          </tr>
          <tr>
            <td>Dimensiones</td>
            <td colspan="3">340 (ancho) × 440 (profundidad) × 140 (alto) mm</td>
          </tr>
        </table>
          <br><br>
          <table class="table table-bordered">
            <tr>
              <th>Artículo</th>
              <th>Detector de fluorescencia 5440</th>
            </tr>
            <tr>
              <td>Fuente de luz</td>
              <td>Lámpara Xe, lámpara Hg para comprobar la longitud de onda.</td>
            </tr>
            <tr>
            <td>Rango de onda</td>
            <td>Ej: 200 a 850 nm
            Em: 250 a 900 nm (Cambiar fotomultiplicador a 731 nm o más)</td>
            </tr>
            <tr>
              <td>Celda de flujo</td>
              <td>Volumen de irradiación 12 µL</td>
            </tr>
            <tr>
              <td>Dimensiones</td>
              <td>340 (ancho) × 440 (profundidad) × 280 (alto) mm</td>
            </tr>
          </table>
          <br><br>
          <table class="table table-bordered">
            <tr>
              <th>Artículo</th>
              <th>Detector 5450 RI</th>
            </tr>
            <tr>
              <td>Rango de índice de refracción</td>
              <td>1 a 1,75</td>
            </tr>
            <tr>
              <td>Rango de control de temperatura</td>
              <td>APAGADO y de 30 a 50 °C</td>
            </tr>
            <tr>
              <td>Dimensiones</td>
              <td>340 (An) × 440 (Pr) × 140 (Al) mm, sin incluir proyecciones</td>
            </tr>
          </table>
          <br><br>
          <table class="table table-bordered">
            <tr>
              <th>Artículo</th>
              <th>Detector MS 5610</th>
            </tr>
            <tr>
              <td>Rango de masa de medición (m/z)</td>
              <td>20 a 1.000</td>
            </tr>
            <tr>
              <td>fuente de iones</td>
              <td>Ionización por electropulverización (ESI)</td>
            </tr>
            <tr>
              <td>Dimensiones</td>
              <td>440 (ancho) × 610 (profundidad) × 430 (alto) mm</td>
            </tr>
            <tr>
              <td>Uso de gas N 2</td>
              <td>Caudal máximo 3,4 L/min, Presión 300 ± 20 kPa</td>
            </tr>
          </table>
          <br><br>
          <h5>Organizador</h5>
          <table class="table table-bordered">
            <tr>
              <th>Artículo</th>
              <th>Organizador</th>
            </tr>
            <tr>
              <td>Potencia de salida</td>
              <td>24 V CC, 450 W Suministra energía a una bomba, un muestreador automático, un detector (detector UV, detector UV-Vis, detector de matriz de diodos o detector RI) y una placa de control de interfaz.</td>
            </tr>
            <tr>
              <td>Capacidad y espacio de la botella.</td>
              <td>Botella de 1,0 L × 6 y botella de 500 ml × 3 (máximo), 314 (ancho) × 280,8 (profundidad) mm</td>
            </tr>
            <tr>
              <td>Dimensiones</td>
              <td>340 (ancho) × 420 (profundidad) × 200 (alto) mm</td>
            </tr>
          </table>
          <br><br>
          <h3>Datos</h3>
          <h4>Rendimiento de sistema</h4>
          <h5>Ejemplo de análisis del sistema Chromaster 60 MPa</h5>
          El sistema de 60 MPa, que se puede utilizar con columnas que contienen partículas de 2,0 µm o menos, y columnas de núcleo-cubierta, es capaz de realizar análisis HPLC convencionales y también garantiza un rendimiento de resolución mejorado y un tiempo de análisis más corto.
          <br><br>
          <table class="table table-bordered">
            <tr>
              <th colspan="2">Condiciones</th>
            </tr>
            <tr>
              <td>Muestra</td>
              <td>alquilfenonas</td>
            </tr>
            <tr>
              <td>Columna</td>
              <td>LaChrom II C18 (5 µm) 4,6 mm de diámetro interior × 150 mmL
              LaChromUltra II C18 (1,9 µm) 2,0 mm de diámetro interior × 50 mmL</td>
            </tr>
            <tr>
              <td>Temperatura de la columna</td>
              <td>40ºC</td>
            </tr>
            <tr>
              <td>Fase móvil</td>
              <td>A: H2O, B: CH3CN</td>
            </tr>
            <tr>
              <td>Modo degradado</td>
              <td>Modo de alta frecuencia</td>
            </tr>
            <tr>
              <td>Longitud de onda</td>
              <td>247 millas náuticas</td>
            </tr>
          </table>
          Las siguientes opciones se utilizan con la columna UHPLC:
          <ul>
          <li>Kit de tuberías de baja dispersión</li>
          <li>Mezclador semimicro (200 µL)</li>
          <li>Unidad de celda de flujo semimicro</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro03_1,
          typeProduct: {
            name: "Cromatógrafos liquidos",
            keyname: "cromatografos-liquidos",
          },
          categoryProduct: {
            name: "Cromatógrafos liquidos",
            keyname: "cromatografos-liquidos",
          },
          name: "Cromatógrafo líquido de alto rendimiento Primaide",
          description: "Sistema HPLC robusto y asequible diseñado para una integración perfecta y análisis confiables",
          descriptionLong: `<h5>Sistema HPLC robusto y asequible diseñado para una integración perfecta y análisis confiables</h5>
          La cromatografía líquida de alto rendimiento (HPLC) se utiliza en una amplia gama de campos, como la medicina, la producción de alimentos, la química y las ciencias ambientales, lo que hace que la demanda de sistemas HPLC sea mayor entre los distintos tipos de equipos analíticos. El HPLC Hitachi Primaide está diseñado para un funcionamiento estable a largo plazo y presenta una alta confiabilidad y una durabilidad superior. Ofrece una tremenda capacidad para el análisis cotidiano.
          <h4>Características</h4>
          <ul>
          <li>Operación simple para cualquier usuario de HPLC
          Incluso en instalaciones pequeñas y medianas, los operadores individuales ven cada vez más oportunidades para utilizar múltiples sistemas HPLC. Gracias a su diseño simple y disposición de acceso frontal, el mantenimiento de Primaide es sencillo. Incluso un principiante en el análisis LC puede utilizar Primaide con confianza.</li>
          <li>Excelente rendimiento básico La demanda de sistemas HPLC con mayor precisión, mejor reproducibilidad y mayor estabilidad está aumentando. El Primaide está construido según estrictas especificaciones para cumplir con requisitos tan estrictos. Además, los laboratorios pueden aplicar Primaide a una gama aún más amplia de aplicaciones mediante el empleo de unidades opcionales, como un sofisticado DAD (detector de matriz de diodos) y una unidad de enfriamiento del muestreador automático.</li>
          <li>Durabilidad confiable Los sistemas HPLC de Hitachi se han ganado la reputación de ser máquinas altamente duraderas, y Primaide no es una excepción. Nuestros estrictos estándares de calidad de producción garantizan un alto rendimiento y resistencia. Estos estándares se aplican a todos los equipos, desde sistemas hasta accesorios.</li>
          </ul>
          <br>
          <h5>características del sistema</h5>
          <ul>
          <li>
          Las unidades opcionales montadas en el interior brindan una apariencia limpia.
          Todas las opciones principales, incluido un desgasificador, una unidad de gradiente y un sistema de enfriamiento de muestras, se pueden montar dentro del cuerpo principal. No es necesario dejar espacio para unidades opcionales.
          </li>
          <li>
          Diseño de acceso frontal para mejorar la operación y el mantenimiento.
Se accede y maneja cada módulo desde el frente. Dado que las conexiones están dispuestas en el frente, es fácil reemplazar las columnas y manipular el sistema de flujo. Para facilitar el mantenimiento, la lámpara y la unidad celular también son fácilmente accesibles.
          </li>
          <li>
          Sensores de fugas en todos los módulos
Cualquier fuga en el sistema de flujo se detecta mediante sensores de fugas integrados en cada módulo. Después de la detección, el sistema se detiene, lo que garantiza una mayor seguridad y confiabilidad.
          </li>
          <li>
          Control completo con el administrador del sistema
No es necesario un panel de control, ya que todo se puede controlar a través del administrador del sistema. Al instalar un UI-pad (opcional), cada módulo se puede controlar por separado.
          </li>
          <li>
          e-Line y USB
El e-Line es una versión avanzada del D-Line existente. Todos los módulos están conectados mediante una e-Line en una sola cadena y todas las comunicaciones están integradas. El uso de señales digitales mejora la confiabilidad de las transacciones de datos. La interfaz entre el PC y el equipo se realiza mediante USB versátil. Se admite una amplia gama de PC, lo que permite una configuración flexible.
          </li>
          <li>Función GLP
          Se instala una lámpara de Hg en el detector y las longitudes de onda en el rango UV se pueden calibrar utilizando su línea de emisión (254 nm) (instalada en el Primaide 1410 UV / 1430 DAD). Cada módulo almacena varios tipos de información de control de calidad para mejorar la confiabilidad de los datos.</li>
          </ul>
          <br><br>
          <h4>Alineación de módulos</h4>
          <h5>Bomba 1110</h5>
          La bomba Primaide 1110 ha sido desarrollada para un análisis confiable y comparte características con los modelos de bombas HPLC existentes de Hitachi. Su alto nivel de rendimiento constante proporciona a los usuarios un sólido soporte en el análisis diario.
          <ul>
          <li>
          Mejora de la estabilidad del caudal
Para la compensación de pulsos, se ha desarrollado un método patentado de retroalimentación en tiempo real para las bombas de Hitachi. No solo se ha reducido significativamente el pulso, sino que la bomba Primaide 1110 estima las fluctuaciones de presión y emplea la sincronización óptima para establecer el intervalo de velocidad del émbolo.
          </li>
          <li>
          Mejora de la reproducibilidad del tiempo de retención
Para el análisis de gradiente, la inyección del inyector automático Primaide 1210 se sincroniza con los movimientos de la bomba. Esto garantiza un tiempo de retención altamente reproducible y un análisis preciso.
          </li>
          </ul>
          <br>
          <h5>Evaluación de rendimiento de gradiente/RT y reproducibilidad de área</h5>
          <table class="table table-bordered table-striped">
            <tr>
              <th rowspan="2">Pico No.</th>
              <th rowspan="2">Componente</th>
              <th colspan="2">Tiempo de retención</th>
            </tr>
            <tr>
              <th>Promedio/mín.</th>
              <th>RSD / %</th>
            </tr>
            <tr>
              <td>1</td>
              <td>acetanilida</td>
              <td>2.032</td>
              <td>0,076</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Acetofenona</td>
              <td>2.793</td>
              <td>0.080</td>
            </tr>
            <tr>
              <td>3</td>
              <td>propiofenona</td>
              <td>3.581</td>
              <td>0.096</td>
            </tr>
            <tr>
              <td>4</td>
              <td>butirofenona</td>
              <td>4.495</td>
              <td>0.102</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Benzofenona</td>
              <td>4.809</td>
              <td>0,098</td>
            </tr>
            <tr>
              <td>6</td>
              <td>valerofenona</td>
              <td>5.639</td>
              <td>0.083</td>
            </tr>
            <tr>
              <td>7</td>
              <td>hexanofenona</td>
              <td>6.975</td>
              <td>0.082</td>
            </tr>
            <tr>
              <td>8</td>
              <td>heptanofenona</td>
              <td>8.413</td>
              <td>0.068</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Octanofenona</td>
              <td>9.882</td>
              <td>0,078</td>
            </tr>
          </table>
          <br><br>
          <table class="table table-bordered table-striped">
          <tr>
            <th colspan="2">Condición</th>
          </tr>
          <tr>
            <td>Columna</td>
            <td>HITACHI LaChrom C18 (5 µm) 4,6 mm de diámetro interior × 150 mm de largo.</td>
          </tr>
          <tr>
            <td>Fase móvil</td>
            <td>A: CH3OH B : H2O</td>
          </tr>
          <tr>
            <td>Programa de gradiente</td>
            <td>0 - 11 min A 65 → 100%</td>
          </tr>
          <tr>
            <td>Temperatura de la columna</td>
            <td>40°C</td>
          </tr>
          <tr>
            <td>Tasa de flujo</td>
            <td>1,0 ml/min</td>
          </tr>
          <tr>
            <td>Detección</td>
            <td>UV 265 nm</td>
          </tr>
          <tr>
            <td>Volumen de inyección.</td>
            <td>10 µL (100 g/mL cada uno).</td>
          </tr>
        </table>
        <br><br>
        <h5>Muestreador automático 1210</h5>
        El muestreador automático Primaide 1210 incorpora inyección directa, lo que permite la automatización de análisis consecutivos sin desperdiciar una muestra preciosa.
        <ul>
        <li>Inyección directa de muestras en pequeñas cantidades y análisis más rápido<br>
        En el método de inyección directa, la aguja de muestreo se convierte en parte del canal de flujo para que la muestra en la aguja fluya hacia el canal sin desperdicio. Esta es una gran ventaja en el análisis de muestras valiosas de pequeñas cantidades. Además, dado que el método de inyección es más sencillo que utilizar un bucle de muestreo, el ciclo de inyección se acorta a la mitad. Este método acelera el rendimiento y mejora la eficiencia en el análisis de muchas muestras.</li>
        <li>La reproducibilidad mejorada da como resultado un análisis de alta precisión.<br>
        La jeringa para la medición de muestras es impulsada por un motor de alto rendimiento. El accionamiento mejora la reproducibilidad de la inyección. Además, los tiempos máximos de retención también son más repetibles debido a la sincronización de la inyección con el movimiento de la bomba, lo que logra una mayor confiabilidad analítica.</li>
        </ul>
        <br>
        <h5>Reproducibilidad del volumen de inyección</h5>
        <table class="table table-bordered table-striped">
          <tr>
            <th colspan="2">Condición</th>
          </tr>
          <tr>
            <td>Muestra</td>
            <td>Metilparabeno</td>
          </tr>
          <tr>
            <td>Fase móvil</td>
            <td>CH3OH : H2O = 60 : 40</td>
          </tr>
          <tr>
            <td>Tasa de flujo</td>
            <td>1,0 ml/min</td>
          </tr>
          <tr>
            <td>Detección</td>
            <td>UV 265 nm</td>
          </tr>
        </table>
        <br><br>
        <h5>Horno de columna 1310</h5>
        El horno de columna Primaide 1310 también funciona como refrigerador. La función de precalentamiento obtiene un mejor rendimiento de las columnas, consiguiendo formas de picos más nítidos.
        <ul>
        <li>
        Picos más resueltos con calentamiento optimizado<br>
El precalentamiento con un calentador de bloque eficiente mejora la simetría y la nitidez de los picos, eliminando la influencia de los cambios de temperatura ambiente. El espacio de instalación de columnas, que cuenta con un sistema de circulación de aire, permite un fácil montaje y desmontaje de columnas.
        </li>
        <li>
        La función de enfriamiento está incluida de serie.<br>
        El horno puede regular la temperatura de 5°C a 65°C.
        </li>
        </ul>
        <br><br>
        <h5>Detector UV 1410</h5>
        La óptica del detector UV Primaide 1410 permite la recopilación de datos con menor ruido y deriva. La lámpara y la celda de flujo están situadas en un diseño de acceso frontal y son fácilmente reemplazables.
        <ul>
        <li>
        Bajo nivel de ruido para una detección de alta sensibilidad<br>
El detector UV Primaide 1410 logra un nivel de ruido de no más de 0,6 × 10 -5 AU, lo que mejora enormemente el análisis de componentes traza.</li>
        <li>
        Alta respuesta y bajo ruido para un análisis rápido<br>
Mediciones de bajo ruido en 0,05 segundos. Detección de alta sensibilidad que produce rápidamente picos nítidos y precisos.
        </li>
        <li>
        Estable, sin influencia de los cambios de temperatura ambiente<br>
Dado que los entornos locales pueden variar considerablemente, la óptica del detector UV está bien diseñada para evitar los efectos de los cambios de temperatura diarios y estacionales, asegurando resultados estables y reproducibles.
        </li>
        <li>
        Medición de longitud de onda en la región UV con una lámpara de Hg incorporada<br>
Utilice la línea de emisión de 254 nm de la lámpara de Hg montada para probar la precisión de la medición de la longitud de onda en la región UV, que es la región más utilizada en cromatografía líquida. Esta prueba se realiza utilizando 3 longitudes de onda de las lámparas Hg y D 2 , lo que permite análisis altamente confiables en un amplio rango de longitudes de onda.
        </li>
        </ul>
          <br><br>
          <h5>Detector de matriz de diodos 1430</h5>
          El detector de matriz de diodos Primaide 1430 es tan sensible como un detector UV. El sistema DAD tiene muchas funciones, incluida la recopilación de espectro, la cromatografía que utiliza múltiples longitudes de onda, una prueba de pureza máxima, una biblioteca espectral y más.
          <ul>
          <li>Alta sensibilidad<br>
          Las nuevas ópticas y el software mejorado reducen considerablemente el ruido (0,5 × 10 -5 AU o menos). La reputación de que "los papás son menos sensibles" ya está obsoleta.</li>
          <li>Minimizar la influencia de los cambios de temperatura en la celda de medición<br>
          La fuente de luz se estabiliza mediante una gran carcasa de lámpara. El espectrómetro y la carcasa están separados y aislados térmicamente. Al enfriar la carcasa de la lámpara por separado, se minimiza la influencia de la temperatura ambiente. El nuevo diseño incorpora sensores de temperatura, así como un ventilador de enfriamiento de velocidad de rotación variable asociado, que eliminan en gran medida los cambios de temperatura dentro del instrumento. Esto reduce el ruido y mejora la estabilidad, lo que permite un análisis estable día tras día.</li>
          <li>Alta resolución y espectros precisos<br>
          Se logra una alta resolución de longitud de onda (0,78 nm/punto de datos) con una matriz de 1.024 fotodiodos. Se mantiene una resolución uniforme en una amplia gama de longitudes de onda, desde UV hasta VIS, gracias a la óptica de difracción, que cuenta con una rejilla.
          </li>
          <li>
          Reducción de ruido digital en análisis rápido<br>
Los datos con un bajo nivel de ruido se obtienen en un período de muestreo muy corto (0,05 segundos). Durante el análisis rápido se obtienen picos nítidos y sin ruido.
          </li>
          <li>
          Calibración automática de longitud de onda<br>
Se utiliza una lámpara de Hg incorporada en la prueba automática de precisión de longitud de onda para la región UV de uso común.
          </li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro04_1,
          typeProduct: {
            name: "Cromatógrafos liquidos",
            keyname: "cromatografos-liquidos",
          },
          categoryProduct: {
            name: "Cromatógrafos liquidos",
            keyname: "cromatografos-liquidos",
          },
          name: "Cromatógrafo líquido de ultra alto rendimiento ChromasterUltra Rs",
          description: "ChromasterUltra Rs, un cromatógrafo líquido de rendimiento ultraalto, proporciona lo último en análisis de alto rendimiento, alta resolución y alta sensibilidad que se están convirtiendo en requisitos para la investigación y el desarrollo en los campos farmacéutico y químico.",
          descriptionLong: `ChromasterUltra Rs, un cromatógrafo líquido de rendimiento ultraalto, proporciona lo último en análisis de alto rendimiento, alta resolución y alta sensibilidad que se están convirtiendo en requisitos para la investigación y el desarrollo en los campos farmacéutico y químico.
          <h4>Características</h4>
          <h5>Alta resolución</h5>
La columna LaChromUltra II recientemente desarrollada es la columna UHPLC más larga con 250 mm de longitud. Cuando se utiliza junto con el sistema de volumen reducido ChromasterUltra Rs, produce un rendimiento excepcional de alta separación.
La combinación de esta columna y ChromasterUltra Rs permite una tolerancia de presión del sistema de 140 MPa con 50.000 o más platos teóricos por columna.
          <br><br>
          <h5>Alta sensibilidad</h5>
          Se incorpora una celda de flujo capilar de reflexión total al detector de matriz de diodos para responder a la creciente necesidad de análisis de alta sensibilidad de sustancias peligrosas, impurezas genotóxicas, etc. También se incluye una celda de flujo de alta sensibilidad con una longitud de camino óptico de 65 mm. disponible. Además de la capacidad de análisis de alta sensibilidad, el arrastre se reduce mediante el uso de un mezclador de doble sacacorchos.
          <br><br>
          <h5>Celda de flujo capilar de reflexión total de alta sensibilidad</h5>
          El detector de matriz de diodos (DAD) exhibe bajo ruido y baja deriva, lo que se logra mediante el uso de un nuevo sistema óptico que proporciona condiciones óptimas para el análisis de alta sensibilidad. La celda de flujo de alta sensibilidad opcional (longitud del camino óptico de 65 mm) mejora aún más la sensibilidad; Se obtiene un aumento de aproximadamente diez veces en comparación con nuestro modelo anterior (LaChromUltra), lo que permite aplicaciones de alta sensibilidad que incluyen impurezas de reacciones secundarias, impurezas genotóxicas, etc.
          La adquisición de perfiles de impurezas durante todas las etapas de síntesis y en materias primas utilizadas en medicamentos y productos químicos, subproductos intermedios y medicamentos terminados son ejemplos de aplicaciones útiles.
          <br><br>
          <h5>Mezclador de doble sacacorchos</h5>
          La bomba binaria está equipada con el último diseño en mezcladores de microfluidos de doble sacacorchos.
          <br><br>
          Se logra una mezcla eficiente incluso para un volumen bajo, lo que da como resultado una línea base extremadamente estable durante el análisis de gradiente, lo que permite un análisis de mayor sensibilidad.
          <br><br>
Estructura del mezclador de doble sacacorchos:
las repetidas ramificaciones y fusiones de canales dentro del mezclador proporcionan una mezcla eficaz de disolventes (volumen del mezclador de 55 µL).
          <table class="table table-bordered table-striped">
          <tr>
            <th colspan="2">Condiciones</th>
          </tr>
          <tr>
            <td>Columna</td>
            <td>LaChromUltra II C18 (1,9 µm) 2,0 mm de diámetro interior × 50 mm de largo.</td>
          </tr>
          <tr>
            <td>eluyente</td>
            <td>A) TFA al 0,1 %/H 2 O (v/v)<br>
            B) TFA al 0,1 %/CH 3 CN (v/v)<br>
            A/B = 50/50</td>
          </tr>
          <tr>
            <td>Tasa de flujo</td>
            <td>0,500 ml/min</td>
          </tr>
          <tr>
            <td>Detección</td>
            <td>UV 214 nm</td>
          </tr>
          </table>
          <br>
          <h5>Continuar</h5>
          Se logra un bajo arrastre (0,001 % o menos) mediante la estructura optimizada del puerto de inyección.
          <ul>
          <li>Se reduce el volumen muerto del puerto de inyección.</li>
          <li>El lavado de alto flujo se logra mediante el uso de una bomba de lavado dedicada al muestreador automático.</li>
          <li>Se utilizan dos disolventes para lavar la pared interior de la aguja así como el interior de la válvula de inyección.</li>
          <li>Se ha incorporado recientemente una función de retrolavado para el puerto de inyección.</li>
          </ul>
          <br>
          <h4>Usabilidad</h4>
          <h5>Controlador GUI (opcional)</h5>
          Todos los módulos se pueden controlar desde el controlador de interfaz gráfica de usuario (GUI).<br>
          La GUI se compone de un monitor LCD en color (pantalla TFT en color de 5,7 pulgadas con retroiluminación LED) y un panel táctil diseñado para una visualización sencilla y un funcionamiento sencillo.<br>
          Se pueden crear para un sistema hasta 10 programas que incluyen una función de temporizador, tareas de preanálisis (Wakeup) y tareas de posanálisis (Sleep).<br>
          El controlador GUI le permite verificar el estado del uso de consumibles para todas las unidades que están conectadas al sistema.
          <br>
          <h5>Ajuste de columna MEM (opcional)</h5>
          El accesorio de columna MEM (Mecanismo de mejora de momento) propio de Hitachi es un nuevo desarrollo simple pero emocionante. El accesorio integral de tubería de ajuste manual, que tiene un volumen muerto muy pequeño, es capaz de tolerar con seguridad presiones del sistema de hasta 140 MPa.
          <h5>Póngase en fila</h5>
          <ul>
          <li>Sistema detector de matriz de diodos (DAD)</li>
          <li>Sistema detector UV-VIS</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro05_1,
          typeProduct: {
            name: "Espectrofotómetro",
            keyname: "espectrofotometro",
          },
          categoryProduct: {
            name: "Espectrofotómetro",
            keyname: "espectrofotometro",
          },
          name: "Espectrofotómetro de Doble Haz U-2900/2910",
          description: "En el diseño de doble haz, la energía de la fuente de luz se divide en dos con un medio espejo de modo que uno pase por el lado de referencia y el otro por el lado de muestra, lo cual no está disponible con el diseño de haz único.",
          descriptionLong: `<h5>Espectrofotómetro que monta una pantalla LCD en color de gran tamaño, que es más sencillo de utilizar y de mayor fiabilidad.</h5>
          Alta resolución que cumple con la Farmacopea Europea (paso de banda espectral: 1,5 nm).<br>
          La medición de trazas en el campo biotecnológico, etc. se puede realizar utilizando microceldas opcionales de 50, 25 y 5.
          <h4>Características</h4>
          <h5>Óptica estable gracias al doble haz</h5>
          En el diseño de doble haz, la energía de la fuente de luz se divide en dos con un medio espejo de modo que uno pase por el lado de referencia y el otro por el lado de muestra, lo cual no está disponible con el diseño de haz único.
          Dado que la energía del lado de referencia también incide sobre un detector, la fotometría se realiza basándose en esta señal. Por lo tanto, se puede compensar un cambio de energía en la fuente de luz para garantizar una medición estable durante mucho tiempo.
          <br><br>
          <h5>Incorporación de rejilla de difracción cóncava estigmática.</h5>
          La óptica de este instrumento adopta el monocromador Seya-Namioka, muy extendido como monocromador de rejilla de difracción cóncave representativo.
          Debido a que una rejilla de difracción cóncava tiene funciones de condensación y dispersión del haz, un sistema óptico se puede configurar con menos espejos.
          En un espectrofotómetro, el uso de menos espejos significa un camino óptico más corto, dando lugar así a una óptica brillante sin aberraciones.
          Para eliminar las aberraciones que eran esencialmente inevitables en el pasado, se ha desarrollado una rejilla de difracción cóncava estigmática aplicando la tecnología original de Hitachi. Como resultado, se ha logrado una resolución más alta.
          <br><br>
          Se ha logrado una resolución más alta eliminando la coma del monocromador Seya-Namioka, que es el monocromador de rejilla de difracción cóncava más popular. Su ranurado está respaldado por el único motor gobernante en Japón. Con esta máquina también se han fabricado las rejillas de difracción del Modelo U-2900/2910.
          <h5>Paso de banda espectral de 1,5 nm que cumple con la Farmacopea Europea</h5>
          La Farmacopea Europea requiere una proporción de 1,5 o mayor cuando se miden soluciones de tolueno en hexano al 0,02% (V/V). En el espectro de la derecha se puede confirmar un valor satisfactorio de 1,6.
          (Muestra: solución de tolueno al 0,02 % en n-hexano)
          <br><br>
          <h5>Control de instrumentos y procesamiento de datos por computadora personal</h5>
          El U-2900 puede controlarse mediante una PC equipada con el programa de soluciones UV opcional. El Programa de Soluciones UV proporciona no solo funciones básicas como análisis cuantitativo de fotometría y escaneo de longitud de onda, sino también la capacidad de manejar datos como se describe a continuación.<br>
          (U-2910 es el modelo exclusivamente para operación con una PC. Se requiere una PC equipada con Windows® para el Programa de Soluciones UV.)
          <br><br>
          <h5>Fácil de usar</h5>
          Los botones están dispuestos para seguir el procedimiento operativo.
          Por tanto, las operaciones se pueden realizar sin problemas.
          <br><br>
          <h5>Una rica variedad de funciones de procesamiento de datos.</h5>
          El espectro se puede expandir, contraer, suavizar, diferenciar e integrar, y se pueden aplicar cálculos aritméticos fundamentales entre espectros.
          <br><br>
          <h5>Potente soporte para la generación de informes.</h5>
          Los datos medidos se pueden enviar a Microsoft® Excel®. Un clic en el botón Informe es suficiente para la transmisión de datos.
          <br><br>
          <h5>Vista previa de impresión</h5>
          Antes de imprimir, el contenido se puede comprobar mediante el comando Vista previa de impresión.
          <br><br>
          <h5>Texto de datos medidos convertible</h5>
          Además de la conversión al texto ASCII o al formato JCAMP, los espectros se pueden guardar en formato Metafile.
          <h4>Especificaciones</h4>
          <table class="table table-bordered table-striped">
            <tr>
              <th>Artículo</th>
              <th>Descripción</th>
            </tr>
            <tr>
              <td>Sistema óptico</td>
              <td>Doble haz</td>
            </tr>
            <tr>
              <td>Rango de onda</td>
              <td>190 a 1100 nm</td>
            </tr>
            <tr>
              <td>paso de banda espectral</td>
              <td>1,5 nanómetros</td>
            </tr>
            <tr>
              <td>Mostrar</td>
              <td>U-2900: LCD en color con retroiluminación (26,4 cm)</td>
            </tr>
            <tr>
              <td>Impresora I/F</td>
              <td>U-2900: Interfaz Centronics</td>
            </tr>
            <tr>
              <td>Serie I/F</td>
              <td>RS-232C (exclusivo para el programa UV Solutions)</td>
            </tr>
            <tr>
              <td>Tamaño (unidad principal)</td>
              <td>U-2900: 500 (An) × 605 (Pr) × 283 (Al) mm (con la pantalla LCD bajada)<br>U-2910: 500 (An) × 605 (Pr) × 241 (Al) mm (sin PC ni impresora)</td>
            </tr>
            <tr>
              <td>Peso (unidad principal)</td>
              <td>U-2900: 31 kg, U-2910: 29 kg</td>
            </tr>
            <tr>
              <td>Fuente de alimentación</td>
              <td>100, 115, 220, 230 o 240 V, 50/60 Hz</td>
            </tr>
            <tr>
              <td>El consumo de energía</td>
              <td>300VA</td>
            </tr>
          </table>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro06_1,
          typeProduct: {
            name: "Espectrofotómetro",
            keyname: "espectrofotometro",
          },
          categoryProduct: {
            name: "Espectrofotómetro",
            keyname: "espectrofotometro",
          },
          name: "Espectrofotómetro de doble haz UH5300",
          description: "Hitachi diseña espectrofotómetros que abarcan tecnologías para el futuro.",
          descriptionLong: `<h4>Características</h4>
          <h5>Rendimiento: este nivel de rendimiento permite obtener datos muy precisos.</h5>
          <ul>
          <li>
          Uso de lámpara de flash de xenón de larga duración<br>
          La fuente de luz está garantizada por siete años* 1 , lo que resulta en un menor costo de operación
          </li>
          <li>
          Sistema óptico de doble haz<br>
          Garantiza períodos prolongados de estabilidad de datos en comparación con el sistema óptico de haz único. Se han alcanzado
los mejores niveles de su clase* 2 de resolución de 1 nm.
          </li>
          </ul>
          <h5>Operación: Hitachi ofrece un nuevo tipo de operación en laboratorios.</h5>
          <ul>
          <li>Operación mediante el uso de terminales de tableta o PC Interfaz de usuario simple e intuitiva</li>
          <li>Control remoto a través de comunicación inalámbrica Entorno operativo flexible</li>
          </ul>
          <h5>Otras características</h5>
          <ul>
          <li>Función de verificación de rendimiento simple y fácil de entender Garantiza la precisión de los datos</li>
          <li>Torreta automática de 6 celdas como equipo estándar Eficiencia mejorada y mayor rendimiento de muestras</li>
          </ul>
          <h5>Software: Amplía las posibilidades de medición con solo tocar la pantalla.</h5>
          El software de control está diseñado poniendo énfasis en una operatividad simple e intuitiva, proporcionando un flujo de medición fácil de seguir, incluso para alguien que no esté familiarizado con un espectrofotómetro.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro07_1,
          typeProduct: {
            name: "Espectrofotómetro",
            keyname: "espectrofotometro",
          },
          categoryProduct: {
            name: "Espectrofotómetro",
            keyname: "espectrofotometro",
          },
          name: "Espectrofotómetro de relación de haz U-5100",
          description: "Los conceptos de producto subyacentes al espectrofotómetro UV-Visible U-5100 de Hitachi son ECOLÓGICOS Y LIMPIOS. El modelo U-5100 ofrece un paquete compacto y liviano con notables ahorros de energía y una larga vida útil para su fuente de luz.",
          descriptionLong: `<h5>ECOLÓGICO Y LIMPIO Para una Tierra Hermosa</h5>
          Los conceptos de producto subyacentes al espectrofotómetro UV-Visible U-5100 de Hitachi son ECOLÓGICOS Y LIMPIOS. El modelo U-5100 ofrece un paquete compacto y liviano con notables ahorros de energía y una larga vida útil para su fuente de luz.<br>
          El U-5100 incorpora todos los aspectos de las características tecnológicas de los espectrofotómetros de confiabilidad comprobada de Hitachi y al mismo tiempo logra nuestro objetivo final de crear un espectrofotómetro que sea ECOLÓGICO Y LIMPIO y que proporcione un RENDIMIENTO SUPERIOR.
          <br><br>
          <h4>Características</h4>
          <h5>ECOLOGÍA: Incorpora una lámpara de flash de Xenón, que es una fuente de luz respetuosa con el medio ambiente, de bajo consumo y larga duración.</h5>
          <h5>Adopción de una lámpara de flash de xenón</h5>
          Al adoptar una lámpara de flash de xenón de larga duración, el producto ofrece una larga vida útil a su lámpara, eliminando la necesidad de reemplazo periódico de la lámpara que era necesario en el modelo anterior *1 .
          <br><br>
          <h5>Diseño de ahorro de energía.</h5>
          Mediante el control de la lámpara de flash de xenón que emite pulsos sólo durante la medición, el consumo de energía se reduce en un 70% en comparación con el modelo anterior.
          <br><br>
          <h5>Tiempo de medición reducido</h5>
          El cambio automático de 6 celdas mediante el uso de una torreta automática de 6 celdas y un escaneo de alta velocidad (12.000 nm/min) ofrecen una reducción sustancial en el tiempo de medición (aproximadamente un 60 % de reducción). Los ejemplos que se muestran en la figura comparan *2 la cantidad de tiempo necesario para medir 100 muestras (5 longitudes de onda × 20 muestras) con un modelo anterior *1 , basado en análisis biológicos y control de calidad de productos alimenticios.
          <h4>DISEÑO: Diseño liviano, compacto y fácil de usar</h4>
          <h5>Diseño compacto y ligero</h5>
          El U-5100 ocupa un 38 % menos de espacio y una reducción de peso del 52 % en comparación con un modelo anterior *1 , lo que facilita la obtención de un espacio de instalación adecuado.
          <br><br>
          <h5>OPERACIÓN FÁCIL: ¡Actuación a un nivel superior! El funcionamiento del U-5100 es muy sencillo minimizando el tiempo de formación del operador.</h5>
          La configuración estándar de una torreta automática de 6 celdas facilita la realización de mediciones. Como parte de su configuración estándar, el sistema está equipado con una torreta de 6 celdas que alberga hasta seis celdas rectangulares de 10 mm.<br>
          El sistema puede medir un máximo de seis soluciones de calibración y soluciones de muestra *3 , lo que reduce el tiempo de medición.
          <i>
            <smal>
            *1Espectrofotómetro de haz de relación Hitachi U-1900<br>
            *2El tiempo de medición no incluye la cantidad de tiempo requerido por un operador para cargar una celda en un soporte o torreta.<br>
            *3Incluyendo muestras para establecer un cero automático (la operación de ajustar la absorbancia a cero).
            </smal>
          </i>
          <br><br>
          <h5>Especificaciones</h5>
          <table class="table table-bordered table-striped">
          <tr>
            <th>Artículo</th>
            <th>Descripción</th>
          </tr>
          <tr>
            <td>Óptica</td>
            <td>Monocromador de montura Seya-Namioka, haz proporcional</td>
          </tr>
          <tr>
            <td>Rango de onda</td>
            <td>190 a 1100 nm</td>
          </tr>
          <tr>
            <td>paso de banda espectral</td>
            <td>5 millas náuticas</td>
          </tr>
          <tr>
            <td>Fuente de luz</td>
            <td>Lámpara de flash de xenón (Xe)</td>
          </tr>
          <tr>
            <td>Mostrar</td>
            <td>LED con retroiluminación<br>
            120 mm × 90 m, 320 puntos × 240 puntos</td>
          </tr>
          <tr>
            <td>Celúla</td>
            <td>Torreta de 6 celdas (automática) (el soporte de una sola celda es opcional)</td>
          </tr>
          <tr>
            <td>Tamaño (unidad principal)</td>
            <td>355 (ancho) × 425 (profundidad) × 235 (alto) mm</td>
          </tr>
          <tr>
            <td>Peso (unidad principal)</td>
            <td>13 kilogramos</td>
          </tr>
          <tr>
            <td>Fuente de alimentación/
            Consumo de energía</td>
            <td>100, 115, 220, 230 o 240 V, 50/60 Hz 60 VA</td>
          </tr>
        </table>
        <br><br>
        <h4>Ejemplo de aplicación</h4>
        <h5>Cuantificación de cromo hexavalente.</h5>
        Aquí se presenta un ejemplo de análisis cuantitativo de cromo hexavalente mediante absorciometría con difenilcarbazida. Como resultado de la creación de una curva de trabajo entre 0 y 0,8 µg/ml, se obtuvo un coeficiente de correlación de 0,9999, lo que demuestra una excelente relación de calibración.<br>
        Longitud de onda de medición: 540 nm<br>
        Concentración de solución estándar: 0, 0,04, 0,1, 0,2, 0,5, 0,8 µg/mL`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro08_1,
          typeProduct: {
            name: "Espectrofotómetro",
            keyname: "espectrofotometro",
          },
          categoryProduct: {
            name: "Espectrofotómetro",
            keyname: "espectrofotometro",
          },
          name: "Espectrofotómetro U-3900/3900H",
          description: "Cubre una amplia variedad de necesidades de análisis, desde muestras líquidas hasta muestras sólidas. Gama de dos tipos que se pueden seleccionar de acuerdo con el objeto de medición y la aplicación. Para uso en una amplia gama de campos que se centran en la calidad del agua, el medio ambiente, la biotecnología, los productos farmacéuticos, los materiales, etc.",
          descriptionLong: `Cubre una amplia variedad de necesidades de análisis, desde muestras líquidas hasta muestras sólidas. Gama de dos tipos que se pueden seleccionar de acuerdo con el objeto de medición y la aplicación. Para uso en una amplia gama de campos que se centran en la calidad del agua, el medio ambiente, la biotecnología, los productos farmacéuticos, los materiales, etc.
          <br><br>
          <h4>Características</h4>
          <h5>Es posible realizar mediciones en un amplio rango de absorbancia con poca luz parásita y poco ruido.</h5>
          Cuanto mayor sea la cantidad de luz transmitida, menor será el ruido del espectro de absorción obtenido, de modo que se pueda medir un rango de absorbancia más amplio.<br>
          Las mediciones de muestras de alta concentración se pueden realizar en un rango de concentración más amplio.
          <br><br>
          <h5>Espectrómetro estable con sistema óptico de doble haz.</h5>
          La fuente de luz utiliza una lámpara WI (rango visible) y una lámpara D 2 (rango ultravioleta) que cambia la longitud de onda según la medición. El sistema de doble haz divide la luz monocromática de modo que la difracción se transmite al control y a la muestra con un espejo giratorio, guiando la luz hacia la cámara de muestra.<br>
          El modelo monocromático simple U-3900 utiliza un espejo de superficie esférica frente a la rendija de entrada, mientras que el modelo monocromático doble U-3900H usa una rejilla de difracción.
          <br><br>
          <h5>Las soluciones UV para U-3900 (conectadas a una PC) permiten un fácil control del dispositivo y admiten varias funciones de análisis cuantitativo</h5>
          Software de operación especial que ofrece importantes funciones como comparación de datos de medición y una función de vista previa que permite un análisis más potente.
          <br><br>
          <h5>Accesorios importantes para mediciones de líquidos y sólidos.</h5>
          Existe una amplia gama de accesorios para adaptarse a múltiples aplicaciones de muestras y micromuestras, etc.
          <br><br>
          <h5>Cargado con rejilla cóncava con corrección de aberración</h5>
          El U-3900/3900H proporciona rejillas cóncavas con corrección de aberración con una montura Seya-Namioka para el espectrómetro. Tanto la función de condensación como la de dispersión permiten un sistema óptico brillante, pero con menos espejos para reducir la pérdida de luz y las aberraciones.
          <br><br>
          <h5>Dos tipos de sistemas ópticos: Monocromo simple (U-3900) y Monocromo doble (U-3900H)</h5>
          Una línea de dos modelos con diferentes sistemas de espectro: Monocromo simple (U-3900) y Monocromo doble (U-3900H).<br>
          El Monocromo simple es adecuado para una muestra de baja concentración ya que la energía luminosa de la muestra es más fuerte en comparación con el Monocromo doble. El Double Monochrome es adecuado para muestras de alta concentración, ya que puede medir una alta absorbancia con poca luz parásita.
          <br><br>
          <h5>Especificaciones</h5>
          <table>
            <tr>
              <th>Artículo</th>
              <th>U-3900</th>
              <th>U-3900H</th>
            </tr>
            <tr>
              <td>monocromador</td>
              <td>Rejilla de difracción
              Monocromador único Montaje Seya-Namioka</td>
              <td>Rejilla de difracción-
              rejilla de difracción Monocromador doble
              Montura Seya-Namioka</td>
            </tr>
            <tr>
              <td>Rango de onda</td>
              <td colspan="2">190 a 900 nm</td>
            </tr>
            <tr>
              <td>paso de banda espectral</td>
              <td colspan="2">0,1, 0,5, 1, 2, 4, 5 nm (6 pasos)</td>
            </tr>
            <tr>
              <td>Precisión de longitud de onda</td>
              <td colspan="2">±0,1 nm (a 656,1 nm después de la calibración de longitud de onda)</td>
            </tr>
          </table>
          <br><br>
          <h4>Opciones</h4>
          <h5>Accesorio de compartimento de muestra grande mejorado</h5>
          Al instalar este compartimento de muestra mejorado y accesorios adicionales en el espectrofotómetro UV-VIS U-3900/3900H, puede medir la característica de reflexión, la propiedad de polarización causada por el ángulo de incidencia y la transmisión de la muestra sólida y el componente óptico, como la placa reflejada.
          Para utilizar el accesorio de reflexión especular de 5°/45° y la celda rectangular de 10 mm, estos accesorios deben adquirirse por separado.
          <br><br>
          <h4>Hardware</h4>
          <h5>Incorporación de doble monocromador.</h5>
          Gracias al montaje de un monocromador doble que utiliza la rejilla de difracción cóncava estigmática original de Hitachi, se garantiza una linealidad excelente hasta concentraciones elevadas. Por tanto, es posible un análisis cuantitativo altamente fiable.
          Modelo: U-3900H<br>
          Velocidad de escaneo: 300 nm/min<br>
          Rendija: 2 nm
          <br><br>
          <h5>Eficaz en la medición de muestras traza</h5>
          Se puede lograr una medición satisfactoria incluso con celdas de micromuestras de 5, 25 y 50 µL porque el haz converge finamente en el compartimento de la muestra. Aquí se muestran los espectros determinados en la región ultravioleta midiendo la adenosina del ácido nucleico con una micromuestra celular (volumen interno de 25 µL). Se obtuvo una alta relación S/N.
          Modelo: U-3900<br>
          Velocidad de escaneo: 300 nm/min<br>
          Rendija: 2 nm
          <br><br>
          <h4>Software</h4>
          Las siguientes son algunas de las funciones relevantes para la operatividad del software.
          <h5>Comparación sencilla de datos de medición</h5>
          Permite la comparación mediante la superposición de datos medidos o la comparación mediante valores Abs de una longitud de onda específica (se pueden comparar doce longitudes de onda especificadas para hasta diez espectros).
          <br><br>
          <h5>Función de lectura de archivos con vista previa</h5>
Un botón de lectura de archivos con vista previa permite revisar hasta dos datos diferentes sin abrir un archivo de datos.`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro01_1,
          typeProduct: {
            name: "Espectrofotómetro",
            keyname: "espectrofotometro",
          },
          categoryProduct: {
            name: "Espectrofotómetro",
            keyname: "espectrofotometro",
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
