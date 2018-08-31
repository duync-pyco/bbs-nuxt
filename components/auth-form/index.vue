<template>
  <form @submit.prevent="handleFormSubmit">
    <input
      name="email"
      placeholder="email"
      v-model="credentials.email"
      v-validate="'required|email'"
      @keyup="handleTextChange"
    />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="credentials.password"
      v-validate="'required'"
      ref="password"
      @keyup="handleTextChange"
    />
    <input
      v-if="!isLogin"
      type="password"
      name="password-confirmation"
      placeholder="confirm password"
      v-model="credentials.passwordConfirmation"
      v-validate="'required|confirmed:password'"
      @keyup="handleTextChange"
    />
    <div class="error-container" v-show="errors.any() && this.submitted">
      <span v-if="errors.has('email')">{{ errors.first('email') }}</span>
      <span v-else-if="errors.has('password')">{{ errors.first('password') }}</span>
      <span v-else-if="errors.has('password-confirmation')">{{ errors.first('password-confirmation') }}</span>
    </div>
    <div>
      <Button v-if="isLogin" class="button">Let me in</Button>
      <Button v-else class="button">Sign me up</Button>
      <Button type="button" @click="handleCancelClick" class="button">Cancel</Button>
    </div>
  </form>
</template>

<script>
import Button from '~/elements/button';

const emptyCredentials = {
  email: '',
  password: '',
  passwordConfirmation: ''
};

export default {
  props: {
    isLogin: {
      type: Boolean,
      default: true
    }
  },
  components: { Button },
  data() {
    return {
      credentials: { ...emptyCredentials },
      submitted: false
    };
  },
  methods: {
    async handleFormSubmit() {
      this.submitted = true;
      await this.$validator.validateAll();
      if (!this.errors.any()) {
        this.credentials = { ...emptyCredentials };
        this.$emit('submit', { ...this.credentials });
        this.submitted = false;
      }
    },
    handleTextChange() {
      this.submitted = false;
    },
    handleCancelClick(e) {
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>
@import './index.css';
</style>

