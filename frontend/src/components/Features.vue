<template>
  <div class="logos">
    <img class="wails" src="../assets/images/wails.svg" alt="wails">
    <img class="vue" src="../assets/images/vue.svg" alt="vue">
  </div>
  <h3>Features</h3>
  <div class="links">
    <ul>
      <li><a class="link" @click="link('https://github.com/codydbentley/wails-vite-vue-the-works')">Template Github</a></li>
      <li><a class="link" @click="link('https://wails.io')">Wails Docs</a></li>
      <li><a class="link" @click="link('https://v3.vuejs.org/guide')">Vue Docs</a></li>
      <li><a class="link" @click="link('https://next.vuex.vuejs.org/')">Vuex Docs</a></li>
      <li><a class="link" @click="link('https://next.router.vuejs.org/guide/')">Vue Router Docs</a></li>
      <li><a class="link" @click="link('https://www.typescriptlang.org/docs/handbook/intro.html')">TypeScript Docs</a></li>
      <li><a class="link" @click="link('https://sass-lang.com/documentation')">Sass Docs</a></li>
      <li><a class="link" @click="link('https://eslint.org/docs/user-guide/configuring/')">ESLint Docs</a></li>
      <li><a class="link" @click="link('https://prettier.io/docs/en/')">Prettier Docs</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// This template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const link = (link: string) => {
  window.runtime.BrowserOpenURL(link)
}
</script>

<style lang="scss">
.logos {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50%;
  width: 100%;

  img.wails {
    max-width: 256px;
    max-height: 256px;
  }

  img.vue {
    max-width: 256px;
    max-height: 185px;
  }
}

.links {
  font-size: 20px;
}
</style>
