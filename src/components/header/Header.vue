<template>
  <div class="hello">
      <div class="sao" @click="sao">
        <span class="iconfont">&#xe618;</span>
        <h1 class="a">扫一扫</h1>
      </div>
        <input type="search" placeholder="电脑包男&nbsp;上简报" name="name" id="search">
      <div class="cat" @click="cat">
        <span class="iconfont">&#xe601;</span>
        <h1 class="a">合作猫</h1>
      </div>
      <div class="ma" @click="ma">
        <span class="iconfont">&#xe6b5;</span>
        <h1 class="a">会员码</h1>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
  private sao(){
    alert("拍照了")
  }
  private cat(){
    alert("合作猫")
  }
  private ma(){
    alert("会员码")
  }
}
</script>
<style lang="less" scoped>
 .hello  {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(45deg,#FF2B77,#FF2D6C,#FD3537,#FB3636); 
  input {
     width: 65%;
    //  margin-top: 8px;
     border-radius: 40px;
     height: 35px;
     padding-left: 10px;
     font-size: 16px;
  }
  .sao{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    h1 {
       font-size: 12px;
       color:#F8FFFB;
     }
    .iconfont{
      color:#F8FFFB;
     }
  }
  .cat{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    h1{
      font-size: 12px;
      color:#F8FFFB;
     }
    .iconfont{
      color:#F8FFFB;
     }
  }
  .ma{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    h1{
      font-size: 12px;
      color:#F8FFFB;
    }
     .iconfont{
      color:#F8FFFB;
     }
  }
} 
</style>
