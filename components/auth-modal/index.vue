<template>
  <Modal>
    <div class="container">
      <h3 class="title">Please login to continue.</h3>
      <Tabs :options="{ useUrlFragment: false }" @changed="handleTabChange">
        <Tab id="auth/login" name="Login">
          <div class="form-container">
            <AuthForm :isLogin="true" @submit="handleLogin"/>
          </div>
        </Tab>
        <Tab id="auth/register" name="Register">
          <div class="form-container">
            <AuthForm :isLogin="false" @submit="handleRegister"/>
          </div>
        </Tab>
      </Tabs>
    </div>
  </Modal>
</template>

<script>
import { Tabs, Tab } from 'vue-tabs-component';

import AuthForm from '~/components/auth-form';
import Modal from '~/elements/modal';

export default {
  components: { Modal, Tabs, Tab, AuthForm }
};
</script>

<style scoped>
@import './index.css';
</style>

