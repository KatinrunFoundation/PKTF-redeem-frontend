<template>
  <div class="redeem-container">
    <img src="@/assets/KTR.png" class="logo-ktr">
    <div class="item-box">
      <input class="input input-code is-success" type="text" placeholder="1a2b3-c4d5e">
    </div>
    <div class="item-box to-addr-label">
      to address
    </div>
    <div class="item-box addrss-box">
      {{ '0xDE3CE563D80a671992622A408327CB7727173328' }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Redeem from '@/components/Redeem.vue';

@Component
export default class App extends Vue {}
</script>

<style scoped>
.redeem-container {
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: -2px 2px 5px 0px #ccc;
  float: left;
  width: 100%;
  position: relative;
}
.logo-ktr {
  border-radius: 50%;
  border: 3px solid #f6f7f7;
  position: absolute;
  left: 50%;
  top: 0;
  width: 50px;
  margin-left: -25px;
  margin-top: -25px;
}
.item-box {
  float: left;
  width: 100%;
  margin-top: 10px;
}
.input-code {
  text-align: center;
}
.to-addr-label {
  text-align: center;
  font-size: 12px;
  color: #9a9a9a;
}
.addrss-box {
  text-align: center;
}
</style>

