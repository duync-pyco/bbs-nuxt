<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <slot>
            Default Slot
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import './index.css';
</style>
