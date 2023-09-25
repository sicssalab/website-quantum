import pagesContants from "../constants/pagesContants";
import logo from "../assets/LOGO-MARCAS-PROVEEDORES/velph.jpeg";

import producto1_1 from "../assets/landings/arizona/productos/1/computrac-max-4000xl_315x220_l.png";
import producto1_2 from "../assets/landings/arizona/productos/1/computrac-max-4000xl_315x220_r.png";

import producto2_1 from "../assets/landings/arizona/productos/2/computrac-max-5000-xl_l.png";
import producto2_2 from "../assets/landings/arizona/productos/2/computrac-max-5000-xl_r.png";

import producto3_1 from "../assets/landings/arizona/productos/3/computrac-vapor-pro-xl_315x220_left.png";
import producto3_2 from "../assets/landings/arizona/productos/3/computrac-vapor-pro-xl_315x220_right.png";

import producto4_1 from "../assets/landings/arizona/productos/4/vaporproxl-autosampler-lab.png";

import pro01_1 from "../assets/landings/velp/instruments/analizadores/ema-502/imagen_1_VELPEMA502-02-287274-287962.jpg";
import pro02_1 from "../assets/landings/velp/instruments/analizadores/cn-802/producto.jpg";
import pro03_1 from "../assets/landings/velp/instruments/analizadores/nda-702/F30800080VELPNDA-702-285106.jpg";
import pro04_1 from "../assets/landings/velp/instruments/digestores/dkl-8/VELPDKL8S30100200-212992-228575.jpg";
import pro05_1 from "../assets/landings/velp/instruments/digestores/dkl-12/VELPDKL12S30100190-213006-228580.jpg";
import pro06_1 from "../assets/landings/velp/instruments/digestores/dkl-20/VELPDKL20S30100210-213014.jpg";
import pro07_1 from "../assets/landings/velp/instruments/digestores/dkl-46-26/26S30100180-213016.jpg";
import pro08_1 from "../assets/landings/velp/instruments/digestores/dk-6/1Kjeldhal-Digestion-DK6-01-223527-228488.jpg";
import pro08_2 from "../assets/landings/velp/instruments/digestores/dk-6/2Kjeldhal-Digestion-DK6-04-223536-228497.jpg";
import pro09_1 from "../assets/landings/velp/instruments/digestores/dk-6-48/1Kjeldhal-Digestion-DK6-48-01-223575-228593.jpg";
import pro10_1 from "../assets/landings/velp/instruments/digestores/dk-8/1Kjeldhal-Digestion-DK8-01-223655-228506.jpg";
import pro11_1 from "../assets/landings/velp/instruments/digestores/dk-18-26/1Kjeldhal-Digestion-DK18-26-01-223783-228547.jpg";
import pro12_1 from "../assets/landings/velp/instruments/digestores/dk-20/1Kjeldhal-Digestion-DK20-01-223724-228529.jpg";
import pro13_1 from "../assets/landings/velp/instruments/digestores/dk-42-26/1Kjeldhal-Digestion-DK42-26-01-223830-228563.jpg";
import pro14_1 from "../assets/landings/velp/instruments/digestores/ks-1000/1KS10003-4-284151.jpg";

