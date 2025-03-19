<script>
  import * as d3 from "d3"
  import IsotypeBars from "./lib/IsotypeBars.svelte"

  let numbers = [24,33,43,54,63,71,77,87,92,98]

  let altura = d3
    .scaleLinear()
    .domain([5, 100]) // [mínimo, máximo]
    .range([15, 225]) // [altura_minima, altura_máxima]
</script>

<main class="container">
  <!-- Barras Isotipos  -->
  <IsotypeBars
    numbers={numbers}
    title="Magnitudes. Canal: longitud. Tipo: gráfico Isotype"
  />

</main>

<style>
  :global(body), :global(html) {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(to bottom, #1a6ed5, #0c3b7c, #001e4d);
  }

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
  
  :global(.headline) {
    margin: 50px 0;
    color: white;
  }


</style>
