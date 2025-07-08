<template>
  <header>
    <div class="header-inner">
      <div class="logo">
        <img src="@/assets/img/logo-ci.svg" alt="Centro Informático" height="38" />
      </div>
      <button class="hamburger" @click="toggleMenu" aria-label="Abrir menú" :aria-expanded="open">
        <span :class="{ open }"></span>
        <span :class="{ open }"></span>
        <span :class="{ open }"></span>
      </button>
    </div>
    <nav :class="{ open }">
      <ul>
        <li><router-link to="/" @click="closeMenu">Inicio</router-link></li>
        <li><router-link to="/servicios" @click="closeMenu">Servicios</router-link></li>
        <li><router-link to="/renting" @click="closeMenu">Renting</router-link></li>
        <li><router-link to="/soporte" @click="closeMenu">Soporte</router-link></li>
        <li><router-link to="/nosotros" @click="closeMenu">Nosotros</router-link></li>
        <li><router-link to="/contacto" @click="closeMenu">Contacto</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
function toggleMenu() { open.value = !open.value }
function closeMenu() { open.value = false }
</script>


<style scoped>
header {
  background: #202b38;
  color: white;
  position: relative;
  padding: 0;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: center; /* Logo centrado por defecto */
  position: relative;
  height: 60px;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.logo img {
  height: 8rem;
  width: auto;
  display: block;
}

.hamburger {
  position: absolute;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 30;
}
.hamburger span {
  display: block;
  height: 4px;
  width: 100%;
  background: #fff;
  border-radius: 2px;
  transition: 0.3s;
}
.hamburger span.open:nth-child(1) { transform: translateY(9px) rotate(45deg); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

/* Menú móvil: oculto por defecto, desplegable */
nav {
  width: 100vw;
  max-width: 350px;
  background: #202b38;
  box-shadow: 0 6px 32px #0002;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: var(--radius);
  overflow: hidden;
  transition: max-height 0.32s, opacity 0.23s;
  max-height: 0;
  opacity: 0;
  z-index: 20;
  padding: 0;
}
nav.open {
  max-height: 370px;
  opacity: 1;
}
nav ul {
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  list-style: none;
  padding: 1.3em 0;
  margin: 0;
  align-items: center;
}
nav a {
  color: white;
  text-decoration: none;
  font-size: 1.09em;
  padding: 0.4em 0.9em;
  border-radius: 5px;
  transition: background 0.13s;
}
nav a.router-link-active {
  font-weight: bold;
  background: #4db6ac22;
}

/* ---- Desktop ---- */
@media (min-width: 700px) {
  header {
    padding: 0;
  }
  .header-inner {
    justify-content: flex-start;
    height: 72px;
    padding: 0 2em;
  }
  .logo {
    justify-content: flex-start;
    flex: unset;
  }
  .hamburger { display: none; }
  nav {
    all: unset;
    display: block;
    position: static;
    width: auto;
    max-width: none;
    background: none;
    box-shadow: none;
    opacity: 1 !important;
    max-height: none !important;
  }
  nav ul {
    flex-direction: row;
    gap: 1.1em;
    align-items: center;
    padding: 0;
  }
}

</style>