const apiSelcaEscondidaMock = {
  items: [
    {
      type: "header-component",
      title: "VELP SCIENTIFICA",
      isLanding: true,
      socialNetwork: [
        {
          alt: "red network",
          link: "https://www.facebook.com/profile.php?id=100063752912811",
          type: "facebook",
        },
        {
          alt: "red network",
          link: "https://www.youtube.com/@VELPScientificaTV",
          type: "youtube",
        },
        {
          alt: "red network",
          link: "https://www.linkedin.com/company/velp-scientifica",
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
        "Bienvenidos en VELP<br>Fundada en 1983 por Ermete Passoni, VELP Scientifica es hoy un líder mundial en la producción de instrumentos analíticos y equipos de laboratorio que ha tenido un impacto en el mercado mundial con productos italianos reconocidos por su innovación, diseño y conectividad premium.<br><br>VELP es una empresa familiar en su segunda generación de liderazgo y es reconocida mundialmente como un proveedor premium de analizadores elementales, analizadores Kjeldahl, extractores con solventes, extractores de fibra, reactores de estabilidad de oxidación, herramientas de agitación y mezcla, pruebas respirométricas, DBO y DQO",
      videoLink: "A9SWxKNmFKA",
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
      title: "Instrumentos analíticos",
      items: [
        {
          alt: "alt-logo",
          srcImage: pro01_1,
          typeProduct: {
            name: "Analizadores Elementales",
            keyname: "analizadores-elementales",
          },
          categoryProduct: {
            name: "Elemental de CHNS-O",
            keyname: "chns-o",
          },
          name: "EMA 502 Analizador Elemental CHNS-O",
          description:
            "Microanalizador elemental preciso, versátil y habilitado para la nube, para la determinación de carbono, hidrógeno, nitrógeno, azufre y oxígeno con helio y argón como gases portadores.",
          descriptionLong: `
          Microanalizador elemental preciso, versátil y habilitado para la nube, para la determinación de carbono, hidrógeno, nitrógeno, azufre y oxígeno con helio y argón como gases portadores.
          <br><br>
          <h5>La solución CHNS/O completa para ampliar el potencial analítico de su laboratorio</h5>
          <br>
          EMA 502 Analizador Elemental CHNS-O es la solución precisa y fiable para la determinación de carbono, hidrógeno, nitrógeno, azufre y oxígeno en varios sectores industriales como el farmacéutico y el de las ciencias de la vida, la química orgánica, la petroquímica y la energía, el medio ambiente, la agronomía, la alimentación y los piensos.
          <br><br>
          El análisis CHNS-O con el analizador elemental EMA 502 permite determinar la estructura de un compuesto no conocido y evaluar la composición y la pureza de un producto de síntesis.
          <br><br>
          EMA 502 funciona de conformidad con los métodos oficiales de referencia y realiza la determinación CHNS y del oxígeno en pocos minutos, sin ningún requisito o módulo externo adicional.
          <br><br>
          EMA 502 es un analizador seguro que no requiere el uso de productos químicos agresivos ni prevé fases de análisis que requieran mucho tiempo.
          <br><br>
          Basta con configurar el análisis para acceder a toda la riqueza de información que ofrece la muestra.
          <br><br>
          <h5>Versatilidad y productividad con funcionalidad de vanguardia</h5>
          <br>
          EMA 502 ha sido diseñado para funcionar 24 horas al día, 7 días a la semana, 365 días al año con un mantenimiento ordinario simple y rápido.
          <br><br>
          EMA 502 es capaz de procesar hasta 117 muestras a la vez, es extremadamente eficiente y garantiza un alto rendimiento, gracias al automuestreador electrónico y a la conexión al ordenador de la microbalanza, para la transferencia directa de los datos de pesaje.
          <br><br>
          EMA 502 analiza muestras sólidas, semisólidas y líquidas de hasta 20 mg de contenido de carbono y minimiza los costes operativos gracias a los consumibles originales de VELP, producidos para obtener la máxima duración.
          <br><br>
          Con una sola herramienta potente y un cambio rápido de configuración, podrá afrontar con éxito múltiples desafíos analíticos en el ámbito del análisis elemental.
          <br><br>
          Configura y empieza rápidamente el análisis CHNS y luego pasa al modo O gracias al panel de conexión exclusivo.
          <br><br>
          <h5>Precisión y fiabilidad para prestaciones de nivel superior</h5>
          <br>
          EMA 502 es un analizador elemental resistente y flexible, diseñado para ofrecer precisión y fiabilidadà de nivel superior.
          <br><br>
          La tecnología de detección TCD asegura resultados extremadamente precisos y reproducibles, con un RSD del 0,2 % (ácido sulfanílico).
          <br><br>
          Los resultados se calculan de forma totalmente automática mediante el software EMASoftTM que recibe los datos en tiempo real del analizador elemental EMA 502.
          <br><br>
          Evalúa el progreso y el éxito del análisis incluso antes de controlar los resultados gracias a la columna de cromatografía de gases y al TCD, que permiten visualizar en tiempo real el proceso analítico y los picos detectados con excelentes prestaciones durante toda la vida útil del instrumento.
          <br><br>
          <h5>El proceso operativo de EMA 502 Analizador Elemental</h5>
          <br>
          Trayecto del flujo EMA 502 - CHNS
          <br><br>
          El análisis CHNS empieza con la combustión de la muestra dentro del horno de combustión VELP a una temperatura superior a 1000°C para la conversión en sus compuestos elementales.
          <br><br>
          El Vcopper™ VELP, una formulación de polvo de cobre, se coloca en la parte inferior del reactor para facilitar la reducción de NOX en N2.
          <br><br>
          El flujo de gas llega al horno de la columna de cromatografía de gases, que asegura una temperatura homogénea y regulable capaz de garantizar la separación completa de todos los elementos para su detección mediante TCD.
          <br><br>
          En la determinación del oxígeno, la muestra se somete a pirólisis dentro del horno y luego pasa a través de una trampa química donde se absorben todas las impurezas y llega a la columna de cromatografía de gases y, por último, al TCD para la detección.
          Máxima facilidad de uso y seguridad de los datos con EMASoft™ software
          El software EMASoft™ es la potente solución de VELP que controla y gestiona el analizador elemental EMA 502.
          <br><br>
          EMASoft™ cuenta con una interfaz fácil de usar que muestra toda la información relevante de un vistazo: resultados, base de datos y estado del instrumento.
          <br><br>
          Es posible elegir a partir de una biblioteca de métodos preinstalados y crear unos personalizados. Crear y gestionar las curvas de calibración para todos los elementos es fácil y rápido y permite probar cualquier muestra sin efecto memoria.
          Inicia el análisis en pocos clics
          Cambio de configuración en pocos y simples pasos con los tutoriales gif
          Siga en tiempo real el progreso del análisis con el gráfico que muestra los picos de los gases detectados por el TCD
          Un menú de mantenimiento específico envía alertas y notificaciones cuando el lastre necesita ser sustituido
          La tabla de resultados muestra la media, SD y RSD del análisis con selección directa en el gráfico
          <br><br>
          El software de  EMA 502 está preparado para la actualización con un paquete  21 CFR parte 11  opcional para los laboratorios de la industria farmacéutica, cosmética y alimentaria que necesitan operar de acuerdo con las regulaciones de la FDA.
          Asistencia sin precedentes, procesos eficientes y operatividad mejorada con VELP Ermes Cloud Platform
          <br><br>
          EMA 502 ofrece la posibilidad exclusiva de conectarse a la innovadora plataforma en la nube VELP Ermes, la solución Smart Lab que permite reducir las operaciones rutinarias gracias a la monitorización en tiempo real de los análisis en cualquier lugar y momento.
          <br><br>
          A través de un ordenador, un teléfono inteligente o una tableta es posible gestionar simultáneamente variosù instrumentos, consumibles, flujos de trabajo, datos de análisis y condiciones de funcionamiento de los instrumentos.
          <br><br>
          Las notificaciones y alertas inmediatas le permitirán mantenerse siempre informado del estado de sus análisis y, gracias a la interrupción a distancia, tendrá el control total de sus procesos, lo que le garantiza la máxima seguridad.
          <br><br>
          Tendrá la posibilidad de dar acceso a las herramientas y a los datos solo a miembros específicos de su organización y elegir si desea compartir la información directamente con VELP o con los centros de asistencia autorizados para beneficiarse de la reducción del tiempo de diagnóstico y de un mejor servicio de asistencia, con un efecto positivo en el tiempo operativo del sistema.
          <br><br>
          El análisis CHNS-O y su laboratorio alcanzarán un nuevo nivel de productividadà con VELP Ermes Cloud Platform.
          Tecnología TEMS™
          EMA 502 analizador elemental CHNS-O incorpora la tecnología TEMS™, que garantiza ahorros significativos.
          <br><br>
          <ul>
          <li>Tiempo: calentamiento rápido</li>
          <li>Energía: consumos de energía limitados</li>
          <li>Dinero: reducción de costes por cada análisis</li>
          <li>Espacio: perfil compacto, ocupa poco espacio en la mesa del laboratorio</li>
          </ul>
          `,
          videoLink: "hqXBZ6o5ThU",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro02_1,
          typeProduct: {
            name: "Analizadores Elementales",
            keyname: "analizadores-elementales",
          },
          categoryProduct: {
            name: "Analizador Elemental de carbono y nitrógeno",
            keyname: "analizador-elemental-carbono-y-nitrogeno",
          },
          name: "CN 802 Analizador elemental de carbono y nitrógeno",
          description:
            "Analizador elemental rápido, versátil y habilitado para la nube para la determinación de carbono y nitrógeno en matrices orgánicas con helio y argón como gas portador",
          descriptionLong: `
          <h5>Carbono y nitrógeno en solo 5 minutos</h5>
El CN 802 es el analizador elemental robusto y flexible para la determinación de carbono y nitrógeno en muchos sectores industriales como el medioambiental, alimentario y químico según los métodos de referencia oficiales.
<br><br>
El CN 802 está controlado por el software CNSoftTM y produce los siguientes resultados en 5 minutos sin necesidad de supervisión por parte del operador:
<ul>
<li>Carbono total - TC</li>
<li>Carbono orgánico e inorgánico (después de la acidificación) - TOC, TIC</li>
<li>Nitrógeno total - TN</li>
<li>Relación carbono/nitrógeno - Ratio CN</li>
</ul>
El CN 802 es un analizador seguro que no requiere el uso de productos químicos agresivos o fases de análisis que necesiten mucho tiempo, ¡simplemente prepare la muestra y váyase!
Alta sensibilidad y versatilidad
Es posible cargar varias matrices de muestras sólidas, semisólidas y líquidas al mismo tiempo. El CN 802 está diseñado para funcionar las 24 horas del día, los 7 días de la semana, los 365 días del año con un mantenimiento de rutina sencillo y rápido.
<br><br>
El muestreador automático viene con un disco de 30 posiciones y se puede expandir para acomodar hasta 117 muestras.
<br><br>
CN 802 es capaz de analizar cantidades mínimas de carbono y nitrógeno gracias al NDIR que lee trazas de carbono desde ppm hasta 150 mgC.
<br><br>
El límite de detección de nitrógeno LOD es el más bajo en la categoría y permite una lectura tan pequeña como 0,001 mgN con helio como gas portador (0,01 mgN con argón).
<br><br>
CN 802 garantiza la máxima reproducibilidad con una RSD inferior al 0,5%.
Máxima eficiencia para su laboratorio
<br><br>

CN 802 analiza muestras de hasta 1 g y reduce los costes operativos gracias a la tecnología de combustión VELP y consumibles de larga duración. CN 802 permite reducir costes gracias a la posibilidad de elegir si utilizar Helio o Argón.
El detector de infrarrojos selectivo NDIR no requiere mantenimiento y solo lee el contenido de dióxido de carbono;
El TCD LoGASTM  garantiza la máxima precisión y no requiere un gas de referencia, lo que reduce los costes operativos;
Consumo de oxígeno muy bajo;
La trampa física única DriStepTM elimina el 99% del agua y reduce el coste de los consumibles químicos;
CN 802 es fácil de instalar y extremadamente compacto, lo que permite ahorra un espacio valioso en su laboratorio
<br><br>
<h5>El proceso operativo de CN 802</h5>



La muestra baja al reactor de combustión donde se produce la combustión de esta(> 1000 °C) dando compuestos oxidados. La separación del agua se realiza en 2 etapas.
La primera es la trampa física DriStep ™ (WT1), que no requiere mantenimiento, estratégicamente colocada después de la combustión, y la segunda es una trampa química (WT2) que asegura la completa eliminación del 1% de agua residual.
<br><br>
La combinación de alta temperatura y el exclusivo VcopperTM reduce el dióxido de nitrógeno a nitrógeno molecular dentro del reactor de reducción.
<br><br>
El detector VELP NDIR detecta con precisión la concentración de dióxido de carbono con un excelente límite de detección y envía una señal a CNSoft.
<br><br>
Los absorbedores de CO2 autorregeneradores atrapan el dióxido de carbono para que el exclusivo TCD (Thermal Conductivity Detector) detecte solo el contenido de nitrógeno.
CNSoft ™ software potente e intuitivo
<br><br>

El software CNSoft ™ es una potente solución VELP que controla y gestiona el analizador CN 802.
<br><br>
El CNSoft ™ tiene una interfaz fácil de usar que muestra toda la información relevante de un vistazo: resultados, base de datos y condiciones del instrumento .
<br><br>
Puede elegir entre una amplia biblioteca de métodos preinstalados y crear los suyos propios. La creación y gestión de curvas de calibración para carbono y nitrógeno es rápida y sencilla y le permite analizar cualquier muestra sin efecto memoria.
<br><br>
Gestione las pruebas de fugas y elija si desea controlar todo el circuito o solo un área, después de reemplazar un consumible, por ejemplo.
VELP Ermes lleva su analizador a la nube
<br><br>

CN 802 gracias a la conectividad a VELP Ermes permite reducir las operaciones de rutina en sus instrumentos gracias a la supervisión en tiempo real de sus productos esté donde esté y en cualquier momento.
<br><br>
Un analizador elemental diseñado para un trabajo continuo con procesos totalmente automatizados y con VELP Ermes le permite reducir drásticamente los tiempos de diagnóstico para garantizar una asistencia superior con la máxima seguridad y protección de sus datos.
<br><br>
Las notificaciones y alertas inmediatas le permitirán estar siempre informado sobre el estado de tu análisis y gracias a la interrupción en remoto tendrá el control total de tus procesos garantizando la máxima seguridad.
<br><br>
Acceda a la base de datos de su instrumento con total seguridad a través de la plataforma VELP Ermes y colabore con sus compañeros creando y compartiendo informes desde su PC, smartphone y tablet. 
          `,
          videoLink: "A0f6ong2eLY",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro03_1,
          typeProduct: {
            name: "Analizadores Elementales",
            keyname: "analizadores-elementales",
          },
          categoryProduct: {
            name: "Analizador Elemental de nitrógeno/proteínas",
            keyname: "analizador-elemental-nitrogeno-proteninas",
          },
          name: "NDA 702 Analizador de Nitrógeno/Proteínas Dumas",
          description:
            "Analizador elemental versátil habilitado para la nube para la determinación de nitrógeno y proteínas según el método de combustión Dumas con helio y argón como gas portador.",
          descriptionLong: `
          <h5>Automatización completa para máxima productividad</h5>


El método Dumas permite maximizar la productividad y es la solución más adecuada para laboratorios con un elevado número de muestras diarias y que buscan resultados rápidos.
<br><br>
NDA 702 es el analizador elemental totalmente automático gestionado por el software DUMASoftTM que produce resultados de Nitrógeno / Proteína en solo 3-4 minutos y en total autonomía, le permite elegir entre Helio y Argón como portador de gas.
<br><br>
NDA 702 es considerablemente más rápido, más fácil y más seguro que un sistema Kjeldahl tradicional.
<br><br>
Con NDA 702 se ahorra tiempo y espacio en el laboratorio, todo con la máxima seguridad ya que no requiere el uso de productos químicos ni exigentes pasos de análisis.
<br><br>
Solo tienes que preparar la muestra e iniciar el análisis, ¡NDA 702 hará el resto!
<br><br>
<h5>Analizador versátil para muestras sólidas y líquidas</h5>


El análisis de elementos VELP NDA 702 permite que las caricaturas registren varias simultáneamente y acepta muestras sólidas, semisólidas y líquidas.
<br><br>
NDA 702 está diseñado para funcionar las 24 horas del día, los 365 días del año.
<br><br>
El automuestreador  VELP viene con un disco  de 30 posiciones con la posibilidad de agregar hasta tres más para un total de 117 muestras.
<br><br>
El límite LOD detectado es el más bajo de su categoría y permite leer permite leer cantidades mínimas de nitrógeno hasta 0,001 mgN con Helio como gas portador (0,01 mgN con argón).
<br><br>
NDA 702 garantiza una reproducibilidad total con una RSD inferior al 0,5%.
<br><br>
<h5>Máxima eficiencia para su laboratorio</h5>
<br><br>


NDA 702 analiza muestras de hasta 1g y reduce los costes operativos gracias a la optimización en la gestión del gas y la larga vida útil de los consumibles VELP originales. Además, gracias a la posibilidad de elegir si usar Helio o Argón, le permite ahorrar en el costo del Helio.
El TCD LoGASTM garantiza la máxima precisión y no requiere gas de referencia, lo que reduce los costos operativos;
NDA 702 garantiza un consumo de oxígeno muy bajo gracias a las funciones de optimización de métodos de DumaSoftTM;
La trampa física única DriStepTM  elimina el 99% del agua y reduce el costo de los consumibles químicos;
NDA 702 es fácil de instalar y gracias a su tamaño compacto ahorra un valioso espacio en el laboratorio;
La tecnología VELP TEMS reduce drásticamente los desechos en comparación con otros métodos de determinación de Nitrógeno/Proteínas.
<br><br>
<h5>El proceso operativo de NDA 702</h5>
<br><br>

El método Dumas consiste en la combustión de la muestra que se realiza en el interior del horno VELP (CR) a una temperatura superior a 1000 °C, obteniendo compuestos elementales.
<br><br>
NDA 702 prevé la separación del agua en 2 pasos. La primera con la trampa física DriStep ™ (WT1) estratégicamente colocada después de la combustión y la segunda con un tipo químico (WT2) que asegura la completa eliminación del agua.
<br><br>
Entre las dos trampas, los gases generados pasan por un horno de reducción (RR) donde los compuestos de oxidación del nitrógeno se transforman en nitrógeno molecular.
<br><br>
Luego, el CO2 se elimina gracias a los exclusivos absorbentes VELP (CO2) autoregeneradores.
<br><br>
En este punto, el nitrógeno molecular se detecta con el innovador detector de conductividad térmica TCD LoGas ™ que enviará los datos a DumaSoftTM para el cálculo de la cantidad de Nitrógeno y Proteínas. ¡Todo en 4 minutos!
DUMASoft™ software poderoso e intuitivo
<br><br>
Hemos diseñado NDA 702 para garantizar la máxima facilidad de uso con la Interfaz de Usuario intuitiva de DUMASoftTM y para la máxima facilidad de elección entre Helio y Argón.
<br><br>
En la ventana principal hay una sección desde la que es posible tener control sobre el estado del instrumento.
<br><br>
Configurar un análisis es extremadamente simple. La base de datos y el gráfico en tiempo real son fácilmente accesibles y con la conexión para la balanza la preparación de los análisis es aún más rápida.
<br><br>
DUMASoftTM contiene una gran biblioteca de métodos preinstalados, soporte multilingüe y creación de informes con exportación en .csv, LIMS y.xls.
<br><br>
Cree y gestione curvas de calibración, nómbrelas y esté siempre preparado para utilizar la más adecuada.
<br><br>
Administre las pruebas de fugas y elija si desea ejecutarlas en todo el circuito o solo por zona, después de reemplazar un consumible, por ejemplo.
VELP Ermes lleva su analizador a la nube
<br><br>

NDA 702 gracias a la conectividad a VELP Ermes permite reducir las operaciones de rutina en tus instrumentos gracias al monitoreo en tiempo real de tus productos estés donde estés, en cualquier momento.
<br><br>
Un analizador elemental diseñado para el trabajo continuo con procesos totalmente automatizados y con VELP Ermes le permite reducir drásticamente los tiempos de diagnóstico para garantizar una asistencia superior con la máxima seguridad de datos y protección de sus datos.
<br><br>
Las notificaciones y alertas inmediatas te permitirán estar siempre informado sobre el estado de tu análisis y gracias a la interrupción remota tendrás el control total de tus procesos, garantizando la máxima seguridad.
<br><br>
Acceda a la base de datos de su instrumento con total seguridad a través de la plataforma VELP Ermes y colabore con sus colegas creando y compartiendo informes desde PC, teléfonos inteligentes y tabletas.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro04_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "Digestores automaticos",
            keyname: "digestores-automaticos",
          },
          name: "DKL 8 Digestor Automático Kjeldahl",
          description:
            "Unidades de digestión Kjeldahl completamente automático con bloque calefactor de aluminio de 8 posiciones que ofrece una excelente estabilidad térmica y homogeneidad.",
          descriptionLong: `Unidades de digestión Kjeldahl completamente automático con bloque calefactor de aluminio de 8 posiciones que ofrece una excelente estabilidad térmica y homogeneidad.
          <br><br>
          <h5>Automatización para una productividad sin igual</h5>
          <br>
Los digestores DKL son totalmente automáticos y están listos para su uso inmediato, ya que están compuestos por un bloque calefactor de aluminio, un elevador para la manipulación automática de muestras, la campana de aspiración, tubos de ensayo, rejillas para tubos de ensayo y bandeja de antigoteo.
<br><br>
La serie DKL proporciona al operador la tecnología de última generación que permite al técnico de laboratorio configurar el análisis eligiendo entre una biblioteca de 54 programas (30 preinstalados + 24 personalizables), presionar START y dedicarse a otra cosa.
<br><br>
La facilidad de carga y descarga hace que los DKL sean un verdadero placer, sin siquiera la necesidad de manipular las muestras mientras aún están hirviendo.
<br><br>

<h5>Bloque calefactor de aluminio para un excelente rendimiento</h5>
<br>

El bloque calefactor de aluminio DKL extremadamente rápido es capaz de alcanzar 420 ° C en solo 20 minutos y mantener la temperatura con una precisión de ± 0.5 ° C.
<br><br>
Incluso en términos de repetibilidad y conductividad, el aluminio ofrece unas prestaciones increíblemente altas.
<br><br>
Los digestores DKL reducen drásticamente el tiempo necesario para alcanzar la temperatura de digestión según el método Kjeldahl.
Diseño compacto para reducir las dimensiones totales
<br><br>
Todos sabemos que nunca hay suficiente espacio en el laboratorio, por eso hemos hecho que la serie DKL sea lo más compacta posible.
<br><br>
El tamaño reducido le permite optimizar el espacio de la mesa de acuerdo con sus necesidades: coloque más instrumentos en la misma superficie del laboratorio o utilice el espacio adicional disponible de una manera diferente.
<br><br>
Muchos laboratorios prefieren llevar a cabo las mineralizaciones bajo una campana extractora y el diseño compacto de la serie DKL asegura un uso mínimo de un espacio precioso gracias a la disposición vertical del bloque de aluminio que siempre ha sido prerrogativa de los digestores VELP.
<br><br>

Pantalla brillante para una comunicación clara y rápida, en un vistazo
<br><br>
Disfrute de la simplicidad de una pantalla DKL. Extremadamente brillante, fácil de leer y práctica, con todos los parámetros más importantes mostrados en la pantalla principal. Los tiempos de análisis, las temperaturas, cualquier rampa se pueden controlar en cualquier momento solo con mirar rápidamente a la pantalla.
<br><br>
También es posible seleccionar diferentes idiomas, para facilitar la comunicación con el usuario. 
<br><br>
Una mejoría en la comunicación se traduce con una mejora en la eficiencia
<br><br>
<h5>Neutraliza los gases producidos durante la digestión</h5>
<br>
Durante la digestión de Kjeldahl, en la que se utiliza ácido sulfúrico, se producen humos altamente corrosivos y peligrosos. Para asegurar la completa eliminación de los humos producidos durante la digestión, los digestores DKL deben estar conectados a:
KS 1000 Scrubber: para neutralizar humos tóxicos y corrosivos
<br><br>
<h5>Tecnología TEMS™</h5>

La serie DKL utiliza la exclusiva tecnología TEMS™, que puede garantizar importantes ahorros. 
<br><br>
Time: calentamiento rápido a 420 °C en solo 22 minutos, excelente fiabilidad, homogeneidad y precisión de temperatura.
<br><br>
Energy: consumo reducido en un 35%, reducción de emisiones de CO2 al reducir la contaminación.
<br><br>
Money: reducción significativa del coste por análisis, aumente el número de análisis sin costes adicionales.
<br><br>
Space: perfil compacto, uso mínimo del espacio en la mesa para una gestión óptima del laboratorio
          `,
          videoLink: "o_ZCXNIhtaA",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro05_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "Digestores automaticos",
            keyname: "digestores-automaticos",
          },
          name: "DKL 12 Digestor Automático Kjeldahl",
          description:
            "Unidades de digestión Kjeldahl completamente automático con bloque calefactor de aluminio de 12 posiciones que ofrece una excelente estabilidad térmica y homogeneidad.",
          descriptionLong: `Unidades de digestión Kjeldahl completamente automático con bloque calefactor de aluminio de 12 posiciones que ofrece una excelente estabilidad térmica y homogeneidad.
          <br><br>
          <h5>Automatización para una productividad sin igual</h5>
          Los digestores DKL son totalmente automáticos y están listos para su uso inmediato, ya que están compuestos por un bloque calefactor de aluminio, un elevador para la manipulación automática de muestras, la campana de aspiración, tubos de ensayo, rejillas para tubos de ensayo y bandeja de antigoteo.
          <br><br>
          
          La serie DKL proporciona al operador la tecnología de última generación que permite al técnico de laboratorio configurar el análisis eligiendo entre una biblioteca de 54 programas (30 preinstalados + 24 personalizables), presionar START y dedicarse a otra cosa.
          <br><br>
          
          La facilidad de carga y descarga hace que los DKL sean un verdadero placer, sin siquiera la necesidad de manipular las muestras mientras aún están hirviendo.
          <br><br>
          
          
          <h5>Bloque calefactor de aluminio para unas excelentes prestaciones</h5>
          El bloque calefactor de aluminio DKL extremadamente rápido es capaz de alcanzar 420 °C en solo 20 minutos y mantener la temperatura con una precisión de ± 0.5 °C.
          <br><br>
          
          Incluso en términos de repetibilidad y conductividad, el aluminio ofrece unas prestaciones increíblemente altas.
          <br><br>
          
          Los digestores DKL reducen drásticamente el tiempo necesario para alcanzar la temperatura de digestión según el método Kjeldahl.
          Diseño compacto para reducir las dimensiones totales
          <br><br>
          
          
          Todos sabemos que nunca hay suficiente espacio en el laboratorio, por eso hemos hecho que la serie DKL sea lo más compacta posible.
          <br><br>
          
          El tamaño reducido le permite optimizar el espacio de la mesa de acuerdo con sus necesidades: coloque más instrumentos en la misma superficie del laboratorio o utilice el espacio adicional disponible de una manera diferente.
          <br><br>
          
          Muchos laboratorios prefieren llevar a cabo las mineralizaciones bajo una campana extractora y el diseño compacto de la serie DKL asegura un uso mínimo de un espacio precioso gracias a la disposición vertical del bloque de aluminio que siempre ha sido prerrogativa de los digestores VELP.
          <br><br>
          
          
          Disfrute de la simplicidad de una pantalla DKL. Extremadamente brillante, fácil de leer y práctica, con todos los parámetros más importantes mostrados en la pantalla principal. Los tiempos de análisis, las temperaturas, cualquier rampa se pueden controlar en cualquier momento solo con mirar rápidamente a la pantalla.
          <br><br>
          
          También es posible seleccionar diferentes idiomas, para facilitar la comunicación con el usuario. 
          <br><br>
          
          Una mejoría en la comunicación se traduce con una mejora en la eficiencia
          <br><br>
          
          Neutraliza los gases producidos durante la digestión
          <br><br>
          
          Durante la digestión de Kjeldahl, en la que se utiliza ácido sulfúrico, se producen humos altamente corrosivos y peligrosos. Para asegurar la completa eliminación de los humos producidos durante la digestión, los digestores DKL deben estar conectados a:
          <br><br>
          
          KS 1000 Scrubber: para neutralizar humos tóxicos y corrosivos
          <br><br>
          
          Tecnología TEMS™
          <br><br>
          
          La serie DKL utiliza la exclusiva tecnología TEMS™, que puede garantizar importantes ahorros. 
          <br><br>
          
          Time: calentamiento rápido a 420 °C en solo 22 minutos, excelente fiabilidad, homogeneidad y precisión de temperatura.
          <br><br>
          
          Energy: consumo reducido en un 35%, reducción de emisiones de CO2 al reducir la contaminación.
          <br><br>
          
          Money: reducción significativa del coste por análisis, aumente el número de análisis sin costes adicionales.
          <br><br>
          
          Space: perfil compacto, uso mínimo del espacio en la mesa para una gestión óptima del laboratorio
          <br><br>
          `,
          videoLink: "o_ZCXNIhtaA",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro06_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "Digestores automaticos",
            keyname: "digestores-automaticos",
          },
          name: "DKL 20 Digestor Automático Kjeldahl",
          description:
            "Unidades de digestión Kjeldahl completamente automático con bloque calefactor de aluminio de 20 posiciones que ofrece una excelente estabilidad térmica y homogeneidad.",
          descriptionLong: `Unidades de digestión Kjeldahl completamente automático con bloque calefactor de aluminio de 20 posiciones que ofrece una excelente estabilidad térmica y homogeneidad.
          <br><br>
          Los digestores DKL son totalmente automáticos y están listos para su uso inmediato, ya que están compuestos por un bloque calefactor de aluminio, un elevador para la manipulación automática de muestras, la campana de aspiración, tubos de ensayo, rejillas para tubos de ensayo y bandeja de antigoteo.
          <br><br>
          
          La serie DKL proporciona al operador la tecnología de última generación que permite al técnico de laboratorio configurar el análisis eligiendo entre una biblioteca de 54 programas (30 preinstalados + 24 personalizables), presionar START y dedicarse a otra cosa.
          <br><br>
          
          La facilidad de carga y descarga hace que los DKL sean un verdadero placer, sin siquiera la necesidad de manipular las muestras mientras aún están hirviendo.
          <br><br>
          
          <h5>Bloque calefactor de aluminio para unas excelentes prestaciones</h5>
          
          
          
          El bloque calefactor de aluminio DKL extremadamente rápido es capaz de alcanzar 420 °C en solo 20 minutos y mantener la temperatura con una precisión de ± 0.5 °C.
          <br><br>
          
          Incluso en términos de repetibilidad y conductividad, el aluminio ofrece unas prestaciones increíblemente altas.
          <br><br>
          
          Los digestores DKL reducen drásticamente el tiempo necesario para alcanzar la temperatura de digestión según el método Kjeldahl.
          <br><br>
          
          <h5>Diseño compacto para reducir las dimensiones totales</h5>
          
          Todos sabemos que nunca hay suficiente espacio en el laboratorio, por eso hemos hecho que la serie DKL sea lo más compacta posible.
          <br><br>
          
          El tamaño reducido le permite optimizar el espacio de la mesa de acuerdo con sus necesidades: coloque más instrumentos en la misma superficie del laboratorio o utilice el espacio adicional disponible de una manera diferente.
          <br><br>
          
          Muchos laboratorios prefieren llevar a cabo las mineralizaciones bajo una campana extractora y el diseño compacto de la serie DKL asegura un uso mínimo de un espacio precioso gracias a la disposición vertical del bloque de aluminio que siempre ha sido prerrogativa de los digestores VELP.
          <br><br>
          
          <h5>Pantalla brillante para una comunicación clara y rápida, en un vistazo</h5>
          
          Disfrute de la simplicidad de una pantalla DKL. Extremadamente brillante, fácil de leer y práctica, con todos los parámetros más importantes mostrados en la pantalla principal. Los tiempos de análisis, las temperaturas, cualquier rampa se pueden controlar en cualquier momento solo con mirar rápidamente a la pantalla.
          <br><br>
          
          También es posible seleccionar diferentes idiomas, para facilitar la comunicación con el usuario. 
          <br><br>
          
          Una mejoría en la comunicación, se traduce con una mejora en la eficiencia
          <br><br>
          
          
          Digestores DKL 20 también para los análisis de la DQO
          <br><br>
          El DKL 20 es un digestor versátil que para aplicaciones como el análisis  Kjeldahl y DQO ​​para el tratamiento de agua.
          <br><br>
          
          Para utilizar DKL 20 para realizar el análisis de Demanda Química de Oxígeno (DQO) es necesario configurar el instrumento con los accesorios correctos que permitan la digestión de 20 muestras al mismo tiempo.
          Neutraliza los gases producidos durante la digestión
          <br><br>
          
          
          Durante la digestión de Kjeldahl, en la que se utiliza ácido sulfúrico, se producen humos altamente corrosivos y peligrosos. Para asegurar la completa eliminación de los humos producidos durante la digestión, los digestores DKL deben estar conectados a:
          KS 1000 Scrubber: para neutralizar humos tóxicos y corrosivos
          Tecnología TEMS™
          <br><br>
          
          
          La serie DKL utiliza la exclusiva tecnología TEMS™, que puede garantizar importantes ahorros. 
          <br><br>
          
          Time: calentamiento rápido a 420 °C en solo 22 minutos, excelente fiabilidad, homogeneidad y precisión de temperatura.
          <br><br>
          
          Energy: consumo reducido en un 35%, reducción de emisiones de CO2 al reducir la contaminación.
          <br><br>
          
          Money: reducción significativa del coste por análisis, aumente el número de análisis sin costes adicionales.
          <br><br>
          
          Space: perfil compacto, uso mínimo del espacio en la mesa para una gestión óptima del laboratorio
          `,
          videoLink: "o_ZCXNIhtaA",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro07_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "Digestores automaticos",
            keyname: "digestores-automaticos",
          },
          name: "DKL 42/26 Digestor Automático Kjeldahl",
          description:
            "Unidades de digestión Kjeldahl completamente automático con bloque calefactor de aluminio de 42 posiciones que ofrece una excelente estabilidad térmica y homogeneidad.",
          descriptionLong: `Unidades de digestión Kjeldahl completamente automático con bloque calefactor de aluminio de 42 posiciones que ofrece una excelente estabilidad térmica y homogeneidad.
          <br><br>
          <h5>Automatización para una productividad sin igual</h5>
          Durante la digestión de Kjeldahl, en la que se utiliza ácido sulfúrico, se producen humos altamente corrosivos y peligrosos. Para asegurar la completa eliminación de los humos producidos durante la digestión, los digestores DK deben estar conectados a:
          <br><br>
          
          
          Unidad de succión JP: para asegurar una excelente aspiración
          <br>
          Scrubber SMS: para neutralizar humos tóxicos y corrosivos
          <br><br>
          
          
          <h5>Bloque calefactor de aluminio para unas excelentes prestaciones</h5>
          
          
          El bloque calefactor de aluminio DKL extremadamente rápido es capaz de alcanzar 420 °C en solo 20 minutos y mantener la temperatura con una precisión de ± 0.5 °C.
          <br><br>
          
          Incluso en términos de repetibilidad y conductividad, el aluminio ofrece unas prestaciones increíblemente altas.
          <br><br>
          
          Los digestores DKL reducen drásticamente el tiempo necesario para alcanzar la temperatura de digestión según el método Kjeldahl.
          <br><br>
          
          
          Diseño compacto para reducir las dimensiones totales
          Todos sabemos que nunca hay suficiente espacio en el laboratorio, por eso hemos hecho que la serie DKL sea lo más compacta posible.
          <br><br>
          
          El tamaño reducido le permite optimizar el espacio de la mesa de acuerdo con sus necesidades: coloque más instrumentos en la misma superficie del laboratorio o utilice el espacio adicional disponible de una manera diferente.
          <br><br>
          
          Muchos laboratorios prefieren llevar a cabo las mineralizaciones bajo una campana extractora y el diseño compacto de la serie DKL asegura un uso mínimo de un espacio precioso gracias a la disposición vertical del bloque de aluminio que siempre ha sido prerrogativa de los digestores VELP.
          <br><br>
          
          
          <h5>Pantalla brillante para una comunicación clara y rápida, en un vistazo</h5>
          Disfrute de la simplicidad de una pantalla DKL. Extremadamente brillante, fácil de leer y práctica, con todos los parámetros más importantes mostrados en la pantalla principal. Los tiempos de análisis, las temperaturas, cualquier rampa se pueden controlar en cualquier momento solo con mirar rápidamente a la pantalla.
          <br><br>
          
          También es posible seleccionar diferentes idiomas, para facilitar la comunicación con el usuario. 
          <br><br>
          
          Una mejoría en la comunicación se traduce con una mejora en la eficiencia
          <br><br>
          
          <h5>Neutraliza los gases producidos durante la digestión</h5>
          
          
          Durante la digestión de Kjeldahl, en la que se utiliza ácido sulfúrico, se producen humos altamente corrosivos y peligrosos. Para asegurar la completa eliminación de los humos producidos durante la digestión, los digestores DKL deben estar conectados a:
          <br><br>
          
          
          KS 1000 Scrubber: para neutralizar humos tóxicos y corrosivos
          <br><br>
          
          Tecnología TEMS™
          La serie DKL utiliza la exclusiva tecnología TEMS™, que puede garantizar importantes ahorros. 
          <br>
          
          Time: calentamiento rápido a 420 °C en solo 22 minutos, excelente fiabilidad, homogeneidad y precisión de temperatura.
          <br>
          
          Energy: consumo reducido en un 35%, reducción de emisiones de CO2 al reducir la contaminación.
          <br>
          
          Money: reducción significativa del coste por análisis, aumente el número de análisis sin costes adicionales.
          <br>
          
          Space: perfil compacto, uso mínimo del espacio en la mesa para una gestión óptima del laboratorio
          `,
          videoLink: "o_ZCXNIhtaA",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro08_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "Digestores semiautomaticos",
            keyname: "digestores-semiautomaticos",
          },
          name: "DK 6 Digestor Kjeldahl",
          description:
            "Unidades de digestión Kjeldahl con bloque calefactor de aluminio de 6 posiciones que ofrece una excelente homogeneidad térmica.",
          descriptionLong: `Unidades de digestión Kjeldahl con bloque calefactor de aluminio de 6 posiciones que ofrece una excelente homogeneidad térmica.
          <br><br>
          <h5>Homogeneidad y precisión térmica</h5>
          La unidad de digestión de la serie DK 6 con bloque térmico de aluminio garantiza un calentamiento de alta homogeneidad térmica hasta 450 °C. La temperatura del bloque está constantemente controlada por un microprocesador y es extremadamente estable, homogénea y precisa: ±0,5 °C en todas las temperaturas seleccionables.
          <br><br>
          
          La serie DK 6 garantiza la precisión y la repetibilidad. La serie DK 6 realiza la digestión por lotes de hasta 6 muestras con tubos de ensayo de 250 ml - Ø 42 m, reduciendo el consumo de energía (-13% en comparación con la serie anterior). El bajo consumo de energía proporciona menores costes de análisis y limita la liberación de CO2.
          <br><br>
          
          <h5>Diseño que ahorra espacio</h5>
          
          El diseño de la serie DK ha sido cuidadosamente concebido para permitir a los laboratorios ahorrar un valioso espacio bajo la campana.
          <br><br>
          
          Los digestores DK tienen unas dimensiones muy compactas: el nuevo bloque calefactor de aluminio se ha rebajado y las proporciones verticales permiten liberar un espacio precioso en el laboratorio.
          <br><br>
          
          La estructura es de acero inoxidable que ha sido específicamente diseñada y probada para garantizar una fuerte resistencia a los productos químicos y a la tensión mecánica.
          <br><br>
          
          La rejilla de protección del bloque de aluminio proporciona un mayor rendimiento de calentamiento y protege el bloque de calentamiento de las salpicaduras y los productos químicos.
          <br><br>
          
          
          <h5>Fácil de usar con la intuitiva interfaz digital</h5>
          
          
          La brillante pantalla digital ofrece la máxima visibilidad e información de fácil lectura.
          <br><br>
          
          El instrumento se maneja con 4 teclas para navegar por las opciones del menú y programar las digestiones de forma sencilla y rápida.
          <br><br>
          
          A través de la intuitiva pantalla gráfica es posible configurar hasta 20 métodos con 4 rampas de temperatura.
          <br><br>
          
          Las señales acústicas informan al operador de la finalización del análisis facilitando el uso diario del digestor.
          <br><br>
          
          La inclinación del panel frontal lo protege de derrames químicos a altas temperaturas.
          Digestión de la DQO con DK 6
          <br><br>
          
          
          El DK 6 es un digestor versátil adecuado para aplicaciones de N/Proteína Kjeldahl y Demanda Química de Oxígeno en la industria medioambiental.
          <br><br>
          
          Para utilizar el DK 6 para la DQO (Demanda Química de Oxígeno) es necesario configurarlo añadiendo un sistema de soporte diferente capaz de gestionar todo el vidrio necesario para el análisis de la DQO para procesar 6 muestras simultáneamente.
          Determinación de trazas de metales pesados
          <br><br>
          
          
          El DK 6 y el TMD 6 son la solución fiable para la digestión con agua regia (ácido nitroclórico) con el fin de determinar la proporción de metales solubles en ácido en lodos de depuradora, sedimentos y suelos, de acuerdo con los métodos oficiales (norma DIN 38414-S7).
          <br><br>
          <ul>
          <li>Los condensadores con camisa de agua de la TMD 6 retienen todo el Hg, Cd, Pb, Cr, Cu, Zn, etc.</li>
          <li>TMD 6 está compuesto por componentes de vidrio de alta calidad con soportes para DK 6</li>
          <li>Excelente exactitud y precisión con una homogeneidad de temperatura de ± 0,5 °C</li>
          <li>Diseño que ahorra espacio</li>
          <li>Interfaz intuitiva</li>
          <li>Tecnología TEMSTM</li>
          </ul>
          <br><br>
          <h5>Sistema de neutralización de humos</h5>
          
          Para las aplicaciones en las que el proceso de digestión produce humos, gases ácidos o sustancias corrosivas, se recomiendan encarecidamente al siguientes accesorio específico:
          KS 1000 Scrubber neutraliza todos los humos
          Tecnología TEMS
          <br><br>
          
          
          Las unidades de digestión Kjeldahl de la serie DK funcionan con las innovadoras ventajas de TEMS™, para conseguir un gran ahorro.
          <br><br>
          
          Ahorro de tiempo: el calentamiento rápido reduce la pérdida de tiempo
          <br>
          Ahorro de energía: el consumo de energía es limitado, por lo que se reducen las emisiones de CO2
          <br>
          Ahorro de dinero: reducción del coste de cada análisis
          <br>
          Ahorro de espacio: el estrecho espacio que ocupa ahorra un valioso espacio en la mesa del laboratorio
        `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro09_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "Digestores semiautomaticos",
            keyname: "digestores-semiautomaticos",
          },
          name: "DK 6-48 Digestor Kjeldahl",
          description:
            "Unidades de digestión Kjeldahl con un bloque de calentamiento de aluminio de 6 posiciones para tubos de ensayo de 48 mm de diámetro que ofrece una excelente homogeneidad térmica.",
          descriptionLong: `Unidades de digestión Kjeldahl con un bloque de calentamiento de aluminio de 6 posiciones para tubos de ensayo de 48 mm de diámetro que ofrece una excelente homogeneidad térmica.
          <br><br>
          <h5>Homogeneidad y precisión térmica</h5>
          La unidad de digestión de la serie DK 6/48 con bloque calefactor de aluminio garantiza un calentamiento de alta homogeneidad térmica hasta 450 °C. La temperatura del bloque se controla constantemente mediante un microprocesador y es extremadamente estable, homogénea y precisa: 0,5 °C en todas las temperaturas seleccionables.
          <br><br>
          
          La serie DK 6/48 garantiza la precisión y la repetibilidad. Programe sus métodos con el tiempo de digestión y hasta 4 rampas de temperatura a través de la intuitiva pantalla digital.
          <br><br>
          
          La serie DK 6/48 realiza la digestión por lotes de hasta 6 muestras con tubos de ensayo de 300 ml - Ø 48 mm, reduciendo el consumo de energía en un 13% en comparación con la serie anterior.
          <br><br>
          
          El bajo consumo de energía permite tener bajos costes para cada análisis y limitar la liberación de CO2.
          <br><br>
          
          <h5>Diseño que ahorra espacio</h5>
          El nuevo diseño de la Serie DK ha sido estudiado para permitir a los laboratorios ahorrar un valioso espacio bajo la campana extractora.
          <br><br>
          
          Las unidades de digestión DK 6/48 tienen unas dimensiones muy compactas: el nuevo bloque calefactor de aluminio se ha rebajado como consecuencia de las mayores prestaciones de la nueva Serie.
          <br><br>
          
          La estructura está fabricada en acero inoxidable estudiado y probado para asegurar una fuerte resistencia a los agentes químicos o mecánicos.
          <br><br>
          
          
          <h5>Una nueva interfaz intuitiva y protección</h5>
          La nueva pantalla digital brillante proporciona la máxima visibilidad y una fácil lectura de la información. La inclinación del panel frontal lo protege de las salpicaduras y de los productos químicos calientes.
          <br><br>
          
          El uso del instrumento se controla con sólo 4 teclas: permiten una fácil navegación por todas las funciones durante la programación o el uso normal.
          <br><br>
          
          La nueva rejilla garantiza un mayor rendimiento de la calefacción y protege el bloque de calefacción de aluminio y los tubos.
          <br><br>
          
          
          <h5>Sistema de neutralización de humos</h5>
          Para las aplicaciones en las que el proceso de digestión produce humos, gases ácidos o sustancias corrosivas, se recomiendan encarecidamente el siguiente accesorio específico:
          <br><br>
          KS 1000 Scrubber neutraliza todos los humos
          <br><br>
          
          <h5>Tecnología TEMS</h5>
          Las unidades de digestión Kjeldahl de la serie DK funcionan con las innovadoras ventajas de TEMS™, para conseguir un gran ahorro.
          <br><br>
          
          Ahorro de tiempo: el calentamiento rápido reduce la pérdida de tiempo
          <br>
          Ahorro de energía: el consumo de energía es limitado, por lo que se reducen las emisiones de CO2
          <br>
          Ahorro de dinero: reducción del coste de cada análisis
          <br>
          Ahorro de espacio: el estrecho espacio que ocupa ahorra un valioso espacio en la mesa del laboratorio
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro10_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "Digestores semiautomaticos",
            keyname: "digestores-semiautomaticos",
          },
          name: "DK 8 Digestor Kjeldahl",
          description: "Unidades de digestión Kjeldahl con bloque calefactor de aluminio de 8 posiciones que ofrece una excelente homogeneidad térmica.",
          descriptionLong: `Unidades de digestión Kjeldahl con bloque calefactor de aluminio de 8 posiciones que ofrece una excelente homogeneidad térmica.
          <br><br>
          <h5>Homogeneidad y precisión térmica</h5>
          La unidad de digestión de la serie DK 8 con bloque calefactor de aluminio garantiza un calentamiento de alta homogeneidad térmica hasta 450 °C. La temperatura del bloque está constantemente controlada por un microprocesador y es extremadamente estable, homogénea y precisa: ±0,5 °C en todas las temperaturas seleccionables.
          <br><br>
          
          La serie DK 8 garantiza la precisión y la repetibilidad. El DK 8 realiza la digestión por lotes de hasta 8 muestras con tubos de ensayo de 250 ml - Ø 42 m, reduciendo el consumo de energía (-13% en comparación con la serie anterior). El bajo consumo de energía proporciona menores costes de análisis y limita la liberación de CO2.
          <br><br>
          <h5>Diseño que ahorra espacio</h5>
          El diseño de la serie DK ha sido cuidadosamente concebido para permitir a los laboratorios ahorrar un valioso espacio bajo la campana.
          <br><br>
          
          Los digestores DK tienen unas dimensiones muy compactas: el nuevo bloque calefactor de aluminio se ha rebajado y las proporciones verticales permiten liberar un espacio precioso en el laboratorio.
          <br><br>
          
          La estructura es de acero inoxidable que ha sido específicamente diseñada y probada para garantizar una fuerte resistencia a los productos químicos y a la tensión mecánica.
          <br><br>
          
          La rejilla de protección del bloque de aluminio proporciona un mayor rendimiento de calentamiento y protege el bloque de calentamiento de las salpicaduras y los productos químicos.
          <br><br>
          
          
          <h5>Fácil de usar con la intuitiva interfaz digital</h5>
          La brillante pantalla digital ofrece la máxima visibilidad e información de fácil lectura.
          <br><br>
          
          El instrumento se maneja con 4 teclas para navegar por las opciones del menú y programar las digestiones de forma sencilla y rápida.
          <br><br>
          
          A través de la intuitiva pantalla gráfica es posible configurar hasta 20 métodos con 4 rampas de temperatura.
          <br><br>
          
          Las señales acústicas informan al operador de la finalización del análisis facilitando el uso diario del digestor.
          <br><br>
          
          La inclinación del panel frontal lo protege de derrames químicos a altas temperaturas.
          <h5>Sistema de neutralización de humos</h5>
          
          Para las aplicaciones en las que el proceso de digestión produce humos, gases ácidos o sustancias corrosivas, se recomiendan encarecidamente el siguiente accesorio específico
          <br><br>
          
          
          KS 1000 Scrubber neutraliza todos los humos
          <br><br>
          
          <h5>Tecnología TEMS</h5>
          
          Las unidades de digestión Kjeldahl de la serie DK funcionan con las innovadoras ventajas de TEMS™, para conseguir un gran ahorro.
          <br><br>
          
          Ahorro de tiempo: el calentamiento rápido reduce la pérdida de tiempo
          <br>
          Ahorro de energía: el consumo de energía es limitado, por lo que se reducen las emisiones de CO2
          <br>
          Ahorro de dinero: reducción del coste de cada análisis
          <br>
          Ahorro de espacio: el estrecho espacio que ocupa ahorra un valioso espacio en la mesa del laboratorio
          <br>
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro11_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "Digestores semiautomaticos",
            keyname: "digestores-semiautomaticos",
          },
          name: "DK 18-26 Digestor Kjeldahl",
          description: "Unidades de digestión Kjeldahl con bloque calefactor de aluminio de 18 posiciones que ofrece una excelente homogeneidad térmica para aplicaciones micro-kjeldahl.",
          descriptionLong: `Unidades de digestión Kjeldahl con bloque calefactor de aluminio de 18 posiciones que ofrece una excelente homogeneidad térmica para aplicaciones micro-kjeldahl.
          <br><br>
          <h5>Homogeneidad y precisión térmica</h5>
          La unidad de digestión de la serie DK 18/26 con bloque calefactor de aluminio garantiza un calentamiento de alta homogeneidad térmica hasta 450 °C. La temperatura del bloque está constantemente controlada por un microprocesador y es extremadamente estable, homogénea y precisa: ±0,5 °C en todas las temperaturas seleccionables.
          <br><br>
          
          La serie DK 18/26 garantiza la precisión y la repetibilidad. El DK 18/26 realiza la digestión por lotes de hasta 18 muestras con tubos de ensayo de 100 ml - Ø 26 mm, reduciendo el consumo de energía (-13% en comparación con la serie anterior). El bajo consumo de energía proporciona menores costes de análisis y limita la liberación de CO2.
          <br><br>
          
          <h5>Diseño que ahorra espacio</h5>
          
          La brillante pantalla digital ofrece la máxima visibilidad e información de fácil lectura.
          <br><br>
          
          El instrumento se maneja con 4 teclas para navegar por las opciones del menú y programar las digestiones de forma sencilla y rápida.
          <br><br>
          
          A través de la intuitiva pantalla gráfica es posible configurar hasta 20 métodos con 4 rampas de temperatura.
          <br><br>
          
          Las señales acústicas informan al operador de la finalización del análisis facilitando el uso diario del digestor.
          <br><br>
          
          La inclinación del panel frontal lo protege de derrames químicos a altas temperaturas.
          <br><br>
          
          <h5>Fácil de usar con la intuitiva interfaz digital</h5>
          
          La brillante pantalla digital ofrece la máxima visibilidad e información de fácil lectura.
          <br><br>
          
          El instrumento se maneja con 4 teclas para navegar por las opciones del menú y programar las digestiones de forma sencilla y rápida.
          <br><br>
          
          A través de la intuitiva pantalla gráfica es posible configurar hasta 20 métodos con 4 rampas de temperatura.
          <br><br>
          
          Las señales acústicas informan al operador de la finalización del análisis facilitando el uso diario del digestor.
          <br><br>
          
          La inclinación del panel frontal lo protege de derrames químicos a altas temperaturas.
          <br><br>
          <h5>Sistema de neutralización de humos</h5>
          
          Para las aplicaciones en las que el proceso de digestión produce humos, gases ácidos o sustancias corrosivas, se recomiendan encarecidamente el siguiente accesorio específico:
          <br><br>
          
          KS 1000 Scrubber neutraliza todos los humos
          <br><br>
          <h5>Tecnología TEMS</h5>
          Las unidades de digestión Kjeldahl de la serie DK funcionan con las innovadoras ventajas de TEMS™, para conseguir un gran ahorro.
          <br><br>
          Ahorro de tiempo: el calentamiento rápido reduce la pérdida de tiempo
          <br>
          Ahorro de energía: el consumo de energía es limitado, por lo que se reducen las emisiones de CO2
          <br>
          Ahorro de dinero: reducción del coste de cada análisis
          <br>
Ahorro de espacio: el estrecho espacio que ocupa ahorra un valioso espacio en la mesa del laboratorio
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro12_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "Digestores semiautomaticos",
            keyname: "digestores-semiautomaticos",
          },
          name: "DK 20 Digestor Kjeldahl",
          description: "Unidades de digestión Kjeldahl con bloque calefactor de aluminio de 20 posiciones que ofrece una excelente homogeneidad térmica.",
          descriptionLong: `Unidades de digestión Kjeldahl con bloque calefactor de aluminio de 20 posiciones que ofrece una excelente homogeneidad térmica.
          <br><br>
          <h5>Homogeneidad y precisión térmica</h5>
          La unidad de digestión de la serie DK 20 con bloque calefactor de aluminio garantiza un calentamiento de alta homogeneidad térmica hasta 450 °C. La temperatura del bloque está constantemente controlada por un microprocesador y es extremadamente estable, homogénea y precisa: ±0,5 °C en todas las temperaturas seleccionables.
          <br><br>
          
          La serie DK 20 garantiza la precisión y la repetibilidad. La serie DK 20 realiza la digestión por lotes de hasta 20 muestras con tubos de ensayo de 250 ml - Ø 42 m, reduciendo el consumo de energía (-13% en comparación con la serie anterior). El bajo consumo de energía proporciona menores costes de análisis y limita la liberación de CO2.
          <br><br>
          
          <h5>Diseño que ahorra espacio</h5>
          
          El diseño de la serie DK ha sido cuidadosamente concebido para permitir a los laboratorios ahorrar un valioso espacio bajo la campana.
          <br><br>
          
          Los digestores DK tienen unas dimensiones muy compactas: el nuevo bloque calefactor de aluminio se ha rebajado y las proporciones verticales permiten liberar un espacio precioso en el laboratorio.
          <br><br>
          
          La estructura es de acero inoxidable que ha sido específicamente diseñada y probada para garantizar una fuerte resistencia a los productos químicos y a la tensión mecánica.
          <br><br>
          
          La rejilla de protección del bloque de aluminio proporciona un mayor rendimiento de calentamiento y protege el bloque de calentamiento de las salpicaduras y los productos químicos.
          <br><br>
          
          
          <h5>Fácil de usar con la intuitiva interfaz digital</h5>
          
          
          La brillante pantalla digital ofrece la máxima visibilidad e información de fácil lectura.
          <br><br>
          
          El instrumento se maneja con 4 teclas para navegar por las opciones del menú y programar las digestiones de forma sencilla y rápida.
          <br><br>
          
          A través de la intuitiva pantalla gráfica es posible configurar hasta 20 métodos con 4 rampas de temperatura.
          <br><br>
          
          Las señales acústicas informan al operador de la finalización del análisis facilitando el uso diario del digestor.
          <br><br>
          
          La inclinación del panel frontal lo protege de derrames químicos a altas temperaturas.
          <br><br>
          
          Digestión de la DQO con DK 20
          <br><br>
          
          
          El DK 20 es un digestor versátil adecuado para aplicaciones de N/Proteína Kjeldahl y Demanda Química de Oxígeno en la industria medioambiental.
          <br><br>
          
          Para utilizar el DK 20 para la DQO (Demanda Química de Oxígeno) es necesario configurarlo añadiendo un sistema de soporte diferente capaz de gestionar todo el vidrio necesario para el análisis de la DQO para procesar 20 muestras simultáneamente.
          <br><br>
          
          <h5>Sistema de neutralización de humos</h5>
          
          Para las aplicaciones en las que el proceso de digestión produce humos, gases ácidos o sustancias corrosivas, se recomiendan encarecidamente al siguiente accesorio específico:
          <br><br>
          
          
          KS 1000 Scrubber neutraliza todos los humos
          <br><br>
          
          <h5>Tecnología TEMS</h5>
          
          Las unidades de digestión Kjeldahl de la serie DK funcionan con las innovadoras ventajas de TEMS™, para conseguir un gran ahorro.
          <br><br>
          
          Ahorro de tiempo: el calentamiento rápido reduce la pérdida de tiempo
          <br>
          Ahorro de energía: el consumo de energía es limitado, por lo que se reducen las emisiones de CO2
          <br>
          Ahorro de dinero: reducción del coste de cada análisis
          <br>
          Ahorro de espacio: el estrecho espacio que ocupa ahorra un valioso espacio en la mesa del laboratorio
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro13_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "Digestores semiautomaticos",
            keyname: "digestores-semiautomaticos",
          },
          name: "DK 42-26 Digestor Kjeldahl",
          description: "Unidades de digestión Kjeldahl con bloque calefactor de aluminio de 42 posiciones que ofrece una excelente homogeneidad térmica para aplicaciones micro-kjeldahl. ",
          descriptionLong: `Unidades de digestión Kjeldahl con bloque calefactor de aluminio de 42 posiciones que ofrece una excelente homogeneidad térmica para aplicaciones micro-kjeldahl. 
          <br><br>
          <h5>Homogeneidad y precisión térmica</h5>
          La unidad de digestión de la serie DK 42/26 con bloque calefactor de aluminio garantiza un calentamiento de alta homogeneidad térmica hasta 450 °C. La temperatura del bloque está constantemente controlada por un microprocesador y es extremadamente estable, homogénea y precisa: ±0,5 °C en todas las temperaturas seleccionables.
          <br><br>
          
          La serie DK 42/26 garantiza la precisión y la repetibilidad. El DK 42/26 realiza la digestión por lotes de hasta 42 muestras con tubos de ensayo de 100 ml - Ø 26 mm, reduciendo el consumo de energía (-13% en comparación con la serie anterior). El bajo consumo de energía proporciona menores costes de análisis y limita la liberación de CO2.
          <br><br>
          
          <h5>Diseño que ahorra espacio</h5>
          El diseño de la serie DK ha sido cuidadosamente concebido para permitir a los laboratorios ahorrar un valioso espacio bajo la campana.
          <br><br>
          
          Los digestores DK tienen unas dimensiones muy compactas: el nuevo bloque calefactor de aluminio se ha rebajado y las proporciones verticales permiten liberar un espacio precioso en el laboratorio.
          <br><br>
          
          La estructura es de acero inoxidable que ha sido específicamente diseñada y probada para garantizar una fuerte resistencia a los productos químicos y a la tensión mecánica.
          <br><br>
          
          La rejilla de protección del bloque de aluminio proporciona un mayor rendimiento de calentamiento y protege el bloque de calentamiento de las salpicaduras y los productos químicos
          <br><br>
          
          <h5>Fácil de usar con la intuitiva interfaz digital</h5>
          
          La brillante pantalla digital ofrece la máxima visibilidad e información de fácil lectura.
          <br><br>
          
          El instrumento se maneja con 4 teclas para navegar por las opciones del menú y programar las digestiones de forma sencilla y rápida.
          <br><br>
          
          A través de la intuitiva pantalla gráfica es posible configurar hasta 20 métodos con 4 rampas de temperatura.
          <br><br>
          
          Las señales acústicas informan al operador de la finalización del análisis facilitando el uso diario del digestor.
          <br><br>
          
          La inclinación del panel frontal lo protege de derrames químicos a altas temperaturas.
          Sistema de neutralización de humos
          <br><br>
          
          Para aplicaciones en las que el proceso de digestión produce humos, gases ácidos o sustancias corrosivas, se recomienda encarecidamente completar el instrumento con el accesorio específico:
          <br><br>
          
          KS 1000 Scrubber neutraliza todos los humos
          <br><br>
          
          <h5>Tecnología TEMS</h5>
          
          Las unidades de digestión Kjeldahl de la serie DK funcionan con las innovadoras ventajas de TEMS™, para conseguir un gran ahorro.
          <br><br>
          
          Ahorro de tiempo: el calentamiento rápido reduce la pérdida de tiempo
          <br>
          Ahorro de energía: el consumo de energía es limitado, por lo que se reducen las emisiones de CO2
          <br>
          Ahorro de dinero: reducción del coste de cada análisis
          <br>
          Ahorro de espacio: el estrecho espacio que ocupa ahorra un valioso espacio en la mesa del laboratorio
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro14_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "Sistema de neutralización de humo",
            keyname: "sistema-de-neutralizacion-de-humo",
          },
          name: "KS 1000 Scrubber",
          description: "Scrubber compacto, diseñado para neutralizar los humos producidos durante la mineralización y proteger a los operarios del laboratorio, sin necesidad de conexión a la red de agua.",
          descriptionLong: `Scrubber compacto, diseñado para neutralizar los humos producidos durante la mineralización y proteger a los operarios del laboratorio, sin necesidad de conexión a la red de agua.
          <br><br>
          <h5>Máxima seguridad para el laboratorio</h5>
          El Scrubber KS 1000 neutraliza los gases producidos durante la digestión Kjeldahl y protege el entorno del laboratorio y la salud de los operadores.
          <br><br>
          
          La unidad de neutralización KS 1000 elimina la exposición a humos tóxicos, resultantes de la mineralización oxidativa u otros procesos químicos, en 2 pasos:
          <br><br>
          
          Dilución: los gases de reacción fluyen hacia el tanque derecho, donde se disuelven en una solución acuosa. Esta etapa permite atrapar una parte del dióxido de azufre producido durante la digestión.
          Neutralización: en el tanque izquierdo, los gases de reacción se neutralizan mediante una solución de hidróxido de sodio. Gracias a una gran superficie de contacto entre los gases y el líquido, el KS 1000 garantiza una elevada eficacia de neutralización.
          <br><br>
          
          Además, para aplicaciones específicas que requieran la absorción de olores procedentes de la mineralización oxidativa, puede utilizarse un filtro de carbón activo opcional.
          Compacto y fácil de usar
          <br><br>
          
          
          Optimizar el espacio de trabajo en el laboratorio es crucial. El KS 1000 se integra perfectamente con los digestores VELP, extremadamente compactos, ocupando un espacio mínimo dentro de la campana de aspiración y liberando espacio para otros instrumentos. 
          <br><br>
          
          El KS 1000 es compatible con los digestores Kjeldahl semiautomáticos de la serie DK y automáticos de la serie DKL.
          <br><br>
          
          La intuitiva interfaz de usuario, situada en la parte superior del instrumento, permite al operador del laboratorio ajustar fácilmente los niveles de aspiración para adaptarlos a las distintas necesidades.
          Alta resistencia, sin conexión al agua de red
          El Scrubber KS 1000 no requiere conexión a la red, liberando al laboratorio de la dependencia de la toma de agua y de las posibles fluctuaciones de presión.
          <br><br>
          
          Los materiales cuidadosamente seleccionados, como los tanques de vidrio y los tubos de conexión de Viton, ofrecen un rendimiento excelente y una gran durabilidad. Los ocho discos perforados contribuyen significativamente a lograr la máxima eficacia de neutralización.
          <br><br>
          
          El innovador diseño permite acceder fácilmente a todos los componentes, lo que simplifica la limpieza y el mantenimiento.`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro01_1,
          typeProduct: {
            name: "Unidad de digestion",
            keyname: "unidad-digestion",
          },
          categoryProduct: {
            name: "XXXXSistema de neutralización de humo",
            keyname: "XXXXsistema-de-neutralizacion-de-humo",
          },
          name: "",
          description: "",
          descriptionLong: ``,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
      ],
    },
    {
      type: "product-list",
      title: "Equipo de laboratorio",
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
