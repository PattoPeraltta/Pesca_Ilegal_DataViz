<script>
  // Props
  export let numbers = [];
  export let años = [];
  
  // Transformación de datos:
  // Cada pez en la visualización representa un incremento de 7 millones de peces
  let contadorPeces = numbers.map(n => Math.round(n / 10));
</script>

<div class="contenedorBarrasIsotipo">
  <div class="contenedorIsotipos">
    <!-- Leyenda -->
    <div class="leyenda">
      <img src="./images/Fish.svg" alt="Pez" />
      <span>= 10 millones de peces</span>
    </div>

    <!-- Filas de peces -->
    {#each contadorPeces as cantidad, indice}
      <div class="fila">
        <p class="etiquetaAno">{años[indice]}</p>
        <div class="contenedorImagenes">
          {#each Array(cantidad) as _, i}
            <img
              class="imagenPez"
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
  /* Contenedores principales */
  .contenedorBarrasIsotipo {
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 2cm;
  }

  .contenedorIsotipos {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative; 
  }

  /* Elementos de visualización */
  .imagenPez {
    height: 50px; 
    padding: 0.5px;
  }

  .fila {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .etiquetaAno {
    color: white;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .contenedorImagenes {
    display: flex;
    flex-wrap: wrap;
  }

  /* Leyenda */
  .leyenda {
    position: absolute;
    top: 0.5rem;
    right: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    font-size: 1.2rem;
    padding: 0.3rem 0.6rem;
    border-radius: 10px;
    background: rgb(68, 68, 68);
    border: 1px solid #A69CE5;
  }

  .leyenda img {
    height: 50px;
  }

  .leyenda span {
    font-family: 'Roboto', sans-serif;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .leyenda {
      top: -4.5rem; 
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      width: 250px;
    }

    .leyenda img {
      height: 30px;
    }

    .leyenda span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.9rem;
    }

    .imagenPez {
      height: 18px;
      padding: 0px;
    }

    .contenedorIsotipos {
      gap: 0rem; 
    }

    .etiquetaAno {
      font-size: 1rem; 
    }
  }
</style>