<template>
    <div id="content"  @scroll="scroll" ref="content">
      <Banner/>
      <Info/>
      <Content :scrollTop="scrollTop"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Banner from './banner.vue'
import Content from './content.vue'
import Info from './Info.vue'
@Component({
    components:{
      Banner,
      Info,
      Content  
    }
})
export default class Center extends Vue {
   private scrollTop :number = 0 ;
   private scroll() {
       this.scrollTop = this.$refs.content.scrollTop;
   }
  
}
</script>
<style scoped>
#content{
  top: 0;
  bottom: 42px;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 1;
  overflow: auto;
}
</style>
