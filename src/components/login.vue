<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" v-model="account" />
      <input class="px-btn" type="submit" value="登 陆"/>
      <p>* 输入admin</p>
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
  form {
    height: 100%;
    font-size: srem(18);
    @include center;
    flex-flow: column;
    input {
      margin: srem(10) 0;
      border-radius: px(5);
      border: 1px solid rgb(185, 172, 172);
      text-align: center;
    }
    .px-btn {
      background: none;
      border-radius: 5px;
      padding: px(5);
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