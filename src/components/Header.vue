<template>
  <header>
    <div class="header-inner">
      <div class="logo">
        <router-link to="/">
        <img src="../assets/img/logoCI.png" alt="Centro Informático" />
        </router-link>
      </div>
      <button class="hamburger" @click="toggleMenu" aria-label="Abrir menú" :aria-expanded="open">
        <span :class="{ open }"></span>
        <span :class="{ open }"></span>
        <span :class="{ open }"></span>
      </button>
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
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
function toggleMenu() { open.value = !open.value }
function closeMenu() { open.value = false }
</script>

<style scoped>
:root {
  --radius: 18px;
}

/* ---------- MOBILE FIRST ----------- */
header {
  background: #202b38;
  color: white;
  position: relative;
  width: 100%;
  box-shadow: 0 0.13rem 0.5rem rgba(39,88,163,0.09);
  border-bottom: 1px solid #232f3e;
  z-index: 50;
  font-size: 1rem;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80rem;
  margin: 0 auto;
  height: 3.75rem;
  padding: 0 1.25rem;
  position: relative;
}

.logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  max-width: 10rem;
  z-index: 10;
}
.logo img {
  display: block;
  height: 3.75rem;
  width: auto;
  max-width: 8.75rem;
  max-height: 5rem;
  object-fit: contain;
}

/* ---- MOBILE HAMBURGER ---- */
.hamburger {
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  width: 2.3rem;
  height: 2.3rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 31;
}
.hamburger span {
  display: block;
  height: 0.25rem;
  width: 100%;
  background: #fff;
  border-radius: 2px;
  transition: 0.3s;
}
.hamburger span.open:nth-child(1) { transform: translateY(0.6rem) rotate(45deg); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: translateY(-0.6rem) rotate(-45deg); }

nav {
  position: absolute;
  top: 3.75rem;
  left: 0;
  width: 100vw;
  background: #202b38;
  box-shadow: 0 0.4rem 2rem #0002;
  border-radius: 0 0 var(--radius) var(--radius);
  overflow: hidden;
  transition: max-height 0.32s, opacity 0.23s;
  max-height: 0;
  opacity: 0;
  z-index: 20;
  margin: 0 auto;
  right: 0;
  padding: 0;
  display: block;
}
nav.open {
  max-height: 24rem;
  opacity: 1;
}
nav ul {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  list-style: none;
  padding: 1.1rem 0;
  margin: 0;
  align-items: center;
}
nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.35em 1em;
  border-radius: 0.375rem;
  transition: background 0.17s, color 0.17s;
}
nav a.router-link-active {
  font-weight: bold;
  background: #4db6ac;
  color: #fff;
  border-radius: 0.375rem;
  padding: 0.35em 1.1em;
}
nav a:hover:not(.router-link-active) {
  background: #355172;
}

/* --------- DESKTOP ----------- */
@media (min-width: 900px) {
  .header-inner {
    justify-content: flex-start;
    height: 4.5rem;
    padding: 0 3rem;
    position: relative;
  }
  .logo {
    position: static;
    left: auto;
    top: auto;
    transform: none;
    max-width: 13.75rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-right: 2em;
  }
  .logo img {
    height: 4.5rem;
    max-height: 5rem;
  }
  .hamburger { display: none; }
  nav {
    all: unset;
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;
    align-items: center;
    position: static;
    width: auto;
    max-width: none;
    background: none;
    box-shadow: none;
    opacity: 1 !important;
    max-height: none !important;
    margin: 0;
    padding: 0;
  }
  nav ul {
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    padding: 0;
    margin: 0;
  }
}

@media (max-width: 899px) {
  .header-inner {
    padding: 0 1em;
    height: 3.75rem;
  }
  .logo {
    flex: 1;
    justify-content: center;
    padding-right: 0;
    max-width: 9.375rem; /* 150px */
  }
  nav {
    top: 3.75rem;
  }
}
</style>
