<script>
  import * as d3 from "d3";
  import IsotypeBars from "./lib/IsotypeBars.svelte";

  let numbers = [24, 33, 43, 54, 63, 71, 77, 87, 92, 98];
  let numbers2 = [98, 92, 87, 77, 71, 63, 54, 43, 33, 24];

  // Scale to map numeric magnitudes to image heights
  let altura = d3
    .scaleLinear()
    .domain([5, 100])
    .range([15, 225]);
</script>

<main class="container">
  <div class="background-container">
    <header class="story-header">
      <h1>La Odisea Marina: Un Viaje a Través de las Magnitudes</h1>
      <p>
        Sumérgete en un océano de datos, donde cada imagen cuenta una historia. Descubre cómo las magnitudes cobran vida, desde la elegancia de los tiburones hasta la energía vibrante de un banco de peces.
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

    <!-- Segunda representación: Escuela de Peces -->
    <section class="isotype-bars">
      <IsotypeBars numbers={numbers} title="Escuela de Peces: La Danza de los Números" />
    </section>

    <!-- Tercera representación: Canal de la Longitud -->
    <section class="length-channel">
      <h2 class="headline section-title">El Canal de la Longitud: La Escala de los Tiburones</h2>
      <div class="iso__container-big">
        {#each numbers2 as n}
          <img
            style="height: {altura(n)}px; padding: 4px;"
            src="./images/Shark.svg"
            alt="Tiburón"
          />
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
  .length-channel {
    border: 4px solid rgba(173, 216, 230, 0.7);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
  }
  
  .initial-representation .images-container {
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
  .initial-representation .image-wrapper img {
    transition: transform 0.3s ease;
  }
  .initial-representation .image-wrapper img:hover {
    transform: scale(1.1);
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
  .iso__container-big img {
    transition: transform 0.3s ease;
  }
  .iso__container-big img:hover {
    transform: scale(1.05);
  }
  :global(body), :global(html) {
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
  @media (max-width: 768px) {
    .images-container {
      gap: 2rem;
    }
    .image-column {
      width: 200px;
    }
    .shark-image {
      width: 200px;
    }
    .fish-image {
      width: 70px;
    }
    .story-header h1 {
      font-size: 1.8rem;
    }
    .magnitude {
      font-size: 2rem;
    }
    .iso__container-big {
      width: 100%;
      flex-direction: column;
    }
  }
</style>
