<template>
  <section class="faq">
    <h2>Preguntas frecuentes</h2>
    <div 
      v-for="(item, i) in faqs" 
      :key="i"
      class="faq-item"
      :class="{ open: openIndex === i }"
      @click="toggle(i)"
      tabindex="0"
      @keydown.enter.space="toggle(i)"
      :aria-expanded="openIndex === i"
      role="button"
    >
      <div class="faq-title">
        <span class="faq-icon">
          <svg v-if="openIndex === i" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="#2953a5" d="M6 15.5l6-6 6 6"/></svg>
          <svg v-else width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="#2953a5" d="M6 9.5l6 6 6-6"/></svg>
        </span>
        <h3>{{ item.q }}</h3>
      </div>
      <transition name="faq-anim">
        <div class="faq-content" v-show="openIndex === i">
          <p>{{ item.a }}</p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const openIndex = ref(null)
function toggle(i) { openIndex.value = openIndex.value === i ? null : i }
const faqs = [
  {
    q: '¿Qué incluye el servicio de mantenimiento informático para empresas?',
    a: 'Nuestro mantenimiento informático cubre la actualización de software, resolución de incidencias, optimización de equipos y soporte técnico remoto o presencial según la necesidad del cliente.'
  },
  {
    q: '¿Qué ventajas tiene el renting de ordenadores y servidores?',
    a: 'El renting te permite acceder a tecnología actualizada sin inversiones iniciales. Además, incluye mantenimiento y soporte, lo que reduce los costos operativos y garantiza que siempre trabajes con equipos en perfecto estado.'
  }
  // Puedes añadir más preguntas aquí
]
</script>

<style scoped>
.faq {
  background: linear-gradient(120deg, #e9f3fe 30%, #f6fafc 100%);
  padding: 2.3em 1em;
  border-radius: var(--radius);
  max-width: 42em;
  margin: 3em auto 2em;
  box-shadow: 0 2px 16px rgba(39,88,163,0.07);
  position: relative;
  z-index: 1;
}
.faq h2 {
  text-align: center;
  margin-bottom: 2em;
  color: #2953a5;
  font-size: 1.4em;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.faq-item {
  background: rgba(255,255,255,0.98);
  border-radius: 1em;
  margin-bottom: 1.2em;
  box-shadow: 0 1px 8px 0 #4db6ac11;
  cursor: pointer;
  transition: box-shadow 0.16s, background 0.18s;
  border: 1.5px solid #e3e8ef;
  padding: 0.9em 1.1em 0.3em 1.1em;
  outline: none;
  position: relative;
}
.faq-item.open {
  background: #e5f3fd;
  box-shadow: 0 2px 16px 0 #2953a522, 0 1px 12px 0 #4db6ac13;
  border-color: #4db6ac88;
}
.faq-title {
  display: flex;
  align-items: center;
  gap: 1em;
  user-select: none;
}
.faq-title h3 {
  font-size: 1.1em;
  color: #2953a5;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0;
}
.faq-icon {
  flex: none;
  transition: transform 0.22s;
  display: flex;
  align-items: center;
}
.faq-item.open .faq-icon { transform: rotate(180deg);}
.faq-content {
  padding: 0.7em 0 0.5em 2.1em;
  color: #234;
  font-size: 1em;
  line-height: 1.58;
  max-width: 40em;
  transition: color 0.12s;
}
.faq-anim-enter-active,
.faq-anim-leave-active {
  transition: max-height 0.33s cubic-bezier(.39,1.74,.51,.99), opacity 0.22s;
}
.faq-anim-enter-from,
.faq-anim-leave-to {
  max-height: 0;
  opacity: 0;
}
.faq-anim-enter-to,
.faq-anim-leave-from {
  max-height: 14em;
  opacity: 1;
}
@media (min-width: 700px) {
  .faq {
    padding: 3.2em 2em;
    max-width: 50em;
    margin: 4.5em auto 2.5em;
  }
  .faq h2 {
    font-size: 2.2em;
  }
  .faq-title h3 {
    font-size: 1.22em;
  }
  .faq-content {
    font-size: 1.13em;
  }
}
</style>
