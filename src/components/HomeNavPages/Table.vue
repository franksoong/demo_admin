<template>
    <div class="container">
        <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selectionChange">
            <el-table-column label="" type="selection"></el-table-column>
            <el-table-column label="" type="index"></el-table-column>
            <el-table-column label="Name" prop="name" sortable></el-table-column>
            <el-table-column label="Address" prop="addr" sortable></el-table-column>
            <el-table-column label="Action">
                <template scope="scope">
                    <el-button type="" size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import api from '@/api';


export default {
  data() {
    return {
      users: [],
      page: 1,
      filters: {
        name: '',
      },
      listLoading: false,
      selections: [],
    };
  },
  computed: {
    total() {
      return this.data.users.length;
    },
  },
  methods: {
    getUsers() {
      const para = {
        page: this.page,
        name: this.filters.name,
      };

      this.listLoading = true;
      api.getUserListPage(para).then((res) => {
        this.users = res.data.users;
        this.listLoading = false;
      });
    },

    selectionChange() {
      console.log('selectionChange');
    },

    handleEdit() {
      console.log('selectionChange');
    },

    handleDel() {
      console.log('selectionChange');
    },
  },
  mounted() {
    this.getUsers();
  },

};
</script>


<<style scoped lang='scss'>

</style>
