<template>
  <footer>
    <div class="footer-main">
      <div class="footer-logo">
        <router-link to="/">
          <img src="../assets/img/logoCI.png" alt="Centro Informático" />
        </router-link>
      </div>
      <span>Centro Informático</span>
      <nav class="footer-links">
        <div>
          <h3>Servicios</h3>
          <ul>
            <li><router-link to="/servicios">Mantenimiento Informático</router-link></li>
            <li><router-link to="/renting">Alquiler de Ordenadores y Servidores</router-link></li>
            <li><router-link to="/servicios">Venta de Servidores</router-link></li>
            <li><router-link to="/servicios">Nube Privada</router-link></li>
            <li><router-link to="/servicios">Redes Wi-Fi Empresariales</router-link></li>
            <li><router-link to="/servicios">Copias de Seguridad</router-link></li>
          </ul>
        </div>
        <div>
          <h3>Soluciones</h3>
          <ul>
            <li><router-link to="/servicios">Infraestructura tecnológica</router-link></li>
            <li><router-link to="/servicios">Instalación de servidores</router-link></li>
            <li><router-link to="/soporte">Soporte técnico</router-link></li>
            <li><router-link to="/servicios">Recuperación de datos</router-link></li>
            <li><router-link to="/contacto">Consultoría TIC</router-link></li>
          </ul>
        </div>
      </nav>
      <div class="footer-contact">
        <div>Granada, Granada</div>
        <div>
          <svg class="icon" viewBox="0 0 24 24"><path fill="#4db6ac" d="M6.6 10.79a15.1 15.1 0 006.61 6.61l2.2-2.21a1 1 0 011-.25 11.72 11.72 0 003.68.59 1 1 0 011 1v3.71a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.72a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.25 1z"/></svg>
          <a href="tel:958123456">952 12 34 56</a>
        </div>
        <div>
          <svg class="icon" viewBox="0 0 24 24"><path fill="#4db6ac" d="M19.75 5.5H4.25A1.75 1.75 0 002.5 7.25v9.5A1.75 1.75 0 004.25 18.5h15.5a1.75 1.75 0 001.75-1.75v-9.5A1.75 1.75 0 0019.75 5.5zm.25 1.75v.41l-8 5.31-8-5.31v-.41h16zm-16 10.25v-7.21l7.59 5.04a1.75 1.75 0 001.82 0L21.5 10.54v7.21H4.25zm0-13h15.5A3.25 3.25 0 0123 7.25v9.5A3.25 3.25 0 0119.75 20H4.25A3.25 3.25 0 011 16.75v-9.5A3.25 3.25 0 014.25 3.5z"/></svg>
          <a href="mailto:info@centroinformatico.es">info@centroinformatico.es</a>
        </div>
        <div class="footer-redes">
          <a href="#" aria-label="Facebook" class="redes">
            <svg class="icon" viewBox="0 0 24 24"><path fill="#4db6ac" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.223c0-.773.186-1.223 1.18-1.223h2.82v-5h-3.626c-3.274 0-4.374 1.607-4.374 4.376v2.07z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" class="redes">
            <svg class="icon" viewBox="0 0 24 24"><path fill="#4db6ac" d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.554v-11.452h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.6 0 4.264 2.367 4.264 5.453v6.287zm-16.447-13.452c-1.151 0-2.083-.934-2.083-2.084 0-1.151.932-2.084 2.083-2.084s2.083.933 2.083 2.084c0 1.15-.932 2.084-2.083 2.084zm1.777 13.452h-3.555v-11.452h3.555v11.452zm18.223-20h-22c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h22c1.104 0 2-.896 2-2v-20c0-1.104-.896-2-2-2z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      © 2025 Centro Informático · 
      <a href="#">Aviso legal</a> · 
      <a href="#">Política de privacidad</a> · 
      <a href="#">Política de cookies</a>
    </div>
  </footer>
</template>


<style scoped>
footer {
  background: linear-gradient(120deg, #232f3e 65%, #24466c 100%);
  color: #fff;
  padding: 2.2em 1em 1.2em 1em;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  position: relative;
  box-shadow: 0 0.13rem 0.5rem rgba(39,88,163,0.13);
  z-index: 2;
}

/* ----- CENTRADO Y COLUMNAS ----- */
.footer-main {
  display: flex;
  flex-direction: column;
  gap: 2.1em;
  max-width: 60rem;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  
}

.footer-logo {
  display: flex;
  flex-direction: column;
  
  gap: 0.6em;
  font-weight: bold;
  font-size: 1.35em;
  letter-spacing: 0.04em;
  margin-bottom: 0.5em;
  color: #4db6ac;
}
.footer-logo img {
  height: 2.4em;
  width: auto;
  max-width: 7em;
  object-fit: contain;
  display: block;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 1.6em;
  align-items: center;
  width: 100%;
  justify-content: center;
}
.footer-links h4 {
  color: #4db6ac;
  font-size: 1.17em;
  font-weight: 600;
  margin-bottom: 0.5em;
  letter-spacing: 0.03em;
}
.footer-links ul {
  padding: 0;
  margin: 0;
  list-style: none;
  color: #c6e4f4;
  font-size: 1em;
  line-height: 1.7;
}
.footer-links li {
  margin-bottom: 0.45em;
}

.footer-contact {
  color: #e7f6fa;
  font-size: 1.09em;
  margin: 1em 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
}

.footer-contact a {
  color: #4db6ac;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.17s;
}
.footer-contact a:hover {
  color: #29a88d;
  text-decoration: underline;
}
.footer-redes {
  margin-top: 0.7em;
  display: flex;
  gap: 1em;
  justify-content: center;
}

.icon {
  vertical-align: middle;
  width: 1.15em;
  height: 1.15em;
  margin-right: 0.2em;
  margin-bottom: -0.13em;
  display: inline-block;
}

.footer-legal {
  margin-top: 2.1em;
  text-align: center;
  font-size: 0.99em;
  color: #bcd1ea;
  letter-spacing: 0.01em;
}
.footer-legal a {
  color: #ff7b29;
  text-decoration: underline;
  margin: 0 0.7em;
  transition: color 0.17s;
}
.footer-legal a:hover {
  color: #ff9447;
}

/* ---- DESKTOP: columnas en línea ---- */
@media (min-width: 900px) {
  .footer-main {
    flex-direction: column;
    gap: 2.7em;
    align-items: center;
    text-align: center;
  }
  .footer-links {
    flex-direction: row;
    gap: 3em;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
