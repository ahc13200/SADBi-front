export default [
    {
        path: '/report/cust_identification_report_list',
        name: 'cust_identification_report_list',
        component:()=> import('@/modules/report/pages/cust_identification_report/list/cust_identification_report_list.vue'),
    },
    {
        path: '/report/cust_identification_report_form',
        name: 'cust_identification_report_form',
        component:()=> import('@/modules/report/pages/cust_identification_report/form/cust_identification_report_form.vue'),
    },
]
