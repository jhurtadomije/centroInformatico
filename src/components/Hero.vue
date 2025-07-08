<template>
  <section class="hero" :style="bgImg">
    <div class="hero-content">
      <h1>Soluciones Informáticas Integrales para Empresas</h1>
      <h2 class="subtitle">
        Mantenimiento Informático | Alquiler de Ordenadores y Servidores | Venta de Servidores y Nube Privada
      </h2>
      <p>
        En Centro Informático, ofrecemos soluciones completas para que tu empresa tenga una infraestructura tecnológica segura, eficiente y adaptada a tus necesidades.<br>
        Somos especialistas en la instalación de servidores, redes Wi-Fi empresariales y mucho más.
      </p>
      <div class="hero-btns">
        <router-link class="btn" to="/contacto">Contactar ahora</router-link>
        <router-link class="btn secundario" to="/servicios">Ver servicios</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImg from '../assets/img/fotoCI.webp'
// Puedes cambiar la ruta a donde esté tu imagen

const bgImg = {
  backgroundImage: `linear-gradient(120deg, rgba(39,88,163,0.67) 65%, rgba(77,182,172,0.52) 100%), url(${heroImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: var(--radius);
  margin-bottom: 2.5em;
}
.hero-content {
  text-align: center;
  padding: 1.2em 0.5em 1.5em 0.5em;
  max-width: 98vw;
  width: 100%;
  position: relative;
  z-index: 2;
}
.hero h1 {
  font-size: 1.6em;
  margin-bottom: 0.3em;
}
.subtitle {
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 1em;
  color: #e6f2ff;
}
.hero p {
  font-size: 1em;
  margin-bottom: 1.4em;
}
.hero-btns {
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: center;
}
@media (min-width: 700px) {
  .hero-content {
    padding: 2.2em 1em 2em 1em;
    max-width: 750px;
  }
  .hero h1 {
    font-size: 2.7em;
  }
  .subtitle {
    font-size: 1.15em;
  }
  .hero p {
    font-size: 1.18em;
  }
  .hero-btns {
    flex-direction: row;
    gap: 1.2em;
  }
}

</style>
