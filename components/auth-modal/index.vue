<template>
  <Modal>
    <div class="container">
      <Tabs :options="{ useUrlFragment: false }">
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
import { mapActions } from 'vuex';
import { Tabs, Tab } from 'vue-tabs-component';

import { ACTIONS } from '~/store/modules/auth/constants';
import AuthForm from '~/components/auth-form';
import Modal from '~/elements/modal';

export default {
  components: { Modal, Tabs, Tab, AuthForm },
  methods: {
    async handleLogin({ email, password }) {
      await this.login({ email, password });
    },
    async handleRegister({ email, password }) {
      await this.register({ email, password });
    },
    ...mapActions({
      register: ACTIONS.REGISTER,
      login: ACTIONS.LOGIN
    })
  }
};
</script>

<style scoped>
@import './index.css';
</style>

