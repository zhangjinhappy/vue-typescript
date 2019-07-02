<template>
    <div class="footerbar">
        <ul class="flex-box tc bot">
            <li>
                <div :class="(page == 'home' ? 'active ' : '') + 'link'" @click="toUrl('home')"><span :class="(page == 'home' ? 'icon-home-active ' : 'icon-home')"></span><h1>首页</h1></div>
            </li>
            <li class="bol">
                  <div :class="(page == 'cart' ? 'active ' : '') + 'link'" @click="toUrl('cart')"><span :class="(page == 'cart' ? 'icon-gouwuche-active ' : 'icon-gouwuche')"></span><h1>购物车</h1></div>
            </li>
            <li class="bol">
                 <div :class="(page == 'message' ? 'active ' : '') + 'link'" @click="toUrl('message')"><span :class="(page == 'message' ? 'icon-user-active ' : 'icon-user')"></span><h1>信息中心</h1></div>
            </li>
             <li class="bol">
                <div :class="(page == 'mine' ? 'active ' : '') + 'link'" @click="toUrl('mine')"><span :class="(page == 'mine' ? 'icon-user-active ' : 'icon-user')"></span><h1>个人中心</h1></div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
    import {
        Component,
        Prop,
        Vue
    } from 'vue-property-decorator'
    @Component({})
    export default class Footer extends Vue {
        private page: string = ''
        public created() {
            this.page = this.$route.name || 'home';
        }
        private toUrl(name: string) {
            this.$router.push({
                name
            })
        }
    }
</script>
<style lang="less" scoped>
    .footerbar {
        height: 48px;
        width: 100%;
        position: fixed;
        background-color: #fff;
        left: 0;
        z-index: 2;
        bottom: 0;
        .link {
            font-size: 12px;
            height: 100%;
            display: block;
            &.active {
                color: #ff5a0c;
            }
            span {
                height: 20px;
                display: inline-block;
                line-height: 22px;
                padding-left: 20px;
                background-position-x: left;
            }
            h1{
                font-weight: 400
            }
        }
        .bot {
            border-top: 1px solid #f2f4f6;
        }
        .bol {
            border-left: 1px solid #f2f4f6;
        }
    }
</style>
