<script setup lang="ts">
const loginForm = reactive({
  username: '',
  password: ''
})
const loginRules = reactive({
  username: [{}],
  password: [{}]
})
</script>

<template>
  <div class="login-view">
    <a-form :model="loginForm" :rules="loginRules" class="login-form">
      <h2 class="title">登录</h2>
      <a-form-item label="账号" name="username">
        <a-input v-model:value="loginForm.username" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input v-model:value="loginForm.password" placeholder="请输入密码" />
      </a-form-item>
      <a-form-item style="width: 100%">
        <a-button style="width: 100%" type="primary" html-type="submit">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="less" scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url('../../assets/images/login-background.jpg');
  background-size: cover;

  .title {
    margin: 0 auto 30px auto;
    text-align: center;
    color: #707070;
  }

  .login-form {
    border-radius: 6px;
    background: #fff;
    width: 400px;
    padding: 25px 25px 5px 25px;
  }
}
</style>
