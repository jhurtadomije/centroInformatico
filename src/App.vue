<template>
  <Header class="header-anim" />
  <transition name="appear" mode="out-in">
    <router-view :key="$route.fullPath" />
  </transition>
  <Footer class="footer-anim" />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Animación para la transición de página */
.appear-enter-active, .appear-leave-active {
  transition: opacity 0.56s cubic-bezier(.4,1.4,.6,1), transform 1.2s cubic-bezier(.4,1.4,.6,1);
}
.appear-enter-from, .appear-leave-to {
  opacity: 0;
  transform: translateY(32px) scale(.97);
}
.appear-enter-to, .appear-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Animaciones de header/footer */
.header-anim {
  animation: topIn .5s cubic-bezier(.45,1.5,.5,1.08);
}
@keyframes topIn {
  from { opacity:0; transform: translateY(-18px);}
  to   { opacity:1; transform: translateY(0);}
}
.footer-anim {
  animation: botIn .5s .15s cubic-bezier(.45,1.5,.5,1.08) both;
}
@keyframes botIn {
  from { opacity:0; transform: translateY(30px);}
  to   { opacity:1; transform: translateY(0);}
}
</style>
