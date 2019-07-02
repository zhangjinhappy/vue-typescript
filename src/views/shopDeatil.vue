<template>
  <div class="list">
      <Content/>
      <Footer/>
  </div>
</template>
<script lang="ts">
    import {
        Component,
        Prop,
        Vue
    } from 'vue-property-decorator'
    import Content from '@/components/shopDetail/index.vue'
    import Footer from '@/components/shopDetail/footer.vue'
    @Component({
        components:{
           Content,
           Footer
        }
    })
    export default class ShopDeatil extends Vue {
        /**
         * create
         */
        public created() {
            const gid = this.$route.query.gid
            this.$store.dispatch('interShopDeatil' , gid)
        }
    }
</script>
<style lang="less" scoped>

</style>