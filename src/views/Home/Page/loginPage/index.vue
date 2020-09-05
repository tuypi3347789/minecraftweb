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
                <button @click="view = 'register'" class="btn w-50 h-100 mr-4 pull-right border border-dark">
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
                <button @click="view = 'login'" class="btn w-50 h-100 mr-4 pull-right border border-dark">
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
              <label class="col-2 text-right">名字:</label>
              <div class="col-4">
                <input type="text" placeholder="請跟遊戲名字一樣" class="form-control h-100" v-model="group.playerName" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">UUID:</label>
              <div class="col-3">
                <input type="text" placeholder="請查詢" class="form-control h-100" v-model="group.uuid" />
              </div>
              <div class="col-1">
                <a :href="'https://namemc.com/profile/' + group.playerName" target="_blank">查詢</a>
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">帳號:</label>
              <div class="col-4">
                <input type="text" placeholder="最少需6個英數" @change="length(group.playerAccount)"
                  class="form-control h-100" v-model="group.playerAccount" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">密碼:</label>
              <div class="col-4">
                <input type="password" placeholder="最少需6個英數" @change="length(group.playerPassword)"
                  class="form-control h-100" v-model="group.playerPassword" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">密碼確認:</label>
              <div class="col-4">
                <input type="password" placeholder="請跟上方一樣" @change="length(password)"
                  class="form-control h-100" v-model="password"
                  :class="[ group.playerPassword !== password ? 'border-bottom border-danger' : '']" />
              </div>
            </div>
            <div class="row justify-content-center" style="line-height: 5vmin">
              <label class="col-2 text-right">電子郵件:</label>
              <div class="col-4">
                <input type="email" placeholder="忘記密碼可使用" class="form-control h-100" v-model="group.playerEmail"
                  @change="emaillChange(group.playerEmail)" />
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
      group: {
        playerAccount: '',
        playerPassword: '',
        uuid: '',
        playerEmail: '',
        playerName: '',
      },
      password: '',
      value: '',
      test: [
        {
          uuid: '1-2-3-4',
          name: 'test',
        }
      ]
    };
  },
  methods: {
    getHeight() {
      console.log(window.innerHeight);
      this.height = window.innerHeight ;
    },
    length(value) {
      const arr = value.split('');
      if (arr.length < 6) {
        alert('請檢查是否超過6個');
        return false;
      }
      return true;
    },
    register() {
      console.log(this.group);
      if (this.group.playerAccount !== '' && this.group.playerPassword !== ''
        && this.group.playerName !== '' && this.group.playerEmail !== '') {
          if (this.length(this.group.playerAccount) && this.length(this.group.playerPassword)) {
            axios({
              method: 'post',
              baseURL: 'https://localhost:5001',
              url: '/api/Player/register',
              headers: {
                'Content-Type': 'application/json',
              },
              data: this.group,
            })
              .then((result) => { 
                console.log(result);
                if (result.data === 1) {
                  alert('申請失敗，名字已被使用過!!');
                }
                if (result.data === 2) {
                  alert('申請失敗，電子郵件已申請過!!');
                }
                if (result.data === 3) {
                  alert('申請成功');
                }
              })
              .catch((err) => { console.error(err) })
          }
        } else {
          alert('欄位不得為空');
        }
    },
    emaillChange(value) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      if (!re.test(value)) {
        this.group.playerEmail = '';
        alert('電子郵件格式不正確');
      }
    },
    goHome() {
      this.$router.go("Home");
    },
  },
  mounted() {
    this.getHeight();
    console.log(JSON.stringify(this.test));
    
  },
};
</script>
<style>
.loginPage .loginDiv {
  padding-top: 4vmin;
  padding-bottom: 4vmin;
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
  font-size: 2vmin;
  border-radius: 0;
}
.loginPage {
  background: url("../../../../assets/png/login.jpg") no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
