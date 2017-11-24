/*
 * @Author: soong
 * @Date: 2017-11-16 21:36:09
 * @Last Modified by: soongppp
 * @Last Modified time: 2017-11-17 17:46:59
 */
<template>
    <new-layout ref='layout'>
        <div slot='header'>
            <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="" active-text-color="">
                <el-menu-item index="0">
                    <hamburger @statechanged="hamburgerToggled"></hamburger>
                </el-menu-item>
                <el-menu-item index="1">Processing Center</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">Workspace</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">
                    <a href="#" target>Orders</a>
                </el-menu-item>
                <div class="right">
                    User
                </div>
            </el-menu>
        </div>

        <template slot='aside'>
            anything here...
        </template>

        <template slot='main'>
            <el-row :span="24" class="breadcrumb-container">
                <strong class="title">{{$route.name}}</strong>
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-row>
            <el-row :span="24" class="content-wrapper">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-row>
        </template>
    </new-layout>
</template>

<script>
import NewLayout from '@/layout/NewLayout.vue';
import Hamburger from '@/widgets/Hamburger.vue';


export default {
    // components wil be used here
    components: {
        NewLayout,
        Hamburger,
    },
    data() {
        return {
            brand: 'Vue Dashboard',
            collapsed: false,
            userName: '',
            userAvatar: '',
            activeIndex: '1',
            activeIndex2: '1',
        };
    },

    methods: {
        collapse() {
            this.collapsed = !this.collapsed;

            // TODO:

            // FIXME:

            // TODO
        },

        hamburgerToggled(state) {
            this.$refs.layout.toggleAside(state);
        },


    },

    mounted() {
        let user = sessionStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            this.userName = user.name || '';
            this.userAvatar = user.avatar || '';
        }
    },
};
</script>


<style scoped lang='scss'>
.right {
    float: right;
    line-height: 60px;
    padding: 0 20px;
}

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


</style>
