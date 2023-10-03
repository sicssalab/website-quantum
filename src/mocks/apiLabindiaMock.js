import logo from "../assets/LOGO-MARCAS-PROVEEDORES/labindia.jpeg";

import main1 from "../assets/landings/velp/home/main.jpeg"
import main2 from "../assets/landings/velp/home/main2.jpeg"

import pro01_1 from "../assets/landings/labindia/productos/probador/DS-14000/1.webp";
import pro02_1 from "../assets/landings/labindia/productos/probador/ds-14000-bomba-piston/1.png";
import pro03_1 from "../assets/landings/labindia/productos/probador/ds-14000-bomba-smart-piston/1.png";
import pro04_1 from "../assets/landings/labindia/productos/probador/ds-14000-peristaltica/1.webp";
import pro05_1 from "../assets/landings/labindia/productos/probador/ds-14000-smart/1.png";
import pro06_1 from "../assets/landings/labindia/productos/probador/ds-14000-basico/1.png";
import pro07_1 from "../assets/landings/labindia/productos/probador/ds800plus-piston/1.webp";
import pro08_1 from "../assets/landings/labindia/productos/probador/ds800plus-piston-sencillo/1.png";
import pro09_1 from "../assets/landings/labindia/productos/probador/ds800plus-jeringa/1.png";
import pro10_1 from "../assets/landings/labindia/productos/probador/ds8000-smart-piston/1.png";
import pro11_1 from "../assets/landings/labindia/productos/probador/ds8000-smart-basico/1.png";
import pro12_1 from "../assets/landings/labindia/productos/probador/ds-8000-basico/1.png";
import pro13_1 from "../assets/landings/labindia/productos/probador/kit-herramientras/1.avif";
import pro14_1 from "../assets/landings/labindia/productos/probador/ds8000peristaltica/1.png";
import pro15_1 from "../assets/landings/labindia/productos/accesorios/1.avif";
import pro16_1 from "../assets/landings/labindia/productos/desintegracion/dt1000plus/1.webp";
import pro17_1 from "../assets/landings/labindia/productos/desintegracion/dt1000/1.webp";
import pro18_1 from "../assets/landings/labindia/productos/probador/ft1020/1.webp";
import pro19_1 from "../assets/landings/labindia/productos/probador/td1025/1.webp";
import pro20_1 from "../assets/landings/labindia/productos/probador/th2050s/1.webp";
import pro21_1 from "../assets/landings/labindia/productos/probador/th1050s-plus/1.webp";
import pro22_1 from "../assets/landings/labindia/productos/probador/th12-smart/1.webp";
import pro23_1 from "../assets/landings/labindia/productos/probador/th2050s/1.webp";
import pro24_1 from "../assets/landings/labindia/productos/probador/th1050m/1.webp";
import pro25_1 from "../assets/landings/labindia/productos/valorador/kafi-smart/1.webp";
import pro26_1 from "../assets/landings/labindia/productos/valorador/titra-smart/1.webp";
import pro27_1 from "../assets/landings/labindia/productos/valorador/titra-plus/1.avif";
import pro28_1 from "../assets/landings/labindia/productos/valorador/kafi-plus/1.webp";
import pro29_1 from "../assets/landings/labindia/productos/medidor-ph/pico/1.webp";
import pro30_1 from "../assets/landings/labindia/productos/medidor-ph/ph-fan/1.webp";
import pro31_1 from "../assets/landings/labindia/productos/medidor-ph/ph-pico/1.webp";
import pro32_1 from "../assets/landings/labindia/productos/medidor-ph/pico-ph/1.webp";
import pro33_1 from "../assets/landings/labindia/productos/aparato-punto-de-fusion/1.avif";
import pro34_1 from "../assets/landings/labindia/productos/prueba-de-fugas/lt1001/1.avif";
import pro35_1 from "../assets/landings/labindia/productos/prueba-de-fugas/usp-4/1.png";

