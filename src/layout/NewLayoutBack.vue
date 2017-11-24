/*
 * @Author: soong
 * @Date: 2017-11-15 16:55:10
 * @Last Modified by: soong
 * @Last Modified time: 2017-11-15 16:55:51
 */
<template>
    <el-container class="layout">
        <el-header class="header" :style="">
            <slot name="header">header</slot>
        </el-header>
        <el-container class="center">
            <el-aside class="aside" :style="asideStyle">
                <!--for animation  -->
                <el-container class="asidecontent" :class="{collapsed: !asideActive}">
                    <slot name="aside">aside</slot>
                </el-container>
            </el-aside>
            <el-container class="main">
                <el-main>
                    <slot name="main">main</slot>
                </el-main>
            </el-container>
        </el-container>
        <el-footer class="footer" ref="footer">
            <slot name="footer">footer</slot>
        </el-footer>
    </el-container>
</template>




<script type="text/babel">
    export default {
        name: 'NewLayout',
        props: {},
        components: {},
        data() {
            return {
                asideActive: true,
            };
        },
        computed: {
            asideStyle() {
                let width = '20%';
                if (!this.asideActive) {
                    width = '0';
                }
                return {
                    width,
                };
            },
        },
        methods: {
            toggleAside(state) {
                this.asideActive = !state;
            },
        },
        mounted() {
            // clear aside sytle
        },
    };
</script>


<style lang='scss'>
    @import "~@/styles/vars.scss";
    .layout {
        min-height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        .header {
            border-radius: 1px;
            background-clip: padding-box;
            margin: 0;
            width: 100%;
            background: $color-primary;
            border: 1px solid $color-primary;
            box-shadow: 0 0 2px $color-primary;
            display: flex;
            align-items: center;
            //position: fixed;
            z-index: 999;
        }
        .center {
            //margin-top: 60px;
            .aside {
                //transition: all 4.4s linear;
                transition: width .2s linear;
                .asidecontent {
                    padding: 20px;
                    border-right: 1px solid $border-level1;
                    box-shadow: 0 0 10px $border-level1;
                    display: block;
                    height: 100%;
                    .collapsed {
                        display: none;
                    }
                }
            }
            .main {}
        }
        .footer {
            @extend .header;
            padding-bottom: 0;
            position: relative;
        }
    }
</style>
