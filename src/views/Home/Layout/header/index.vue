<template>
  <div class="headers text-white">
    <div class="row">
      <div class="col-2">
        穿梭logo
      </div>
      <div class="col text-center">
        TAB
      </div>
      <div class="col-3 text-right">
        <router-link to="login" class="text-white">登入/註冊</router-link> |
        <router-link to="" class="text-white">登出</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'headers',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
