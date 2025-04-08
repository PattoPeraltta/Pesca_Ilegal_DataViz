<script>
  export let title = "";
  export let numbers = [];
  
  // Cada pezcado en la escuela, representa un incremento en 6 en el numero de magnitud redondeado al multiplo de 6 mas cercano
  let fishCount = numbers.map(n => Math.round(n / 6));
</script>

<div class="isotype-bars-container">
  <h3 class="headline section-title">{title}</h3>
  <div class="iso__container-iso">
    {#each fishCount as count, index}
      <div class="row">
        <p class="number">{numbers[index]}</p>
        <div class="images-container">
          {#each Array(count) as _, i}
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
    align-items: center;
    gap: 1rem;
  }
  .row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .number {
    margin: 0;
    font-weight: bold;
    color: white;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }
  .images-container {
    display: flex;
    flex-wrap: wrap;
  }
  .section-title {
    margin-bottom: 1rem;
  }
</style>
