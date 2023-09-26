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
import pro15_1 from "../assets/landings/velp/instruments/destilacion/udk-169/1VELPUDK169Autokjel01-282149-282184.jpg";
import pro16_1 from "../assets/landings/velp/instruments/destilacion/udk-159/1UDK159-01-251263-251797.jpg";
import pro17_1 from "../assets/landings/velp/instruments/destilacion/udk-149/1UDK149-01-251996-252032.jpg";
import pro18_1 from "../assets/landings/velp/instruments/destilacion/udk-139/1UDK139-01-252106-252124.jpg";
import pro19_1 from "../assets/landings/velp/instruments/destilacion/udk-129/1UDK129-01-251731-251743.jpg";
import pro20_1 from "../assets/landings/velp/instruments/extractores/ser-158/1VELPSER15801-211057-228410.jpg";
import pro21_1 from "../assets/landings/velp/instruments/extractores/ser-148/1SER-148F30300242-237507-237522.jpg";
import pro22_1 from "../assets/landings/velp/instruments/extractores/hu-6/1VELPHU6NEW01-223956-228365.jpg";
import pro23_1 from "../assets/landings/velp/instruments/analizadores/FIWE/1VELPFIWEADVANCE01-211147-227909.jpg";
import pro24_1 from "../assets/landings/velp/instruments/analizadores/fire-semiautomatico/1VELPFIWESA30520200-237585-237639.jpg";
import pro25_1 from "../assets/landings/velp/instruments/extractores/coex/1VELPCOEX01-211220-228218.jpg";
import pro26_1 from "../assets/landings/velp/instruments/digestores/dge/1VELPGDESA30400209-210763-228263.jpg";
import pro27_1 from "../assets/landings/velp/instruments/filtradores/CSF6/1VELPCSF6F30420210-210755-227863.jpg";
import pro28_1 from "../assets/landings/velp/instruments/estabilizadores/OXITEST-reactor/1VELPOXITESTF30910248-211998-227905.jpg";

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
          srcImage: pro15_1,
          typeProduct: {
            name: "Unidad de destilación",
            keyname: "unidad-destilacion",
          },
          categoryProduct: {
            name: "destilación y titulación automatica",
            keyname: "destilacion-y-titulacion-automatica",
          },
          name: "Analizador automático Kjeldahl UDK 169 con automuestreador AutoKjel",
          description: "Sistema automático de destilación y titulación para la determinación de nitrógeno proteico Kjeldahl, nitrógeno no proteico (NNP), ácidos volátiles y otros analitos. Conexión  a un automuestreador, para una alta productividad, máxima flexibilidad y funcionamiento autónomo.",
          descriptionLong: `Sistema automático de destilación y titulación para la determinación de nitrógeno proteico Kjeldahl, nitrógeno no proteico (NNP), ácidos volátiles y otros analitos. Conexión  a un automuestreador, para una alta productividad, máxima flexibilidad y funcionamiento autónomo.
          <br><br>
          <h5>Seguridad, fiabilidad y precisión para laboratorios que buscan el máximo grado de automatización</h5>
          Con UDK 169 es posible automatizar el proceso de destilación y titulación para garantizar a todos los laboratorios que manejan un gran número de muestras diarias una solución precisa, fiable y capaz de reducir los costes operativos mediante la optimización de los recursos.
          <br><br>
          
          UDK 169 con automuestreador AutoKjel ofrece resultados extremadamente precisos y reproducibles de nitrógeno total Kjeldahl TKN, proteínas, nitrógeno amoniacal, nitrógeno nítrico (Devarda), NBVT, sulfitos , fenoles, ácidos volátiles, cianuros y contenido alcohólico.
          <br><br>
          <ul>
          <li>Maximización de la eficiencia gracias a que la destilación y la titulación se realizan de manera simultánea</li>
          <li>Resultados rápidos gracias a la titulación en línea y al cálculo automático de los resultados</li>
          <li>Máxima precisión y exactitud de los resultados gracias al titulador colorimétrico integrado con bureta de alta precisión</li>
          <li>Ajuste rápido y adición automática de ácido bórico, agua e hidróxido de sodio</li>
          <li>Ajuste de la potencia del generador de vapor del 10 % al 100 % para la máxima versatilidad de aplicación</li>
          <li>Extracción automática de residuos del titulador y de la probeta</li>
          <li>Operaciones inteligentes gracias a la interfaz de usuario extremadamente intuitiva</li>
          <li>Reducción del contacto con agentes químicos para la máxima seguridad de los operadores</li>
          <li>Máxima flexibilidad gracias a la amplia gama de accesorios</li>
          </ul>
          <br><br>
          <h5>Máxima productividad con el automuestreador AutoKjel</h5>
          
          El UDK 169 puede utilizarse junto con el automuestreador AutoKjel para lograr un sistema de alta productividad capaz de procesar de forma autónoma hasta 24 muestras con probetas estándar (250 ml) o 21 muestras con probetas Jumbo (400 ml).  
          <br><br>
          
          Las probetas que contienen las muestras digeridas se transfieren desde el carrusel al analizador Kjeldahl UDK 169 de forma totalmente automática, para obtener resultados precisos y fiables. Todo ello con total seguridad, con una extrema facilidad de uso y sin necesidad de la presencia de un operador.  
          <br><br>
          
          UDK 169 y AutoKjel están diseñados para un funcionamiento continuo, con el fin de garantizar la máxima productividad y automatización incluso en el procesamiento de datos de análisis.
          <br><br>
          
          <h5>Precisión y exactitud superiores</h5>
          
          El titulador colorimétrico del analizador automático Kjeldahl UDK 169 garantiza una alta precisión, exactitud y rendimiento a lo largo del tiempo.
          <br><br>
          
          Con un límite de detección (LOD) de 0,015 mgN y un límite de cuantificación (LOQ) de 0,04 mgN, el UDK 169 también es perfecto para análisis con muestras con bajo contenido de nitrógeno.
          <br><br>
          
          El sistema se basa en la medición colorimétrica de una reacción química con determinación automática del punto final.
          <br><br>
          <h5>Ventajas del titulador colorimétrico VELP:</h5>
          <ul>
          <li>procedimiento totalmente automático</li>
          <li>No requiere calibración</li>
          <li>No necesita mantenimiento</li>
          </ul>
          <br><br>
          
          El UDK 169 permite realizar una supervisión constante de la titulación gracias al sistema de gráfico en tiempo real montado directamente en el aparato.
          <br><br>
          
          <h5>Tecnologías exclusivas para dar soporte a su laboratorio</h5>
          
          El UDK 169 está equipado con el exclusivo condensador de titanio VELP, diseñado y patentado para garantizar un intercambio de calor eficiente y un bajo consumo de agua.
          <br><br>
          
          El condensador de titanio garantiza una temperatura del destilado siempre por debajo del valor umbral (35 °C), como se indica en el método Kjeldahl, sin pérdidas de nitrógeno.
          <br><br>
          
          <ul>
          <li>Consumo de agua reducido al mínimo</li>
          <li>Material altamente resistente que garantiza un alto rendimiento a lo largo del tiempo</li>
          <li>Los riesgos de rotura durante la limpieza rutinaria del instrumento se reducen al mínimo</li>
          </ul>
          <br><br>
          
          El exclusivo grupo de protección VELP fabricado en tecnopolímero incorporado en el UDK 169 está diseñado para garantizar un alto rendimiento a lo largo del tiempo y una resistencia sin precedentes.
          <br><br>
          <ul>
          <li>Materiales resistentes a los productos químicos agresivos</li>
          <li>Máxima resistencia con una vida útil de hasta 10 000 análisis</li>
          <li>No requiere mantenimiento y no tiene riesgo de rotura</li>
          </ul>
          <br><br>
          <h5>Fiabilidad y seguridad ante todo</h5>
          El UDK 169 está equipado con el conjunto de funciones más completo y avanzado para la seguridad de los operadores en el laboratorio. Varios sensores supervisan, entre otros, la colocación de la probeta, los orificios de seguridad, los niveles de reactivos y el flujo del agua de refrigeración.
          <br><br>
          
          El generador de vapor patentado VELP garantiza unas condiciones de trabajo seguras al funcionar sin presión:
          <br><br>
          <ul>
          <li>Calentamiento rápido</li>
          <li>Alto rendimiento y resistencia</li>
          <li>No requiere mantenimiento</li>
          <li>Uso de agua desionizada</li>
          </ul>
          <br><br>
          
          <h5>Software intuitivo para un uso inmediato del aparato y una gestión óptima de los datos</h5>
          La pantalla táctil a color de 7" y el software intuitivo guían al operador paso a paso.
          <br><br>
          <ul>
          <li>Gestión de usuarios con 3 niveles de autorizaciones y permisos, de conformidad con GLP</li>
          <li>Gráfico de la titulación en tiempo real</li>
          <li>Función de destilación en serie que acelera la entrada de datos</li>
          <li>Cálculo automático de los resultados y archivado integrado</li>
          <li>Funciones de control para el automuestreador AutoKjel</li>
          <li>Estadísticas de análisis y condiciones del aparato</li>
          <li>Exportación de datos en formato .xls, .txt, .csv y compatibilidad optimizada para LIMS</li>
          </ul>
          <br><br>
          La  tecnología de códigos de barras opcional facilita la gestión de los datos de destilación y el cálculo de los resultados.
          <br><br>
          
          El software UDK 169 está preparado para la actualización con un paquete 21 CFR parte 11 opcional para los laboratorios de la industria farmacéutica, cosmética y alimentaria que necesitan operar de acuerdo con las regulaciones de la FDA.
          <br><br>
          
          
          Procesos eficientes y asistencia sin precedentes con VELP Ermes Cloud Platform
          <br><br>
          
          
          El UDK 169 ofrece la posibilidad exclusiva de conectarse vía Wi-Fi o LAN a la innovadora  plataforma en la nube VELP Ermes, la solución Smart Lab que permite reducir las operaciones rutinarias mediante la supervisión en tiempo real de los análisis Kjeldahl en cualquier lugar y en cualquier momento.
          <br><br>
          
          Con un ordenador, teléfono inteligente o tableta es posible gestionar varios aparatos al mismo tiempo, consumibles, flujos de trabajo, datos de los análisis y condiciones de trabajo de los aparatos.
          <br><br>
          
          Las notificaciones y alertas inmediatas le permitirán estar siempre informado del estado de sus análisis y, gracias a la interrupción remota, tendrá un control total de sus procesos con la máxima seguridad garantizada.
          <br><br>
          
          Dé acceso a aparatos y datos solo a miembros específicos de su empresa y elija individualmente si desea compartir información directamente con VELP o con centros de servicio autorizados para beneficiarse de un menor tiempo de diagnóstico y de un mejor servicio de asistencia.
          <br><br>
          
          La determinación del nitrógeno y su laboratorio alcanzan un nuevo nivel de productividad con la plataforma en la nube de VELP Ermes.
          <br><br>
          <h5>Tecnología TEMS™</h5>
          
          
          
          Los destiladores Kjeldahl de la serie UDK incorporan la tecnología TEMS™, capaz de garantizar un ahorro significativo.
          <br><br>
          
          
          Tiempo: calentamiento rápido
          <br>
          Energía: consumo de energía limitado
          <br>
          Dinero: reducción de los costes de cada análisis.  
          <br>
          Espacio: perfil compacto, ocupa muy poco espacio en la mesa de laboratorio.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro16_1,
          typeProduct: {
            name: "Unidad de destilación",
            keyname: "unidad-destilacion",
          },
          categoryProduct: {
            name: "destilación y titulación automatica",
            keyname: "destilacion-y-titulacion-automatica",
          },
          name: "UDK 159 Analizador automático Kjeldahl",
          description: "Sistema automático de destilación y titulación Kjeldahl para la determinación de nitrógeno proteico, nitrógeno no proteico (NPN), ácidos volátiles y otros analitos. La solución que satisface las exigencias más elevadas en términos de precisión, exactitud y seguridad.",
          descriptionLong: `Sistema automático de destilación y titulación Kjeldahl para la determinación de nitrógeno proteico, nitrógeno no proteico (NPN), ácidos volátiles y otros analitos. La solución que satisface las exigencias más elevadas en términos de precisión, exactitud y seguridad.
          <br><br>
          <h5>Seguridad, fiabilidad y precisión para laboratorios que buscan el máximo grado de automatización</h5>
          Con UDK 159 es posible automatizar el proceso de destilación y titulación para garantizar a todos los laboratorios que manejan un gran número de muestras diarias una solución precisa, fiable y capaz de reducir los costes operativos mediante la optimización de los recursos.
          <br><br>
          
          UDK 159 ofrece resultados extremadamente precisos y reproducibles de nitrógeno total Kjeldahl TKN, proteínas, nitrógeno amoniacal, nitrógeno nítrico (Devarda), NBVT, sulfitos, fenoles, ácidos volátiles, cianuros y contenido alcohólico.
          <br><br>
          <ul>
          <li>Maximización de la eficiencia gracias a que la destilación y la titulación se realizan de manera simultánea</li>
          <li>Resultados rápidos gracias a la titulación en línea y al cálculo automático de los resultados</li>
          <li>Máxima precisión y exactitud de los resultados gracias al titulador colorimétrico integrado con bureta de alta precisión</li>
          <li>Ajuste rápido y adición automática de ácido bórico, agua e hidróxido de sodio</li>
          <li>Ajuste de la potencia del generador de vapor del 10 % al 100 % para la máxima versatilidad de aplicación</li>
          <li>Extracción automática de residuos del titulador y de la probeta</li>
          <li>Operaciones inteligentes gracias a la interfaz de usuario extremadamente intuitiva</li>
          <li>Reducción del contacto con agentes químicos para la máxima seguridad  de los operadores</li>
          <li>Máxima flexibilidad gracias a la amplia gama de accesorios</li>
          </ul>
          
          <h5>Precisión y exactitud superiores</h5>
          
          El titulador colorimétrico del analizador automático Kjeldahl UDK 159 garantiza una alta precisión, exactitud y rendimiento a lo largo del tiempo.
          <br><br>
          
          Con un límite de detección (LOD) de 0,015 mgN y un límite de cuantificación (LOQ) de 0,04 mgN, el UDK 159 también es perfecto para análisis con muestras con bajo contenido de nitrógeno.
          <br><br>
          
          El sistema se basa en la medición colorimétrica de una reacción química con determinación automática del punto final.
          <br><br>
          
          Ventajas del titulador colorimétrico VELP:
          <ul>
          <li>procedimiento totalmente automático</li>
          <li>No requiere calibración</li>
          <li>No necesita mantenimiento</li>
          </ul>
          
          
          
          El UDK 159 permite realizar una supervisión constante de la titulación gracias al  sistema de gráfico en tiempo real montado directamente en el aparato.
          <br><br>
          
          <h5>Tecnologías exclusivas para dar soporte a su laboratorio</h5>
          
          El UDK 159 está equipado con el exclusivo condensador de titanio VELP, diseñado y patentado para garantizar un intercambio de calor eficiente y un bajo consumo de agua.
          <br><br>
          
          El condensador de titanio garantiza una temperatura del destilado siempre por debajo del valor umbral (35 °C), como se indica en el método Kjeldahl, sin pérdidas de nitrógeno.
          <ul>
          <li>Consumo de agua reducido al mínimo</li>
          <li>Material altamente resistente que garantiza un alto rendimiento a lo largo del tiempo</li>
          <li>Los riesgos de rotura durante la limpieza rutinaria del instrumento se reducen al mínimo</li>
          </ul>
          <br><br>
          
          El exclusivo grupo de protección VELP fabricado en tecnopolímero incorporado en el UDK 159 está diseñado para garantizar un alto rendimiento a lo largo del tiempo y una resistencia sin precedentes.
          <ul>
          <li>Materiales resistentes a los productos químicos agresivos</li>
          <li>Máxima resistencia con una vida útil de hasta 10 000 análisis</li>
          <li>No requiere mantenimiento y no tiene riesgo de rotura</li>
          </ul>
          
          <h5>Fiabilidad y seguridad, ante todo</h5>
          
          El UDK 159 está equipado con el conjunto de funciones más completo y avanzado para la seguridad de los operadores en el laboratorio. Varios sensores supervisan, entre otros, la colocación de la probeta, los orificios de seguridad, los niveles de reactivos y el flujo del agua de refrigeración.
          <br><br>
          
          El  generador de vapor patentado VELP garantiza unas condiciones de trabajo seguras al funcionar sin presión:
          <ul>
          <li>Calentamiento rápido</li>
          <li>Alto rendimiento y resistencia</li>
          <li>No requiere mantenimiento</li>
          <li>Uso de agua desionizada</li>
          </ul>
          
          Software intuitivo para un uso inmediato del instrumento y una gestión óptima de los datos
          <br><br>
          
          
          La pantalla táctil a color de 7" y el software intuitivo guían al operador paso a paso.
          <ul>
          <li>Gestión de usuarios con 3 niveles de autorizaciones y permisos, de conformidad con GLP</li>
          <li>Gráfico de la titulación en tiempo real</li>
          <li>Función de destilación en serie que acelera la entrada de datos</li>
          <li>Cálculo automático de los resultados y archivado integrado</li>
          <li>Estadísticas de análisis y condiciones del aparato</li>
          <li>Exportación de datos en formato .xls, .txt, .csv y compatibilidad optimizada para LIMS</li>
          </ul>
          
          La  tecnología de códigos de barras opcional facilita la gestión de los datos de destilación y el cálculo de los resultados.
          <br><br>
          
          El software UDK 159 está preparado para la actualización con un paquete  21 CFR parte 11 opcional para los laboratorios de la industria farmacéutica, cosmética y alimentaria que necesitan operar de acuerdo con las regulaciones de la FDA.
          Procesos eficientes y asistencia sin precedentes con VELP Ermes Cloud Platform
          <br><br>
          
          
          El UDK 159 ofrece la posibilidad exclusiva de conectarse vía Wi-Fi o LAN a la innovadora plataforma en la nube VELP Ermes, la solución Smart Lab que permite reducir las operaciones rutinarias mediante la supervisión en tiempo real de los análisis Kjeldahl en cualquier lugar y en cualquier momento.
          <br><br>
          
          Con un ordenador, teléfono inteligente o tableta es posible gestionar varios aparatos al mismo tiempo, consumibles, flujos de trabajo, datos de los análisis y condiciones de trabajo de los aparatos.
          <br><br>
          
          Las notificaciones y alertas inmediatas le permitirán estar siempre informado del estado de sus análisis y, gracias a la interrupción remota, tendrá un control total de sus procesos con la máxima seguridad garantizada.
          <br><br>
          
          Dé acceso a aparatos y datos solo a miembros específicos de su empresa y elija individualmente si desea compartir información directamente con VELP o con centros de servicio autorizados para beneficiarse de un menor tiempo de diagnóstico y de un mejor servicio de asistencia.
          <br><br>
          
          La determinación del nitrógeno y su laboratorio alcanzan un nuevo nivel de productividad con la  plataforma en la nube de VELP Ermes.
          <br><br>
          <h5>Tecnología TEMS™</h5>
          Ahorre tiempo, energía, dinero y espacio
          <br><br>
          
          Los destiladores Kjeldahl de la serie UDK incorporan la tecnología TEMS™, capaz de garantizar un ahorro significativo.
          <br><br>
          
          Tiempo: calentamiento rápido
          <br>
          Energía: consumo de energía limitado
          <br>
          Dinero: reducción de los costes de cada análisis
          <br>
          Espacio: perfil compacto, ocupa muy poco espacio en la mesa de laboratorio
          `,
          videoLink: "4RPSSHXC9Vs",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro17_1,
          typeProduct: {
            name: "Unidad de destilación",
            keyname: "unidad-destilacion",
          },
          categoryProduct: {
            name: "destilación y titulación automatica",
            keyname: "destilacion-y-titulacion-automatica",
          },
          name: "Destilador automático Kjeldahl UDK 149",
          description: "Destilador automático para la determinación de nitrógeno proteico Kjeldahl, nitrógeno no proteico (NPN), ácidos volátiles y otros analitos. Conexión a tituladores potenciométricos externos para un manejo optimizado de un mayor número de muestras, mayor flexibilidad y precisión.",
          descriptionLong: `Destilador automático para la determinación de nitrógeno proteico Kjeldahl, nitrógeno no proteico (NPN), ácidos volátiles y otros analitos. Conexión a tituladores potenciométricos externos para un manejo optimizado de un mayor número de muestras, mayor flexibilidad y precisión.
          <br><br>
          <h5>Máxima flexibilidad, precisión y versatilidad para su laboratorio</h5>
          UDK 149 está diseñado para ofrecer la máxima versatilidad y resultados reproducibles para la determinación de nitrógeno Kjeldahl TKN, proteínas, nitrógeno amoniacal, nitrógeno nítrico (según Devarda), NBVT, sulfitos, fenoles, ácidos volátiles, cianuros y contenido alcohólico.
          <br><br>
          
          El UDK 149 se puede utilizar junto con varios modelos de tituladores potenciométricos externos para aumentar la productividad analizando un gran número de muestras y obteniendo rápidamente el resultado final.
          <br><br>
          <ul>
          <li>Conexión a varios tituladores externos para operaciones automatizadas y eficientes</li>
          <li>Máxima precisión y exactitud de los resultados</li>
          <li>Configuración rápida y adición automática de ácido bórico, agua e hidróxido de sodio</li>
          <li>Ajuste  de la  potencia del generador de vapor del 10 % al 100 % para una máxima versatilidad de aplicación</li>
          <li>Extracción automática de residuos de la probeta</li>
          <li>Operaciones inteligentes gracias a la interfaz de usuario extremadamente intuitiva</li>
          <li>Reduce el contacto con los agentes químicos para la máxima seguridad  del operador</li>
          <li>Máxima flexibilidad gracias a la amplia gama de accesorios</li>
          </ul>
          <h5>Eficiencia y precisión con la titulación potenciométrica</h5>
          
          El analizador automático Kjeldahl UDK 149 en combinación con el titulador potenciométrico externo garantiza versatilidad, precisión y exactitud.
          <br><br>
          
          La posibilidad de conectar el destilador UDK 149 con un titulador potenciométrico externo permite automatizar fácilmente el último paso del método Kjeldahl  para obtener directamente el resultado final,  con un considerable ahorro de tiempo.
          <br><br>
          Ventajas:
          <ul>
          <li>Titulación potenciométrica para determinaciones de alta precisión</li>
          <li>Solución modular que se adapta a las necesidades más diversas</li>
          <li>Eficiencia</li>
          </ul>
          
          <h5>Tecnologías exclusivas para dar soporte a su laboratorio</h5>
          El UDK 149 está equipado con el exclusivo condensador de titanio VELP, diseñado y patentado para garantizar un intercambio de calor eficiente y un bajo consumo de agua.
          <br><br>
          
          El condensador de titanio garantiza una temperatura del destilado siempre por debajo del valor umbral (35 °C), como se indica en el método Kjeldahl, sin pérdidas de nitrógeno.
          <ul>
          <li>Consumo de agua reducido al mínimo</li>
          <li>Material altamente resistente que garantiza un alto rendimiento a lo largo del tiempo</li>
          <li>Los riesgos de rotura durante la limpieza rutinaria del instrumento se reducen al mínimo</li>
          </ul>

          El exclusivo grupo de protección VELP fabricado en tecnopolímero incorporado en el UDK 149 está diseñado para garantizar un alto rendimiento a lo largo del tiempo y una resistencia sin precedentes.
          <ul>
          <li>Materiales resistentes a los productos químicos agresivos</li>
          <li>Máxima resistencia con una vida útil de hasta 10 000 análisis</li>
          <li>No requiere mantenimiento y no tiene riesgo de rotura</li>
          </ul>
          
          <h5>Fiabilidad y seguridad ante todo</h5>
          
          El UDK 149 está equipado con el conjunto de funciones más completo y avanzado para la seguridad de los operadores en el laboratorio. Varios sensores supervisan, entre otros, la colocación de la probeta, los orificios de seguridad, los niveles de reactivos y el flujo del agua de refrigeración.
          <br><br>
          
          El  generador de vapor patentado VELP garantiza unas condiciones de trabajo seguras al funcionar sin presión:
          <ul>
          <li>Calentamiento rápido</li>
          <li>Alto rendimiento y resistencia</li>
          <li>No requiere mantenimiento</li>
          <li>Uso de agua desionizada</li>
          </ul>
          <br><br>
          
          Software intuitivo para un uso inmediato del aparato y una gestión óptima de los datos
          La pantalla táctil a color de 7" y el software intuitivo guían al operador paso a paso. La configuración de parámetros y la consulta de los resultados de los análisis son extremadamente sencillas y rápidas.
          <br><br>
          
          Determine quién puede acceder a las herramientas y los datos con la función de gestión de usuarios.
          Gestión de usuarios con 3 niveles de autorizaciones y permisos, de acuerdo con GLP
          Archivo integrado de los resultados
          Función de destilación en serie que acelera la introducción de los datos
          Exportación de datos en formatos .xls, .txt, .csv y compatibilidad optimizada para LIMS 
          <br><br>
          
          
          La  tecnología opcional con código de barras simplifica la gestión de los datos de destilación y el cálculo de los resultados.
          Procesos eficientes y asistencia sin precedentes con VELP Ermes Cloud Platform
          El UDK 149  ofrece la posibilidad exclusiva de conectarse vía  Wi-Fi o LAN a la innovadora plataforma en la nube VELP Ermes, la solución Smart Lab que permite reducir las operaciones rutinarias mediante la supervisión en tiempo real de los análisis Kjeldahl en cualquier lugar y en cualquier momento.
          <br><br>
          
          Con un ordenador, teléfono inteligente o tableta es posible gestionar varios aparatos al mismo tiempo, consumibles, flujos de trabajo, datos de los análisis y condiciones de trabajo de los aparatos.
          <br><br>
          
          Las notificaciones y alertas inmediatas le permitirán estar siempre informado del estado de sus análisis y, gracias a la interrupción remota, tendrá un control total de sus procesos con la máxima seguridad garantizada.
          <br><br>
          
          Dé acceso a aparatos y datos solo a miembros específicos de su empresa y elija individualmente si desea compartir información directamente con VELP o con centros de servicio autorizados para beneficiarse de un menor tiempo de diagnóstico y de un mejor servicio de asistencia.
          <br><br>
          
          La determinación del nitrógeno y su laboratorio alcanzan un nuevo nivel de productividad con la plataforma en la nube de VELP Ermes.
          <br><br>
          <h5>Tecnología TEMS™</h5>
          Los destiladores Kjeldahl de la serie UDK incorporan la tecnología TEMS™, capaz de garantizar un ahorro significativo.
          <br><br>
          
          
          Tiempo: calentamiento rápido
          <br>
          Energía: consumo de energía limitado
          <br>
          Dinero: reducción de los costes de cada análisis.
          <br>
          Espacio: perfil compacto, ocupa muy poco espacio en la mesa de laboratorio.
          `,
          videoLink: "coNx1nGYpuU",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro18_1,
          typeProduct: {
            name: "Unidad de destilación",
            keyname: "unidad-destilacion",
          },
          categoryProduct: {
            name: "Destiladores semiautomaticos",
            keyname: "destiladores-semiautomaticos",
          },
          name: "Destilador semiautomático Kjeldahl UDK 139",
          description: "Destilador semiautomático para la determinación de nitrógeno proteico Kjeldahl, nitrógeno no proteico (NPN), ácidos volátiles y otros analitos. Fiabilidad y rendimiento superiores con una excelente relación calidad-precio.",
          descriptionLong: `Destilador semiautomático para la determinación de nitrógeno proteico Kjeldahl, nitrógeno no proteico (NPN), ácidos volátiles y otros analitos. Fiabilidad y rendimiento superiores con una excelente relación calidad-precio.
          <br><br>
          <h5>Seguridad y fiabilidad para sus análisis en modo semiautomático</h5>
          El UDK 139 es una solución semiautomática fiable y segura para sus destilaciones. La herramienta ideal para laboratorios que buscan resultados precisos y reproducibles de nitrógeno Kjeldahl TKN, proteínas, nitrógeno amoniacal, nitrógeno nítrico (según Devarda), NBVT, sulfitos, fenoles, ácidos volátiles, cianuros y contenido alcohólico
          <br><br>
          
          El destilador Kjeldahl UDK 139 combina fiabilidad y rendimiento superiores con una excelente relación calidad-precio.
          <ul>
          <li>Modo de análisis semiautomático para una mayor eficiencia operativa</li>
          <li>Configuración rápida y adición automática de agua e hidróxido de sodio</li>
          <li>Ajuste de la potencia del generador de vapor del 10% al 100% para la máxima versatilidad de aplicación</li>
          <li>Extracción automática de residuos de la probeta</li>
          <li>Operaciones inteligentes gracias a la interfaz de usuario altamente intuitiva</li>
          <li>Reduce el contacto con los productos químicos para la máxima seguridad de los operadores</li>
          <li>Máxima flexibilidad gracias a la amplia gama de accesorios</li>
          </ul>
          
          <h5>Tecnologías exclusivas para dar soporte a su laboratorio</h5>
          El UDK 139 está equipado con el exclusivo condensador de titanio VELP, diseñado y patentado para garantizar un intercambio de calor eficiente y un bajo consumo de agua.
          <br><br>
          
          El condensador de titanio garantiza una temperatura del destilado siempre por debajo del valor umbral (35 °C), como se indica en el método Kjeldahl, sin pérdidas de nitrógeno.
          <br><br>
          <ul>
          <li>Consumo de agua reducido al mínimo</li>
          <li>Material altamente resistente que garantiza un alto rendimiento a lo largo del tiempo</li>
          <li>Los riesgos de rotura durante la limpieza rutinaria del instrumento se reducen al mínimo</li>
          </ul>
          
          El exclusivo grupo de protección VELP fabricado en tecnopolímero incorporado en el UDK 139 está diseñado para garantizar un alto rendimiento a lo largo del tiempo y una resistencia sin precedentes.
          <ul>
          <li>Materiales resistentes a los productos químicos agresivos</li>
          <li>Máxima resistencia con una vida útil de hasta 10 000 análisis</li>
          <li>No requiere mantenimiento y no tiene riesgo de rotura</li>
          </ul>
          
          <h5>Fiabilidad y seguridad ante todo</h5>
          El UDK 139 está equipado con el conjunto de funciones más completo y avanzado para la seguridad de los operadores en el laboratorio. Varios sensores supervisan, entre otros, la colocación de la probeta, los orificios de seguridad, los niveles de reactivos y el flujo del agua de refrigeración.
          <br><br>
          
          El  generador de vapor patentado VELP garantiza unas condiciones de trabajo seguras al funcionar sin presión:
          <ul>
          <li>Calentamiento rápido</li>
          <li>Alto rendimiento y resistencia</li>
          <li>No requiere mantenimiento</li>
          <li>Uso de agua desionizada</li>
          </ul>
          
          <h5>Software intuitivo para un uso inmediato del aparato y una gestión óptima de los datos</h5>
          La pantalla táctil a color de 7" y el software intuitivo guían al operador paso a paso. La configuración de los parámetros y la comprobación del estado del análisis son extremadamente sencillos y rápidos.
          <br><br>
          
          Determine quién puede acceder a las herramientas y los datos con la función de gestión de usuarios.
          <ul>
          <li>Gestión de usuarios con 3 niveles de autorizaciones y permisos, de conformidad con GLP</li>
          <li>Legibilidad inmediata del tiempo de análisis</li>
          <li>Menús y submenús de navegación intuitivos</li>
          <li>Menú de servicio específico</li>
          </ul>
          
          
          <h5>Procesos eficientes y asistencia sin precedentes con VELP Ermes Cloud Platform</h5>
          El UDK 139  ofrece la posibilidad exclusiva de conectarse vía  Wi-Fi o LAN a la innovadora plataforma en la nube VELP Ermes, la solución Smart Lab que permite reducir las operaciones rutinarias mediante la supervisión en tiempo real de los análisis Kjeldahl en cualquier lugar y en cualquier momento.
          <br><br>
          
          Con un ordenador, teléfono inteligente o tableta es posible gestionar varios aparatos al mismo tiempo, consumibles, flujos de trabajo, datos de los análisis y condiciones de trabajo de los aparatos.
          <br><br>
          
          Las notificaciones y alertas inmediatas le permitirán estar siempre informado del estado de sus análisis y, gracias a la interrupción remota, tendrá un control total de sus procesos con la máxima seguridad garantizada.
          <br><br>
          
          Dé acceso a aparatos y datos solo a miembros específicos de su empresa y elija individualmente si desea compartir información directamente con VELP o con centros de servicio autorizados para beneficiarse de un menor tiempo de diagnóstico y de un mejor servicio de asistencia.
          <br><br>
          
          La determinación del nitrógeno y su laboratorio alcanzan un nuevo nivel de productividad con la plataforma en la nube de VELP Ermes.
          <br><br>
          <h5>Tecnología TEMS™</h5>
          Los  destiladores Kjeldahl de la serie UDK incorporan la tecnología TEMS™, capaz de garantizar un ahorro significativo.
          <br><br>
          
          Tiempo: calentamiento rápido
          <br>
          Energía: consumo de energía limitado
          <br>
          Dinero: reducción de los costes de cada análisis.  
          <br>
