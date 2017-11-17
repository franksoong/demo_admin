/*
 * @Author: soong
 * @Date: 2017-11-16 21:36:09
 * @Last Modified by: soongppp
 * @Last Modified time: 2017-11-17 17:46:59
 */
<template>
    <new-layout>
        <div slot='header'>
            <hamburger @statechanged="toggerSidePanel"></hamburger>
            Header
        </div>
        <div slot='aside'>Aside
            <hamburger @statechanged="toggerSidePanel"></hamburger>
        </div>
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
import Hamburger from '@/widgets/Hamburger.vue';


export default {
    // components wil be used here
    components: { NewLayout, Hamburger },
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

        toggerSidePanel(state) {
            if (state) {
                console.log('toggerSidePanel on');
                console.log('hi');
            } else {
                console.log('toggerSidePanel off');
            }
        },


    },

    mounted() {
        console.log('Home mounted!');
    },
};

</script>


<style scoped lang='scss'>

</style>
