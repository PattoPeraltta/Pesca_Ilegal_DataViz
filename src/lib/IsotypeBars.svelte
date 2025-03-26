<script>
  import * as d3 from "d3";
  export let title = "";
  export let numbers = [];
  
  // Convert each number to a count of fish (one fish per 5 units)
  let numbersDivided5 = numbers.map(n => Math.floor(n / 5));
</script>

<div class="isotype-bars-container">
  <h3 class="headline section-title">{title}</h3>
  <div class="iso__container-iso">
    {#each numbersDivided5 as n, index}
      <div class="row">
        <p class="number">{numbers[index]}</p>
        <div class="images-container">
          {#each Array(n) as _, i}
            <img
              style="height: 50px; padding: 0.5px"
              src="./images/Fish.svg"
              alt="Pez"
            />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .isotype-bars-container {
    max-width: 1000px;
    margin: 0 auto;
  }
  .iso__container-iso {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .number {
    min-width: 1rem;
    margin: 0;
    font-weight: bold;
    margin-top: 1rem;
    color: white;
  }
  .images-container {
    display: flex;
    flex-wrap: wrap;
  }
  /* Hover animation for fish in the second representation */
  .images-container img {
    transition: transform 0.2s ease;
  }
  .images-container img:hover {
    transform: scale(1.15);
  }
  .section-title {
    margin-bottom: 1rem;
  }
</style>
