<script context="module">
  // Importante para metadata
  export const prerender = true;
  
  // Importaciones
  import * as d3 from "d3";
  import IsotypeBars from "./lib/IsotypeBars.svelte";
</script>

<script>
  // Datos
  let serieA = [24, 33, 43, 54, 63, 71, 77, 87, 92, 98];
  let anios = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

  // Transformaciones y escalas
  let escalaAltura = d3.scaleLinear().domain([5, 100]).range([15, 225]);
  let valoresTransformados = serieA.map(n => Math.round((n - 20) / 10) * 10);
  let presupuestoMaritimo = serieA.map(n => Math.floor(95 - n / 2.2));

  // Se ordena el vector en forma ascendente para hallar máximo/mínimo
  let numerosOrdenados = [...serieA].sort((a, b) => a - b);
  let pecesMinimo = Math.min(...numerosOrdenados);
  let pecesMaximo = Math.max(...numerosOrdenados);

  // Función para conseguir un entero aleatorio
  const obtenerEnteroAleatorio = (minimo, maximo) => {
    minimo = Math.ceil(minimo);
    maximo = Math.floor(maximo);
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  };
  
  // Escala para gráfico de barras
  let escalaPescaIlegal = d3.scaleLinear()
    .domain([pecesMinimo - 1, pecesMaximo + 1]) 
    .range([10, 300]); 
</script>

