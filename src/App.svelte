<script>
  import * as d3 from "d3";
  import IsotypeBars from "./lib/IsotypeBars.svelte";



  let años = [2015,2016,2017,2018,2019, 2020, 2021, 2022,2023, 2024]
  let serieA = [24, 33, 43, 54, 63, 71, 77, 87, 92, 98];
  let serieB = [23, 35, 45, 56, 50, 43, 38, 32, 28, 25];
  let altura = d3.scaleLinear().domain([5, 100]).range([15, 225]);
  let transformedValues = serieA.map(n => Math.round((n - 20) / 10) * 10);
  let presupuestoMaritimo = serieA.map(n => Math.floor(95 - n / 2.2));

  // AGREGar tipografias piola
  // titulo piola con gpt maybe
  // media pila pato


  // se ordena el vector en forma ascendente para formar los años
  let sortedNumbers = [...serieA].sort((a, b) => a - b);
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
      <h1>La pesca ilegal: Un problema en crecimiento</h1>
      <p>
        La pesca ilegal, no declarada y no reglamentada (INDNR) representa una amenaza creciente para los ecosistemas marinos. Cada año, millones de toneladas de peces son extraídas sin control, lo que deteriora la biodiversidad, debilita la seguridad alimentaria y perjudica gravemente a las comunidades costeras que dependen del mar para subsistir.
      </p>
      <p>
        A través de una serie de visualizaciones, este proyecto busca evidenciar la magnitud de este conflicto global y poner en perspectiva sus consecuencias. El objetivo es generar conciencia sobre la urgencia de implementar medidas eficaces para frenar esta práctica destructiva.
      </p>
    </header>


    <!-- Segunda representación: Escuela de Peces -->
     <h2 class="titulos-graficos">Millones de peces pescados ilegalmente en los ultimos 10 años: </h2>
    <section class="isotype-bars visual-box" style="margin-bottom: 2cm;">
      <IsotypeBars numbers={serieA} años={años}/>
    </section>

    <header class="story-header" style="margin-top: 0cm;">
      <p> La grafica representa el crecimiento de la cantidad de peces pescados de manera ilicita, donde cada pescado representa un incremento en 7 millones de peces. </p>
    </header>

    <section style="margin-bottom: 2cm;">

    <header class="story-header">
      <h1>Conciencia ambiental en comunidades costeras</h1>
      <p>
        Durante la última década, los niveles de conciencia ambiental acerca de la pesca ilegal en las comunidades costeras han crecido notablemente. Sin embargo, a pesar de este progreso, todavía queda un largo camino por recorrer para lograr una comprensión profunda y generalizada sobre la importancia de proteger nuestros océanos.
      </p>
      <p>
        Esta visualización muestra cómo fue aumentando ese nivel de conciencia año a año —reflejado en el número de personas que se informan, actúan y defienden prácticas sostenibles— aunque aún estamos lejos de alcanzar el 100%.
      </p>
    </header>

    <div class = "visual-box">
      <div class="legend waffle-legend ">
        <div class="legend-item">
          <img src="./images/Fish2.svg" alt="Pez consciente" />
          <span>1% con conciencia ambiental</span>
        </div>
        <div class="legend-item">
          <img src="./images/Fish.svg" alt="Pez sin conciencia" />
          <span>1% sin conciencia ambiental</span>
        </div>
      </div>
      <div class="waffle-grid ">
        {#each transformedValues as value, index}
          <div class="waffle-year">
            <p class="waffle-label">{años[index]}</p>
            <div class="waffle-square">
              {#each Array(100) as _, i}
                <img
                  class="waffle-fish"
                  src={i < value ? "./images/Fish2.svg" : "./images/Fish.svg"}
                  alt="Conciencia"
                />
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>

    </section>

    <!-- CUARTA REPRESENTACIÓN: Gráfico de Barras – Millones de Peces Pescados Ilegalmente -->
    <section style="margin-bottom: 1cm; ">
      <header class = "story-header" style="margin-bottom: 2cm;">
        <h1 class="section-title">Control Gubernamental</h1>
        <p class="section-text">
          La lucha contra la pesca ilegal no puede depender únicamente de la conciencia ciudadana o de iniciativas aisladas. Es fundamental que los gobiernos destinen recursos concretos al control marítimo y fiscalización. Sin inversión pública sostenida, los esfuerzos por proteger nuestros océanos quedan a la deriva.
        </p>
      </header>
    </section>

        <h2 class="titulos-graficos">
          Porcentaje del Presupuesto Ambiental (global) destinado al Control Marítimo:
        </h2>

      <section class="visual-box">
        <div class="bar-chart">
          {#each presupuestoMaritimo as value, index}
          <div class="bar-wrapper">
            <span class="value-label">{value}%</span>
            <div class="bar-item" style="height: {illegalFishScale(value)}px;"></div>
            <span class="year-label">{años[index]}</span>
          </div>
          {/each}
        </div>
      </section>
        

    <section class= "story-header">
      <h1>
        Buques Pesqueros Ilegales en Crecimiento
      </h1>
      <p>
        A medida que la pesca ilegal se expande, también lo hace la cantidad de buques no registrados que operan fuera del marco legal. Muchas de estas embarcaciones apagan sus sistemas de rastreo y violan zonas protegidas sin dejar rastro.
      </p>
    </section>
      
      <section>

        <div style="margin-top: 1.5cm;">
        <h1 class="titulos-graficos" >Cantidad de buques pesqueros ilegales detectados por país a traves de los años:</h1>
        
        <iframe src='https://flo.uri.sh/visualisation/22666020/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/22666020/?utm_source=embed&utm_campaign=visualisation/22666020' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
        
        <section class="story-header" style="margin-top:0cm;">
          <p>En particular, la situación de China se ha tornado critica en los ultimas años. Esta nación, sufre de un incremento exponencial de buques pesqueros ilegales, afectando no solo a sus aguas, sino que tambien la de otros paises los cuales estos buques explotan.</p>
        </section>

      </div>
      
      <div style="margin-top: 3cm;">
        <h1 class="titulos-graficos" >Porcentaje de buques ilegales detectados vs capturados:</h1>
        <iframe src='https://flo.uri.sh/visualisation/22677699/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/22677699/?utm_source=embed&utm_campaign=visualisation/22677699' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
        <section class="story-header">
          <p>Por ultimo, este grafico muestra como evolucionan los porcentajes de buques ilegales detectados y capturados a traves de los ultimos años. Se puede observar como hasta 2018 ambos porcentajes se mantenian muy cercanos, indicando que la mayoria de buques que eran detectados terminaban siendo capturados. Sin embargo, desde este año en adelante el ratio de detección-captura empieza a incrementar drasticamente. Con esta información, se puede concluir que si bien la tecnologia de detección ha evolucionado muchisimo, la captura de dichos buques viene en declive.</p>
        </section>

      </div>

      <section class="story-header">
        <h1 style="color: white;">Conclusión</h1>
        <p> Con esto, se evidencia con claridad que la pesca ilegal continúa siendo un problema gravemente vigente en la actualidad. Lejos de disminuir, en muchos casos —como el de China— su crecimiento ha sido acelerado y alarmante. Esta actividad no solo representa una amenaza directa a la biodiversidad marina, sino que también pone en riesgo la sostenibilidad de los ecosistemas oceánicos, la seguridad alimentaria global y los medios de vida de comunidades costeras que dependen de la pesca responsable. Es fundamental que como sociedad tomemos conciencia del impacto que esto genera, y que promovamos acciones concretas —desde políticas públicas hasta decisiones de consumo— para frenar su avance y proteger nuestros mares.</p>
      </section>
      
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span>Patricio Peralta</span>
        </a>
        <a href="https://instagram.com/patoperaltaa_" target="_blank" rel="noopener noreferrer">
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

  .titulos-graficos{
    color: white; 
    font-size: 1.8rem; 
    text-align: left;
  }

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

  .waffle-legend {
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 1rem auto 2rem auto;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 0.2rem 0.2rem;
    backdrop-filter: blur(3px);
    max-width: 650px;
  }

  .legend-item {
    display: flex;

    align-items: center;
    gap: 0.7rem;
    color: white;
    font-size: 1rem;
  }

  .legend-item img {
    width: 40px;
    height: 40px;
  }
  
  .waffle-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.waffle-year {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.waffle-label {
  color: white;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.waffle-square {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 1px;
  width: fit-content;
}

.waffle-fish {
  width: 18px;
  height: 18px;
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
    text-align: left;
    margin-bottom: 2cm;
    margin-top: 2cm ;

  }
  .story-header h1 {
    color: #ffffff;
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
  .story-header p {
    color: #ddd8d8;
    font-size: 1.5rem;
  }
  .section-title {
    margin-bottom: 1rem;
  }

  .visual-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #c3bdbd;
    padding: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .bar-chart {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    margin: 2rem auto;
    max-width: 800px;
    min-height: 350px;
  }
  .bar-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .bar-item {
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
  .year-label {
    color: #cce5ff;
    white-space: nowrap;
    margin-top: 0.5rem;
  }
  .bar-wrapper .value-label {
    color: #cce5ff;
    margin-bottom: 0.5rem;
  }

  :global(body),
  :global(html) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: linear-gradient(to bottom, #001e4d, #000000);
    font-family: 'Din Condensed', sans-serif;
  }
  :global(p){
    font-family: 'Roboto', sans-serif;

  }
  :global(.headline) {
    margin: 30px;
    color: white;
    font-size: 1.5rem;
  }
</style>
