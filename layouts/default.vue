<template>
  <div>
    <NavigationBar />
    <hr />
    <div id="app-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavigationBar from '~/components/navigation-bar';

export default {
  components: { NavigationBar }
};
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font: 14px Helvetica;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 240px;
  max-width: 720px;
  margin: auto;
  font-weight: 300;
}

:focus {
  outline: 0;
}

#app-container {
  background: #fff;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.tabs-component-tabs {
  border: 0;
  align-items: stretch;
  display: flex;
  justify-content: flex-start;
  margin-bottom: -1px;
  padding: 0px;
  font-size: 20px;
}

.tabs-component-tab {
  list-style: none;
  background-color: #fff;
  border: solid 1px #ddd;
  border-radius: 3px 3px 0 0;
  margin-right: 2px;
  transform: translateY(2px);
  transition: transform 0.3s ease;
}

.tabs-component-tab.is-active {
  color: #000;
  border-bottom: solid 1px #fff;
  z-index: 2;
  transform: translateY(0);
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: 8px;
  text-decoration: none;
}

.tabs-component-panels {
  border-top-left-radius: 0;
  background-color: #fff;
  border: solid 1px #ddd;
  border-radius: 0 6px 6px 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

form {
  text-align: left;
}

input,
textarea {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  padding: 6px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

textarea {
  resize: none;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  font-weight: 300;
  color: #e6e6e6;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  font-weight: 300;
  color: #e6e6e6;
}

input::input-placeholder,
textarea::input-placeholder {
  font-weight: 300;
  color: #e6e6e6;
}

#submit-button {
  margin-top: 16px;
  margin-left: 60px;
}
</style>
