<template>
  <div id="app">
    <router-view />
    123test
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {
  },
  methods: {
    get() {
      axios.get('https://localhost:44329/api/Users')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, 'error');
      });
    },
  },
  mounted() {
    this.get();
  },
}
</script>

<style>
@font-face {
  font-family: CustonFont;
  src: url(assets/fonts/Source_Code_Pro/SourceCodePro-Light.ttf);
}
#app {
  font-family: CustonFont, Microsoft JhengHei;
  font-size: 2vmin;
}
span {
  font-size: 2vmin;
}
</style>
