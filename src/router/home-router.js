
import Home from '@/components/Home.vue';
import Table from '@/components/HomeNavPages/Table.vue';
import Form from '@/components/HomeNavPages/Form.vue';
import Chart from '@/components/HomeNavPages/Chart.vue';

import Page4 from '@/components/HomeNavPages/Page4.vue';
import Page5 from '@/components/HomeNavPages/Page5.vue';
import Page6 from '@/components/HomeNavPages/Page6.vue';

import EChart from '@/components/HomeNavPages/EChart.vue';


const routes = [
    {
        path: '/home',
        component: Home,
        name: '导航一',
        iconCls: 'fa fa-envelope',
        children: [
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/chart', component: Chart, name: ' Chart' },
        ],
    }, {
        path: '/home',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: 'Page4' },
            { path: '/page5', component: Page5, name: 'Page5' },
            { path: '/page6', component: Page6, name: 'Page6' },
        ],
    }, {
        path: '/home',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        leaf: true, // 只有一个节点
        children: [
            { path: '/echart', component: EChart, name: 'EChart' },
        ],
    },

    // TODO add more...
];

export default routes;
