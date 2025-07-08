<template>
  <section class="nosotros">
    <h1>Quiénes somos</h1>
    <p>
      En Centro Informático somos un equipo de profesionales apasionados por la tecnología y el servicio al cliente. Más de 10 años de experiencia nos avalan como especialistas en soluciones informáticas para empresas y autónomos.
    </p>
    <div class="equipo">
      <div class="miembro" v-for="persona in equipo" :key="persona.nombre">
        <div class="foto"><!-- Puedes poner aquí una imagen real si tienes --></div>
        <h3>{{ persona.nombre }}</h3>
        <p>{{ persona.cargo }}</p>
        <span>{{ persona.descripcion }}</span>
      </div>
    </div>
    <div class="valores">
      <h3>Nuestros valores:</h3>
      <ul>
        <li>✔️ Compromiso con el cliente</li>
        <li>✔️ Transparencia y honestidad</li>
        <li>✔️ Innovación y actualización constante</li>
        <li>✔️ Soluciones personalizadas</li>
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
  // Añade más miembros si tienes
]
</script>

<style scoped>
.nosotros {
  max-width: 800px;
  margin: 3em auto;
  background: #fff;
  padding: 2.5em 1.5em;
  border-radius: var(--radius);
  box-shadow: 0 2px 16px rgba(39,88,163,0.07);
}
.equipo {
  display: flex;
  gap: 2em;
  margin: 2.5em 0;
  flex-wrap: wrap;
  justify-content: center;
}
.miembro {
  background: #f5f7fa;
  border-radius: var(--radius);
  box-shadow: 0 2px 10px rgba(39,88,163,0.04);
  padding: 1.3em 1.5em;
  text-align: center;
  min-width: 170px;
  max-width: 210px;
}
.miembro .foto {
  background: #e1e9f7;
  border-radius: 50%;
  width: 68px;
  height: 68px;
  margin: 0 auto 1em;
}
.valores {
  margin-top: 2.5em;
}
.valores ul {
  padding-left: 1.5em;
  margin: 0.7em 0 0 0;
}
</style>
