<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" v-model="account" />
      <input type="submit" />
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
          this.$router.replace("/");
          this.addRoutes();
        })
        .catch(error => {
          alert(error.message)
        })
    },
    addRoutes() {
      this.$router.addRoutes([addRoutes.home])
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