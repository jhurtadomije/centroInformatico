import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Servicios from '../views/Servicios.vue'
import Renting from '../views/Renting.vue'
import Soporte from '../views/Soporte.vue'
import Nosotros from '../views/Nosotros.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/servicios', component: Servicios },
  { path: '/renting', component: Renting },
  { path: '/soporte', component: Soporte },
  { path: '/nosotros', component: Nosotros },
  { path: '/contacto', component: Contacto },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
