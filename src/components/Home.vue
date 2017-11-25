/*
 * @Author: soong
 * @Date: 2017-11-16 21:36:09
 * @Last Modified by: soongppp
 * @Last Modified time: 2017-11-17 17:46:59
 */
<template>
    <new-layout>
        <template slot='header'>
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="" active-text-color="" :default-active="activeIndex">
                <div class="float-left toggle_aside">
                    <hamburger @statechanged="hamburgerToggled"></hamburger>
                </div>
                <div class="float-left brand">
                    <b>LOGO@MyPlayground</b>
                </div>

                <el-menu-item index="1">Home</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">Workspace</template>
                    <el-menu-item index="2-1">project 1</el-menu-item>
                    <el-menu-item index="2-2">project 2</el-menu-item>
                    <el-menu-item index="2-3">project 3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">
                    Contact
                </el-menu-item>
                <div class="float-right login_users">
                    User
                </div>
            </el-menu>
        </template>

        <template slot='aside'>
            <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"
            :collapse="collapsed" :default-active="$route.path" unique-opened router>
                <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
                    <el-submenu :index="index+''" v-if="!item.leaf">
                        <template slot="title">
                            <i :class="item.iconCls"></i>
                            <span slot="title">{{item.name}}</span>
                        </template>

                        <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
                            {{child.name}}
                        </el-menu-item>
                    </el-submenu>

                    <el-menu-item v-if="item.leaf && item.children.length>0" :index="item.children[0].path">
                        <i :class="item.iconCls"></i>
                        <span slot="title">{{item.children[0].name}}</span>
                    </el-menu-item>
                </template>

                <!--
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-menu-item index="1-1">Table</el-menu-item>
                    <el-menu-item index="1-2">Form</el-menu-item>
                    <el-menu-item index="1-3">Report</el-menu-item>
                        <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航三</span>
                </el-menu-item> -->
            </el-menu>
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
        };
    },

    methods: {

        handleOpen() {
            // TODO:
        },

        handleClose() {
            // TODO:
        },

        handleSelect() {
            // TODO:
        },

        hamburgerToggled(state) {
            this.collapsed = state;
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
.el-menu-vertical-demo {
    height: 100%;
    &:not(.el-menu--collapse) {
        width: 200px;
    }

    &.el-menu--collapse {
        // display: none;
    }
}


.toggle_aside,
.brand {
    line-height: 60px;
    padding: 0 20px;
    &:focus {
        outline: none;
    }
}


.login_users {
    line-height: 60px;
    padding: 0 20px;
    &:focus {
        outline: none;
    }
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
