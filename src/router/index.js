import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      component: resolve => require(['@/components/login.vue'], resolve),
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/store',
      component: resolve => require(['@/components/hf-store/index.vue'], resolve),
      meta: {
        title: '店铺'
      }
    },
    {
      path: '/goods',
      component: resolve => require(['@/components/goods'], resolve),
      meta: {
        title: '物品管理'
      }
    },
    {
      path: '/product',
      component: resolve => require(['@/components/product'], resolve),
      meta: {
        title: '商品中心'
      }
    },
    {
      path: '/hf-user',
      component: resolve => require(['@/components/hf-user'], resolve),
      meta: {
        title: '用户管理'
      }
    },
    {
      path: '/hf-user/login',
      component: resolve => require(['@/components/hf-user/login'], resolve),
      meta: {
        title: '用户登录'
      }
    },
    {
      path: '/hf-user/register',
      component: resolve => require(['@/components/hf-user/register'], resolve),
      meta: {
        title: '用户注册'
      }
    },
    {
      path: '/warehouse',
      component: resolve => require(['@/components/warehouse'], resolve),
      meta: {
        title: '仓库中心'
      }
    },
    {
      path: '/tree',
      component: resolve => require(['@/components/mayi/tree.vue'], resolve),
      meta: {
        title: '蚂蚁种树'
      }
    },
    // {
    //   path: '/dianPu',
    //   component: resolve => require(['../components/admin/dianPu.vue'], resolve)
    // },
    {
      path: '/test',
      component: resolve => require(['../components/test/index.vue'], resolve),
      meta: {
        title: '蚂蚁种树'
      }
    },
	{
	  path: '/zanzhu',
	  component: resolve => require(['../components/zanzhu.vue'], resolve)
	},
    {
      path: '/bottom',
      component: resolve => require(['../components/flex/bottom.vue'], resolve)
    },
    {
      path: '/404',
      component: resolve => require(['../components/common/404.vue'], resolve)
    },
    {
      path: '/403',
      component: resolve => require(['../components/common/403.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  mode: 'history'
});

//全局路由守卫
router.beforeEach((to, from, next) => {
  //debugger
  console.log('跳转到:', to.fullPath);
  if (to.path == '/tree') {
    next();
  }
  else {
    // var token = sessionStorage.getItem('token');
    //如果没登录,都导向登录页
    // console.log('token',token);
    // if (!token) {
    //   if (to.path !== '/login') {
    //     next({ path: '/login' })
    //   }
    //   else {
    //     next();
    //   }
    // }
    // else {
      next();
    // }
  }

})

export default router
