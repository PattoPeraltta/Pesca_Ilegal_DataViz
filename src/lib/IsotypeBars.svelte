<script>
  import * as d3 from "d3"
  export let title = ""
  export let numbers = []
  let numbersDivided5 = numbers.map(n => Math.floor(n / 5))
</script>

<h3 class="headline">{title}</h3>
<div class="iso__container-iso">
  {#each numbersDivided5 as n, index}
    <div class="row">
      <p class="number">{numbers[index]}</p>
      <div class="images-container">
        {#each Array(n) as m}
          <img
            style="height: 50px; padding: 0.5px"
            src="./images/Fish.svg"
            alt="person"
          />
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .iso__container-iso {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    align-items: start;
    justify-content: space-around;
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
    margin-top:1rem;
  }
  .images-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
