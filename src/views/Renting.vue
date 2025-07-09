<template>
  <section class="renting">
    <h1>Renting de ordenadores y servidores</h1>
    <p class="intro">
      Accede a tecnología avanzada sin grandes inversiones iniciales. Nuestro servicio de renting te permite disponer de ordenadores, servidores y equipamiento informático actualizado, pagando solo una cuota mensual 100% deducible.
    </p>
    <ul class="ventajas">
      <li>
        <span class="v-icon">
          <svg width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="#4db6ac" d="M3 12l2-2 5 5L19 6l2 2-11 11z"/></svg>
        </span>
        Sin inversión inicial
      </li>
      <li>
        <span class="v-icon">
          <svg width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="#4db6ac" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1-17h-2v6h6v-2h-4z"/></svg>
        </span>
        Renovación tecnológica garantizada
      </li>
      <li>
        <span class="v-icon">
          <svg width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="#4db6ac" d="M21 16.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.5"/><circle cx="12" cy="11" r="6" fill="none" stroke="#4db6ac" stroke-width="2"/><path fill="#4db6ac" d="M8 11h8v2H8z"/></svg>
        </span>
        Incluye mantenimiento y soporte
      </li>
      <li>
        <span class="v-icon">
          <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#4db6ac" d="M17 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H7V5h10v14z"/><path fill="#4db6ac" d="M9 7h6v2H9z"/></svg>
        </span>
        Contratos flexibles y adaptados a tus necesidades
      </li>
    </ul>
    <div class="cta">
      <router-link class="btn" to="/contacto">Solicita información sobre renting</router-link>
    </div>
  </section>
</template>

<style scoped>
.renting {
  max-width: 32em;
  margin: 3.2em auto 4em auto;
  background: linear-gradient(120deg, #f7fbff 80%, #e4fbf4 100%);
  padding: 2.7em 1.2em 2.4em 1.2em;
  border-radius: var(--radius);
  box-shadow: 0 3px 20px #4db6ac13;
  text-align: center;
  position: relative;
  z-index: 2;
}
.renting h1 {
  font-size: 1.37em;
  font-weight: 700;
  color: #2953a5;
  margin-bottom: 0.5em;
}
.intro {
  color: #355172;
  font-size: 1.07em;
  margin-bottom: 2.1em;
  line-height: 1.6;
}
.ventajas {
  margin: 2em 0 1em 0;
  list-style: none;
  padding: 0;
  font-size: 1.13em;
  color: #2953a5;
  display: flex;
  flex-direction: column;
  gap: 1.1em;
  align-items: flex-start;
}
.ventajas li {
  display: flex;
  align-items: center;
  gap: 0.8em;
  background: #fafdff;
  box-shadow: 0 1px 5px #4db6ac0a;
  border-radius: 1.3em;
  padding: 0.7em 1.1em 0.7em 0.8em;
  font-size: 1.01em;
  font-weight: 500;
  color: #2953a5;
  margin: 0;
}
.v-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #e1f6f1;
  border-radius: 50%;
  width: 2.1em;
  height: 2.1em;
  min-width: 2.1em;
  box-shadow: 0 0.7px 6px #4db6ac11;
  margin-right: 0.2em;
}

.cta {
  margin-top: 2.4em;
  text-align: center;
}

.btn {
  display: inline-block;
  background: linear-gradient(90deg, #2953a5 40%, #4db6ac 100%);
  color: #fff;
  font-size: 1.09em;
  font-weight: 600;
  padding: 0.75em 2.1em;
  border: none;
  border-radius: 1.3em;
  cursor: pointer;
  box-shadow: 0 2px 8px #2953a516;
  transition: background 0.17s, box-shadow 0.13s, transform 0.13s;
  text-decoration: none;
}
.btn:hover,
.btn:focus {
  background: linear-gradient(90deg, #4db6ac 20%, #2953a5 100%);
  box-shadow: 0 5px 24px #2953a524;
  transform: translateY(-2px) scale(1.04);
}

@media (min-width: 700px) {
  .renting {
    max-width: 35em;
    padding: 3.3em 2em 3em 2em;
  }
  .ventajas {
    font-size: 1.16em;
    align-items: center;
    gap: 1.3em;
  }
  .ventajas li {
    font-size: 1.08em;
    padding: 0.9em 1.7em 0.9em 1.3em;
  }
}
</style>
