/*
 * @Author: soong
 * @Date: 2017-11-16 21:35:52
 * @Last Modified by:   soong
 * @Last Modified time: 2017-11-16 21:35:52
 */


<template>
    <el-form :model='account' :rules="rules" ref="loginForm" label-position="left" label-width="0px" class="login-container">
        <h3 class="title">Login</h3>
        <el-form-item prop="username">
            <el-input type="text" v-model="account.username" auto-complete="off" placeholder="user name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="account.password" auto-complete="off" placeholder="password"></el-input>
        </el-form-item>
        <el-checkbox v-model="rememberMe" checked class="remember">Remember me</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="login" :loading="logining">Login</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import api from '@/api';


export default {
    data() {
        return {
            logining: false,
            account: {
                username: 'admin',
                password: '123456',
            },
            rules: {
                username: [
                    { required: true, message: 'please input user name', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: 'please input password', trigger: 'blur' },
                ],
            },
            rememberMe: true,
        };
    },

    methods: {
        collapse() {
            this.collapsed = !this.collapsed;
        },

        login(event) {
            const self = this;
            self.$refs.loginForm.validate((valid) => {
                if (valid) {
                    self.logining = true;

                    const loginParams = { username: self.account.username, password: self.account.password };
                    console.log(`hi ${loginParams}`);
                    api.requestLogin(loginParams).then((data) => {
                        self.logining = false;

                        const { msg, code, user } = data;
                        if (code !== 200) {
                            self.$message({
                                message: msg,
                                type: 'error',
                            });
                        } else {
                            sessionStorage.setItem('user', JSON.stringify(user));
                            self.$router.push({ path: '/table' });
                        }
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

    },
};

</script>


<<style scoped lang='scss'>
  .login-container {
    border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    color:red;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }

</style>
