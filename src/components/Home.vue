/*
 * @Author: soong
 * @Date: 2017-11-16 21:36:09
 * @Last Modified by: soongppp
 * @Last Modified time: 2017-11-17 17:46:59
 */
<template>
    <new-layout ref="layout">
        <template slot='header'>
            <el-row class="header">
                <el-col :span="10" class="icon">
                    <hamburger @statechanged="hamburgerToggled"></hamburger>
                </el-col>
                <el-col :span="10" class="logo">
                    Dashboard
                </el-col>
                <el-col :span="4" class="userinfo">
                    <el-dropdown trigger="hover">
                        <span class="el-dropdown-link userinfo-inner"><img :src="this.userAvatar" /> {{userName}}</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>我的消息</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </template>
        <template slot='aside'>
            anything here...
        </template>
        <template slot='main'>
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
        </template>
        <template slot='footer'>
            <el-row>
                <el-col :span="8">@Copywright NeoSoong</el-col>
                <el-col :span="8">Built 20171120</el-col>
                <el-col :span="8">Contact Me</el-col>
            </el-row>
        </template>
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

.container {
    //position: absolute;
    //top: 0px;
    //bottom: 0px;
    //width: 100%;
    .header {
        height: 60px; //line-height: 60px;
        //background: $color-primary;
        color: #fff;
        .userinfo {
            text-align: right;
            padding-right: 35px;
            float: right;
            .userinfo-inner {
                cursor: pointer;
                color: #fff;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;
                    margin: 10px 0px 10px 10px;
                    float: right;
                }
            }
        }
        .logo {
            //width:230px;
            height: 60px;
            font-size: 22px;
            padding-left: 20px;
            padding-right: 20px;
            border-color: rgba(238, 241, 146, 0.3);
            border-right-width: 1px;
            border-right-style: solid;
            img {
                width: 40px;
                float: left;
                margin: 10px 10px 10px 18px;
            }
            .txt {
                color: #fff;
            }
        }
    }
}

.footer {}
</style>
