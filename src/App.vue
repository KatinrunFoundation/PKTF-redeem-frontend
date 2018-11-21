<template>
  <div class="container is-fluid layout-default--container">
    <div class="column is-6 is-offset-3 layout-default--column">
      <Redeem/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Redeem from '@/components/Redeem.vue';

@Component({
  components: {
    Redeem,
  },
})
export default class App extends Vue {}
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
  padding: 30px 15px;
}
</style>
