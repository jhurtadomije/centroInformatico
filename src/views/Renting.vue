<template>
  <section class="renting">
    <h1>Renting de ordenadores y servidores</h1>
    <p>
      Accede a tecnología avanzada sin grandes inversiones iniciales. Nuestro servicio de renting te permite disponer de ordenadores, servidores y equipamiento informático actualizado, pagando solo una cuota mensual 100% deducible.
    </p>
    <ul class="ventajas">
      <li>💰 Sin inversión inicial</li>
      <li>🔄 Renovación tecnológica garantizada</li>
      <li>🛠️ Incluye mantenimiento y soporte</li>
      <li>📝 Contratos flexibles y adaptados a tus necesidades</li>
    </ul>
    <div class="cta">
      <router-link class="btn" to="/contacto">Solicita información sobre renting</router-link>
    </div>
  </section>
</template>

<style scoped>
.renting {
  max-width: 700px;
  margin: 3em auto;
  background: #fff;
  padding: 2.5em 1.5em;
  border-radius: var(--radius);
  box-shadow: 0 2px 16px rgba(39,88,163,0.07);
}
.ventajas {
  margin: 2em 0 1em 0;
  list-style: none;
  padding: 0;
  font-size: 1.12em;
}
.ventajas li {
  margin-bottom: 0.7em;
}
.cta {
  margin-top: 2em;
  text-align: center;
}
</style>