Espacio: perfil compacto, ocupa muy poco espacio en la mesa de laboratorio.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro19_1,
          typeProduct: {
            name: "Unidad de destilación",
            keyname: "unidad-destilacion",
          },
          categoryProduct: {
            name: "Destiladores semiautomaticos",
            keyname: "destiladores-semiautomaticos",
          },
          name: "Destilador semiautomático Kjeldahl UDK 129",
          description: "Destilador  básico para la determinación de nitrógeno proteico Kjeldahl, nitrógeno no proteico (NPN), ácidos volátiles y otros analitos. Una solución sencilla y fiable con características únicas.",
          descriptionLong: `Destilador  básico para la determinación de nitrógeno proteico Kjeldahl, nitrógeno no proteico (NPN), ácidos volátiles y otros analitos. Una solución sencilla y fiable con características únicas.
          <br><br>
          <h5>Facilidad de uso y seguridad para sus análisis</h5>
          El UDK 129 es una solución básica segura y fiable para sus destilaciones. El instrumento ideal para laboratorios que buscan una solución sencilla pero eficiente para la determinación de nitrógeno Kjeldahl, proteínas, nitrógeno amoniacal, nitrógeno nítrico (según Devarda), NBVT, sulfitos, fenoles, ácidos volátiles, cianuros y contenido alcohólico.
          <br><br>
          
          El destilador Kjeldahl UDK 129 incluye varias características únicas que garantizan una destilación eficiente y fiable, mucho más allá de las expectativas comunes para una unidad básica.
          <ul>
          <li>Ajuste rápido y adición automática de hidróxido de sodio</li>
          <li>Bomba de alta precisión que garantiza una dosificación constante y precisa del reactivo</li>
          <li>Interfaz de usuario extremadamente intuitiva</li>
          <li>Menor contacto con los productos químicos para la máxima seguridad de los operadores</li>
          <li>Máxima flexibilidad gracias a la amplia gama de accesorios</li>
          </ul>
          
          <h5>Tecnologías exclusivas para dar soporte a su laboratorio</h5>
          
          El UDK 129 está equipado con el exclusivo condensador de titanio VELP, diseñado y patentado para garantizar un intercambio de calor eficiente y un bajo consumo de agua.
          <br><br>
          
          El condensador de titanio garantiza una temperatura del destilado siempre por debajo del valor umbral (35 °C), como se indica en el método Kjeldahl, sin pérdidas de nitrógeno.
          <ul>
          <li>Consumo de agua reducido al mínimo</li>
          <li>Material altamente resistente que garantiza un alto rendimiento a lo largo del tiempo</li>
          <li>Los riesgos de rotura durante la limpieza rutinaria del instrumento se reducen al mínimo</li>
          </ul>
          
          El exclusivo  grupo de protección VELP fabricado en tecnopolímero incorporado en el UDK 129 está diseñado para garantizar un alto rendimiento a lo largo del tiempo y una resistencia sin precedentes.
          <ul>
          <li>Materiales resistentes a los productos químicos agresivos</li>
          <li>Máxima resistencia con una vida útil de hasta 10 000 análisis</li>
          <li>No requiere mantenimiento y no tiene riesgo de rotura</li>
          </ul> 
          
          <h5>Fiabilidad y seguridad ante todo</h5>
          El UDK 129 está equipado con el conjunto de funciones más completo y avanzado para la seguridad de los operadores en el laboratorio. Varios sensores supervisan la colocación de la probeta, los orificios de seguridad y el flujo del agua de refrigeración.
          <br><br>
          
          El  generador de vapor patentado VELP garantiza unas condiciones de trabajo seguras al funcionar sin presión:
          <ul>
          <li>Calentamiento rápido</li>
          <li>Alto rendimiento y resistencia</li>
          <li>No requiere mantenimiento</li>
          <li>Uso de agua desionizada</li>
          </ul>
          
          <h5>Interfaz de usuario intuitiva para un uso inmediato del aparato</h5>
          La pantalla LCD luminosa y el menú extremadamente intuitivo guían al operador en la configuración de las condiciones de trabajo del aparato, incluido el tiempo de destilación y el volumen de hidróxido de sodio.
          <br><br>
          
          El diseño minimalista de los botones garantiza la máxima ergonomía y facilidad de uso.
          <ul>
          <li>Legibilidad inmediata del tiempo de análisis</li>
          <li>Menús y submenús de navegación intuitivos</li>
          <li>Indicadores de mantenimiento</li>
          <li>Menú de servicio específico</li>
          </ul>
          
          <h5>Tecnología TEMS™</h5>
          Los  destiladores Kjeldahl de la serie UDK  incorporan la tecnología  TEMS™, capaz de garantizar un ahorro significativo.
          <br><br>
          
          
          Tiempo: calentamiento rápido
          <br>
          Energía: consumo de energía limitado
          <br>
          Dinero: reducción de los costes de cada análisis.  
          <br>
Espacio: perfil compacto, ocupa muy poco espacio en la mesa de laboratorio.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro20_1,
          typeProduct: {
            name: "Extractores de solventes",
            keyname: "extractores-de-solventes",
          },
          categoryProduct: {
            name: "Extractores automaticos con solventes",
            keyname: "extractores-automaticos-con-solventes",
          },
          name: "SER 158 Extractor Automático con Solventes",
          description: "Extractor totalmente automático en 3 y 6 posiciones, habilitado para conexión en la nube que garantiza seguridad, exactitud y precisión en la determinación de materia extraíble según los métodos de Randall y Twisselmann.",
          descriptionLong: `Extractor totalmente automático en 3 y 6 posiciones, habilitado para conexión en la nube que garantiza seguridad, exactitud y precisión en la determinación de materia extraíble según los métodos de Randall y Twisselmann.
          <br><br>
          <h5>Extracción sólido-líquido rápida y precisa</h5>
          Los extractores con solventes automáticos de la serie SER 158 están disponibles en 3 y 6 posiciones y son la solución exacta y precisa para la determinación cuantitativa y cualitativa de grasas y materias extraíbles según el método Randall, hasta 5 veces más rápido que el método tradicional Soxhlet.
          <br><br>
          
          El proceso de extracción sólido-líquido elimina los componentes solubles de la muestra utilizando un solvente líquido en 5 fases.
          <br><br>
          
          SER 158 opera en conformidad según las organizaciones internacionales como AOAC, ISO, EPA, APHA, UNI.
          <br><br>
          
          El calentamiento rápido y seguro, combinado con un software de última generación y procesos de seguridad avanzados, garantizan la máxima reproducibilidad.
          <br><br>
          
          El análisis con SER 158 es completamente automático para maximizar la productividad de su laboratorio y liberar un tiempo valioso para otras operaciones. ¡Carga y listo!
          <br><br>
          
          <h5>Versatilidad y escalabilidad incomparables</h5>
          
          La serie SER 158 puede trabajar con muestras y tamaños de todo tipo gracias a su inigualable versatilidad y amplia gama de accesorios y consumibles:
          <br><br>
          <ul>
          <li>las juntas en butilo, vitón y el exclusivo vaflon garantizan la compatibilidad con la mayoría de solventes y mezclas de solventes</li>
          <li>3 tamaños diferentes de vasos, portadedales y dedales permiten extraer cantidades mínimas y minimizar el consumo de solvente</li>
          <li>Dedales de celulosa y fibra de vidrio para análisis cuantitativos y cualitativos,</li>
          <li>Compatibilidad con el crisol de vidrio HU6 para evitar las pérdidas en la transfewrencia de muestra en caso de hidrolisis</li>
          </ul>
          
          El SER 158 es un extractor universal. Se pueden conectar 3 nuevas unidades a la primera unidad, aumentando el número de muestras analizadas simultáneamente hasta 24.
          <br><br>
          <h5>Intuitivo y fácil de usar</h5>
          
          El exclusivo ControlPadTM de 7"del SER 158 ofrece una interfaz de usuario intuitiva que facilita la configuración y la interacción con el analizador.
          <br><br>
          
          El SER 158 está diseñado para funcionar 24 horas al día, 7 días a la semana con tecnología Load&Go, minimizando la intervención del operador.
          <br><br>
          
          Integrado y extraíble, el ControlPadTM se puede conectar a su balanza y a nuestros lectores de códigos de barras para una máxima automatización y trazabilidad.
          <br><br>
          
          Elija entre los métodos preinstalados, personalícelos y seleccione sus favoritos para un inicio rápido de sus análisis.
          <br><br>
          
          Cada fase de la extracción se muestra en el ControlPadTM junto con una amplia gama de información y opciones.
          <br><br>
          
          Los resultados se calculan y almacenan inmediatamente en la memoria integrada. Hay tres puertos USB y una conexión Ethernet disponibles para transferencia de datos a dispositivos externos.
          <br><br>
          
          <h5>Máxima seguridad y mínima exposición a solventes</h5>
          
          La exclusiva tecnología SolventXpress ™ permite la dispensación inteligente de solvente asegurando la mínima exposición al solvente que, mediante un clic en el ControlPadTM, será guiado dentro del vaso.
          <br><br>
          
          El solvente condensado al final del análisis se recolecta en el tanque de recuperación enfriado ubicado en la parte posterior del instrumento y la salida de solvente es completamente automática y controlada por el ControlPadTM.
          <br><br>
          
          El SER 158 está sellado herméticamente y el protector transparente evita que las salpicaduras y posibles derrames se escapen del instrumento.
          <br><br>
          
          Los sensores avanzados controlan constantemente el proceso de extracción y garantizan un análisis seguro durante todas las etapas. La tecnología SafeEnd ™ de SER 158 evita que la materia extraída se queme levantando automáticamente los vasos de extracción al acabarse el análisis.
          <br><br>
          
          <h5>Materiales premium para reducir los costes de sus extracciones</h5>
          
          Los condensadores de titanio VELP garantizan una recuperación incomparable de más del 90% de solvente que luego se recupera en el tanque refrigerado ubicado en la parte posterior del instrumento.
          <br><br>
          
          Para la mayoría de las aplicaciones de extracción de grasa, el solvente recuperado se puede reutilizar reduciendo los costes operativos.
          <br><br>
          
          La reducción de costes se consigue además, con un consumo mínimo de agua de refrigeración (a partir de 1l/min) gracias a la eficiencia térmica del titanio y con la gestión independiente de las placas calefactoras.
          <br><br>
          <h5>Diseño compacto y ahorro de espacio</h5>
          
          ¡El diseño compacto del SER 158 ahorra un valioso espacio en el laboratorio y especialmente debajo de la campana extractora!
          <br><br>
          
          
          SER 158 es el mejor de su categoría en cuanto a ahorro de espacio gracias a la presencia de materiales de alta resistencia y calidad y una fina optimización de los componentes que lo hace vanguardista.
          <br><br>

          <h5>Tecnología en la nube para llevar la automatización a un nuevo nivel</h5>
          
          SER 158 está diseñado para funcionar automáticamente y sin la supervisión de un operador. Con conectividad a la plataforma en la nube VELP Ermes, podrá controlar sus análisis dondequiera que esté, cuando lo necesite.
          <br><br>
          
          Con VELP Ermes, tendrá acceso a sus datos y condiciones del instrumento desde su PC, smartphone y tablet.
          <ul>
          <li>Supervisión y control bidireccional con notificaciones en tiempo real</li>
          <li>Máxima seguridad y protección de datos</li>
          <li>Soporte de servicio técnico mejorado (VELP y partner)</li>
          <li>Actualizaciones de software inmediatas</li>
          <li>Cree y comparta informes con un solo clic</li>
          </ul>
          `,
          videoLink: "59EANQS5snU",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro21_1,
          typeProduct: {
            name: "Extractores de solventes",
            keyname: "extractores-de-solventes",
          },
          categoryProduct: {
            name: "Extractores semiautomaticos",
            keyname: "extractores-semiautomaticos",
          },
          name: "SER 148 Extractor Semi-Automático con Solventes",
          description: "Extractores para la separación cuantitativa de sustancias con solvente, según la técnica de Randall que permite una drástica reducción de los tiempos de extracción.",
          descriptionLong: `Extractores para la separación cuantitativa de sustancias con solvente, según la técnica de Randall que permite una drástica reducción de los tiempos de extracción.
          <br><br>
          <h5>La solución semiautomática para la extracción con solventes</h5>
          SER 148/3 y SER 148/6 se pueden utilizar para separar una sustancia o un grupo de elementos de muestras sólidas y semisólidas según la técnica Randall (que consiste en inmersión, lavado y recuperación de solventes).
          <br><br>
          
          En cuanto a la versión automática SER 158, el principal campo de aplicación es la determinación del contenido de productos solubles como grasas, detergentes, plastificantes y pesticidas en alimentos, piensos, detergentes, fórmulas de caucho y plástico, productos farmacéuticos, suelo.
          <br><br>
          
          La Serie SER 148 es una solución semiautomática sin comprometer la seguridad del operator (IP55) y el consumo de solventes, garantizando al mismo tiempo un coste por análisis limitado.
          <br><br>
          
          En combinación con la unidad de hidrólisi HU6, se pueden utilizar los mismos crisoles para evitar cualquier posible pérdida de muestra entre las dos unidades.
          <br><br>
          
          <h5>Técnica de Randall para obtener resultados rápidos</h5>
          
          Realice extracciones con solventes de una o varias muestras con el método Randall: una mejora de la técnica más famosa Soxhlet que implica el uso de solventes calientes, reduciendo los tiempos de análisis.
          De hecho, esta técnica garantiza una rápida solubilización gracias al solvente caliente, que reduce el tiempo de extracción a unos 90 minutos.
          <br><br>
          
          La extracción se realiza sumergiendo la muestra en el solvente hirviendo; sigue una fase de aclarado con solvente frío.
          <br><br>

