<template>
    <div class="content">
        <div id="header" :style="opacity">
            <ul class="flex-box align-top">
                <li class="tl">
                    <span class="icon-back" @click="back"></span>
                </li>
                <li class="flex-item-6">
                    <ul class="flex-box align-top tab-head tc" :style="opacityMenu">
                        <li>
                            <span :class="{ active: tabIndex === 0 }" @click="tabChecked(0)">宝贝</span>
                        </li>
                        <li>
                            <span :class="{ active: tabIndex === 1 }" @click="tabChecked(1)">评论</span>
                        </li>
                        <li>
                            <span :class="{ active: tabIndex === 2 }" @click="tabChecked(2)">详情</span>
                        </li>
                    </ul>
                </li>
                <li class="tr">
                    <span class="icon-share" @click="share"></span>
                </li>
            </ul>
        </div>
        <div class="tab">
            <div class="tab-cont">
                <Params />
                <Comments ref="comments" />
                <Detail ref="detail" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Prop,
        Vue,
        Watch
    } from 'vue-property-decorator'
    import Detail from './detail.vue'
    import Comments from './comments.vue'
    import Params from './params.vue'
    @Component({
        components: {
            Detail,
            Comments,
            Params
        }
    })
    export default class ShopContent extends Vue {
        get load() {
            return this.$store.state.goodList.comments.length > 0;
        }
        @Prop() public scrollTop!: number;
        private tabIndex: number = 0;
        private offset: number[] = [];
        private opacity: string = '';
        private opacityMenu: string = 'opacity: 0; display: none';
        private back() {
            this.$router.back();
        }
        private share() {
            console.log('share: ', this.$route.query.gid);
        }
        @Watch('scrollTop')
        public changeScroll() {
            const top = this.scrollTop > 360 ? 360 : this.scrollTop;
            // console.log(top)
            let opacity = (top / 360).toFixed(2);
            const bg = 'rgba(255,255,255,' + opacity + ")"
            if (this.load && this.offset.length === 0) {
                this.offset.push(0);
                setTimeout(() => {
                    this.offset.push(this.$refs.comments.$el.offsetTop - 32);
                    this.offset.push(this.$refs.detail.$el.offsetTop - 32);
                }, 1e2);
            }
            if (this.offset.length > 0) {
                if (this.scrollTop > this.offset[2]) {
                    this.tabIndex = 2;
                } else if (this.scrollTop > this.offset[1]) {
                    this.tabIndex = 1;
                } else {
                    this.tabIndex = 0;
                }
            }
            this.opacity = 'background-color: ' + bg;
            if (top === 0) {
                opacity = '0; display: none';
            }
            this.opacityMenu = 'opacity: ' + opacity;
        }
         private tabChecked(id: number) {
            if (this.offset.length > 0) {
                let top = this.offset[id];
                if (top !== 0) {
                    top++;
                }
                this.$parent.$el.scrollTop = top;
            }
            this.tabIndex = id
        }
    }
</script>
<style lang="less" scoped>
    #header {
        height: 42px;
        width: 100%;
        position: fixed;
        left: 0;
        z-index: 2;
        top: 0;
        overflow: hidden;
        li {
            height: 42px;
        }
        span {
            display: inline-block;
            width: 42px;
            height: 22px;
            line-height: 22px;
            padding: 10px 0;
            cursor: pointer;
        }
        .tab-head {
            height: 42px;
            line-height: 42px;
            font-size: 14px;
            color: #666;
            span {
                width: 100%;
                &.active {
                    color: rgb(233, 127, 127);
                }
            }
        }
    }
</style>
