 import { createRouter, createWebHashHistory } from 'vue-router'
// import Vue from "vue";
// import VueRouter from "vue-router";
import Home from '../views/Home.vue'

 import AddSmoothie from '../components/AddSmoothie.vue';
// Vue.use(VueRouter);
import EditSmoothie from "../components/EditSmoothie.vue";
const routes = [
  {
    
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    
    path: '/edit-smoothie/:smoothie-slug',
    name: 'EditSmoothie',
    component: EditSmoothie
  },
  {
    
    path: '/add-smoothie',
    name: 'AddSmoothie',
    component: AddSmoothie
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
// const router = new VueRouter({
//   mode:'history',
//   routes
// })

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })


export default router
