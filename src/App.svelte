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
        Primero, para el entregable 3a, se representaron las magnituded 24 y 95
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
        Para comenzar con la parte 3b del entregable, decidi optar por un uso con
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

    <header class="story-header">
      <h1>Segunda idea: Parte 2b</h1>
      <p>
        En las siguientes visualizaciones, el vector de entrada se interpreta
        comom un conjunto de años del siglo XX. Primero, se muestra el
        crecimiento en pesca ilegal en Americam Latina. En segundo lugar, se
        expone el decrecimiento de ataques de tiburones a traves de los años.
      </p>
    </header>

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
  </div>
</main>

<style>
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
    background: rgba(173, 216, 230, 0.7);
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 4px;
    position: relative;
    transition: height 0.5s ease-out;
    overflow: hidden;
    padding-bottom: 5px;
  }
  .year-label {
    font-weight: bold;
    color: #ffffff;
    white-space: nowrap;
    margin-top: 0.5rem;
  }
  .bar-wrapper .value-label {
    color: #ffffff;
    margin-top: 0.5rem;
  }
  .bar-wrapper .caption {
    color: #FFFFFF;
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