La alta tasa de recuperación del solvente usado y una alta reproducibilidad, son características de la serie SER, que puede utilizarse con una amplia gama de muestras y con una variedad incremental de solventes, para una mayor flexibilidad.

          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro22_1,
          typeProduct: {
            name: "Extractores de solventes",
            keyname: "extractores-de-solventes",
          },
          categoryProduct: {
            name: "Unidad de Hidrolisis",
            keyname: "unidad-de-hidrolisis",
          },
          name: "HU 6 Unidad de hidrólisis",
          description: "Unidad de hidrólisis de seis posiciones para pretratar la muestra a analizar con SER 148 o SER 158, ideal tanto para hidrólisis ácida como básica.",
          descriptionLong: `
          Unidad de hidrólisis de seis posiciones para pretratar la muestra a analizar con SER 148 o SER 158, ideal tanto para hidrólisis ácida como básica.
          <br><br>
          <h5>Hidrólisis preliminar para la determinación de la grasa total</h5>
          La unidad de hidrólisis HU 6 de VELP Scientifica es la solución ideal para la preparación de la muestra antes de la extracción con disolventes para la determinación del contenido total de grasa, con el fin de liberar las moléculas de grasa listas para la extracción.
          <br><br>
          
          Este procedimiento se requiere en varios métodos oficiales de la AOAC para determinar el contenido de grasa de muestras de alimentos como la carne, el queso, el marisco, el chocolate, las harinas de cereales, etc.
          <br><br>
          
          La HU 6 realiza la hidrólisis con total seguridad y maneja seis muestras al mismo tiempo para maximizar la productividad.
          <br><br>
          
          
          <h5>Hidrólisis rápida y segura</h5>
          
          
          Las muestras se calientan en tubos de ensayo en un bloque de calentamiento de aluminio que ofrece una excelente homogeneidad térmica. La hidrólisis se realiza en un medio ácido (ácido clorhídrico 4N) y en algunos casos también en un medio básico (amoníaco al 20% p/v) durante unos 60 minutos a una temperatura de 170°C. A continuación, la muestra hidrolizada se filtra en un crisol de vidrio y se lava con agua desionizada caliente para eliminar los restos de ácido clorhídrico.
          <br><br>
          
          La HU 6 se suministra con una bomba de vacío que garantiza la seguridad gracias a la reducción de los vapores ácidos.
          <br><br>
          
          El crisol de vidrio que contiene la muestra hidrolizada y lavada se seca en el horno antes de colocarlo en un desecador. A continuación, el crisol se transfiere directamente a la unidad de extracción por disolvente SER 158 y SER 148, evitando cualquier posible pérdida de muestra y garantizando una mayor precisión de los resultados.
          <br><br>
          
          
          <h5>Filtración y enjuague continuos de seis muestras en paralelo</h5>
          <br><br>
          
          En algunas muestras, la extracción directa con disolventes no es eficaz porque los lípidos están unidos químicamente a otros componentes. La determinación del contenido total de grasa de estas muestras requiere una hidrólisis preliminar, seguida de filtración y lavado, para liberar completamente las moléculas de grasa.
          <br><br>
          
          La muestra hidrolizada está finalmente lista para la extracción y puede ser fácilmente transferida a la Unidad de Extracción por Solvente SER 148 o SER 158 evitando cualquier posible pérdida de muestra y asegurando una mayor precisión de los resultados.
          <br><br>
          
          La HU 6 proporciona una filtración y un enjuague eficaces de 3 o 6 muestras en paralelo. Las válvulas permiten interrumpir selectivamente el vacío en cada posición acelerando el proceso de filtración. 
          <br><br>
          <h5>Tecnología TEMS</h5>
          La unidad de hidrólisis HU 6 funciona con las innovadoras ventajas de TEMS™, para un gran ahorro.
          <br><br>
          
          Ahorro de tiempo: el calentamiento rápido reduce la pérdida de tiempo
          <br>
          Ahorro de energía: consumo limitado de energía, lo que reduce las emisiones de CO2
          <br>
          Ahorro de dinero: reducción del coste de cada análisis
          <br>
Ahorro de espacio: el reducido espacio que ocupa ahorra un valioso espacio en la mesa del laboratorio
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro23_1,
          typeProduct: {
            name: "Analizadores de fibra",
            keyname: "analizadores-de-fibra",
          },
          categoryProduct: {
            name: "Analizador Automático",
            keyname: "analizador-automatico",
          },
          name: "FIWE Advance Analizador Automático de Fibra",
          description: "El analizador completamente automático para la determinación de fibra cruda y detergente según métodos de referencia oficiales que requieren un tiempo mínimo del operador con una interfaz de usuario única y conectividad en la nube.",
          descriptionLong: `El analizador completamente automático para la determinación de fibra cruda y detergente según métodos de referencia oficiales que requieren un tiempo mínimo del operador con una interfaz de usuario única y conectividad en la nube.
          <br><br>
          <h5>Fibra cruda y detergente con máxima automatización</h5>
          Precisión y reproducibilidad  de los resultados son fundamentales para la determinación de fibra en piensos tanto para fabricantes como para granjas.
          
          El FIWE Advance ha sido diseñado para ofrecer una completa automatización de las fases de la extracción como digestión, lavado y filtración, asegurando la máxima repetibilidad para la determinación de Fibra Cruda con el método Weende y fibra detergente con el Método Van Soest para NDF, ADF y ADL.
          <br><br>
          <h5>Conforme a los métodos oficiales</h5>
          El FIWE Advance produce resultados precisos que siempre cumplen con los métodos oficiales ISO y AOAC tanto para la fibra cruda como para la fibra detergente. Además, el método FIWE Advance que utiliza crisoles evita la pérdida de fibra debido a la transferencia de la muestra que permanece en el crisol durante toda la duración del procedimiento analítico.
          <br><br>
          
          De hecho, la muestra permanece dentro de los crisoles durante las fases de extracción, digestión, lavado y filtración, pero también durante el pesaje y finalmente para el secado y determinación de las cenizas, eliminando el riesgo de error.
          <br><br>
          
          <h5>¡Coloque las muestras y dedíquese a otra cosa!</h5>
          
          FIWE Advance le permite ahorrar un tiempo valioso reduciendo costes y mejorando la productividad de su laboratorio.
          <br>
          El FIWE Advance necesita solo 2 minutos de tiempo del operador  en comparación con más de 50 minutos/operador de una solución semiautomática.
          Ya no será necesario precalentar y verter productos químicos en las columnas, controlar la temperatura para una ebullición correcta o asegurarse de que la filtración sea exitosa.
          <br><br>
          
          Con FIWE Advance todas estas operaciones son automáticas y gracias a la conexión a la nube permite estar siempre informado con notificaciones inmediatas.
          <br><br>
          <h5>Intuitivo y Smart</h5>
          
          
          Con el FIWE Advance analizar la fibra se vuelve simple y al alcance de todos en el laboratorio. La pantalla táctil de 7 pulgadas y la interfaz desarrollada por VELP hacen que las operaciones sean simples e inteligentes. 
          <br><br>
          
          El FIWE Advance viene con métodos preinstalados desarrollados por VELP de acuerdo con métodos oficiales. Puede crear sus propios métodos y seleccionar sus propios favoritos para una máxima comodidad y velocidad. 
          <br><br>
          
          FIWE Advance permite conectar un lector de códigos de barrae para facilitar la gestión de la información y evitar errores de transcripción. Al conectar su propia báscula, la transferencia del peso y el cálculo de los resultados será rápido y sencillo. 
          Máxima seguridad y mínima exposición a los reactivos
          FIWE Advance garantiza la máxima seguridad para el operador ya que no entra en contacto con los vapores producidos por los reactivos a altas temperatura necesarios para la digestión.
          <br><br>
          
          Todos los reactivos necesarios están contenidos en tanques transparentes dentro del instrumento. Los reactivos son precalentados, dosados y dispensados gracias a una serie de sensores y bombas que permiten transportar los productos químicos calientes a cada columna, evitando que el operador entre en contacto con los humos calientes.
          <br><br>
          
          Cada ubicación está equipada con una luz LED que muestra su actividad y facilita la detección de residuos.
          <br><br>
          <h5>¡Lleve la automatización al siguiente nivel gracias a la nube!</h5>
          
          
          El FIWE Advance está diseñado para funcionar automáticamente y sin la supervisión del operador. Con conectividad Wi-Fi a la plataforma de la nube VELP Ermes, podrá controlar sus análisis dondequiera que esté, siempre que lo necesite.
          <br><br>
          
          Con VELP Ermes, tendrá acceso a sus datos y condiciones del instrumento desde su PC, smartphone y tablet.
          <ul>
          <li>Supervisión y control bidireccional con notificaciones en tiempo real</li>
          <li>Máxima seguridad y protección de datos</li>
          <li>Soporte de servicio mejorado</li>
          <li>Actualizaciones de software inmediatas</li>
          <li>Cree y comparta informes con un solo clic</li>
          </ul>
          `,
          videoLink: "CXvZfzooJc8",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro24_1,
          typeProduct: {
            name: "Analizadores de fibra",
            keyname: "analizadores-de-fibra",
          },
          categoryProduct: {
            name: "Extractores semiautomaticos",
            keyname: "extractores-semiautomaticos",
          },
          name: "FIWE Analizador de Fibra",
          description: "Extractores para la determinación de la fibra cruda y detergente, mediante el uso de reactivos precalentados según los métodos oficiales (Weende, Van Soest).",
          descriptionLong: `Extractores para la determinación de la fibra cruda y detergente, mediante el uso de reactivos precalentados según los métodos oficiales (Weende, Van Soest).
          <br><br>
          <h5>Determinación de fibra cruda y detergente</h5>
          FIWE es un extractor para la determinación de fibra cruda, conocida convencionalmente como residuo no digerible. Análisis rápidos, resultados fiables y alta reproducibilidad son algunas de las ventajas más relevantes de estas unidades ideales para las siguientes aplicaciones:
          <ul>
          <li>el método Weende, el procedimiento analítico más antiguo todavía en uso en la actualidad, en el que la concentración de las fibras se mide como Fibra cruda (CF)</li>
          <li>Fibra detergente neutra (NDF), un método desarrollado por Van Soest, ahora la medida más común de fibra utilizada para el análisis de alimentos para animales</li>
          <li>Fibra detergente ácida (ADF), una porción de fibra vegetal e incluye celulosa, lignina y cantidades variables de xilanos.</li>
          <li>Determinación de lignina detergente ácida (ADL) y técnica de Wijkstrom, una modificación del método Weende</li>
          </ul>
          
          <h5>Excelente rendimiento, extracciones únicas o múltiples</h5>
          
          FIWE permite extracciones simples o múltiples que incluyen el calentamiento, lavados y filtración, ofreciendo la mayor reproducibilidad disponible.
          <br><br>
          
          La posibilidad de utilizar el mismo crisol para pesar, secar y lavar elimina posibles errores debidos a la transferencia de muestras.
          <br><br>
          
          Con la placa calefactora RC2 (incluida con el instrumento) es posible precalentar externamente los reactivos involucrados en el análisis y verterlos directamente en el sistema, reduciendo los tiempos de análisis.
          <h5>Sistema de Calentamiento Rápido</h5>
          <br><br>
          
          
          Máxima eficiencia gracias a una particular velocidad de calentamiento que garantiza un rápido calentamiento de la muestra, previamente mezclada con los reactivos precalentados.
          <br><br>
          
          El elemento calefactor se mantiene siempre listo, para poder calentar incluso después de la adición del segundo reactivo, para un notable ahorro de tiempo.
          <br><br>
          
          FIWE reduce el tiempo de análisis: mientras que el procedimiento equivalente manual toma incluso más de 6 horas, la solución VELP solo toma un par de horas.
          <br><br>
          
          <h5>Sin transferencia o pérdida de muestras</h5>
          
          Para preparar la muestra para el análisis de fibras, COEX asegura una rápida extracción de la grasa directamente en los crisoles de vidrio que se utilizan en la serie FIWE.
          <br><br>

