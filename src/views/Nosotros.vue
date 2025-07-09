<template>
  <section class="nosotros">
    <h1>Quiénes somos</h1>
    <p class="intro">
      En Centro Informático somos un equipo de profesionales apasionados por la tecnología y el servicio al cliente.<br>
      Más de 10 años de experiencia nos avalan como especialistas en soluciones informáticas para empresas y autónomos.
    </p>
    <div class="equipo">
      <transition-group name="aparece" tag="div" class="equipo-wrap">
        <div class="miembro" v-for="persona in equipo" :key="persona.nombre">
          <div class="foto">
            <!-- Si tienes foto, pon <img :src="persona.foto" ... /> aquí -->
            <svg width="42" height="42" viewBox="0 0 24 24" fill="#bcd1ea"><circle cx="12" cy="8.5" r="4.2"/><ellipse cx="12" cy="17" rx="7" ry="4"/></svg>
          </div>
          <h3>{{ persona.nombre }}</h3>
          <p class="cargo">{{ persona.cargo }}</p>
          <span class="desc">{{ persona.descripcion }}</span>
        </div>
      </transition-group>
    </div>
    <div class="valores">
      <h3>Nuestros valores</h3>
      <ul>
        <li><span class="valor-icon">✔️</span> Compromiso con el cliente</li>
        <li><span class="valor-icon">✔️</span> Transparencia y honestidad</li>
        <li><span class="valor-icon">✔️</span> Innovación y actualización constante</li>
        <li><span class="valor-icon">✔️</span> Soluciones personalizadas</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const equipo = [
  {
    nombre: 'Juan García',
    cargo: 'Director Técnico',
    descripcion: 'Experto en redes, servidores y soluciones cloud.',
  },
  {
    nombre: 'Ana Pérez',
    cargo: 'Soporte IT',
    descripcion: 'Especialista en atención al cliente y mantenimiento informático.',
  }
  // Puedes añadir más miembros
]
</script>

<style scoped>
.nosotros {
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
.nosotros h1 {
  font-size: 1.42em;
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
.equipo {
  margin: 2.4em 0 0.2em 0;
}
.equipo-wrap {
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
.miembro {
  background: linear-gradient(120deg, #e9f7ff 70%, #d4f9ed 100%);
  border-radius: var(--radius);
  box-shadow: 0 1px 10px #4db6ac0e;
  padding: 1.3em 1.2em 1.3em 1.2em;
  text-align: center;
  min-width: 10.5em;
  max-width: 15em;
  margin-bottom: 1.7em;
  position: relative;
  transition: box-shadow 0.17s, transform 0.18s;
  border: 1.2px solid #4db6ac14;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.miembro:hover {
  box-shadow: 0 6px 26px #4db6ac2d, 0 1px 12px #2953a517;
  transform: translateY(-4px) scale(1.05);
  border-color: #4db6ac55;
}
.foto {
  background: linear-gradient(113deg, #2953a511 45%, #4db6ac16 100%);
  border-radius: 50%;
  width: 4.5em;
  height: 4.5em;
  margin: 0 auto 1em auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 1px 7px #4db6ac11;
}
.miembro .foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.cargo {
  color: #4db6ac;
  font-weight: 600;
  font-size: 1em;
  margin: 0.4em 0 0.5em 0;
}
.desc {
  color: #3a4857;
  font-size: 0.98em;
  margin-top: 0.2em;
  display: block;
}

.valores {
  margin-top: 2.6em;
  background: #fafdffcc;
  border-radius: var(--radius);
  box-shadow: 0 1px 7px #4db6ac0a;
  padding: 1.2em 1em 1.1em 1em;
  text-align: left;
  max-width: 28em;
  margin-left: auto;
  margin-right: auto;
}
.valores h3 {
  color: #2953a5;
  font-size: 1.09em;
  font-weight: 600;
  margin-bottom: 0.65em;
}
.valores ul {
  padding-left: 0;
  margin: 0.7em 0 0 0;
  list-style: none;
}
.valores li {
  margin-bottom: 0.7em;
  color: #2953a5;
  font-size: 1.05em;
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.valor-icon {
  font-size: 1.25em;
  color: #2cb07b;
}

/* Animación de aparición */
.aparece-enter-active {
  transition: all 0.41s cubic-bezier(.4,1.4,.6,1);
}
.aparece-leave-active {
  transition: all 0.24s cubic-bezier(.9,.3,.8,1);
  opacity: 0;
  transform: scale(0.8) translateY(16px);
}
.aparece-enter-from {
  opacity: 0;
  transform: scale(0.85) translateY(24px);
}
.aparece-enter-to {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Responsive */
@media (min-width: 700px) {
  .nosotros {
    max-width: 39em;
    padding: 3.3em 2em 3em 2em;
  }
  .equipo-wrap {
    gap: 2.8em;
  }
  .miembro {
    min-width: 13em;
    max-width: 15.5em;
    padding: 1.7em 1.3em 1.7em 1.3em;
  }
  .valores {
    padding: 1.7em 2em 1.5em 2em;
    margin-top: 3.3em;
    max-width: 31em;
  }
}
</style>