const apiSelcaEscondidaMock = {
  items: [
    {
      type: "header-component",
      title: "Labindia",
      isLanding: true,
      socialNetwork: [
        {
          alt: "red network",
          link: "https://www.facebook.com/LabindiaAnalytical",
          type: "facebook",
        },
        {
          alt: "red network",
          link: "https://www.youtube.com/channel/UC34XxL56wtWO7mNWz1I7bMA",
          type: "youtube",
        },
        {
          alt: "red network",
          link: "https://www.linkedin.com/company/labindia-analytical-instruments",
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
      title: "Labindia",
      logoUrl: "",
      description: `Labindia Analytical es fabricante, exportador y distribuidor líder desde hace más de 30 años, liderado por un grupo de tecnócratas, ingenieros y profesionales comprometidos y visionarios.`,
      videoLink: "GYmE3bZ9FJg",
    },
    {
      type: "gallery-residential-component",
      title: "Innovación",
      description:
        "Labindia Analytical fue pionera en el centro de capacitación y aplicaciones, equipado con instalaciones de investigación ultramodernas y soporte profesional para aplicaciones. Además de la fabricación de aparatos de disolución, medidores de pH, medidores de conductividad, valoradores, etc., que encuentran aplicación en casi todas las industrias como farmacéutica, química, alimentaria, petroquímica, lubricantes, bebidas, efluentes, pinturas, etc., tanto en los departamentos de control de calidad como de I+D. Hoy estamos orgullosos de tener la gama de productos más completa y la experiencia en la mayoría de los sectores del mercado.",
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
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de disolución DS 14000+ con bomba de jeringa",
          description: "El aparato de prueba de disolución de tabletas DS 14000 con bomba de jeringa ofrece características avanzadas como un sistema completo de muestreo fuera de línea de disolución que consta de un sistema de bomba de jeringa múltiple de 12 puertos con un motor paso a paso patentado de alta eficiencia y sin mantenimiento que permite realizar pruebas de larga duración.",
          descriptionLong: `El aparato de prueba de disolución de tabletas DS 14000 con bomba de jeringa ofrece características avanzadas como un sistema completo de muestreo fuera de línea de disolución que consta de un sistema de bomba de jeringa múltiple de 12 puertos con un motor paso a paso patentado de alta eficiencia y sin mantenimiento que permite realizar pruebas de larga duración.
          <br><br>
          En este aparato de prueba de disolución se pueden almacenar 15 métodos con parámetros y se puede iniciar la disolución con los últimos parámetros de ejecución. La configuración permite realizar dos corridas diferentes al mismo tiempo con condiciones idénticas. En caso de un corte de energía, el sistema de prueba de disolución reinicia la ejecución donde la había dejado.
          <br><br>
          El sistema de prueba de disolución Labindia DS 14000 con bomba de jeringa cumple al 100% con las normas USP, BP, EP, IP y cumple con las especificaciones de acuerdo con la calibración mecánica de la FDA.
          <br><br>
          <h5>Características estándar del probador de disolución DS 14000+ con bomba de jeringa</h5>
          <ul>
          <li>Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP, EP y ASTM.</li>
          <li>Teclas programables de poliéster alfanuméricas para teclado.</li>
          <li>Circulador de agua externo sin vibraciones para una circulación uniforme del agua con alarma audible y de bajo nivel de agua.</li>
          <li>El diseño de eje único con ajuste automático para una configuración de profundidad de 25 mm con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Los remos, cestas y embarcaciones están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador de tabletas deja caer 12 formas farmacéuticas de una sola vez.</li>
          <li>Instalación para monitorear temperatura de embarcación, con Tecnología DTS (Sensor de Temperatura Digital)</li>
          <li>Fácil colocación y bloqueo de vasos, el sistema Ease-align permite que los vasos simplemente se deslicen en su lugar (Bionet Locking)</li>
          </ul>
          <h5>Sistema de muestreo inteligente</h5>
          <ul>
          <li>Muestreo automatizado según especificaciones USP. Los tubos de muestreo se sumergen en el medio sólo en el momento del muestreo y se retiran inmediatamente después del muestreo, por lo que ninguna parte del conjunto contribuye con movimiento, agitación o vibración (500, 750, 900 y 1000 ml).</li>
          <li>Los tubos de muestreo se mueven con precisión a la posición de muestreo USP, es decir, una zona a mitad de camino entre la superficie del medio y la parte superior de los parámetros de la paleta/canasta, a no menos de 1 cm de la pared del recipiente, según lo seleccionado en el método.</li>
          <li>El sistema de monitoreo de temperatura de 12 tazones mide y registra automáticamente la temperatura de un recipiente individual en puntos de muestra específicos.</li>
          </ul>
          <h5>Coleccion de muestra</h5>
          <ul>
          <li>Se pueden recolectar 12 x 6 x 2 juegos de muestras. Para un mayor intervalo de muestreo, hay disponibles bandejas de recolección de 24 X 6.</li>
          <li>Está disponible la opción de viales para HPLC de 1,5 ml y 2 ml.</li>
          <li>Diseño aéreo para seguridad electrónica y operación a prueba de fallas.</li>
          <li>Sensor para localizar la posición adecuada de la bandeja con alarma para la recolección de muestra.</li>
          <li>Vial de boca ancha para minimizar el problema de derrame de SLS debido a las características de formación de espuma.</li>
          </ul>
          <h5>Bomba de jeringa</h5>
          <ul>
          <li>Sistema de bomba de jeringas múltiples diseñado para la recolección automática de muestras de los recipientes de disolución del aparato de prueba de disolución Labindia DS 14000 + .</li>
          <li>Realice las tareas de Enjuague del recorrido del tubo de muestra, Reposición del volumen del medio en blanco en los tazones y Dilución de muestras (opcional para desarrollo futuro).</li>
          <li>Controlado a través del controlador de instrumentos de disolución de Labindia con indicaciones de estado de funcionamiento en el panel frontal para información del usuario.</li>
          <li>Ruta de fluido inerte que consta de un tubo portador de teflón, jeringas de vidrio herméticas con émbolo de teflón y válvulas con cuerpo de PEEK.</li>
          <li>Sistema de accionamiento de motor paso a paso patentado de alta eficiencia y sin mantenimiento.</li>
          <li>Válvulas de corte rotativas de 4 puertos de larga duración con cuerpo de acero inoxidable.</li>
          <li>Precisión del volumen mejor que ±2%.</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 14000+ con bomba de jeringa cumple todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro02_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de disolución de tabletas DS 14000+ con bomba de pistón",
          description: "El probador de disolución de tabletas DS 14000 con bomba de pistón es una solución perfecta para pruebas de disolución de alto rendimiento. El muestreo automatizado según la farmacopea permite que los tubos de muestreo se bajen en el medio solo en el momento del muestreo y se retiren inmediatamente, de modo que ninguna parte del conjunto contribuya con movimiento, agitación o vibración.",
          descriptionLong: `El probador de disolución de tabletas DS 14000 con bomba de pistón es una solución perfecta para pruebas de disolución de alto rendimiento. El muestreo automatizado según la farmacopea permite que los tubos de muestreo se bajen en el medio solo en el momento del muestreo y se retiren inmediatamente, de modo que ninguna parte del conjunto contribuya con movimiento, agitación o vibración.
          <br><br>
          Este probador de disolución viene con una bomba de pistón de alta presión que puede tener altos caudales de hasta 25 ml/min con una precisión de hasta el 1 %. Diferentes opciones de recolección de muestras disponibles y todas las bandejas tienen sensor para ubicar la posición adecuada de la bandeja con alarma.
          <br><br>
          También hay una instalación de prueba de recuperación en el probador de disolución 14000 para verificar el 100% de la disolución del fármaco. Con muchas más funciones, el sistema de disolución de tabletas de labindia es uno de los mejores en términos de precio, calidad y rendimiento.
          <h5>Características estándar del probador de disolución DS 14000+ con bomba de pistón</h5>
          <ul>
          <li>Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP, EP y ASTM.</li>
          <li>Teclas programables de poliéster alfanuméricas para teclado.</li>
          <li>Circulador de agua externo sin vibraciones para una circulación uniforme del agua con alarma audible y de bajo nivel de agua.</li>
          <li>El diseño de eje único con ajuste automático para una configuración de profundidad de 25 mm con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Los remos, cestas y embarcaciones están marcados con láser con números de serie para su trazabilidad.</li>
          <li>Dispensador de tabletas deja caer 12 formas farmacéuticas en una sola instancia</li>
          <li>Instalación para monitorear temperatura de embarcación, con Tecnología DTS (Sensor de Temperatura Digital)</li>
          <li>Fácil colocación y bloqueo de vasos, el sistema Ease-align permite que los vasos simplemente se deslicen en su lugar (Bionet Locking)</li>
          </ul>
          <h5>Sistema de muestreo inteligente</h5>
          <ul>
          <li>Muestreo automatizado según especificaciones USP. Los tubos de muestreo se sumergen en el medio sólo en el momento del muestreo y se retiran inmediatamente después del muestreo, por lo que ninguna parte del conjunto contribuye con movimiento, agitación o vibración.</li>
          <li>Los tubos de muestreo se mueven con precisión a la posición de muestreo USP, es decir, una zona a mitad de camino entre la superficie del medio y la parte superior de los parámetros de la paleta/canasta, a no menos de 1 cm de la pared del recipiente, según lo seleccionado en el método.</li>
          <li>El sistema de monitoreo de temperatura de 12 recipientes mide y registra automáticamente la temperatura de cada recipiente en puntos de muestra específicos.</li>
          </ul>
          <h5>Sistema de bomba - PP 12</h5>
          <ul>
          <li>Bomba de pistón - PP 12 es ideal para la extracción de muestras de 12 canales.</li>
          <li>El rotor cerámico inerte supera todos los problemas de absorción.</li>
          <li>Precisión mejor que ±2%.(@10mL)</li>
          <li>Función de enjuague para reducir los problemas de arrastre.</li>
          <li>Compatibilidad con medios tensioactivos.</li>
          </ul>
          <h5>Coleccion de muestra</h5>
          <ul>
          <li>Se pueden recolectar conjuntos de muestras de 12 X 6 X2. Para un mayor intervalo de muestreo, hay disponibles bandejas de recolección de 24 X 6.</li>
          <li>Está disponible la opción de viales para HPLC de 1,5 ml y 2 ml.</li>
          <li>Diseño aéreo para seguridad electrónica y operación a prueba de fallas.</li>
          <li>Sensor para localizar la posición adecuada de la bandeja con alarma para la recogida de muestras.</li>
          <li>Vial de boca ancha para minimizar el problema de derrame de SLS debido a las características de formación de espuma.</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 14000+ con bomba de pistón cumple todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          <h5>Características adicionales</h5>
          <ul>
          <li>Instalación para ENJUAGAR toda la ruta de muestreo entre el tiempo de muestreo: punto para eliminar la contaminación y el arrastre</li>
          <li>Sistema de limpieza especialmente desarrollado para limpiar todo el recorrido de muestreo después de cada análisis.</li>
          <li>Instalaciones para realizar la prueba de disolución utilizando dos buffers (Cambio de buffer) para atender la aplicación de tabletas de recubrimiento entérico.</li>
          <li>Instalación de pruebas de recuperación para estudiar la disolución del fármaco al 100%.</li>
          <li>Intervalo de tiempo dividido y puntual</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro03_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de disolución de tabletas DS 14000 SMART con bomba de pistón",
          description: "El probador de disolución DS 14000 Smart con bomba de pistón es el núcleo de nuestro sistema de prueba de disolución. Se utiliza un sistema de muestreo inteligente donde los tubos de muestreo se mueven con precisión a la posición de muestreo USP. Para la recogida de muestras, está disponible la opción de viales estándar y viales de HPLC. Las agujas pueden perforar los septos y recoger las muestras para que no se derramen.",
          descriptionLong: `El probador de disolución DS 14000 Smart con bomba de pistón es el núcleo de nuestro sistema de prueba de disolución. Se utiliza un sistema de muestreo inteligente donde los tubos de muestreo se mueven con precisión a la posición de muestreo USP. Para la recogida de muestras, está disponible la opción de viales estándar y viales de HPLC. Las agujas pueden perforar los septos y recoger las muestras para que no se derramen.
          <br><br>
          Se garantizan 1 millón de ciclos para la bomba de pistón con fácil servicio y mantenimiento. El probador de disolución viene con el software 21 CFR Parte 11 como estándar con conectividad LAN para realizar copias de seguridad de datos en carpetas compartidas de la red. Palabra clave QWERTY para entradas de nombre de muestra, número de muestra y número de identificación para autenticación. Se pueden almacenar más de 1000 métodos gracias al gran tamaño de la memoria del aparato de disolución.
          <br><br>
          <h5>Características estándar del DS 14000 SMART con bomba de pistón</h5>
          <ul>
          <li>Advance Micro - controlador (Arm Core) Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP, EP y ASTM.</li>
          <li>El diseño de eje único con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Agitador automático con posicionamiento de 25 mm de profundidad (según USP)</li>
          <li>Los recipientes, los remos y la cesta están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador automático de tabletas deja caer 12 formas farmacéuticas en una sola instancia</li>
          <li>Las tapas de recuperación de baja evaporación de forma cónica reducen la pérdida de medios durante el largo plazo.</li>
          <li>Fácil colocación y bloqueo de vasos, el sistema Easealign permite que los vasos simplemente se deslicen en su lugar (Bionet Locking).</li>
          <li>Instalación para monitorear la temperatura del recipiente, con un sensor de temperatura digital externo</li>
          <li>Pantalla a color de alta resolución de 7'' con interfaz de pantalla táctil</li>
          <li>Circulador de agua de flujo libre de vibración externa</li>
          </ul>
          <h5>Cumplimiento de 21 CFR Parte 11</h5>
          <ul>
          <li>Registro de auditoría para todas las actividades con función de búsqueda, generación de informes e impresión.</li>
          <li>200 y más ID de usuario con entradas alfanuméricas de nombre de usuario, contraseña y selección de privilegios basados ​​en roles.</li>
          <li>Roles multinivel con protección, caducidad y complejidad con contraseña</li>
          <li>La autenticación del usuario se realiza para todas y cada una de las operaciones realizadas por el usuario.</li>
          <li>El archivo de informe PDF se puede crear mediante impresión.</li>
          <li>Funcionalidad de firma electrónica.</li>
          <li>Instalación de copia de seguridad y restauración de datos disponible.</li>
          <li>Conectividad LAN (Ethernet) para copia de seguridad de datos en una carpeta compartida de red</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 14000 SMART con bomba de pistón cumple con todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          <h5>Características adicionales</h5>
          <ul>
          <li>Software de validación integrado</li>
          <li>Instalación para ENJUAGAR toda la ruta de muestreo entre el tiempo de muestreo: punto para eliminar la contaminación y el arrastre</li>
          <li>Sistema de limpieza especialmente desarrollado para limpiar todo el recorrido de muestreo después de cada análisis.</li>
          <li>Instalaciones para realizar la prueba de disolución utilizando dos buffers (Cambio de buffer) para atender la aplicación de tabletas de recubrimiento entérico.</li>
          <li>Instalación de pruebas de recuperación para estudiar la disolución del fármaco al 100%.</li>
          <li>Intervalo de tiempo dividido y puntual</li>
          </ul>
          <h5>Sistema de muestreo inteligente</h5>
          <ul>
          <li>Muestreo automatizado según especificaciones USP. Los tubos de muestreo se sumergen en el medio sólo en el momento del muestreo y se retiran inmediatamente después del muestreo, por lo que ninguna parte del conjunto contribuye con movimiento, agitación o vibración.</li>
          <li>Los tubos de muestreo se mueven con precisión a la posición de muestreo USP, es decir, una zona a mitad de camino entre la superficie del medio y la parte superior de los parámetros de la paleta/canasta, a no menos de 1 cm de la pared del recipiente, según lo seleccionado en el método.</li>
          <li>El sistema de monitoreo de temperatura de 6 recipientes mide y registra automáticamente la temperatura de cada recipiente en puntos de muestra específicos.</li>
          <li>Tubo portador de fluoropolímero de PTFE inerte</li>
          </ul>
          <h5>Bomba de pistón - PP 12</h5>
          <ul>
          <li>Bomba de pistón - PP 12 es ideal para la extracción de muestras de 12 canales.</li>
          <li>La bomba de pistón PP 12 con rotor cerámico inerte supera todos los problemas de absorción.</li>
          <li>Precisión mejor que ± 2%(@10mL)</li>
          <li>Función de enjuague para reducir los problemas de arrastre.</li>
          <li>Compatibilidad con medios tensioactivos.</li>
          </ul>
          <h5>Coleccion de muestra</h5>
          <ul>
          <li>Se pueden recolectar juegos de muestras de 12 X 8 X2. Para un mayor intervalo de muestreo, hay disponibles bandejas de recolección de 24 X 8.</li>
          <li>Está disponible la opción de bandeja de 24 x 8 viales HPLC de 1,5 ml y 2 ml.</li>
          <li>Vial de boca ancha para minimizar el problema de derrame de SLS debido a la formación de espuma.</li>
          <li>Sensor de reconocimiento automático para bandeja con alarma para recolección de muestras</li>
          <li>Fácil posicionamiento con respecto a los viales o la bandeja de tubos de ensayo para facilitar el cambio</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro04_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de disolución de tabletas DS 14000 con bomba peristáltica",
          description: "Para un alto rendimiento, el probador de disolución de tabletas DS 14000 con bomba peristáltica es una solución perfecta para pruebas de disolución, ya que cumple con los últimos estándares USP, EP, BP e IP. Las paletas, cestas y ejes del probador de disolución están serializados para su trazabilidad.",
          descriptionLong: `Para un alto rendimiento, el probador de disolución de tabletas DS 14000 con bomba peristáltica es una solución perfecta para pruebas de disolución, ya que cumple con los últimos estándares USP, EP, BP e IP. Las paletas, cestas y ejes del probador de disolución están serializados para su trazabilidad.
          <br><br>
          El teclado alfanumérico del probador de disolución ayuda a controlar fácilmente todo el aparato de disolución. La eficiente y versátil bomba peristáltica de 24 canales de la marca suiza Ismatec transporta muestras desde los recipientes de disolución hasta el recolector de muestras con alta precisión. El diseño del casete Click n Go garantiza la longevidad de los tubos y la precisión de la muestra.  
          <br><br>
          El usuario puede realizar pruebas de disolución utilizando dos tampones para su aplicación como tabletas con cubierta entérica.
          <br><br>
          <h5>Características estándar del probador de disolución DS 14000 con bomba peristáltica</h5>
          <ul>
          <li>Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP, IP y EP y ASTM.</li>
          <li>Teclas programables de poliéster alfanuméricas para teclado.</li>
          <li>Circulador de agua externo sin vibraciones para una circulación uniforme del agua con alarma audible y de bajo nivel de agua.</li>
          <li>El diseño de eje único con ajuste automático para una configuración de profundidad de 25 mm con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Los remos, cestas y embarcaciones están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador de tabletas deja caer 12 formas farmacéuticas de una sola vez.</li>
          <li>Las tapas de recuperación de baja evaporación de forma cónica reducen la pérdida de medios durante tiradas largas.</li>
          <li>Instalación para monitorear temperatura de embarcación, con Tecnología DTS (Sensor de Temperatura Digital)</li>
          </ul>
          <h5>Características adicionales</h5>
          <ul>
          <li>Instalación para ENJUAGAR toda la ruta de muestreo entre los puntos de tiempo de muestreo para reducir la contaminación y el arrastre</li>
          <li>Sistema de limpieza especialmente desarrollado para limpiar todo el recorrido de muestreo después de cada ejecución.</li>
          <li>Instalaciones para realizar la prueba de disolución utilizando dos buffers (Cambio de buffer) para atender la aplicación de tabletas de recubrimiento entérico.</li>
          <li>Instalación de pruebas de recuperación para estudiar la disolución del fármaco al 100%.</li>
          <li>Intervalo de tiempo dividido y puntual</li>
          </ul>
          <h5>Sistema de muestreo inteligente</h5>
          <ul>
          <li>Muestreo automatizado según especificaciones USP. Los tubos de muestreo se sumergen en el medio sólo en el momento del muestreo y se retiran inmediatamente después del muestreo, por lo que ninguna parte del conjunto contribuye con movimiento, agitación o vibración.</li>
          <li>Los tubos de muestreo se mueven con precisión a la posición de muestreo USP, es decir, una zona a mitad de camino entre la superficie del medio y la parte superior de los parámetros de la paleta/cesta, a no menos de 1 cm de la pared del recipiente, según se selecciona en el método.</li>
          <li>El sistema de monitoreo de temperatura de 12 tazones mide y registra automáticamente la temperatura de un recipiente individual en puntos de muestra específicos.</li>
          </ul>
          <h5>Bomba peristáltica</h5>
          <ul>
          <li>Bomba importada con diseño de casete click-n-go para precisión de volumen.</li>
          <li>Tubos de bomba de longitud fija con tapón para mayor precisión del volumen de muestreo.</li>
          <li>Calibración de volumen a través de software.</li>
          <li>Tubos de bomba Tygon para SLS Compatibilidad con larga vida útil.</li>
          <li>Bomba importada con accionamiento planetario para un bombeo muy preciso.</li>
          <li>Alta repetibilidad en todos los canales.</li>
          <li>24 rodillos de acero inoxidable accionados activamente.</li>
          </ul>
          <h5>Coleccion de muestra</h5>
          <ul>
          <li>Se pueden recolectar 12 x 6 x 2 juegos de muestras. Para un mayor intervalo de muestreo, hay disponibles bandejas de recolección de 24 X 6.</li>
          <li>Está disponible la opción de viales para HPLC de 1,5 ml y 2 ml.</li>
          <li>Diseño aéreo para seguridad electrónica y operación a prueba de fallas.</li>
          <li>Sensor para localizar la posición adecuada de la bandeja con alarma para la recolección de muestra. Vial de boca ancha para minimizar el problema de derrame de SLS debido a las características de formación de espuma.</li>
          <li>Fácil posicionamiento con respecto a los viales o la bandeja de tubos de ensayo para facilitar el cambio</li>
          </ul>
          <h5>Software</h5>
          <ul>
          <li>Entradas alfanuméricas de nombre de muestra, número de muestra y número de identificación para autenticación.</li>
          <li>Reloj de tiempo real (RTC) incorporado para fecha y hora en pantalla e impresión.</li>
          <li>Número de ejecución incrementado automáticamente diariamente y NOMBRE DEL CLIENTE ingresado en fábrica con el número de serie del instrumento en las impresiones de informes</li>
          <li>Métodos de almacenamiento de memoria no volátil con parámetros.</li>
          <li>Protección con contraseña de dos niveles para administrador y usuario</li>
          <li>Los informes se pueden obtener incluso después de condiciones de reinicio/apagado/fallo de energía.</li>
          <li>La indicación de error ayuda al usuario a rastrear el problema.</li>
          <li>Indicación audible de estado listo del instrumento.</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 14000 con bomba peristáltica cumple con todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro05_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de Disolución de Tabletas DS 14000 (Básico) SMART",
          description: "El probador de disolución de tabletas Labindia DS14000 ofrece calidad comprobada para pruebas de disolución sencillas. El probador de disolución de tabletas Labindia DS 14000 está diseñado para admitir las especificaciones USP, BP, IP y JP. La configuración de embarcaciones 12+2 (6+1 y 6+1) permite realizar estudios comparativos.",
          descriptionLong: `El probador de disolución de tabletas Labindia DS14000 ofrece calidad comprobada para pruebas de disolución sencillas. El probador de disolución de tabletas Labindia DS 14000 está diseñado para admitir las especificaciones USP, BP, IP y JP. La configuración de embarcaciones 12+2 (6+1 y 6+1) permite realizar estudios comparativos.
          <br><br>
          El dispensador de tabletas automatizado permite dejar caer todas las tabletas simultáneamente al mismo tiempo de forma automática una vez que se alcanza la temperatura deseada.
          <br><br>
          Junto con el software compatible con 21 CFR Parte 11, la autenticación de usuario se realiza para todas y cada una de las operaciones realizadas por el usuario. Este probador de disolución también proporciona una función de copia de seguridad y restauración de datos con una firma electrónica disponible como estándar.
          <h5>Características estándar del probador de disolución DS 14000 (Básico) SMART</h5>
          <ul>
          <li>Advance Micro - controlador (Arm Core) Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP, EP y ASTM.</li>
          <li>El diseño de eje único con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Agitador automático con posicionamiento de 25 mm de profundidad (según USP)</li>
          <li>Los recipientes, los remos y la cesta están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador automático de tabletas deja caer 12 formas farmacéuticas en una sola instancia</li>
          <li>Las tapas de recuperación de baja evaporación de forma cónica reducen la pérdida de medios durante el largo plazo.</li>
          <li>Fácil colocación y bloqueo de vasos, el sistema Easealign permite que los vasos simplemente se deslicen en su lugar (Bionet Locking).</li>
          <li>Instalación para monitorear la temperatura del recipiente, con un sensor de temperatura digital externo</li>
          <li>Pantalla a color de alta resolución de 7'' con interfaz de pantalla táctil</li>
          <li>Circulador de agua de flujo libre de vibración externa</li>
          </ul>
          <h5>Software</h5>
          <ul>
          <li>Palabra clave QWERTY para entradas de nombre de muestra, número de muestra y número de identificación para autenticación.</li>
          <li>Reloj de tiempo real (RTC) incorporado para fecha y hora en pantalla e impresión.</li>
          <li>NOMBRE DEL CLIENTE ingresado en fábrica con el número de serie del instrumento en las impresiones de informes</li>
          <li>Métodos de almacenamiento de memoria no volátil con parámetros.</li>
          </ul>
          <h5>Cumplimiento de 21 CFR Parte 11</h5>
          <ul>
          <li>Registro de auditoría para todas las actividades con función de búsqueda, generación de informes e impresión.</li>
          <li>200 y más ID de usuario con entradas alfanuméricas de nombre de usuario, contraseña y selección de privilegios basados ​​en roles.</li>
          <li>Roles multinivel con protección, caducidad y complejidad con contraseña</li>
          <li>La autenticación del usuario se realiza para todas y cada una de las operaciones realizadas por el usuario.</li>
          <li>El archivo de informe PDF se puede crear mediante impresión.</li>
          <li>Funcionalidad de firma electrónica.</li>
          <li>Instalación de copia de seguridad y restauración de datos disponible.</li>
          <li>Conectividad LAN (Ethernet) para copia de seguridad de datos en una carpeta compartida de red</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 14000 (Basic) SMART cumple con todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro06_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de disolución de tabletas DS 14000 (Básico)",
          description: "El probador de disolución de tabletas Labindia DS14000 ofrece calidad comprobada teniendo en cuenta el presupuesto para pruebas de disolución sencillas. El probador de disolución de tabletas Labindia DS 14000 está diseñado para admitir las especificaciones USP, BP, IP y JP. La configuración de embarcaciones 12+2 (6+1 y 6+1) permite realizar estudios comparativos.",
          descriptionLong: `El probador de disolución de tabletas Labindia DS14000 ofrece calidad comprobada teniendo en cuenta el presupuesto para pruebas de disolución sencillas. El probador de disolución de tabletas Labindia DS 14000 está diseñado para admitir las especificaciones USP, BP, IP y JP. La configuración de embarcaciones 12+2 (6+1 y 6+1) permite realizar estudios comparativos.
          <br><br>
          Este probador de disolución cumple con las regulaciones actuales de USP, BP, IP, EP y la regulación ASTM de la FDA de EE. UU. El exclusivo circulador y calentador del baño de agua externo reduce la influencia de las vibraciones y proporciona una temperatura constante en el recipiente de disolución. Puerto paralelo para compatibilidad con impresora y PC para descarga de datos.
          <br><br>
          Todas estas y muchas más características hacen del probador de disolución DS 14000 un sistema básico perfecto.
          <br><br>
          <h5>Características estándar del probador de disolución DS 14000 (básico)</h5>
          <ul>
          <li>Fácil de usar, cumple con las especificaciones actuales de BP, IP, EP y ASTM.</li>
          <li>Teclas programables de poliéster alfanuméricas para teclado.</li>
          <li>Circulador de agua externo sin vibraciones para una circulación uniforme del agua con alarma audible y de bajo nivel de agua.</li>
          <li>El diseño de eje único con ajuste automático para una configuración de profundidad de 25 mm con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Los remos, cestas y embarcaciones están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador de tabletas (opcional) deja caer 12 formas farmacéuticas en una sola vez.</li>
          <li>Las tapas de recuperación de baja evaporación de forma cónica reducen la pérdida de medios durante el largo plazo.</li>
          <li>Instalación para monitorear temperatura de embarcación, con Tecnología DTS (Sensor de Temperatura Digital)</li>
          </ul>
          <h5>Software</h5>
          <ul>
          <li>Entradas alfanuméricas de nombre de muestra, número de muestra y número de identificación para autenticación.</li>
          <li>Reloj de tiempo real (RTC) incorporado para fecha y hora en pantalla e impresión.</li>
          <li>Número de ejecución incrementado automáticamente diariamente y NOMBRE DEL CLIENTE ingresado en fábrica con el número de serie del instrumento en las impresiones de informes</li>
          <li>Métodos de almacenamiento de memoria no volátil con parámetros.</li>
          <li>Protección con contraseña de dos niveles para administrador y usuario</li>
          <li>Los informes se pueden obtener incluso después de condiciones de reinicio/apagado/fallo de energía. La indicación de error ayuda al usuario a rastrear el problema.</li>
          <li>Indicación audible de estado listo del instrumento.</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 14000 (Básico) cumple con todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          <h5>Características adicionales</h5>
          <ul>
          <li>El sistema de monitoreo de temperatura de 12 tazones mide y registra automáticamente la temperatura de un recipiente individual en puntos de muestra específicos.</li>
          <li>Software de validación de RPM y temperatura.</li>
          <li>Instalación de pruebas de recuperación para estudiar la disolución del fármaco al 100%.</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro07_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de disolución de tabletas DS 8000+ con bomba de pistón y cambiador de filtro automático",
          description: "Las pruebas de disolución se consideran una de las pruebas de control de calidad más importantes realizadas en formas farmacéuticas. El probador de disolución Labindia DS 8000 se puede configurar con una bomba de pistón y un cambiador de filtro automático.",
          descriptionLong: `Las pruebas de disolución se consideran una de las pruebas de control de calidad más importantes realizadas en formas farmacéuticas. El probador de disolución Labindia DS 8000 se puede configurar con una bomba de pistón y un cambiador de filtro automático. La principal preocupación de los analistas es el proceso de filtración de la muestra después de su recolección. Por lo tanto, para superar esto, Labindia desarrolló el probador de disolución junto con la bomba y el cambiador de filtro para facilitar el procedimiento de prueba de disolución.
          <br><br>
          El cambiador de filtro automático FC 08 está controlado por el probador de disolución para la extracción de muestras de 6, 7 u 8 líneas. Se puede utilizar cualquier filtro de jeringa estándar de 0,45 micras con un diámetro de 25 mm. Se pueden almacenar hasta 96 filtros para un filtrado de muestras ininterrumpido para 16 puntos de muestreo. Los filtros usados ​​se eliminan automáticamente y se reemplazan por otros nuevos.
          <br><br>
          FC 08 se utiliza junto con la bomba de pistón de alta presión PP 08 con filtración de hasta filtros de jeringa de 0,2 micrones para análisis UPLC.
          <h5>Características estándar del probador de disolución DS 8000+ con bomba de pistón y cambiador de filtro</h5>
          <ul>
          <li>Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP, EP y ASTM. Teclas programables de poliéster alfanuméricas para teclado.</li>
          <li>Circulador de agua externo sin vibraciones para una circulación uniforme del agua con alarma audible y de bajo nivel de agua.</li>
          <li>El diseño de eje único con ajuste automático para una configuración de profundidad de 25 mm con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Los remos, cestas y embarcaciones están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador de tabletas deja caer 6 formas farmacéuticas de una sola vez.</li>
          <li>Instalación para monitorear temperatura de embarcación, con Tecnología DTS (Sensor de Temperatura Digital)</li>
          <li>Fácil colocación y bloqueo de vasos, el sistema Ease-align permite que los vasos simplemente se deslicen en su lugar (Bionet Locking)</li>
          </ul>
          <h5>Bomba de pistón-PP08</h5>
          <ul>
          <li>La bomba de pistón - PP 08 es ideal para la extracción de muestras de 6,7/8 canales.</li>
          <li>La bomba de pistón PP 08 con rotor cerámico inerte supera todos los problemas de absorción.</li>
          <li>Precisión mejor que ±2%.(@10mL)</li>
          <li>Función de enjuague para reducir los problemas de arrastre.</li>
          <li>Compatibilidad con medios tensioactivos.</li>
          </ul>
          <h5>Cambiador de filtro-FC 08</h5>
          <ul>
          <li>El cambiador de filtro automático FC 08 está controlado por microprocesador y está diseñado para filtrar 6, 7 u 8 líneas de muestreo simultáneamente.</li>
          <li>Accesorio para filtrado en línea de muestra antes de la recolección a través de filtros de jeringa</li>
          <li>FC 08 se utiliza junto con la bomba de pistón LABINDIA-PP 08 de alta presión con filtración</li>
          <li>Alta capacidad de almacenamiento: hasta 96 filtros a la vez brindan una recolección ininterrumpida de muestras filtradas para 16 puntos de muestreo.</li>
          <li>Sensores de canal individuales para garantizar que los filtros estén en su lugar.</li>
          <li>En caso de que falte el filtro de la jeringa, conmutación automática de las válvulas para recoger la muestra sin filtrar, con una indicación en la impresión.</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 8000+ con bomba de pistón y cambiador de filtro cumple con todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          <h5>Características adicionales</h5>
          <ul>
          <li>Software de validación incorporado.</li>
          <li>Instalación para ENJUAGAR toda la ruta de muestreo entre los momentos de muestreo para eliminar la contaminación y el arrastre</li>
          <li>Sistema de limpieza especialmente desarrollado para limpiar todo el recorrido de muestreo después de cada ejecución.</li>
          <li>Instalaciones para realizar la prueba de disolución utilizando dos buffers (Cambio de buffer) para atender la aplicación de tabletas de recubrimiento entérico.</li>
          <li>Instalación de pruebas de recuperación para estudiar la disolución del fármaco al 100%.</li>
          <li>Intervalo de tiempo dividido y puntual</li>
          </ul>
          <h5>Sistema de muestreo inteligente</h5>
          <ul>
          <li>Muestreo automatizado según especificaciones USP. Los tubos de muestreo se sumergen en el medio sólo en el momento del muestreo y se retiran inmediatamente después del muestreo, por lo que ninguna parte del conjunto contribuye con movimiento, agitación o vibración.</li>
          <li>Los tubos de muestreo se mueven con precisión a la posición de muestreo USP, es decir, una zona a mitad de camino entre la superficie del medio y la parte superior de los parámetros de la paleta/canasta, a no menos de 1 cm de la pared del recipiente, según lo seleccionado en el método.</li>
          <li>El sistema de monitoreo de temperatura de 6 recipientes mide y registra automáticamente la temperatura de cada recipiente en puntos de muestra específicos</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro08_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de disolución de tabletas DS 8000+ con bomba de pistón",
          description: "El probador de disolución Labindia DS 8000 con bomba de pistón es una solución de prueba de disolución semiautomática perfecta para realizar una disolución de fármacos precisa y eficiente.",
          descriptionLong: `El probador de disolución Labindia DS 8000 con bomba de pistón es una solución de prueba de disolución semiautomática perfecta para realizar una disolución de fármacos precisa y eficiente. El diseño de monoeje permite un fácil cambio entre el aparato I y el aparato II, por lo que elimina las comprobaciones rutinarias de validación de altura según la farmacopea.
          <br><br>
          La bomba de pistón PP 08 está controlada por microprocesador y es ideal para la extracción de muestras de 6, 7 u 8 canales. Todos los tipos de medios, como los tensioactivos, son compatibles sin ningún efecto sobre los volúmenes de muestra. Este probador de disolución contiene un rotor cerámico inerte en la bomba de pistón PP 08 que supera todos los problemas de absorción.
          <br><br>
          El diseño superior del recolector de muestras brinda seguridad electrónica para una operación a prueba de fallas. Con una variedad de bandejas, el usuario tiene la flexibilidad de elegir entre tubos de ensayo o viales estándar que se pueden usar en pruebas de disolución.
          <br><br>
          <h5>Características estándar del probador de disolución de tabletas DS 8000+ con bomba de pistón</h5>
          <ul>
          <li>Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP, EP y ASTM.</li>
          <li>Teclas programables de poliéster alfanuméricas para teclado.</li>
          <li>Circulador de agua externo sin vibraciones para una circulación uniforme del agua con alarma audible y de bajo nivel de agua.</li>
          <li>El diseño de eje único con ajuste automático para una configuración de profundidad de 25 mm con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Los remos, cestas y embarcaciones están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador de tabletas deja caer 6 formas farmacéuticas de una sola vez.</li>
          <li>Instalación para monitorear temperatura de embarcación, con Tecnología DTS (Sensor de Temperatura Digital)</li>
          <li>Fácil colocación y bloqueo de vasos, el sistema Ease-align permite que los vasos simplemente se deslicen en su lugar (Bionet Locking)</li>
          </ul>
          <h5>Coleccion de muestra</h5>
          <ul>
          <li>Se pueden recolectar conjuntos de muestras de 12 X 6 o 16 X 6. Para un mayor intervalo de muestreo, hay disponibles bandejas de recolección de 24 X 6.</li>
          <li>Está disponible la opción de viales para HPLC de 1,5 ml y 2 ml.</li>
          <li>Diseño aéreo para seguridad electrónica y operación a prueba de fallas.</li>
          <li>Sensor para localizar la posición adecuada de la bandeja con alarma para la recogida de muestras.</li>
          <li>Vial de boca ancha para minimizar el problema de derrame de SLS debido a las características de formación de espuma.</li>
          </ul>
          <h5>Sistema de bomba - PP 08</h5>
          <ul>
          <li>La bomba de pistón - PP 08 es ideal para la extracción de muestras de 6,7/8 canales.</li>
          <li>La bomba de pistón PP 08 con rotor cerámico inerte supera todos los problemas de absorción.</li>
          <li>Precisión mejor que ±2%.(@10mL)</li>
          <li>Función de enjuague para reducir los problemas de arrastre.</li>
          <li>Compatibilidad con medios tensioactivos.</li>
          </ul>
          <h5>Sistema de muestreo inteligente</h5>
          <ul>
          <li>Muestreo automatizado según especificaciones USP. Los tubos de muestreo se sumergen en el medio sólo en el momento del muestreo y se retiran inmediatamente después del muestreo, por lo que ninguna parte del conjunto contribuye con movimiento, agitación o vibración.</li>
          <li>Los tubos de muestreo se mueven con precisión a la posición de muestreo USP, es decir, una zona a medio camino entre la superficie del medio y la parte superior de los parámetros de la paleta/canasta, a no menos de 1 cm de la pared del recipiente, según se selecciona en el método.</li>
          <li>El sistema de monitoreo de temperatura de 6 recipientes mide y registra automáticamente la temperatura de cada recipiente en puntos de muestra específicos.</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 8000+ con bomba de pistón cumple todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          <h5>Características adicionales</h5>
          <ul>
          <li>Software de validación incorporado.</li>
          <li>Instalación para ENJUAGAR toda la ruta de muestreo entre el tiempo de muestreo: punto para eliminar la contaminación y el arrastre</li>
          <li>Instalaciones para realizar la prueba de disolución utilizando dos buffers (Cambio de buffer) para atender la aplicación de tabletas de recubrimiento entérico.</li>
          <li>Instalación de pruebas de recuperación para estudiar la disolución del fármaco al 100%.</li>
          <li>Intervalo de tiempo dividido y puntual</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro09_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de disolución de tabletas DS 8000+ con bomba de jeringa",
          description: "El probador de disolución de tabletas Labindia DS 8000 con bomba de jeringa es un sistema semiautomático ideal para las pruebas de rutina. El software interactivo del usuario en modo de diálogo garantiza la facilidad de operación con protección contra entradas no válidas.",
          descriptionLong: `El probador de disolución de tabletas Labindia DS 8000 con bomba de jeringa es un sistema semiautomático ideal para las pruebas de rutina. El software interactivo del usuario en modo de diálogo garantiza la facilidad de operación con protección contra entradas no válidas.
          <br><br>
          El sistema de bomba de jeringa se puede configurar para 6, 7 u 8 jeringas para muestreo. La ruta del fluido inerte consta de tubos portadores de teflón, jeringas de vidrio herméticas con filtro de teflón y válvulas de cuerpo de PEEK.
          <br><br>
          Los métodos de calibración y validación están integrados para facilitar la operación. Todos los informes y datos se pueden imprimir con una impresora utilizando un puerto paralelo o serie.
          <br><br>
          <h5>Características estándar del probador de disolución DS 8000+ con bomba de jeringa</h5>
          <ul>
          <li>Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP y EP y ASTM.</li>
          <li>Teclas programables de poliéster alfanuméricas para teclado.</li>
          <li>Circulador de agua externo sin vibraciones para una circulación uniforme del agua con alarma audible y de bajo nivel de agua.</li>
          <li>El diseño de eje único con ajuste automático para una configuración de profundidad de 25 mm con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Los remos, cestas y embarcaciones están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador de tabletas deja caer 6 formas farmacéuticas de una sola vez.</li>
          <li>Instalación para monitorear temperatura de embarcación, con Tecnología DTS (Sensor de Temperatura Digital)</li>
          <li>Fácil colocación y bloqueo de vasos, el sistema Ease-align permite que los vasos simplemente se deslicen en su lugar (Bionet Locking)</li>
          </ul>
          <h5>Sistema de muestreo inteligente</h5>
          <ul>
          <li>Muestreo automatizado según especificaciones USP. Los tubos de muestreo se sumergen en el medio sólo en el momento del muestreo y se retiran inmediatamente después del muestreo, por lo que ninguna parte del conjunto contribuye con movimiento, agitación o vibración (500, 750, 900 y 1000 ml).</li>
          <li>Los tubos de muestreo se mueven con precisión a la posición de muestreo USP, es decir, una zona a mitad de camino entre la superficie del medio y la parte superior de los parámetros de la paleta/canasta, a no menos de 1 cm de la pared del recipiente, según lo seleccionado en el método.</li>
          <li>El sistema de monitoreo de temperatura de 6 recipientes mide y registra automáticamente la temperatura de cada recipiente en puntos de muestra específicos.</li>
          <li>Colector de llenado de jeringa (se pueden insertar filtros de jeringa desechables de 8 números) (OPCIONAL)</li>
          </ul>
          <h5>Bomba de jeringa</h5>
          <ul>
          <li>Sistema de bomba de jeringas múltiples diseñado para la recolección automática de muestras de los recipientes de disolución del aparato Labindia Dissolution Test+ DS8000.</li>
          <li>Realice las tareas de enjuague de la ruta del tubo de muestra, reposición del volumen del medio en blanco en los tazones y dilución de muestras (opcional para desarrollo futuro).</li>
          <li>Controlado a través del controlador del instrumento de disolución de Labindia con indicaciones de estado de funcionamiento en el panel frontal para información del usuario.</li>
          <li>Ruta de fluido inerte que consta de un tubo portador de teflón, jeringas de vidrio herméticas con émbolo de teflón y válvulas con cuerpo de PEEK.</li>
          <li>Sistema de accionamiento de motor paso a paso patentado de alta eficiencia y sin mantenimiento.</li>
          <li>Válvulas de corte rotativas de 4 puertos de larga duración con cuerpo de acero inoxidable</li>
          <li>Precisión del volumen mejor que ±2%.</li>
          </ul>
          <h5>Coleccion de muestra</h5>
          <ul>
          <li>Se pueden recolectar conjuntos de muestras de 10 X 6 o 16 X 6. Para un mayor intervalo de muestreo, hay disponibles bandejas de recolección de 24 X 6.</li>
          <li>Está disponible la opción de bandeja de viales de HPLC de 1,5 ml y 2 ml.</li>
          <li>Diseño aéreo para seguridad electrónica y operación a prueba de fallas</li>
          <li>Sensor para localizar la posición adecuada de la bandeja con alarma para la recogida de muestras.</li>
          <li>Vial de boca ancha para minimizar el problema de derrame de SLS debido a las características de formación de espuma.</li>
          <li>Fácil posicionamiento con respecto a los viales o la bandeja de tubos de ensayo para facilitar el cambio</li>
          </ul>
          <h5>Software</h5>
          <ul>
          <li>Entradas alfanuméricas de nombre de muestra, número de muestra y número de identificación para autenticación.</li>
          <li>Reloj de tiempo real (RTC) incorporado para fecha y hora en pantalla e impresión.</li>
          <li>Número de ejecución incrementado automáticamente diariamente y NOMBRE DEL CLIENTE ingresado en fábrica con el número de serie del instrumento en las impresiones de informes</li>
          <li>Protección con contraseña de dos niveles para administrador y usuario</li>
          <li>Los informes se pueden obtener incluso después de condiciones de reinicio/apagado/fallo de energía.</li>
          <li>La indicación de error ayuda al usuario a rastrear el problema.</li>
          <li>Indicación audible de estado listo del instrumento.</li>
          <li>Software de validación para validar RPM, temperatura, volumen de muestreo y volumen de reposición.</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 8000+ con bomba de jeringa cumple todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          <h5>Características adicionales</h5>
          <ul>
          <li>Software de validación incorporado.</li>
          <li>Instalación para ENJUAGAR toda la ruta de muestreo entre el tiempo de muestreo: punto para eliminar la contaminación y el arrastre</li>
          <li>Instalaciones para realizar la prueba de disolución utilizando dos buffers (Cambio de buffer) para atender la aplicación de tabletas de recubrimiento entérico.</li>
          <li>Instalación de pruebas de recuperación para estudiar la disolución del fármaco al 100%.</li>
          <li>Intervalo de tiempo dividido y puntual</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro10_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de disolución de tabletas DS 8000 SMART con bomba de pistón",
          description: "El probador de disolución Labindia DS 8000 Smart con bomba de pistón es una solución semiautomática perfecta para realizar pruebas de disolución de fármacos precisas y eficientes.",
          descriptionLong: `El probador de disolución Labindia DS 8000 Smart con bomba de pistón es una solución semiautomática perfecta para realizar pruebas de disolución de fármacos precisas y eficientes. El probador de disolución DS 8000 tiene un sistema de monitoreo de temperatura de 6 recipientes que mide y registra automáticamente la temperatura de cada recipiente en puntos de muestra específicos.
          <br><br>
          Con el sistema de bomba de pistón de alta presión, el enjuague se realiza entre muestras para reducir los problemas de arrastre. La tecnología DTS para temperatura permite monitorear con precisión la temperatura del recipiente de disolución junto con un sensor de temperatura externo.
          <br><br>
          Al tener el software compatible con 21 CFR Parte 11, es fácil buscar e imprimir todas las actividades de seguimiento de auditoría. Roles de varios niveles para usuarios con protección, caducidad y complejidad de contraseña. Se pueden generar informes en PDF a través del sistema de prueba de disolución. Esto convierte al probador de disolución Labindia en el sistema de disolución completo y versátil disponible en el mercado.
          <br><br>
          <h5>Características estándar del probador de disolución DS 8000 SMART con bomba de pistón</h5>
          <ul>
          <li>Advance Micro - controlador (Arm Core) Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP, EP y ASTM.</li>
          <li>El diseño de eje único con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Agitador automático con posicionamiento de 25 mm de profundidad (según USP)</li>
          <li>Los recipientes, los remos y la cesta están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador automático de tabletas deja caer 6 formas farmacéuticas en una sola instancia</li>
          <li>Las tapas de recuperación de baja evaporación de forma cónica reducen la pérdida de medios durante el largo plazo.</li>
          <li>Fácil colocación y bloqueo de vasos, el sistema Easealign permite que los vasos simplemente se deslicen en su lugar (Bionet Locking).</li>
          <li>Instalación para monitorear la temperatura del recipiente, con un sensor de temperatura digital externo</li>
          <li>Pantalla a color de alta resolución de 7'' con interfaz de pantalla táctil</li>
          <li>Circulador de agua de flujo libre de vibración externa</li>
          </ul>
          <h5>Cumplimiento de 21 CFR Parte 11</h5>
          <ul>
          <li>Registro de auditoría para todas las actividades con función de búsqueda, generación de informes e impresión.</li>
          <li>200 y más ID de usuario con entradas alfanuméricas de nombre de usuario, contraseña y selección de privilegios basados ​​en roles.</li>
          <li>Roles multinivel con protección, caducidad y complejidad con contraseña</li>
          <li>La autenticación del usuario se realiza para todas y cada una de las operaciones realizadas por el usuario.</li>
          <li>El archivo de informe PDF se puede crear mediante impresión.</li>
          <li>Funcionalidad de firma electrónica.</li>
          <li>Instalación de copia de seguridad y restauración de datos disponible.</li>
          <li>Conectividad LAN (Ethernet) para copia de seguridad de datos en una carpeta compartida de red</li>
          </ul>
          <h5>Sistema de bomba - PP 08</h5>
          <ul>
          <li>Bomba de pistón: PP 08 está controlada por microprocesador y es ideal para la extracción de muestras de 6 canales.</li>
          <li>La bomba de pistón PP 08 con rotor cerámico inerte supera todos los problemas de absorción.</li>
          <li>Precisión mejor que ± 2%(@10mL)</li>
          <li>Función de enjuague para reducir los problemas de arrastre.</li>
          <li>Compatibilidad con medios tensioactivos.</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 8000 SMART con bomba de pistón cumple todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          <h5>Características adicionales</h5>
          <ul>
          <li>Software de validación integrado</li>
          <li>Instalación para ENJUAGAR toda la ruta de muestreo entre el tiempo de muestreo: punto para eliminar la contaminación y el arrastre</li>
          <li>Sistema de limpieza especialmente desarrollado para limpiar todo el recorrido de muestreo después de cada análisis.</li>
          <li>Instalaciones para realizar la prueba de disolución utilizando dos buffers (Cambio de buffer) para atender la aplicación de tabletas de recubrimiento entérico.</li>
          <li>Instalación de pruebas de recuperación para estudiar la disolución del fármaco al 100%.</li>
          <li>Intervalo de tiempo dividido y puntual</li>
          </ul>
          <h5>Sistema de muestreo inteligente</h5>
          <ul>
          <li>Muestreo automatizado según especificaciones USP. Los tubos de muestreo se sumergen en el medio sólo en el momento del muestreo y se retiran inmediatamente después del muestreo, por lo que ninguna parte del conjunto contribuye con movimiento, agitación o vibración.</li>
          <li>Los tubos de muestreo se mueven con precisión a la posición de muestreo USP, es decir, una zona a mitad de camino entre la superficie del medio y la parte superior de los parámetros de la paleta/canasta, a no menos de 1 cm de la pared del recipiente, según lo seleccionado en el método.</li>
          <li>El sistema de monitoreo de temperatura de 6 recipientes mide y registra automáticamente la temperatura de cada recipiente en puntos de muestra específicos.</li>
          <li>Tubo portador de fluoropolímero de PTFE inerte</li>
          </ul>
          <h5>Coleccion de muestra</h5>
          <ul>
          <li>Se pueden recolectar conjuntos de muestras de 18 X 8. Para un mayor intervalo de muestreo, hay disponibles bandejas de recolección de 24 X 8.</li>
          <li>Está disponible la opción de bandeja de 24 x 8 viales HPLC de 1,5 ml y 2 ml.</li>
          <li>Vial de boca ancha para minimizar el problema de derrame de SLS debido a la formación de espuma.</li>
          <li>Sensor de reconocimiento automático para bandeja con alarma para recolección de muestras</li>
          <li>Fácil posicionamiento con respecto a los viales o la bandeja de tubos de ensayo para facilitar el cambio</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro11_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de disolución de tabletas DS 8000 (Básico) SMART",
          description: "El nuevo probador de disolución DS 8000 Basic Smart utiliza la tecnología Advances Micro-controller (Arm Core) y cumple con las especificaciones actuales USP, IP, BP, EP. El probador de disolución inteligente tiene una pantalla a color de alta resolución de 7” con pantalla táctil.",
          descriptionLong: `El nuevo probador de disolución DS 8000 Basic Smart utiliza la tecnología Advances Micro-controller (Arm Core) y cumple con las especificaciones actuales USP, IP, BP, EP. El probador de disolución inteligente tiene una pantalla a color de alta resolución de 7” con pantalla táctil. La tecnología Ease align permite que los vasos simplemente se deslicen en el lugar para una fácil colocación y bloqueo.
          <br><br>
          El probador de disolución de tabletas DS 8000 (Básico) está diseñado exclusivamente para admitir USP 1,2,5 y 6. El circulador de agua externo con calentador no tiene vibraciones y garantiza una temperatura constante en todo el recipiente de disolución. El software es fácil de usar con 200 y más ID de usuario con entradas alfanuméricas de nombre de usuario, contraseña y selección de privilegios basados ​​en funciones.  
          <br><br>
          El probador de disolución de tabletas DS 8000 Basic smart cumple totalmente con las pautas 21 CFR Parte 11 y cumple con todos los requisitos relacionados con la validación, calibración y calificaciones junto con la documentación adecuada.
          <br><br>
          <h5>Características estándar del probador de disolución DS 8000 (Básico) SMART</h5>
          <ul>
          <li>Advance Micro - controlador (Arm Core) Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP, EP y ASTM.</li>
          <li>El diseño de eje único con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Agitador automático con posicionamiento de 25 mm de profundidad (según USP)</li>
          <li>Los recipientes, los remos y la cesta están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador automático de tabletas deja caer 6 formas farmacéuticas en una sola instancia</li>
          <li>Las tapas de recuperación de baja evaporación de forma cónica reducen la pérdida de medios durante el largo plazo.</li>
          <li>Fácil colocación y bloqueo de vasos, el sistema Easealign permite que los vasos simplemente se deslicen en su lugar (Bionet Locking).</li>
          <li>Instalación para monitorear la temperatura del barco, con un sensor de temperatura digital externo</li>
          <li>Pantalla a color de alta resolución de 7'' con interfaz de pantalla táctil</li>
          <li>Circulador de agua de flujo libre de vibración externa</li>
          </ul>
          <h5>Software</h5>
          <ul>
          <li>Palabra clave QWERTY para entradas de nombre de muestra, número de muestra y número de identificación para autenticación.</li>
          <li>Reloj de tiempo real (RTC) incorporado para fecha y hora en pantalla e impresión.</li>
          <li>NOMBRE DEL CLIENTE ingresado en fábrica con el número de serie del instrumento en las impresiones de informes</li>
          <li>Métodos de almacenamiento de memoria no volátil con parámetros.</li>
          </ul>
          <h5>Cumplimiento de 21 CFR Parte 11</h5>
          <ul>
          <li>Registro de auditoría para todas las actividades con función de búsqueda, generación de informes e impresión.</li>
          <li>200 y más ID de usuario con entradas alfanuméricas de nombre de usuario, contraseña y selección de privilegios basados ​​en roles.</li>
          <li>Roles multinivel con protección, caducidad y complejidad con contraseña</li>
          <li>La autenticación del usuario se realiza para todas y cada una de las operaciones realizadas por el usuario.</li>
          <li>El archivo de informe PDF se puede crear mediante impresión.</li>
          <li>Funcionalidad de firma electrónica.</li>
          <li>Instalación de copia de seguridad y restauración de datos disponible.</li>
          <li>Conectividad LAN (Ethernet) para copia de seguridad de datos en una carpeta compartida de red</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 8000 (Basic) SMART cumple con todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro12_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Probador de disolución de tabletas DS 8000 (Básico)",
          description: "Con calidad y tecnología comprobadas, los probadores de disolución en tabletas Labindia están diseñados para realizar pruebas de disolución sencillas teniendo también en cuenta el presupuesto.",
          descriptionLong: `Con calidad y tecnología comprobadas, los probadores de disolución en tabletas Labindia están diseñados para realizar pruebas de disolución sencillas teniendo también en cuenta el presupuesto. El probador de disolución de tabletas DS 8000 (Básico) está diseñado exclusivamente para admitir USP 1,2,5 y 6 y cumple con las especificaciones actuales de USP, BP, EP e IP.
          <br><br>
          El aparato de prueba de disolución de alta cabeza se puede configurar para una configuración de 6, 7 u 8 recipientes y el baño de agua moldeado tiene una salida para una fácil limpieza. El circulador de agua externo con calentador no vibra y garantiza una temperatura constante durante toda la prueba de disolución.
          <br><br>
          Esto convierte al probador de disolución DS 8000 en un modelo básico perfecto para pruebas de disolución.
          <br><br>
          <h5>Características estándar del probador de disolución DS 8000 (básico)</h5>
          <ul>
          <li>Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP, EP y ASTM.</li>
          <li>Teclas programables de poliéster alfanuméricas para teclado.</li>
          <li>Circulador de agua externo sin vibraciones para una circulación uniforme del agua con alarma audible y de bajo nivel de agua.</li>
          <li>El diseño de eje único con ajuste automático para una configuración de profundidad de 25 mm con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Los remos, cestas y embarcaciones están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador de tabletas (opcional) deja caer 6 formas farmacéuticas en una sola aplicación.</li>
          <li>Las tapas de recuperación de baja evaporación de forma cónica reducen la pérdida de medios durante tiradas largas.</li>
          <li>Instalación para monitorear temperatura de embarcación, con Tecnología DTS (Sensor de Temperatura Digital)</li>
          </ul>
          <h5>Software</h5>
          <ul>
          <li>Entradas alfanuméricas de nombre de muestra, número de muestra y número de identificación para autenticación.</li>
          <li>Reloj de tiempo real (RTC) incorporado para fecha y hora en pantalla e impresión.</li>
          <li>Número de ejecución incrementado automáticamente diariamente y NOMBRE DEL CLIENTE ingresado en fábrica con el número de serie del instrumento en las impresiones de informes</li>
          <li>Almacenamiento en memoria no volátil de 15 métodos con parámetros.</li>
          <li>Protección con contraseña de dos niveles para administrador y usuario</li>
          <li>Los informes se pueden obtener incluso después de condiciones de reinicio/apagado/fallo de energía.</li>
          <li>La indicación de error ayuda al usuario a rastrear el problema.</li>
          <li>Indicación audible de estado listo del instrumento.</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 8000 (Basic) cumple con todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          <h5>Características adicionales</h5>
          <ul>
          <li>El sistema de monitoreo de temperatura de 6 recipientes mide y registra automáticamente la temperatura de cada recipiente en puntos de tiempo de muestra específicos.</li>
          <li>Software de validación de RPM y temperatura.</li>
          <li>Instalación de pruebas de recuperación para estudiar la disolución del fármaco al 100%.</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro13_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Kit de herramientas de calibración mecánica del probador de disolución",
          description: "Labindia proporciona calificaciones mecánicas que cumplen con los procedimientos USP y ASTM.",
          descriptionLong: `Labindia proporciona calificaciones mecánicas que cumplen con los procedimientos USP y ASTM. El kit de herramientas de disolución proporciona una descripción de las mejores prácticas asociadas con la calibración mecánica y la prueba de verificación del rendimiento para los aparatos de disolución de paletas y cestas USP y los conjuntos de prueba. Las mejores prácticas se han desarrollado con base en la experiencia adquirida por el laboratorio de la USP y con sugerencias del Comité de Expertos en Biofarmacia de la USP. Si bien no es un estándar que requiere un cumplimiento estricto, el conjunto de herramientas de disolución tiene como objetivo proporcionar información que ayude al laboratorio de disolución en el esfuerzo por obtener resultados válidos de las pruebas de disolución.`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro14_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Aparato de disolución DS 8000 con bomba peristáltica",
          description: "El aparato de disolución de tabletas Labindia DS 8000 con bomba peristáltica es un sistema de prueba de disolución semiautomático ideal con muestreador automático que recolecta la muestra para su posterior análisis. La bomba peristáltica y el muestreador automático están controlados por el aparato de disolución.",
          descriptionLong: `El aparato de disolución de tabletas Labindia DS 8000 con bomba peristáltica es un sistema de prueba de disolución semiautomático ideal con muestreador automático que recolecta la muestra para su posterior análisis. La bomba peristáltica y el muestreador automático están controlados por el aparato de disolución.
          <br><br>
          La bomba peristáltica de 12 canales es de Ismatec, que está fabricada en Suiza para ofrecer alta precisión y larga durabilidad. Las muestras para las pruebas de disolución se pueden recolectar en tubos de ensayo, viales estándar o viales de HPLC.
          <br><br>
          El dispensador de tabletas con tapas de baja evaporación garantiza que no se pierdan medios durante tiradas largas. Todos los informes y datos se pueden imprimir con una impresora utilizando un puerto paralelo o serie.
          <h5>Características estándar del aparato de disolución DS 8000 con bomba peristáltica</h5>
          <ul>
          <li>Fácil de usar, cumple con las especificaciones actuales de USP, IP, BP y EP y ASTM.</li>
          <li>Teclas programables de poliéster alfanuméricas para teclado.</li>
          <li>Circulador de agua externo sin vibraciones para una circulación uniforme del agua con alarma audible y de bajo nivel de agua.</li>
          <li>El diseño de eje único con ajuste automático para una configuración de profundidad de 25 mm con fácil cambio entre los aparatos I y II elimina la validación de altura de rutina según la USP.</li>
          <li>Los remos, cestas y embarcaciones están marcados con láser con números de serie para su trazabilidad.</li>
          <li>El dispensador de tabletas deja caer 6 formas farmacéuticas de una sola vez.</li>
          <li>Las tapas de recuperación de baja evaporación de forma cónica reducen la pérdida de medios durante el largo plazo.</li>
          <li>Instalación para monitorear temperatura de embarcación, con Tecnología DTS (Sensor de Temperatura Digital)</li>
          </ul>
          <h5>Características adicionales</h5>
          <ul>
          <li>Instalación para ENJUAGAR toda la ruta de muestreo entre los puntos de muestreo para eliminar la contaminación y el arrastre</li>
          <li>Sistema de limpieza especialmente desarrollado para limpiar todo el recorrido de muestreo después de cada ejecución.</li>
          <li>Instalaciones para realizar la prueba de disolución utilizando dos buffers (Cambio de buffer) para atender la aplicación de tabletas de recubrimiento entérico.</li>
          <li>Instalación de pruebas de recuperación para estudiar la disolución del fármaco al 100%.</li>
          <li>Intervalo de tiempo dividido y puntual</li>
          </ul>
          <h5>Sistema de muestreo inteligente</h5>
          <ul>
          <li>Muestreo automatizado según especificaciones USP. Los tubos de muestreo se sumergen en el medio sólo en el momento del muestreo y se retiran inmediatamente después del muestreo, por lo que ninguna parte del conjunto contribuye con movimiento, agitación o vibración.</li>
          <li>Los tubos de muestreo se mueven con precisión a la posición de muestreo USP, es decir, una zona a medio camino entre la superficie del medio y la parte superior de los parámetros de la paleta/canasta, a no menos de 1 cm de la pared del recipiente, según se selecciona en el método.</li>
          <li>El sistema de monitoreo de temperatura de 6 recipientes mide y registra automáticamente la temperatura de cada recipiente en puntos de muestra específicos.</li>
          </ul>
          <h5>Bomba peristáltica</h5>
          <ul>
          <li>La bomba importada con diseño de casete "click-n-go" proporciona condiciones de oclusión definidas y repetibles.</li>
          <li>Tubo de bomba de longitud fija con tapón para mayor precisión del volumen de muestreo.</li>
          <li>Calibración de volumen a través de software.</li>
          <li>Tubería de bomba Tygon para SLS Compatibilidad con larga vida útil.</li>
          <li>Alta repetibilidad en todos los canales.</li>
          <li>12 rodillos de acero inoxidable accionados activamente.</li>
          </ul>
          <h5>Coleccion de muestra</h5>
          <ul>
          <li>Se pueden recolectar conjuntos de muestras de 10 X 6 o 16 X 6. Para un mayor intervalo de muestreo, hay disponibles bandejas de recolección de 24 X 6.</li>
          <li>Está disponible la opción de bandeja de viales de HPLC de 1,5 ml y 2 ml.</li>
          <li>Diseño aéreo para seguridad electrónica y operación a prueba de fallas.</li>
          <li>Sensor para localizar la posición adecuada de la bandeja con alarma para la recolección de muestra.</li>
          <li>Vial de boca ancha para minimizar el problema de derrame de SLS debido a las características de formación de espuma.</li>
          <li>Fácil posicionamiento con respecto a los viales o la bandeja de tubos de ensayo para facilitar el cambio</li>
          </ul>
          <h5>Cumplimiento normativo</h5>
          <ul>
          <li>DS 8000 con bomba peristáltica cumple con todos los requisitos relacionados con la validación, calificación y calibración.</li>
          <li>Con el instrumento se pueden suministrar los documentos de calificación adecuados (IQ / OQ).</li>
          </ul>
          `,
          videoLink: "f6PqKMiJ-7o",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro15_1,
          typeProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          categoryProduct: {
            name: "Probador de disolución",
            keyname: "probador-de-disolucion",
          },
          name: "Accesorios de disolución",
          description: "Labindia ofrece una amplia gama de accesorios para probadores de disolución, incluidos recipientes de disolución, cestas (aparato USP 1), paletas (aparato USP 2), sondas de temperatura y muestreo, filtros y más.",
          descriptionLong: `Labindia ofrece una amplia gama de accesorios para probadores de disolución, incluidos recipientes de disolución, cestas (aparato USP 1), paletas (aparato USP 2), sondas de temperatura y muestreo, filtros y más.
          <br><br>
          Los accesorios bien diseñados amplían las capacidades de las máquinas Labindia y ayudan a los gerentes de control de calidad y analistas de disolución a obtener un mayor valor de sus inversiones y un mayor rendimiento de sus instalaciones de prueba.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro16_1,
          typeProduct: {
            name: "Probador de desintegración",
            keyname: "probador-de-desintegracion",
          },
          categoryProduct: {
            name: "Probador de desintegración",
            keyname: "probador-de-desintegracion",
          },
          name: "Desintegración de tabletas DT 1000+",
          description: "El probador de desintegración de tabletas DT 1000+ es la versión avanzada en la que las cestas se accionan individualmente y, por lo tanto, se pueden procesar dos conjuntos diferentes de muestras simultáneamente. Se puede registrar el tiempo de cada tableta.",
          descriptionLong: `El probador de desintegración de tabletas DT 1000+ es la versión avanzada en la que las cestas se accionan individualmente y, por lo tanto, se pueden procesar dos conjuntos diferentes de muestras simultáneamente. Se puede registrar el tiempo de cada tableta. Los sensores de temperatura externos verifican y muestran la temperatura de cada recipiente. En el probador de desintegración DT 1000+ también existe una disposición para identificar la posición de las tabletas desintegradas con números marcados con láser en el conjunto de la cesta.
          <br><br>
          Al final del recorrido, las cestas se estacionan automáticamente fuera del medio. Se pueden almacenar 20 métodos con dos niveles (Administrador y Usuario). Los datos se pueden descargar a una PC o imprimir a través del puerto serie o puerto paralelo.
          <h5>Características estándar del probador de desintegración 1000+</h5>
          <ul>
          <li>Cumple con las especificaciones actuales de USP, IP, BP y otras farmacopeas.</li>
          <li>En DT1000 + , Temporizador dual (las cestas tendrán temporizador individual) y accionamiento dual (cada cesta es accionada por accionamiento individual).</li>
          <li>Diseñado específicamente para su uso en el control de calidad y producción de cápsulas de gelatina y comprimidos recubiertos normales.</li>
          <li>Temperatura y tiempo programables.</li>
          <li>Baño de agua acrílico transparente moldeado con iluminación para una mejor visibilidad.</li>
          <li>Instalación de estacionamiento automático.</li>
          <li>Capacidad para prueba de desintegración de doble buffer.</li>
          <li>Alarma sonora de bajo nivel de agua con indicación en pantalla para mayor seguridad.</li>
          <li>Sensores de temperatura externos disponibles para vaso individual.</li>
          <li>Disposición para identificar la posición de la tableta desintegrada con números marcados con láser en el conjunto de la cesta.</li>
          <li>Provisión para bloquear el tiempo de desintegración de tabletas individuales mediante el uso de un teclado externo con números de cesta.</li>
          <li>Instalación de descarga de datos basada en PC utilizando el software EDC 21 a través de LAN (opcional)</li>
          </ul>
          `,
          videoLink: "BNGx_8rq3cc",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro17_1,
          typeProduct: {
            name: "Probador de desintegración",
            keyname: "probador-de-desintegracion",
          },
          categoryProduct: {
            name: "Probador de desintegración",
            keyname: "probador-de-desintegracion",
          },
          name: "Probador de desintegración de tabletas DT 1000",
          description: "El probador de desintegración de tabletas DT 1000 de Labindia es un instrumento simple y fácil de usar. Con un único temporizador para ambas cestas y un único accionamiento, es el modelo básico perfecto para cualquier tipo de prueba de desintegración. El baño de acrílico transparente moldeado tiene una iluminación para una mejor visibilidad. En el probador de desintegración DT 1000, la temperatura y el tiempo se pueden programar según el usuario.",
          descriptionLong: `El probador de desintegración de tabletas DT 1000 de Labindia es un instrumento simple y fácil de usar. Con un único temporizador para ambas cestas y un único accionamiento, es el modelo básico perfecto para cualquier tipo de prueba de desintegración. El baño de acrílico transparente moldeado tiene una iluminación para una mejor visibilidad. En el probador de desintegración DT 1000, la temperatura y el tiempo se pueden programar según el usuario.
          <br><br>
          Hay un teclado externo para bloquear el tiempo libre de tabletas individuales en las cestas. Todos los métodos y resultados se pueden imprimir a través de una impresora utilizando un puerto paralelo o un puerto serie. El probador de desintegración de tabletas DT 1000 cumple con las normas USP, IP, BP y Ph. Eur. Especificaciones. Diseño compatible con la farmacopea actual (USP <701>, USP <2040>, Ph. Eur. 2.9.1)
          <br><br>
          <h5>Características estándar del probador de desintegración de tabletas 1000</h5>
          <ul>
          <li>Cumple con las especificaciones actuales de USP, IP, BP y otras farmacopeas.</li>
          <li>En DT1000, Temporizador único para ambas cestas con accionamiento único.</li>
          <li>Diseñado específicamente para su uso en el control de calidad y producción de cápsulas de gelatina y comprimidos recubiertos normales.</li>
          <li>Temperatura y tiempo programables.</li>
          <li>Baño de agua acrílico transparente moldeado con iluminación para una mejor visibilidad.</li>
          <li>Instalación de estacionamiento automático.</li>
          <li>Capacidad para prueba de desintegración de doble buffer.</li>
          <li>Alarma sonora de bajo nivel de agua con indicación en pantalla para mayor seguridad.</li>
          <li>Sensores de temperatura externos disponibles para vaso individual.</li>
          <li>Disposición para identificar la posición de la tableta desintegrada con números marcados con láser en el conjunto de la cesta.</li>
          <li>Provisión para bloquear el tiempo de desintegración de tabletas individuales mediante el uso de un teclado externo con números de cesta.</li>
          <li>Instalación de descarga de datos basada en PC utilizando el software EDC 21 a través de LAN (opcional)</li>
          </ul>
          `,
          videoLink: "BNGx_8rq3cc",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro18_1,
          typeProduct: {
            name: "Probador de friabilidad",
            keyname: "probador-de-friabilidad",
          },
          categoryProduct: {
            name: "Probador de friabilidad",
            keyname: "probador-de-friabilidad",
          },
          name: "Probador de friabilidad de tabletas FT 1020",
          description: "El probador de friabilidad Labindia está diseñado según los estándares USP/EP/JP. La unidad está equipada con dos tambores acrílicos transparentes que giran a una velocidad de 25 RPM según la farmacopea.",
          descriptionLong: `
          El probador de friabilidad Labindia está diseñado según los estándares USP/EP/JP. La unidad está equipada con dos tambores acrílicos transparentes que giran a una velocidad de 25 RPM según la farmacopea. El probador de friabilidad permite programar un intervalo de tiempo específico o establecer un número de conteos/rotaciones. La pantalla indica el tiempo transcurrido o el recuento de revoluciones según el método seleccionado. El programa también permite ingresar los pesos para cálculos adicionales. No es necesario retirar ni abrir los tambores del probador de friabilidad para cargarlos; después de completar una prueba, las muestras se descargan automáticamente en una bandeja de muestras ubicada debajo de los tambores . Hay una interfaz de balanza para la transferencia del peso de la muestra y se puede conectar cualquier balanza de pesaje estándar.
          <h5>Características estándar del probador de friabilidad de tabletas</h5>
          <ul>
          <li>Cumple con las especificaciones actuales de USP, IP y otras farmacopeas.</li>
          <li>Ofrece un modo de conteo y tiempo.</li>
          <li>Descarga automática de la muestra en una bandeja de muestra individual después de completar cada ciclo.</li>
          <li>Inclinación de 10° de los tambores según la recomendación de la USP para tabletas de formas irregulares.</li>
          <li>Fácil sistema de carga frontal.</li>
          <li>Soporta tambor de friabilidad y tambor de abrasión.</li>
          <li>Cálculo de friabilidad - porcentaje de pérdida de peso.</li>
          <li>Interfaz de balanza para transferencia de peso de muestra.</li>
          </ul>
          `,
          videoLink: "IYFs05tI9yc",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro19_1,
          typeProduct: {
            name: "Probador de densidad",
            keyname: "probador-de-densidad",
          },
          categoryProduct: {
            name: "Probador de densidad",
            keyname: "probador-de-densidad",
          },
          name: "Probador de densidad de pulsación TD 1025",
          description: "El probador de densidad del grifo TD 1025 está diseñado para medir el volumen y/o la densidad del grifo de polvos, gránulos y otros productos similares.",
          descriptionLong: `El probador de densidad del grifo TD 1025 está diseñado para medir el volumen y/o la densidad del grifo de polvos, gránulos y otros productos similares. El probador de densidad del grifo viene con dos posiciones de grifo para 14 mm y 3 mm con soportes para cilindros que sostienen cilindros de vidrio de 100 ml y 250 ml.
          <br><br>
          Este instrumento calcula la densidad roscada, el índice de compresibilidad, el índice de Hausner y la densidad aparente. El diseño único del probador de densidad del grifo permite un movimiento de golpeteo y rotación simultáneos. El medidor de densidad TD 1025 se puede conectar a una balanza para transferir el peso de la muestra o a un PC para descargar los métodos. También están disponibles otros accesorios como cilindros de vidrio de 50 ml y 25 ml de volumen.
          <h5>Características estándar del probador de densidad del pulsación</h5>
          <ul>
          <li>Diseñado para cumplir con las especificaciones actuales de USP y ASTM para pruebas de densidad de grifo.</li>
          <li>Dos posiciones de roscado para 14 mm y 3 mm respectivamente con soportes para cilindros para sostener cilindros de 100 ml y 250 ml.</li>
          <li>El exclusivo movimiento simultáneo de golpeteo y rotación garantiza que el material se empaquete uniformemente.</li>
          <li>Calcula los resultados: densidad roscada, índice de compresibilidad, relación de Hausner y densidad aparente.</li>
          <li>Interfaz de balanza para transferencia de peso de muestra.</li>
          </ul>
          `,
          videoLink: "aE9g--e9Zn0",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro20_1,
          typeProduct: {
            name: "Probador de dureza",
            keyname: "probador-de-dureza",
          },
          categoryProduct: {
            name: "Probador de dureza",
            keyname: "probador-de-dureza",
          },
          name: "Durómetro de tabletas TH 2050S",
          description: "El carrusel de 24 puntos mide automáticamente los parámetros esenciales de las tabletas como el grosor, ancho, largo/diámetro y dureza. Este probador de dureza de tabletas permite al usuario probar 20 tabletas en una sola ejecución, lo cual es uno de los requisitos de la Farmacopea.",
          descriptionLong: `El carrusel de 24 puntos mide automáticamente los parámetros esenciales de las tabletas como el grosor, ancho, largo/diámetro y dureza. Este probador de dureza de tabletas permite al usuario probar 20 tabletas en una sola ejecución, lo cual es uno de los requisitos de la Farmacopea. El probador de dureza de tableta tiene una gran memoria de almacenamiento de datos no volátil que almacena hasta 99 métodos junto con los resultados del usuario y los datos de validación.
          <br><br>
          Los informes impresos de los resultados, los métodos del programa y los datos de validación o calibración cumplen con las especificaciones GLP. El usuario puede seleccionar la velocidad de desplazamiento lineal, lo que proporciona flexibilidad.
          <br><br>
          <h5>Características estándar del carrusel de 24 puntos</h5>
          <ul>
          <li>Diseño de producto de última generación fácil de usar basado en microcontrolador avanzado con teclado alfanumérico.</li>
          <li>Carrusel de 24 posiciones para medición automática de los parámetros de la tableta: ancho, grosor, longitud/diámetro y dureza. Cumple con el requisito de la Farmacopea de realizar pruebas con 20 comprimidos en una sola ejecución.</li>
          <li>Las cuchillas de barrido integradas limpian el recorrido de la tableta para eliminar piezas rotas, residuos y polvo.</li>
          <li>Gran memoria de almacenamiento de datos no volátil: 99 métodos, resultados de usuarios y datos de validación.</li>
          <li>La ejecución automática se puede realizar de forma continua hasta 1 - 99 tabletas. RUN se puede reiniciar en caso de un corte de energía o al reiniciar el sistema con los últimos parámetros de ejecución.</li>
          <li>Dos niveles: a] ADMIN yb] Protección con contraseña de USUARIO para la edición y validación de métodos.</li>
          <li>Protocolo de validación/calibración con verificación de dureza: calibración de celda de carga de 3 puntos con pesas estándar, ancho/largo/diámetro y calibración de espesor de 3 puntos con medidores de espesor estándar.</li>
          <li>Informes de impresión de conformidad con GLP de resultados, métodos de programa y datos de validación/calibración con interfaz de impresora de puerto paralelo incorporada.</li>
          <li>Interfaz dual RS 232 C incorporada para transferencia de datos para PC y balanza para transferencia de peso de tableta de muestra.</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro21_1,
          typeProduct: {
            name: "Probador de dureza",
            keyname: "probador-de-dureza",
          },
          categoryProduct: {
            name: "Probador de dureza",
            keyname: "probador-de-dureza",
          },
          name: "Durómetro TH 1050 S+",
          description: "Este durómetro está equipado con un software interactivo para el usuario en modo de diálogo que facilita la operación y brinda protección contra entradas no válidas.",
          descriptionLong: `Este durómetro está equipado con un software interactivo para el usuario en modo de diálogo que facilita la operación y brinda protección contra entradas no válidas. El diseño del durómetro TH 1050 S+ le permite realizar un análisis automático continuo de hasta 1-100 tabletas y mide simultáneamente los diferentes parámetros de las tabletas. Armado con un método de desplazamiento lineal, el usuario puede seleccionar la velocidad de 0,4 a 3,2 mm/s de este probador de dureza de tabletas.
          <br><br>
          El movimiento rápido de avance y retorno ahorra tiempo. Límite de tolerancia más/menos para criterios de aprobación/fallo con marca de estrella para valores fuera del límite.
          <br><br>
          <h5>Características estándar del TH 1050+</h5>
           <ul>
           <li>Diseño de producto de última generación, fácil de usar y basado en microcontrolador avanzado, con teclas programables alfanuméricas de poliéster impermeables a salpicaduras para teclado.</li>
           <li>Software interactivo de usuario en modo de diálogo para facilitar la operación con protección contra entradas no válidas.</li>
           <li>Pantalla ancha de 4 líneas x 40 caracteres con retroiluminación blanca.</li>
           <li>Carrusel de 12 posiciones para la transferencia automática de la tableta al lugar de medición. Medición simultánea de parámetros: espesor, longitud/diámetro y dureza. Facilidad para medir el ancho y transferir automáticamente el peso de la tableta.</li>
           <li>Las cuchillas barredoras integradas para eliminar piezas rotas, residuos y polvo del recorrido de la tableta.</li>
           <li>Ranura para un mejor posicionamiento de tabletas de muestra de forma oblonga.</li>
           <li>Almacenamiento de memoria no volátil: 99 métodos/recetas con parámetros con fácil desplazamiento.</li>
           <li>Entradas alfanuméricas del nombre de la muestra y del número de identificación/lote para autenticación.</li>
           <li>La ejecución automática se puede realizar de forma continua hasta 1-100 tabletas. La ejecución se puede reiniciar en caso de interrupción debido a un corte de energía.</li>
           <li>Método de desplazamiento lineal con velocidad seleccionable de 0,4 a 3,2 mm/seg.</li>
           <li>El movimiento rápido de avance y retorno del brazo rompedor ahorra tiempo de ejecución de la prueba.</li>
           <li>Número de ejecución diario incrementado automáticamente para la autenticación de cada ejecución de prueba.</li>
           <li>El NOMBRE DEL CLIENTE y el número de serie del instrumento ingresados ​​en fábrica en los datos del informe impreso hacen que el sistema sea infalible y cumpla con las BPL.</li>
           <li>Protección con contraseña de dos niveles para el funcionamiento del sistema a] ADMIN y b] USUARIO. Protección para fecha y hora, edición y validación de métodos.</li>
           <li>Memoria de identificación de 50 usuarios con nombre de usuario y contraseña con fácil desplazamiento.</li>
           <li>Reloj en tiempo real [RTC] incorporado para fecha y hora</li>
           </ul>
          `,
          videoLink: "HsscG7Ov8BY",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro22_1,
          typeProduct: {
            name: "Probador de dureza",
            keyname: "probador-de-dureza",
          },
          categoryProduct: {
            name: "Probador de dureza",
            keyname: "probador-de-dureza",
          },
          name: "Probador de dureza de tabletas - (TH 12 SMART)",
          description: "El probador de dureza de tableta TH12 Smart está equipado con una pantalla de alta resolución de 7 pulgadas con pantalla táctil capacitiva junto con un software interactivo para el usuario para facilitar la operación con protección contra entradas no válidas.",
          descriptionLong: `El probador de dureza de tableta TH12 Smart está equipado con una pantalla de alta resolución de 7 pulgadas con pantalla táctil capacitiva junto con un software interactivo para el usuario para facilitar la operación con protección contra entradas no válidas. El probador de dureza de tabletas (TH 12 SMART) puede realizar un análisis automático de hasta 1 a 100 tabletas; además, el análisis se puede reanudar incluso si se interrumpe por un corte de energía. La función Pausa y Reanudar le da al usuario tiempo para ajustar las tabletas.
          <br><br>
          El probador de dureza de tableta inteligente TH 12 tiene un límite de paso de varios niveles para detectar los valores de dureza, longitud/diámetro, espesor y ancho con marcas T1, T2, T3 para mostrar los valores fuera del límite. Está incorporado un completo sistema de quejas 21 CFR parte 11 con funciones como registro de auditoría, firma electrónica, contraseña multinivel, etc. Por motivos de seguridad, la autenticación del usuario se realiza para cada operación realizada por el usuario de este durómetro.
          <h5>Características estándar del durómetro de tabletas - (TH 12 SMART)</h5>
          <ul>
          <li>Pantalla de alta resolución de 7” con pantalla táctil capacitiva y software interactivo para el usuario para facilitar la operación con protección contra entradas no válidas.</li>
          <li>Facilidad para visualización de fecha y hora con reloj de tiempo real (RTC) incorporado</li>
          <li>Carousal de 12 posiciones para medición automática de los parámetros de la tableta</li>
          <li>Espesor, Largo / Diámetro, Peso, Ancho y. Dureza</li>
          <li>La ejecución automática se puede realizar de forma continua hasta 1-100 tabletas. La ejecución se puede reiniciar en caso de interrupción debido a un corte de energía.</li>
          <li>Entradas alfanuméricas de nombre de muestra e identificación/número de lote para autenticación</li>
          <li>Número de ejecución diario incrementado automáticamente para la autenticación de cada ejecución de prueba</li>
          <li>NOMBRE DEL CLIENTE ingresado en fábrica, ID del equipo con número de serie del instrumento en el informe</li>
          <li>Etapa del proceso, presione Detalles, ingrese comentarios con Identificación / Número de lote para obtener información adicional</li>
          <li>Límite de paso multinivel para valores detectados de dureza, longitud/diámetro, espesor y ancho con marcado T1, T2, T3 para valores fuera de límite</li>
          </ul>
          <h5>Calibración de dureza, espesor y longitud/diámetro/ancho:</h5>
          <ul>
          <li>Calibración y verificación de dureza: 3 puntos.</li>
          <li>Calibración y verificación de espesor: 3 puntos.</li>
          <li>Calibración de longitud/diámetro/ancho con 2 puntos y verificación con 3 puntos.</li>
          </ul>
          <h5>Función de recordatorio de calibración</h5>
          <ul>
          <li>Ejecución rápida para medición de ancho, espesor, largo/diámetro y dureza o todo.</li>
          <li>Las cuchillas de barrido integradas limpian el recorrido de la tableta para eliminar piezas rotas, residuos y polvo.</li>
          <li>Tableta Centrado automático para medir la longitud según el ancho/diámetro de la tableta.</li>
          <li>Ranura para un mejor posicionamiento de tabletas de forma oblonga.</li>
          <li>Función de parada de 'ejecución' para valor fuera del límite con alarma sonora e indicación de mensaje en pantalla.</li>
          <li>Se agregó la función 'Pausar' / 'Reanudar' mientras se mide la dureza para realizar una alineación adecuada de la tableta.</li>
          </ul>
          <h5>Cumplimiento de 21 CFR Parte 11</h5>
          <ul>
          <li>Registro de auditoría para todas las actividades con función de búsqueda, generación de informes e impresión</li>
          <li>200 y más ID de usuario con entradas alfanuméricas de nombre de usuario, contraseña y selección de privilegios basados ​​en roles</li>
          <li>Roles multinivel con protección por contraseña, caducidad y complejidad</li>
          <li>La autenticación del usuario se realiza para todas y cada una de las operaciones realizadas por el usuario.</li>
          <li>El archivo de informe PDF se puede crear mediante impresión</li>
          <li>La impresión USB elimina la necesidad de un puerto serie para conectarse al instrumento.</li>
          <li>El usuario también puede realizar impresiones en cualquier impresora local o de red.</li>
          <li>Funcionalidad de firma electrónica</li>
          <li>Instalación de copia de seguridad y restauración de datos disponible</li>
          <li>Conectividad LAN (Ethernet) para copia de seguridad de datos en una carpeta compartida de red</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro23_1,
          typeProduct: {
            name: "Probador de dureza",
            keyname: "probador-de-dureza",
          },
          categoryProduct: {
            name: "Probador de dureza",
            keyname: "probador-de-dureza",
          },
          name: "Probador de dureza de tabletas (TH 1050 S)",
          description: "El durómetro de tabletas TH 1050S tiene un carrusel de 12 posiciones que mide automáticamente el espesor, la longitud/diámetro, la dureza y el ancho de las tabletas. Las cuchillas barredoras integradas en el carrusel de 12 (TH 1050 S) ayudan a eliminar los pedazos rotos, los residuos y el polvo de las tabletas que se acumulan durante la prueba.",
          descriptionLong: `El durómetro de tabletas TH 1050S tiene un carrusel de 12 posiciones que mide automáticamente el espesor, la longitud/diámetro, la dureza y el ancho de las tabletas. Las cuchillas barredoras integradas en el carrusel de 12 (TH 1050 S) ayudan a eliminar los pedazos rotos, los residuos y el polvo de las tabletas que se acumulan durante la prueba. Por motivos de seguridad, el administrador y el usuario deben realizar un método de edición y validación de dos niveles. A través de este probador de dureza de tabletas, es posible realizar un procesamiento automático continuo de hasta 1 a 99 tabletas, lo que ayuda a ahorrar una cantidad considerable de tiempo al investigador.
          <h5>Características estándar del carrusel de 12 (TH 1050S)</h5>
          <ul>
          <li>Diseño de producto de última generación, fácil de usar y basado en microcontrolador avanzado, con teclas programables alfanuméricas de poliéster impermeables a salpicaduras para teclado. Software interactivo de usuario en modo de diálogo para facilitar la operación con protección contra entradas no válidas.</li>
          <li>Carrusel de 12 posiciones para medición automática de los parámetros de la tableta: espesor, longitud/diámetro y dureza. Las cuchillas de barrido integradas limpian el recorrido de la tableta para eliminar piezas rotas, residuos y polvo.</li>
          <li>Almacenamiento en memoria no volátil de 99 métodos con parámetros con entradas alfanuméricas de nombre de muestra y número de identificación para autenticación.</li>
          <li>La ejecución automática se puede realizar de forma continua hasta 1-99 tabletas. La ejecución se puede reiniciar en caso de corte de energía.</li>
          <li>El desplazamiento lineal de 0,8 mm/s con movimiento rápido de avance y retorno del brazo rompedor ahorra tiempo de ejecución.</li>
          <li>Número de ejecución incrementado automáticamente diariamente y NOMBRE DEL CLIENTE ingresado en fábrica con el número de serie del instrumento en el sistema de informes infalible y conformidad con GLP.</li>
          <li>Dos niveles: a] ADMIN y b] Protección con contraseña de USUARIO para la edición y validación de métodos. 10 usuarios pueden configurar con nombre y contraseña.</li>
          <li>Reloj de tiempo real integrado [RTC] para visualización de fecha y hora e impresión.</li>
          <li>Conectividad Ethernet mediante Módulo RE01 y Software de captura de datos EDC80 (Opcional)</li>
          <li>Ejecución rápida para espesor, longitud y dureza o medición de todos los parámetros en secuencia hasta 25 tabletas de muestra con información GLP.</li>
          </ul>
          `,
          videoLink: "HsscG7Ov8BY",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro24_1,
          typeProduct: {
            name: "Probador de dureza",
            keyname: "probador-de-dureza",
          },
          categoryProduct: {
            name: "Probador de dureza",
            keyname: "probador-de-dureza",
          },
          name: "Probador de dureza de tabletas | Estación única TH-1050M",
          description: "Probador de dureza de tableta (TH - 1050M) El probador de dureza de tableta viene con teclas programables de poliéster alfanuméricas a prueba de salpicaduras para teclado y está equipado con software interactivo para el usuario en modo de diálogo para facilitar las operaciones.",
          descriptionLong: `Probador de dureza de tableta (TH - 1050M) El probador de dureza de tableta viene con teclas programables de poliéster alfanuméricas a prueba de salpicaduras para teclado y está equipado con software interactivo para el usuario en modo de diálogo para facilitar las operaciones. Este probador de dureza de tabletas es un modelo básico perfecto para pruebas manuales de las propiedades físicas de las tabletas. Los cinco parámetros, como espesor, longitud, diámetro, dureza y ancho, se pueden medir simultáneamente.
          <br><br>
          Hay un reloj incorporado y una función para mostrar la fecha y la hora en el durómetro de tableta TH - 1050M. La ejecución automática se puede realizar de forma continua para hasta 99 tabletas. Cumpliendo con las Farmcopeas de US/EP/BP/IP.
          <h5>Características estándar del durómetro TH 1050 M</h5>
          <ul>
          <li>Diseño de producto de última generación, fácil de usar y basado en microcontrolador avanzado, con teclas programables alfanuméricas de poliéster impermeables a salpicaduras para teclado. Software interactivo de usuario en modo de diálogo para facilitar la operación con protección contra entradas no válidas.</li>
          <li>Estación única Medición automática de los parámetros de la tableta: espesor, ancho, diámetro/longitud, dureza, peso.</li>
          <li>Almacenamiento en memoria no volátil de 99 métodos con parámetros con entradas alfanuméricas de nombre de muestra y número de identificación para autenticación.</li>
          <li>La ejecución automática se puede realizar de forma continua hasta 1-99 tabletas. RUN se puede reiniciar en caso de un corte de energía o al reiniciar el sistema con los últimos parámetros de ejecución.</li>
          <li>El desplazamiento lineal de 0,8 mm/s con movimiento rápido de avance y retorno del brazo rompedor ahorra tiempo de ejecución.</li>
          <li>El número de ejecución incrementado automáticamente diariamente y el NOMBRE DEL CLIENTE ingresado en fábrica con el número de serie del instrumento en el informe hacen que el sistema sea infalible y cumpla con las BPL.</li>
          <li>Dos niveles: a] ADMIN y b] Protección con contraseña de USUARIO para la edición y validación de métodos. Se pueden configurar 25 usuarios con nombre y contraseña.</li>
          <li>Reloj de tiempo real integrado [RTC] para visualización de fecha y hora e impresión.</li>
          <li>Etapa de proceso y prensa de compresión núm. entrada, NMT, NLT y límite porcentual para valores detectados de espesor, diámetro/longitud y dureza con marca de estrella para valores fuera de límite.</li>
          <li>Protocolo de validación/calibración con verificación de dureza: calibración de celda de carga de 3 puntos con pesas estándar y calibración de diámetro/longitud con medidores estándar.</li>
          <li>Ejecución rápida para medición independiente de espesor, diámetro/longitud, dureza o todos los parámetros en secuencia hasta 25 tabletas de muestra con información GLP.</li>
          <li>La indicación de error en pantalla con alarma audible ayuda al usuario a rastrear el problema.</li>
          <li>Compatibilidad de impresoras para impresoras Deskjet, Inkjet y Dot-matrix.</li>
          </ul>
          `,
          videoLink: "HsscG7Ov8BY",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro25_1,
          typeProduct: {
            name: "Valoradores automáticos",
            keyname: "valoradores-automaticos",
          },
          categoryProduct: {
            name: "Valoradores automáticos",
            keyname: "valoradores-automaticos",
          },
          name: "Valorador automático Karl Fischer (KAFI + SMART)",
          description: "El valorador Karl Fischer KAFI Smart es la versión avanzada del KAFI+. Con una pantalla táctil de 7” e íconos fáciles de usar, es un instrumento ideal para cada laboratorio.",
          descriptionLong: `El valorador Karl Fischer KAFI Smart es la versión avanzada del KAFI+. Con una pantalla táctil de 7” e íconos fáciles de usar, es un instrumento ideal para cada laboratorio. Los conjuntos de buretas importados intercambiables rápidos con reconocimiento inteligente de sus diferentes tamaños de volumen brindan flexibilidad a los usuarios.
          <br><br>
          Con el software compatible con 21 CFR parte 11, los clientes pueden tener múltiples usuarios con protección por contraseña y varias opciones de privilegios. En KAFI Smart la autenticación de usuario se realiza para todas y cada una de las operaciones realizadas. También se pueden generar informes en PDF.
          <h5>Características estándar de Karl Fisher Kafi+ Smart</h5>
          <ul>
          <li>Diseño de producto de última generación, fácil de usar y basado en microcontrolador avanzado con software interactivo para el usuario para facilitar la operación con protección contra entradas no válidas.</li>
          <li>Conjuntos de buretas importados intercambiables rápidamente con reconocimiento inteligente de su tamaño de volumen. El factor de validación de la bureta para la corrección de dosificación está disponible para el volumen de punto final real.</li>
          <li>El sistema reconoce la conectividad adecuada de otros periféricos como bureta, agitador, electrodo, pendrive, etc. Da indicación en caso de conectividad incorrecta.</li>
          <li>Gran capacidad de memoria para almacenamiento de métodos con parámetros científicos adecuados que cumplan con GLP.</li>
          <li>Nombre de muestra y número de identificación con fecha y hora para autenticación. El número de ejecución incremental automático diario y el NOMBRE DEL CLIENTE y el No. Sr. del instrumento ingresados ​​en fábrica en las impresiones de informes hacen que el sistema sea infalible y compatible con GLP.</li>
          <li>Monitoreo rápido y neutralización automática de la fuga de humedad en el recipiente para mantenerlo listo para la siguiente titulación.</li>
          <li>Retraso del punto final de hasta 100 segundos para muestras con liberación lenta de humedad.</li>
          <li>Corrección de tasa de fuga en línea disponible.</li>
          <li>Agitador magnético de velocidad variable basado en microcontrolador con indicación digital.</li>
          </ul>
          <h5>CUMPLIMIENTO DE 21 CFR PARTE 11</h5>
          <ul>
          <li>Registro de auditoría para todas las actividades con función de búsqueda, generación de informes e impresión.</li>
          <li>200 ID de usuario con entradas alfanuméricas de nombre de usuario, contraseña y selección de privilegios basados ​​en roles.</li>
          <li>La autenticación del usuario se realiza para todas y cada una de las operaciones realizadas por el usuario.</li>
          <li>El archivo de informe PDF se puede crear mediante impresión.</li>
          <li>La impresión USB elimina la necesidad de un puerto serie para conectarse con el instrumento. El usuario puede realizar impresiones en la impresora a través de la conectividad WiFi.</li>
          <li>Funcionalidad de firma electrónica.</li>
          <li>Instalación de archivo manual y copia de seguridad de datos disponible.</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro26_1,
          typeProduct: {
            name: "Valoradores automáticos",
            keyname: "valoradores-automaticos",
          },
          categoryProduct: {
            name: "Valoradores automáticos",
            keyname: "valoradores-automaticos",
          },
          name: "Valorador automático potenciométrico (Titra Smart)",
          description: "La titulación o potenciómetro es un instrumento utilizado para el análisis químico cuantitativo. Titra smart cuenta con una calibración y estandarización automática de dos puntos (compensación de cero).",
          descriptionLong: `La titulación o potenciómetro es un instrumento utilizado para el análisis químico cuantitativo. Titra smart cuenta con una calibración y estandarización automática de dos puntos (compensación de cero). El Autotitrador potenciométrico Titra smart es capaz de mostrar el pH y mV de la muestra con compensación de temperatura. El recorrido del líquido comprende material de teflón y una bureta hermética al vidrio que crea un sistema químicamente inerte para cualquier análisis sensible.
          <br><br>
          El cumplimiento de 21 CFR parte 11 tiene un registro de auditoría que registra todas las actividades con función de búsqueda, generación de informes e impresión. También hay una función de firma electrónica en Titra smart. El valorador potenciométrico inteligente dispone de serie de un archivo manual y de una función de copia de seguridad de los datos.
          <h5>Características estándar del valorador automático potenciométrico Titra Smart</h5>
          <ul>
          <li>Interactivo para el usuario para facilitar la operación con protección contra entradas no válidas.</li>
          <li>Agitador vórtex para una agitación vigorosa y homogénea con hélice de vidrio especialmente diseñada para una total inercia química.</li>
          <li>Conjuntos de buretas importados intercambiables rápidamente con reconocimiento inteligente de su tamaño de volumen. El factor de bureta para dispensar correcciones está disponible para cálculos reales del punto final.</li>
          <li>El sistema reconoce la conectividad adecuada de otros periféricos como bureta, agitador, electrodo, etc. y proporciona indicaciones en caso de conectividad incorrecta.</li>
          <li>Unidad amplificadora de electrodos diferenciales compuestos para valoraciones potenciométricas y voltamétricas/KF, con conectividad a varios electrodos. El sensor de temperatura con técnica de medición de 4 líneas garantiza una indicación correcta de la temperatura.</li>
          <li>Gran capacidad de memoria para almacenamiento de métodos con parámetros científicos adecuados que cumplan con GLP.</li>
          <li>Modos estandarizados de titulación, concretamente incremental, de equilibrio de titulación.</li>
          <li>Al seleccionar el método de titulación, el instrumento imprime el tipo de electrodo apropiado.</li>
          <li>Durante la titulación, la variable medida, es decir, el potencial del electrodo (mV) o el valor de pH, se muestra en la pantalla junto con el volumen dispensado y el número de puntos finales (EP) detectados.</li>
          <li>Evaluación del punto final (EP) seleccionable por el usuario hasta 9 EP durante la ejecución y cálculo por el primero, el último, el más grande, todos o los EP seleccionados con visualización de resultados e impresión.</li>
          </ul>
          <h5>CUMPLIMIENTO DE 21 CFR PARTE 11</h5>
          <ul>
          <li>Registro de auditoría para todas las actividades con función de búsqueda, generación de informes e impresión.</li>
          <li>200 ID de usuario con entradas alfanuméricas de nombre de usuario, contraseña y selección de privilegios basados ​​en roles.</li>
          <li>Roles multinivel con protección por contraseña y complejidad.</li>
          <li>La autenticación del usuario se realiza para todas y cada una de las operaciones realizadas.</li>
          <li>La impresión USB elimina la necesidad de un puerto serie para conectarse al instrumento. El usuario también puede realizar impresiones en cualquier impresora local o de red.</li>
          <li>Funcionalidad de firma electrónica.</li>
          <li>Instalación de archivo manual y copia de seguridad de datos disponible.</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro27_1,
          typeProduct: {
            name: "Valoradores automáticos",
            keyname: "valoradores-automaticos",
          },
          categoryProduct: {
            name: "Valoradores automáticos",
            keyname: "valoradores-automaticos",
          },
          name: "Valorador automático potenciométrico (Titra+)",
          description: "Valorador potenciométrico analítico Titra+ de Labindia viene con conjuntos de buretas importados intercambiables rápidos con reconocimiento inteligente de su tamaño de volumen",
          descriptionLong: `Valorador potenciométrico analítico Titra+ de Labindia viene con conjuntos de buretas importados intercambiables rápidos con reconocimiento inteligente de su tamaño de volumen. Este autovalorador potenciométrico es perfecto para todo tipo de aplicaciones industriales. El Titra+ tiene una unidad amplificadora de electrodo diferencial compuesto para valoración potenciométrica y voltamétrica/Karl Fisher que tiene conectividad a varios electrodos.
          <br><br>
          Se proporcionan tres modos estándar de titulación, a saber, modo incremental, de equilibrio y de corte, para realizar todo tipo de titulaciones. Hay un reloj en tiempo real para visualización de la hora e impresión de informes con indicación del tiempo de ejecución. Con una interfaz de balanza para transferir directamente el peso. Se pueden almacenar 50 métodos y se puede imprimir el informe de los parámetros del método en Titra+.
          <br><br>
          <h5>Características estándar del valorador automático</h5>
          <ul>
          <li>Conjunto de bureta importado de varios tamaños (5/10/25 ml) con trazabilidad NIST.</li>
          <li>Realice todo tipo de valoraciones, incluidas valoraciones ácido-base, no acuosas, redox, complexométricas, de precipitación y de pH STAT.</li>
          <li>Instalación de almacenamiento para 50 métodos.</li>
          <li>Impresiones de resultados, tablas de datos, gráficos, etc. que cumplen con GLP, con entradas alfanuméricas del nombre de la muestra, el nombre del valorante y el número de identificación. & fecha para la autenticación del informe.</li>
          <li>Cálculo automático de resultados en varias unidades seleccionables.</li>
          <li>Se puede utilizar como un medidor de pH simple con visualización de valores de pH, mV y temperatura.</li>
          <li>Compatibilidad con PC: software e interfaz de balanza integrada.</li>
          <li>Instalación de contraseña de dos niveles (administrador y usuario) para proteger los métodos almacenados contra cualquier uso indebido o cambio no deseado.</li>
          <li>Cumple con los estándares USP/BP/JP/EP/IP/ASTM.</li>
          <li>Intercambiabilidad rápida y sencilla del modo de titulación al modo de titulación Karl Fischer.</li>
          </ul>
          `,
          videoLink: "MzAbQE1Rtqg",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro28_1,
          typeProduct: {
            name: "Valoradores automáticos",
            keyname: "valoradores-automaticos",
          },
          categoryProduct: {
            name: "Valoradores automáticos",
            keyname: "valoradores-automaticos",
          },
          name: "Valorador Karl Fischer (KAFI+)",
          description: "El valorador Karl Fisher KAFI + cumple con los estándares USP/BP/ASTM. Hay una corrección de fugas en línea disponible para verificar si hay fugas antes de la ejecución.",
          descriptionLong: `El valorador Karl Fisher KAFI + cumple con los estándares USP/BP/ASTM. Hay una corrección de fugas en línea disponible para verificar si hay fugas antes de la ejecución. Se pueden almacenar 50 métodos y los últimos 10 resultados se pueden almacenar e imprimir con todos los parámetros requeridos.
          <br><br>
          El valorador Karl Fischer se basa en un agitador magnético de velocidad variable con indicación digital en una pantalla LCD de cristal líquido retroiluminada. Se proporciona una función de contraseña de dos niveles para proteger los métodos almacenados contra cualquier uso indebido o cambio no deseado. También hay un software compatible con PC con interfaz de balanza integrada.
          <h5>Características estándar del valorador automático Karl Fischer (Kafi +)</h5>
          <ul>
          <li>Conjunto de bureta IMPORTADA de varios tamaños. (5/10/25 ml) con trazabilidad NIST.</li>
          <li>Instalación de almacenamiento para 50 métodos.</li>
          <li>Impresiones de resultados, tablas de datos, gráficos, etc. que cumplen con GLP, con entradas alfanuméricas del nombre de la muestra, el nombre del valorante y el número de identificación. & fecha para la autenticación del informe.</li>
          <li>Compatibilidad con PC: software e interfaz de balanza integrada.</li>
          <li>Cumple con las normas USP/BP/JP/EP/IP/ASTM.</li>
          <li>Los últimos 10 resultados se almacenan y se pueden imprimir con todos los detalles de los parámetros.</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro29_1,
          typeProduct: {
            name: "Medidor de PH",
            keyname: "medidot-de-ph",
          },
          categoryProduct: {
            name: "Medidor de PH",
            keyname: "medidot-de-ph",
          },
          name: "Medidor de conductividad Pico",
          description: "LABINDIA ofrece la elección perfecta de un medidor de conductividad de mesa para mediciones en los laboratorios, ya sea de rutina o a nivel de I+D. Debido a la función de temperatura selectiva del usuario, el instrumento calcula la conductividad a la temperatura de referencia 25 +/- 0,1°C con función lineal.",
          descriptionLong: `LABINDIA ofrece la elección perfecta de un medidor de conductividad de mesa para mediciones en los laboratorios, ya sea de rutina o a nivel de I+D. Debido a la función de temperatura selectiva del usuario, el instrumento calcula la conductividad a la temperatura de referencia 25 +/- 0,1°C con función lineal.
          <br><br>
          Hay una pantalla LCD retroiluminada de 20 x 2 líneas que muestra los parámetros básicos. La selección automática de rango para una medición más rápida y una evaluación automática de la constante celular con solución estándar está disponible en el medidor de conductividad Pico. El medidor de conductividad Labindia tiene un coeficiente de temperatura seleccionable por el usuario para compensación automática de temperatura a través de una tecla TEMPCO especial.
          <h5>Características estándar del medidor de conductividad Pico</h5>
          <ul>
          <li>Diseño de última generación fácil de usar basado en microcontrolador avanzado.</li>
          <li>Cumple con las normas USP y DIN.</li>
          <li>Elegante gabinete moldeado con teclado alfanumérico de poliéster resistente al agua con teclas programables.</li>
          <li>Software interactivo de usuario en modo de diálogo para facilitar la operación con protección contra entradas no válidas.</li>
          <li>Pantalla LCD retroiluminada de 20 x 2 líneas.</li>
          <li>Modos de medición: Conductividad, TDS, Salinidad (opcional) y temperatura.</li>
          <li>Medición simultánea de conductividad y temperatura.</li>
          <li>Almacenamiento de memoria no volátil de conductividad, TDS y salinidad: 40 lecturas cada una con temperatura en formato GLP o no GLP preseleccionado.</li>
          <li>Protección con contraseña para datos de calibración y lecturas almacenadas.</li>
          <li>Datos de calibración con sello de fecha para autenticación.</li>
          <li>Alarma de recordatorio de calibración.</li>
          <li>Entradas alfanuméricas de nombre de muestra, número de identificación para autenticación.</li>
          <li>Selección automática de rango para mediciones más rápidas de 0,01 µS a 199,9 mS con celdas de conductividad con constantes de 0,1, 1,0 y 10 K.</li>
          <li>Evaluación automática de la constante CELL con solución estándar.</li>
          <li>Coeficiente de temperatura seleccionable por el usuario para compensación automática de temperatura, mediante tecla especial TEMPCO.</li>
          <li>Indicador de estabilidad de entrada para resultados reproducibles.</li>
          <li>Reloj de tiempo real (RTC) incorporado para visualización de la hora e impresión de informes.</li>
          <li>NOMBRE DEL CLIENTE ingresado en fábrica en las impresiones de informes para autenticación.</li>
          <li>La indicación de error ayuda al usuario a rastrear el problema.</li>
          <li>Indicación de pitido audible durante la operación válida de la tecla.</li>
          <li>Compatibilidad con PC para descarga de datos (Opcional).</li>
          <li>Hay disponible un instrumento combinado de pH y conductividad.</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro30_1,
          typeProduct: {
            name: "Medidor de PH",
            keyname: "medidot-de-ph",
          },
          categoryProduct: {
            name: "Medidor de PH",
            keyname: "medidot-de-ph",
          },
          name: "Medidor de pH Fan",
          description: "El medidor de pH Phan es el modelo más básico y básico de Labindia. Con base de microcontrolador y un elegante gabinete modular con teclado multifunción resistente al agua para facilitar su uso.",
          descriptionLong: `El medidor de pH Phan es el modelo más básico y básico de Labindia. Con base de microcontrolador y un elegante gabinete modular con teclado multifunción resistente al agua para facilitar su uso. Medición simultánea de pH mV y temperatura con una tecla SCAN para mostrar los valores de pH almacenados.
          <br><br>
          Software interactivo para el usuario con claves directas para facilitar la operación con protección contra entradas no válidas. Un medidor de pH Labind tiene una memoria de almacenamiento no volátil de 40 lecturas de pH en cuatro conjuntos de 10 lecturas cada uno. La calibración del instrumento se puede realizar utilizando tampones de pH 4,7 y 9,2 y un estándar asignado por el usuario.
          <h5>Características estándar del medidor de pH Phan</h5>
          <ul>
          <li>Diseño de última generación fácil de usar basado en microcontrolador avanzado.</li>
          <li>Elegante gabinete moldeado con teclado multifunción de poliéster resistente al agua con teclas programables.</li>
          <li>Software interactivo para el usuario con claves directas para facilitar la operación con protección contra entradas no válidas.</li>
          <li>Pantalla LCD retroiluminada de 20 x 2 líneas.</li>
          <li>Medición simultánea de pH, mV y Temperatura. Tecla SCAN para mostrar los valores de pH almacenados con Memory SET y Reading No.</li>
          <li>Almacenamiento de memoria no volátil de 40 lecturas de pH en cuatro conjuntos de 10 lecturas cada uno.</li>
          <li>Tecla de función PROMEDIO para comprobar el promedio de la lectura de pH almacenada en la memoria SET seleccionada.</li>
          <li>MEM CLEAR Tecla para borrar los datos de pH/bloque de buffer de memoria de lectura y datos de calibración.</li>
          <li>Calibración de instrumentos con 4.00, 7.00, 9.20 y estándar de calibración asignado/seleccionado por el usuario con la tecla ASSIGN.</li>
          <li>ATC incorporado con selección de modo Automático / Manual. Temperatura ATC a 25 °C o a una temperatura ingresada manualmente por el usuario. Compensación automática de temperatura mediante sensor de temperatura PT100 Rango de 0° a 100° C.</li>
          <li>Indicación de estabilidad de entrada para resultados reproducibles.</li>
          <li>Modo de verificación de sonda para verificar el envejecimiento del electrodo.</li>
          <li>La indicación de error ayuda al usuario a rastrear el problema.</li>
          <li>Indicación de pitido audible durante la operación de tecla válida.</li>
          </ul>
          `,
          videoLink: "dDJzpe_9tH4",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro31_1,
          typeProduct: {
            name: "Medidor de PH",
            keyname: "medidot-de-ph",
          },
          categoryProduct: {
            name: "Medidor de PH",
            keyname: "medidot-de-ph",
          },
          name: "Medidor de pH PICO",
          description: "Este medidor de pH de mesa es una ayuda ideal en cada laboratorio para mediciones de nivel de rutina o de investigación y desarrollo. Este instrumento muy práctico mide pH, mV y tiene una memoria de almacenamiento de datos de 40 puntos. El medidor de pH cumple con las normas USP y DIN.",
          descriptionLong: `Este medidor de pH de mesa es una ayuda ideal en cada laboratorio para mediciones de nivel de rutina o de investigación y desarrollo. Este instrumento muy práctico mide pH, mV y tiene una memoria de almacenamiento de datos de 40 puntos. El medidor de pH cumple con las normas USP y DIN.
          <br><br>
          Pico pH Instrument tiene modo estándar y modo GLP; se pueden almacenar, imprimir y escanear 40 lecturas de datos en la pantalla. Para el modo GLP, se pueden almacenar entradas adicionales de nombre de muestra y número de identificación. La función de registro de datos opcional permite al usuario almacenar; 24 puntos de datos que constan de lecturas de pH, temperatura y tiempo. El usuario puede tener un protocolo de calibración de 3 o 5 puntos. La protección con contraseña para los datos de calibración y las lecturas almacenadas brinda un beneficio adicional.
          <h5>Características estándar del medidor de pH PICO</h5>
          <ul>
          <li>Diseño de producto de última generación, fácil de usar y basado en microcontroladores avanzados.</li>
          <li>El medidor de pH PICO cumple con los estándares USP y DIN.</li>
          <li>Elegante gabinete moldeado con teclado alfanumérico de poliéster resistente al agua con teclas programables.</li>
          <li>Software interactivo de usuario en modo de diálogo para facilitar la operación con protección contra entradas no válidas.</li>
          <li>Pantalla LCD retroiluminada de 20 x 2 líneas.</li>
          <li>Medición simultánea de pH, mV y temperatura.</li>
          </ul>
          <h5>Almacenamiento en memoria no volátil de:</h5>
          <ul>
          <li>40 lecturas de pH y 40 mV con temperatura en formato GLP o No GLP preseleccionado.</li>
          <li>Memoria de 24 lecturas de datos de pH, temperatura y tiempo en modo de registro de datos (opcional).</li>
          <li>Protección con contraseña para datos de calibración y lecturas almacenadas.</li>
          <li>Datos de calibración con sello de fecha y hora para autenticación. Facilidad para ver los datos de calibración.</li>
          <li>Alarma de recordatorio de calibración.</li>
          <li>Entradas alfanuméricas de nombre de muestra, número de identificación para autenticación.</li>
          <li>Compensación automática de temperatura mediante sensor de temperatura Pt.100. Rango 0° a 150°C.</li>
          <li>Protocolo de calibración de 3 puntos (isopotencial) o 5 puntos (lineal o segmentado).</li>
          <li>Indicador de estabilidad de entrada para resultados reproducibles.</li>
          <li>NOMBRE DEL CLIENTE ingresado en fábrica en la impresión del informe para autenticación.</li>
          <li>La indicación de error ayuda al usuario a rastrear el problema.</li>
          <li>Indicación de pitido audible durante la operación válida de la tecla.</li>
          <li>Compatibilidad con PC para descarga de datos (opcional).</li>
          <li>Hay disponible un instrumento combinado de pH y conductividad.</li>
          </ul>
          `,
          videoLink: "dDJzpe_9tH4",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro32_1,
          typeProduct: {
            name: "Medidor de PH",
            keyname: "medidot-de-ph",
          },
          categoryProduct: {
            name: "Medidor de PH",
            keyname: "medidot-de-ph",
          },
          name: "PICO pH / Medidor de conductividad / Salinidad",
          description: "LABINDIA ofrece la elección perfecta de un medidor de conductividad de mesa para mediciones en los laboratorios, ya sea de rutina o a nivel de I+D. El conductímetro ofrece mayor comodidad de uso y confianza en la medición en todas las áreas de aplicación.",
          descriptionLong: `LABINDIA ofrece la elección perfecta de un medidor de conductividad de mesa para mediciones en los laboratorios, ya sea de rutina o a nivel de I+D. El conductímetro ofrece mayor comodidad de uso y confianza en la medición en todas las áreas de aplicación. Debido a la función de temperatura selectiva del usuario, el instrumento calcula la conductividad a la temperatura de referencia 25 +/- 0,1°C con función lineal.
          <br><br>
          Hay una memoria de almacenamiento no volátil para conductividad, TDS y salinidad: 40 lecturas cada una con temperatura en formato GLP y no GLP preseleccionado.
          <h5>Características estándar de PICO PH/medidor de conductividad/salinidad</h5>
          <ul>
          <li>Diseño de última generación fácil de usar basado en microcontrolador avanzado.</li>
          <li>El medidor de pH PICO cumple con los estándares USP y DIN.</li>
          <li>Elegante gabinete moldeado con teclado alfanumérico de poliéster resistente al agua con teclas programables.</li>
          <li>Software interactivo de usuario en modo de diálogo para facilitar la operación con protección contra entradas no válidas.</li>
          <li>Pantalla LCD retroiluminada de 20 x 2 líneas.</li>
          <li>Medición simultánea de pH, mV y temperatura. Conductividad, TDS y salinidad opcionales.</li>
          <li>Almacenamiento en memoria no volátil de:</li>
          <li>40 lecturas de pH y 40 mV con temperatura en formato GLP o No GLP preseleccionado.</li>
          <li>Memoria de 24 lecturas de datos de pH, temperatura y tiempo en modo de registro de datos (opcional).</li>
          <li>Protección con contraseña para datos de calibración y lecturas almacenadas.</li>
          <li>Datos de calibración con sello de fecha y hora para autenticación. Facilidad para ver los datos de calibración.</li>
          <li>Alarma de recordatorio de calibración.</li>
          <li>Entradas alfanuméricas de nombre de muestra, número de identificación para autenticación.</li>
          <li>Indicador de estabilidad de entrada para resultados reproducibles.</li>
          <li>Reloj de tiempo real (RTC) incorporado para visualización de la hora e impresión de informes.</li>
          <li>NOMBRE DEL CLIENTE ingresado en fábrica en la impresión del informe para autenticación.</li>
          <li>La indicación de error ayuda al usuario a rastrear el problema.</li>
          <li>Indicación de pitido audible durante la operación válida de la tecla.</li>
          <li>Compatibilidad con PC para descarga de datos (opcional).</li>
          <li>Hay disponible un instrumento combinado de pH y conductividad.</li>
          </ul>
          `,
          videoLink: "dDJzpe_9tH4",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro33_1,
          typeProduct: {
            name: "Aparatos de punto de fusion",
            keyname: "aparatos-de-punto-de-fusion",
          },
          categoryProduct: {
            name: "Aparatos de punto de fusion",
            keyname: "aparatos-de-punto-de-fusion",
          },
          name: "Aparato visual de punto de fusión (MRVIS+)",
          description: "El aparato visual de punto de fusión permite al investigador obtener una indicación de la pureza del compuesto o elemento. ",
          descriptionLong: `El aparato visual de punto de fusión permite al investigador obtener una indicación de la pureza del compuesto o elemento. Todas las operaciones del aparato de punto de fusión están controladas por la unidad central de procesamiento y la impresora proporciona las impresiones necesarias de calibración y resultados exactos, precisos y repetibles.
          <br><br>
          Labindia Melting Point tiene un microcontrolador para control de temperatura, rango de temperatura, velocidades de calentamiento, tiempo de enfriamiento, etc. También viene con un diseño de última generación y características notables. Con resultados precisos garantizados y un funcionamiento de calidad superior, el aparato de punto de fusión visual de Lab India reemplaza a los demás actores del mercado. 
          <br><br>
          Una de las técnicas analíticas aplicadas a la caracterización de productos químicos puros y fármacos (desde la materia prima hasta el escalado y la forma terminada) es la determinación del punto de fusión (MP). Elegir cuidadosamente el procedimiento de determinación de MP es importante para generar resultados certificables para el control de calidad química (QC) y el aseguramiento de la calidad (QA). Se utiliza en laboratorios analíticos de control de calidad/QA, laboratorios farmacéuticos y análisis químicos.
          <h5>Características estándar del aparato visual de punto de fusión</h5>
          <ul>
          <li>Diseño de última generación, adecuado tanto para muestras blancas como de colores en forma de polvo.</li>
          <li>El instrumento puede detectar el rango de fusión y el punto de fusión de varios tipos de muestras.</li>
          <li>La imagen ampliada de la muestra se puede ver en la pantalla de un monitor de video mediante una cámara CCD que ayuda a observar los cambios físicos.</li>
          <li>Impresión compatible con GLP con nombre de muestra, número de identificación, fecha, hora, etc. para autenticación.</li>
          <li>Modo de calibración: función de calibración incorporada para calibración automática de dos puntos con estándares USP.</li>
          <li>Protección por contraseña para el modo de calibración.</li>
          <li>Cumplimiento del procedimiento de rango de fusión de la USP según el método Clase - IA y EP 2.2.60.</li>
          <li>Informe gráfico de temperatura v/s. Unidades de luz con indicaciones de inicio y fin de fusión.</li>
          <li>También puede detectar el rango de fusión y el punto de fusión de muestras descompuestas, así como muestras cerosas y poliméricas.</li>
          <li>Diseño patentado.</li>
          <li>Función de visualización de parámetros/resultados en pantalla (opcional).</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro34_1,
          typeProduct: {
            name: "Aparato de prueba de fugas",
            keyname: "prueba-de-fugas",
          },
          categoryProduct: {
            name: "Aparato de prueba de fugas",
            keyname: "prueba-de-fugas",
          },
          name: "Aparato de prueba de fugas (LT1001)",
          description: "El probador de fugas de vacío LABINDIA 1001 está diseñado con la máxima precisión utilizando materiales de primera calidad y equipos avanzados. Nuestro probador de fugas consta de una carcasa de desecadores de policarbonato para mantener el vacío durante mucho tiempo.",
          descriptionLong: `El probador de fugas de vacío LABINDIA 1001 está diseñado con la máxima precisión utilizando materiales de primera calidad y equipos avanzados. Nuestro probador de fugas consta de una carcasa de desecadores de policarbonato para mantener el vacío durante mucho tiempo.
          El aparato de prueba de fugas encuentra una amplia aplicación en numerosas industrias, como la alimentaria, farmacéutica, química, etc.
          <br><br>
          En el probador de fugas Labindia 1001 se almacenan 20 pruebas y 10 métodos con fecha y hora. Tiene un rango de vacío de hasta 600 mm Hg. Se puede elegir entre una balanza incorporada o una balanza externa. Protección con contraseña de 3 niveles con fácil calibración y validación.
          <h5>Características estándar del PROBADOR DE FUGAS</h5>
          <ul>
          <li>Pantalla gráfica monocromática de 128 x 64.</li>
          <li>Teclado alfanumérico.</li>
          <li>20 Pruebas y 10 Métodos con fecha y hora disponibles.</li>
          <li>Se suministra en cuerpo SS.</li>
          <li>Unidades de presión seleccionables.</li>
          <li>LAN, RS - 232, impresora paralela, columna externa 80/48 y miniimpresora matricial integrada de 40 columnas disponibles.</li>
          </ul>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro35_1,
          typeProduct: {
            name: "USP",
            keyname: "usp",
          },
          categoryProduct: {
            name: "USP",
            keyname: "usp",
          },
          name: "F7 INTELIGENTE",
          description: "Pantalla táctil con interfaz de usuario (UI) fácil de usar",
          descriptionLong: `
          <ul>
          <li>Pantalla táctil con interfaz de usuario (UI) fácil de usar</li>
          <li>6+1 unidades de prueba (una en blanco)</li>
          <li>Intervalos de muestra prácticamente ilimitados</li>
          <li>Monitoreo de temperatura de celda individual, sensor para detección de celda individual</li>
          <li>Rango de temperatura de 20 a 55 °C, precisión de temperatura de ±0,1°C a 37°C (flujo 16 ml/min)</li>
          <li>Programa de validación incorporado para temperatura y flujo</li>
          <li>Indicación de bloqueo de celda durante el análisis</li>
          <li>Sin vibraciones - Controlador de temperatura externo</li>
          <li>Almacenamiento ilimitado de datos de análisis y métodos</li>
          <li>Usuarios ilimitados con credenciales de inicio de sesión individuales</li>
          <li>Software de cumplimiento 21 CFR Parte 11</li>
          <li>USB, Wi-Fi, conectividad LAN para copia de seguridad y restauración, así como para impresoras</li>
          </ul>
          `,
          videoLink: "OZ8kbIe9CgY",
          sendPriceText: "Ver más información",
        },
      ],
    },
  ],
};

export default apiSelcaEscondidaMock;