El crisol, que contiene la muestra desengrasada, se transfiere directamente al analizador FIWE, lo que permite evitar los errores debidos a la transferencia de la propia muestra.
`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro25_1,
          typeProduct: {
            name: "Analizadores de fibra",
            keyname: "analizadores-de-fibra",
          },
          categoryProduct: {
            name: "Extractor a frio",
            keyname: "extractor-a-frio",
          },
          name: "COEX Extractor Frío",
          description: "Extractor en frío para una extracción rápida y eficaz de la grasa antes del análisis de la fibra directamente en los crisoles de vidrio de FIWE y FIWE Advance.",
          descriptionLong: `Extractor en frío para una extracción rápida y eficaz de la grasa antes del análisis de la fibra directamente en los crisoles de vidrio de FIWE y FIWE Advance.
          <br><br>
          <h5>Extracción Preliminar de Grasa para mejorar la precisión analítica</h5>
          El COEX es un extractor en frío para el desengrasado preliminar y eficaz de la muestra a analizar con FIWE y FIWE Advance, con el fin de obtener un bajo contenido de grasa (<1%).
          <br><br>
          COEX utiliza el método de extracción en frío con el solvente que actúa directamente sobre la muestra. La bomba aspira y elimina el componente graso, lo que permite separarlo y recolectarlo por separado.
          <br><br>
          <h5>Extracción segura sin transferencia de muestras</h5>
