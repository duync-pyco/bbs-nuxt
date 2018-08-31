<template>
  <Modal>
    <div class="container">
      <h3 class="title">Please login to continue</h3>
      <Tabs :options="{ useUrlFragment: false }">
        <Tab id="auth/login" name="Login">
          <p>This is Login Page</p>
        </Tab>
        <Tab id="auth/register" name="Register">
          <p>This is Register Page</p>
        </Tab>
      </Tabs>
    </div>
  </Modal>
</template>

<script>
import { Tabs, Tab } from 'vue-tabs-component';
import Modal from '~/elements/modal';

export default {
  components: { Modal, Tabs, Tab }
};
</script>

<style scoped>
@import './index.css';
</style>