<!-- Metadata -->
<svelte:head>
  <meta property="og:title" content="Pesca Ilegal - Conciencia Marina" />
  <meta property="og:description" content="Una visualización sobre la pesca ilegal en el mundo." />
  <meta property="og:image" content="./images/Fish.jpeg" />
  <meta property="og:url" content="https://pescailegal.vercel.app/" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="contenedor">
  <div class="contenedor-fondo">
    <!-- Sección de introducción -->
    <header class="encabezado-principal">
      <h1>
        La pesca ilegal: <span class="acentos">Un problema en crecimiento</span>
      </h1>
      <p>
        La pesca ilegal, no declarada y no reglamentada (INDNR) representa una amenaza creciente para los ecosistemas marinos. Cada año, millones de toneladas de peces son extraídas sin control, lo que deteriora la biodiversidad, debilita la seguridad alimentaria y perjudica gravemente a las comunidades costeras que dependen del mar para subsistir.
      </p>
      <p>
        A través de una serie de visualizaciones, este proyecto busca evidenciar la magnitud de este conflicto global y poner en perspectiva sus consecuencias. El objetivo es generar conciencia sobre la urgencia de implementar medidas eficaces para frenar esta práctica destructiva.
      </p>
    </header>

    <!-- Sección de gráfico de peces -->
    <h2 class="titulo-grafico">
      Millones de peces pescados ilegalmente en los últimos 10 años:
    </h2>
    <section class="caja-visual grafico-isotipos">
      <IsotypeBars numbers={serieA} años={anios}/>
    </section>
    <p class="epigrafe">
      La gráfica representa el crecimiento de la cantidad de peces pescados de manera ilícita, donde cada pescado representa un incremento en 10 millones de peces.
    </p>

    <!-- Sección de conciencia ambiental -->
    <section class="seccion-contenido">
      <header class="encabezado-seccion">
        <h1><span class="acentos">Conciencia ambiental</span> en comunidades costeras</h1>
        <p>
          Durante la última década, los niveles de conciencia ambiental acerca de la pesca ilegal en las comunidades costeras han crecido notablemente. Sin embargo, a pesar de este progreso, todavía queda un largo camino por recorrer para lograr una comprensión profunda y generalizada sobre la importancia de proteger nuestros océanos.
        </p>
        <p>
          Esta visualización muestra cómo fue aumentando ese nivel de conciencia año a año —reflejado en el número de personas que se informan, actúan y defienden prácticas sostenibles— aunque aún estamos lejos de alcanzar el 100%.
        </p>
      </header>

      <div class="caja-visual">
        <div class="leyenda leyenda-waffle">
          <div class="item-leyenda">
            <img src="./images/Fish2.svg" alt="Pez consciente" />
            <span>1% con conciencia ambiental</span>
          </div>
          <div class="item-leyenda">
            <img src="./images/Fish.svg" alt="Pez sin conciencia" />
            <span>1% sin conciencia ambiental</span>
          </div>
        </div>
        <div class="cuadricula-waffle">
          {#each valoresTransformados as valor, indice}
            <div class="anio-waffle">
              <p class="etiqueta-waffle">
                {anios[indice]}
              </p>
              <div class="cuadrado-waffle">
                {#each Array(100) as _, i}
                  <img
                    class="pez-waffle"
                    src={i < valor ? "./images/Fish2.svg" : "./images/Fish.svg"}
                    alt="Conciencia"
                  />
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Sección de control gubernamental -->
    <section class="seccion-contenido">
      <header class="encabezado-seccion">
        <h1 class="titulo-seccion">
          <span class="acentos">Control</span> Gubernamental
        </h1>
        <p class="texto-seccion">
          La lucha contra la pesca ilegal no puede depender únicamente de la conciencia ciudadana o de iniciativas aisladas. Es fundamental que los gobiernos destinen recursos concretos al control marítimo y fiscalización. Sin inversión pública sostenida, los esfuerzos por proteger nuestros océanos quedan a la deriva.
        </p>
      </header>
    </section>

    <h2 class="titulo-grafico">
      % del Presupuesto Ambiental (global) destinado al Control Marítimo:
    </h2>

    <section class="caja-visual">
      <div class="grafico-barras">
        {#each presupuestoMaritimo as valor, indice}
          <div class="contenedor-barra">
            <span class="etiqueta-valor">{valor}%</span>
            <div class="barra" style="height: {escalaPescaIlegal(valor)}px;"></div>
            <span class="etiqueta-anio">{anios[indice]}</span>
          </div>
        {/each}
      </div>
    </section>
      
    <!-- Sección de buques pesqueros -->
    <section class="encabezado-seccion">
      <h1>
        Buques Pesqueros <span class="acentos">Ilegales </span>en Crecimiento
      </h1>
      <p>
        A medida que la pesca ilegal se expande, también lo hace la cantidad de buques no registrados que operan fuera del marco legal. Muchas de estas embarcaciones apagan sus sistemas de rastreo y violan zonas protegidas sin dejar rastro.
      </p>
    </section>
    
    <section class="seccion-graficos-externos">
      <div class="grafico-externo">
        <h1 class="titulo-grafico">
          Cantidad de buques pesqueros ilegales detectados por país a través de los años:
        </h1>
        <iframe src='https://flo.uri.sh/visualisation/22666020/embed' title='Interactive or visual content' class='iframe-flourish' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        <div class='credito-flourish'>
          <a class='flourish-credit' href='https://public.flourish.studio/visualisation/22666020/?utm_source=embed&utm_campaign=visualisation/22666020' target='_top'>
            <img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg'>
          </a>
        </div>
        
        <p class="epigrafe">
          En particular, la situación de China se ha tornado crítica en los últimos años. Esta nación sufre de un incremento exponencial de buques pesqueros ilegales, afectando no solo a sus aguas, sino también la de otros países los cuales estos buques explotan.
        </p>
      </div>
      
      <div class="grafico-externo">
        <h1 class="titulo-grafico">
          Porcentaje de buques ilegales detectados vs capturados:
        </h1>
        <iframe src='https://flo.uri.sh/visualisation/22677699/embed' title='Interactive or visual content' class='iframe-flourish' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        <div class='credito-flourish'>
          <a class='flourish-credit' href='https://public.flourish.studio/visualisation/22677699/?utm_source=embed&utm_campaign=visualisation/22677699' target='_top'>
            <img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg'>
          </a>
        </div>
        <p class="epigrafe">
          Por último, este gráfico muestra cómo evolucionan los porcentajes de buques ilegales detectados y capturados a través de los últimos años. Se puede observar cómo hasta 2018 ambos porcentajes se mantenían muy cercanos, indicando que la mayoría de buques que eran detectados terminaban siendo capturados. Sin embargo, desde este año en adelante el ratio de detección-captura empieza a incrementar drásticamente. Con esta información, se puede concluir que si bien la tecnología de detección ha evolucionado muchísimo, la captura de dichos buques viene en declive.
        </p>
      </div>

      <!-- Sección de conclusión -->
      <section class="encabezado-seccion">
        <h1 class="titulo-conclusion">
          Conclusión
        </h1>
        <p>
          Con esto, se evidencia con claridad que la pesca ilegal continúa siendo un problema gravemente vigente en la actualidad. Lejos de disminuir, en muchos casos —como el de China— su crecimiento ha sido acelerado y alarmante. Esta actividad no solo representa una amenaza directa a la biodiversidad marina, sino que también pone en riesgo la sostenibilidad de los ecosistemas oceánicos, la seguridad alimentaria global y los medios de vida de comunidades costeras que dependen de la pesca responsable. Es fundamental que como sociedad tomemos conciencia del impacto que esto genera, y que promovamos acciones concretas —desde políticas públicas hasta decisiones de consumo— para frenar su avance y proteger nuestros mares.
        </p>
      </section>
    </section>

    <!-- Pie de página -->
    <footer class="pie-pagina">
      <div class="enlaces-sociales">
        <a href="https://github.com/PattoPeraltta" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          <span style="font-family: 'Inria sans', sans-serif;">@PattoPeraltta</span>
        </a>
        <a href="https://www.linkedin.com/in/patricioperaltaramosguerrero/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span style="font-family: 'Inria sans', sans-serif;">Patricio Peralta</span>
        </a>
        <a href="https://instagram.com/patoperaltaa_" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
          <span style="font-family: 'Inria sans', sans-serif;">@patoperaltaa_</span>
        </a>
      </div>
      <div class="copyright">
        <p>© 2025 La Odisea Marina. All rights reserved.</p>
      </div>
    </footer>
  </div>
</main>



<style>
  /* Selección de texto */
  ::selection {
    color: rgb(255, 255, 255);
    background: #A69Ae5; 
  }

  /* Contenedores principales */
  .contenedor {
    padding: 1rem;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .contenedor-fondo {
    background: rgba(255, 255, 255, 0.2);
    padding: 2rem;
    border-radius: 12px;
    margin: 0 auto;
    max-width: 1200px;
  }

  /* Encabezados y textos */
  .encabezado-principal,
  .encabezado-seccion {
    margin: 2rem auto;
    text-align: left;
  }

  .acentos{
    color: #A69CE5;
  }

  .encabezado-principal h1,
  .encabezado-seccion h1 {
    color: #ffffff;
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  .encabezado-principal p,
  .encabezado-seccion p {
    color: #ddd8d8;
    font-size: 1.5rem;
  }

  .titulo-grafico {
    color: rgb(255, 255, 255); 
    font-size: 1.5rem; 
    opacity: .7;
    text-align: center;
    margin-bottom: 0.4cm;
  }

  .titulo-conclusion {
    color: white;
  }

  .epigrafe {
    text-align: left;
    color: #ddd8d8;
    font-size: 1.5rem;
    margin-top: 0;
  }

  /* Secciones de contenido */
  .seccion-contenido {
    margin-bottom: 2rem;
  }

  .seccion-graficos-externos .grafico-externo {
    margin-top: 3rem;
  }

  /* Cajas visuales y gráficos */
  .caja-visual {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #c3bdbd;
    padding: 1.5rem;
    margin-bottom: 0.5rem;
  }

  /* Gráfico de barras */
  .grafico-barras {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    margin: 2rem auto;
    max-width: 800px;
    min-height: 350px;
  }
  
  .contenedor-barra {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .barra {
    background: #A69Ae5;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 0px;
    position: relative;
    transition: height 0.5s ease-out;
    overflow: hidden;
    padding-bottom: 5px;
  }
  
  .etiqueta-anio {
    color: #cce5ff;
    white-space: nowrap;
    margin-top: 0.5rem;
  }
  
  .etiqueta-valor {
    color: #cce5ff;
    margin-bottom: 0.5rem;
  }

  /* Gráfico de waffle */
  .leyenda-waffle {
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 1rem auto 2rem auto;
    border-radius: 10px;
    padding: 0.8rem 0.8rem;
    backdrop-filter: blur(3px);
    max-width: 650px;
    background: rgb(68, 68, 68);
    border: 1px solid #A69CE5;
  }

  .item-leyenda {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    color: #f9f9f9;
    font-size: 1.2rem;
  }

  .item-leyenda img {
    width: 40px;
    height: 40px;
  }
  
  .cuadricula-waffle {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  .anio-waffle {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .etiqueta-waffle {
    color: white;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .cuadrado-waffle {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 1px;
    width: fit-content;
  }

  .pez-waffle {
    width: 18px;
    height: 18px;
  }

  /* Gráficos externos (Flourish) */
  .iframe-flourish {
    width: 100%;
    height: 600px;
  }

  .credito-flourish {
    opacity: 0;
  }

  /* Pie de página */
  .pie-pagina {
    width: 100%;
    padding: 1.5rem 0;
    backdrop-filter: blur(4px);
    margin-top: 3rem;
  }
  
  .enlaces-sociales {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  
  .enlaces-sociales a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #ffffff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    background-color: rgba(147, 147, 147, 0.4);
    transition: all 0.2s ease;
  }
  
  .enlaces-sociales a:hover {
    background-color: white;
    color: black;
    transform: translateY(-2px);
  }
  
  .enlaces-sociales svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .enlaces-sociales span {
    font-size: 0.875rem;
    font-weight: 500;
  }

  .copyright {
    margin-top: 1.5rem;
    text-align: center;
    color: rgba(125, 126, 128, 0.7);
    font-size: 0.75rem;
  }

  /* Estilos globales */
  :global(body),
  :global(html) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: linear-gradient(to bottom, #000000, #000000);
    font-family: 'Bungee', cursive, sans-serif;
    position: relative;
  }
  
  :global(p) {
    font-family: 'Inria Sans', sans-serif;
  }
  
  :global(.headline) {
    margin: 30px;
    color: white;
    font-size: 1.5rem;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .enlaces-sociales {
      flex-direction: column;
      gap: 1rem;
    }
    .barra {
    background: #A69Ae5;
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 0px;
    position: relative;
    transition: height 0.5s ease-out;
    overflow: hidden;
    padding-bottom: 5px;
  }
  .item-leyenda {
    display: flex;
    align-items: center;
    gap: 0rem;
    color: #f9f9f9;
    font-size: 0.9rem;
  }

  .item-leyenda img {
    width: 30px;
    height: 30px;
  }
  
  .iframe-flourish {
    width: 100%;
    height: 500px;
  }
  .cuadricula-waffle {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 waffle charts por fila */
    gap: 1.5rem;
    justify-items: center;
  }

  .cuadrado-waffle {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 1px;
  }

  .pez-waffle {
    width: 12px;
    height: 12px;
  }

  .etiqueta-waffle {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }

  .anio-waffle {
    margin-bottom: 0.5rem;
  }

  .encabezado-principal,
  .encabezado-seccion {
    text-align: left;
  }

  .encabezado-principal h1,
  .encabezado-seccion h1 {
    font-size: 2rem;
  }

  .encabezado-principal p,
  .encabezado-seccion p {
    font-size: 1.4rem;
  }

  .titulo-grafico {
    font-size: 1.2rem; 
  }

  .titulo-conclusion {
    font-size: 1.4rem;
  }

  .epigrafe {
    font-size: 1.4rem;
  }

  .etiqueta-anio {
    font-size: .6rem;
  }
  
  .etiqueta-valor {
    font-size:.7rem;
  }

  }
</style>