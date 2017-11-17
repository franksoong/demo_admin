/*
 * @Author: soong
 * @Date: 2017-11-16 21:36:09
 * @Last Modified by:   soong
 * @Last Modified time: 2017-11-16 21:36:09
 */
<template>
    <new-layout>
        <div slot='header'>Header</div>
        <div slot='aside'>Aside</div>
        <div slot='main'>Main
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <div slot='footer'>Footer</div>
    </new-layout>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import NewLayout from '@/layout/NewLayout.vue';


export default {
    // components wil be used here
    components: { NewLayout },
    data() {
        return {
            brand: 'Vue Dashboard',
            collapsed: false,
            userName: '',
            userAvatar: '',
        };
    },

    methods: {
        collapse() {
            this.collapsed = !this.collapsed;
        },

    },

    mounted() {
        console.log('Home mounted!');
    },
};

</script>


<style scoped lang='scss'>

</style>
