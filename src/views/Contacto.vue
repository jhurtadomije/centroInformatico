<template>
  <section class="contacto">
    <h1>Contacto</h1>
    <p>
      ¿Tienes dudas o necesitas asesoramiento? Ponte en contacto con nosotros y responderemos lo antes posible.
    </p>
    <form @submit.prevent="enviar">
      <input type="text" v-model="nombre" placeholder="Nombre" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="tel" v-model="telefono" placeholder="Teléfono (opcional)" />
      <textarea v-model="mensaje" placeholder="Mensaje" required></textarea>
      <button class="btn" type="submit">Enviar mensaje</button>
    </form>
    <div v-if="enviado" class="enviado">¡Mensaje enviado! Nos pondremos en contacto contigo pronto.</div>
    <div class="datos-contacto">
      <h3>Datos de contacto</h3>
      <div>📍 Marbella, Málaga</div>
      <div>📞 <a href="tel:952123456">952 12 34 56</a></div>
      <div>✉️ <a href="mailto:info@centroinformatico.es">info@centroinformatico.es</a></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const nombre = ref('')
const email = ref('')
const telefono = ref('')
const mensaje = ref('')
const enviado = ref(false)

function enviar() {
  nombre.value = ''
  email.value = ''
  telefono.value = ''
  mensaje.value = ''
  enviado.value = true
  setTimeout(() => enviado.value = false, 3500)
}
</script>

<style scoped>
.contacto {
  max-width: 560px;
  margin: 3em auto;
  background: #fff;
  padding: 2.5em 1.5em;
  border-radius: var(--radius);
  box-shadow: 0 2px 16px rgba(39,88,163,0.07);
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 2em;
}
input, textarea {
  font-size: 1em;
  padding: 0.8em;
  border: 1px solid #bcd1ea;
  border-radius: var(--radius);
  outline: none;
  transition: border 0.2s;
}
input:focus, textarea:focus {
  border-color: var(--color-primary);
}
textarea {
  resize: vertical;
  min-height: 85px;
}
.datos-contacto {
  margin-top: 2.5em;
  text-align: left;
  color: #2b2b2b;
}
.datos-contacto h3 {
  margin-bottom: 0.7em;
  font-size: 1.13em;
  color: var(--color-primary);
}
.enviado {
  margin-top: 1.3em;
  color: var(--color-primary);
  font-weight: bold;
}
</style>
