<template>
  <div class="home">
     <headerTop />
     <headerCenter/>
     <homeIndex/>
     <footerbar/>
  </div>
</template>

<script lang="ts">
import { Component, Mixins} from 'vue-property-decorator';
import headerTop from '@/components/header/Header.vue';
import headerCenter from '@/components/header/Center.vue';
import homeIndex from '@/components/home/index.vue'
import footerbar from "@/components/layout/Footer.vue"
import MyMixin from '@/global/mixin';

@Component({
  components: {
    headerCenter,
    headerTop,
    homeIndex,
    footerbar
  }
})
export default class Home extends Mixins(MyMixin) {
  public created() {
     this.$store.dispatch('initHomePage');
  }
}
</script>
<style lang="less" scoped>
.home{
  padding-bottom: 25px;
}
</style>

