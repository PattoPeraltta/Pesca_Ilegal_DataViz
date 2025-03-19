<script>
  import * as d3 from "d3"
  import IsotypeBars from "./lib/IsotypeBars.svelte"

  let numbers = [24,33,43,54,63,71,77,87,92,98]

  let altura = d3
    .scaleLinear()
    .domain([5, 100]) // [mínimo, máximo]
    .range([15, 225]) // [altura_minima, altura_máxima]
</script>

<!-- Trabajo anterior  -->
<main class="container">
  <div class="ocean-background">
    <h1 class="headline" >Representación de magnitudes (idea inicial) :</h1>
    
    <div class="images-container">
      <div class="image-column">
        <div class="image-wrapper">
          <img src="./images/Shark.svg" alt="Shark" class="shark-image" />
        </div>
        <p class="magnitude">87</p>
      </div>
      
      <div class="image-column">
        <div class="image-wrapper">
          <img src="./images/Fish.svg" alt="Fish" class="fish-image" />
        </div>
        <p class="magnitude">24</p>
      </div>
    </div>

  <!-- Pescaditos  -->
  <IsotypeBars
    numbers={numbers}
    title="Representación magnitudes: Escuela de peces"
  />

  <!-- Tiburones  -->

</main>

<style>
  .iso__container {
    display: flex;
    width: 350px;
    align-items: end;
    justify-content: space-around;
  }
  .iso__container-big {
    display: flex;
    flex-direction: row-reverse;
    width: 650px;
    align-items: end;
    justify-content: space-around;
  }
  .images-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 4rem;
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

  :global(body), :global(html) {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(to bottom, #1a6ed5, #0c3b7c, #001e4d);
  }
    
  :global(.headline) {
    margin: 50px 0;
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
    h1 {
      font-size: 1.8rem;
    }
    .magnitude {
      font-size: 2rem;
    }
  }

</style>
