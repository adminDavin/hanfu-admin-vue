<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <div class="content_wrapper">
                <v-tags></v-tags>
                <div class="content" style="flex:1;">
                    <div class="content_inner">
                        <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                    </div>
                    
                </div>
                <v-footer></v-footer>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content_wrapper{
       display: flex;
       flex-direction: column;
       height:100%;
    //    .content_inner{
    //        background: #fff;
    //        height: 100%;
    //    }
    }
    
</style>

<script>
import vHead from '@/components/common/header.vue';
import vSidebar from '@/components/common/sidebar.vue';
import vTags from '@/components/common/tags.vue';
import vFooter from '@/components/common/footer.vue';
import hanfuBus from '@/components/common/hanfu-bus';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        }
    },
    components: {
        vHead, vSidebar, vTags, vFooter
    },
    created() {
        hanfuBus.$on('collapse', msg => {
            this.collapse = msg;
        })

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        hanfuBus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        })
    }
}
</script>
