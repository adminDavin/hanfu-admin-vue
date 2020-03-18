<template>
<div class="container">
  <!-- 卡片 element-ui 组件 -->
  <div class="container1">
    <el-card class="th-card">
      <div class="block">
        <el-avatar shape="square" :size="100" :src="squareUrl"></el-avatar>
        <p>后台名称</p>
        <p>商家后台管理系统</p>
      </div>
    </el-card>
    <el-card class="my-card">
      <div class="form">
        <div style="margin:40px 0">
          <h1 style="margin:0">欢 迎 登 陆</h1>
          <p style="margin:4px 0">Welcome back</p>
        </div>

      </div>

    </el-card>
  </div>
</div>
</template>
<style lang="less" scoped>
.container {
  padding: 0;
  margin: 0;
  background: url(~@/assets/images/bj.png) no-repeat center / cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  .th-card {
    position: relative;
    background: url(~@/assets/images/bj2.png) no-repeat center / cover;
    width: 800px;
    height: 700px;

    .block {
      text-align: center;
      height: 150px;
      width: 150px;
      position: absolute;
      left: 0;
      right: 0;
      top: -260px;
      bottom: 0;
      margin: auto;

      p {
        width: 160px;
        height: 34px;
        font-size: 20px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  .my-card {
    position: relative;
    width: 800px;
    height: 700px;

    .form {
      width: 400px;
      height: 400px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      text-align: center;
    }

    img {
      width: 200px;
      display: block;
      margin: 0 auto 20px;
    }
  }

  .container1 {
    display: flex;
    width: 1600px;
    height: 700px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
