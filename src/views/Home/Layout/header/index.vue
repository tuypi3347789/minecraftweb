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
        <router-link :to="login.path" class="text-white">{{login.name}}</router-link> |
        <a class="text-white" href="#" @click="logout">登出</a>
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
      login: {
        path: '',
        name: '',
      },
    };
  },
  methods: {
    loginOrAc() {
      if (this.$store.state.login.token && this.$store.state.login.name
        && localStorage.getItem('token') && localStorage.getItem('name')) {
        console.log(123);
        this.login.path = 'myinformation';
        this.login.name = this.$store.state.login.name;
      } else {
        this.login.path = 'login';
        this.login.name = '登入/註冊';
      }
    },
    logout() {
      localStorage.clear();
      this.$router.go(0);
      alert('登出中。。。。');
    },
  },
  mounted() {
    this.loginOrAc();
  },
};
</script>
