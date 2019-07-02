<template>
    <div class="list">
        <TextHeader :title="title" />
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
    import Content from '@/components/list/index.vue'
    import TextHeader from '@/components/layout/TextHeader.vue';
    import Footer from '@/components/layout/Footer.vue'
    @Component({
        components: {
            Content,
            TextHeader,
            Footer
        }
    })
    export default class Gongge extends Vue {
        /**
         * create
         */
        public created() {
            const Lid = this.$route.query.Lid
            this.$store.dispatch('intercartPage', Lid)
        }
        public beforeMount() {
            if (!this.$route.query.Lid) {
                this.$router.replace('/');
            }
        }
        get title() {
            return this.$store.state.TitleList
        }
    }
</script>
<style lang="less" scoped>

</style>

