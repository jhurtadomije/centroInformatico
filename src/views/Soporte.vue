<template>
  <section class="soporte">
    <h1>Soporte informático</h1>
    <p class="intro">
      Ofrecemos soporte técnico para empresas: resolución de incidencias, asistencia remota y presencial, mantenimiento preventivo y correctivo.
    </p>
    <ul class="tipos-soporte">
      <li>
        <span class="s-icon">
          <svg width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="#4db6ac" d="M19 19V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v13l7-3 7 3z"/></svg>
        </span>
        Soporte remoto rápido
      </li>
      <li>
        <span class="s-icon">
          <svg width="1.1em" height="1.1em" viewBox="0 0 24 24"><path fill="#4db6ac" d="M3 13h2v-2H3v2zm16 0h2v-2h-2v2zm1-7H4c-1.1 0-2 .9-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm0 14H4V8h16v12z"/></svg>
        </span>
        Asistencia presencial en tu empresa
      </li>
      <li>
        <span class="s-icon">
          <svg width="1.1em" height="1.1em" viewBox="0 0 24 24"><path fill="#4db6ac" d="M22 19.54a4 4 0 0 0-3-3.9V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v11.64A4 4 0 0 0 2 19.54 2 2 0 0 0 4 22h16a2 2 0 0 0 2-2.46z"/></svg>
        </span>
        Resolución de incidencias hardware y software
      </li>
      <li>
        <span class="s-icon">
          <svg width="1.1em" height="1.1em" viewBox="0 0 24 24"><path fill="#4db6ac" d="M12 17a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm7 10.25a7 7 0 0 1-14 0V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </span>
        Seguridad informática y copias de seguridad
      </li>
    </ul>
    <div class="cta">
      <router-link class="btn" to="/contacto">Abrir ticket de soporte</router-link>
    </div>
    <div class="ayuda">
      <h3>¿Cómo funciona?</h3>
      <ol>
        <li>Contacta con nosotros o abre un ticket online</li>
        <li>Un técnico te contactará para resolver tu caso</li>
        <li>Si es necesario, acudiremos a tus instalaciones</li>
        <li>Seguimiento y cierre de incidencia</li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.soporte {
  max-width: 33em;
  margin: 3.2em auto 4.2em auto;
  background: linear-gradient(113deg, #f7fbff 85%, #e4fbf4 100%);
  padding: 2.7em 1.2em 2.4em 1.2em;
  border-radius: var(--radius);
  box-shadow: 0 3px 20px #4db6ac13;
  text-align: center;
  position: relative;
  z-index: 2;
}
.soporte h1 {
  font-size: 1.32em;
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
.tipos-soporte {
  list-style: none;
  padding: 0;
  margin: 2em 0 1em 0;
  font-size: 1.11em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: flex-start;
}
.tipos-soporte li {
  display: flex;
  align-items: center;
  gap: 0.8em;
  background: #fafdff;
  box-shadow: 0 1px 5px #4db6ac0a;
  border-radius: 1.3em;
  padding: 0.7em 1.1em 0.7em 0.8em;
  font-size: 1.01em;
  font-weight: 500;
  color: #2953a5;
  margin: 0;
  transition: background 0.15s;
}
.tipos-soporte li:hover {
  background: #e1f6f1;
}
.s-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #e1f6f1;
  border-radius: 50%;
  width: 2.1em;
  height: 2.1em;
  min-width: 2.1em;
  box-shadow: 0 0.7px 6px #4db6ac11;
  margin-right: 0.2em;
}

.cta {
  margin-top: 2em;
  text-align: center;
}
.btn {
  display: inline-block;
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
  text-decoration: none;
}
.btn:hover,
.btn:focus {
  background: linear-gradient(90deg, #4db6ac 20%, #2953a5 100%);
  box-shadow: 0 5px 24px #2953a524;
  transform: translateY(-2px) scale(1.04);
}
.ayuda {
  margin-top: 2.3em;
  background: #fafdffcc;
  border-radius: var(--radius);
  box-shadow: 0 1px 7px #4db6ac0a;
  padding: 1.3em 1.2em 1.1em 1.2em;
  text-align: left;
  max-width: 26em;
  margin-left: auto;
  margin-right: auto;
}
.ayuda h3 {
  margin-top: 0;
  color: #2953a5;
  font-size: 1.07em;
}
.ayuda ol {
  padding-left: 1.1em;
  margin: 0.8em 0 0 0;
  color: #264057;
  font-size: 1em;
  line-height: 1.65;
}

/* Responsive */
@media (min-width: 700px) {
  .soporte {
    max-width: 35em;
    padding: 3.3em 2em 3em 2em;
  }
  .ayuda {
    padding: 1.7em 2em 1.5em 2em;
    margin-top: 3.1em;
    max-width: 28em;
  }
}
</style>
