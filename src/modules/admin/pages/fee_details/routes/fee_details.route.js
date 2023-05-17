export default [
    {
        path: '/admin/fee_details_list',
        name: 'fee_details_list',
        component:()=> import('@/modules/admin/pages/fee_details/list/fee_details_list.vue'),
    },
    {
        path: '/admin/fee_details_form',
        name: 'fee_details_form',
        component:()=> import('@/modules/admin/pages/fee_details/form/fee_details_form.vue'),
    },
]
