<script>
  // Props
  export let numbers = [];
  export let serieB = [];
  export let años = [];
  
  // Transformación de datos:
  // Calculamos la parte entera y decimal para cada valor
  let fishDataA = numbers.map(n => {
    const value = n / 10;
    return {
      full: Math.floor(value),
      partial: value % 1
    };
  });
  
  let fishDataB = serieB.map(n => {
    const value = n / 10;
    return {
      full: Math.floor(value),
      partial: value % 1
    };
  });
</script>

<div class="contenedorBarrasIsotipo">
  <div class="contenedorIsotipos">
    <!-- Leyenda -->
    <div class="leyenda">
      <div class="leyenda-item">
        <img src="./images/Fish.svg" alt="Pez" />
        <span>= 10 millones de peces (Serie A)</span>
      </div>
      <div class="leyenda-item">
        <img src="./images/Fish2.svg" alt="Pez" />
        <span>= 10 millones de peces (Serie B)</span>
      </div>
    </div>

    <!-- Filas de peces -->
    {#each fishDataA as dataA, idx}
  <div class="fila doble-fila">
    <p class="etiquetaAno">{años[idx]}</p>
    <div class="imagenes-doble">
      <!-- primera fila de peces -->
      <div class="contenedorImagenes-wrapper">
        <div class="contenedorImagenes">
          {#each Array(dataA.full) as _, i}
            <img class="imagenPez" src="./images/Fish.svg" alt="Pez" />
          {/each}
          {#if dataA.partial > 0}
            <div class="pez-parcial">
              <div class="pez-parcial-inner" style="width: {dataA.partial * 100}%">
                <img class="imagenPez" src="./images/Fish.svg" alt="Pez parcial" />
              </div>
            </div>
          {/if}
        </div>
        <div class="valor-numerico">{numbers[idx]}</div>
      </div>
      <!-- segunda fila de peces -->
      <div class="contenedorImagenes-wrapper">
        <div class="contenedorImagenes">
          {#each Array(fishDataB[idx].full) as _, i}
            <img class="imagenPez" src="./images/Fish2.svg" alt="Pez" />
          {/each}
          {#if fishDataB[idx].partial > 0}
            <div class="pez-parcial">
              <div class="pez-parcial-inner" style="width: {fishDataB[idx].partial * 100}%">
                <img class="imagenPez" src="./images/Fish2.svg" alt="Pez parcial" />
              </div>
            </div>
          {/if}
        </div>
        <div class="valor-numerico">{serieB[idx]}</div>
      </div>
    </div>
  </div>
{/each}
  </div>
</div>

<style>
  /* Contenedores principales */
  .doble-fila {
  display: flex;
  align-items: center;   /* centra la etiqueta Año con el bloque de dos filas */
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.imagenes-doble {
  display: flex;
  flex-direction: column; /* apila las dos filas verticalmente */
  gap: 0.5rem;            /* espacio entre la fila 1 y la fila 2 */
}

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

  .contenedorImagenes-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .contenedorImagenes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .valor-numerico {
    color: rgb(227, 224, 224);
    font-size: 1.2rem;
    font-weight: bold;
    min-width: 40px;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inria Sans', sans-serif;
  }

  /* Pez parcial */
  .pez-parcial {
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
  }

  .pez-parcial-inner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
  }

  .pez-parcial-inner .imagenPez {
    position: relative;
  }

  /* Leyenda */
  .leyenda {
  position: absolute;
  top: 0.5rem;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  font-size: 1.2rem;
  padding: 0.3rem 0.6rem;
  border-radius: 10px;
  background: rgb(68, 68, 68);
  border: 1px solid #A69CE5;
}

.leyenda-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

    .valor-numerico {
      font-size: 0.9rem;
      padding: 0.2rem 0.4rem;
    }

    .pez-parcial {
      width: 18px;
      height: 18px;
    }
  }
  .leyenda img {
    height: 50px;
  }

  .leyenda span {
    font-family: 'Inria Sans', sans-serif;
    font-size: 1.2rem;
  }
</style>