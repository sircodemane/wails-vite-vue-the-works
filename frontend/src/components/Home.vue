<template>
  <div class="logos">
    <img class="wails" src="../assets/images/wails.svg" alt="wails">
    <img class="vue" src="../assets/images/vue.svg" alt="vue">
  </div>
  <h3>Home</h3>
  <div class="result" id="result">{{ result }}</div>
  <div class="input-box" id="input" data-wails-no-drag>
    <input class="input" v-model="name" type="text" autocomplete="off">
    <button class="btn" @click="greet()">Greet</button>
  </div>
</template>

<script setup lang="ts">
// This template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'
import { useStore } from '../store'

const store = useStore()
const result = ref("Please enter your name below 👇")
const name = ref("")

const greet = () => {
  window.go.main.App.Greet(name.value).then(response => {
    store.commit('increment')
    result.value = `${store.state.count}. ${response}`
  })
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

.result {
  height: 20px;
  line-height: 20px;
  margin: 1.5rem auto;
}

.input-box {
  .btn {
    width: 60px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    border: none;
    margin: 0 0 0 20px;
    padding: 0 8px;
    cursor: pointer;

    &:hover {
      background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
      color: #333333;
    }
  }

  .input {
    border: none;
    border-radius: 3px;
    outline: none;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background-color: rgba(240, 240, 240, 1);
    -webkit-font-smoothing: antialiased;

    &:hover {
      border: none;
      background-color: rgba(255, 255, 255, 1);
    }

    &:focus {
      border: none;
      background-color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