Con los sistemas de extracción de fibra VELP puede estar seguro de que durante todas las fases de análisis, desde la extracción de la grasa hasta el pesaje final, la muestra siempre está contenida dentro del crisol.
COEX asegura una rápida extracción de la grasa directamente en los crisoles de vidrio que luego se transfieren inmediatamente a FIWE y FIWE Advance, eliminando posibles errores debidos a la transferencia de la propia muestra.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro26_1,
          typeProduct: {
            name: "Analizadores de fibra dietética",
            keyname: "analizadores-de-fibra-dietetica",
          },
          categoryProduct: {
            name: "Digestor o enzimático",
            keyname: "digestor-o-enzimatico",
          },
          name: "GDE Digestor Enzimático",
          description: "Digestor enzimático para agitación continua y constante de la muestra, evitando el sobrecalentamiento.",
          descriptionLong: `Digestor enzimático para agitación continua y constante de la muestra, evitando el sobrecalentamiento.
          <br><br>
          <h5>Fiabilidad y precisión para el análisis de fibra dietética</h5>
          El procedimiento analítico para la determinación de la fibra dietética implica inicialmente una serie de digestiones de la muestra mediante enzimas termoestables utilizando el digestor enzimático GDE, que opera de acuerdo con el método oficial AOAC para la determinación de la fibra dietética total.
          <br><br>
          
          El agitador magnético múltiple de GDE asegura la homogeneidad gracias a una agitación continua y constante de la muestra evitando el sobrecalentamiento que podría comprometer el éxito de las digestiones enzimáticas.
          Intuitivo y preciso
          <br><br>
          
          A través de una pantalla intuitiva es posible establecer un tiempo de operación, liberando efectivamente al operador.
          <br><br>
          
          El depósito de policarbonato transparente permite una visibilidad completa y garantiza una resistencia considerable hasta 105 ° C mientras que el uso de agua desionizada elimina la formación de cal.
          <br><br>

          La termorregulación efectiva le permite establecer y mantener las diferentes temperaturas requeridas por las enzimas utilizadas a lo largo del tiempo, con una excelente precisión de solo ± 0.2 ° C.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro27_1,
          typeProduct: {
            name: "Analizadores de fibra dietética",
            keyname: "analizadores-de-fibra-dietetica",
          },
          categoryProduct: {
            name: "Unidad de filtrado",
            keyname: "unidad-de-filtrado",
          },
          name: "CSF6 Unitad de Filtrado",
          description: "Unidad de filtración para análisis de fibra dietética total en alimentos.",
          descriptionLong: `Unidad de filtración para análisis de fibra dietética total en alimentos.
          <br><br>
          <h5>Filtración rápida y eficaz</h5>
          CSF6 es ideal para una filtración eficaz, una vez que la muestra ha sido procesada por el digestore enzimatico GDE.
          <br><br>
          
          Esta combinación VELP permite realizar el análisis de acuerdo con el método oficial AOAC (Determinación de fibra dietética total) con una drástica reducción del tiempo requerido en comparación con el procedimiento manual.
          La unidad di filtración CFS6  es capaz de realizar muestras únicas o múltiples, hasta un máximo de 6 simultáneamente, en menos de 20 minutos, incluso a plena carga.
          Bombas de alto rendimiento para mejorar la calidad de la filtración
          <br><br>
          
          La bomba de alto rendimiento permite acelerar las fases de filtración y el lavado final.
          <br><br>
          
