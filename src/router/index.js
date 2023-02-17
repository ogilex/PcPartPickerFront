import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Builds from '@/views/Builds.vue';
import MyBuilds from '@/views/MyBuilds.vue'
import SingleBuild from '@/views/SingleBuild.vue'
import CreateBuild from '@/views/CreateBuild.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/builds',
    name: 'Builds',
    component: Builds
  },
  {
    path: '/mybuilds',
    name: 'MyBuilds',
    component: MyBuilds
  },
  {
    path: '/build/:id',
    name: 'SingleBuild',
    component: SingleBuild
  },
  {
    path: '/create-build',
    name: 'CreateBuild',
    component: CreateBuild
  }
];



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
