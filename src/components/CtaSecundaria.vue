<template>
  <section class="cta-secundaria">
    <h2>Tecnología para Impulsar tu Negocio</h2>
    <p>
      Nuestro equipo está listo para ayudarte a optimizar tu infraestructura tecnológica.<br>
      Contáctanos hoy mismo para conocer cómo nuestras soluciones de mantenimiento informático, alquiler de equipos y nube privada pueden llevar tu empresa al siguiente nivel.
    </p>
    <router-link class="btn-cta" to="/contacto">Solicita asesoramiento</router-link>
  </section>
</template>

<style scoped>
.cta-secundaria {
  background: linear-gradient(115deg, #e3f3fe 0%, #d8f3ea 100%);
  border-radius: var(--radius);
  margin: 3em auto;
  padding: 2em 1em 2.7em 1em;
  text-align: center;
  max-width: 44rem;
  box-shadow: 0 2px 24px 0 rgba(39,88,163,0.07), 0 1px 6px 0 rgba(77,182,172,0.11);
  position: relative;
  z-index: 2;
  overflow: hidden;
  /* Glass effect */
  backdrop-filter: blur(1.4px) brightness(1.04);
}
.cta-secundaria:before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--radius);
  pointer-events: none;
  background: linear-gradient(100deg, rgba(39,88,163,0.055) 40%, rgba(77,182,172,0.11) 100%);
  z-index: 1;
}
.cta-secundaria h2 {
  margin-bottom: 0.7em;
  font-size: 1.42em;
  font-weight: 700;
  color: #21457a;
  text-shadow: 0 1px 8px #4db6ac22;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 2;
}
.cta-secundaria p {
  font-size: 1.12em;
  margin-bottom: 2em;
  max-width: 35em;
  margin-left: auto;
  margin-right: auto;
  color: #234;
  line-height: 1.55;
  position: relative;
  z-index: 2;
}
.btn-cta {
  display: inline-block;
  background: linear-gradient(90deg, #2953a5 40%, #4db6ac 100%);
  color: #fff;
  font-size: 1.1em;
  font-weight: 600;
  padding: 0.9em 2.4em;
  border: none;
  border-radius: 1.3em;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(39, 88, 163, 0.15);
  transition: background 0.18s, box-shadow 0.18s, transform 0.13s;
  position: relative;
  z-index: 2;
  margin-top: 0.3em;
  letter-spacing: 0.01em;
}
.btn-cta:hover,
.btn-cta:focus {
  background: linear-gradient(90deg, #4db6ac 25%, #2953a5 100%);
  box-shadow: 0 4px 24px 0 rgba(39, 88, 163, 0.19);
  transform: translateY(-2px) scale(1.045);
}

@media (min-width: 700px) {
  .cta-secundaria {
    padding: 3em 2.1em 3.3em 2.1em;
    margin: 5em auto 4em auto;
  }
  .cta-secundaria h2 {
    font-size: 2.08em;
  }
  .btn-cta {
    font-size: 1.18em;
    padding: 1.1em 3.1em;
    border-radius: 2.1em;
  }
}
</style>
