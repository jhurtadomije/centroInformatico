<template>
  <section class="hero" :style="bgImg">
    <div class="hero-overlay"></div>
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
        <router-link class="btn principal" to="/contacto">Contactar ahora</router-link>
        <router-link class="btn secundario" to="/servicios">Ver servicios</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImg from '../assets/img/fotoCI.webp'

const bgImg = {
  backgroundImage: `linear-gradient(120deg, rgba(34,57,133,0.78) 65%, rgba(77,182,172,0.45) 100%), url(${heroImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: var(--radius);
  margin-bottom: 2.5em;
  overflow: hidden;
  box-shadow: 0 0.13rem 0.5rem rgba(39,88,163,0.14);
}
.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(120deg, rgba(34,57,133,0.68) 50%, rgba(77,182,172,0.35) 100%);
  backdrop-filter: blur(2.5px) brightness(1.01);
  animation: heroFade 8s linear infinite alternate;
}
@keyframes heroFade {
  from { background-position: 0% 50%; }
  to   { background-position: 100% 50%; }
}
.hero-content {
  text-align: center;
  padding: 1.5em 0.7em 2em 0.7em;
  max-width: 95vw;
  width: 100%;
  position: relative;
  z-index: 2;
  background: rgba(28, 42, 70, 0.44);
  border-radius: 1.2rem;
  box-shadow: 0 2px 18px 0 rgba(39, 88, 163, 0.11);
  margin: 1.2em auto 0 auto;
  backdrop-filter: blur(0.5px) brightness(1.06);
}
.hero h1 {
  font-size: 1.8em;
  margin-bottom: 0.4em;
  font-weight: 700;
  letter-spacing: -0.03em;
  text-shadow: 0 2px 14px rgba(0,0,0,0.17);
  line-height: 1.17;
}
.subtitle {
  font-size: 1.08em;
  font-weight: 500;
  margin-bottom: 1.1em;
  color: #b7eaf8;
  letter-spacing: -0.01em;
  text-shadow: 0 1px 8px rgba(44,120,166,0.13);
}
.hero p {
  font-size: 1.02em;
  margin-bottom: 1.6em;
  color: #e2f6fa;
  text-shadow: 0 1px 6px rgba(34,89,133,0.10);
}
.hero-btns {
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
}
.btn {
  font-size: 1.04em;
  font-weight: 600;
  padding: 0.8em 2.1em;
  border-radius: 1.3em;
  border: none;
  background: linear-gradient(90deg, #4db6ac 40%, #2953a5 100%);
  color: #fff;
  box-shadow: 0 2px 8px 0 rgba(45,180,163,0.11);
  transition: background 0.17s, box-shadow 0.16s, transform 0.14s;
  cursor: pointer;
  letter-spacing: 0.01em;
  margin-bottom: 0;
  text-decoration: none;
  outline: none;
}
.btn:hover,
.btn:focus {
  background: linear-gradient(90deg, #2953a5 40%, #4db6ac 100%);
  transform: translateY(-2px) scale(1.045);
  box-shadow: 0 4px 18px 0 rgba(45,180,163,0.17);
}
.btn.secundario {
  background: linear-gradient(90deg, #344160 35%, #4db6ac 100%);
  color: #f2ffff;
}
.btn.secundario:hover,
.btn.secundario:focus {
  background: linear-gradient(90deg, #4db6ac 25%, #344160 100%);
}
@media (min-width: 700px) {
  .hero {
    min-height: 66vh;
  }
  .hero-content {
    padding: 2.7em 1.3em 2.5em 1.3em;
    max-width: 44rem;
    border-radius: 2.1rem;
    margin-top: 2em;
  }
  .hero h1 {
    font-size: 2.7em;
  }
  .subtitle {
    font-size: 1.18em;
  }
  .hero p {
    font-size: 1.19em;
  }
  .hero-btns {
    flex-direction: row;
    gap: 1.6em;
  }
}
</style>
