<template>
  <section class="contacto">
    <h1>Contacto</h1>
    <p class="intro">
      ¿Tienes dudas o necesitas asesoramiento? Ponte en contacto con nosotros y responderemos lo antes posible.
    </p>
    <form @submit.prevent="enviar">
      <div class="input-wrap">
        <svg class="input-icon" viewBox="0 0 24 24"><path fill="#4db6ac" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2.25a1 1 0 001 1h14a1 1 0 001-1V18c0-2.66-5.33-4-8-4z"/></svg>
        <input type="text" v-model="nombre" placeholder="Nombre" required />
      </div>
      <div class="input-wrap">
        <svg class="input-icon" viewBox="0 0 24 24"><path fill="#4db6ac" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-1.4 2.25L12 15.13l-6.6-6.88c-.15-.16-.38-.18-.54-.03a.38.38 0 00-.04.53l7 7.3a.5.5 0 00.72 0l7-7.3c.15-.15.12-.39-.03-.54a.37.37 0 00-.53.02z"/></svg>
        <input type="email" v-model="email" placeholder="Email" required />
      </div>
      <div class="input-wrap">
        <svg class="input-icon" viewBox="0 0 24 24"><path fill="#4db6ac" d="M6.6 10.79a15.1 15.1 0 006.61 6.61l2.2-2.21a1 1 0 011-.25 11.72 11.72 0 003.68.59 1 1 0 011 1v3.71a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.72a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.25 1z"/></svg>
        <input type="tel" v-model="telefono" placeholder="Teléfono (opcional)" />
      </div>
      <div class="input-wrap">
        <svg class="input-icon" viewBox="0 0 24 24"><path fill="#4db6ac" d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v16h16V4H4zm8 4a2 2 0 100 4 2 2 0 000-4z"/></svg>
        <textarea v-model="mensaje" placeholder="Mensaje" required></textarea>
      </div>
      <button class="btn" type="submit">
        <span>Enviar mensaje</span>
      </button>
    </form>
    <transition name="fade-msg">
      <div v-if="enviado" class="enviado">
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" style="vertical-align:middle;"><path fill="#4db6ac" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-2-6.414l7.293-7.293-1.414-1.414L10 13.172l-2.879-2.88-1.414 1.415L10 17.586z"/></svg>
        ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.
      </div>
    </transition>

    <div class="datos-contacto">
      <h3>Datos de contacto</h3>
      <div>
        <svg class="icon" viewBox="0 0 24 24"><path fill="#4db6ac" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
        Granada, Granada
      </div>
      <div>
        <svg class="icon" viewBox="0 0 24 24"><path fill="#4db6ac" d="M6.6 10.79a15.1 15.1 0 006.61 6.61l2.2-2.21a1 1 0 011-.25 11.72 11.72 0 003.68.59 1 1 0 011 1v3.71a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.72a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.25 1z"/></svg>
        <a href="tel:952123456">952 12 34 56</a>
      </div>
      <div>
        <svg class="icon" viewBox="0 0 24 24"><path fill="#4db6ac" d="M19.75 5.5H4.25A1.75 1.75 0 002.5 7.25v9.5A1.75 1.75 0 004.25 18.5h15.5a1.75 1.75 0 001.75-1.75v-9.5A1.75 1.75 0 0019.75 5.5zm.25 1.75v.41l-8 5.31-8-5.31v-.41h16zm-16 10.25v-7.21l7.59 5.04a1.75 1.75 0 001.82 0L21.5 10.54v7.21H4.25zm0-13h15.5A3.25 3.25 0 0123 7.25v9.5A3.25 3.25 0 0119.75 20H4.25A3.25 3.25 0 011 16.75v-9.5A3.25 3.25 0 014.25 3.5z"/></svg>
        <a href="mailto:info@centroinformatico.es">info@centroinformatico.es</a>
      </div>
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
  max-width: 32em;
  margin: 3.5em auto 4.2em auto;
  background: linear-gradient(120deg, #f1f8fd 70%, #d8f6ea 100%);
  padding: 2.3em 1em 2.5em 1em;
  border-radius: var(--radius);
  box-shadow: 0 3px 24px #4db6ac17;
  text-align: center;
  position: relative;
  z-index: 2;
}
.contacto h1 {
  font-size: 1.4em;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #2953a5;
  margin-bottom: 0.4em;
}
.intro {
  color: #355172;
  font-size: 1.07em;
  margin-bottom: 2em;
  line-height: 1.6;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  margin-top: 0.2em;
}
.input-wrap {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: 0 1px 5px #4db6ac0a;
  padding: 0 0.7em;
  border: 1.5px solid #4db6ac22;
  transition: box-shadow 0.19s, border 0.16s;
  position: relative;
}
.input-wrap:focus-within {
  box-shadow: 0 0 0 2px #4db6ac44, 0 3px 10px #4db6ac18;
  border-color: #4db6ac88;
}
.input-icon {
  flex: none;
  width: 1.25em;
  height: 1.25em;
  margin-right: 0.7em;
  opacity: 0.85;
}
input, textarea {
  flex: 1;
  font-size: 1em;
  background: transparent;
  border: none;
  outline: none;
  padding: 1em 0.3em 1em 0.1em;
  color: #222;
  font-family: inherit;
  resize: none;
}
textarea {
  min-height: 5em;
  resize: vertical;
}
button.btn {
  display: inline-block;
  margin: 0 auto;
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
}
button.btn:hover,
button.btn:focus {
  background: linear-gradient(90deg, #4db6ac 20%, #2953a5 100%);
  box-shadow: 0 5px 24px #2953a524;
  transform: translateY(-2px) scale(1.04);
}
.enviado {
  margin: 1.7em 0 1.2em 0;
  color: #2cb07b;
  font-weight: bold;
  font-size: 1.13em;
  background: #e6faec;
  border-radius: 2em;
  padding: 0.7em 1.4em;
  box-shadow: 0 1px 9px #4db6ac24;
  display: inline-flex;
  align-items: center;
  gap: 0.7em;
  animation: pop-msg 0.32s cubic-bezier(.4,1.2,.6,1.0);
}
@keyframes pop-msg {
  0% { transform: scale(0.8) translateY(18px); opacity: 0;}
  70% { transform: scale(1.07) translateY(-5px);}
  100% { transform: scale(1) translateY(0); opacity: 1;}
}
.fade-msg-enter-active,
.fade-msg-leave-active {
  transition: opacity 0.33s;
}
.fade-msg-enter-from,
.fade-msg-leave-to {
  opacity: 0;
}
.datos-contacto {
  margin-top: 2.7em;
  text-align: left;
  color: #264057;
  background: #fafdffdd;
  border-radius: var(--radius);
  box-shadow: 0 1px 7px #4db6ac0c;
  padding: 1.3em 1.1em 1.1em 1.1em;
}
.datos-contacto h3 {
  margin-bottom: 0.7em;
  font-size: 1.11em;
  color: #2953a5;
  font-weight: 600;
}
.datos-contacto .icon {
  margin-right: 0.6em;
  margin-bottom: -0.18em;
  width: 1.18em;
  height: 1.18em;
  vertical-align: middle;
  opacity: 0.85;
}
.datos-contacto a {
  color: #4db6ac;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.17s;
}
.datos-contacto a:hover {
  color: #2cb07b;
  text-decoration: underline;
}

/* Responsive: más espacio en desktop */
@media (min-width: 700px) {
  .contacto {
    max-width: 34em;
    padding: 3.3em 2em 3.2em 2em;
  }
  .datos-contacto {
    padding: 1.5em 2.2em 1.1em 2.2em;
    margin-top: 3em;
  }
}
</style>
