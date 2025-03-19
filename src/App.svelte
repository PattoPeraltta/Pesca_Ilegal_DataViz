<script>
  import * as d3 from "d3"
  import Waffles from "./lib/Waffles.svelte"
  import IrregularPath from "./lib/IrregularPath.svelte"
  import CoffeColumns from "./lib/CoffeColumns.svelte"
  import Donas from "./lib/Donas.svelte"
  import IsotypeBars from "./lib/IsotypeBars.svelte"

  let numbers = [24,33,43,54,63,71,77,87,92,98]

  /* 
    d3.scaleLinear() retorna una función,
    la guardamos en altura
    para las alturas de los isotipos
  */

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
  <hr />

  <!-- Cafés -->
  <CoffeColumns numbers={numbers} title="Canal: altura. Tipo: columnas" />
  <hr />

  <!-- Waffles -->
  <Waffles
    numbers={numbers}
    title="Magnitudes. Canal: área. Tipo: gráfico waffle"
  />
  <hr />

  <!-- Donas -->
  <Donas
    numbers={numbers}
    title="Magnitudes. Canal: ángulo. Tipo: gráfico donas"
  />
  <hr />

  <!-- Contornos irregulares -->
  <IrregularPath title="Canal: longitud (path irregular)" numbers={numbers} />
  <hr />
</main>

<style>
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
  }

  .iso__container {
    display: flex;
    width: 300px;
    align-items: end;
    justify-content: space-around;
  }
  .iso__container-big {
    display: flex;
    flex-direction: row-reverse;
    width: 600px;
    align-items: end;
    justify-content: space-around;
  }
  :global(.headline) {
    margin: 50px 0;
  }
</style>
