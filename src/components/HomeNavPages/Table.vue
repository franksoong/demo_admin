/*
 * @Author: soong
 * @Date: 2017-11-16 21:36:27
 * @Last Modified by: soongppp
 * @Last Modified time: 2017-11-17 15:03:30
 */
<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.name" placeholder="Name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getUsers">Search</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">Add</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <!-- main table  -->
        <el-table :data="users" class="maintable" highlight-current-row v-loading="listLoading" @selection-change="selectionChange">
            <el-table-column label="Select" width="55" type="selection"></el-table-column>
            <el-table-column label="Id" width="60" type="index"></el-table-column>
            <el-table-column label="Name" width="150" prop="name" sortable></el-table-column>
            <el-table-column prop="gender" label="Gender" width="150" :formatter="formatGender" sortable></el-table-column>
            <el-table-column prop="age" label="Age" width="100" sortable></el-table-column>
            <el-table-column prop="birth" label="Birthday" width="150" sortable></el-table-column>
            <el-table-column label="Address" min-width="180" prop="addr" sortable></el-table-column>
            <el-table-column label="Action" width="200">
                <template slot-scope="scope">
                    <el-button type="" size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-button type="danger" @click="batchRemove" :disabled="this.selections.length===0">批量删除</el-button>
            <el-pagination class="pager" layout="prev, pager, next" @current-change="handleCurrentPageChange" :page-size="20" :total="total">
            </el-pagination>
        </el-col>

        <!--新增界面-->
        <el-dialog title="新增" :visible.sync="addFormVisible" :before-close="handleClose" :close-on-click-modal="false">
            <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="addForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="addForm.gender">
                        <el-radio class="radio" :label="1">男</el-radio>
                        <el-radio class="radio" :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input-number v-model="addForm.age" :min="0" :max="150"></el-input-number>
                </el-form-item>
                <el-form-item label="生日">
                    <el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input type="textarea" v-model="addForm.addr"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="addFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
            </div>
        </el-dialog>

        <!--编辑界面-->
        <el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
            <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="editForm.gender">
                        <el-radio class="radio" :label="1">男</el-radio>
                        <el-radio class="radio" :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
                </el-form-item>
                <el-form-item label="生日">
                    <el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input type="textarea" v-model="editForm.addr"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>

    </section>
</template>

<script>
import api from '@/api';
import util from '@/common/util';
import * as _ from 'lodash';


export default {
    data() {
        return {
            // filter related
            filters: {
                name: '',
            },

            // table related
            users: [],
            total: 0,
            page: 1,
            listLoading: false,
            selections: [],

            // new item related
            addFormVisible: false,
            addLoading: false,
            addForm: {
                name: '',
                gender: -1,
                age: 0,
                birth: '',
                addr: '',
            },
            addFormRules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
            },


            // edit item related
            editFormVisible: false,
            editLoading: false,
            editForm: {
                name: '',
                gender: -1,
                age: 0,
                birth: '',
                addr: '',
            },
            editFormRules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
            },

        };
    },
    computed: {
        // total() {
        //     return this.users.length;
        // },
    },

    watch: {
        'filters.name': _.debounce(function () {
            this.getUsers();
        }, 500),
    },

    methods: {
        getUsers() {
            const para = {
                page: this.page,
                filters: this.filters,
            };

            this.listLoading = true;
            api.getUserListPage(para).then((res) => {
                this.total = res.data.total;
                this.users = res.data.users;
                this.listLoading = false;
            });
        },

        formatGender(row, column) {
            return row.gender === 1 ? 'Male' : row.gender === 0 ? 'Female' : 'None';
        },

        handleCurrentPageChange(val) {
            this.page = val;
            this.getUsers();
        },

        handleAdd() {
            this.addFormVisible = true;
            this.addForm = {
                name: '',
                gender: -1,
                age: 0,
                birth: '',
                addr: '',
            };
        },


        handleEdit(index, row) {
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
        },

        addSubmit() {
            this.$refs.addForm.validate((valid) => {
                if (valid) {
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.addLoading = true;

                        const para = Object.assign({}, this.addForm);
                        para.birth = (!para.birth || para.birth === '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                        api.addUser(para).then((res) => {
                            this.addLoading = false;

                            this.$message({
                                message: '提交成功',
                                type: 'success',
                            });
                            this.$refs.addForm.resetFields();
                            this.addFormVisible = false;
                            this.getUsers();
                        });
                    });
                }
            });
        },

        editSubmit() {
            this.$refs.editForm.validate((valid) => {
                if (valid) {
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.editLoading = true;

                        const para = Object.assign({}, this.editForm);
                        para.birth = (!para.birth || para.birth === '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                        api.editUser(para).then((res) => {
                            this.editLoading = false;

                            this.$message({
                                message: '提交成功',
                                type: 'success',
                            });
                            this.$refs.editForm.resetFields();
                            this.editFormVisible = false;
                            this.getUsers();
                        });
                    });
                }
            });
        },

        handleClose(done) {
            done();
            // this.$confirm('确认关闭？')
            //     .then((_) => {
            //         done();
            //     })
            //     .catch((_) => { });
        },

        selectionChange(selections) {
            this.selections = selections;
        },

        handleDel(index, row) {
            this.$confirm('确认删除该记录吗?', '提示', {
                type: 'warning',
            }).then(() => {
                this.listLoading = true;

                const para = { id: row.id };
                api.removeUser(para).then((res) => {
                    this.listLoading = false;

                    this.$message({
                        message: '删除成功',
                        type: 'success',
                    });
                    this.getUsers();
                });
            }).catch(() => {

            });
        },


        batchRemove() {
            const ids = this.selections.map(item => item.id).toString();
            this.$confirm('确认删除选中记录吗？', '提示', {
                type: 'warning',
            })
                .then(() => {
                    this.listLoading = true;
                    // NProgress.start();
                    const para = { ids };
                    api.batchRemoveUser(para).then((res) => {
                        this.listLoading = false;
                        // NProgress.done();
                        this.$message({
                            message: '删除成功',
                            type: 'success',
                        });
                        this.getUsers();
                    });
                })
                .catch(() => {

                });
        },
    },

    mounted() {
        this.getUsers();
    },

};
</script>


<style scoped lang='scss'>
.pager {
    float: right;
    background: #f2f2f2;
}

.toolbar {
    background: #f2f2f2;
    padding: 10px;
    margin: 10px 0;
}

.maintable{
    width: 100%;
}

</style>
