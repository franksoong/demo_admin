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
            <div>
                <slot name="aside">aside</slot>
            </div>

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
    },
    methods: {
    },
    mounted() {
    },
};
</script>


<style lang='scss'>

.layout {
    min-height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;

    .header {
        padding: 0;
    }

    .content {
        margin-top: 1px;

        .main {
            padding: 20px;
        }
    }
}
</style>
