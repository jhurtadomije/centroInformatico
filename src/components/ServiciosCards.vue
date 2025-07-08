<template>
  <section class="servicios">
    <h2>Nuestros servicios principales</h2>
    <div class="cards">
      <div class="card">
        <span class="icon">🛠️</span>
        <h3>Mantenimiento Informático Profesional</h3>
        <p>
          Mantén tus equipos y sistemas operativos funcionando sin problemas.
          Ofrecemos soporte técnico personalizado, actualizaciones constantes y prevención de fallos para evitar paradas inesperadas que afecten la productividad de tu empresa.
        </p>
      </div>
      <div class="card">
        <span class="icon">💻</span>
        <h3>Renting de Ordenadores y Servidores</h3>
        <p>
          Alquila el equipamiento más avanzado sin grandes inversiones iniciales.
          Ofrecemos alquiler flexible de equipos informáticos, incluyendo ordenadores y servidores, para adaptarse a las necesidades tecnológicas de tu negocio en crecimiento.
        </p>
      </div>
      <div class="card">
        <span class="icon">☁️</span>
        <h3>Venta de Servidores y Copias de Seguridad en Nube Privada</h3>
        <p>
          Protege tu información crítica con soluciones de servidores robustos y almacenamiento en nube privada.
          Asegura la continuidad de tu negocio con nuestras copias de seguridad automáticas y servicios de recuperación de datos.
        </p>
      </div>
      <div class="card">
        <span class="icon">🌐</span>
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
}
.cards {
  display: flex;
  flex-direction: column;
  gap: 1.4em;
  align-items: center;
  margin-top: 2em;
}
.card {
  background: #fff;
  padding: 1.4em 1em;
  border-radius: var(--radius);
  box-shadow: 0 2px 16px rgba(39,88,163,0.07);
  width: 94vw;
  max-width: 370px;
  min-height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow var(--transition);
}
.card:hover {
  box-shadow: 0 8px 32px rgba(39,88,163,0.13);
}
.icon {
  font-size: 2.2em;
  margin-bottom: 0.7em;
}
.card h3 {
  margin: 0.3em 0 0.8em 0;
}
.card p {
  flex: 1;
  font-size: 1em;
  color: #444;
}
@media (min-width: 700px) {
  .cards {
    flex-direction: row;
    gap: 2em;
    justify-content: center;
    align-items: stretch;
  }
  .card {
    width: 260px;
    min-height: 340px;
  }
}
</style>
