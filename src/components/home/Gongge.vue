<template>
    <div class="category">
        <div class="cate-head">
            <span>热销分类</span>
        </div>
        <div class="cate clearfix">
            <div class="cate-item pull-left tc" v-for="(item, index) in list" :key="index" @click="toList(item.id)">
                <img :src="item.img" :alt="item.title"/>
                <p class="title">{{ item.title }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {
        Component,
        Prop,
        Vue
    } from 'vue-property-decorator'
    @Component({})
    export default class Gongge extends Vue {
        get list() {
            return this.$store.state.list
        }
       private toList(id:string) {
          this.$router.push({path: '/list',query:{Lid:id}}) 
       }
    }
</script>
<style lang="less" scoped>
    .cate-head {
        height: 20px;
        font-size: 18px;
        line-height: 20px;
        padding: 20px 10px 10px;
        span {
            display: block;
            height: 20px;
            border-left: 2px solid #ff5a0c;
            padding-left: 5px;
        }
    }
    .cate {
        padding: 10px 0;
        border-bottom: 1px solid #f6f6f6;
        .cate-item {
            width: 25%;
            padding: 10px 0;
            img {
                width: 50%;
            }
            .price {
                font-size: 12px;
                height: 20px;
                line-height: 20px;
                color: rgb(163, 69, 69);
            }
            .title {
                font-size: 14px;
                height: 24px;
                line-height: 24px;
                color: #666;
            }
        }
    }
</style>
