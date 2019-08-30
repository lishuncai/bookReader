<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" v-model="account" />
      <input class="btn" type="submit" value="登 陆"/>
      <p>输入admin</p>
    </form>
  </div>
</template>

<script>
import addRoutes from '@/router/addRoutes.js'
export default {
  name: "",
  data() {
    return {
      account: ""
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('login', {
        account: this.account
      })
        .then(data => {
          sessionStorage.setItem('logined', true)
          alert(data)
          this.addRoutes();
          this.$router.replace("/");
        })
        .catch(error => {
          alert(error.message)
        })
    },
    addRoutes() {
      this.$router.addRoutes([addRoutes.book])
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.scss';
  form {
    height: 100%;
    font-size: srem(18);
    @include center;
    flex-flow: column;
    input {
      margin: srem(10) 0;
      border-radius: 5px;
      border: 1px solid #aaa;
      text-align: center;
    }
    .btn {
      background: none;
      border-radius: 5px;
      padding: 5px;
      border: 1px solid #aaa;
      background-color: #cfcfcf;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #aabbcc;
      }
      &:active {
        background-color: #90aecd;
      }
    }
  }
</style>