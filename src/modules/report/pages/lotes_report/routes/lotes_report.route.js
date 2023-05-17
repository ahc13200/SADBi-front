export default [
    {
        path: '/report/lotes_report_list',
        name: 'lotes_report_list',
        component:()=> import('@/modules/report/pages/lotes_report/list/lotes_report_list.vue'),
    },
    {
        path: '/report/lotes_report_form',
        name: 'lotes_report_form',
        component:()=> import('@/modules/report/pages/lotes_report/form/lotes_report_form.vue'),
    },
]
