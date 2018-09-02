<template>
  <Modal>
    <div class="container">
      <Tabs :options="{ useUrlFragment: false }">
        <Tab id="auth/login" name="Login">
          <div class="form-container">
            <AuthForm ref="loginForm" :isLogin="true" @submit="handleLogin" @cancel="toggleModal(false)"/>
          </div>
        </Tab>
        <Tab id="auth/register" name="Register">
          <div class="form-container">
            <AuthForm ref="registerForm" :isLogin="false" @submit="handleRegister" @cancel="toggleModal(false)"/>
          </div>
        </Tab>
      </Tabs>
    </div>
  </Modal>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import { Tabs, Tab } from 'vue-tabs-component';

import { MUTATIONS, ACTIONS } from '~/store/modules/auth/constants';
import AuthForm from '~/components/auth-form';
import Modal from '~/elements/modal';

export default {
  components: { Modal, Tabs, Tab, AuthForm },
  methods: {
    async handleLogin({ email, password }) {
      await this.login({ email, password });
      // this.$refs.loginForm.clearForm();
    },
    async handleRegister({ email, password }) {
      await this.register({ email, password });
      // this.$refs.registerForm.clearForm();
    },
    ...mapActions({
      register: ACTIONS.REGISTER,
      login: ACTIONS.LOGIN
    }),
    ...mapMutations({
      toggleModal: MUTATIONS.TOGGLE_MODAL
    })
  }
};
</script>

<style scoped>
@import './index.css';
</style>

