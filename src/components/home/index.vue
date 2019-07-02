<template>
    <div class="homeIndex">
        <Banner/>
        <Gongge/>
        <Shop/>
        <div class="center">
            聚划算
        </div>
    </div>
</template>
<script lang="ts">
    import {
        Component,
        Prop,
        Vue
    } from 'vue-property-decorator'
    import Banner from './Banner.vue'
    import Gongge from './Gongge.vue'
    import Shop from './Shop.vue'
    @Component({
        components: {
            Banner,
            Gongge,
            Shop
        }
    })
    export default class homeIndex extends Vue {
    }
</script>
<style lang="less" scoped>
 .homeIndex{
    // background-color: #ff00ff
 }
</style>
