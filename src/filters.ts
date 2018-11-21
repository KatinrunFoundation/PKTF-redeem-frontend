import Vue from 'vue';

Vue.filter('shortaddress', (addr: string) => {
  return `${addr.substr(0, 7)}...${addr.substr(addr.length - 5, addr.length)}`;
});
