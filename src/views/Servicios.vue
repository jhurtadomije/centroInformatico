<template>
  <section class="servicios">
    <h1>Servicios informáticos para empresas</h1>
    <p>
      Soluciones a medida para que tu empresa tenga siempre una infraestructura tecnológica segura y eficiente.
    </p>
    <div class="lista-servicios">
      <div class="servicio">
        <h3>🛠️ Mantenimiento informático profesional</h3>
        <p>
          Soporte técnico personalizado, actualizaciones, prevención de fallos y asistencia remota o presencial.
        </p>
      </div>
      <div class="servicio">
        <h3>💻 Renting de equipos</h3>
        <p>
          Alquiler flexible de ordenadores y servidores, adaptado a las necesidades de tu negocio.
        </p>
      </div>
      <div class="servicio">
        <h3>☁️ Copias de seguridad y nube privada</h3>
        <p>
          Protege tus datos con almacenamiento en nube privada y copias automáticas de seguridad.
        </p>
      </div>
      <div class="servicio">
        <h3>🌐 Instalación de servidores y redes Wi-Fi</h3>
        <p>
          Diseño e instalación de redes empresariales y servidores de alto rendimiento.
        </p>
      </div>
    </div>
    <div class="cta">
      <router-link class="btn" to="/contacto">Solicita presupuesto</router-link>
    </div>
  </section>
</template>

<style scoped>
.servicios {
  max-width: 800px;
  margin: 3em auto;
  background: #fff;
  padding: 2.5em 1.5em;
  border-radius: var(--radius);
  box-shadow: 0 2px 16px rgba(39,88,163,0.07);
}
.lista-servicios {
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  margin: 2.5em 0;
  justify-content: center;
}
.servicio {
  background: #f5f7fa;
  border-radius: var(--radius);
  box-shadow: 0 2px 10px rgba(39,88,163,0.04);
  padding: 1.4em 1.7em;
  text-align: left;
  min-width: 220px;
  max-width: 330px;
  margin-bottom: 1em;
}
.servicio h3 {
  margin-top: 0;
}
.cta {
  margin-top: 2.2em;
  text-align: center;
}
</style>
