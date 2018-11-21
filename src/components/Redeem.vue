<template>
  <div class="redeem-container">
    <img src="@/assets/KTR.png" class="logo-ktr">
    <div class="input-box">
      <input
        class="input input-code is-success"
        type="text"
        placeholder="1a2b3-c4d5e"
        v-model="inputCode"
        @keyup.enter="redeem()">
    </div>
    <div class="item-box to-addr-label">
      to address
    </div>
    <div class="item-box addrss-box">
      {{ '0xDE3CE563D80a671992622A408327CB7727173328' | shortaddress }}
    </div>
    <div class="btn-box">
      <div class="button is-rounded redeem-btn" @click="redeem()">
        REDEEM
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Redeem extends Vue {
  private inputCode = '';

  private redeem() {
    this.$emit('redeem', this.inputCode);
    this.inputCode = '';
  }
}
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
  width: 80px;
  margin-left: -40px;
  margin-top: -40px;
}
.input-box {
  float: left;
  width: 100%;
  margin-top: 25px;
}
.item-box {
  float: left;
  width: 100%;
  margin-top: 15px;
}
.btn-box {
  float: left;
  width: 100%;
  margin-top: 20px;
  text-align: center;
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
.redeem-btn {
  background-color: #306D37;
  color: #fff;
  border: 0;
  width: 70%;
}
.redeem-btn:hover {
  color: #fff;
}
</style>

