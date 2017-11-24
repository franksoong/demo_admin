/*
 * @Author: soong
 * @Date: 2017-11-15 16:55:10
 * @Last Modified by: soong
 * @Last Modified time: 2017-11-15 16:55:51
 */
<template>
    <el-container class="layout">
        <el-header class="header">
            <slot name="header">header</slot>
        </el-header>

        <el-container class="content">
            <el-aside class="aside" :style="asideStyle" resize>
                <!--for animation  -->
                <el-container class="asidecontent" :class="{collapsed: !asideActive}">
                    <slot name="aside">aside</slot>
                </el-container>
            </el-aside>
            <el-container>
                <el-main class="main">
                    <slot name="main">main</slot>
                </el-main>
            </el-container>
        </el-container>

        <!-- <el-footer>
            <slot name="footer">footer</slot>
        </el-footer> -->
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
        const a = this.$refs.aside;

        console.log(`NewLayout mounted!: ${a}`);
        // clear aside sytle
    },
};
</script>


<style lang='scss'>
@import '~@/styles/vars.scss';

.layout {
    min-height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;

    .header{
        padding: 0;
    };

    .content {
        //margin-top: 60px;
        .aside {
            transition: $--all-transition;
            .asidecontent {
                padding: 20px;
                border-right: 1px solid $--border-color-base;
                box-shadow: 0 0 10px $--border-color-base;
                display: block;
                height: 100%;
                .collapsed {
                    display: none;
                }
            }
        }
        .main {
            padding: 20px;
        }
    }
}
</style>
