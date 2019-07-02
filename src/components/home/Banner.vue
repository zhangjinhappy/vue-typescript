<template>
  <div class="banner">
    <div class="wrap-swiper">
      <swiper v-if="banner.length > 0" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in banner" :key="index">
          <img :src="item.img" :alt="item.url" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator'
  import 'swiper/dist/css/swiper.css';
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper';
   let that : Banner
  @Component({
    components: {
      swiper,
      swiperSlide
    }
  })
  export default class Banner extends Vue {
    private swiperOption: any = {
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      on:{
        tap(){
          const index = this.realIndex;
          that.$router.push(that.banner[index].url);
        }
      }
    }
    get banner(){
      return this.$store.state.homeBanner
    }
    public create(){
      that = this;
    }
  }
</script>
<style lang="less" scoped>
  .banner {
    .wrap-swiper {
      img {
        width: 100%;
        height: 180px;
      }
    }
  }
</style>
