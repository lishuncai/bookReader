<template>
  <div class="items" @click="linkArticle">
    <div class="context">
      <div class="title">{{title}}</div>
      <div
        class="ellicps"
      >........................................................................................................................................................................................</div>
    </div>
    <div class="page-index">第 {{pageIndex}} 页</div>
  </div>
</template>

<script>
export default {
  name: "containItem",
  props: {
    pageIndex: Number,
    title: String
  },
  data() {
    return {};
  },
  methods: {
    closeContains() {
      this.$emit('closeContains')
    },
    linkArticle() {
      this.closeContains()
      this.$router.push({path: `/book/home/${this.title}`})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
.items {
  font-size: srem(12);
  display: flex;
  justify-content: flex-start;
  margin: srem(20) srem(10);
  cursor: pointer;
  .context {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    .title {
      flex: 0 0 auto;
      max-width: 80%;
    }
    .ellicps {
      display: flex;
      align-items: flex-end;
      padding: 0 srem(4);
      flex: 1;
      text-overflow: clip;
    }
  }
  .page-index {
    flex: 0 0 auto;
    display: flex;
    align-items: flex-end;
  }
}
</style>