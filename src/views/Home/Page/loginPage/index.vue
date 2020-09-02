<template>
  <div class="loginPage container-fluid">
		<div class="row align-items-center justify-content-center"
       :style="'height:' + this.height + 'px'"
       style="max-width: 1300px;">
      <div class="col-8 text-center">
        <div class="border border-dark loginDiv bg-white">
          <div v-if="view === 'login'">
            <div class="row justify-content-end text-right">
              <div class="col ml-3 justify-content-start text-left">
                <router-link to="Home" class="text-dark">
                  <b-icon icon="arrow-left-square-fill"
                    font-scale="3"></b-icon>
                </router-link>
              </div>
              <div class="col-5">
                <button @click="view = 'register'" class="btn w-50 h-100 mr-2 pull-right border border-dark">
                  <span>註冊</span>
                </button>
              </div>
            </div>
            <div class="row justify-content-center text-left" style="margin-bottom: 5vmin;">
              <div class="col-6 border-bottom border-dark">
                <h1>Login</h1>
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">帳號:</label>
              <div class="col-4">
                <input type="text" class="form-control h-100" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">密碼:</label>
              <div class="col-4">
                <input type="text" class="form-control h-100" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">驗證碼:</label>
              <div class="col-4">
                <input type="text" class="form-control h-100" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 7vmin">
              <div class="col-7">
                <button @click="register()" class="w-100 btn bg-dark text-white h-100">
                  <span>登入</span>
                </button>
              </div>
            </div>
          </div>
          <div v-if="view === 'register'">
            <div class="row justify-content-end text-right">
              <div class="col ml-3 justify-content-start text-left">
                <router-link to="" class="text-dark">
                  <b-icon icon="arrow-left-square-fill"
                    font-scale="3"></b-icon>
                </router-link>
              </div>
              <div class="col-5">
                <button @click="view = 'login'" class="btn w-50 h-100 mr-2 pull-right border border-dark">
                  <span>登入</span>
                </button>
              </div>
            </div>
            <div class="row justify-content-center text-left" style="margin-bottom: 5vmin;">
              <div class="col-6 border-bottom border-dark">
                <h1>register</h1>
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">帳號:</label>
              <div class="col-4">
                <input type="text" class="form-control h-100" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">密碼:</label>
              <div class="col-4">
                <input type="text" class="form-control h-100" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">密碼確認:</label>
              <div class="col-4">
                <input type="text" class="form-control h-100" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">電子郵件:</label>
              <div class="col-4">
                <input type="text" class="form-control h-100" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">驗證碼:</label>
              <div class="col-4">
                <input type="text" class="form-control h-100" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 7vmin">
              <div class="col-7">
                <button @click="register()" class="w-100 btn bg-dark text-white h-100">
                  <span>註冊</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'loginPage',
  components: { 
  },
  data() {
    return {
      height: '',
      view: 'login',
      array: [
        {
          Id: 1,
          playerName: 'test123',
          playerEmail: 'test@gmail.com',
          playerAccount: 'root',
          playerPassword: 'abc123',
        },
      ],
      value: '',
    };
  },
  methods: {
    getHeight() {
      console.log(window.innerHeight);
      this.height = window.innerHeight ;
    },
    register() {
      axios({
        method: 'post',
        baseURL: 'https://localhost:5001',
        url: '/api/Player/register',
        headers: {
          'Content-Type': 'application/json',
        },
        data: this.array[0],
      })
        .then((result) => { console.log(result.data) })
        .catch((err) => { console.error(err) })
    },
    goHome() {
      this.$router.go("Home");
    },
  },
  mounted() {
    this.getHeight();
    
  },
};
</script>
<style>
.loginPage .loginDiv {
  padding-top: 5vmin;
  padding-bottom: 5vmin;
  box-shadow: 1vmin 1vmin 1vmin #333;
  z-index: 9999;
  width: 100%;
}
.loginPage .loginDiv .row {
  margin-top: 1vmin;
  margin-bottom: 1vmin;
}
.loginDiv input {
  border:0;
  border-bottom: .2vmin solid #777;
  font-size: 3vmin;
  border-radius: 0;
}
.loginPage {
  background: url("../../../../assets/png/login.jpg") no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
