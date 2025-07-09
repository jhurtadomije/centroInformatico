<template>
  <section class="servicios">
    <h2>Nuestros servicios principales</h2>
    <div class="cards">
      <div class="card">
        <span class="icon glass">🛠️</span>
        <h3>Mantenimiento Informático Profesional</h3>
        <p>
          Mantén tus equipos y sistemas operativos funcionando sin problemas.
          Ofrecemos soporte técnico personalizado, actualizaciones constantes y prevención de fallos para evitar paradas inesperadas que afecten la productividad de tu empresa.
        </p>
      </div>
      <div class="card">
        <span class="icon glass">💻</span>
        <h3>Renting de Ordenadores y Servidores</h3>
        <p>
          Alquila el equipamiento más avanzado sin grandes inversiones iniciales.
          Ofrecemos alquiler flexible de equipos informáticos, incluyendo ordenadores y servidores, para adaptarse a las necesidades tecnológicas de tu negocio en crecimiento.
        </p>
      </div>
      <div class="card">
        <span class="icon glass">☁️</span>
        <h3>Venta de Servidores y Copias de Seguridad en Nube Privada</h3>
        <p>
          Protege tu información crítica con soluciones de servidores robustos y almacenamiento en nube privada.
          Asegura la continuidad de tu negocio con nuestras copias de seguridad automáticas y servicios de recuperación de datos.
        </p>
      </div>
      <div class="card">
        <span class="icon glass">🌐</span>
        <h3>Instalación de Servidores y Redes Wi-Fi Empresariales</h3>
        <p>
          Diseñamos e instalamos servidores de alto rendimiento y redes Wi-Fi de última generación para empresas.
          Mejora la conectividad y el rendimiento de tus operaciones con una red segura y estable.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.servicios {
  text-align: center;
  margin-bottom: 3em;
  margin-top: 3em;
}
.servicios h2 {
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #2853a7;
  margin-bottom: 1.2em;
  text-shadow: 0 2px 8px #4db6ac18;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  align-items: center;
  margin-top: 2em;
}

.card {
  background: linear-gradient(113deg, rgba(233,247,255,0.98) 60%, rgba(214,255,242,0.88) 100%);
  padding: 2em 1.2em 2.3em 1.2em;
  border-radius: var(--radius);
  box-shadow: 0 4px 26px rgba(77,182,172,0.08), 0 1px 12px #2853a717;
  width: 96vw;
  max-width: 23em;
  min-height: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: box-shadow 0.21s, transform 0.18s;
  border: 1.5px solid #4db6ac22;
  overflow: hidden;
  z-index: 1;
}
.card:hover, .card:focus-within {
  box-shadow: 0 10px 38px #4db6ac36, 0 4px 16px #2953a511;
  transform: translateY(-4px) scale(1.03);
  border-color: #4db6ac55;
}

.icon {
  font-size: 2.7em;
  margin-bottom: 0.9em;
  background: linear-gradient(120deg, #4db6ac33 40%, #2953a522 100%);
  border-radius: 1.8em;
  box-shadow: 0 3px 20px #4db6ac22;
  padding: 0.4em 0.45em;
  color: #2e617a;
  transition: box-shadow 0.19s, transform 0.19s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card:hover .icon,
.card:focus-within .icon {
  box-shadow: 0 8px 28px #4db6ac33, 0 1px 10px #2853a726;
  transform: scale(1.15) rotate(-7deg);
  background: linear-gradient(120deg, #4db6ac77 20%, #2953a544 100%);
}

.card h3 {
  margin: 0.3em 0 1.1em 0;
  font-size: 1.07em;
  font-weight: 600;
  color: #2853a7;
  letter-spacing: -0.01em;
}

.card p {
  flex: 1;
  font-size: 1em;
  color: #3a4857;
  line-height: 1.6;
}

@media (min-width: 700px) {
  .servicios h2 {
    font-size: 2.2em;
  }
  .cards {
    flex-direction: row;
    gap: 2.1em;
    justify-content: center;
    align-items: stretch;
  }
  .card {
    width: 17.5em;
    max-width: 21em;
    min-height: 21em;
    padding: 2.4em 1.3em 2.8em 1.3em;
  }
}
</style>
