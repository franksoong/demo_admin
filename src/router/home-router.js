
import Home from '@/components/Home.vue'
import Table from '@/components/HomeNavPages/Table.vue'
import Form from '@/components/HomeNavPages/Form.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',
        children: [
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
        ]
    },

    // TODO add more...
];

export default routes;