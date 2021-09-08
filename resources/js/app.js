import './bootstrap'
import Vue from 'vue'
import Index from './Index'
import Menu from './Menu'

// Set Vue globally
window.Vue = Vue

Vue.component('index', Index)

const app = new Vue({
  el: '#app'
});
