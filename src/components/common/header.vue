<template>
    <div class="header" style="background:#A6A3FB;">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <!-- <i class="el-icon-menu"></i> -->
        </div>
        <div class="logo" style="margin-left:50px;">后台管理系统</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
              <!--  <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div> -->
                <!-- 用户头像 -->
                <!-- <div class="user-avator"><img src="/api/goods/getFile?fileId=3"></div> -->
                <!-- 用户名下拉菜单 -->
                <!-- <i class="el-icon-edit"><span style="font-size:22px;margin-left:10px;">dasds</span></i> -->


                        <i class="el-icon-search" style="margin-right: 10px;color: #CCCCCC;cursor: pointer;margin-top:6px;"></i>
                        <el-dropdown trigger="click" @command="handleCommand">
                         <div style="cursor: pointer;">
                         <img src="../img/8.png">
                         </div>
                        <el-dropdown-menu slot="dropdown" style="width:300px;">
                           <el-dropdown-item>
                           <img style="width: 40px;height: 40px;float: left;" src="../img/6.jpg">
                           <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div><br>
                           <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                           <div style="float: right;margin-top: -40px;">明晚14:20</div>
                           </el-dropdown-item>
                           <br>
                           <el-dropdown-item divided>
                           <img style="width: 40px;height: 40px;float: left;" src="../img/6.jpg">
                           <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div><br>
                           <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                           <div style="float: right;margin-top: -40px;">明晚14:20</div>
                           </el-dropdown-item>
                           <br>
                           <el-dropdown-item divided>
                           <img style="width: 40px;height: 40px;float: left;" src="../img/6.jpg">
                           <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div><br>
                           <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                           <div style="float: right;margin-top: -40px;">明晚14:20</div>
                           </el-dropdown-item>
                           <br>
                           <el-dropdown-item divided>
                           <img style="width: 40px;height: 40px;float: left;" src="../img/6.jpg">
                           <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div><br>
                           <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                           <div style="float: right;margin-top: -40px;">明晚14:20</div>
                           </el-dropdown-item>
                           <br>
                           <el-dropdown-item divided>
                           <img style="width: 40px;height: 40px;float: left;" src="../img/6.jpg">
                           <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div><br>
                           <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                           <div style="float: right;margin-top: -40px;">明晚14:20</div>
                           </el-dropdown-item>
                           </el-dropdown-menu>

                         </el-dropdown>


                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link" style="float: left;margin-top:10px;">
                        {{'用户昵称'}} <i class="el-icon-caret-bottom"></i>
                    </span>


                    <div class="user-avator" style="float: left;cursor: pointer;"><img src="../img/6.jpg"></div>


                    <el-dropdown-menu slot="dropdown"   style="margin-left:-100px;">
                       <a href="https://github.com/adminDavin" target="_blank">
                            <el-dropdown-item>用户昵称</el-dropdown-item>
                            <el-dropdown-item>13837774547</el-dropdown-item>
                        </a>
                        <a href="https://github.com/adminDavin/hanfu-admin-vue" target="_blank">
                            <el-dropdown-item divided >账号设置</el-dropdown-item>
                        </a>
                        <a href="https://github.com/adminDavin/hanfu-admin-vue" target="_blank">
                            <el-dropdown-item >反馈</el-dropdown-item>
                        </a>
                        <a href="https://github.com/adminDavin/hanfu-admin-vue" target="_blank">
                            <el-dropdown-item >官网</el-dropdown-item>
                        </a>
                        <el-dropdown-item command="loginout">切换账号</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    import hanfuBus from './hanfu-bus';
    export default {
        data() {
            return {
                collapse: false,
                fullscreen: false,
                name: 'merciqiao',

                message: 2
            }
        },
        computed:{
            username(){
                let username = this.$common.getSessionStorage('username');
                return username ? username : this.name;
            },
            getlev(){

                let levList = this.$common.getSessionStorage('lev',true);
                let lev='';
                if(levList){
                    for(var i=0;i<levList.length;i++){
                        lev+=levList[i].roleName;
                    }
                }

                return lev ? lev : this.lev;
            }
        },
        methods:{
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                    this.$common.removeSessionStorage('token');
                    this.$router.push('/hf-user/Login1');
                }
            },
            // 侧边栏折叠
            collapseChage(){
                this.collapse = !this.collapse;
                hanfuBus.$emit('collapse', this.collapse);
            },
            // 全屏事件
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        },
        mounted(){
            if(document.body.clientWidth < 1366){
                this.collapseChage();
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
    }
    .collapse-btn{
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }
    .header .logo{
        float: left;
        width:250px;
        line-height: 70px;
    }
    .header-right{
        float: right;
        padding-right: 50px;
    }
    .header-user-con{
        display: flex;
        height: 70px;
        align-items: center;
    }
    .btn-fullscreen{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }
    .btn-bell, .btn-fullscreen{
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }
    .btn-bell-badge{
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-name{
        margin-left: 10px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
