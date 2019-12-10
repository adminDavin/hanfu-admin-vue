import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/hf-user/Login1'
    },
    {
      name: 'detail',
      path: '/detail',
      component: resolve => require(['@/components/product/detail.vue'], resolve),
      meta: {
        title: '系统首页'
      }
    },
    {
      name: 'hf-store',
      path: '/hf-store',
      component: resolve => require(['@/components/hf-store/hf-store.vue'], resolve),
      meta: {
        title: '系统首页'
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
      path: '/hf-quick',
      component: resolve => require(['@/components/hf-quick'], resolve),
      meta: {
        title: '订单中心'
      }
    },
   {
      path: '/hf-business',
      component: resolve => require(['@/components/hf-business'], resolve),
      meta: {
        title: '自营订单'
      }
    },
    {
       path: '/hf-zichan',
       component: resolve => require(['@/components/hf-zichan'], resolve),
       meta: {
         title: '资产明细'
       }
     },
    {
       path: '/hf-assess',
       component: resolve => require(['@/components/hf-assess'], resolve),
       meta: {
         title: '评价管理'
       }
     },
     {
        path: '/hf-record',
        component: resolve => require(['@/components/hf-record'], resolve),
        meta: {
          title: '数据统计'
        }
      },
     {
        path: '/hf-pair',
        component: resolve => require(['@/components/hf-pair'], resolve),
        meta: {
          title: '快速打单'
        }
      },
      {
         path: '/hf-category',
         component: resolve => require(['@/components/hf-category'], resolve),
         meta: {
           title: '类目管理'
         }
       },
      {
         path: '/hf-message',
         component: resolve => require(['@/components/hf-message'], resolve),
         meta: {
           title: '消息'
         }
       },
        {
         path: '/hf-set',
         component: resolve => require(['@/components/hf-set'], resolve),
         meta: {
           title: '设置'
         }
       },

       {
          path: '/hf-coupon',
          component: resolve => require(['@/components/hf-coupon'], resolve),
          meta: {
            title: '优惠券'
          }
        },

        {
           path: '/hf-tixian',
           component: resolve => require(['@/components/hf-tixian'], resolve),
           meta: {
             title: '店铺提现'
           }
         },
         {
            path: '/hf-shangjia',
            component: resolve => require(['@/components/hf-shangjia'], resolve),
            meta: {
              title: '商家提现'
            }
          },
      {
         path: '/hf-vip',
         component: resolve => require(['@/components/hf-vip'], resolve),
         meta: {
           title: '会员管理'
         }
       },
      {
         path: '/hf-rights',
         component: resolve => require(['@/components/hf-rights'], resolve),
         meta: {
           title: '退款维权'
         }
       },
       {
          path: '/hf-detail',
          component: resolve => require(['@/components/hf-detail'], resolve),
          meta: {
            title: '订单详情'
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
	  path: '/hf-user/register',
	  component: resolve => require(['@/components/hf-user/register'], resolve),
	  meta: {
	    title: '用户注册'
	  }
    },

	{
	  path: '/hf-boss',
	  component: resolve => require(['@/components/hf-business'], resolve),
	  meta: {
	    title: '商家管理'
	  }
	},
    {
      path: '/hf-user/Login1',
      component: resolve => require(['@/components/hf-user/Login1'], resolve),
      meta: {
        title: '用户登录'
      }
    },
    // {
    //   path: '/hf-order',
    //   component: resolve => require(['@/components/hf-order/hf-quick'], resolve),
    //   meta: {
    //     title: '订单中心'
    //   }
    // },
    {
      path: '/warehouse',
      component: resolve => require(['@/components/warehouse'], resolve),
      meta: {
        title: '仓库中心'
      }
    },
   {
      path: '/test',
      component: resolve => require(['../components/test/index.vue'], resolve),
      meta: {
        title: '蚂蚁种树'
      }
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
  } else {
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