También es posible inyectar aire comprimido desde abajo para eliminar cualquier muestra que se haya acumulado en el filtro del crisol, lo que afecta la calidad de la filtración.

`,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro28_1,
          typeProduct: {
            name: "Reactor de estabilidad de oxidación",
            keyname: "reactor-de-estabilidad-de-oxidacion",
          },
          categoryProduct: {
            name: "Reactor de estabilidad",
            keyname: "reactor-de-estabilidad",
          },
          name: "OXITEST Reactor de Estabilidad Oxidativa",
          description: "Reactor innovador para la determinación de la estabilidad oxidativa de grasas en toda la muestra según el procedimiento oficial AOCS Cd-12c-16.",
          descriptionLong: `Reactor innovador para la determinación de la estabilidad oxidativa de grasas en toda la muestra según el procedimiento oficial AOCS Cd-12c-16.
          <br><br>
          <h5>Estabilidad oxidativa de grasas y aceites para laboratorios de I+D y control de calidad</h5>
          El reactor OXITEST acelera el proceso de oxidación de lípidos que en condiciones normales puede llevar semanas o meses y produce resultados rápidos, precisos y fiables para las industrias de alimentos y piensos, cosmética, farmacéutica y petroquímica.
          <br><br>
          
          OXITEST es capaz de aportar información de alto valor añadido a los laboratorios de control de calidad y de investigación y desarrollo para:
          <ul>
          <li>Control de calidad de materias primas e ingredientes</li>
          <li>Efecto de las condiciones de transporte sobre materias primas y productos acabados</li>
          <li>Estudios sobre el período de almacenamiento</li>
          <li>Desarrollo de nuevos productos</li>
          <li>Optimización de fórmulas</li>
          <li>Test sobre el impacto de la oxidación en los ingredientes</li>
          <li>Optimización de procesos</li>
          <li>Estudio de envases y comparación entre envases alternativos</li>
          </ul>
          
          <h5>Resultados representativos de toda la muestra</h5>
          El reactor OXITEST somete la muestra a un ambiente de estrés oxidativo para evaluar, en un  período corto de tiempo, la resistencia a la oxidación de grasas y aceites. Las condiciones de trabajo más comunes son: 
          <ul>
          <li>Sobrepresión establecida de oxígeno puro (6 bar, grado 5.0)</li>
          <li>Temperatura alta constante, 90 °C</li>
          </ul>
          
          Con el método OXITEST (AOCS Cd12c-16), la prueba de estabilidad se realiza directamente sobre la muestra, ya sea sólida , líquido o pastoso.
          <br><br>
          
          La principal ventaja del método OXITEST asegura resultados representativos sin extracción previa de las grasas de la muestra.  
          <br><br>
          
          Otros componentes de la muestra, como oxidantes químicos o metales, pueden favorecer la oxidación, por ello, el uso del extracto graso no es un factor adecuado para predecir la estabilidad. 
          <br><br>
          
          <h5>El Período de Inducción IP</h5>
          Los resultados de OXITEST se expresan a través del período de inducción IP. 
          <br><br>
          
          El IP es el tiempo que tarda la muestra en comenzar a oxidarse, lo que corresponde a un nivel detectable de rancidez o un cambio repentino en la velocidad de oxidación.
          <br><br>
          
          Cuanto más largo sea el período de inducción, mayor será la estabilidad oxidativa a lo largo del tiempo.
          <br><br>
          
          <h5>OXISoft ™, software potente e intuitivo</h5>
          
          El OXITEST se controla completamente a través del PC gracias al software intuitivo OXISoft ™ que es capaz de controlar hasta 4 OXITEST de forma simultánea e independiente.
          <br><br>
          
          OXISoft ™ es fácil de usar, con un vistazo se pueden controlar los parámetros del análisis, las condiciones del instrumento y los resultados.
          <br><br>
          
          El software viene con soporte en varios idiomas y una biblioteca de métodos preinstalada que cubre una amplia gama de tipos de muestras, ¡puede usar, editar y crear sus propios métodos!
          <br><br>

