<template>
<div class="sidebar" style="background: red;">
  <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-document"></i>

        <span>商品中心</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="product">
          <i class="el-icon-loading"></i>
        商品管理</el-menu-item>

      </el-menu-item-group>

    </el-submenu>

    <el-menu-item index="store">
      <i class="el-icon-menu"></i>
      <span slot="title">
     <!--   <i class="el-icon-loading
        "></i> -->
        商铺管理</span>
    </el-menu-item>
    <el-menu-item index="warehouse">
      <i class="el-icon-menu"></i><!-- <i class="el-icon-loading
"></i> -->
      <span slot="title">仓库管理</span>
    </el-menu-item>

   <el-submenu index="2">
     <template slot="title">
       <i class="el-icon-document"></i>
       <!-- <i class="el-icon-loading
"></i> -->
       <span>订单中心</span>
     </template>
     <el-menu-item-group>
       <el-menu-item index="hf-quick"><i class="el-icon-loading
"></i>全部订单</el-menu-item>
       <el-menu-item index="hf-business"><i class="el-icon-loading
"></i>自营订单</el-menu-item>
       <el-menu-item index="hf-rights"><i class="el-icon-loading
"></i>退款维权</el-menu-item>
       <el-menu-item index="hf-pair"><i class="el-icon-loading
"></i>快速打单</el-menu-item>
       <el-menu-item index="hf-assess"><i class="el-icon-loading
"></i>评价管理</el-menu-item>
       <el-menu-item index="hf-detail"><i class="el-icon-loading
"></i>订单详情</el-menu-item>
     </el-menu-item-group>
 </el-submenu>

    <el-menu-item index="hf-user">
      <!-- <i class="el-icon-menu"></i> -->
      <i class="el-icon-loading
      "></i>
      <span slot="title">用户中心</span>
    </el-menu-item>

    <el-menu-item index="hf-boss">
      <i class="el-icon-tickets"></i>
    <!--  <i class="el-icon-loading
"></i> -->
      <span slot="title">商家管理</span>
    </el-menu-item>


    <el-menu-item index="hf-vip">
      <i class="el-icon-location"></i>
     <!-- <i class="el-icon-loading
"></i> -->
      <span slot="title">会员管理</span>
    </el-menu-item>

    <el-menu-item index="hf-message">
      <i class="el-icon-message"></i>
    <!--  <i class="el-icon-loading
      "></i> -->
      <span slot="title">消息</span>
    </el-menu-item>



   <el-submenu index="3">
     <template slot="title" index="hf-tixian">
       <i class="el-icon-document"></i>
    <!--   <i class="el-icon-loading
       "></i> -->
       <span slot="title">资产</span>
     </template>
     <el-menu-item-group>
       <el-menu-item index="hf-zichan">
                <i class="el-icon-loading
       "></i>资产明细</el-menu-item>

       <el-menu-item index="hf-tixian">
         <i class="el-icon-loading
"></i>店铺提现</el-menu-item>

       <el-menu-item index="hf-shangjia">
         <i class="el-icon-loading
"></i>商家提现</el-menu-item>


     </el-menu-item-group>
 </el-submenu>





    <el-menu-item index="hf-coupon">
      <i class="el-icon-location"></i>

      <span slot="title">优惠券</span>
    </el-menu-item>
    <el-menu-item index="hf-set">
      <i class="el-icon-message"></i>

      <span slot="title">设置</span>
    </el-menu-item>
   <el-menu-item index="hf-category">
     <i class="el-icon-location"></i>

     <span slot="title">类目管理</span>
   </el-menu-item>


  </el-menu>
</div>
</template>

<script>
import hanfuBus from '@/components/common/hanfu-bus';
import {
  mapState
} from 'vuex';
export default {
  data() {
    return {
      collapse: false,
      menuList: [{
          icon: 'el-icon-setting',
          index: 'index',
          title: '系统首页',
        },
        {
          icon: 'el-icon-setting',
          index: 'test',
          title: '商品管理',
          subs: [

            {
              index: 'store',
              title: '店铺管理'
            },
            {
              index: 'product',
              title: '商品管理'
            },
            {
              index: 'warehouse',
              title: '仓库管理'
            },
            {
              index: 'hf-user',
              title: '用户中心'
            },
            {
              index: 'hf-order',
              title: '订单中心'
            },
            {
              index: 'hf-quick',
              title: '全部订单'
            },{
              index: 'hf-business',
              title: '自营订单'
            },
            {
              index: 'hf-rights',
              title: '退款维权'
            }
            ,{
              index: 'hf-assess',
              title: '评价管理'
            },
            ,{
              index: 'hf-pair',
              title: '快速打单'
            },
            {
              index: 'hf-vip',
              title: '快速打单'
            },
            {
              index: 'hf-message',
              title: '消息'
            },
            ,
            {
              index: 'hf-detail',
              title: '订单详情'
             }
            ,
            {
              index: 'hf-coupon',
              title: '优惠券'
             },

             {
               index: 'hf-category',
               title: '类目管理'
              },
              {
                index: 'hf-boss',
                title: '商家管理'
               },
              {
                index: 'hf-zichan',
                title: '资产明细'
               }
          ]
        },
        {
          icon: 'el-icon-setting',
          index: 'productddd',
          title: '商品中心',
          subs: [
            // {
            //     index: 'formpage',
            //     title: '表单页'
            // },
            // {
            //     index: 'organizationTree',
            //     title: '机构管理'
            // },
            // {
            //     index: 'sysUser',
            //     title: '商品管理'
            // },
            // {
            //     index: 'sysRole',
            //     title: '仓库管理'
            // },
            // {
            //     index: 'sysAcl',
            //     title: '角色资源授权'
            // },
            // {
            //     index: 'sysResource',
            //     title: '店铺管理'
            // },
            // {
            //     index: 'sysMenu',
            //     title: '菜单管理'
            // },
            // {
            //     index: 'dingdan',
            //     title: '订单管理'
            // }

          ]
        },
        {
          icon: 'el-icon-tickets',
          index: 'table',
          title: '订单中心',
          subs: [

            {
              index: 'order',
              title: '订单管理'
            }
          ]
        },
        // {
        //     icon: 'el-icon-message',
        //     index: 'tabs',
        //     title: 'tab选项卡'
        // },
        // {
        //     icon: 'el-icon-date',
        //     index: '3',
        //     title: '表单相关',
        //     subs: [
        //         {
        //             index: 'form',
        //             title: '基本表单'
        //         },
        //         {
        //             index: 'editor',
        //             title: '富文本编辑器'
        //         },
        //         {
        //             index: 'markdown',
        //             title: 'markdown编辑器'
        //         },
        //         {
        //             index: 'upload',
        //             title: '文件上传'
        //         }
        //     ]
        // },
        // {
        //     icon: 'el-icon-star-on',
        //     index: 'charts',
        //     title: 'schart图表'
        // },
        // {
        //     icon: 'el-icon-rank',
        //     index: 'drag',
        //     title: '拖拽列表'
        // },
        // {
        //     icon: 'el-icon-warning',
        //     index: 'permission',
        //     title: '权限测试'
        // },
        {
          icon: 'el-icon-error',
          index: '404',
          title: '404页面'
        }
      ]
    }
  },
  computed: mapState({
    siderbar: state => state.menu.menuList,
    onRoutes() {
      console.log(this.$route.path);
      return this.$route.path.replace('/', '');
    }
  }),
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    hanfuBus.$on('collapse', msg => {
      this.collapse = msg;
    })
  }
}
</script>

<style scoped>

.sidebar {

  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;

}

.sidebar>ul {
  height: 100%;
}
</style>
