import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from '../views/404/index.vue'
import Home from '../views/Home/Home.vue'
import Loogin from '../views/loogin/loogin.vue'
import Code from '../views/loogin/code.vue'
import Orderform from '../views/orderform/quick.vue'
import Commodity from '../views/commodity'
import Product from '../views/commodity/product.vue'
import Detail from '../views/commodity/detail.vue'
import Statistics from '../views/statistics'
import Category from '../views/category'
import Coupon from '../views/coupon'
import User from '../views/user'
import Set from '../views/set'
import Header from '../views/header'
import Mingx from '../views/property/mingx.vue'
import Tixian from '../views/property/tixian.vue'
import Verification from '../views/verification'
import Regiment from '../views/activity/regiment.vue'
import Seckill from '../views/activity/seckill.vue'
// import Refund from '../views/orderform/refund.vue'
// import Pair from '../views/orderform/pair.vue'
// import Assess from '../views/orderform/assess.vue'
import Message from '../views/message/index.vue'
import Xinxione from '../views/information/xinxione.vue'
import Xinxitwo from '../views/information/xinxitwo.vue'
import Xinxithere from '../views/information/xinxithere.vue'
import Xinxifour from '../views/information/xinxifour.vue'
import Member from '../views/member'
import Jurisdiction from '../views/jurisdiction'
import Tetail from '../views/orderform/tetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/loogin',
    name: 'loogin',
    component: Loogin
  },
  {
    path: '/code',
    name: 'code',
    component: Code
  },
  {
    path: '/',
    component: Home,
    children: [
      { path: '/tetail', name: 'tetail', component: Tetail },
      { path: '/orderform', name: 'orderform', component: Orderform },
      { path: '/commodity', name: 'commodity', component: Commodity },
      { path: '/statistics', name: 'statistics', component: Statistics },
      { path: '/category', name: 'category', component: Category },
      { path: '/coupon', name: 'coupon', component: Coupon },
      { path: '/user', name: 'user', component: User },
      { path: '/set', name: 'set', component: Set },
      { path: '/mingx', name: 'mingx', component: Mingx },
      { path: '/tixian', name: 'tixian', component: Tixian },
      { path: '/', name: 'header', component: Header },
      { path: '/detail', name: 'detail', component: Detail },
      { path: '/product', name: 'product', component: Product },
      { path: '/verification', name: 'verification', component: Verification },
      { path: '/regiment', name: 'regiment', component: Regiment },
      { path: '/seckill', name: 'seckill', component: Seckill },
      // { path: '/refund', name: 'refund', component: Refund },
      // { path: '/pair', name: 'refund', component: Pair },
      // { path: '/assess', name: 'assess', component: Assess },
      { path: '/detail', name: 'detail', component: Detail },
      { path: '/message', name: 'message', component: Message },
      { path: '/xinxione', name: 'xinxione', component: Xinxione },
      { path: '/xinxitwo', name: 'xinxitwo', component: Xinxitwo },
      { path: '/xinxithere', name: 'xinxithere', component: Xinxithere },
      { path: '/xinxifour', name: 'xinxifour', component: Xinxifour },
      { path: '/member', name: 'member', component: Member },
      { path: '/jurisdiction', name: 'jurisdiction', component: Jurisdiction }
    ]
  },
  { path: '*', name: '404', component: NotFound }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
