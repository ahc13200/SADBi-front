export default [
    {
        path: '/admin/bank_list',
        name: 'bank_list',
        component:()=> import('@/modules/admin/pages/bank/list/bank_list.vue'),
    },
    {
        path: '/admin/bank_form',
        name: 'bank_form',
        component:()=> import('@/modules/admin/pages/bank/form/bank_form.vue'),
    },
]
