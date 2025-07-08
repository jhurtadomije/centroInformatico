<template>
  <section class="soporte">
    <h1>Soporte informático</h1>
    <p>
      Ofrecemos soporte técnico para empresas: resolución de incidencias, asistencia remota y presencial, mantenimiento preventivo y correctivo.
    </p>
    <ul class="tipos-soporte">
      <li>🖥️ Soporte remoto rápido</li>
      <li>🏢 Asistencia presencial en tu empresa</li>
      <li>🔧 Resolución de incidencias hardware y software</li>
      <li>🔒 Seguridad informática y copias de seguridad</li>
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
  max-width: 700px;
  margin: 3em auto;
  background: #fff;
  padding: 2.5em 1.5em;
  border-radius: var(--radius);
  box-shadow: 0 2px 16px rgba(39,88,163,0.07);
}
.tipos-soporte {
  list-style: none;
  padding: 0;
  margin: 2em 0 1em 0;
  font-size: 1.11em;
}
.tipos-soporte li {
  margin-bottom: 0.7em;
}
.ayuda {
  margin-top: 2em;
  background: #f5f7fa;
  border-radius: var(--radius);
  padding: 1.3em 1.2em;
}
.ayuda h3 {
  margin-top: 0;
  color: var(--color-primary);
}
.ayuda ol {
  padding-left: 1.4em;
  margin: 0.8em 0 0 0;
}
.cta {
  margin-top: 2em;
  text-align: center;
}
</style>
