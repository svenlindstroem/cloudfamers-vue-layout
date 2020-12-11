import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home/HomeList.vue';
import Test from '../views/Test/TestList.vue';
import TestEdit from '../views/Test/TestEdit.vue';

Vue.use(Router);
console.log(process.env)
export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/test',
      component: Test,
    },
    {
      path: '/test/edit',
      component: TestEdit,
    },

    {
      path: '/',
      component: Home,
    },
  ],
});
