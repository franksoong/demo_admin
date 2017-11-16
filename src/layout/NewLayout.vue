/*
 * @Author: soong
 * @Date: 2017-11-15 16:55:10
 * @Last Modified by: soong
 * @Last Modified time: 2017-11-15 16:55:51
 */
<template>
    <el-container>
        <el-header>
            <slot name="header">header</slot>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <slot name="aside">aside</slot>
            </el-aside>
            <el-container>
                <el-main>
                    <slot name="main">main</slot>
                </el-main>
            </el-container>
        </el-container>
        <el-footer>
            <slot name="footer">footer</slot>
        </el-footer>
    </el-container>
</template>

<script type="text/babel">
export default {
    name: 'NewLayout',
    props: {},
    components: {},
    data() { return {}; },
    computed: {},
    methods: {},
    mounted() {
        console.log('NewLayout mounted!');
    },
};

</script>


<<style scoped lang='scss'>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 600px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100px;
  }



</style>
