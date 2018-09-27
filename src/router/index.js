import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Stickyfooter from '@/components/Stickyfooter'
import one from '@/views/one'
import test from '@/views/test'
import parent from '@/views/parent'
import fu from '@/views/fu'
import mescroll from '@/views/mescroll'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'one',
      component: one
    },
    {
      path: '/Stickyfooter',
      name: 'Stickyfooter',
      component: Stickyfooter
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
    	path: '/parent',
    	name: 'parent',
    	component: parent
    },
    {
    	path: '/fu',
    	name: 'fu',
    	component: fu
    },
    {
    	path:'/mescroll',
    	name:'mescroll',
    	component:mescroll
    }
  ]
})
