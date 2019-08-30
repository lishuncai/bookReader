<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" v-model="account" />
      <input type="submit" />
    </form>
    <p>输入admin</p>
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
    font-size: srem(24);
  }
</style>