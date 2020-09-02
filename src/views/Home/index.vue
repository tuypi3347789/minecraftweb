<template>
  <div id="app" class="bg-white">
    <div class="container-fluid bg-dark sticky-top">
      <headers></headers>
    </div>
    <div class="container-fluid bg-white">
      <components
        :is="view"
        :key="view"
        ></components>
    </div>
    <div class="container-fluid bg-white">
			<footers></footers>
    </div>
  </div>
</template>

<script>
import footers from '@/views/Home/Layout/footer/index.vue';
import headers from '@/views/Home/Layout/header/index.vue';

import Home from '@/views/Home/Page/homePage/index.vue';

export default {
  name: 'App',
  components: {
    footers,
    headers,
    Home,
  },
  data() {
    return {
			view: '',
    };
  },
  methods: {
    getView() {
      this.view = this.$route.name;
    },
  },
  mounted() {
    this.getView();
  },
};

</script>
<style>
</style>
