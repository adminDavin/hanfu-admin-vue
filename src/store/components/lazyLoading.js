/**
 *
 * 懒加载动态路由
 */
function lazy(code) {

  //return  resolve => require(["@/components/" + name + ".vue"], resolve)
  return getComponetByPath('/' + code);


}

function getComponetByPath(path) {
  for (var i = 0; i < dynamicRouter.length; i++) {
    var route = dynamicRouter[i];
    if (route.path == path) {
      return route.component;
    }
  }
}
/**
 * 路由定义
 * path跟配置里的资源标示对应,同时跟url地址对应
 */

const dynamicRouter = [
  {
    name: 'index',
    path: '/index',
    component: resolve => require(['@/components/index.vue'], resolve),
    meta: {
      title: '系统首页'
    }
  },
  {

    path: '/hf-order-table',
    component: resolve => require(['@/components/hf-order/hf-order-table.vue'], resolve),
    meta: {
      title: '系统首页'
    }
  },
  {

    path: '/hf-order',
    component: resolve => require(['@/components/hf-order'], resolve),
    meta: {
      title: '系统首页'
    }
  },
  {
    path: '/order',
    component: resolve => require(['@/components/hf-order/index.vue'], resolve),
    meta: {
      title: '系统首页'
    }
  },
  {
    name: 'hf-user',
    path: '/hf-user',
    component: resolve => require(['@/components/hf-user'], resolve),
    meta: {
      title: '用户登录'
    }
  },
  {
    name: 'detail',
    path: '/detail',
    component: resolve => require(['@/components/product/detail.vue'], resolve),
    meta: {
      title: '系统首页'
    },
  },
  {
    name: 'hf-store',
    path: '/hf-store',
    component: resolve => require(['@/components/hf-store/hf-store.vue'], resolve),
    meta: {
      title: '系统首页'
    }
  }, {
    name: 'messageboard',
    path: '/messageboard',
    component: resolve => require(['@/components/tablepage/messageboard.vue'], resolve),
    meta: {
      title: '系统首页'
    }
  },
  {
    name: 'hf-boss',
    path: '/hf-boss',
    component: resolve => require(['@/components/hf-business'], resolve),
    meta: {
      title: '商家管理'
    }
  },
  {
    name: 'hf-order',
    path: '/hf-order',
    component: resolve => require(['@/components/hf-order'], resolve),
    meta: {
      title: '订单中心'
    }
  },
  {
    name: 'hf-tixian',
    path: '/hf-tixian',
    component: resolve => require(['@/components/hf-tixian'], resolve),
    meta: {
      title: '店铺提现'
    }
  },
  {
    name: 'hf-shangjia',
    path: '/hf-shangjia',
    component: resolve => require(['@/components/hf-shangjia'], resolve),
    meta: {
      title: '商家提现'
    }
  },
  {
    name: 'hf-detail',
    path: '/hf-detail',
    component: resolve => require(['@/components/hf-detail'], resolve),
    meta: {
      title: '订单详情'
    }
  },
  {
    name: 'hf-message',
    path: '/hf-message',
    component: resolve => require(['@/components/hf-message'], resolve),
    meta: {
      title: '消息'
    }
  },
  {
    name: 'hf-set',
    path: '/hf-set',
    component: resolve => require(['@/components/hf-set'], resolve),
    meta: {
      title: '设置'
    }
  },
  {
    name: 'hf-vip',
    path: '/hf-vip',
    component: resolve => require(['@/components/hf-vip'], resolve),
    meta: {
      title: '会员管理'
    }
  },
  {
    name: 'hf-quick',
    path: '/hf-quick/hf-quick',
    component: resolve => require(['@/components/hf-quick/hf-quick'], resolve),
    meta: {
      title: '全部订单'
    }
  },
 {
    name: 'hf-pair',
    path: '/hf-pair/hf-pair',
    component: resolve => require(['@/components/hf-pair/hf-pair'], resolve),
    meta: {
      title: '快速打单'
    }
  },
 {
    name: 'hf-rights',
    path: '/hf-rights/hf-rights',
    component: resolve => require(['@/components/hf-rights/hf-rights'], resolve),
    meta: {
      title: '退款维权'
    }
  },
  {
     name: 'hf-zichan',
     path: '/hf-zichan/hf-zichan',
     component: resolve => require(['@/components/hf-zichan/hf-zichan'], resolve),
     meta: {
       title: '资产'
     }
   },
  {
    name: 'hf-assess',
    path: '/hf-assess/hf-assess',
    component: resolve => require(['@/components/hf-assess/hf-assess.vue'], resolve),
    meta: {
      title: '评价管理'
    }
  },
  {
    name: 'tablepage',
    path: '/tablepage',
    component: resolve => require(['@/components/tablepage/tablepage.vue'], resolve),
    meta: {
      title: '系统首页'
    }
  }, {
    name: 'searchinput',
    path: '/searchinput',
    component: resolve => require(['@/components/searchinput/searchinput.vue'], resolve),
    meta: {
      title: '查询输入页'
    }
  }, {
    name: 'tabpage',
    path: '/tabpage',
    component: resolve => require(['@/components/tabpage/tabpage.vue'], resolve),
    meta: {
      title: '标签选项卡'
    }
  }, {
    name: 'tablepage',
    path: '/tablepage',
    component: resolve => require(['@/components/tablepage/tablepage.vue'], resolve),
    meta: {
      title: '综合表格页'
    }
  }, {
    name: 'formpage',
    path: '/formpage',
    component: resolve => require(['@/components/formpage/formpage.vue'], resolve),
    meta: {
      title: '表单页'
    }
  }, {
    name: 'treepage',
    path: '/treepage',
    component: resolve => require(['@/components/treepage/treepage.vue'], resolve),
    meta: {
      title: '树组件页'
    }
  }, {
    name: 'OrganizationTree',
    path: '/organizationTree',
    component: resolve => require(['@/components/admin/OrganizationTree.vue'], resolve),
    meta: {
      title: '机构管理'
    }
  }, {
    name: 'DianPu',
    path: '/dianPu',
    component: resolve => require(['@/components/admin/DianPu.vue'], resolve),
    meta: {
      title: '店铺管理'
    }
  },

  {
    name: 'dingdan',
    path: '/dingdan',
    component: resolve => require(['@/components/admin/dingdan.vue'], resolve),
    meta: {
      title: '店铺管理'
    }
  }, {
    name: 'sdfasd',
    path: '/test',
    component: resolve => require(['@/components/test/index.vue'], resolve),
    meta: {
      title: 'sdfasd'
    }
  }, 
	 
	{
    name: 'store',
    path: '/stone',
    component: resolve => require(['@/components/hf-store/index.vue'], resolve),
  }, {
    name: 'goods',
    path: '/goods',
    component: resolve => require(['@/components/goods'], resolve),
  },
  {
    name: 'warehouse',
    path: '/warehouse',
    component: resolve => require(['@/components/warehouse'], resolve),
  },
  {
    name: 'product',
    path: '/product',
    component: resolve => require(['@/components/product'], resolve),
  },
  {
    name: 'hf-category',
    path: '/hf-category',
    component: resolve => require(['@/components/hf-category'], resolve),
  },
  {
    name: 'hf-quick',
    path: 'hf-quick/hf-quick',
    component: resolve => require(['@/components/hf-quick/hf-quick.vue'], resolve),
  },
  {
    name: 'SysUser',
    path: '/sysUser',
    component: resolve => require(['@/components/admin/SysUser.vue'], resolve),
    meta: {
      title: '商品管理'
    }
  },
  {
    name: 'SysAcl',
    path: '/sysAcl',
    component: resolve => require(['@/components/admin/SysAcl.vue'], resolve),
    meta: {
      title: '角色资源管理'
    }
  }, {
    name: 'SysMenu',
    path: '/sysMenu',
    component: resolve => require(['@/components/admin/SysMenu.vue'], resolve),
    meta: {
      title: '菜单管理'
    }
  }, {
    name: 'SysResource',
    path: '/sysResource',
    component: resolve => require(['@/components/admin/SysResource.vue'], resolve),
    meta: {
      title: '店铺管理'
    }
  }, {
    name: 'SysRole',
    path: '/sysRole',
    component: resolve => require(['@/components/admin/SysRole.vue'], resolve),
    meta: {
      title: '仓库管理'
    }
  },
  {
    name: 'sysRoleMap',
    path: '/sysRoleMap',
    component: resolve => require(['@/components/admin/SysRoleMap.vue'], resolve),
    meta: {
      title: '角色权限管理'
    }
  }, {
    name: 'msg',
    path: '/msg',
    component: resolve => require(['@/components/message/msg.vue'], resolve),
    meta: {
      title: '建议留言'
    }
  }, {
    name: 'messageboard',
    path: '/messageboard',
    component: resolve => require(['@/components/tablepage/messageboard.vue'], resolve),
    meta: {
      title: '增删改查'
    }
  }, {
    name: 'messageboard2',
    path: '/messageboard2',
    component: resolve => require(['@/components/tablepage/messageboard2.vue'], resolve),
    meta: {
      title: '增删改查二'
    }
  }, {
    name: 'transition',
    path: '/transition',
    component: resolve => require(['@/components/flex/transition.vue'], resolve),
    meta: {
      title: '左导航切换效果'
    }
  }, {
    name: 'detail',
    path: '/detail',
    component: resolve => require(['@/components/tablepage/detail.vue'], resolve),
    meta: {
      title: '详情页'
    }
  }, {
    name: 'ckeditor',
    path: '/ckeditor',
    component: resolve => require(['@/components/ckeditor/index.vue'], resolve),
    meta: {
      title: '文本编辑器'
    }
  }
]
export {
  lazy
}
