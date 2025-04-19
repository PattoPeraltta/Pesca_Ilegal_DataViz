<script>
  export let numbers = [];
  export let años = [];
  
  // Cada pezcado en la escuela, representa un incremento en 6 en el numero de magnitud redondeado al multiplo de 6 mas cercano
  let fishCount = numbers.map(n => Math.round(n / 7));
</script>

<div class="isotype-bars-container">

  
  <div class="iso__container-iso">
    <div class="legend">
      <img src="./images/Fish.svg" alt="Pez" />
      <span>= 7 millones de peces</span>
    </div>

    {#each fishCount as count, index}
      <div class="row">
        <p class="number">{años[index]}</p>
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
    margin-top: 2cm;
  }

  .iso__container-iso {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative; 
  }

  .legend {
    position: absolute;
    top: 0.5rem;
    right: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.3rem 0.6rem;
    border-radius: 10px;
    backdrop-filter: blur(3px);
}

  .legend img {
    height: 50px;
  }
  .legend span {
    font-family: 'Roboto', sans-serif;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .number {
    color: white;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 9px;
    width: 50px;
  }

  .images-container {
    display: flex;
    flex-wrap: wrap;
  }

  .section-title {
    margin-bottom: 1cm;
  }
</style>
