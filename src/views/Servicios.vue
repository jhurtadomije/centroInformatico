<template>
  <section class="servicios">
    <h1>Servicios informáticos para empresas</h1>
    <p class="intro">
      Soluciones a medida para que tu empresa tenga siempre una infraestructura tecnológica segura y eficiente.
    </p>
    <div class="lista-servicios">
      <div class="servicio">
        <span class="icon glass">🛠️</span>
        <h3>Mantenimiento informático profesional</h3>
        <p>
          Soporte técnico personalizado, actualizaciones, prevención de fallos y asistencia remota o presencial.
        </p>
      </div>
      <div class="servicio">
        <span class="icon glass">💻</span>
        <h3>Renting de equipos</h3>
        <p>
          Alquiler flexible de ordenadores y servidores, adaptado a las necesidades de tu negocio.
        </p>
      </div>
      <div class="servicio">
        <span class="icon glass">☁️</span>
        <h3>Copias de seguridad y nube privada</h3>
        <p>
          Protege tus datos con almacenamiento en nube privada y copias automáticas de seguridad.
        </p>
      </div>
      <div class="servicio">
        <span class="icon glass">🌐</span>
        <h3>Instalación de servidores y redes Wi-Fi</h3>
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
  max-width: 36em;
  margin: 3.2em auto 4.2em auto;
  background: linear-gradient(113deg, #f7fbff 85%, #e4fbf4 100%);
  padding: 2.7em 1.2em 2.4em 1.2em;
  border-radius: var(--radius);
  box-shadow: 0 3px 20px #4db6ac12;
  text-align: center;
  position: relative;
  z-index: 2;
}
.servicios h1 {
  font-size: 1.32em;
  font-weight: 700;
  color: #2953a5;
  margin-bottom: 0.45em;
}
.intro {
  color: #355172;
  font-size: 1.07em;
  margin-bottom: 2em;
  line-height: 1.6;
}
.lista-servicios {
  display: flex;
  flex-direction: column;
  gap: 1.7em;
  margin: 2.5em 0 0 0;
  align-items: center;
}
.servicio {
  background: linear-gradient(120deg, #e9f7ff 70%, #d4f9ed 100%);
  border-radius: var(--radius);
  box-shadow: 0 1px 10px #4db6ac0e;
  padding: 2.2em 1.2em 2.1em 1.2em;
  text-align: center;
  min-width: 10.5em;
  max-width: 19em;
  position: relative;
  transition: box-shadow 0.18s, transform 0.15s;
  border: 1.2px solid #4db6ac14;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.servicio:hover {
  box-shadow: 0 6px 26px #4db6ac24, 0 1px 12px #2953a511;
  transform: translateY(-4px) scale(1.035);
  border-color: #4db6ac33;
}
.icon {
  font-size: 2.3em;
  margin-bottom: 0.85em;
  background: linear-gradient(120deg, #4db6ac33 40%, #2953a522 100%);
  border-radius: 2em;
  box-shadow: 0 3px 20px #4db6ac22;
  padding: 0.4em 0.45em;
  color: #2e617a;
  transition: box-shadow 0.18s, transform 0.18s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.servicio:hover .icon {
  box-shadow: 0 8px 28px #4db6ac33, 0 1px 10px #2853a726;
  transform: scale(1.15) rotate(-7deg);
  background: linear-gradient(120deg, #4db6ac77 20%, #2953a544 100%);
}
.servicio h3 {
  margin-top: 0.2em;
  margin-bottom: 0.7em;
  font-size: 1.07em;
  font-weight: 600;
  color: #2853a7;
  letter-spacing: -0.01em;
}
.servicio p {
  color: #3a4857;
  font-size: 0.99em;
  line-height: 1.55;
}

.cta {
  margin-top: 2.3em;
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

/* Responsive: 2 columnas en desktop */
@media (min-width: 700px) {
  .servicios {
    max-width: 39em;
    padding: 3.3em 2em 3em 2em;
  }
  .lista-servicios {
    flex-direction: row;
    gap: 2.5em;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
  }
  .servicio {
    min-width: 15em;
    max-width: 17em;
    padding: 2em 1.5em 2.2em 1.5em;
  }
}
</style>