Gestión de los datos,  creación de informes y archivo de datos para las siguientes formas de análisis:
          <ul>
          <li>Prueba de repetibilidad</li>
          <li>Prueba de frescura</li>
          <li>Comparación de diferentes fórmulas</li>
          <li>Comparación de envases</li>
          <li>IP durante el envejecimiento</li>
          <li>Estimación de la vida útil</li>
          </ul>

          <h5>Las piezas de titanio garantizan la máxima resistencia</h5>

Las cámaras de oxidación, portamuestras y tapas están fabricados en titanio, un material de calidad superior que garantiza:
          <ul>
          <li>Alta resistencia</li>
          <li>Excelente compatibilidad química</li>
          <li>Fácil limpieza</li>
          <li>Ahorro de costes, ya que no se requieren consumibles OXITEST está habilitado para la conexión de la nube VELP Ermes</li>
          </ul> 


El OXITEST gracias a su conectividad a VELP Ermes te permite reducir las operaciones de rutina gracias a la supervisión en tiempo real de tus instrumentos estés donde estés y en cualquier momento desde tu PC, smartphone y tablet.
          <ul>
          <li>Control en tiempo real, acceso a bases de datos, informes y notificaciones</li>
          <li>Máxima seguridad y protección de datos</li>
          <li>Acceda a los datos en cualquier momento a través de PC, smartphone y tableta</li>
          <li>Apoyo y servicio técnico mejorados</li>
          <li>Actualizaciones de software inmediatas</li>
          <li>Cree y comparta informes y mejore la colaboración con su equipo</li>
          </ul>
          `,
          videoLink: "YARZPNnPsTk",
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
          srcImage: pro01_1,
          typeProduct: {
            name: "Agitadores",
            keyname: "agitadores",
          },
          categoryProduct: {
            name: "Agitadores Magneticos",
            keyname: "agitadores-magneticos",
          },
          name: "",
          description: "",
          descriptionLong: ``,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
      ],
    },
  ],
};

export default apiSelcaEscondidaMock;
