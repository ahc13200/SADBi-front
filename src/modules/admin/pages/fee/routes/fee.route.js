export default [
    {
        path: '/admin/fee_list',
        name: 'fee_list',
        component:()=> import('@/modules/admin/pages/fee/list/fee_list.vue'),
    },
    {
        path: '/admin/fee_form',
        name: 'fee_form',
        component:()=> import('@/modules/admin/pages/fee/form/fee_form.vue'),
    },
]
