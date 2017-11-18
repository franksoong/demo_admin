/*
 * @Author: soong
 * @Date: 2017-11-16 21:36:09
 * @Last Modified by: soongppp
 * @Last Modified time: 2017-11-17 17:46:59
 */
<template>
    <new-layout ref="layout">
        <div slot='header'>
            <hamburger @statechanged="hamburgerToggled"></hamburger>
        </div>
        <div slot='aside'>
            anything here...
        </div>
        <div slot='main' class="content-container">
            <el-col :span="24" class="breadcrumb-container">
                <strong class="title">{{$route.name}}</strong>
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col :span="24" class="content-wrapper">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-col>
        </div>
        <div slot='footer'></div>
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

        hamburgerToggled(state) {
            this.$refs.layout.toggleAside(state);
        },


    },

    mounted() {
        console.log('Home mounted!');
    },
};

</script>


<style scoped lang='scss'>
.content-container {
    // background: #f1f2f7;
    flex: 1; // position: absolute;
    // right: 0px;
    // top: 0px;
    // bottom: 0px;
    // left: 230px;
    overflow-y: auto;
    padding: 20px;
    .breadcrumb-container {
        //margin-bottom: 15px;
        .title {
            width: 200px;
            float: left;
            color: #475669;
        }
        .breadcrumb-inner {
            float: right;
        }
    }
    .content-wrapper {
        box-sizing: border-box;
    }
}
</style>
