<template>
  <div class="container is-fluid layout-default--container">
    <vue-element-loading :active="isLoading" is-full-screen/>
    <div class="column is-6 is-offset-3 layout-default--column">
      <Redeem @redeem="redeem"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Redeem from '@/components/Redeem.vue';

// Import JS file to TS.
const VueElementLoading = require('vue-element-loading');

@Component({
  components: {
    Redeem,
    VueElementLoading,
  },
})
export default class App extends Vue {
  private isLoading = false;

  private redeem(code: string) {
    this.isLoading = true
  }
}
</script>

<style>
body {
  background-color: #f6f7f7;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}
</style>

<style scoped>
.layout-default--container {
  padding: 40px 15px;
}
</style>
