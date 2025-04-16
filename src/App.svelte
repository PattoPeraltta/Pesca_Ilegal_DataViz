<script>
  import * as d3 from "d3";
  import IsotypeBars from "./lib/IsotypeBars.svelte";

  // para que las representaciones de la segunda parte sean coherentes,
  // se necesitara ingresar un vector de numeros entre 0 y 100. :<)

  let numbers = [24, 33, 43, 54, 63, 71, 77, 87, 92, 98];
  let numbers2 = [98, 92, 87, 77, 71, 63, 54, 43, 33, 24];
  let altura = d3.scaleLinear().domain([5, 100]).range([15, 225]);


  // se ordena el vector en forma ascendente para formar los años
  let sortedNumbers = [...numbers].sort((a, b) => a - b);
  let fishMin = Math.min(...sortedNumbers);
  let fishMax = Math.max(...sortedNumbers);

  // defino funcion para conseguir int random
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // defino escala para grafico de barras de pescaderia ilegal
  // se acotan los valores con min/max , y con getRandomInt se generan valores
  // con range se ponen la minima y maxima altura en pixeles

  let illegalFishScale = d3.scaleLinear()
    .domain([fishMin - 1, fishMax + 1]) 
    .range([10, 300]); 

</script>

<main class="container">
  <div class="background-container">
    <header class="story-header">
      <h1>La Odisea Marina: Un Viaje a Través de las Magnitudes</h1>
      <p>
        Primero, para el entregable 2, se representaron las magnituded 24 y 95
        como un inofensivo pescado (24), y un tiburon temeroso (95).
      </p>
    </header>

    <!-- Primera representación: Encuentro Inicial -->
    <section class="initial-representation">
      <h2 class="headline section-title">Encuentro Inicial: La Dualidad del Océano</h2>
      <div class="images-container">
        <div class="image-column">
          <div class="image-wrapper">
            <img src="./images/Shark.svg" alt="Tiburón" class="shark-image" />
          </div>
          <p class="magnitude">87</p>
        </div>
        <div class="image-column">
          <div class="image-wrapper">
            <img src="./images/Fish.svg" alt="Pez" class="fish-image" />
          </div>
          <p class="magnitude">24</p>
        </div>
      </div>
    </section>

    <header class="story-header">
      <p>
        Para comenzar con la parte 3a del entregable, decidi optar por un uso con
        fines visuales para el conjunto de numeros dado, donde dado dicho
        conjunto se obtiene una visualización por cantidad (escuela de peces) y
        otra por tamaño (Exhibición de tiburones):
      </p>
    </header>

    <!-- Segunda representación: Escuela de Peces -->
    <section class="isotype-bars">
      <IsotypeBars numbers={numbers} title="Escuela de Peces" />
    </section>

    <!-- Tercera representación: Canal de la Longitud -->
    <section class="length-channel">
      <h2 class="headline section-title">Exhibición de Tiburones</h2>
      <div class="iso__container-big">
        {#each numbers2 as n}
          <img
            style="height: {altura(n) / 1.5}px; padding: 4px;"
            src="./images/Shark.svg"
            alt="Tiburón"
          />
        {/each}
      </div>
    </section>
    <hr>
      <header class="story-header">
        <h1>Segunda idea: Parte 3b</h1>
      </header>
      <p style="color: #cce5ff; font-size: 1.2rem;">
        En las siguientes visualizaciones, el vector de entrada se interpreta como un conjunto de años del siglo XX, y los datos de cada visualización se generan en función de estos numeros, haciendo que si se ingresase un nuevo vector, el grafico cambiaria acorde a los nuevos valores. Primero, se muestra el crecimiento en pesca ilegal en Americam Latina. En segundo lugar, se expone el decrecimiento de ataques de tiburones a traves de los años.
      </p>

    <!-- CUARTA REPRESENTACIÓN: Gráfico de Barras – Millones de Peces Pescados Ilegalmente -->
    <section class="illegal-fishing-chart">
      <h2 class="headline section-title">
        Millones de Peces Pescados Ilegalmente en America Latina
      </h2>
      <div class="bar-chart">
        {#each sortedNumbers as m}
          {@const value = m + getRandomInt(-1, 1)}
          <div class="bar-wrapper">
            <span class="value-label">{value}</span>
            <span class="caption">Pescados (MM)</span>
            <div
              class="bar-item"
              style="height: {illegalFishScale(value)}px;"
            >
            </div>
            <span class="year-label">{"19" + m}</span>
          </div>
        {/each}
      </div>
    </section>

    <!-- QUINTA REPRESENTACIÓN: Gráfico de Barras – Ataques de Tiburones Anuales -->
    <section class="shark-attacks-chart">
      <h2 class="headline section-title">Ataques de Tiburones siglo XX</h2>
      <div class="bar-chart">
        {#each sortedNumbers as m}
          <div class="bar-wrapper">
            <span class="value-label">{(m / 10).toFixed(1)}</span>
            <span class="caption">Ataques</span>

            <div
              class="bar-item"
              style="height: {300 * (1- m / fishMax)}px;"
            >
          </div>
            <span class="year-label">{"19" + m}</span>
          </div>
        {/each}
      </div>
    </section>
    <hr>
      <h1 style="color: white; font-size: 2.5rem;">Pescaderia ilegal alrededor del mundo</h1>
      <p style="color: #cce5ff; font-size: 1.2rem;">
        Lastimosamente, la pescaderia ilegal es un problema grave el cual año tras año sigue empeorando. A pesar de los notorios esfuerzos por su prohibición, esta problematica sigue acechando los oceanos. A continuación, se presentan una serie de visualizaciones que ayudan a percibir la magnitud del conflicto. 
      </p>
      
      <section>
        <div style="margin-top: 2cm;">
        <h2 style="color: white; font-size: 2rem;">Cantidad de embarcaciones ilegales por país (2024):</h2>
        <iframe src='https://flo.uri.sh/visualisation/22665714/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/22665714/?utm_source=embed&utm_campaign=visualisation/22665714' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
        <p style="color: #cce5ff; font-size: 1.2rem;">
          En el grafico se observan los primeros 10 paises en el ranking de paises con mas embarcaciones pesqueras ilegales.
        </p>
        </div>
        
        <div style="margin-top: 3cm;">
        <h1 style="color: white; font-size: 2rem; margin-bottom 1cm;" >El crecimiento de la pescaderia ilegal China a traves de los años:</h1>
        
        <iframe src='https://flo.uri.sh/visualisation/22666020/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/22666020/?utm_source=embed&utm_campaign=visualisation/22666020' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
        
        
        <p style="color: #cce5ff; font-size: 1.2rem;">En particular, la situación de China se ha tornado critica en las ultimas decadas. Esta nación, sufre de un incremento exponencial de buques pesqueros ilegales, afectando no solo a sus aguas, sino que tambien la de otros paises los cuales estos buques explotan.</p>
      </div>
      
      <div style="margin-top: 3cm;">

        <h1 style="color: white; font-size: 2rem; margin-bottom 1cm;" >Porcentaje de buques ilegales detectados vs capturados:</h1>

        <iframe src='https://flo.uri.sh/visualisation/22677699/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/22677699/?utm_source=embed&utm_campaign=visualisation/22677699' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

        <p style="color: #cce5ff; font-size: 1.2rem;">Por ultimo, este grafico muestra como evolucionan los porcentajes de buques ilegales detectados y capturados a traves de los ultimos años. Se puede observar como hasta 2018 ambos porcentajes se mantenian muy cercanos, indicando que la mayoria de buques que eran detectados terminaban siendo capturados. Sin embargo, desde este año en adelante el ratio de detección-captura empieza a incrementar drasticamente. Con esta información, se puede concluir que si bien la tecnologia de detección ha evolucionado muchisimo, la captura de dichos buques viene en declive.</p>

      </div>

      <h2 style="color: white; font-size: 2rem; margin-bottom 1cm; margin-top: 1cm;">Conclusión</h2>

      <p style="color: #cce5ff; font-size: 1.2rem;">Con esto, se evidencia con claridad que la pesca ilegal continúa siendo un problema gravemente vigente en la actualidad. Lejos de disminuir, en muchos casos —como el de China— su crecimiento ha sido acelerado y alarmante. Esta actividad no solo representa una amenaza directa a la biodiversidad marina, sino que también pone en riesgo la sostenibilidad de los ecosistemas oceánicos, la seguridad alimentaria global y los medios de vida de comunidades costeras que dependen de la pesca responsable. Es fundamental que como sociedad tomemos conciencia del impacto que esto genera, y que promovamos acciones concretas —desde políticas públicas hasta decisiones de consumo— para frenar su avance y proteger nuestros mares.</p>

    </section>


    <footer class="footer">

      <div class="social-links">
        <a href="https://github.com/PattoPeraltta" target="_blank" rel="noopener noreferrer">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          <span>@PattoPeraltta</span>
        </a>
        <a href="https://www.linkedin.com/in/patricioperaltaramosguerrero/" target="_blank" rel="noopener noreferrer">
          <!-- LinkedIn Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span>Patricio Peralta</span>
        </a>
        <a href="https://instagram.com/patoperaltaa_" target="_blank" rel="noopener noreferrer">
          <!-- Instagram Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
          <span>@patoperaltaa_</span>
        </a>
      </div>
      <div class="copyright">
        <p>© {new Date().getFullYear()} La Odisea Marina. All rights reserved.</p>
      </div>
    </footer>
    
    <style>
    </style>
  </div>


</main>

<style>
  .footer {
    width: 100%;
    padding: 1.5rem 0;
    backdrop-filter: blur(4px);
    margin-top: 3rem;
  }
  
  .social-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  
  .social-links a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #cce5ff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    background-color: rgba(12, 74, 110, 0.4);
    transition: all 0.2s ease;
  }
  
  .social-links a:hover {
    background-color: rgba(12, 74, 110, 0.6);
    color: white;
    transform: translateY(-2px);
  }
  
  .social-links svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .social-links span {
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .copyright {
    margin-top: 1.5rem;
    text-align: center;
    color: rgba(204, 229, 255, 0.7);
    font-size: 0.75rem;
  }
  
  @media (max-width: 640px) {
    .social-links {
      flex-direction: column;
      gap: 1rem;
    }
  }
  .container {
    padding: 1rem;
    text-align: center;
  }
  .background-container {
    background: rgba(255, 255, 255, 0.2);
    padding: 2rem;
    border-radius: 12px;
    margin: 0 auto;
    max-width: 1200px;
  }
  .story-header {
    margin: 2rem auto;
    max-width: 800px;
  }
  .story-header h1 {
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .story-header p {
    color: #cce5ff;
    font-size: 1.2rem;
    margin: 0 auto 2rem;
  }
  .section-title {
    margin-bottom: 1rem;
  }
  .initial-representation,
  .isotype-bars,
  .length-channel,
  .illegal-fishing-chart,
  .shark-attacks-chart {
    border: 4px solid rgba(173, 216, 230, 0.7);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
  }
  .images-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 4rem;
    flex-wrap: wrap;
  }
  .image-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  .shark-image {
    width: 300px;
    height: auto;
  }
  .fish-image {
    width: 100px;
    height: auto;
  }
  .magnitude {
    font-size: 2.5rem;
    color: rgb(157, 198, 247);
    margin-top: 1rem;
  }
  .iso__container-big {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 650px;
    margin: 0 auto;
    gap: 10px;
    padding-top: 1rem;
  }
  .bar-chart {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    margin: 2rem auto;
    max-width: 800px;
    gap: 1rem;
    min-height: 350px;
  }
  .bar-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .bar-item {
    background: rgb(9, 53, 114);
    width: 60px;
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
  .year-label {
    color: #cce5ff;
    white-space: nowrap;
    margin-top: 0.5rem;
  }
  .bar-wrapper .value-label {
    color: #cce5ff;
    margin-top: 0.5rem;
  }
  .bar-wrapper .caption {
    color: #cce5ff;
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
  :global(body),
  :global(html) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: linear-gradient(to bottom, #1a6ed5, #0c3b7c, #001e4d);
    font-family: Arial, sans-serif;
  }
  :global(.headline) {
    margin: 30px;
    color: white;
    font-size: 1.5rem;
  }
</style>
