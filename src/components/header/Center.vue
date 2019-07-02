<template>
  <div class="center">
   <ul class="center-top">
       <li :class="[num==item.id?'active':'']" v-for="item in list" :key="item.id" @click="change(item.id)">{{item.message}}</li>
      
   </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({})
export default class Center extends Vue {
  private num: string | string[] = '';
   get list(){
         return this.$store.state.listData;
   }
   private change(id:string){
     this.num = id 
   }
  
}
</script>
<style lang="less" scoped>
.center{
  width: 100%;
  height: 50px;
  background: linear-gradient(45deg,#FF2B77,#FF2D6C,#FD3537,#FB3636); 
 .center-top  {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  li {
      color:#fff;
      height: 100%;
      line-height: 50px;
     }
  .active{
       font-size: 16px;
       border-bottom: 1px solid #ffffff;
     }
  } 
}

</style>
