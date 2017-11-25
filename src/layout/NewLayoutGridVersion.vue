/*
 * @Author: soong
 * @Date: 2017-11-15 16:55:10
 * @Last Modified by: soong
 * @Last Modified time: 2017-11-15 16:55:51
 */
<template>
    <el-row class="layout">
        <el-row class="header">
            <slot name="header">header</slot>
        </el-row>
        <el-row class="center">
            <el-col class="aside" :class="{showaside: asideActive}" :span="asideActive ? 4: 0">
                <slot name="aside">aside</slot>
            </el-col>
            <el-col class="main" :class="{showaside: asideActive}" :span="asideActive ? 20: 24">
                <slot name="main">main</slot>
            </el-col>
        </el-row>
        <el-row class="footer">
            <slot name="footer">footer</slot>
        </el-row>
    </el-row>
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
    computed: {},
    methods: {
        toggleAside(state) {
            this.asideActive = state;
        },
    },
    mounted() {
        console.log('NewLayout mounted!');
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
        border-radius: 2px;
        background-clip: padding-box;
        margin: 0;
        width: 100%;
        padding: 5px 5px;
        background: $color-primary;
        border: 1px solid $color-primary;
        box-shadow: 0 0 5px $color-primary;
        vertical-align: middle;
        line-height: 35px;
    }

    .center {
        .aside {

            &.showaside {
                padding: 5px 5px;
                border-right: 1px solid $border-level1;
                box-shadow: 0 0 10px $border-level1;
            }
        }
        .main {
            padding: 5px 5px;
        }
    }

    .footer {
        @extend .header;
        padding-bottom: 0;
    }
}
</style>
