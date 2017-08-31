import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Events from '@/components/events/Events';
import CreateEvent from '@/components/events/CreateEvent';
import Trains from '@/components/trains/Trains';
import Profile from '@/components/user/Profile';
import Signin from '@/components/user/Signin';
import Signup from '@/components/user/Signup';

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
    },
    {
      path: '/events/new',
      name: 'CreateEvent',
      component: CreateEvent,
    },
    {
      path: '/trains',
      name: 'Trains',
      component: Trains,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },

  ],
  mode: 'history',
});
